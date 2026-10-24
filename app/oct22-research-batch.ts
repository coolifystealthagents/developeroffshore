import type { ResearchPost } from './fleet-data';
// Staged for developeroffshore. Dated 2026-10-22.
export const octoberTwentyTwoResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "code-review-latency-method",
    "title": "Measuring Code Review Latency",
    "excerpt": "code review latency",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "Research question: where does time accumulate between a review-ready revision and a merge decision? The unit is one pull request."
        ]
      },
      {
        "heading": "Scope",
        "body": [
          "Define the review-ready event, the first human review, the decision, and the merge. A comment is not a decision."
        ]
      },
      {
        "heading": "Source hierarchy",
        "body": [
          "Collect the revision, the reviewer, the timestamps, the checks, and the rework."
        ]
      },
      {
        "heading": "Data quality",
        "body": [
          "Sample small, large, security, and cross-team changes. Include a change that was bypassed."
        ]
      },
      {
        "heading": "Sampling",
        "body": [
          "Measure the first review, the decision, the rework, and the escaped defects."
        ]
      },
      {
        "heading": "Reviewer procedure",
        "body": [
          "Have two reviewers classify the same changes. If they disagree, the definition is unclear."
        ]
      },
      {
        "heading": "Reporting",
        "body": [
          "Report the changes, the delays, the owners, and the actions."
        ]
      },
      {
        "heading": "Decision use",
        "body": [
          "Limitations: the sample is small, and the review may happen offline. The method measures the documented path."
        ]
      },
      {
        "heading": "Limitations",
        "body": [
          "Decision use: change the reviewer map, the size limit, or the checks. Retest after the change."
        ]
      },
      {
        "heading": "Replication",
        "body": [
          "Scope for measuring code review latency: define the eligible population, the observation window, the unit, and the exclusions before reviewing outcomes."
        ]
      },
      {
        "heading": "Operational implication",
        "body": [
          "Source hierarchy for measuring code review latency: name the controlling record for identity, state, owner, and policy. Preserve conflicts."
        ]
      },
      {
        "heading": "Counterexamples",
        "body": [
          "Data quality for measuring code review latency: validate identifiers, timestamps, duplicates, and missing fields. A clean extract can omit the cases that matter."
        ]
      },
      {
        "heading": "Field dictionary",
        "body": [
          "Sampling for measuring code review latency: include ordinary, adverse, and unresolved cases. Completed work alone will overstate the process."
        ]
      },
      {
        "heading": "Sensitivity",
        "body": [
          "Reviewer procedure for measuring code review latency: two reviewers classify independently, then compare reasons. Disagreement is evidence about the rubric."
        ]
      },
      {
        "heading": "Privacy",
        "body": [
          "Reporting for measuring code review latency: show counts, denominators, exclusions, and missing data. Do not publish a rate without the population."
        ]
      },
      {
        "heading": "Decision record",
        "body": [
          "Decision use for measuring code review latency: name the owner, the change, and the retest date. A study without a decision is a description."
        ]
      },
      {
        "heading": "Quality control",
        "body": [
          "Limitations for measuring code review latency: the sample is bounded, the records may be incomplete, and the method does not establish causation."
        ]
      },
      {
        "heading": "Close",
        "body": [
          "Replication for measuring code review latency: keep the query, codebook, reviewer notes, and source versions. A later reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Adverse case",
        "body": [
          "Operational implication for measuring code review latency: pilot one lane, verify the evidence, and expand only after the owner accepts the result."
        ]
      },
      {
        "heading": "Population control",
        "body": [
          "Counterexamples for measuring code review latency: include a case that contradicts the expected pattern. The counterexample is often more useful than another confirming case."
        ]
      },
      {
        "heading": "Next review",
        "body": [
          "Field dictionary for measuring code review latency: define every field, the allowed values, the source, the timestamp, and the missing-value treatment."
        ]
      },
      {
        "heading": "Method step 22",
        "body": [
          "Sensitivity for measuring code review latency: test the main result under a different exclusion rule and time window. Report both readings if the conclusion changes."
        ]
      },
      {
        "heading": "Method step 23",
        "body": [
          "Privacy for measuring code review latency: use the minimum necessary data, restrict access, and remove temporary copies."
        ]
      },
      {
        "heading": "Method step 24",
        "body": [
          "Decision record for measuring code review latency: name the population, method, findings, limitations, owner, and next review."
        ]
      },
      {
        "heading": "Method step 25",
        "body": [
          "Quality control for measuring code review latency: check the sample, coding, calculations, and conclusions. A second reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Method step 26",
        "body": [
          "Close for measuring code review latency: publish the unresolved cases and the decision. A method that is not used to change a control is not an operating study."
        ]
      },
      {
        "heading": "Method step 27",
        "body": [
          "Adverse case for measuring code review latency: include a record that appears successful but fails destination verification."
        ]
      },
      {
        "heading": "Method step 28",
        "body": [
          "Population control for measuring code review latency: reconcile opening records, additions, transfers, withdrawals, and ending records."
        ]
      },
      {
        "heading": "Method step 29",
        "body": [
          "Next review for measuring code review latency: set the date, the owner, and the evidence that would trigger a new study."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "name": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ],
    "keyStats": [
      "Code review latency",
      "Two independent reviewers",
      "One named owner for the retest"
    ],
    "takeaways": [
      "Research question and scope",
      "Scope",
      "Source hierarchy",
      "Data quality"
    ],
    "faqs": [
      {
        "question": "What does Measuring Code Review Latency measure?",
        "answer": "Code review latency The report fixes the unit, denominator, exclusions, and evidence trail before reviewing outcomes."
      },
      {
        "question": "What can this method not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record and the consistency of the review."
      }
    ],
    "related": [
      {
        "title": "Testing Migration Rollback Verification",
        "href": "/research/migration-rollback-verification-method"
      },
      {
        "title": "Measuring Feature Flag Retirement",
        "href": "/research/feature-flag-retirement-method"
      },
      {
        "title": "Measuring Alert Noise Against a Baseline",
        "href": "/research/alert-noise-baseline-method"
      }
    ]
  },
  {
    "slug": "migration-rollback-verification-method",
    "title": "Testing Migration Rollback Verification",
    "excerpt": "migration rollback",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "Research question: does a migration rollback restore the application and the data to the expected state? The unit is one migration and one rollback test."
        ]
      },
      {
        "heading": "Scope",
        "body": [
          "Define the schema, the data, the application, and the rollback. A successful command is not a verified rollback."
        ]
      },
      {
        "heading": "Source hierarchy",
        "body": [
          "Collect the migration, the backup, the rollback, the application check, and the data check."
        ]
      },
      {
        "heading": "Data quality",
        "body": [
          "Sample additive, destructive, and backfill migrations. Include a migration that cannot be rolled back."
        ]
      },
      {
        "heading": "Sampling",
        "body": [
          "Measure the rollback success, the data reconciliation, the application errors, and the time."
        ]
      },
      {
        "heading": "Reviewer procedure",
        "body": [
          "Have two reviewers verify the same rollback. If they disagree, the standard is unclear."
        ]
      },
      {
        "heading": "Reporting",
        "body": [
          "Report the migrations, the gaps, the owners, and the actions."
        ]
      },
      {
        "heading": "Decision use",
        "body": [
          "Limitations: the test copy may differ from production. The method measures the documented rollback."
        ]
      },
      {
        "heading": "Limitations",
        "body": [
          "Decision use: change the migration, the backup, or the window. Retest after the change."
        ]
      },
      {
        "heading": "Replication",
        "body": [
          "Scope for testing migration rollback verification: define the eligible population, the observation window, the unit, and the exclusions before reviewing outcomes."
        ]
      },
      {
        "heading": "Operational implication",
        "body": [
          "Source hierarchy for testing migration rollback verification: name the controlling record for identity, state, owner, and policy. Preserve conflicts."
        ]
      },
      {
        "heading": "Counterexamples",
        "body": [
          "Data quality for testing migration rollback verification: validate identifiers, timestamps, duplicates, and missing fields. A clean extract can omit the cases that matter."
        ]
      },
      {
        "heading": "Field dictionary",
        "body": [
          "Sampling for testing migration rollback verification: include ordinary, adverse, and unresolved cases. Completed work alone will overstate the process."
        ]
      },
      {
        "heading": "Sensitivity",
        "body": [
          "Reviewer procedure for testing migration rollback verification: two reviewers classify independently, then compare reasons. Disagreement is evidence about the rubric."
        ]
      },
      {
        "heading": "Privacy",
        "body": [
          "Reporting for testing migration rollback verification: show counts, denominators, exclusions, and missing data. Do not publish a rate without the population."
        ]
      },
      {
        "heading": "Decision record",
        "body": [
          "Decision use for testing migration rollback verification: name the owner, the change, and the retest date. A study without a decision is a description."
        ]
      },
      {
        "heading": "Quality control",
        "body": [
          "Limitations for testing migration rollback verification: the sample is bounded, the records may be incomplete, and the method does not establish causation."
        ]
      },
      {
        "heading": "Close",
        "body": [
          "Replication for testing migration rollback verification: keep the query, codebook, reviewer notes, and source versions. A later reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Adverse case",
        "body": [
          "Operational implication for testing migration rollback verification: pilot one lane, verify the evidence, and expand only after the owner accepts the result."
        ]
      },
      {
        "heading": "Population control",
        "body": [
          "Counterexamples for testing migration rollback verification: include a case that contradicts the expected pattern. The counterexample is often more useful than another confirming case."
        ]
      },
      {
        "heading": "Next review",
        "body": [
          "Field dictionary for testing migration rollback verification: define every field, the allowed values, the source, the timestamp, and the missing-value treatment."
        ]
      },
      {
        "heading": "Method step 22",
        "body": [
          "Sensitivity for testing migration rollback verification: test the main result under a different exclusion rule and time window. Report both readings if the conclusion changes."
        ]
      },
      {
        "heading": "Method step 23",
        "body": [
          "Privacy for testing migration rollback verification: use the minimum necessary data, restrict access, and remove temporary copies."
        ]
      },
      {
        "heading": "Method step 24",
        "body": [
          "Decision record for testing migration rollback verification: name the population, method, findings, limitations, owner, and next review."
        ]
      },
      {
        "heading": "Method step 25",
        "body": [
          "Quality control for testing migration rollback verification: check the sample, coding, calculations, and conclusions. A second reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Method step 26",
        "body": [
          "Close for testing migration rollback verification: publish the unresolved cases and the decision. A method that is not used to change a control is not an operating study."
        ]
      },
      {
        "heading": "Method step 27",
        "body": [
          "Adverse case for testing migration rollback verification: include a record that appears successful but fails destination verification."
        ]
      },
      {
        "heading": "Method step 28",
        "body": [
          "Population control for testing migration rollback verification: reconcile opening records, additions, transfers, withdrawals, and ending records."
        ]
      },
      {
        "heading": "Method step 29",
        "body": [
          "Next review for testing migration rollback verification: set the date, the owner, and the evidence that would trigger a new study."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "name": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ],
    "keyStats": [
      "Migration rollback",
      "Two independent reviewers",
      "One named owner for the retest"
    ],
    "takeaways": [
      "Research question and scope",
      "Scope",
      "Source hierarchy",
      "Data quality"
    ],
    "faqs": [
      {
        "question": "What does Testing Migration Rollback Verification measure?",
        "answer": "Migration rollback The report fixes the unit, denominator, exclusions, and evidence trail before reviewing outcomes."
      },
      {
        "question": "What can this method not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record and the consistency of the review."
      }
    ],
    "related": [
      {
        "title": "Measuring Code Review Latency",
        "href": "/research/code-review-latency-method"
      },
      {
        "title": "Measuring Feature Flag Retirement",
        "href": "/research/feature-flag-retirement-method"
      },
      {
        "title": "Measuring Alert Noise Against a Baseline",
        "href": "/research/alert-noise-baseline-method"
      }
    ]
  },
  {
    "slug": "feature-flag-retirement-method",
    "title": "Measuring Feature Flag Retirement",
    "excerpt": "feature flag retirement",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "Research question: how many flags remain after their decision, and what prevents removal? The unit is one flag."
        ]
      },
      {
        "heading": "Scope",
        "body": [
          "Define the flag, the owner, the decision date, the code paths, and the dependents."
        ]
      },
      {
        "heading": "Source hierarchy",
        "body": [
          "Collect the flag, the rollout, the code search, the tests, and the removal."
        ]
      },
      {
        "heading": "Data quality",
        "body": [
          "Sample new, old, and abandoned flags. Include a flag with a hidden client."
        ]
      },
      {
        "heading": "Sampling",
        "body": [
          "Measure the age, the dead branches, the removal rate, and the failures."
        ]
      },
      {
        "heading": "Reviewer procedure",
        "body": [
          "Have two reviewers classify the same flags. If they disagree, the owner map is unclear."
        ]
      },
      {
        "heading": "Reporting",
        "body": [
          "Report the flags, the gaps, the owners, and the actions."
        ]
      },
      {
        "heading": "Decision use",
        "body": [
          "Limitations: the code search may miss external clients. The method measures the documented flag."
        ]
      },
      {
        "heading": "Limitations",
        "body": [
          "Decision use: change the review, the owner, or the cleanup. Retest after the change."
        ]
      },
      {
        "heading": "Replication",
        "body": [
          "Scope for measuring feature flag retirement: define the eligible population, the observation window, the unit, and the exclusions before reviewing outcomes."
        ]
      },
      {
        "heading": "Operational implication",
        "body": [
          "Source hierarchy for measuring feature flag retirement: name the controlling record for identity, state, owner, and policy. Preserve conflicts."
        ]
      },
      {
        "heading": "Counterexamples",
        "body": [
          "Data quality for measuring feature flag retirement: validate identifiers, timestamps, duplicates, and missing fields. A clean extract can omit the cases that matter."
        ]
      },
      {
        "heading": "Field dictionary",
        "body": [
          "Sampling for measuring feature flag retirement: include ordinary, adverse, and unresolved cases. Completed work alone will overstate the process."
        ]
      },
      {
        "heading": "Sensitivity",
        "body": [
          "Reviewer procedure for measuring feature flag retirement: two reviewers classify independently, then compare reasons. Disagreement is evidence about the rubric."
        ]
      },
      {
        "heading": "Privacy",
        "body": [
          "Reporting for measuring feature flag retirement: show counts, denominators, exclusions, and missing data. Do not publish a rate without the population."
        ]
      },
      {
        "heading": "Decision record",
        "body": [
          "Decision use for measuring feature flag retirement: name the owner, the change, and the retest date. A study without a decision is a description."
        ]
      },
      {
        "heading": "Quality control",
        "body": [
          "Limitations for measuring feature flag retirement: the sample is bounded, the records may be incomplete, and the method does not establish causation."
        ]
      },
      {
        "heading": "Close",
        "body": [
          "Replication for measuring feature flag retirement: keep the query, codebook, reviewer notes, and source versions. A later reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Adverse case",
        "body": [
          "Operational implication for measuring feature flag retirement: pilot one lane, verify the evidence, and expand only after the owner accepts the result."
        ]
      },
      {
        "heading": "Population control",
        "body": [
          "Counterexamples for measuring feature flag retirement: include a case that contradicts the expected pattern. The counterexample is often more useful than another confirming case."
        ]
      },
      {
        "heading": "Next review",
        "body": [
          "Field dictionary for measuring feature flag retirement: define every field, the allowed values, the source, the timestamp, and the missing-value treatment."
        ]
      },
      {
        "heading": "Method step 22",
        "body": [
          "Sensitivity for measuring feature flag retirement: test the main result under a different exclusion rule and time window. Report both readings if the conclusion changes."
        ]
      },
      {
        "heading": "Method step 23",
        "body": [
          "Privacy for measuring feature flag retirement: use the minimum necessary data, restrict access, and remove temporary copies."
        ]
      },
      {
        "heading": "Method step 24",
        "body": [
          "Decision record for measuring feature flag retirement: name the population, method, findings, limitations, owner, and next review."
        ]
      },
      {
        "heading": "Method step 25",
        "body": [
          "Quality control for measuring feature flag retirement: check the sample, coding, calculations, and conclusions. A second reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Method step 26",
        "body": [
          "Close for measuring feature flag retirement: publish the unresolved cases and the decision. A method that is not used to change a control is not an operating study."
        ]
      },
      {
        "heading": "Method step 27",
        "body": [
          "Adverse case for measuring feature flag retirement: include a record that appears successful but fails destination verification."
        ]
      },
      {
        "heading": "Method step 28",
        "body": [
          "Population control for measuring feature flag retirement: reconcile opening records, additions, transfers, withdrawals, and ending records."
        ]
      },
      {
        "heading": "Method step 29",
        "body": [
          "Next review for measuring feature flag retirement: set the date, the owner, and the evidence that would trigger a new study."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "name": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ],
    "keyStats": [
      "Feature flag retirement",
      "Two independent reviewers",
      "One named owner for the retest"
    ],
    "takeaways": [
      "Research question and scope",
      "Scope",
      "Source hierarchy",
      "Data quality"
    ],
    "faqs": [
      {
        "question": "What does Measuring Feature Flag Retirement measure?",
        "answer": "Feature flag retirement The report fixes the unit, denominator, exclusions, and evidence trail before reviewing outcomes."
      },
      {
        "question": "What can this method not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record and the consistency of the review."
      }
    ],
    "related": [
      {
        "title": "Measuring Code Review Latency",
        "href": "/research/code-review-latency-method"
      },
      {
        "title": "Testing Migration Rollback Verification",
        "href": "/research/migration-rollback-verification-method"
      },
      {
        "title": "Measuring Alert Noise Against a Baseline",
        "href": "/research/alert-noise-baseline-method"
      }
    ]
  },
  {
    "slug": "alert-noise-baseline-method",
    "title": "Measuring Alert Noise Against a Baseline",
    "excerpt": "alert noise",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "Research question: what share of alerts is actionable, and which alerts are noise? The unit is one alert firing."
        ]
      },
      {
        "heading": "Scope",
        "body": [
          "Define actionable, informational, duplicate, and false. An alert without a runbook is not actionable."
        ]
      },
      {
        "heading": "Source hierarchy",
        "body": [
          "Collect the alert, the trigger, the owner, the action, and the outcome."
        ]
      },
      {
        "heading": "Data quality",
        "body": [
          "Sample high-volume, rare, and incident alerts. Include an alert that was muted."
        ]
      },
      {
        "heading": "Sampling",
        "body": [
          "Measure the actionable rate, the volume, the acknowledgement time, and the missed incidents."
        ]
      },
      {
        "heading": "Reviewer procedure",
        "body": [
          "Have two reviewers classify the same alerts. If they disagree, the standard is unclear."
        ]
      },
      {
        "heading": "Reporting",
        "body": [
          "Report the alerts, the noise, the owners, and the actions."
        ]
      },
      {
        "heading": "Decision use",
        "body": [
          "Limitations: the sample is small, and the incident may be missed. The method measures the documented alert."
        ]
      },
      {
        "heading": "Limitations",
        "body": [
          "Decision use: change the threshold, the runbook, or the owner. Retest after the change."
        ]
      },
      {
        "heading": "Replication",
        "body": [
          "Scope for measuring alert noise against a baseline: define the eligible population, the observation window, the unit, and the exclusions before reviewing outcomes."
        ]
      },
      {
        "heading": "Operational implication",
        "body": [
          "Source hierarchy for measuring alert noise against a baseline: name the controlling record for identity, state, owner, and policy. Preserve conflicts."
        ]
      },
      {
        "heading": "Counterexamples",
        "body": [
          "Data quality for measuring alert noise against a baseline: validate identifiers, timestamps, duplicates, and missing fields. A clean extract can omit the cases that matter."
        ]
      },
      {
        "heading": "Field dictionary",
        "body": [
          "Sampling for measuring alert noise against a baseline: include ordinary, adverse, and unresolved cases. Completed work alone will overstate the process."
        ]
      },
      {
        "heading": "Sensitivity",
        "body": [
          "Reviewer procedure for measuring alert noise against a baseline: two reviewers classify independently, then compare reasons. Disagreement is evidence about the rubric."
        ]
      },
      {
        "heading": "Privacy",
        "body": [
          "Reporting for measuring alert noise against a baseline: show counts, denominators, exclusions, and missing data. Do not publish a rate without the population."
        ]
      },
      {
        "heading": "Decision record",
        "body": [
          "Decision use for measuring alert noise against a baseline: name the owner, the change, and the retest date. A study without a decision is a description."
        ]
      },
      {
        "heading": "Quality control",
        "body": [
          "Limitations for measuring alert noise against a baseline: the sample is bounded, the records may be incomplete, and the method does not establish causation."
        ]
      },
      {
        "heading": "Close",
        "body": [
          "Replication for measuring alert noise against a baseline: keep the query, codebook, reviewer notes, and source versions. A later reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Adverse case",
        "body": [
          "Operational implication for measuring alert noise against a baseline: pilot one lane, verify the evidence, and expand only after the owner accepts the result."
        ]
      },
      {
        "heading": "Population control",
        "body": [
          "Counterexamples for measuring alert noise against a baseline: include a case that contradicts the expected pattern. The counterexample is often more useful than another confirming case."
        ]
      },
      {
        "heading": "Next review",
        "body": [
          "Field dictionary for measuring alert noise against a baseline: define every field, the allowed values, the source, the timestamp, and the missing-value treatment."
        ]
      },
      {
        "heading": "Method step 22",
        "body": [
          "Sensitivity for measuring alert noise against a baseline: test the main result under a different exclusion rule and time window. Report both readings if the conclusion changes."
        ]
      },
      {
        "heading": "Method step 23",
        "body": [
          "Privacy for measuring alert noise against a baseline: use the minimum necessary data, restrict access, and remove temporary copies."
        ]
      },
      {
        "heading": "Method step 24",
        "body": [
          "Decision record for measuring alert noise against a baseline: name the population, method, findings, limitations, owner, and next review."
        ]
      },
      {
        "heading": "Method step 25",
        "body": [
          "Quality control for measuring alert noise against a baseline: check the sample, coding, calculations, and conclusions. A second reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Method step 26",
        "body": [
          "Close for measuring alert noise against a baseline: publish the unresolved cases and the decision. A method that is not used to change a control is not an operating study."
        ]
      },
      {
        "heading": "Method step 27",
        "body": [
          "Adverse case for measuring alert noise against a baseline: include a record that appears successful but fails destination verification."
        ]
      },
      {
        "heading": "Method step 28",
        "body": [
          "Population control for measuring alert noise against a baseline: reconcile opening records, additions, transfers, withdrawals, and ending records."
        ]
      },
      {
        "heading": "Method step 29",
        "body": [
          "Next review for measuring alert noise against a baseline: set the date, the owner, and the evidence that would trigger a new study."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "name": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ],
    "keyStats": [
      "Alert noise",
      "Two independent reviewers",
      "One named owner for the retest"
    ],
    "takeaways": [
      "Research question and scope",
      "Scope",
      "Source hierarchy",
      "Data quality"
    ],
    "faqs": [
      {
        "question": "What does Measuring Alert Noise Against a Baseline measure?",
        "answer": "Alert noise The report fixes the unit, denominator, exclusions, and evidence trail before reviewing outcomes."
      },
      {
        "question": "What can this method not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record and the consistency of the review."
      }
    ],
    "related": [
      {
        "title": "Measuring Code Review Latency",
        "href": "/research/code-review-latency-method"
      },
      {
        "title": "Testing Migration Rollback Verification",
        "href": "/research/migration-rollback-verification-method"
      },
      {
        "title": "Measuring Feature Flag Retirement",
        "href": "/research/feature-flag-retirement-method"
      }
    ]
  },
  {
    "slug": "dependency-risk-review-method",
    "title": "Testing Dependency Update Risk Review",
    "excerpt": "dependency risk",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "Research question: does the dependency review catch the changes that can affect the runtime? The unit is one update."
        ]
      },
      {
        "heading": "Scope",
        "body": [
          "Define the package, the runtime impact, the release notes, the tests, and the rollback."
        ]
      },
      {
        "heading": "Source hierarchy",
        "body": [
          "Collect the diff, the tests, the owner, the risk, and the merge."
        ]
      },
      {
        "heading": "Data quality",
        "body": [
          "Sample patch, minor, major, and security updates. Include an update that failed."
        ]
      },
      {
        "heading": "Sampling",
        "body": [
          "Measure the risk coverage, the regression, the rollback, and the time."
        ]
      },
      {
        "heading": "Reviewer procedure",
        "body": [
          "Have two reviewers classify the same updates. If they disagree, the risk rubric is unclear."
        ]
      },
      {
        "heading": "Reporting",
        "body": [
          "Report the updates, the gaps, the owners, and the actions."
        ]
      },
      {
        "heading": "Decision use",
        "body": [
          "Limitations: the test suite may not cover the change. The method measures the documented review."
        ]
      },
      {
        "heading": "Limitations",
        "body": [
          "Decision use: change the rubric, the tests, or the owner. Retest after the change."
        ]
      },
      {
        "heading": "Replication",
        "body": [
          "Scope for testing dependency update risk review: define the eligible population, the observation window, the unit, and the exclusions before reviewing outcomes."
        ]
      },
      {
        "heading": "Operational implication",
        "body": [
          "Source hierarchy for testing dependency update risk review: name the controlling record for identity, state, owner, and policy. Preserve conflicts."
        ]
      },
      {
        "heading": "Counterexamples",
        "body": [
          "Data quality for testing dependency update risk review: validate identifiers, timestamps, duplicates, and missing fields. A clean extract can omit the cases that matter."
        ]
      },
      {
        "heading": "Field dictionary",
        "body": [
          "Sampling for testing dependency update risk review: include ordinary, adverse, and unresolved cases. Completed work alone will overstate the process."
        ]
      },
      {
        "heading": "Sensitivity",
        "body": [
          "Reviewer procedure for testing dependency update risk review: two reviewers classify independently, then compare reasons. Disagreement is evidence about the rubric."
        ]
      },
      {
        "heading": "Privacy",
        "body": [
          "Reporting for testing dependency update risk review: show counts, denominators, exclusions, and missing data. Do not publish a rate without the population."
        ]
      },
      {
        "heading": "Decision record",
        "body": [
          "Decision use for testing dependency update risk review: name the owner, the change, and the retest date. A study without a decision is a description."
        ]
      },
      {
        "heading": "Quality control",
        "body": [
          "Limitations for testing dependency update risk review: the sample is bounded, the records may be incomplete, and the method does not establish causation."
        ]
      },
      {
        "heading": "Close",
        "body": [
          "Replication for testing dependency update risk review: keep the query, codebook, reviewer notes, and source versions. A later reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Adverse case",
        "body": [
          "Operational implication for testing dependency update risk review: pilot one lane, verify the evidence, and expand only after the owner accepts the result."
        ]
      },
      {
        "heading": "Population control",
        "body": [
          "Counterexamples for testing dependency update risk review: include a case that contradicts the expected pattern. The counterexample is often more useful than another confirming case."
        ]
      },
      {
        "heading": "Next review",
        "body": [
          "Field dictionary for testing dependency update risk review: define every field, the allowed values, the source, the timestamp, and the missing-value treatment."
        ]
      },
      {
        "heading": "Method step 22",
        "body": [
          "Sensitivity for testing dependency update risk review: test the main result under a different exclusion rule and time window. Report both readings if the conclusion changes."
        ]
      },
      {
        "heading": "Method step 23",
        "body": [
          "Privacy for testing dependency update risk review: use the minimum necessary data, restrict access, and remove temporary copies."
        ]
      },
      {
        "heading": "Method step 24",
        "body": [
          "Decision record for testing dependency update risk review: name the population, method, findings, limitations, owner, and next review."
        ]
      },
      {
        "heading": "Method step 25",
        "body": [
          "Quality control for testing dependency update risk review: check the sample, coding, calculations, and conclusions. A second reviewer should reproduce the result."
        ]
      },
      {
        "heading": "Method step 26",
        "body": [
          "Close for testing dependency update risk review: publish the unresolved cases and the decision. A method that is not used to change a control is not an operating study."
        ]
      },
      {
        "heading": "Method step 27",
        "body": [
          "Adverse case for testing dependency update risk review: include a record that appears successful but fails destination verification."
        ]
      },
      {
        "heading": "Method step 28",
        "body": [
          "Population control for testing dependency update risk review: reconcile opening records, additions, transfers, withdrawals, and ending records."
        ]
      },
      {
        "heading": "Method step 29",
        "body": [
          "Next review for testing dependency update risk review: set the date, the owner, and the evidence that would trigger a new study."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "name": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ],
    "keyStats": [
      "Dependency risk",
      "Two independent reviewers",
      "One named owner for the retest"
    ],
    "takeaways": [
      "Research question and scope",
      "Scope",
      "Source hierarchy",
      "Data quality"
    ],
    "faqs": [
      {
        "question": "What does Testing Dependency Update Risk Review measure?",
        "answer": "Dependency risk The report fixes the unit, denominator, exclusions, and evidence trail before reviewing outcomes."
      },
      {
        "question": "What can this method not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record and the consistency of the review."
      }
    ],
    "related": [
      {
        "title": "Measuring Code Review Latency",
        "href": "/research/code-review-latency-method"
      },
      {
        "title": "Testing Migration Rollback Verification",
        "href": "/research/migration-rollback-verification-method"
      },
      {
        "title": "Measuring Feature Flag Retirement",
        "href": "/research/feature-flag-retirement-method"
      }
    ]
  }
];
