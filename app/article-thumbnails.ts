export type ArticleKind = 'blog' | 'research' | 'alternatives';

const BACKGROUNDS = [
  '/visuals/operations-dashboard.svg',
  '/visuals/philippines-time-zone-handoff.svg',
  '/visuals/quality-scorecard.svg',
  '/visuals/launch-roadmap.svg',
  '/visuals/va-workflow.svg',
  '/visuals/managed-team-comparison.svg',
] as const;

const AUGUST_20_HEROES: Record<string, string> = {
  'offshore-developer-backlog-refinement-2026-08-20': '/blog-heroes/2026-08-20/backlog-refinement.png',
  'offshore-developer-pull-request-review-2026-08-20': '/blog-heroes/2026-08-20/pull-request-review.png',
  'offshore-developer-technical-discovery-spike-2026-08-20': '/blog-heroes/2026-08-20/discovery-spike.png',
  'offshore-developer-test-fixture-design-2026-08-20': '/blog-heroes/2026-08-20/test-fixtures.png',
  'offshore-developer-legacy-module-handoff-2026-08-20': '/blog-heroes/2026-08-20/legacy-handoff.png',
  'offshore-developer-timezone-planning-2026-08-20': '/blog-heroes/2026-08-20/timezone-planning.png',
  'offshore-developer-api-contract-review-2026-08-20': '/blog-heroes/2026-08-20/api-contract.png',
  'offshore-developer-qa-triage-handoff-2026-08-20': '/blog-heroes/2026-08-20/qa-triage.png',
  'offshore-developer-documentation-maintenance-2026-08-20': '/blog-heroes/2026-08-20/documentation.png',
  'offshore-developer-incident-communications-2026-08-20': '/blog-heroes/2026-08-20/incident-communications.png',
  'offshore-developer-feature-flag-governance-2026-08-20': '/blog-heroes/2026-08-20/feature-flags.png',
  'offshore-developer-access-review-2026-08-20': '/blog-heroes/2026-08-20/access-review.png',
};

function stableHash(value: string) {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function articleThumbnail(kind: ArticleKind, slug: string, title: string) {
  if (kind === 'blog' && AUGUST_20_HEROES[slug]) {
    return { src: AUGUST_20_HEROES[slug], alt: `${title} featured thumbnail`, backgroundIndex: -1 } as const;
  }
  const backgroundIndex = stableHash(`${kind}:${slug}`) % BACKGROUNDS.length;
  return {
    src: BACKGROUNDS[backgroundIndex],
    alt: `${title} featured thumbnail`,
    backgroundIndex,
  } as const;
}

export { BACKGROUNDS as articleThumbnailBackgrounds };
