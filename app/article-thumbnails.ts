export type ArticleKind = 'blog' | 'research' | 'alternatives';

const RESEARCH_HEROES: Record<string, string> = {
  'offshore-developer-queue-backpressure-evidence-research-2026-08-21': '/research-heroes/2026-08-21/queue-backpressure.png',
  'offshore-developer-access-review-evidence-research-2026-08-21': '/research-heroes/2026-08-21/access-review.png',
  'offshore-developer-browser-compatibility-evidence-research-2026-08-21': '/research-heroes/2026-08-21/browser-compatibility.png',
  'offshore-developer-feature-flag-expiry-evidence-research-2026-08-21': '/research-heroes/2026-08-21/feature-flag-expiry.png',
  'offshore-developer-requirement-ambiguity-evidence-research-2026-08-21': '/research-heroes/2026-08-21/requirement-ambiguity.png',
  'offshore-developer-api-contract-drift-research-2026-08-20': '/research-heroes/2026-08-20/api-contract-drift.png',
  'offshore-developer-database-migration-reversal-research-2026-08-20': '/research-heroes/2026-08-20/database-migration.png',
  'offshore-developer-async-handoff-assumption-research-2026-08-20': '/research-heroes/2026-08-20/async-handoff.png',
  'offshore-developer-alert-false-positive-research-2026-08-20': '/research-heroes/2026-08-20/alert-investigation.png',
  'offshore-developer-test-environment-parity-research-2026-08-20': '/research-heroes/2026-08-20/environment-parity.png',
};

const BLOG_HEROES: Record<string, string> = {
  'offshore-developer-database-migration-safety-2026-08-21': '/blog-heroes/2026-08-21/database-migration-safety.png',
  'offshore-developer-observability-runbook-2026-08-21': '/blog-heroes/2026-08-21/observability-runbook.png',
  'offshore-developer-design-system-handoff-2026-08-21': '/blog-heroes/2026-08-21/design-system-handoff.png',
  'offshore-developer-background-job-idempotency-2026-08-21': '/blog-heroes/2026-08-21/background-job-idempotency.png',
  'offshore-developer-frontend-performance-regression-2026-08-21': '/blog-heroes/2026-08-21/frontend-performance-regression.png',
  'offshore-developer-privacy-review-workflow-2026-08-21': '/blog-heroes/2026-08-21/privacy-review-workflow.png',
  'offshore-developer-release-candidate-checklist-2026-08-21': '/blog-heroes/2026-08-21/release-candidate-checklist.png',
  'offshore-developer-technical-debt-evidence-2026-08-21': '/blog-heroes/2026-08-21/technical-debt-evidence.png',
  'offshore-developer-api-pagination-review-2026-08-21': '/blog-heroes/2026-08-21/api-pagination-review.png',
  'offshore-developer-qa-test-data-lifecycle-2026-08-21': '/blog-heroes/2026-08-21/qa-test-data-lifecycle.png',
  'offshore-developer-documentation-searchability-2026-08-21': '/blog-heroes/2026-08-21/documentation-searchability.png',
  'offshore-developer-feature-flag-cleanup-2026-08-21': '/blog-heroes/2026-08-21/feature-flag-cleanup.png',
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
