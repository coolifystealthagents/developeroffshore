export type ArticleKind = 'blog' | 'research' | 'alternatives';

const RESEARCH_HEROES: Record<string, string> = {
  'offshore-developer-api-contract-drift-research-2026-08-20': '/research-heroes/2026-08-20/api-contract-drift.png',
  'offshore-developer-database-migration-reversal-research-2026-08-20': '/research-heroes/2026-08-20/database-migration.png',
  'offshore-developer-async-handoff-assumption-research-2026-08-20': '/research-heroes/2026-08-20/async-handoff.png',
  'offshore-developer-alert-false-positive-research-2026-08-20': '/research-heroes/2026-08-20/alert-investigation.png',
  'offshore-developer-test-environment-parity-research-2026-08-20': '/research-heroes/2026-08-20/environment-parity.png',
};

const BLOG_HEROES: Record<string, string> = {
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
  if (kind === 'research' && RESEARCH_HEROES[slug]) return { src: RESEARCH_HEROES[slug], alt: `${title} featured thumbnail`, backgroundIndex: -1 } as const;
  if (kind === 'blog' && BLOG_HEROES[slug]) return { src: BLOG_HEROES[slug], alt: `${title} featured thumbnail`, backgroundIndex: -1 } as const;
  const backgroundIndex = stableHash(`${kind}:${slug}`) % BACKGROUNDS.length;
  return {
    src: BACKGROUNDS[backgroundIndex],
    alt: `${title} featured thumbnail`,
    backgroundIndex,
  } as const;
}

export { BACKGROUNDS as articleThumbnailBackgrounds };
