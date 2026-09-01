import type { ResearchPost } from './fleet-data';

const rows = [
  { slug: 'offshore-developer-dependency-update-risk-research-2026-09-01', title: 'Which evidence makes a dependency update safe to review?', topic: 'dependency update risk', question: 'whether a version change preserves required behavior without importing unreviewed risk', signals: 'release notes, dependency graph changes, lockfile provenance, targeted tests, and rollback feasibility', counter: 'a passing direct test can miss behavior in a transitive consumer' },
  { slug: 'offshore-developer-observability-cardinality-research-2026-09-01', title: 'When does observability cardinality become an engineering risk?', topic: 'observability label cardinality', question: 'which dimensions improve diagnosis and which create uncontrolled cost or degraded queries', signals: 'unique series growth, query latency, label sources, retention, and diagnostic value', counter: 'a low-volume sample can conceal identifiers that grow with customers or requests' },
  { slug: 'offshore-developer-clock-skew-research-2026-09-01', title: 'How should distributed teams investigate clock skew?', topic: 'clock skew in distributed systems', question: 'when ordering, expiry, or latency conclusions depend on clocks that do not agree', signals: 'time sources, offset measurements, event identifiers, causal order, and tolerance windows', counter: 'sorted timestamps can appear coherent while hiding an offset shared by one host group' },
  { slug: 'offshore-developer-test-data-anonymization-research-2026-09-01', title: 'What makes test-data anonymization verifiable?', topic: 'test-data anonymization', question: 'whether a transformed dataset removes identity while preserving only the behavior needed for testing', signals: 'field classification, transformation rules, linkage tests, utility checks, and retention boundaries', counter: 'masking direct identifiers does not prevent re-identification through rare combinations' },
  { slug: 'offshore-developer-release-health-window-research-2026-09-01', title: 'How long should a team observe release health?', topic: 'post-release health windows', question: 'which observation period captures meaningful failure and recovery signals before a release is accepted', signals: 'traffic cycles, delayed work, error cohorts, rollback triggers, and accountable sign-off', counter: 'an uneventful short window can omit scheduled jobs and low-frequency customer paths' },
] as const;

const related = [{ title: 'Research library', href: '/research' }, { title: 'Developer services', href: '/services' }, { title: 'Daily developer guides', href: '/blog' }];
const sources = [{ name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' }, { name: 'Google Site Reliability Engineering', url: 'https://sre.google/sre-book/table-of-contents/' }, { name: 'DORA research', url: 'https://dora.dev/research/' }, { name: 'OWASP Code Review Guide', url: 'https://owasp.org/www-project-code-review-guide/' }];

export const september1ResearchBatch: readonly ResearchPost[] = rows.map((row) => {
  const sections = [
    ['Research question and scope', `This report examines ${row.topic} in one bounded engineering lane shared with a Philippines-based offshore developer. The decision is ${row.question}. It does not set a universal threshold; it defines evidence an accountable reviewer can inspect before choosing a next action.`],
    ['Methodology', `Declare the source revision, environment, sample window, fixtures, exclusions, and stop rule. Collect ${row.signals}. Compare a normal case with failure, repetition, recovery, and an ownership-boundary case. Preserve raw observations apart from interpretations so another reviewer can reproduce or challenge the finding.`],
    ['Evidence lens', `NIST, Google SRE, DORA, and OWASP provide public lenses for secure development, reliability, delivery performance, and review. Apply those principles to the selected lane without treating them as proof of local behavior. Link every conclusion to current project evidence and label missing evidence plainly.`],
    ['Analysis', `For ${row.topic}, trace each signal from its source to the decision it informs. Check provenance, freshness, completeness, aggregation, and connection to user-visible outcomes. Counts alone are weak evidence: pair them with consequence, recovery behavior, and the owner authorized to accept the result.`],
    ['Counterevidence', `Actively test the competing explanation that ${row.counter}. Look for samples, environments, identities, workloads, or time windows that could reverse the initial conclusion. Preserve disagreements between signals instead of averaging them into one reassuring metric.`],
    ['Role and authority boundary', `The offshore developer may build synthetic fixtures, collect approved telemetry, run controlled comparisons, improve checks, and prepare a reversible change. Product meaning, security and privacy exceptions, protected data, production access, irreversible actions, and accepted residual risk remain with named internal owners.`],
    ['Cross-time-zone handoff', `Record the question, revision, environment, commands, fixtures, observations, limitations, open risks, reviewer, and next action. State what evidence would falsify the current conclusion about ${row.topic}. This prevents an uncertain result from becoming an unsupported guarantee in the next work window.`],
    ['Limitations and next decision', `This method cannot predict every future workload, provider response, account state, device, or historical record. It supports a bounded next decision: repeat a comparison, prepare a focused correction, improve observation, revert, or escalate. The accountable internal owner decides which remaining uncertainty is acceptable.`],
  ];
  return {
    slug: row.slug,
    title: row.title,
    excerpt: `Original research on ${row.topic}, with a reproducible evidence method and explicit ownership boundaries for distributed teams.`,
    published: '2026-09-01',
    sections: sections.map(([heading, body]) => ({ heading, body: [body] })),
    sources,
    keyStats: ['One bounded engineering lane', 'Four public evidence lenses', `Five signal groups: ${row.signals}`],
    takeaways: [`Frame the decision as ${row.question}.`, `Inspect ${row.signals}.`, 'Keep accepted risk with the accountable internal owner.'],
    faqs: [{ question: `What does this ${row.topic} report establish?`, answer: 'It establishes a reproducible way to inspect one bounded decision. It does not certify an entire system or prescribe a universal threshold.' }, { question: 'What can an offshore developer contribute?', answer: 'The developer can gather approved evidence, create synthetic fixtures, run comparisons, and document results while internal owners retain approval authority.' }],
    related,
  };
});
