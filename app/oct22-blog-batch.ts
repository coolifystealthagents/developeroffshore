import { makeDailyBlogPost, type DailyBlogTopic } from './sep23-blog-batch';

const topics: readonly DailyBlogTopic[] = [
  {
    "slug": "offshore-code-review-sla",
    "title": "Code Review SLA for an Offshore Engineering Team",
    "family": "review operations",
    "reader": "engineering leads delegating review capacity across time zones",
    "decision": "define review readiness, reviewer ownership, response windows, and escalation before measuring latency",
    "deliverable": "a review record with revision, author, reviewer, risk class, checks, findings, approval, and merge evidence",
    "scenario": "a review appears fast because comments were counted without a completed reviewer decision",
    "measures": "review latency, rework, bypass rate, reviewer load, and escaped defects",
    "service": "/services/devops-release-support",
    "serviceLabel": "DevOps release support",
    "source": {
      "name": "GitHub Docs: About pull request reviews",
      "url": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
    }
  },
  {
    "slug": "database-migration-review-handoff",
    "title": "Database Migration Review for Offshore Development",
    "family": "database change",
    "reader": "backend owners delegating schema and data changes to a distributed team",
    "decision": "separate reversible schema steps, backfills, locks, rollback, and owner approval before production",
    "deliverable": "a migration packet with revision, schema diff, data impact, lock estimate, backup, test, rollback, and approver",
    "scenario": "a migration passes in staging but locks a production table because the data volume and query plan differ",
    "measures": "migration duration, lock wait, error rate, rollback success, data reconciliation, and approval time",
    "service": "/services/node-js-api-development",
    "serviceLabel": "Node.js API development",
    "source": {
      "name": "PostgreSQL Docs: Explicit Locking",
      "url": "https://www.postgresql.org/docs/current/explicit-locking.html"
    }
  },
  {
    "slug": "feature-flag-retirement-review",
    "title": "Retire a Feature Flag Without Leaving Dead Behavior",
    "family": "release hygiene",
    "reader": "product and engineering teams carrying flags beyond their decision",
    "decision": "prove which path is live, remove the losing branch, and verify behavior after cleanup",
    "deliverable": "a flag record with owner, creation date, rollout state, dependent code, test evidence, removal date, and rollback",
    "scenario": "a flag is deleted while a hidden client or scheduled job still depends on the disabled path",
    "measures": "flag age, exposure, dead branches, failed cleanup, rollback, and test coverage",
    "service": "/services/next-js-application-development",
    "serviceLabel": "Next.js application development",
    "source": {
      "name": "LaunchDarkly Docs: Code references",
      "url": "https://docs.launchdarkly.com/home/code/code-references"
    }
  },
  {
    "slug": "alert-noise-baseline-review",
    "title": "Tune Alerts Against a Real Baseline",
    "family": "observability",
    "reader": "platform leads delegating alert review to offshore support",
    "decision": "separate actionable alerts from noise using service level impact, ownership, and runbook evidence",
    "deliverable": "an alert review with signal, threshold, window, owner, runbook, false positive sample, and change decision",
    "scenario": "an alert is muted because it fires often, while the underlying failure remains unowned",
    "measures": "alert volume, actionable rate, time to acknowledge, missed incidents, and runbook coverage",
    "service": "/services/devops-release-support",
    "serviceLabel": "DevOps release support",
    "source": {
      "name": "Google SRE Book: Monitoring Distributed Systems",
      "url": "https://sre.google/sre-book/monitoring-distributed-systems/"
    }
  },
  {
    "slug": "api-contract-versioning-review",
    "title": "Review an API Contract Change Before Release",
    "family": "API compatibility",
    "reader": "API owners delegating change review to offshore developers",
    "decision": "identify consumers, compatibility risk, deprecation, versioning, and rollback before a contract changes",
    "deliverable": "a contract packet with schema diff, consumer list, test fixtures, version, deprecation notice, and owner",
    "scenario": "a field is removed because the repository search found no use, while an external client still depends on it",
    "measures": "consumer coverage, breaking changes, error rate, version adoption, rollback, and support tickets",
    "service": "/services/node-js-api-development",
    "serviceLabel": "Node.js API development",
    "source": {
      "name": "OpenAPI Specification",
      "url": "https://spec.openapis.org/oas/latest.html"
    }
  },
  {
    "slug": "incident-runbook-handoff",
    "title": "Hand Off an Incident Runbook to an Offshore Team",
    "family": "incident response",
    "reader": "operations leads delegating first-response steps without delegating incident command",
    "decision": "separate detection, triage, communication, mitigation, and recovery with named owners",
    "deliverable": "a runbook with trigger, severity, contacts, first actions, stop rules, evidence, and handoff",
    "scenario": "the offshore team restarts a service because the runbook says so, without checking whether the restart worsens data loss",
    "measures": "time to acknowledge, time to mitigate, wrong actions, escalation accuracy, and communication gaps",
    "service": "/services/devops-release-support",
    "serviceLabel": "DevOps release support",
    "source": {
      "name": "Google SRE Book: Managing Incidents",
      "url": "https://sre.google/sre-book/managing-incidents/"
    }
  },
  {
    "slug": "ci-cache-integrity-review",
    "title": "Check CI Cache Integrity Before Trusting a Green Build",
    "family": "build reliability",
    "reader": "build owners delegating pipeline maintenance to offshore engineers",
    "decision": "verify cache keys, dependency sources, restore behavior, and clean-build parity",
    "deliverable": "a cache record with key, scope, inputs, hit rate, restore test, clean build, and rollback",
    "scenario": "a stale cache hides a dependency change and the green build does not match a clean environment",
    "measures": "cache hit rate, clean-build parity, build duration, failure rate, and restore errors",
    "service": "/services/devops-release-support",
    "serviceLabel": "DevOps release support",
    "source": {
      "name": "GitHub Docs: Caching dependencies",
      "url": "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows"
    }
  },
  {
    "slug": "secret-rotation-runbook-review",
    "title": "Review a Secret Rotation Runbook",
    "family": "security operations",
    "reader": "security owners delegating rotation preparation to offshore engineers",
    "decision": "plan creation, distribution, overlap, verification, revocation, and rollback for each secret",
    "deliverable": "a rotation packet with secret class, owner, consumers, overlap, test, revocation, and evidence",
    "scenario": "the new secret is deployed before every consumer can read it, or the old secret remains valid indefinitely",
    "measures": "rotation time, failed authentications, old-secret use, rollback, and revocation completion",
    "service": "/services/devops-release-support",
    "serviceLabel": "DevOps release support",
    "source": {
      "name": "OWASP Key Management Cheat Sheet",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html"
    }
  },
  {
    "slug": "accessibility-review-handoff",
    "title": "Hand Off an Accessibility Review to Offshore Developers",
    "family": "frontend quality",
    "reader": "product teams delegating accessibility checks to a distributed team",
    "decision": "test keyboard, screen reader, contrast, focus, forms, and error recovery against the agreed standard",
    "deliverable": "an accessibility record with route, criterion, tool, manual test, finding, owner, fix, and retest",
    "scenario": "an automated scan passes while keyboard focus is lost after a modal closes",
    "measures": "criterion coverage, manual findings, keyboard traps, contrast failures, and retest results",
    "service": "/services/react-frontend-development",
    "serviceLabel": "React frontend development",
    "source": {
      "name": "W3C WCAG 2.2",
      "url": "https://www.w3.org/TR/WCAG22/"
    }
  },
  {
    "slug": "performance-budget-review",
    "title": "Set a Performance Budget With Evidence",
    "family": "web performance",
    "reader": "product and engineering teams delegating performance work",
    "decision": "define the user experience metric, the budget, the measurement, and the release gate",
    "deliverable": "a budget record with route, device, network, metric, baseline, threshold, test, and owner",
    "scenario": "a budget is met on a fast laptop while the mobile experience remains slow",
    "measures": "LCP, INP, CLS, bundle size, request count, and regression rate",
    "service": "/services/react-frontend-development",
    "serviceLabel": "React frontend development",
    "source": {
      "name": "web.dev: Performance budgets",
      "url": "https://web.dev/articles/performance-budgets-101"
    }
  },
  {
    "slug": "release-notes-evidence",
    "title": "Write Release Notes From Evidence",
    "family": "release communication",
    "reader": "engineering and product teams delegating release communication",
    "decision": "map each change to a verified user effect, a risk, and a support note",
    "deliverable": "a release record with change, evidence, audience, risk, migration, support note, and owner",
    "scenario": "the notes claim a fix that was not verified in the released environment",
    "measures": "change coverage, support questions, rollback, and documentation gaps",
    "service": "/services/devops-release-support",
    "serviceLabel": "DevOps release support",
    "source": {
      "name": "Keep a Changelog",
      "url": "https://keepachangelog.com/en/1.1.0/"
    }
  },
  {
    "slug": "dependency-risk-review",
    "title": "Review a Dependency Update for Real Risk",
    "family": "dependency operations",
    "reader": "maintainers delegating dependency review to offshore developers",
    "decision": "classify runtime impact, release notes, tests, ownership, and rollback before merge",
    "deliverable": "a dependency record with package, version, diff, tests, owner, risk, and rollback",
    "scenario": "a patch update changes transitive behavior that the test suite does not exercise",
    "measures": "update age, failed checks, regression, rollback, and security exposure",
    "service": "/services/legacy-application-maintenance",
    "serviceLabel": "Legacy application maintenance",
    "source": {
      "name": "GitHub Docs: Dependabot",
      "url": "https://docs.github.com/en/code-security/dependabot"
    }
  }
];

const deepDives: Record<string,string> = {
  "offshore-code-review-sla": "Start with a review-ready revision: the author has run the declared checks, linked the issue, described the risk, and listed the open questions. Define the reviewer by code ownership and time-zone coverage, not by whoever is online. Record the first human review, the decision, and the merge separately. A comment is not a review decision. Test a small change, a large change, a security-sensitive change, and a change that needs a specialist. The reviewer may request changes; the author resolves them; the owner approves the merge. Do not measure review speed without the rework and the escaped defects.",
  "database-migration-review-handoff": "Separate the schema change from the data backfill. A column addition may be safe; a table rewrite may lock writes. Record the production data volume, the query plan, the lock estimate, the backup, and the rollback. Test on a copy with representative volume. The developer may prepare the migration and the test; the database owner approves the production window. A migration that cannot be rolled back needs a forward-fix plan and an owner. Verify the application behavior before and after the change.",
  "feature-flag-retirement-review": "Find every flag and its owner. Record the creation date, the rollout, the code paths, the tests, and the dependent clients. A flag that is permanently on is dead code with a switch. Remove the losing path, keep the winning path, and update the tests. Check the mobile clients and the scheduled jobs before deletion. The product owner confirms the behavior; the engineer removes the code. Verify the release after the cleanup.",
  "alert-noise-baseline-review": "Collect a week of alerts with the trigger, the service, the owner, and the action taken. Classify each as actionable, informational, duplicate, or false. An alert that fires often but no one acts is noise. An alert that fires rarely but catches a real failure is valuable. Tune the threshold and the window with the service owner. Add a runbook link. Measure the actionable rate and the missed incidents after the change.",
  "api-contract-versioning-review": "List the consumers before the diff. A repository search is not a complete consumer inventory. Record the schema, the examples, the error shapes, and the deprecation. A breaking change needs a version or a migration window. Test the old and new clients. The API owner approves the change and the notice. Publish the deprecation date and the support contact.",
  "incident-runbook-handoff": "Define the first 15 minutes. The offshore team should know how to acknowledge, classify, collect evidence, and escalate. The runbook should not authorize a destructive action without the incident commander. Test a simulated incident with a missing owner and a failed dependency. Record the time to acknowledge, the time to escalate, and the wrong actions. Update the runbook after the test.",
  "ci-cache-integrity-review": "Compare a cached build with a clean build. The lockfile, the tool version, the environment, and the cache key should match. A stale cache can hide a dependency or a generated file. Record the key, the scope, the hit rate, and the restore test. Rotate the cache after a toolchain change. The build owner approves the cache policy.",
  "secret-rotation-runbook-review": "List every consumer of the secret. Plan the new secret, the distribution, the overlap, the verification, and the revocation. Test a consumer that fails to read the new secret. Keep the old secret only for the approved overlap. Record the rotation and the revocation. The security owner approves the window.",
  "accessibility-review-handoff": "Use manual keyboard and screen reader tests, not only an automated scan. Check the focus order, the modal return, the form errors, the contrast, and the labels. Record the criterion, the route, the finding, and the fix. Retest with the same method. The product owner prioritizes the fix; the developer implements it.",
  "performance-budget-review": "Choose the metric that matches the user experience. Define the device, the network, and the page. Measure the baseline and the budget. A budget that is met on a fast connection may fail on a mobile device. Add the budget to the release gate. Review the regression after a dependency or a design change.",
  "release-notes-evidence": "Map each change to a verified effect. A fix that was not tested in the release environment is a claim. Record the change, the evidence, the audience, the risk, and the support note. The product owner approves the wording. The support team receives the note before the release.",
  "dependency-risk-review": "Classify the package by runtime impact. A development tool and an authentication library are different. Read the release notes and the diff. Run the tests and the build. Check the owner and the rollback. A patch can change behavior. Record the risk and the decision."
};
const fieldNotes: Record<string,string> = {
  "offshore-code-review-sla": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "database-migration-review-handoff": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "feature-flag-retirement-review": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "alert-noise-baseline-review": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "api-contract-versioning-review": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "incident-runbook-handoff": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "ci-cache-integrity-review": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "secret-rotation-runbook-review": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "accessibility-review-handoff": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "performance-budget-review": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "release-notes-evidence": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets.",
  "dependency-risk-review": "Preserve the revision, the environment, the fixture, the command, the output, and the reviewer. Use synthetic data. The evidence should let a second engineer reproduce the result without production secrets."
};
const acceptanceChecks: Record<string,string> = {
  "offshore-code-review-sla": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "database-migration-review-handoff": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "feature-flag-retirement-review": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "alert-noise-baseline-review": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "api-contract-versioning-review": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "incident-runbook-handoff": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "ci-cache-integrity-review": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "secret-rotation-runbook-review": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "accessibility-review-handoff": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "performance-budget-review": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "release-notes-evidence": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change.",
  "dependency-risk-review": "A passing sample supports only the declared scope. Re-test after a dependency, configuration, traffic, or ownership change."
};

export const octoberTwentyTwoBlogBatch = topics.map((topic,index)=>{
  const post=makeDailyBlogPost(topic,index,'2026-10-22');
  return {...post, sections: post.sections!.map((s,i)=>({...s, body:i===1?[s.body[index%2],deepDives[topic.slug]]:i===3?[s.body[index%2],fieldNotes[topic.slug]]:i===5?[s.body[index%2],acceptanceChecks[topic.slug]]:[s.body[index%2]]}))};
});
