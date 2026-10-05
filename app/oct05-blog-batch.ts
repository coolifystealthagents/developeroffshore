import type { BlogPost } from './data';

// October 5 cycle draft. Publication dates are added only when the combined
// release date is known in UTC. Do not infer a date from the cycle label.
export const october05BlogBatch: readonly BlogPost[] = [
  {
    slug: 'webhook-signing-secret-rotation-handoff',
    title: 'Webhook Signing-Secret Rotation Without a Verification Gap',
    excerpt: 'A practical handoff for rotating webhook secrets while delayed deliveries, retries, and multiple receivers remain verifiable.',
    minutes: 10,
    revision: 'daily-blog-2026-10-05-webhook-signing-secret-rotation-handoff',
    keyTakeaways: [
      'Inventory every signer and verifier before introducing a second secret.',
      'Accept old and new signatures only for a measured overlap window.',
      'Retire the old secret using delivery evidence, not a guessed delay.',
    ],
    sections: [
      {
        heading: 'Treat rotation as a protocol change',
        body: [
          'A webhook secret is shared state between the system that signs an event and every endpoint that verifies it. Replacing the value in one dashboard is therefore not a complete rotation. The useful unit of work is one delivery path: producer, signing configuration, network route, receiver, secret store, verification library, retry queue, dead-letter path, and operational owner. List those components before changing code. Include staging and disaster-recovery receivers if they can receive real retries. A forgotten receiver can fail silently while the primary endpoint looks healthy.',
          'Record how the sender builds the signed message. Some providers sign the raw request body plus a timestamp; others publish a versioned envelope or several signatures. Parsing JSON and serializing it again can change bytes even when the data looks identical. The handoff should name the exact header, signed bytes, algorithm, timestamp rule, encoding, and library version. HMAC describes a construction, but the provider contract determines the message and comparison behavior. Never invent a generic verifier from the secret alone.',
        ],
      },
      {
        heading: 'Map secret custody before adding overlap',
        body: [
          'Identify the authoritative secret store, the identity allowed to read each value, the deployment mechanism that delivers it, and the process for revoking access. Give the incoming and retiring secrets distinct identifiers such as versions, not labels such as current and old that can reverse meaning during rollback. Logs may show the version that matched, but must not contain the secret, complete signature, or request body merely to make troubleshooting easier. Synthetic event identifiers are enough for a repeatable test.',
          'When several application replicas verify webhooks, prove that they receive the same approved secret set before the sender begins using the new value. A rolling deployment can create a mixed fleet: an early replica accepts the new signature while a late replica accepts only the old one. Route controlled deliveries across every replica or inspect configuration revision and readiness evidence that genuinely identifies the loaded versions. Restart behavior matters because a process may cache secret material rather than reread it on every request.',
        ],
      },
      {
        heading: 'Build a two-key verifier with one result',
        body: [
          'During overlap, calculate verification against each allowed secret according to the provider specification and return one authorization decision. Keep the comparison timing-safe through the supported cryptographic API. Do not stop at a convenient string comparison or expose which part of a signature was correct. If the sender includes multiple versioned signatures, parse limits should prevent an attacker from submitting an unbounded header that forces excessive work. Reject malformed encodings, missing timestamps, unsupported algorithms, and duplicate ambiguous fields before business processing.',
          'A successful signature proves knowledge of an accepted secret; it does not prove that the event is fresh, intended for this account, or safe to apply twice. Preserve the existing timestamp tolerance, event identity, tenant mapping, and idempotency control throughout rotation. Test a correctly signed replay outside the freshness window and a duplicate inside it. Both cases help reviewers see that rotating keys did not accidentally turn signature verification into the only gate.',
        ],
      },
      {
        heading: 'Rehearse delayed delivery and rollback',
        body: [
          'Create fixtures for a request signed only by the retiring value, only by the incoming value, by neither value, with a stale timestamp, with a changed body, and with a valid duplicate event identifier. Send them through the real HTTP body-reading path. Then hold a retiring-key event in a controlled retry queue until after the sender switches. It should remain verifiable during the declared overlap, while a newly created event should match the incoming key. Record receiver revision, secret-version match, status code, processing outcome, and redacted event identifier.',
          'Rollback has two directions. If receivers cannot verify the incoming key, the sender may need to continue the retiring key while configuration is corrected. If the incoming key was exposed, restoring the retiring key may be unsafe; a third value and an incident decision may be required. Write both cases before the window opens. The security owner decides whether suspected exposure changes the plan, while the developer provides bounded verifier behavior and evidence rather than choosing which credential remains trustworthy.',
        ],
      },
      {
        heading: 'Retire the old value from evidence',
        body: [
          'Choose the overlap from documented provider retry behavior plus observed queue age and receiver downtime policy. A fixed five-minute wait is not credible when deliveries can retry for hours. Watch matches by secret version, oldest retry age, invalid-signature counts, accepted duplicates, and dead-letter volume. Investigate a continuing retiring-key match instead of hiding it in an aggregate success rate. It may represent a delayed delivery, an unswitched signer, another environment, or an unauthorized caller with the old value.',
          'Remove the retiring value only after the maximum relevant retry horizon has passed, every intended signer uses the incoming value, receiver fleets have converged, and owners have reviewed unresolved failures. Remove it from runtime configuration, secret stores, deployment variables, local recovery notes, and any temporary operator access. Restart or reload receivers and repeat both positive and negative fixtures. Deletion from one dashboard does not demonstrate that a cached process stopped accepting it.',
        ],
      },
      {
        heading: 'Package the cross-time-zone handoff',
        body: [
          'The offshore developer can implement dual-version verification, bounded parsing, metrics, fixtures, and configuration changes in approved environments. The client-side security or service owner controls secret creation, protected values, production timing, exposure decisions, and final retirement. The handoff should include starting and ending revisions, signer and receiver inventory, provider specification, secret version identifiers, overlap start and stop conditions, fixture results, retry-age evidence, failed events, rollback choices, owner approvals, and the next authorized action.',
          'End with an explicit state: preparing overlap, accepting both values, sender switched, observing retries, or old value retired. “Rotation complete” is too vague if one receiver still holds the retiring value or a queue contains older signatures. A precise state lets the next working window continue safely without receiving the credential itself. For staffing or support around this kind of bounded integration work, bring the provider, receiver stack, retry behavior, review owner, and first test case to the Developer Offshore contact conversation.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Node.js API development', href: '/services/node-js-api-development', note: 'Define a bounded integration and review path.' },
      { label: 'Developer services', href: '/services', note: 'Match the work with an accountable technical owner.' },
      { label: 'Discuss the assignment', href: '/contact', note: 'Bring the provider contract, stack, and review boundary.' },
    ],
    faqs: [
      { question: 'How long should both webhook secrets remain valid?', answer: 'Base the overlap on the provider retry contract, observed queue age, receiver downtime, and unresolved deliveries. Retire the old value only when that evidence supports removal.' },
      { question: 'Can the offshore developer own the production secret?', answer: 'The developer can implement and test version-aware verification. A designated client-side security or service owner should control protected values, production timing, and exposure decisions.' },
    ],
    sources: [
      { name: 'IETF RFC 2104: HMAC', url: 'https://www.rfc-editor.org/rfc/rfc2104', note: 'Cryptographic construction used by many webhook signature schemes.' },
      { name: 'OWASP Secrets Management Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html', note: 'Secret lifecycle, access, and rotation guidance.' },
    ],
  },
  {
    slug: 'http-etag-lost-update-review',
    title: 'Use HTTP ETags to Stop Lost Updates in Distributed Product Work',
    excerpt: 'A reviewable way to connect validators, conditional requests, conflict responses, and user recovery without treating an ETag as magic locking.',
    minutes: 10,
    revision: 'daily-blog-2026-10-05-http-etag-lost-update-review',
    keyTakeaways: ['Define the representation covered by the validator.', 'Require a matching precondition for unsafe replacement.', 'Give users a deliberate conflict-recovery path.'],
    sections: [
      { heading: 'Start with the lost-update story', body: [
        'Picture two editors opening the same customer-visible description at version 14. Ana changes the support instructions and saves version 15. Ben, whose screen still shows version 14, changes only the title and submits the entire older document. Without a precondition, Ben’s replacement can restore the obsolete support text while appearing to save successfully. The defect is not simultaneous typing by itself. It is an unsafe write accepted without proving which prior state the writer intended to replace.',
        'Write that sequence as a fixture before choosing headers. Identify the resource, representation, read response, local edits, intervening change, write method, expected conflict, and recovery experience. Decide whether the operation replaces the whole representation, patches named fields, appends an event, or invokes a command. Conditional requests are especially useful for replacement and state-dependent changes, but the application still owns merge meaning. An ETag cannot decide whether two edits are semantically compatible.'
      ]},
      { heading: 'Define what the validator identifies', body: [
        'A strong entity tag is an opaque validator for a selected representation. Document whether it changes when persisted fields change, when computed fields change, when permissions hide fields, or when content negotiation produces another form. Do not expose a database timestamp or revision number casually if that leaks information or fails to change for distinct states. The value can be generated from an internal version or content digest, but clients must treat it as opaque.',
        'Compression and other transformations complicate representation identity. A validator attached to JSON is not automatically valid for an HTML view or a user-specific projection. Exercise authorized users who see different fields, language variants, and any gateway that rewrites the response. If the same URL emits materially different bytes or semantics, verify that cache metadata and validators distinguish them correctly. A shared ETag must never become evidence that two users were entitled to the same private representation.'
      ]},
      { heading: 'Require the precondition on the write path', body: [
        'Return the current ETag with the read response and have the client send If-Match when it updates that version. The server evaluates the precondition atomically with the mutation. Checking the value in application code and writing later can recreate the race between those operations. The persistence layer needs a compare-and-change boundary, such as an update constrained by the expected version, whose affected-row result is interpreted deliberately.',
        'Decide what happens when If-Match is absent. For a route that promises lost-update protection, accepting an unconditional replacement because an older client omitted the header defeats the contract. A precondition-required response can be appropriate, while a mismatched supplied validator should produce the protocol’s precondition failure. Keep validation, authorization, not-found handling, and precondition evaluation ordered so responses do not disclose a resource the caller cannot access.'
      ]},
      { heading: 'Test concurrency rather than a serial imitation', body: [
        'Create one record and obtain the same validator in two independent clients. Pause both before the write, release them together, and assert that only one state-dependent mutation succeeds. The rejected request must not emit side effects, enqueue duplicate work, or update an audit record as though it succeeded. Repeat across application replicas and against the actual database isolation and proxy path used by the service. A unit test around string equality does not prove atomic mutation.',
        'Add cases for a stale tag, malformed syntax, a tag from another resource, a weak validator where strong comparison is required, a wildcard if supported, deletion between read and write, and a retry after the client fetches the new state. Observe status, response body, database version, emitted events, and audit result. Use synthetic records so the evidence can travel across working hours without exposing customer data.'
      ]},
      { heading: 'Design recovery for a person, not only an API client', body: [
        'A conflict response should let the interface explain that the record changed after it was opened. Preserve the user’s proposed values locally, fetch the current server representation, and show the fields that differ. Simple non-overlapping edits may be mergeable under an explicit product rule; overlapping or consequential changes should remain a user or owner decision. A blind retry with the new ETag merely converts a detected conflict into an overwrite.',
        'Accessibility belongs in this state. Move focus to a clear conflict heading, announce the changed status, label original, current, and proposed values, and keep keyboard access to review controls. If sensitive fields cannot be redisplayed, explain the safe next action without echoing hidden data. Product owners define merge rules and wording. The developer builds the mechanics and demonstrates that rejected writes preserve both server truth and the person’s unsaved work.'
      ]},
      { heading: 'Separate cache validation from write safety', body: [
        'If-None-Match on a safe read can avoid transferring an unchanged representation. If-Match on an unsafe request can guard the intended prior state. They use validators but answer different questions. Test gateways and SDKs so a caching layer does not strip a request precondition or synthesize an unrelated validator. Also verify that a 304 read path preserves the client’s association between its cached body and validator.',
        'Monitor precondition failures by route and client version, but do not label every conflict an error. Some failures prove the control worked. Investigate sudden changes: an increase may reveal a new editing pattern or stale client, while zero conflicts can mean the header disappeared. Retain enough correlation to reproduce the sequence without logging private bodies. Metrics should distinguish missing preconditions, mismatches, successful guarded writes, and recovery outcomes.'
      ]},
      { heading: 'Hand off an enforceable contract', body: [
        'The delivery record should name the protected routes, representation definition, validator generation rule, required headers, atomic persistence check, response semantics, UI recovery, concurrency fixtures, authorization cases, metrics, known unprotected clients, rollout sequence, and rollback. Include exact revisions and passed or skipped environments. The API owner approves compatibility and merge semantics; the data or product owner decides consequential conflict resolution; the offshore developer can implement, test, and document the bounded change.',
        'Review the first real conflict after release rather than assuming the fixture represented every workflow. Reopen the work if users cannot understand the recovery, intermediaries alter headers, or a side effect occurs on a rejected mutation. Teams considering offshore API support can use this packet as a first assignment: it has an observable failure, bounded code paths, clear owner decisions, and evidence another time zone can review.'
      ]},
    ],
    relatedLinks: [
      { label: 'Node.js API development', href: '/services/node-js-api-development', note: 'Scope API behavior and evidence.' },
      { label: 'QA automation engineering', href: '/services/qa-automation-engineering', note: 'Exercise real concurrent request paths.' },
      { label: 'Contact Developer Offshore', href: '/contact', note: 'Discuss a bounded API delivery lane.' },
    ],
    faqs: [
      { question: 'Does an ETag replace database locking?', answer: 'No. The server still needs an atomic compare-and-change operation. The validator carries the client precondition; persistence must enforce it without a race.' },
      { question: 'Should a client automatically retry after a precondition failure?', answer: 'Not by overwriting with a new validator. Fetch current state and apply an explicit merge or user decision before trying again.' },
    ],
    sources: [
      { name: 'IETF RFC 9110: HTTP Semantics', url: 'https://www.rfc-editor.org/rfc/rfc9110', note: 'Entity tags and conditional request semantics.' },
      { name: 'MDN: ETag', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag', note: 'Practical validator and lost-update examples.' },
    ],
  },
  {
    slug: 'postgres-transaction-isolation-anomaly-handoff',
    title: 'Rehearse PostgreSQL Transaction Anomalies Before Choosing Isolation',
    excerpt: 'A practical assignment for turning a business invariant into concurrent PostgreSQL evidence, retry behavior, and an owner decision.',
    minutes: 11,
    revision: 'daily-blog-2026-10-05-postgres-transaction-isolation-anomaly-handoff',
    keyTakeaways: ['Express the invariant before selecting an isolation level.', 'Use synchronized sessions to reproduce the dangerous interleaving.', 'Treat serialization retry as application behavior, not an operator surprise.'],
    sections: [
      { heading: 'Name the invariant that concurrency can break', body: [
        'Isolation-level discussions become vague when they begin with labels. Start with a business statement that must remain true: at least one doctor remains on call, a coupon has no more than one redemption, reserved seats never exceed capacity, or an account cannot approve its own second control. Describe the rows read, decision calculated, rows written, and final state that would violate the rule. This turns “we need stronger consistency” into a reviewable scenario.',
        'Use synthetic identifiers and a small schema that preserves the real decision shape. Record PostgreSQL version, table and constraint definitions, indexes, transaction defaults, connection-pool settings, ORM behavior, and every SQL statement. An ORM method name such as transaction does not establish the effective isolation level or when queries run. Capture SHOW transaction_isolation from inside each session and keep server-side observations beside application logs.'
      ]},
      { heading: 'Build a synchronized two-session fixture', body: [
        'Open two independent database sessions against a disposable dataset. Use barriers so both transactions read the same starting state before either performs its decisive write. Label each step A1, B1, A2, B2 and record statement start, result, lock wait, commit result, and final rows. Ordinary sequential tests miss the anomaly because the second operation sees the first commit. A sleep may appear to coordinate locally but becomes flaky; explicit test barriers make the interleaving intentional.',
        'Run the fixture first under the application’s current setting. For a write-skew example, each transaction may update a different row after reading the same multi-row condition, so row locks on the updated records do not necessarily protect the predicate. For a lost update, the critical shape may be a read-compute-write replacement. Do not generalize from one anomaly to all workloads. Preserve exactly which interleaving passed or failed.'
      ]},
      { heading: 'Compare Read Committed and Repeatable Read accurately', body: [
        'PostgreSQL Read Committed gives each statement a snapshot that can differ from the previous statement in the same transaction. That may be correct for short independent operations, but a decision spanning several statements can observe change. Repeatable Read holds a transaction snapshot and prevents several anomalies, yet it does not mean every application invariant is safe. PostgreSQL documents its own behavior, which should not be inferred from another database with the same SQL label.',
        'Repeat the synchronized fixture at each candidate level and capture both the visible reads and commit outcomes. Check whether an update waits, reevaluates a predicate, aborts, or completes. Add a third unrelated transaction so the test does not mistake general contention for protection of the invariant. The goal is not to declare one level universally best; it is to show which mechanism guards this decision and what operational behavior it introduces.'
      ]},
      { heading: 'Treat Serializable as detection plus retry', body: [
        'PostgreSQL Serializable can abort a transaction when concurrent execution cannot be ordered safely. That abort is a successful safety outcome, not a database malfunction. The application must recognize the serialization-failure code, discard the entire attempted transaction, and retry from the beginning with a fresh decision. Retrying only the last statement can reuse assumptions from the failed snapshot and is not equivalent.',
        'Set a bounded attempt count and elapsed-time budget. Apply jitter where many callers may collide, preserve one logical operation identifier, and ensure external effects do not occur before the transaction is durably accepted. Email, webhooks, or payments invoked inside an attempt can duplicate when the database asks for a retry. Use an outbox or another reviewed boundary when an external effect must follow commit. Return an actionable result when the retry budget is exhausted instead of spinning indefinitely.'
      ]},
      { heading: 'Compare constraints and explicit locking', body: [
        'A unique, exclusion, check, or foreign-key constraint may express some invariants closer to the data and reject every violating writer. Other rules span aggregates, time windows, or several rows and cannot be captured by a simple constraint. SELECT FOR UPDATE can serialize access to known rows, but it cannot lock a row that does not exist unless the design provides a stable parent or advisory boundary. Document what object carries contention.',
        'Compare candidate designs using correctness, hot-row pressure, deadlock behavior, retry rate, query plans, migration risk, and clarity. Advisory locks add naming and connection considerations. Table locks may protect broadly at unacceptable cost. Serializable avoids inventing locks but asks the application to retry. The database owner chooses the operational tradeoff with the product owner who defines the invariant; the developer supplies measurements and a focused implementation.'
      ]},
      { heading: 'Exercise uncomfortable transaction endings', body: [
        'Add timeout, cancelled request, deadlock, connection loss before commit response, process restart, and pool reuse. After each case, reconcile the durable state using the logical operation identifier. A client that did not receive a commit response cannot assume rollback; the server may have committed before the connection failed. The recovery path should query durable state rather than blindly repeating an irreversible effect.',
        'Observe active transactions, lock waits, deadlocks, serialization failures, attempt counts, transaction duration, and exhausted retries. Long idle transactions can retain snapshots and make an otherwise sound design operationally harmful. Keep diagnostic queries bounded and approved. Production remediation, termination of sessions, and parameter changes remain with the database owner, not with a distributed contributor investigating from a handoff.'
      ]},
      { heading: 'Deliver the evidence as a decision packet', body: [
        'Include the invariant, schema, fixtures, exact SQL, barriers, isolation evidence, timelines, final rows, candidate mechanisms, retry implementation, external-effect boundary, failure cases, measurements, limitations, and recommended owner decision. Link code and migration revisions. State whether evidence came from local PostgreSQL, CI, or a staging-like environment and identify material differences such as version, topology, load, or proxying.',
        'The next working window should know whether to refine the fixture, review a constraint, assess contention, approve a design, or stop for product clarification. A green serial test is not completion. Completion means the dangerous concurrent sequence has an expected outcome, retries are safe, and accountable owners accept the remaining tradeoff. Developer Offshore can help staff this bounded engineering lane when the client brings the invariant, stack, approved environment, and reviewer.'
      ]},
    ],
    relatedLinks: [
      { label: 'Legacy application maintenance', href: '/services/legacy-application-maintenance', note: 'Bound database changes and recovery evidence.' },
      { label: 'Data pipeline development', href: '/services/data-pipeline-development', note: 'Review durable state and replay behavior.' },
      { label: 'Discuss the role', href: '/contact', note: 'Bring the invariant, environment, and approval owner.' },
    ],
    faqs: [
      { question: 'Is Serializable always the right PostgreSQL isolation level?', answer: 'No. It is one tool. Compare constraints, locking, contention, retry behavior, and the exact invariant rather than selecting a label for every transaction.' },
      { question: 'What should be retried after a serialization failure?', answer: 'Retry the complete transaction from a fresh snapshot, within a bounded policy, while ensuring external side effects cannot be duplicated.' },
    ],
    sources: [
      { name: 'PostgreSQL: Transaction Isolation', url: 'https://www.postgresql.org/docs/current/transaction-iso.html', note: 'Documented isolation behavior and serialization failures.' },
      { name: 'PostgreSQL: Explicit Locking', url: 'https://www.postgresql.org/docs/current/explicit-locking.html', note: 'Row, table, advisory, and deadlock behavior.' },
    ],
  },
];
