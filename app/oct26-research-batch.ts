import type { ResearchPost } from './fleet-data';

export const octoberTwentySixResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "dvo-aged-backlog-evidence",
    "title": "How Does Evidence Quality Change Across an Aged Offshore Software Development Backlog?",
    "excerpt": "A protocol for measuring missing source, owner, and destination evidence in aged offshore software development backlog items.",
    "published": "2026-10-26",
    "updated": "2026-10-26",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "How does evidence quality change across an aged offshore software development backlog, and which missing inputs account for the oldest unresolved items? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Items open at the start of a defined month and still open at the end, plus items closed during the month for comparison.",
          "The unit is one backlog item at the review date. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure share with a complete source trail, oldest items by missing input, and reopened items after backlog cleanup.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the request and received date, the governing source and version, the owner and state history, the missing input code, and the destination confirmation. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a missing-input triage and an owner-group review.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol describes the record, not whether the underlying service was correct."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "Older items may have been created under a different template. A recent cleanup may have closed items without a destination check. The sample may overrepresent items that were easy to find.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Public records and internal-control guidance frame the evidence standard; they do not provide a result for this sample. The cited public sources frame method and context; they do not provide a result for this sample."
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
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the engineering manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for offshore software development",
        "body": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for offshore software development",
        "body": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
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
        "name": "OWASP Foundation",
        "url": "https://owasp.org/"
      }
    ],
    "keyStats": [
      "Unit: one backlog item at the review date.",
      "Two independent reviewers classify the same frozen sample.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol for measuring missing source, owner, and destination evidence in aged offshore software development backlog items.",
      "A count needs a denominator, window, and exclusions before it becomes a measure.",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [
      {
        "question": "What does this protocol measure?",
        "answer": "A protocol for measuring missing source, owner, and destination evidence in aged offshore software development backlog items."
      },
      {
        "question": "What can it not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record in a bounded sample."
      }
    ],
    "related": [
      {
        "title": "How Often Do Duplicate Requests Enter the Offshore Software Development Queue?",
        "href": "/research/dvo-duplicate-request-rate"
      },
      {
        "title": "Does Offshore Software Development Handover Quality Survive a Role Change?",
        "href": "/research/dvo-role-change-continuity"
      },
      {
        "title": "What Share of Offshore Software Development Documents Reach Expiry Without a Review?",
        "href": "/research/dvo-document-expiry-risk"
      }
    ],
    "nextAction": {
      "heading": "Prepare a review-evidence brief",
      "body": "Bring one bounded work item, its source, the current owner, and the next decision to the discussion. A Philippines-based specialist can prepare the evidence and routing; your engineering manager keeps priority, access, and production decisions.",
      "label": "Plan QA automation engineering",
      "href": "/services/qa-automation-engineering",
      "anchorId": "review-evidence-brief"
    }
  },
  {
    "slug": "dvo-duplicate-request-rate",
    "title": "How Often Do Duplicate Requests Enter the Offshore Software Development Queue?",
    "excerpt": "A protocol for detecting repeated offshore software development requests across channels before they become separate cases.",
    "published": "2026-10-26",
    "updated": "2026-10-26",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "How often does the same offshore software development request enter the queue more than once, and which channels or missing keys make duplication more likely? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Requests received during a defined month, including requests later merged or withdrawn.",
          "The unit is one request at intake, linked to a case key. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure duplicate requests per 100 intake items, duplicate rate by channel, and merged cases reopened.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the requester and channel, the requested outcome, the account or item key, the source record, and the linked case and merge decision. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support an intake search rule and a channel-specific key requirement.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures duplication in the record; it does not decide which request should control."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "Two requesters may describe one outcome with different words. A missing account key can make a duplicate look new. A merge can hide a second requester's constraint.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Public guidance on records and consumer communication frames the documentation question, not a duplication benchmark. The cited public sources frame method and context; they do not provide a result for this sample."
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
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the engineering manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for offshore software development",
        "body": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for offshore software development",
        "body": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
        ]
      }
    ],
    "sources": [
      {
        "name": "ISO/IEC 27001 Information Security",
        "url": "https://www.iso.org/isoiec-27001-information-security.html"
      },
      {
        "name": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
      },
      {
        "name": "OWASP Foundation",
        "url": "https://owasp.org/"
      },
      {
        "name": "HHS HIPAA Security Rule",
        "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html"
      },
      {
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      }
    ],
    "keyStats": [
      "Unit: one request record at the review date.",
      "Two independent reviewers classify the same frozen sample.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol for detecting repeated offshore software development requests across channels before they become separate cases.",
      "A count needs a denominator, window, and exclusions before it becomes a measure.",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [
      {
        "question": "What does this protocol measure?",
        "answer": "A protocol for detecting repeated offshore software development requests across channels before they become separate cases."
      },
      {
        "question": "What can it not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record in a bounded sample."
      }
    ],
    "related": [
      {
        "title": "Does Offshore Software Development Handover Quality Survive a Role Change?",
        "href": "/research/dvo-role-change-continuity"
      },
      {
        "title": "What Share of Offshore Software Development Documents Reach Expiry Without a Review?",
        "href": "/research/dvo-document-expiry-risk"
      },
      {
        "title": "Who Owns the Shared Offshore Software Development Inbox at First Response?",
        "href": "/research/dvo-shared-inbox-coverage"
      }
    ],
    "nextAction": {
      "heading": "Prepare a review-evidence brief",
      "body": "Bring one bounded work item, its source, the current owner, and the next decision to the discussion. A Philippines-based specialist can prepare the evidence and routing; your engineering manager keeps priority, access, and production decisions.",
      "label": "Plan QA automation engineering",
      "href": "/services/qa-automation-engineering",
      "anchorId": "review-evidence-brief"
    }
  },
  {
    "slug": "dvo-role-change-continuity",
    "title": "Does Offshore Software Development Handover Quality Survive a Role Change?",
    "excerpt": "A protocol for measuring open work, commitments, and access continuity across a offshore software development role change.",
    "published": "2026-10-26",
    "updated": "2026-10-26",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "After a role change, can a new owner continue the open offshore software development work and commitments from the record alone? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Role changes during a defined quarter, including planned moves, leave, and turnover.",
          "The unit is one role-change event and the open items at transfer. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure items with an incoming owner, commitments missed during transition, and access removed on schedule.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the handover pack, the open item list, the commitment record, the access list, and the first-week decision log. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a handover template and a first-week review.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures continuity of the record, not the quality of the departing owner's work."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A handover meeting may carry context that never reaches the record. A temporary owner may make permanent decisions. The incoming owner may not know which commitments are external.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Records management and internal-control guidance frame the handover standard. The cited public sources frame method and context; they do not provide a result for this sample."
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
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the engineering manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for offshore software development",
        "body": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for offshore software development",
        "body": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
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
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "ISO/IEC 27001 Information Security",
        "url": "https://www.iso.org/isoiec-27001-information-security.html"
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
        "name": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      },
      {
        "name": "OWASP Foundation",
        "url": "https://owasp.org/"
      },
      {
        "name": "HHS HIPAA Security Rule",
        "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html"
      }
    ],
    "keyStats": [
      "Unit: one handover event at the review date.",
      "Two independent reviewers classify the same frozen sample.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol for measuring open work, commitments, and access continuity across a offshore software development role change.",
      "A count needs a denominator, window, and exclusions before it becomes a measure.",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [
      {
        "question": "What does this protocol measure?",
        "answer": "A protocol for measuring open work, commitments, and access continuity across a offshore software development role change."
      },
      {
        "question": "What can it not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record in a bounded sample."
      }
    ],
    "related": [
      {
        "title": "What Share of Offshore Software Development Documents Reach Expiry Without a Review?",
        "href": "/research/dvo-document-expiry-risk"
      },
      {
        "title": "Who Owns the Shared Offshore Software Development Inbox at First Response?",
        "href": "/research/dvo-shared-inbox-coverage"
      },
      {
        "title": "How Does Evidence Quality Change Across an Aged Offshore Software Development Backlog?",
        "href": "/research/dvo-aged-backlog-evidence"
      }
    ],
    "nextAction": {
      "heading": "Prepare a review-evidence brief",
      "body": "Bring one bounded work item, its source, the current owner, and the next decision to the discussion. A Philippines-based specialist can prepare the evidence and routing; your engineering manager keeps priority, access, and production decisions.",
      "label": "Plan QA automation engineering",
      "href": "/services/qa-automation-engineering",
      "anchorId": "review-evidence-brief"
    }
  },
  {
    "slug": "dvo-document-expiry-risk",
    "title": "What Share of Offshore Software Development Documents Reach Expiry Without a Review?",
    "excerpt": "A protocol for measuring document expiry risk and renewal timeliness in offshore software development operations.",
    "published": "2026-10-26",
    "updated": "2026-10-26",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "What share of offshore software development documents reach expiry without a recorded review, and which document types or owners account for the gap? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Documents with an expiry date in a defined quarter, including renewed, expired, and missing records.",
          "The unit is one document and its expiry date. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure documents reviewed before expiry, renewals started before the lead time, and process failures after expiry.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the document type and identifier, the issue and expiry dates, the source and version, the renewal request, and the destination confirmation. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a 30-day expiry watch and a lead-time rule by document type.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures the review record, not whether a regulator would accept the document."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A document may be renewed without updating the date field. A grace period may hide a late review. Documents without a structured date cannot be sampled.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Public recordkeeping and risk guidance frame the expiry question, not a compliance conclusion. The cited public sources frame method and context; they do not provide a result for this sample."
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
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the engineering manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for offshore software development",
        "body": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for offshore software development",
        "body": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
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
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "ISO/IEC 27001 Information Security",
        "url": "https://www.iso.org/isoiec-27001-information-security.html"
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
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
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
        "name": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      }
    ],
    "keyStats": [
      "Unit: one document record at the review date.",
      "Two independent reviewers classify the same frozen sample.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol for measuring document expiry risk and renewal timeliness in offshore software development operations.",
      "A count needs a denominator, window, and exclusions before it becomes a measure.",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [
      {
        "question": "What does this protocol measure?",
        "answer": "A protocol for measuring document expiry risk and renewal timeliness in offshore software development operations."
      },
      {
        "question": "What can it not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record in a bounded sample."
      }
    ],
    "related": [
      {
        "title": "Who Owns the Shared Offshore Software Development Inbox at First Response?",
        "href": "/research/dvo-shared-inbox-coverage"
      },
      {
        "title": "How Does Evidence Quality Change Across an Aged Offshore Software Development Backlog?",
        "href": "/research/dvo-aged-backlog-evidence"
      },
      {
        "title": "How Often Do Duplicate Requests Enter the Offshore Software Development Queue?",
        "href": "/research/dvo-duplicate-request-rate"
      }
    ],
    "nextAction": {
      "heading": "Prepare a review-evidence brief",
      "body": "Bring one bounded work item, its source, the current owner, and the next decision to the discussion. A Philippines-based specialist can prepare the evidence and routing; your engineering manager keeps priority, access, and production decisions.",
      "label": "Plan QA automation engineering",
      "href": "/services/qa-automation-engineering",
      "anchorId": "review-evidence-brief"
    }
  },
  {
    "slug": "dvo-shared-inbox-coverage",
    "title": "Who Owns the Shared Offshore Software Development Inbox at First Response?",
    "excerpt": "A protocol for measuring first-responder coverage and duplicate answers in a shared offshore software development inbox.",
    "published": "2026-10-26",
    "updated": "2026-10-26",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "At first response, is every offshore software development inbox message claimed by one responder with a named decision owner? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Messages received during a defined week, including answered, unanswered, and reassigned messages.",
          "The unit is one inbound message and its first claim. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure messages claimed within target, messages with two responders, and unanswered at shift end.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the message and timestamp, the lane and first responder, the claim or label, the response and owner, and the handoff or close state. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
        ]
      },
      {
        "heading": "Sampling and collection",
        "body": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
        ]
      },
      {
        "heading": "Reviewer independence",
        "body": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
        ]
      },
      {
        "heading": "What the evidence can support",
        "body": [
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a lane ownership map and a shift-end coverage review.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures the inbox record, not the quality of the customer answer."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A read receipt may look like a claim. A responder may answer from a private thread. A shared label may be applied after the response.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "body": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Public service and records guidance frames the ownership question, not a staffing benchmark. The cited public sources frame method and context; they do not provide a result for this sample."
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
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the engineering manager.",
          "Pause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
        ]
      },
      {
        "heading": "Applying the protocol to offshore software development",
        "body": [
          "The protocol is written for engineering leaders and product teams. It asks what the offshore software development record can show in a defined window, not whether a particular staffing model caused an outcome.",
          "Use the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
        ]
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": [
          "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.",
          "A count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
        ]
      },
      {
        "heading": "Replication note for offshore software development",
        "body": [
          "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.",
          "If the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
        ]
      },
      {
        "heading": "Additional consideration for offshore software development",
        "body": [
          "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.",
          "Review the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
        ]
      }
    ],
    "sources": [
      {
        "name": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
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
        "name": "HHS HIPAA Security Rule",
        "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html"
      },
      {
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      }
    ],
    "keyStats": [
      "Unit: one inbound request at the review date.",
      "Two independent reviewers classify the same frozen sample.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol for measuring first-responder coverage and duplicate answers in a shared offshore software development inbox.",
      "A count needs a denominator, window, and exclusions before it becomes a measure.",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [
      {
        "question": "What does this protocol measure?",
        "answer": "A protocol for measuring first-responder coverage and duplicate answers in a shared offshore software development inbox."
      },
      {
        "question": "What can it not establish?",
        "answer": "It cannot establish causation, a legal conclusion, or a performance rating. It measures the documented record in a bounded sample."
      }
    ],
    "related": [
      {
        "title": "How Does Evidence Quality Change Across an Aged Offshore Software Development Backlog?",
        "href": "/research/dvo-aged-backlog-evidence"
      },
      {
        "title": "How Often Do Duplicate Requests Enter the Offshore Software Development Queue?",
        "href": "/research/dvo-duplicate-request-rate"
      },
      {
        "title": "Does Offshore Software Development Handover Quality Survive a Role Change?",
        "href": "/research/dvo-role-change-continuity"
      }
    ],
    "nextAction": {
      "heading": "Prepare a review-evidence brief",
      "body": "Bring one bounded work item, its source, the current owner, and the next decision to the discussion. A Philippines-based specialist can prepare the evidence and routing; your engineering manager keeps priority, access, and production decisions.",
      "label": "Plan QA automation engineering",
      "href": "/services/qa-automation-engineering",
      "anchorId": "review-evidence-brief"
    }
  }
];
