import 'server-only';

const SITE_ID = 'developer-offshore';

export interface FallbackLeadPayload {
  name: string;
  email: string;
  phone: string;
  business?: string;
  message?: string;
  companySize?: string;
  positions?: string;
  referral?: string;
  pageUrl: string;
  userAgent?: string;
}

function escapeMarkdown(value: string | undefined) {
  return String(value || '').replace(/[|`*_\\]/g, (character) => `\\${character}`).slice(0, 1_000);
}

function resemblesRandomGarbage(value: string) {
  if (!value || /\s/.test(value) || !/^[A-Za-z0-9]+$/.test(value)) return false;
  const letters = value.match(/[A-Za-z]/g) ?? [];
  let transitions = 0;
  for (let index = 1; index < value.length; index += 1) {
    const previous = value[index - 1];
    const current = value[index];
    if (/[A-Za-z]/.test(previous) && /[A-Za-z]/.test(current) && (previous === previous.toUpperCase()) !== (current === current.toUpperCase())) transitions += 1;
  }
  if (value.length >= 12 && letters.length >= 8) {
    const vowelRatio = letters.filter((letter) => 'aeiouAEIOU'.includes(letter)).length / letters.length;
    if (vowelRatio < 0.25 || vowelRatio > 0.55) return true;
  }
  return value.length >= 8 && transitions >= 4;
}

/** Returns true only after the fallback destination acknowledges the lead. */
export async function sendLeadFallbackToMattermost(lead: FallbackLeadPayload): Promise<boolean> {
  const webhook = process.env.SITE_MATTERMOST_FALLBACK_WEBHOOK_URL;
  if (!webhook) {
    console.warn('[lead-fallback] fallback webhook is unavailable');
    return false;
  }
  if (resemblesRandomGarbage(lead.name.trim()) && resemblesRandomGarbage((lead.message || '').trim())) {
    console.warn('[lead-fallback] rejected probable garbage submission');
    return false;
  }

  const lines = [
    `**[SITE-DIRECT:${SITE_ID}] New lead - ${escapeMarkdown(lead.name || lead.email || lead.phone || 'unknown')}**`,
    '_Submitted by the site fallback because primary lead delivery failed_',
    '',
    '| Field | Value |',
    '|---|---|',
    `| Site | ${escapeMarkdown(SITE_ID)} |`,
    `| Name | ${escapeMarkdown(lead.name) || '_(empty)_'} |`,
    `| Email | ${escapeMarkdown(lead.email) || '_(empty)_'} |`,
    `| Phone | ${escapeMarkdown(lead.phone) || '_(empty)_'} |`,
    `| Business | ${escapeMarkdown(lead.business) || '-'} |`,
    `| Company size | ${escapeMarkdown(lead.companySize) || '-'} |`,
    `| Positions | ${escapeMarkdown(lead.positions) || '-'} |`,
    `| Referral | ${escapeMarkdown(lead.referral) || '-'} |`,
    `| Page | ${escapeMarkdown(lead.pageUrl) || '-'} |`,
    `| Time | ${new Date().toISOString()} |`,
    '',
    lead.message ? `**Message:**\n> ${escapeMarkdown(lead.message).replace(/\n/g, '\n> ')}` : '',
  ].filter(Boolean);

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: lines.join('\n'), username: `${SITE_ID} Direct fallback`, icon_emoji: ':warning:' }),
      signal: AbortSignal.timeout(8_000),
      cache: 'no-store',
    });
    if (!response.ok) console.error('[lead-fallback] destination rejected delivery', response.status);
    return response.ok;
  } catch (error) {
    console.error('[lead-fallback] delivery failed', error);
    return false;
  }
}
