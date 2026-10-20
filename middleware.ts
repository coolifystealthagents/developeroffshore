import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'developeroffshore.com';
const WWW_HOST = 'www.developeroffshore.com';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

function firstHeaderValue(value: string | null) {
  return value?.split(',', 1)[0]?.trim() || '';
}

function normalizedHost(request: NextRequest) {
  const forwarded = firstHeaderValue(request.headers.get('x-forwarded-host'));
  const raw = forwarded || firstHeaderValue(request.headers.get('host')) || request.nextUrl.host;
  return raw.toLowerCase().replace(/:\d+$/, '');
}

function visitorScheme(request: NextRequest) {
  const cloudflare = request.headers.get('CF-Visitor');
  if (cloudflare) {
    try {
      const scheme = JSON.parse(cloudflare)?.scheme;
      if (scheme === 'http' || scheme === 'https') return scheme;
    } catch {
      // A malformed edge header is absent evidence, not a request failure.
    }
  }

  const forwarded = firstHeaderValue(request.headers.get('x-forwarded-proto')).toLowerCase();
  if (forwarded === 'http' || forwarded === 'https') return forwarded;
  return request.nextUrl.protocol.replace(':', '');
}

export function middleware(request: NextRequest) {
  const host = normalizedHost(request);
  const isCanonicalDomain = host === CANONICAL_HOST || host === WWW_HOST;

  if (isCanonicalDomain && (host === WWW_HOST || visitorScheme(request) === 'http')) {
    const destination = new URL(CANONICAL_ORIGIN);
    destination.pathname = request.nextUrl.pathname;
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
