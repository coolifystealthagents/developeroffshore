import type { BlogPost } from './data';

const specs = [
  ['backlog-risk-review','How to review backlog risk before assigning work to an offshore developer','backlog risk review'],
  ['async-design-decision','How an offshore developer can document an async design decision','async design decisions'],
  ['feature-flag-ownership','Set feature-flag ownership clearly for offshore developer work','feature-flag ownership'],
  ['observability-handoff','Build an observability handoff an offshore developer can use','observability handoffs'],
  ['frontend-state-review','Review frontend state changes with an offshore developer','frontend state review'],
  ['api-contract-change','Manage an API contract change with an offshore developer','API contract changes'],
  ['database-rollback','Plan database rollback evidence for offshore developer changes','database rollback'],
  ['security-finding-handoff','Create a security-finding handoff for an offshore developer','security-finding handoffs'],
  ['mobile-release-check','Run a mobile release check with an offshore developer','mobile release checks'],
  ['search-relevance-review','Review search relevance work with an offshore developer','search relevance reviews'],
  ['file-upload-boundary','Set a safe file-upload boundary for an offshore developer','file-upload boundaries'],
  ['webhook-retry-review','Review webhook retry behavior with an offshore developer','webhook retry reviews'],
  ['localization-qa-handoff','Make localization QA handoffs useful for offshore developers','localization QA handoffs'],
  ['load-test-scope','Scope a load test an offshore developer can execute safely','load-test scope'],
  ['monorepo-review-routing','Route monorepo reviews when an offshore developer contributes','monorepo review routing'],
  ['incident-timeline-handoff','Write an incident timeline handoff for an offshore developer','incident timeline handoffs'],
  ['dependency-license-review','Include license review in offshore developer dependency work','dependency license reviews'],
  ['queue-idempotency-check','Check queue idempotency in offshore developer work','queue idempotency checks'],
  ['browser-storage-migration','Review browser-storage migrations with an offshore developer','browser-storage migrations'],
  ['rate-limit-review','Review rate limits with an offshore developer','rate-limit reviews'],
  ['contract-test-handoff','Hand off contract-test work to an offshore developer','contract-test handoffs'],
  ['runbook-review','Review a runbook written by an offshore developer','runbook reviews'],
] as const;

const makeSections = (focus: string) => [
  ['Define the decision before the task starts', 'Start with a named decision, bounded outcome, and reason the work matters. For '+focus+', write behavior another person can inspect after the handoff. Ask what proves acceptance and which question remains with the internal owner.'],
  ['Choose a representative slice', 'Select one normal path, one meaningful refusal or failure, and the dependency most likely to alter the design. A small but representative slice reveals missing context without turning an offshore developer into the owner of every adjacent concern.'],
  ['Make inputs and boundaries explicit', 'Record inputs, systems in scope, data that must not be exposed, and the narrowest access needed. Hidden inputs create risk because a later contributor may mistake accidental behavior for a supported contract.'],
  ['Separate implementation from approval', 'The developer can investigate, propose an implementation, add focused checks, and describe limitations. Keep product meaning, production access, security exceptions, irreversible data changes, and accepted risk with named internal owners.'],
  ['Design evidence before implementation', 'Choose evidence that exercises the changed behavior: a focused test, fixture, trace, device check, query result, or dry run. Also record what the evidence cannot prove; a green check is not a universal guarantee.'],
  ['Use written handoffs across the time-zone gap', 'State the current condition, last observation, expected result, observed result, and next action. Link the ticket, pull request, fixture, or decision record. Name the owner of any blocker so the next shift can act.'],
  ['Review failure behavior deliberately', 'Ask what happens with incomplete input, a slow dependency, absent permission, duplicate data, a different device, or an older version. Failure behavior often changes the risk decision more than the happy path.'],
  ['Keep review proportional to blast radius', 'Review depth follows affected surface, not line count. Add a specialist when work crosses security, data, legal, or customer boundaries, while keeping technical preparation within the agreed developer role.'],
  ['Close with a reusable operating record', 'Record behavior, checks, limitation, reviewer, and follow-up. Repeated questions should improve a checklist, example, runbook, or ownership note. Documentation should reduce coordination cost without becoming unsupported promise-making.'],
  ['Know when to stop and escalate', 'Stop when the contract conflicts, evidence reveals a new concern, a dependency cannot be trusted, or recovery is unclear. Escalation should include the smallest reproducible case, choices considered, impact of waiting, and next check.'],
];

export const august18BlogBatch: BlogPost[] = specs.map(([key, title, focus], index) => ({
  slug: 'offshore-developer-'+key+'-2026-08-18', title,
  excerpt: 'A practical guide to '+focus+' with explicit evidence, review ownership, and safe handoffs across working hours.',
  minutes: 11, datePublished: '2026-08-18', dateModified: '2026-08-18', revision: 'august-18-2026-blog-v1-'+(index + 1),
  keyTakeaways: ['Tie '+focus+' to an observable outcome.', 'Keep implementation authority separate from final approval.', 'Leave evidence and the next owner in writing.'],
  sections: makeSections(focus).map(([heading, core]) => ({ heading, body: [core, 'Apply the rule to a representative offshore developer task. Keep the example concrete: identify the starting state, expected behavior, evidence to collect, reviewer, known limitation, and the point where work must pause. This makes the article useful to a buyer or operator planning a real delivery lane rather than a generic staffing conversation.'] })),
  faqs: [{ question: 'What should an offshore developer own in '+focus+'?', answer: 'The developer can prepare the bounded implementation, tests, evidence, and handoff. The internal owner keeps product, security, production, and accepted-risk decisions.' }, { question: 'How should a distributed team review this work?', answer: 'Use a representative normal case, a meaningful failure case, explicit assumptions, and a named reviewer who can approve the affected boundary.' }],
  relatedLinks: [{ label: 'Explore developer services', href: '/services', note: 'Match the work lane with review capacity and clear ownership.' }, { label: 'Discuss the workflow', href: '/contact-us', note: 'Bring the first outcome, stack, schedule, and decision owner.' }],
  sources: [{ name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/pubs/sp/800/218/final', note: 'Used for evidence and accountable review framing.' }, { name: 'OWASP Code Review Guide', url: 'https://owasp.org/www-project-code-review-guide/', note: 'Used for risk-based review guidance.' }]
}));
