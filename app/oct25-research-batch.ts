import type { ResearchPost } from './fleet-data';

export const octoberTwentyFiveResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "dvo-access-removal",
    "title": "How Long Does Offshore Software Development Access Outlive the Assignment?",
    "excerpt": "A protocol measuring the gap between assignment end and access removal for offshore software development work.",
    "published": "2026-10-25",
    "updated": "2026-10-25",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "How long after an assignment ends does access remain active? The scope is the operational record for offshore software development, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Assignments ending in a defined quarter, including transfers and client removals.",
          "The unit is one assignment and one access account. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure days from end to removal, accounts active after seven days, shared credentials rotated.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the assignment end date, the access list, the removal log, the equipment return, the client confirmation. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support an offboarding checklist, a weekly access review, a client notification standard.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not decide whether the assignment ended for cause."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A client may remove access without telling the team. A shared account cannot identify the individual. A transfer may legitimately keep an account open.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "NIST access guidance frames the measure. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "body": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "heading": "A calibration case",
        "body": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "body": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "heading": "Reporting package",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "body": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "heading": "Reopening conditions",
        "body": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "heading": "A worked example of the record",
        "body": [
          "An item arrives with a source that is one version behind the current offshore software development record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "heading": "Common failure modes",
        "body": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "heading": "What the result does not prove",
        "body": [
          "The result does not prove that the offshore software development work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "heading": "A short review agenda",
        "body": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "heading": "Data quality checks",
        "body": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "heading": "A note on sampling",
        "body": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "body": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "heading": "What would change the answer",
        "body": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "body": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "heading": "Governance and handoff",
        "body": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome. The operational owner is the engineering manager; the specialist may collect, label, and reconcile evidence but does not make the legal, clinical, financial, or employment decision.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed from the record, mark the gap and the owner rather than filling it from memory. A small protocol that is repeatable is more useful than a large study that cannot be reproduced."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, the window, the definitions, the case flow, the unresolved items, and the limits together. Separate observations, calculations, and owner judgments. A count without a denominator is not a finding, and a percentage without a source is not evidence.",
          "Name what would reopen the conclusion: a system change, a policy change, a different client mix, or a material volume shift. Record the next review date and the owner who will decide whether the finding still applies."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "ISO/IEC 27001 Information Security",
        "url": "https://www.iso.org/isoiec-27001-information-security.html"
      },
      {
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "HHS HIPAA Security Rule",
        "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html"
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
      },
      {
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "OWASP Foundation",
        "url": "https://owasp.org/"
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
    ],
    "nextAction": {
      "heading": "Prepare a review-evidence brief",
      "body": "Bring one review-ready change, its checks, the reviewer record, and any unresolved risk to the discussion. A Philippines-based QA engineer can help organize repeatable checks and failure evidence; your engineering owner decides review standards, merge approval, and exceptions.",
      "label": "Plan QA automation engineering",
      "href": "/services/qa-automation-engineering",
      "anchorId": "review-evidence-brief"
    }
  },
  {
    "slug": "dvo-handoff-completeness",
    "title": "Can a Second Reviewer Continue the Offshore Software Development Handoff?",
    "excerpt": "A protocol measuring whether offshore software development handoffs carry the source, state, owner, and next action.",
    "published": "2026-10-25",
    "updated": "2026-10-25",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "Can a reviewer who did not prepare the item continue it without asking the preparer? The scope is the operational record for offshore software development, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Handoffs made in a defined month between roles or shifts.",
          "The unit is one handoff event. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure handoffs a second reviewer can continue, missing source rate, reopened after handoff.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the handoff note, the source link, the open question, the receiving owner, the next date. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a handoff template, an acknowledgment rule, a weekly sample.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not judge the quality of the underlying work."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A chat message may carry context that never reaches the record. An acknowledgment may be assumed rather than recorded. The receiver may accept a weak packet to keep work moving.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Records management guidance frames the documentation standard. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "body": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "heading": "A calibration case",
        "body": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "body": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "heading": "Reporting package",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "body": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "heading": "Reopening conditions",
        "body": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "heading": "A worked example of the record",
        "body": [
          "An item arrives with a source that is one version behind the current offshore software development record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "heading": "Common failure modes",
        "body": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "heading": "What the result does not prove",
        "body": [
          "The result does not prove that the offshore software development work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "heading": "A short review agenda",
        "body": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "heading": "Data quality checks",
        "body": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "heading": "A note on sampling",
        "body": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "body": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "heading": "What would change the answer",
        "body": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "body": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "heading": "Governance and handoff",
        "body": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome. The operational owner is the engineering manager; the specialist may collect, label, and reconcile evidence but does not make the legal, clinical, financial, or employment decision.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed from the record, mark the gap and the owner rather than filling it from memory. A small protocol that is repeatable is more useful than a large study that cannot be reproduced."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, the window, the definitions, the case flow, the unresolved items, and the limits together. Separate observations, calculations, and owner judgments. A count without a denominator is not a finding, and a percentage without a source is not evidence.",
          "Name what would reopen the conclusion: a system change, a policy change, a different client mix, or a material volume shift. Record the next review date and the owner who will decide whether the finding still applies."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "name": "ISO/IEC 27001 Information Security",
        "url": "https://www.iso.org/isoiec-27001-information-security.html"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
      },
      {
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "HHS HIPAA Security Rule",
        "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html"
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
      },
      {
        "name": "OWASP Foundation",
        "url": "https://owasp.org/"
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
    "slug": "dvo-intake-reliability",
    "title": "How Complete Is the Offshore Software Development Intake Record at First Review?",
    "excerpt": "A protocol for measuring whether offshore software development intake items carry the source, owner, and date needed before work begins.",
    "published": "2026-10-25",
    "updated": "2026-10-25",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "Do intake items carry the source, owner, and date needed at first review, and how often are they sent back? The scope is the operational record for offshore software development, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Items entering offshore software development work during a defined month, including items later returned or withdrawn.",
          "The unit is one intake item at first review. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure complete-at-first-review rate, returns by missing field, days from intake to owner acceptance.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the request record, the source link and version, the owner assignment, the due window, the return reason. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a field-level intake checklist, a return-reason taxonomy, a first-week review.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not judge whether the work itself was correct."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A shared inbox can make an item look complete while the source is missing. A late owner assignment can hide an intake defect. The sample may overrepresent clean items.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "SBA and internal control guidance frame the record question, not a result. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "body": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "heading": "A calibration case",
        "body": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "body": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "heading": "Reporting package",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "body": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "heading": "Reopening conditions",
        "body": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "heading": "A worked example of the record",
        "body": [
          "An item arrives with a source that is one version behind the current offshore software development record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "heading": "Common failure modes",
        "body": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "heading": "What the result does not prove",
        "body": [
          "The result does not prove that the offshore software development work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "heading": "A short review agenda",
        "body": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "heading": "Data quality checks",
        "body": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "heading": "A note on sampling",
        "body": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "body": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "heading": "What would change the answer",
        "body": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "body": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "heading": "Governance and handoff",
        "body": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome. The operational owner is the engineering manager; the specialist may collect, label, and reconcile evidence but does not make the legal, clinical, financial, or employment decision.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed from the record, mark the gap and the owner rather than filling it from memory. A small protocol that is repeatable is more useful than a large study that cannot be reproduced."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, the window, the definitions, the case flow, the unresolved items, and the limits together. Separate observations, calculations, and owner judgments. A count without a denominator is not a finding, and a percentage without a source is not evidence.",
          "Name what would reopen the conclusion: a system change, a policy change, a different client mix, or a material volume shift. Record the next review date and the owner who will decide whether the finding still applies."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "ISO/IEC 27001 Information Security",
        "url": "https://www.iso.org/isoiec-27001-information-security.html"
      },
      {
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "name": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
      },
      {
        "name": "OWASP Foundation",
        "url": "https://owasp.org/"
      },
      {
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
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
    "slug": "dvo-queue-aging",
    "title": "Where Does Offshore Software Development Queue Time Actually Go?",
    "excerpt": "A protocol separating owner wait, source wait, system delay, and rework in offshore software development queues.",
    "published": "2026-10-25",
    "updated": "2026-10-25",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "How much queue time is waiting for an owner, waiting for a source, system delay, or rework? The scope is the operational record for offshore software development, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Items open during a defined period, including closed, blocked, and reopened items.",
          "The unit is one item and its state intervals. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure median days by wait reason, oldest unresolved item, share of time in owner wait.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the state changes and timestamps, the source request, the owner assignment, the exception reason, the destination event. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a state-based queue review, an owner response target, a source request template.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not evaluate individual performance."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "Timestamps may record system events rather than human action. A blocked item can look active because someone opened it. A short sample may miss the oldest items.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "NIST and internal control guidance frame the state record. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "body": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "heading": "A calibration case",
        "body": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "body": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "heading": "Reporting package",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "body": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "heading": "Reopening conditions",
        "body": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "heading": "A worked example of the record",
        "body": [
          "An item arrives with a source that is one version behind the current offshore software development record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "heading": "Common failure modes",
        "body": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "heading": "What the result does not prove",
        "body": [
          "The result does not prove that the offshore software development work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "heading": "A short review agenda",
        "body": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "heading": "Data quality checks",
        "body": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "heading": "A note on sampling",
        "body": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "body": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "heading": "What would change the answer",
        "body": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "body": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "heading": "Governance and handoff",
        "body": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome. The operational owner is the engineering manager; the specialist may collect, label, and reconcile evidence but does not make the legal, clinical, financial, or employment decision.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed from the record, mark the gap and the owner rather than filling it from memory. A small protocol that is repeatable is more useful than a large study that cannot be reproduced."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, the window, the definitions, the case flow, the unresolved items, and the limits together. Separate observations, calculations, and owner judgments. A count without a denominator is not a finding, and a percentage without a source is not evidence.",
          "Name what would reopen the conclusion: a system change, a policy change, a different client mix, or a material volume shift. Record the next review date and the owner who will decide whether the finding still applies."
        ]
      }
    ],
    "sources": [
      {
        "name": "ISO/IEC 27001 Information Security",
        "url": "https://www.iso.org/isoiec-27001-information-security.html"
      },
      {
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "OWASP Foundation",
        "url": "https://owasp.org/"
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
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
    "slug": "dvo-reviewer-agreement",
    "title": "Do Reviewers Agree on Offshore Software Development Exception Codes?",
    "excerpt": "A protocol testing whether independent reviewers assign the same exception reason to the same offshore software development record.",
    "published": "2026-10-25",
    "updated": "2026-10-25",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "Do two reviewers assign the same exception code from the same evidence? The scope is the operational record for offshore software development, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Exceptions raised in a defined month, including resolved and open items.",
          "The unit is one exception at first classification. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure agreement on the reason code, disagreement by cause, reopened exceptions.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the exception record, the source evidence, the code definitions, the reviewer note, the resolution. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a coded exception taxonomy, a reviewer calibration, a clearer stop rule.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not decide whether the exception was handled correctly."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "Reviewers may share the same incomplete record and agree for the wrong reason. A code may be defined by outcome rather than evidence. Small samples cannot support a broad rate.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "GAO internal control guidance frames the review. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "heading": "Governance and stopping",
        "body": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "heading": "A calibration case",
        "body": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "body": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "heading": "Reporting package",
        "body": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "body": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "heading": "Reopening conditions",
        "body": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "heading": "A worked example of the record",
        "body": [
          "An item arrives with a source that is one version behind the current offshore software development record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "heading": "Common failure modes",
        "body": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "heading": "What the result does not prove",
        "body": [
          "The result does not prove that the offshore software development work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "heading": "A short review agenda",
        "body": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "heading": "Data quality checks",
        "body": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "heading": "A note on sampling",
        "body": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "body": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "heading": "What would change the answer",
        "body": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "body": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "heading": "Governance and handoff",
        "body": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome. The operational owner is the engineering manager; the specialist may collect, label, and reconcile evidence but does not make the legal, clinical, financial, or employment decision.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed from the record, mark the gap and the owner rather than filling it from memory. A small protocol that is repeatable is more useful than a large study that cannot be reproduced."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, the window, the definitions, the case flow, the unresolved items, and the limits together. Separate observations, calculations, and owner judgments. A count without a denominator is not a finding, and a percentage without a source is not evidence.",
          "Name what would reopen the conclusion: a system change, a policy change, a different client mix, or a material volume shift. Record the next review date and the owner who will decide whether the finding still applies."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "name": "ISO/IEC 27001 Information Security",
        "url": "https://www.iso.org/isoiec-27001-information-security.html"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
      },
      {
        "name": "HHS HIPAA Security Rule",
        "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "OWASP Foundation",
        "url": "https://owasp.org/"
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
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
