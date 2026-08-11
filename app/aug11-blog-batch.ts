import type { BlogPost, BlogSection, BlogSource } from './data';

type August11Brief = {
  slug: string;
  datePublished: '2026-08-11';
  title: string;
  audience: string;
  result: string;
  focus: string;
  checks: string[];
  source: BlogSource;
};

const commonSources: BlogSource[] = [
  { name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
  { name: 'OWASP Code Review Guide', url: 'https://owasp.org/www-project-code-review-guide/' },
];

function section(heading: string, body: string[], bullets?: string[]): BlogSection {
  return { heading, body, bullets };
}

function makePost(brief: August11Brief): BlogPost {
  return {
    slug: brief.slug,
    title: brief.title,
    excerpt: `${brief.audience} can use this practical guide to ${brief.result}. It covers ${brief.focus}, evidence, and a clear handoff for a Philippines-based developer relationship.`,
    minutes: 9,
    datePublished: brief.datePublished,
    dateModified: brief.datePublished,
    revision: 'august-11-2026-blog-v1',
    keyTakeaways: [
      `Start with ${brief.result}.`,
      `Make ${brief.focus} visible before the change is accepted.`,
      'Keep access, review, and final technical decisions with named owners.',
    ],
    sections: [
      section('Begin with a result someone can inspect', [
        `A useful brief for ${brief.audience} names the result before it names a technology. For this guide, the result is ${brief.result}. That gives the developer a concrete target and gives the reviewer something more useful than a status update to assess.`,
        `Write the starting condition, desired condition, affected users, and acceptance evidence in the same ticket. If an assumption is still open, record it as a question instead of letting it become an invisible decision.`
      ], ['Name one decision owner.', 'State what is out of scope.', 'Choose a review date before work begins.']),
      section(`Shape the work around ${brief.focus}`, [
        `Break the first assignment into a few related pieces rather than sending a broad backlog. The developer should be able to explain how each piece contributes to the result and where the handoff occurs.`,
        'A narrow assignment also makes candidate evaluation fairer: every finalist can discuss the same kind of evidence, trade-off, and unfinished edge case.'
      ], brief.checks),
      section('Set access and review boundaries early', [
        'Start with named accounts, the smallest repository or environment needed, and synthetic data where possible. Keep credentials, production approvals, architecture choices, and accepted risk with the client-side owner.',
        'Agree on the pull-request reviewer, response expectations, and stop conditions. A developer should pause and ask when a requested change would expand access, alter a public contract, or affect data handling.'
      ]),
      section('Ask for evidence, not activity', [
        `The evidence for this assignment should show ${brief.result} and the checks behind it. A short screen recording is optional; the durable record should be the diff, test output, decision note, and known limitation.`,
        'Reviewers can then judge correctness, clarity, and risk without counting messages or commits. That is especially helpful when teams work across a Philippines and North American schedule.'
      ], ['Link the change to its acceptance criteria.', 'Show both the successful and rejected cases where relevant.', 'Record what was not tested and why.']),
      section('Make the handoff easy to resume', [
        'At the end of the working day, leave four items: what changed, what passed, what is blocked, and the smallest next decision. Use the team’s normal ticket and pull-request records so the next person can continue without a second discovery meeting.',
        'Use local time only for scheduled overlap. Put durable events, release notes, and incident timestamps in UTC so the record stays unambiguous.'
      ]),
      section('Review the first two weeks', [
        'After the first few tickets, review accepted outcomes, rework, review turnaround, handoff quality, and unresolved risks. Do not widen the role simply because the developer is responsive; widen it when the evidence supports the next responsibility.',
        'Choose one of three outcomes: keep the same boundary, add one clearly defined responsibility, or change the assignment. Write the reason and next review date so the decision remains understandable.'
      ]),
    ],
    table: {
      title: 'A practical acceptance record',
      columns: ['Area', 'Question', 'Evidence'],
      rows: [
        ['Outcome', 'Did the requested result work?', brief.result],
        ['Checks', 'What was verified?', brief.checks[0]],
        ['Handoff', 'Can another developer continue?', 'Ticket, diff, notes, and next owner'],
        ['Risk', 'What remains uncertain?', 'Named limitation and decision owner'],
      ],
    },
    faqs: [
      { question: 'What should the first assignment include?', answer: `Include one measurable result, representative inputs, ${brief.focus}, acceptance checks, and a named reviewer. Keep unrelated backlog items out of the opening.` },
      { question: 'Should the developer receive broad production access?', answer: 'No. Start with the smallest safe boundary. Expand access only for a specific responsibility after the owner has reviewed the evidence.' },
      { question: 'How should a distributed team handle a blocker?', answer: 'Record the attempted path, observed evidence, current risk, and smallest decision needed. Escalate immediately when data, credentials, security, or production behavior is involved.' },
    ],
    sources: [...commonSources, brief.source],
  };
}

// Each entry is an independent article record. The literal date is intentionally
// kept beside its slug so the publication contract can audit every new route.
export const august11BlogBatch: BlogPost[] = [
  { slug: 'offshore-developer-react-component-delivery-guide-2026-08-11', title: 'How to brief an offshore React developer for component delivery', audience: 'Frontend leads maintaining a React product', result: 'a reviewed component change that preserves states and keyboard behavior', focus: 'component states, accessibility, and focused tests', checks: ['Storybook states and keyboard checks', 'A focused test for the changed behavior'], source: { name: 'W3C Web Content Accessibility Guidelines 2.2', url: 'https://www.w3.org/TR/WCAG22/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-nextjs-route-delivery-guide-2026-08-11', title: 'How to brief an offshore Next.js developer for a route change', audience: 'Founders running a Next.js application', result: 'a production-shaped route with correct rendering and metadata', focus: 'App Router boundaries, caching, and metadata', checks: ['The affected route in a production build', 'Canonical and structured metadata output'], source: { name: 'Next.js Metadata documentation', url: 'https://nextjs.org/docs/app/building-your-application/optimizing/metadata' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-node-api-delivery-guide-2026-08-11', title: 'A safer brief for offshore Node.js API development', audience: 'Backend leads with a growing API backlog', result: 'a bounded endpoint change with explicit failure behavior', focus: 'validation, authorization, retries, and contract tests', checks: ['Success, denied, and malformed request cases', 'A note about retry and logging behavior'], source: { name: 'OWASP API Security Top 10', url: 'https://owasp.org/API-Security/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-python-service-delivery-guide-2026-08-11', title: 'How to scope an offshore Python service assignment', audience: 'Managers responsible for Python services', result: 'a maintainable service change with reproducible tests', focus: 'fixtures, validation, typing, and dependency choices', checks: ['Representative pytest fixtures', 'Dependency and migration notes'], source: { name: 'Python Packaging User Guide', url: 'https://packaging.python.org/en/latest/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-devops-release-support-guide-2026-08-11', title: 'Boundaries for an offshore DevOps release-support role', audience: 'Platform leads who need a dependable release lane', result: 'a documented release check with health evidence', focus: 'pipeline checks, observability, and rollback preparation', checks: ['A repeatable pipeline result', 'Health signals and a rollback owner'], source: { name: 'Google SRE Workbook', url: 'https://sre.google/workbook/table-of-contents/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-ai-automation-assignment-guide-2026-08-11', title: 'How to evaluate an offshore AI automation developer', audience: 'Product leaders testing an AI-assisted workflow', result: 'a measured automation step with human review at the right point', focus: 'input boundaries, evaluation cases, and fallback behavior', checks: ['A representative evaluation set', 'A clear fallback for uncertain output'], source: { name: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-code-review-assignment-guide-2026-08-11', title: 'A practical code-review assignment for an offshore developer', audience: 'Teams improving review quality across time zones', result: 'review feedback that resolves risk without avoidable rework', focus: 'risk framing, reproducible feedback, and decision records', checks: ['A finding linked to a concrete code path', 'A follow-up check after the change'], source: { name: 'Google Engineering Practices: Code Review', url: 'https://google.github.io/eng-practices/review/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-typescript-refactoring-guide-2026-08-11', title: 'How to scope TypeScript refactoring with an offshore developer', audience: 'Leads carrying a growing TypeScript codebase', result: 'a smaller, safer refactor with behavior preserved', focus: 'invariants, type errors, and regression coverage', checks: ['Before-and-after type-check results', 'A regression test for the preserved behavior'], source: { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-database-migration-assignment-guide-2026-08-11', title: 'A safer database-migration brief for offshore developers', audience: 'Product teams planning schema changes', result: 'a reversible migration tested against representative data', focus: 'compatibility, backup evidence, and rollback', checks: ['Up and down migration results', 'Application compatibility during the transition'], source: { name: 'OWASP Database Security Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Database_Security_Cheat_Sheet.html' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-observability-assignment-guide-2026-08-11', title: 'How to brief an offshore developer on observability work', audience: 'Service teams that need clearer runtime signals', result: 'useful signals connected to an owner and response path', focus: 'signal selection, alert ownership, and runbook evidence', checks: ['A query or dashboard for the affected path', 'A tested response step for the important failure'], source: { name: 'OpenTelemetry documentation', url: 'https://opentelemetry.io/docs/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-security-review-assignment-guide-2026-08-11', title: 'How to set boundaries for offshore security-review work', audience: 'Engineering managers adding security checks to delivery', result: 'a prioritized review with actionable findings', focus: 'threat boundaries, evidence, and remediation ownership', checks: ['Findings tied to an asset and risk', 'A remediation owner and acceptance decision'], source: { name: 'OWASP Application Security Verification Standard', url: 'https://owasp.org/www-project-application-security-verification-standard/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-mobile-api-handoff-guide-2026-08-11', title: 'A clear handoff brief for offshore mobile API work', audience: 'Mobile teams coordinating with a backend developer', result: 'an API change that mobile clients can adopt safely', focus: 'contract examples, compatibility, and release notes', checks: ['Valid and invalid request examples', 'A consumer-impact note and migration path'], source: { name: 'OpenAPI Specification', url: 'https://spec.openapis.org/oas/latest.html' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-feature-flag-assignment-guide-2026-08-11', title: 'How to assign feature-flag work to an offshore developer', audience: 'Product teams releasing changes gradually', result: 'a controlled rollout with an owner and removal plan', focus: 'exposure rules, measurement, and flag cleanup', checks: ['The intended cohort and default behavior', 'A removal date or explicit keep decision'], source: { name: 'Martin Fowler: Feature Toggles', url: 'https://martinfowler.com/articles/feature-toggles.html' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-graphql-delivery-guide-2026-08-11', title: 'A focused GraphQL delivery brief for offshore developers', audience: 'Teams maintaining a GraphQL API', result: 'a schema change with resolver and client impact understood', focus: 'schema compatibility, resolver behavior, and query tests', checks: ['Schema and resolver tests', 'A note for affected consumers'], source: { name: 'GraphQL specification', url: 'https://spec.graphql.org/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-frontend-performance-guide-2026-08-11', title: 'How to scope frontend performance work offshore', audience: 'Web teams protecting an important user journey', result: 'a measurable performance improvement on a real route', focus: 'baseline measurement, bottlenecks, and repeat tests', checks: ['Before-and-after measurements on the same profile', 'A note about user impact and trade-offs'], source: { name: 'Web Vitals', url: 'https://web.dev/articles/vitals' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-accessibility-delivery-guide-2026-08-11', title: 'A practical accessibility brief for offshore frontend work', audience: 'Product teams making an important journey more accessible', result: 'a tested journey with semantic and keyboard behavior intact', focus: 'semantic structure, keyboard paths, and manual checks', checks: ['A keyboard-only pass', 'Focused automated checks plus manual findings'], source: { name: 'WAI-ARIA Authoring Practices', url: 'https://www.w3.org/WAI/ARIA/apg/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-dependency-upgrade-guide-2026-08-11', title: 'How to brief an offshore developer on dependency upgrades', audience: 'Small teams maintaining a busy application', result: 'a justified upgrade with compatibility and rollback evidence', focus: 'release notes, transitive changes, and regression checks', checks: ['Dependency diff and compatibility result', 'A rollback or pinning path'], source: { name: 'GitHub dependency review documentation', url: 'https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-release-notes-guide-2026-08-11', title: 'How to assign release-note work to an offshore developer', audience: 'Teams coordinating customer-facing software releases', result: 'release notes that explain impact, checks, and limits', focus: 'audience, affected behavior, and unresolved follow-up', checks: ['Merged changes mapped to the release', 'Known limitations reviewed by the release owner'], source: { name: 'Keep a Changelog', url: 'https://keepachangelog.com/en/1.1.0/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-incident-handoff-guide-2026-08-11', title: 'A calm incident-handoff brief for offshore developers', audience: 'Distributed teams responding to service incidents', result: 'a concise handoff with current impact and a safe next action', focus: 'timeline, evidence, and one accountable owner', checks: ['UTC event timeline and current impact', 'The next safe action and escalation path'], source: { name: 'Google SRE incident management', url: 'https://sre.google/sre-book/managing-incidents/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-documentation-handoff-guide-2026-08-11', title: 'How to make offshore developer documentation reusable', audience: 'Teams handing technical knowledge across time zones', result: 'a tested procedure that another developer can follow', focus: 'audience, prerequisites, failure paths, and ownership', checks: ['A fresh reader can complete the procedure', 'Known limits and maintenance owner are written down'], source: { name: 'Diátaxis documentation framework', url: 'https://diataxis.fr/' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-webhook-security-guide-2026-08-11', title: 'A safer webhook assignment for offshore developers', audience: 'Teams receiving events from external systems', result: 'a verified webhook path with replay and failure handling', focus: 'signatures, idempotency, retries, and safe logging', checks: ['Signed, invalid, and repeated-event fixtures', 'A recovery path for failed processing'], source: { name: 'OWASP Web Service Security Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Web_Service_Security_Cheat_Sheet.html' }, datePublished: '2026-08-11' } as August11Brief,
  { slug: 'offshore-developer-technical-debt-guide-2026-08-11', title: 'How to make technical-debt work reviewable offshore', audience: 'Engineering managers prioritizing maintenance work', result: 'a bounded debt reduction tied to measurable risk', focus: 'impact evidence, sequencing, and acceptance criteria', checks: ['The affected path and failure evidence', 'A repeatable check showing the risk is reduced'], source: { name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' }, datePublished: '2026-08-11' } as August11Brief,
].map((record) => makePost(record));
