import type { ResearchPost } from './fleet-data';

const related = [{ title: 'Research library', href: '/research' }, { title: 'Developer services', href: '/services' }, { title: 'Daily developer guides', href: '/blog' }];
const faq = (topic: string) => [
  { question: `What does this ${topic} study prove?`, answer: 'It provides a bounded method for inspecting one software decision. It does not certify an entire system or replace the accountable product, security, or technical owner.' },
  { question: 'What can a Philippines-based developer contribute?', answer: 'A developer can collect approved evidence, build synthetic fixtures, run the agreed checks, and document observations. Internal owners retain decisions involving customer behavior, protected data, production authority, and residual risk.' },
];

export const august23ResearchBatch: readonly ResearchPost[] = [
  {
    slug: 'offshore-developer-review-queue-aging-evidence-research-2026-08-23',
    title: 'When does an offshore developer review queue become a delivery risk?',
    excerpt: 'A research method for separating ordinary review waiting time from evidence that a distributed engineering queue is hiding change risk.',
    published: '2026-08-23',
    sections: [
      { heading: 'Research question and evidence scope', body: [
        'When does an open pull request become a delivery risk for a Philippines-based developer rather than simply an item waiting in a reviewer’s queue? This study follows a bounded sample of changes from ready-for-review to first useful review, revision, approval, and merge. It examines age, size, dependency on a particular owner, unanswered questions, and the consequence of delay. It does not assume that faster approval is better: a careful security review can legitimately take longer than a low-risk copy change.',
        'The unit of analysis is a reviewable change with a stated outcome and a named next decision. A distributed team needs more than elapsed hours because a queue can be old for harmless reasons, while a small change can be risky when it blocks a migration or leaves a broken handoff. The developer can make the change legible and respond to comments; the buyer-side owner decides priority, risk acceptance, and whether another reviewer may approve.'
      ] },
      { heading: 'Methodology and public evidence', body: [
        'Select recent changes across at least three risk classes: routine product work, interface or data changes, and access or operational changes. For each, record ready timestamp, first substantive review timestamp, number of reviewers, changed files, dependency wait, comment age, revision count, and merge outcome. Define "substantive" before counting so an automated acknowledgement is not mistaken for technical review. Compare queue age with change size and risk rather than publishing a universal threshold.',
        'Use Google Engineering Practices on code review, GitHub’s pull-request review guidance, and the DORA research programme as evidence lenses. These sources support small reviewable changes, clear feedback, and delivery measurement; they do not establish a private team’s staffing level or acceptable waiting time. State the repository sample, date window, excluded drafts, timezone normalization, and whether the sample includes changes abandoned before review.'
      ] },
      { heading: 'Analysis: age, exposure, and hidden blocking', body: [
        'Queue age is informative when paired with a decision that is becoming harder to recover. A stale pull request may keep an outdated assumption alive, widen merge conflict, delay a dependent task, or leave a temporary access path in place. Conversely, a deliberately paused change with an explicit owner and reason is not necessarily unhealthy. The evidence should distinguish waiting for review, waiting for a product answer, waiting for an environment, and waiting because the author chose to defer.',
        'Review latency also interacts with time-zone handoff quality. A developer finishing a focused change may leave a clear summary, tests, screenshots where useful, and one concrete question. If the reviewer cannot tell what changed or what remains uncertain, the queue measures communication cost as much as capacity. A useful comparison examines whether better summaries reduce clarification loops, without claiming that correlation proves causation.'
      ] },
      { heading: 'Counterevidence and role boundary', body: [
        'A timestamp report can mislead. Some repositories batch reviews, some changes require a particular specialist, and some teams intentionally protect uninterrupted review blocks. Review comments can be numerous but low value, or brief but decisive. A short sample can also overrepresent a release week, an incident, or one unusually complex change. Record these conditions instead of smoothing them away.',
        'The developer may split a large diff, add a reproducible test, identify the blocked decision, or request a second reviewer through the agreed path. The internal engineering owner decides whether to reprioritize work, change ownership, pause a release, or accept the wait. The contributor should not bypass branch protections, self-approve a sensitive change, or turn a queue metric into a performance claim about an individual.'
      ] },
      { heading: 'Limitations and decision boundary', body: [
        'A review sample cannot measure review quality completely. It may not reveal discussion in private channels, unrecorded pairing, or the cost of a defect discovered after merge. DORA metrics are useful at a system level but should not be applied as a quota to one developer. State which review events were observable, how timestamps were normalized, and what outcome data was unavailable.',
        'Evidence supports a bounded action: split a change, add a reviewer rota, reserve review capacity, clarify a handoff, escalate a decision, or leave a deliberately paused item documented. It does not support a blanket service-level promise or the claim that reducing review time automatically improves software delivery.'
      ] },
      { heading: 'Evidence-led conclusion', body: [
        'A review queue becomes a delivery risk when its age is coupled to an unresolved decision, growing merge or dependency exposure, or a loss of recoverable context. The strongest signal is not the calendar alone; it is whether the next owner can understand the change, act safely, and explain what delay now costs.',
        'For an offshore developer workflow, the practical conclusion is to make every waiting item explicit: current state, evidence, question, owner, and consequence of waiting. That record lets a reviewer distinguish a healthy pause from a hidden blocker and gives the team a small corrective choice without pretending that speed is the only measure of quality.'
      ] },
    ],
    sources: [{ name: 'Google Engineering Practices: Code Review', url: 'https://google.github.io/eng-practices/review/' }, { name: 'GitHub pull request reviews', url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews' }, { name: 'DORA research', url: 'https://dora.dev/research/' }],
    keyStats: ['Review age separated from product and environment waiting', 'Risk classes compared with change size and dependency exposure', 'Handoff quality treated as observable review evidence'],
    takeaways: ['Age alone is not risk.', 'Make waiting reasons and owners explicit.', 'Keep approval and prioritization with internal owners.'], faqs: faq('review queue'), related,
  },
  {
    slug: 'offshore-developer-utc-midnight-date-boundary-research-2026-08-23',
    title: 'How should an offshore developer test date boundaries in a global application?',
    excerpt: 'An evidence-led investigation of timezone, calendar, and persistence assumptions before a distributed team changes date-sensitive software.',
    published: '2026-08-23',
    sections: [
      { heading: 'Research question and evidence scope', body: [
        'What evidence shows that a date-sensitive feature behaves consistently when a Philippines-based developer and a buyer-side team work across different clocks? The study follows one user-visible date from input through storage, API transport, rendering, notification, and reporting. It concentrates on midnight boundaries, daylight-saving changes where relevant, locale formatting, and users who move between regions. It does not claim that one timezone policy fits every product.',
        'The important distinction is an instant versus a calendar date. A meeting begins at an instant; a birthday, invoice period, or due date may be a local calendar concept. A distributed developer can expose where the implementation confuses those meanings, build boundary fixtures, and document observed output. Product and legal owners decide the meaning that the system must preserve.'
      ] },
      { heading: 'Methodology and public evidence', body: [
        'Choose one date-bearing workflow and write its semantic contract before testing. Create fixtures just before, at, and just after local midnight; include two user zones, a server zone, and the persisted representation. Repeat with an offset transition and a locale that changes ordering or month names. Record input, serialized value, rendered value, query range, notification timestamp, and expected calendar meaning at every boundary.',
        'Use the IANA Time Zone Database, W3C Internationalization guidance, and ECMA-262 date and time definitions as evidence lenses. They explain how timezone data, locale behavior, and language-level date objects work; they do not determine the private application’s policy. State runtime version, timezone data version, browser or server context, and which transitions were simulated rather than observed.'
      ] },
      { heading: 'Analysis: preserving meaning across boundaries', body: [
        'Many date defects begin when a date-only value is converted into an instant too early. A form that means "August 23 in the customer’s locale" can shift to August 22 when stored at UTC midnight and rendered west of Greenwich. The reverse error occurs when an instant is formatted as a date in the server zone. Evidence should follow the value’s meaning, not only its string shape, and should inspect filters whose inclusive or exclusive end changes at midnight.',
        'A reliable test matrix pairs semantic type with boundary. For an instant, compare the same event across views and verify that the moment is preserved. For a calendar date, compare users without changing the intended day. For a recurring local time, test skipped and repeated clock times. A developer may propose a typed representation or explicit conversion; the owner decides whether historical records retain their original zone and what users should see.'
      ] },
      { heading: 'Counterevidence and role boundary', body: [
        'Passing tests in UTC do not prove correctness elsewhere, but failing to test UTC does not prove a bug either. Timezone databases change, browser formatting can differ, and user profiles may be incomplete. A daylight-saving case may be irrelevant to a product that deliberately uses one fixed civil zone. State the supported regions and the policy behind them rather than treating global support as automatic.',
        'The developer can add deterministic fixtures, improve parsing, expose the chosen zone in diagnostics, and prevent accidental implicit conversion. The product owner decides the user promise; the data owner decides migration treatment; the security or privacy owner decides whether location or timezone data may be retained. No contributor should silently change historical dates or infer a locale from IP address.'
      ] },
      { heading: 'Limitations and decision boundary', body: [
        'A single workflow cannot establish every date behavior in a system. External calendar providers, operating-system settings, and old records can remain outside the test harness. Formatting examples can also conceal range-query errors. Preserve fixtures, assumptions, runtime details, and untested integrations so a later reviewer can reproduce the boundary.',
        'Evidence supports a bounded action: classify the field, add boundary cases, make zone conversion explicit, migrate one representation, or document an accepted limitation. It does not support replacing every date with UTC or claiming that a green unit-test suite proves worldwide calendar correctness.'
      ] },
      { heading: 'Evidence-led conclusion', body: [
        'A global date workflow is supported by evidence when its semantic type is explicit and the same meaning survives storage, transport, rendering, filtering, and notification at the tested regional boundaries. The finding is about preservation of meaning, not a preferred library or a universal timezone rule.',
        'For distributed software development, the safest handoff names the user zone, server zone, persisted form, boundary fixtures, and owner of the date policy. That lets an offshore developer fix an identified conversion without deciding whether a business date is an instant, a local day, or a historical record that must never move.'
      ] },
    ],
    sources: [{ name: 'IANA Time Zone Database', url: 'https://www.iana.org/time-zones' }, { name: 'W3C Date and Time Formats', url: 'https://www.w3.org/TR/NOTE-datetime' }, { name: 'ECMAScript Date time values', url: 'https://tc39.es/ecma262/multipage/numbers-and-dates.html' }],
    keyStats: ['Instant and calendar-date semantics tested separately', 'Midnight, locale, and offset-transition fixtures defined', 'Storage and rendering boundaries traced end to end'], takeaways: ['Classify the date before choosing representation.', 'Test user and server zones together.', 'Do not silently rewrite historical meaning.'], faqs: faq('date boundary'), related,
  },
  {
    slug: 'offshore-developer-read-model-freshness-evidence-research-2026-08-23',
    title: 'What evidence is enough to call a distributed read model fresh?',
    excerpt: 'A bounded research method for measuring source-to-view lag, stale reads, and recovery ownership in developer-led application work.',
    published: '2026-08-23',
    sections: [
      { heading: 'Research question and evidence scope', body: [
        'What evidence is enough to call a read model fresh for a user action, rather than merely recently updated? This study follows one write through its source of truth, event or change feed, projection worker, index, cache, and user-facing query. It asks how freshness is defined, observed, and recovered when a Philippines-based developer works on one side of a handoff and the internal owner reviews the result later.',
        'Freshness is a product property with technical evidence. A support dashboard may tolerate minutes of lag while a permission view may require immediate consistency. The unit is a write and its first acceptable read, with clock assumptions and failure states recorded. The developer can measure lag and repair projection logic; the owner decides the user promise and whether stale data is safe to display.'
      ] },
      { heading: 'Methodology and public evidence', body: [
        'Define an acceptance window for one representative record and instrument a correlation identifier from write to visible read. Generate updates at quiet and normal load, then capture source commit time, event publication, consumer receipt, projection commit, cache invalidation, query response, and browser render. Add duplicate, delayed, reordered, dropped, and replayed events. Measure a distribution of lag rather than reporting only the average.',
        'Use Google’s Site Reliability Engineering workbook, Martin Kleppmann’s material on stream processing, and the W3C Trace Context Recommendation as evidence lenses. They support service-level thinking, event-time reasoning, and cross-service correlation; they cannot choose a private freshness objective. State clock synchronization, sampling interval, data volume, cache configuration, and which failures were injected.'
      ] },
      { heading: 'Analysis: freshness versus correctness', body: [
        'A read can be fresh and wrong, or old and still acceptable. The first question is whether the projection represents the source correctly; the second is how long that representation may lag. A dashboard that shows a new status after one minute may satisfy its policy, while an authorization decision based on the same lag may create an unacceptable boundary. Tests should name both correctness and age.',
        'Lag can accumulate invisibly when a worker remains healthy but cannot keep up, when an event is acknowledged before projection commit, or when a cache key survives invalidation. Compare source and read-model versions, not only timestamps. If clocks differ, use sequence numbers or trace propagation where possible. A developer should make uncertainty visible rather than invent a precision the system cannot support.'
      ] },
      { heading: 'Counterevidence and role boundary', body: [
        'Synthetic events may have simpler payloads than real changes, and a short observation window can miss backlog growth. A trace can end before browser caching or a third-party index. Retries may improve eventual completion while creating duplicate notifications. Record the omitted layers, sampling bias, and whether the measured path represents a customer-critical workflow.',
        'The developer may add version fields, lag telemetry, idempotent projection, a repair command, or a focused consistency test. The service owner sets the freshness objective; the product owner decides user messaging; the operations owner decides replay and degraded-mode authority. A contributor must not present a lag measurement as a service guarantee or replay live data without approval.'
      ] },
      { heading: 'Limitations and decision boundary', body: [
        'One projection and one observation window cannot establish system-wide freshness. Queues, caches, replicas, and clocks vary over time. Public guidance provides measurement ideas, not a verdict about the application. Preserve the sampled events, versions, thresholds, and unavailable signals so the next reviewer can repeat the study.',
        'Evidence supports a bounded action: add lag instrumentation, change acknowledgement ordering, narrow a cache, provide a stale-state label, create a repair path, or revise the declared objective. It does not support claiming that eventual consistency is always acceptable or that low average lag removes tail risk.'
      ] },
      { heading: 'Evidence-led conclusion', body: [
        'A read model is fresh enough only relative to a named user decision, a measured acceptance window, and evidence that the projection remains correct across the tested failure modes. Freshness is not a single global number; it is a contract attached to a workflow and an owner.',
        'A strong offshore developer handoff includes the correlation path, source and projected versions, lag distribution, stale behavior, repair authority, and untested layers. That makes the technical work reviewable while keeping the user promise and risk acceptance with the internal team.'
      ] },
    ],
    sources: [{ name: 'Google SRE Workbook', url: 'https://sre.google/workbook/table-of-contents/' }, { name: 'W3C Trace Context', url: 'https://www.w3.org/TR/trace-context/' }, { name: 'Martin Kleppmann, stream processing', url: 'https://martin.kleppmann.com/2018/01/18/eventual-consistency.html' }],
    keyStats: ['Write-to-read path traced with correlation evidence', 'Lag distributions separated from correctness checks', 'Replay and repair ownership made explicit'], takeaways: ['Freshness is relative to a user decision.', 'Measure tails and failure modes.', 'Keep replay authority with the owner.'], faqs: faq('read-model freshness'), related,
  },
  {
    slug: 'offshore-developer-third-party-sdk-upgrade-evidence-research-2026-08-23',
    title: 'How can an offshore developer show that a third-party SDK upgrade is safe?',
    excerpt: 'A research design for separating dependency compatibility evidence from unsupported confidence when an integration library changes.',
    published: '2026-08-23',
    sections: [
      { heading: 'Research question and evidence scope', body: [
        'What evidence shows that a third-party SDK upgrade preserves the application behavior that an offshore developer is assigned to maintain? The study follows one dependency from declared version and transitive graph through build, initialization, representative calls, error handling, telemetry, and rollback. It does not treat a successful install as compatibility proof or a release note as a substitute for application evidence.',
        'The scope is deliberately narrow: one integration, one supported runtime matrix, and the user or operational journeys that depend on it. A Philippines-based developer can inspect the lockfile, compare public API behavior, build contract fixtures, and report unknowns. The application owner decides whether a vendor change is acceptable, whether a security exception is needed, and whether production rollout may proceed.'
      ] },
      { heading: 'Methodology and public evidence', body: [
        'Record current and candidate versions, direct and transitive dependencies, runtime support, initialization options, authentication mode, request and response fixtures, retry behavior, timeout defaults, and error mapping. Run the same fixture suite against both versions, then add negative cases and a controlled unavailable-vendor response. Inspect generated bundles or server startup where the SDK changes packaging. Keep credentials and customer payloads out of the comparison.',
        'Use GitHub dependency-review documentation, NIST Secure Software Development Framework guidance, and Semantic Versioning principles as evidence lenses. They support change visibility, verification, and version communication; they do not guarantee that a minor or patch release is behaviorally safe. State the package manager, lockfile, runtime, platform, vendor sandbox behavior, and tests not run.'
      ] },
      { heading: 'Analysis: compatibility is a chain', body: [
        'An SDK can preserve type signatures while changing defaults, timing, error classes, serialization, retry volume, or telemetry fields. A passing unit test may exercise a mock that does not represent the vendor response. The strongest evidence compares observable behavior at the application boundary: successful call, invalid input, authorization failure, timeout, rate limit, malformed response, and dependency recovery.',
        'Security and operational impact deserve separate treatment. A version may close an advisory while requiring a new permission or changing certificate validation. A rollback may restore code but not undo a remote-side effect. The developer can identify those edges and propose staged verification; the owner decides data handling, vendor trust, rollout sequencing, and recovery for irreversible operations.'
      ] },
      { heading: 'Counterevidence and role boundary', body: [
        'Vendor sandboxes can be less strict or less busy than production, and public release notes can omit undocumented behavior. Transitive dependencies may differ by platform. An unchanged fixture suite can miss a new API path used only under a rare customer configuration. Preserve the exact graph, environment, response samples, and observation period so confidence stays proportional to evidence.',
        'The developer may update the lockfile, add a compatibility adapter, expand fixtures, and prepare a reversible pull request. The service owner approves vendor risk and production access; the security owner approves exceptions; the product owner decides whether a changed user-visible behavior is acceptable. Do not upgrade by suppressing a failing test or bypassing a protected review.'
      ] },
      { heading: 'Limitations and decision boundary', body: [
        'No finite test suite proves compatibility with every vendor response or future configuration. Version semantics communicate intent, not local behavior. Dependency scanners also cannot decide whether the package is reachable in a deployed path. State the evidence boundary, skipped platforms, and residual risks rather than labeling the change universally safe.',
        'Evidence supports a bounded action: upgrade in a sandbox, add an adapter, pin temporarily, defer for a vendor fix, or approve a staged rollout with a rollback owner. It does not support a blanket rule that newer is safer or that security urgency eliminates compatibility testing.'
      ] },
      { heading: 'Evidence-led conclusion', body: [
        'An SDK upgrade is supported by evidence when the candidate graph, runtime, critical application behaviors, negative cases, and recovery boundary have been compared against the current version. The result can still be conditional; honest limits are part of a safe decision rather than a weakness in the handoff.',
        'For distributed software development, the useful artifact names the changed dependency, tested journeys, vendor assumptions, observed differences, untested paths, and approval owner. That gives an offshore developer a clear implementation lane while keeping compatibility, security, and release authority with the people accountable for the integration.'
      ] },
    ],
    sources: [{ name: 'GitHub dependency review', url: 'https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review' }, { name: 'NIST SSDF SP 800-218', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' }, { name: 'Semantic Versioning 2.0.0', url: 'https://semver.org/' }],
    keyStats: ['Current and candidate dependency graphs recorded', 'Positive, negative, timeout, and recovery fixtures compared', 'Vendor, security, and rollback boundaries separated'], takeaways: ['Test application behavior, not only installation.', 'Treat release semantics as a clue, not proof.', 'Separate compatibility from approval.'], faqs: faq('SDK upgrade'), related,
  },
  {
    slug: 'offshore-developer-privacy-safe-test-fixture-research-2026-08-23',
    title: 'What makes a test fixture safe enough for an offshore developer to use?',
    excerpt: 'A practical research question about synthetic data, re-identification risk, and repeatable fixtures for distributed software delivery.',
    published: '2026-08-23',
    sections: [
      { heading: 'Research question and evidence scope', body: [
        'What evidence shows that a test fixture is safe enough for a Philippines-based developer to use without exposing real customer information? The study follows a fixture from creation and storage through developer access, test execution, logs, screenshots, cleanup, and reuse. It asks whether the data is synthetic, whether combinations could identify a person, and whether the fixture contains more detail than the test needs. It does not claim that a label such as "dummy" proves safety.',
        'A fixture is also a software artifact: it must be realistic enough to exercise behavior and stable enough to reproduce a result. The developer can design generated records, remove unnecessary fields, add boundary cases, and document the reset path. Privacy, security, and product owners decide what data may enter an environment and what residual risk the organization accepts.'
      ] },
      { heading: 'Methodology and public evidence', body: [
        'Map the fields required by one test journey, then generate values from a controlled schema rather than copying a production row. Include invalid, empty, duplicate, long, and permission-boundary cases with synthetic identities. Search the fixture, logs, snapshots, screenshots, and test reports for accidental names, emails, identifiers, tokens, or realistic combinations. Record who can access the storage, how long it remains, and how reset and deletion are verified.',
        'Use the NIST Privacy Framework, OWASP guidance on sensitive data exposure, and the UK Information Commissioner’s anonymisation guidance as evidence lenses. These sources support data minimization, protection, and re-identification analysis; they do not determine the private organization’s legal status or policy. State generation method, fields included, environment, access path, retention, and the parts that were not independently reviewed.'
      ] },
      { heading: 'Analysis: synthetic does not mean consequence-free', body: [
        'A random string can be a poor fixture if the test needs a recognizable locale, date boundary, permission relationship, or realistic message length. Conversely, faithfully copied records can carry unnecessary identity and behavioral detail. The right question is whether each field has a test purpose and whether its value can be generated without reproducing a person. Pay attention to joins: a name, rare location, timestamp, and account role may identify someone even when direct identifiers are removed.',
        'Fixture safety includes operational paths. A test can pass while printing a payload to CI logs, storing snapshots in an artifact bucket, or leaving a downloadable export behind. Check failure output, debug flags, browser recordings, and support attachments. A developer may fix redaction or fixture generation; the internal owner decides data classification, retention, access approval, and whether a production-like environment is necessary at all.'
      ] },
      { heading: 'Counterevidence and role boundary', body: [
        'A privacy review based on field names can miss inference from combinations, and a synthetic generator can accidentally emit valid credentials or sensitive-looking values. A one-time scan cannot guarantee that a new assertion will not log data later. Some tests require a controlled masked sample, but masking strength and governance must be demonstrated rather than assumed.',
        'The developer can use least-privilege access, isolated fixtures, deterministic seeds, and cleanup checks. Privacy or security owners approve exceptions; the service owner approves environment access; the product owner decides the behavior represented by a fixture. Never download customer data for convenience, paste it into a ticket, or treat a test failure as permission to weaken masking.'
      ] },
      { heading: 'Limitations and decision boundary', body: [
        'This study cannot establish legal compliance or prove that all downstream copies are deleted. Re-identification risk depends on external data and context, and an environment can change after the review. Preserve the fixture version, generator, access list, scan result, retention setting, and known gaps.',
        'Evidence supports a bounded action: generate new fixtures, remove fields, isolate storage, add a log assertion, shorten retention, or escalate a masked-data exception. It does not support a universal claim that all synthetic data is harmless or that deletion of one file removes every copy.'
      ] },
      { heading: 'Evidence-led conclusion', body: [
        'A fixture is safe enough for a bounded developer assignment when every included field has a test purpose, values are generated or demonstrably protected, access and retention are explicit, and logs and artifacts have been checked for leakage. Safety remains contextual and must be revisited when the fixture or environment changes.',
        'The distributed handoff should include the generator, seed policy, fields, boundary cases, storage, cleanup evidence, and approval owner. That enables an offshore developer to reproduce a defect without receiving unnecessary private information, while the accountable team retains authority over exceptions and risk.'
      ] },
    ],
    sources: [{ name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework' }, { name: 'OWASP Sensitive Data Exposure', url: 'https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure' }, { name: 'ICO anonymisation guidance', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/anonymisation/' }],
    keyStats: ['Field purpose and synthetic generation recorded', 'Logs, snapshots, and artifacts included in leakage checks', 'Access, retention, and exception ownership made explicit'], takeaways: ['Minimize before generating.', 'Check combinations and operational copies.', 'Keep privacy exceptions with the accountable owner.'], faqs: faq('test fixture'), related,
  },
];

export const august23ResearchManifest = august23ResearchBatch.map((post) => ({ slug: post.slug, route: `/research/${post.slug}`, sourcePaths: ['app/aug23-research-batch.ts'], sourceDate: '2026-08-23', sourceDateField: 'published' }));
