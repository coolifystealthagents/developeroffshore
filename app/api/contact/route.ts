import { NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost, type FallbackLeadPayload } from '../../lib/lead-fallback-mattermost';

const MAX_BODY_BYTES = 64_000;
const MAX_FIELD_LENGTH = 4_000;
const WINDOW_MS = 15 * 60_000;
const MAX_RATE_KEYS = 5_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PERSONAL_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com',
  'icloud.com', 'me.com', 'aol.com', 'proton.me', 'protonmail.com', 'gmx.com',
]);
const attempts = new Map<string, number[]>();

function text(form: FormData, key: string, max = MAX_FIELD_LENGTH) {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function errorResponse(status: number) {
  return new Response(
    '<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>Your information was not marked as sent. Please review the form and try again.</p><a href="/contact-us">Return to the contact form</a></main>',
    { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } },
  );
}

function clientKey(request: NextRequest) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || 'unknown';
}

function limited(key: string, maximum: number) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  attempts.delete(key);
  attempts.set(key, recent);
  while (attempts.size > MAX_RATE_KEYS) attempts.delete(attempts.keys().next().value as string);
  return recent.length > maximum;
}

function requestIsSameSite(request: NextRequest) {
  const origin = request.headers.get('origin');
  const fetchSite = request.headers.get('sec-fetch-site');
  const allowed = new Set([
    request.nextUrl.origin,
    'https://developeroffshore.com',
    'https://www.developeroffshore.com',
  ]);
  if (origin) return allowed.has(origin);
  return fetchSite === 'same-origin' || fetchSite === 'same-site';
}

async function readBoundedForm(request: NextRequest, contentType: string) {
  const declaredLength = Number(request.headers.get('content-length') || 0);
  if (!Number.isFinite(declaredLength) || declaredLength > MAX_BODY_BYTES) return null;
  const bytes = await request.arrayBuffer();
  if (bytes.byteLength === 0 || bytes.byteLength > MAX_BODY_BYTES) return null;
  const boundedRequest = new Request(request.url, {
    method: 'POST',
    headers: { 'content-type': contentType },
    body: bytes,
  });
  return boundedRequest.formData();
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  if (!requestIsSameSite(request)) return errorResponse(403);
  if (!contentType.includes('application/x-www-form-urlencoded') && !contentType.includes('multipart/form-data')) return errorResponse(415);
  if (limited(`ip:${clientKey(request)}`, 10)) return errorResponse(429);

  let form: FormData | null;
  try {
    form = await readBoundedForm(request, contentType);
  } catch {
    form = null;
  }
  if (!form) return errorResponse(400);

  if (text(form, 'websiteConfirm') || text(form, 'website_confirm') || text(form, 'website_url') || text(form, 'company_homepage')) return errorResponse(400);

  const firstName = text(form, 'firstName', 100);
  const lastName = text(form, 'lastName', 100);
  const name = `${firstName} ${lastName}`.trim() || text(form, 'name', 200);
  const email = text(form, 'email', 320).toLowerCase();
  const emailDomain = email.split('@')[1] || '';
  const phone = text(form, 'phone', 100) || [text(form, 'countryCode', 10), text(form, 'phoneLocal', 100)].filter(Boolean).join(' ');
  const business = text(form, 'company', 300) || text(form, 'companyName', 300);
  const companySize = text(form, 'companySize', 100);
  const positions = text(form, 'positions', 100) || text(form, 'role', 100);
  const referralChoice = text(form, 'referral', 300) || text(form, 'howTheyHeard', 300);
  const referralSpecify = text(form, 'referralSpecify', 300);
  const referral = referralChoice === 'Other' ? referralSpecify : referralChoice;
  const requestedMessage = text(form, 'message');

  if (!firstName || !lastName || !EMAIL_RE.test(email) || PERSONAL_EMAIL_DOMAINS.has(emailDomain) || !phone || !business || !companySize || !positions || !referralChoice || (referralChoice === 'Other' && !referralSpecify) || !requestedMessage) return errorResponse(422);
  if (limited(`email:${email}`, 3)) return errorResponse(429);

  const pageUrl = request.headers.get('referer') || new URL('/contact-us', request.url).toString();
  const message = [requestedMessage, positions, companySize, text(form, 'website')].filter(Boolean).join('\n');
  const clientEventId = crypto.randomUUID();
  const payload = {
    full_name: name,
    email,
    phone,
    company_name: business,
    message,
    how_they_heard: referral || 'Website contact form',
    client_event_id: clientEventId,
    attribution: {
      source_page: pageUrl,
      landing_page: pageUrl,
      referrer: request.headers.get('referer') || '',
      page_journey: ['Contact form'],
    },
  };
  const fallbackPayload: FallbackLeadPayload = {
    name,
    email,
    phone,
    business,
    message,
    companySize,
    positions,
    referral,
    pageUrl,
    userAgent: request.headers.get('user-agent') || '',
  };

  let accepted = false;
  const token = process.env.LEAD_AUTH_TOKEN;
  const endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
  if (token) {
    try {
      const upstream = await fetch(endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-lead-token': token },
        body: JSON.stringify(payload),
        cache: 'no-store',
        signal: AbortSignal.timeout(12_000),
      });
      const result = await upstream.json().catch(() => null) as { ok?: boolean } | null;
      accepted = upstream.ok && result?.ok === true;
    } catch {
      accepted = false;
    }
  }

  if (!accepted) accepted = await sendLeadFallbackToMattermost(fallbackPayload);
  if (!accepted) return errorResponse(502);

  return NextResponse.json(
    { accepted: true, leadId: clientEventId },
    { status: 202, headers: { 'cache-control': 'no-store' } },
  );
}
