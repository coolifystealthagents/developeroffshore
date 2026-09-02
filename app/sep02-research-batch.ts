import type { ResearchPost } from './fleet-data';

const rows = [
  { slug: 'offshore-developer-retry-budget-research-2026-09-02', title: 'When should a service spend its retry budget?', topic: 'retry budgets in distributed services', question: 'when another attempt improves recovery and when it amplifies load', signals: 'attempt count, recovery rate, added latency, dependency saturation, and caller deadlines', counter: 'a locally successful retry can worsen the shared dependency' },
  { slug: 'offshore-developer-authorization-cache-research-2026-09-02', title: 'How should teams evaluate authorization-cache risk?', topic: 'cached authorization decisions', question: 'how quickly role and policy changes must affect access', signals: 'cache keys, policy versions, invalidation events, stale duration, and deny cases', counter: 'a cache hit can be correct for an obsolete permission state' },
  { slug: 'offshore-developer-backup-restore-evidence-research-2026-09-02', title: 'What evidence makes a backup restore credible?', topic: 'backup restoration evidence', question: 'whether protected data restores into a usable and consistent state', signals: 'backup age, restore duration, integrity checks, application verification, and missing transactions', counter: 'a completed restore command does not prove the application can use the data' },
  { slug: 'offshore-developer-api-pagination-stability-research-2026-09-02', title: 'What makes API pagination stable under change?', topic: 'pagination stability for changing datasets', question: 'whether clients traverse records without gaps or unintended repetition', signals: 'cursor inputs, ordering keys, inserted and removed fixtures, duplicate counts, and completion markers', counter: 'two valid pages can omit a record inserted between requests' },
  { slug: 'offshore-developer-feature-adoption-evidence-research-2026-09-02', title: 'Which evidence supports a feature-adoption decision?', topic: 'feature adoption evidence', question: 'whether eligible users discover and complete the intended outcome', signals: 'eligible cohort, exposure, task completion, repeat use, support signals, and observation window', counter: 'event growth can reflect retries or cohort growth instead of useful adoption' },
] as const;

const related = [{ title: 'Research library', href: '/research' }, { title: 'Developer services', href: '/services' }, { title: 'Daily developer guides', href: '/blog' }];
const sources = [{ name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' }, { name: 'Google Site Reliability Engineering', url: 'https://sre.google/sre-book/table-of-contents/' }, { name: 'DORA research', url: 'https://dora.dev/research/' }, { name: 'OWASP Code Review Guide', url: 'https://owasp.org/www-project-code-review-guide/' }];

export const september2ResearchBatch: readonly ResearchPost[] = rows.map((row) => ({
  slug: row.slug,
  title: row.title,
  excerpt: `Original research on ${row.topic}, with a reproducible comparison method, counterevidence, and a named decision owner.`,
  published: '2026-09-02',
  sections: [
    ['Research question and unit', `This report examines ${row.topic} in one bounded engineering lane shared with a Philippines-based offshore developer. The decision is ${row.question}. The unit is one declared system path, cohort, revision, and observation window; this is not a universal threshold.`],
    ['Method and provenance', `Record source revisions, environment, fixtures, exclusions, observation window, and stop rules. Collect ${row.signals}. Preserve observations separately from interpretation, then compare normal, failure, repeated, recovery, and authority-boundary cases.`],
    ['Evidence framework', 'NIST, Google SRE, DORA, and OWASP provide public lenses for secure engineering, reliability, delivery, and review. They guide the questions but do not prove local behavior. Each conclusion must point to current project evidence and identify what was not observed.'],
    ['Analysis', `Trace every signal for ${row.topic} from collection to the decision it informs. Test provenance, freshness, completeness, aggregation, and user consequence. Pair counts with the affected outcome, recovery behavior, and accountable owner.`],
    ['Counterevidence', `Challenge the conclusion with this competing explanation: ${row.counter}. Vary cohort, workload, timing, identity, and failure state one dimension at a time. Preserve disagreements between signals instead of averaging them away.`],
    ['Authority boundary', 'The developer may create synthetic fixtures, collect approved telemetry, run comparisons, add focused checks, and prepare a reversible change. Internal owners retain production access, privacy and security exceptions, product meaning, irreversible operations, and residual risk.'],
    ['Asynchronous handoff', `Document the question, revision, environment, commands, fixtures, observations, counterevidence, limitations, reviewer, and next action. State what future evidence would falsify the current conclusion about ${row.topic}.`],
    ['Limitations and conclusion', 'This method cannot represent every future workload, dependency response, account state, or historical record. It supports a bounded choice to observe further, correct, revert, or escalate. The accountable internal owner decides whether remaining uncertainty is acceptable.'],
  ].map(([heading, body]) => ({ heading, body: [body] })),
  sources,
  keyStats: ['One bounded system path or cohort', 'Four public evidence lenses', `Five evidence groups drawn from: ${row.signals}`],
  takeaways: [`Frame the decision as ${row.question}.`, `Inspect ${row.signals}.`, `Test the counterclaim that ${row.counter}.`],
  faqs: [{ question: `What does this report establish about ${row.topic}?`, answer: 'It establishes a reproducible method for one bounded decision, not certification of an entire system or a universal target.' }, { question: 'What can an offshore developer contribute?', answer: 'The developer can gather approved evidence, create synthetic fixtures, compare outcomes, and document limits while an internal owner retains approval authority.' }],
  related,
}));
