import type { ResearchPost } from './fleet-data';

export const octoberTwentySevenResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "dvo-escalation-wait",
    "title": "Where Does Offshore Software Development Escalation Time Go?",
    "excerpt": "A protocol separating owner wait, dependency wait, system delay, and rework in offshore software development escalations.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "How much escalation time is spent waiting for an internal owner, an external dependency, a system action, or rework? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Escalations opened during a defined month, including resolved, open, and reopened items.",
          "The unit is one escalation and its state intervals. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure median hours by wait reason, oldest open escalation, and share waiting on a dependency owner.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the issue and time raised, the dependency and owner, the state changes, the response target, and the resolution confirmation. Record the source, observation time, field, and reviewer.",
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
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a dependency-specific response target and an escalation owner review.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol describes the escalation record, not whether the resolution was technically correct."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A state change may be logged after the fact. A dependency delay can be hidden inside owner wait. Small samples may miss the oldest cases.",
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
          "Public service and records guidance frames the measurement question, not a benchmark. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "name": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
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
        "name": "OWASP Foundation",
        "url": "https://owasp.org/"
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
      }
    ],
    "keyStats": [
      "Unit: one offshore software development item at the review date.",
      "Published 2026-10-27 with 10 cited public sources.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol separating owner wait, dependency wait, system delay, and rework in offshore software development escalations.",
      "How much escalation time is spent waiting for an internal owner, an external dependency, a system action, or rework?",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [],
    "related": [
      {
        "title": "How Complete Is the Offshore Software Development Vendor Onboarding Packet at First Review?",
        "href": "/research/dvo-vendor-cycle"
      },
      {
        "title": "How Accurate Is Offshore Software Development Capacity Forecasting?",
        "href": "/research/dvo-capacity-error"
      },
      {
        "title": "Does Cross-Training Cover the Offshore Software Development Queue?",
        "href": "/research/dvo-cross-training-coverage"
      }
    ]
  },
  {
    "slug": "dvo-vendor-cycle",
    "title": "How Complete Is the Offshore Software Development Vendor Onboarding Packet at First Review?",
    "excerpt": "A protocol measuring whether offshore software development vendor packets carry identity, insurance, security, access, and owner acceptance before work starts.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "What share of vendor onboarding packets are complete at first review, and which missing item delays the start? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Vendors entering onboarding during a defined quarter, including withdrawn and delayed vendors.",
          "The unit is one vendor packet at first review. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure complete-at-first-review rate, returns by missing item, and days from packet start to owner acceptance.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the vendor and scope, the required documents, the security review, the access list, and the owner acceptance. Record the source, observation time, field, and reviewer.",
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
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a packet completeness checklist and a start-date gate.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures packet completeness, not whether the vendor should have been selected."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A vendor may start work before the packet is complete. A document may be present but expired. The sample may overrepresent cooperative vendors.",
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
          "Public procurement and records guidance frames the documentation question. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
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
      }
    ],
    "keyStats": [
      "Unit: one offshore software development item at the review date.",
      "Published 2026-10-27 with 10 cited public sources.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol measuring whether offshore software development vendor packets carry identity, insurance, security, access, and owner acceptance before work starts.",
      "What share of vendor onboarding packets are complete at first review, and which missing item delays the start?",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [],
    "related": [
      {
        "title": "Where Does Offshore Software Development Escalation Time Go?",
        "href": "/research/dvo-escalation-wait"
      },
      {
        "title": "How Accurate Is Offshore Software Development Capacity Forecasting?",
        "href": "/research/dvo-capacity-error"
      },
      {
        "title": "Does Cross-Training Cover the Offshore Software Development Queue?",
        "href": "/research/dvo-cross-training-coverage"
      }
    ]
  },
  {
    "slug": "dvo-capacity-error",
    "title": "How Accurate Is Offshore Software Development Capacity Forecasting?",
    "excerpt": "A protocol comparing forecast demand and handling time with actual offshore software development queue performance.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "How far does forecast capacity differ from actual demand and handling time, and which work type drives the error? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Forecast weeks in a defined quarter, including normal, seasonal, and disrupted weeks.",
          "The unit is one work type and one forecast week. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure absolute forecast error by work type, weeks with a capacity gap, and deferred items by priority.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the forecast and assumptions, the actual volume, the handling time, the blocked time, and the deferral decision. Record the source, observation time, field, and reviewer.",
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
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a capacity review and a priority deferral rule.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures forecast accuracy, not individual productivity."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A new work type may have no history. Handling time may exclude rework. A seasonal week can distort a short comparison.",
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
          "Operations and workforce guidance frames the capacity question, not a staffing recommendation. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "name": "ISO/IEC 27001 Information Security",
        "url": "https://www.iso.org/isoiec-27001-information-security.html"
      },
      {
        "name": "NIST SP 800-128, Security-Focused Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "HHS HIPAA Security Rule",
        "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html"
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
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
      },
      {
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      }
    ],
    "keyStats": [
      "Unit: one offshore software development item at the review date.",
      "Published 2026-10-27 with 10 cited public sources.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol comparing forecast demand and handling time with actual offshore software development queue performance.",
      "How far does forecast capacity differ from actual demand and handling time, and which work type drives the error?",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [],
    "related": [
      {
        "title": "Where Does Offshore Software Development Escalation Time Go?",
        "href": "/research/dvo-escalation-wait"
      },
      {
        "title": "How Complete Is the Offshore Software Development Vendor Onboarding Packet at First Review?",
        "href": "/research/dvo-vendor-cycle"
      },
      {
        "title": "Does Cross-Training Cover the Offshore Software Development Queue?",
        "href": "/research/dvo-cross-training-coverage"
      }
    ]
  },
  {
    "slug": "dvo-cross-training-coverage",
    "title": "Does Cross-Training Cover the Offshore Software Development Queue?",
    "excerpt": "A protocol testing whether every offshore software development lane has a backup who can complete the task without help.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "What share of critical offshore software development lanes have a tested backup, and which lanes remain single-person dependencies? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Critical queues and roles in a defined period, including leave and turnover events.",
          "The unit is one lane and one backup test. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure lanes with a tested backup, backup tasks completed without help, and single-person lanes.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the lane and task, the primary owner, the backup, the practice date, and the result and remaining questions. Record the source, observation time, field, and reviewer.",
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
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a coverage map and a practice calendar.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures task coverage, not overall performance."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "Access may exist without task competence. A practice task may be easier than production. A recent role change may invalidate the map.",
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
          "Workforce and internal-control guidance frames the coverage question. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
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
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
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
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
      },
      {
        "name": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      }
    ],
    "keyStats": [
      "Unit: one offshore software development item at the review date.",
      "Published 2026-10-27 with 10 cited public sources.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol testing whether every offshore software development lane has a backup who can complete the task without help.",
      "What share of critical offshore software development lanes have a tested backup, and which lanes remain single-person dependencies?",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [],
    "related": [
      {
        "title": "Where Does Offshore Software Development Escalation Time Go?",
        "href": "/research/dvo-escalation-wait"
      },
      {
        "title": "How Complete Is the Offshore Software Development Vendor Onboarding Packet at First Review?",
        "href": "/research/dvo-vendor-cycle"
      },
      {
        "title": "How Accurate Is Offshore Software Development Capacity Forecasting?",
        "href": "/research/dvo-capacity-error"
      }
    ]
  },
  {
    "slug": "dvo-retention-compliance",
    "title": "Do Offshore Software Development Records Follow the Retention Schedule?",
    "excerpt": "A protocol measuring whether offshore software development records are kept, reviewed, and disposed of according to a written schedule.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "sections": [
      {
        "heading": "Research question and scope",
        "body": [
          "What share of sampled offshore software development records follow the retention schedule, and where do holds or backups change the expected outcome? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.",
          "The study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "body": [
          "Records created or due for disposal in a defined quarter, including held and archived items.",
          "The unit is one record class and one retention decision. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "body": [
          "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure records disposed on schedule, records retained past schedule without a hold, and records with a verified disposal.",
          "A count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "body": [
          "Each case needs the record class and system, the retention basis, the hold status, the disposal decision, and the confirmation. Record the source, observation time, field, and reviewer.",
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
          "The record can show field presence, source currency, named ownership, and where the offshore software development record is thin. It can support a retention schedule review and a disposal verification.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol measures schedule compliance, not whether a specific legal hold was correct."
        ]
      },
      {
        "heading": "Limitations and error",
        "body": [
          "A backup may retain a copy after primary disposal. A legal hold may be recorded outside the system. A record may be misclassified.",
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
          "Public records-management guidance frames the retention question, not a legal conclusion. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
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
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf"
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
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
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign"
      }
    ],
    "keyStats": [
      "Unit: one offshore software development item at the review date.",
      "Published 2026-10-27 with 10 cited public sources.",
      "One named owner accepts the result and any control change."
    ],
    "takeaways": [
      "A protocol measuring whether offshore software development records are kept, reviewed, and disposed of according to a written schedule.",
      "What share of sampled offshore software development records follow the retention schedule, and where do holds or backups change the expected outcome?",
      "The protocol describes the record; it does not establish causation or an industry rate."
    ],
    "faqs": [],
    "related": [
      {
        "title": "Where Does Offshore Software Development Escalation Time Go?",
        "href": "/research/dvo-escalation-wait"
      },
      {
        "title": "How Complete Is the Offshore Software Development Vendor Onboarding Packet at First Review?",
        "href": "/research/dvo-vendor-cycle"
      },
      {
        "title": "How Accurate Is Offshore Software Development Capacity Forecasting?",
        "href": "/research/dvo-capacity-error"
      }
    ]
  }
];
