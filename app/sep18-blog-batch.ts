import type { BlogPost } from './data';

type Topic = {
  slug: string;
  title: string;
  reader: string;
  outcome: string;
  inputs: string;
  baseline: string;
  failure: string;
  service: string;
  serviceLabel: string;
  source: { name: string; url: string };
};

const topics: readonly Topic[] = [
  { slug: 'offshore-developer-repository-onboarding-audit', title: 'Repository Onboarding Audit for an Offshore Developer', reader: 'engineering leads preparing a Philippines-based developer for a first contribution', outcome: 'prove that the developer can build, test, and change one bounded path without unnecessary access', inputs: 'the repository map, supported tool versions, setup commands, branch rules, and a starter ticket', baseline: 'a clean clone, reproducible local start, passing focused test, and named review owner', failure: 'the setup depends on an undocumented secret, private machine state, or organization-wide permission', service: '/services/legacy-application-maintenance', serviceLabel: 'Legacy application maintenance', source: { name: 'GitHub documentation: repository best practices', url: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories' } },
  { slug: 'offshore-developer-sprint-spillover-review', title: 'How to Review Sprint Spillover With an Offshore Development Team', reader: 'product and engineering managers whose unfinished tickets repeatedly cross sprint boundaries', outcome: 'separate estimation noise from waiting, review capacity, hidden dependencies, and oversized work', inputs: 'ticket history, blocker timestamps, review events, acceptance changes, and carry-over reasons', baseline: 'one sprint of ticket-level evidence with no ranking of individual developers by raw activity', failure: 'a ticket is labeled slow even though it waited most of the sprint for a decision or review', service: '/services/devops-release-support', serviceLabel: 'DevOps release support', source: { name: 'Atlassian Agile Coach: sprints', url: 'https://www.atlassian.com/agile/scrum/sprints' } },
  { slug: 'offshore-developer-pull-request-turnaround-plan', title: 'Pull Request Turnaround Plan for Offshore Developers', reader: 'distributed engineering teams losing a full day between author and reviewer', outcome: 'create predictable review windows, complete handoffs, and an escalation path without demanding permanent night work', inputs: 'pull request timestamps, reviewer ownership, change size, failed checks, and unresolved questions', baseline: 'a small ready-for-review pull request with evidence, risk notes, and a named reviewer', failure: 'the author waits through the overlap window because ownership was implied rather than assigned', service: '/services/react-frontend-development', serviceLabel: 'React frontend development', source: { name: 'Google Engineering Practices: code review', url: 'https://google.github.io/eng-practices/review/' } },
  { slug: 'offshore-developer-bug-reproduction-handoff', title: 'Bug Reproduction Handoff for an Offshore Developer', reader: 'support and engineering leads turning customer reports into safe development work', outcome: 'produce a minimal, repeatable case with expected behavior, actual behavior, and useful evidence', inputs: 'sanitized inputs, environment identity, timestamps, logs, screenshots, and the affected version', baseline: 'a reproduction that another engineer can run from written steps on the same revision', failure: 'the report includes customer data or describes symptoms without recording the triggering state', service: '/services/qa-automation-engineering', serviceLabel: 'QA automation engineering', source: { name: 'Mozilla: writing a bug report', url: 'https://developer.mozilla.org/en-US/docs/Mozilla/QA/Bug_writing_guidelines' } },
  { slug: 'offshore-developer-test-ownership-matrix', title: 'Test Ownership Matrix for an Offshore Development Team', reader: 'engineering managers deciding who maintains unit, integration, end-to-end, and release checks', outcome: 'assign every important test lane an operator, reviewer, failure response, and retirement rule', inputs: 'critical journeys, existing suites, CI jobs, flaky-test history, and release gates', baseline: 'a short inventory tied to customer and operational risks rather than a count of test files', failure: 'a red suite blocks releases while every team assumes another person owns its diagnosis', service: '/services/qa-automation-engineering', serviceLabel: 'QA automation engineering', source: { name: 'Martin Fowler: test pyramid', url: 'https://martinfowler.com/articles/practical-test-pyramid.html' } },
  { slug: 'offshore-developer-cloud-cost-review', title: 'Cloud Cost Review Boundaries for an Offshore Developer', reader: 'platform owners who want help investigating a rising cloud bill without handing over billing authority', outcome: 'trace a bounded cost change to workloads and prepare reversible recommendations for owner approval', inputs: 'tagged cost data, deployment history, utilization metrics, retention settings, and service ownership', baseline: 'a read-only comparison over an agreed period with known business and traffic changes', failure: 'a developer deletes or resizes a production resource based only on aggregate spend', service: '/services/devops-release-support', serviceLabel: 'DevOps release support', source: { name: 'FinOps Framework: capabilities', url: 'https://www.finops.org/framework/capabilities/' } },
  { slug: 'offshore-developer-dependency-upgrade-plan', title: 'Dependency Upgrade Plan for an Offshore Developer', reader: 'application owners delegating routine framework and library maintenance', outcome: 'upgrade one dependency lane with compatibility evidence, a rollback point, and no surprise transitive changes', inputs: 'lockfile diff, release notes, supported runtimes, security advisories, tests, and deployment constraints', baseline: 'the current version and a focused passing test set on a fixed application revision', failure: 'an automated update changes several runtime boundaries and is merged because the build is green', service: '/services/legacy-application-maintenance', serviceLabel: 'Legacy application maintenance', source: { name: 'npm documentation: package specifications', url: 'https://docs.npmjs.com/cli/v11/configuring-npm/package-json' } },
  { slug: 'offshore-developer-api-deprecation-migration', title: 'API Deprecation Migration Plan for an Offshore Developer', reader: 'product teams replacing an external or internal API before its retirement date', outcome: 'inventory consumers, compare contracts, migrate in slices, and verify fallback or rollback behavior', inputs: 'provider notices, API contracts, call telemetry, credentials, test fixtures, and consumer owners', baseline: 'a captured request and response for each used operation with sensitive values removed', failure: 'the visible client is migrated while a scheduled job continues calling the retired version', service: '/services/node-js-api-development', serviceLabel: 'Node.js API development', source: { name: 'IETF: Deprecation HTTP response header', url: 'https://www.rfc-editor.org/rfc/rfc9745.html' } },
  { slug: 'offshore-developer-observability-ownership', title: 'Observability Ownership for an Offshore Development Team', reader: 'engineering leads asking distributed developers to add logs, metrics, traces, and useful alerts', outcome: 'connect each signal to an operational question, response owner, data boundary, and maintenance rule', inputs: 'service objectives, incident history, dashboards, alert routes, field definitions, and retention limits', baseline: 'one customer-facing path traced through a known-good request with costs and sensitive fields checked', failure: 'new telemetry collects identifiers or pages a channel that has no accountable responder', service: '/services/devops-release-support', serviceLabel: 'DevOps release support', source: { name: 'OpenTelemetry documentation', url: 'https://opentelemetry.io/docs/' } },
  { slug: 'offshore-developer-release-notes-checklist', title: 'Release Notes Checklist for an Offshore Developer', reader: 'delivery leads who need clear technical handoffs before a buyer-team release decision', outcome: 'turn a set of merged changes into an accurate note covering behavior, risk, checks, and recovery', inputs: 'merged pull requests, issue acceptance, migration steps, feature flags, tests, and rollback instructions', baseline: 'a release candidate tied to immutable revisions and the environment where checks ran', failure: 'the note repeats ticket titles but omits a manual step or changed user behavior', service: '/services/devops-release-support', serviceLabel: 'DevOps release support', source: { name: 'Keep a Changelog', url: 'https://keepachangelog.com/en/1.1.0/' } },
  { slug: 'offshore-developer-staging-test-data-plan', title: 'Staging Test Data Plan for an Offshore Developer', reader: 'teams that need realistic QA coverage without copying customer records into non-production systems', outcome: 'define synthetic fixtures, reset behavior, access limits, and evidence for repeatable staging checks', inputs: 'data shapes, privacy classification, journey risks, seed scripts, retention, and environment owners', baseline: 'a synthetic account set that exercises ordinary and boundary cases from a documented reset point', failure: 'production records are exported for convenience or shared test accounts lose their known state', service: '/services/qa-automation-engineering', serviceLabel: 'QA automation engineering', source: { name: 'OWASP: test data', url: 'https://owasp.org/www-project-web-security-testing-guide/' } },
  { slug: 'offshore-developer-architecture-decision-record', title: 'Architecture Decision Record Guide for an Offshore Developer', reader: 'technical leads who want distributed contributors to preserve the reasoning behind consequential changes', outcome: 'write a concise decision record with context, options, consequences, status, and accountable approval', inputs: 'the decision question, constraints, considered options, evidence, affected systems, and reviewers', baseline: 'a proposed record linked to the ticket and code, written before the choice becomes difficult to reverse', failure: 'the document presents one option as inevitable or lets a contributor approve organizational risk', service: '/services/next-js-application-development', serviceLabel: 'Next.js application development', source: { name: 'AWS Prescriptive Guidance: ADR process', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html' } },
];

const sharedSources = [
  { name: 'GitHub documentation: pull requests', url: 'https://docs.github.com/en/pull-requests' },
  { name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf' },
] as const;

function article(topic: Topic, index: number): BlogPost {
  return {
    slug: topic.slug,
    title: topic.title,
    excerpt: `A practical Philippines-focused guide for ${topic.reader}. Define the work, evidence, decision owner, and safe handoff before access expands.`,
    minutes: 11 + (index % 3),
    datePublished: '2026-09-18',
    revision: `daily-blog-2026-09-18-${topic.slug}`,
    keyTakeaways: [
      `Start with a bounded result: ${topic.outcome}.`,
      `Collect only the evidence needed: ${topic.inputs}.`,
      'Keep access, accepted risk, and production approval with the accountable client-side owner.',
    ],
    sections: [
      { heading: 'Start with the buyer decision', body: [
        `This guide is for ${topic.reader}. The useful starting point is not a broad request to “take ownership.” Write the decision the work must support and the person who will make it. For this lane, the target is to ${topic.outcome}. That sentence gives a Philippines-based developer a real finish line while keeping business and production authority explicit.`,
        `Attach ${topic.inputs}. Remove customer secrets and unrelated system access before the handoff. State the repository, revision, environment, time window, expected output, and review deadline. If one of those facts is unknown, record the question and owner instead of encouraging the developer to guess. A narrow brief improves both speed and the quality of written asynchronous work.`,
      ]},
      { heading: 'Record a trustworthy baseline', body: [
        `Begin with ${topic.baseline}. Save the commands or navigation steps, the relevant version identifiers, and the expected result. A baseline is valuable because it separates a pre-existing problem from a change introduced during the assignment. It also lets a reviewer reproduce the work during a different overlap window instead of relying on a screen share.`,
        `Keep the baseline proportionate. Do not collect every log or run an unrestricted scan when one journey answers the question. Prefer approved synthetic data, read-only views, focused tests, and short extracts that omit tokens and personal information. Note skipped checks and why they were skipped. Silence is not evidence that a check passed.`,
      ]},
      { heading: 'Split the work into reviewable slices', body: [
        `Break the assignment into discovery, a proposed change, verification, and handoff. Discovery maps the current behavior and affected owners. The proposal states the smallest correction and its tradeoffs. Verification repeats the baseline plus one meaningful boundary case. The handoff links evidence and names the next decision. Each slice should fit in a pull request or review packet that a buyer-team engineer can understand without a meeting.`,
        `Avoid mixing cleanup, tooling replacement, dependency changes, and product behavior unless they are inseparable. When adjacent work appears, add it to a follow-up list with an impact and owner. This protects the review from hidden scope and prevents a routine offshore assignment from becoming an unreviewable redesign. Small slices also make rollback and reassignment far more practical.`,
      ]},
      { heading: 'Define access and approval boundaries', body: [
        `Grant access for the stated task, through named accounts and existing approval paths. Repository write access, staging visibility, logs, and test systems can be introduced as the work requires them. Production credentials, billing authority, accepted security exceptions, and final release approval stay with accountable internal owners. Record who can approve each boundary and how access will be removed when the work ends.`,
        `A good boundary is operational, not ceremonial. If the developer cannot complete a safe check without broader access, ask whether an internal owner can provide a sanitized export, run a protected command, or review a proposed change. The answer may be to expand access, but that should be a deliberate decision with duration and audit evidence rather than a shared credential in chat.`,
      ]},
      { heading: 'Test the uncomfortable case', body: [
        `The boundary case for this guide is when ${topic.failure}. Reproduce that condition safely or model it with a fixture. Record the trigger, observed result, expected result, and the first boundary that behaved differently. Then repeat the nearest passing case. The pair gives reviewers more information than a long collection of unrelated screenshots.`,
        `Do not turn a failure exercise into an uncontrolled production experiment. Use staging, local fixtures, replayable requests, or an approved maintenance window. Stop when the next step would change customer data, spend money, weaken a control, or interrupt a service. Escalate with the evidence already gathered and a specific question for the owner.`,
      ]},
      { heading: 'Prepare evidence a reviewer can use', body: [
        `The review packet should contain the ticket, fixed revision, changed files, test commands, results, screenshots or logs where they clarify behavior, and remaining uncertainty. Summarize what changed in plain language before listing technical detail. Link raw evidence rather than pasting large output into the decision note. Mark any evidence that came from a different environment or time window.`,
        `For asynchronous review, put the requested decision near the top: approve the proposed slice, answer a named question, or reject it with a reason. Include the consequence of waiting and the safest default while waiting. A developer in the Philippines can then continue useful work without pretending that lack of response equals approval.`,
      ]},
      { heading: 'Use a two-window daily rhythm', body: [
        `Choose one overlap window for questions and one written handoff cutoff. Before overlap, the developer posts current state, evidence links, blockers, and decisions needed. During overlap, the team resolves the few questions that genuinely require conversation. Afterward, the developer executes the agreed slice and leaves a reproducible handoff. This pattern protects focus without requiring an unhealthy permanent night shift.`,
        `Measure the system by decision latency, review latency, reopened work, escaped defects, and completed outcomes. Raw message counts, commits, or online presence can reward noise. If work repeatedly waits, inspect ticket readiness, reviewer capacity, permissions, and dependency ownership before treating the delay as an individual performance problem.`,
      ]},
      { heading: 'Close the loop and plan the next lane', body: [
        `At completion, compare the result with the original decision sentence. Confirm the evidence is stored in the team system, temporary access is removed or given an expiry, follow-ups have owners, and operational documentation reflects the change. The internal owner records approval or rejection and the reason. That final note prevents the same investigation from restarting next sprint.`,
        `If this is the kind of bounded engineering lane your team needs, review ${topic.serviceLabel.toLowerCase()} or share the stack, first outcome, overlap window, and review owner through the contact page. Developer Offshore can use that concrete scope to discuss a Philippines-based role. The client team should still retain architecture, priority, security exceptions, sensitive credentials, and production release decisions.`,
      ]},
    ],
    table: { title: 'Handoff checklist', columns: ['Checkpoint', 'Evidence', 'Decision owner'], rows: [
      ['Scope', `Outcome, repository, revision, and ${topic.inputs}`, 'Engineering lead'],
      ['Baseline', topic.baseline, 'Assigned reviewer'],
      ['Boundary', topic.failure, 'System owner'],
      ['Release', 'Approved checks, recovery step, and remaining uncertainty', 'Internal release owner'],
    ]},
    relatedLinks: [
      { label: topic.serviceLabel, href: topic.service, note: 'See the nearest bounded engineering service lane.' },
      { label: 'Offshore development services', href: '/services', note: 'Compare role and delivery lanes.' },
      { label: 'Discuss the first outcome', href: '/contact', note: 'Share the stack, scope, schedule, and review owner.' },
    ],
    faqs: [
      { question: 'Can an offshore developer own this workflow?', answer: 'They can own the scoped investigation, implementation, evidence, and written handoff. The client-side owner should retain sensitive access, accepted risk, architecture exceptions, and production approval.' },
      { question: 'What should the first assignment include?', answer: `Use one bounded result, a fixed revision, approved access, a named reviewer, and ${topic.baseline}.` },
      { question: 'How should a distributed team handle blockers?', answer: 'Record the blocker, evidence, impact, safest default, decision owner, and response deadline before the overlap window.' },
    ],
    sources: [topic.source, ...sharedSources],
  };
}

export const september18BlogBatch: readonly BlogPost[] = topics.map(article);
