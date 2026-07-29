export type ArticleKind = 'blog' | 'research' | 'alternatives';

const BACKGROUNDS = [
  '/visuals/operations-dashboard.svg',
  '/visuals/philippines-time-zone-handoff.svg',
  '/visuals/quality-scorecard.svg',
  '/visuals/launch-roadmap.svg',
  '/visuals/va-workflow.svg',
  '/visuals/managed-team-comparison.svg',
] as const;

function stableHash(value: string) {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function articleThumbnail(kind: ArticleKind, slug: string, title: string) {
  const backgroundIndex = stableHash(`${kind}:${slug}`) % BACKGROUNDS.length;
  return {
    src: BACKGROUNDS[backgroundIndex],
    alt: `${title} featured thumbnail`,
    backgroundIndex,
  } as const;
}

export { BACKGROUNDS as articleThumbnailBackgrounds };
