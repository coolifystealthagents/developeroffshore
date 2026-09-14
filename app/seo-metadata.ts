const TITLE_LIMIT = 58;
const DESCRIPTION_LIMIT = 145;

function atWordBoundary(value: string, limit: number) {
  if (value.length <= limit) return value;
  const shortened = value.slice(0, limit - 1);
  const boundary = shortened.lastIndexOf(' ');
  return `${shortened.slice(0, boundary > 35 ? boundary : limit - 1).replace(/[,:; -]+$/, '')}…`;
}

export function compactSeoTitle(value: string) {
  let title = value
    .replace(/ for Offshore Developer Staffing/g, '')
    .replace(/^offshore developer /i, '')
    .replace(/ for (?:distributed|offshore|Philippines-based) (?:software |development |engineering |product |application |web |frontend )?teams$/i, '')
    .replace(/ in (?:distributed|offshore|Philippines-based) (?:software |development |engineering |application )?(?:teams|work)$/i, '');
  return atWordBoundary(title, TITLE_LIMIT);
}

export function compactSeoDescription(value: string) {
  if (value.length <= DESCRIPTION_LIMIT) return value;
  const firstSentence = value.match(/^.+?[.!?](?:\s|$)/)?.[0]?.trim();
  if (firstSentence && firstSentence.length >= 70 && firstSentence.length <= DESCRIPTION_LIMIT) return firstSentence;
  return atWordBoundary(value, DESCRIPTION_LIMIT);
}
