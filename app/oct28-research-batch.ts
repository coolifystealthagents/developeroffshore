import type { ResearchPost } from './fleet-data';

export const octoberTwentyEightResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "dvo28-pull-request-reopen-rate",
    "title": "How Often Do Pull Requests Reopen After Approval?",
    "excerpt": "A measurement protocol for pull request reopen rate in offshore software delivery, testing whether approved work later returns for correction with a frozen population, an evidence sample, and a dated review.",
    "published": "2026-10-28",
    "updated": "2026-10-28",
    "sections": [
      {
        "heading": "Decision the study supports",
        "body": [
          "This study asks whether the pull request reopen rate can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The engineering owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "body": [
          "The primary question is whether the pull request reopen rate preserves enough evidence for a second reviewer to reconstruct the request, the change, the test, the approval, and the next commitment. The unit is one change journey, not one commit and not one working day.",
          "The population is every eligible item in a frozen observation window, including merged, rejected, reverted, reopened, abandoned, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "body": [
          "The cited public sources frame secure development, configuration control, operational reliability, vulnerability management, or review practice. They help define what a reliable process should preserve. They do not provide a measured result for any particular engineering team.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or organization type, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "body": [
          "Create a dated codebook before opening the sample. Capture the request time, ticket, branch, commit, author, reviewer, test command, CI result, environment, approval, deployment, rollback note, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "body": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by change type, risk class, repository, reviewer, time zone, and whether the item crossed a release boundary.",
          "Include clean, failed, reverted, repeated, and unresolved cases. Sampling only merged work overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "body": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast merge is not a success if the destination system lacks the approved change or the release note omits the rollback."
        ]
      },
      {
        "heading": "Measures and denominators",
        "body": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, approved-review rate, median review wait, reopen rate, rollback-note coverage, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, repositories, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "body": [
          "The record may overrepresent work handled in the tracked repository, items that reached deployment, or teams with cleaner templates. A change that moves through chat, a ticket, and a pull request can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate items at the change level. If the direction changes, call the finding fragile and publish the uncertainty rather than presenting a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and security",
        "body": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the repository, use named accounts, and set a disposal date. Do not publish secrets, customer data, private repository links, or unredacted incident details.",
          "The review process and any follow-up must remain accessible. Test documentation and review instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved security incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "body": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one test link, or test one review window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
      },
      {
        "name": "DORA Software Delivery Research",
        "url": "https://dora.dev/"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf"
      },
      {
        "name": "Git Documentation",
        "url": "https://git-scm.com/doc"
      },
      {
        "name": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/"
      },
      {
        "name": "OWASP Top 10",
        "url": "https://owasp.org/www-project-top-ten/"
      }
    ],
    "keyStats": [
      "6 public sources reviewed",
      "Frozen observation window",
      "Documented review method"
    ],
    "takeaways": [
      "This study asks whether the pull request reopen rate can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
      "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
      "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage."
    ],
    "faqs": [
      {
        "question": "What is the unit of analysis?",
        "answer": "One change journey, not one commit or one working day."
      },
      {
        "question": "Does this measure developer productivity?",
        "answer": "No. It measures whether the record can be reconstructed and reviewed."
      }
    ],
    "related": [
      {
        "title": "Developer Offshore services",
        "href": "/services"
      },
      {
        "title": "Engineering blog",
        "href": "/blog"
      }
    ]
  },
  {
    "slug": "dvo28-review-wait-time",
    "title": "Where Does Code Review Wait Time Accumulate Across Time Zones?",
    "excerpt": "A measurement protocol for code review wait time in offshore software delivery, testing whether delay sits with the author, reviewer, CI, or a dependency owner with a frozen population, an evidence sample, and a dated review.",
    "published": "2026-10-28",
    "updated": "2026-10-28",
    "sections": [
      {
        "heading": "Decision the study supports",
        "body": [
          "This study asks whether the code review wait time can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The engineering owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "body": [
          "The primary question is whether the code review wait time preserves enough evidence for a second reviewer to reconstruct the request, the change, the test, the approval, and the next commitment. The unit is one change journey, not one commit and not one working day.",
          "The population is every eligible item in a frozen observation window, including merged, rejected, reverted, reopened, abandoned, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "body": [
          "The cited public sources frame secure development, configuration control, operational reliability, vulnerability management, or review practice. They help define what a reliable process should preserve. They do not provide a measured result for any particular engineering team.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or organization type, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "body": [
          "Create a dated codebook before opening the sample. Capture the request time, ticket, branch, commit, author, reviewer, test command, CI result, environment, approval, deployment, rollback note, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "body": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by change type, risk class, repository, reviewer, time zone, and whether the item crossed a release boundary.",
          "Include clean, failed, reverted, repeated, and unresolved cases. Sampling only merged work overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "body": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast merge is not a success if the destination system lacks the approved change or the release note omits the rollback."
        ]
      },
      {
        "heading": "Measures and denominators",
        "body": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, approved-review rate, median review wait, reopen rate, rollback-note coverage, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, repositories, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "body": [
          "The record may overrepresent work handled in the tracked repository, items that reached deployment, or teams with cleaner templates. A change that moves through chat, a ticket, and a pull request can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate items at the change level. If the direction changes, call the finding fragile and publish the uncertainty rather than presenting a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and security",
        "body": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the repository, use named accounts, and set a disposal date. Do not publish secrets, customer data, private repository links, or unredacted incident details.",
          "The review process and any follow-up must remain accessible. Test documentation and review instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved security incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "body": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one test link, or test one review window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
      },
      {
        "name": "DORA Software Delivery Research",
        "url": "https://dora.dev/"
      },
      {
        "name": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/"
      },
      {
        "name": "Git Documentation",
        "url": "https://git-scm.com/doc"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf"
      },
      {
        "name": "OWASP Top 10",
        "url": "https://owasp.org/www-project-top-ten/"
      }
    ],
    "keyStats": [
      "6 public sources reviewed",
      "Frozen observation window",
      "Documented review method"
    ],
    "takeaways": [
      "This study asks whether the code review wait time can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
      "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
      "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage."
    ],
    "faqs": [
      {
        "question": "What is the unit of analysis?",
        "answer": "One change journey, not one commit or one working day."
      },
      {
        "question": "Does this measure developer productivity?",
        "answer": "No. It measures whether the record can be reconstructed and reviewed."
      }
    ],
    "related": [
      {
        "title": "Developer Offshore services",
        "href": "/services"
      },
      {
        "title": "Engineering blog",
        "href": "/blog"
      }
    ]
  },
  {
    "slug": "dvo28-rollback-evidence",
    "title": "How Complete Is Rollback Evidence for Small Deployments?",
    "excerpt": "A measurement protocol for rollback evidence completeness in offshore software delivery, testing whether a release note shows how to reverse the change with a frozen population, an evidence sample, and a dated review.",
    "published": "2026-10-28",
    "updated": "2026-10-28",
    "sections": [
      {
        "heading": "Decision the study supports",
        "body": [
          "This study asks whether the rollback evidence completeness can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The engineering owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "body": [
          "The primary question is whether the rollback evidence completeness preserves enough evidence for a second reviewer to reconstruct the request, the change, the test, the approval, and the next commitment. The unit is one change journey, not one commit and not one working day.",
          "The population is every eligible item in a frozen observation window, including merged, rejected, reverted, reopened, abandoned, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "body": [
          "The cited public sources frame secure development, configuration control, operational reliability, vulnerability management, or review practice. They help define what a reliable process should preserve. They do not provide a measured result for any particular engineering team.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or organization type, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "body": [
          "Create a dated codebook before opening the sample. Capture the request time, ticket, branch, commit, author, reviewer, test command, CI result, environment, approval, deployment, rollback note, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "body": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by change type, risk class, repository, reviewer, time zone, and whether the item crossed a release boundary.",
          "Include clean, failed, reverted, repeated, and unresolved cases. Sampling only merged work overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "body": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast merge is not a success if the destination system lacks the approved change or the release note omits the rollback."
        ]
      },
      {
        "heading": "Measures and denominators",
        "body": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, approved-review rate, median review wait, reopen rate, rollback-note coverage, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, repositories, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "body": [
          "The record may overrepresent work handled in the tracked repository, items that reached deployment, or teams with cleaner templates. A change that moves through chat, a ticket, and a pull request can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate items at the change level. If the direction changes, call the finding fragile and publish the uncertainty rather than presenting a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and security",
        "body": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the repository, use named accounts, and set a disposal date. Do not publish secrets, customer data, private repository links, or unredacted incident details.",
          "The review process and any follow-up must remain accessible. Test documentation and review instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved security incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "body": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one test link, or test one review window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "name": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/"
      },
      {
        "name": "DORA Software Delivery Research",
        "url": "https://dora.dev/"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf"
      },
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "Git Documentation",
        "url": "https://git-scm.com/doc"
      }
    ],
    "keyStats": [
      "6 public sources reviewed",
      "Frozen observation window",
      "Documented review method"
    ],
    "takeaways": [
      "This study asks whether the rollback evidence completeness can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
      "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
      "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage."
    ],
    "faqs": [
      {
        "question": "What is the unit of analysis?",
        "answer": "One change journey, not one commit or one working day."
      },
      {
        "question": "Does this measure developer productivity?",
        "answer": "No. It measures whether the record can be reconstructed and reviewed."
      }
    ],
    "related": [
      {
        "title": "Developer Offshore services",
        "href": "/services"
      },
      {
        "title": "Engineering blog",
        "href": "/blog"
      }
    ]
  },
  {
    "slug": "dvo28-dependency-compatibility-evidence",
    "title": "What Share of Dependency Upgrades Have Compatibility Evidence?",
    "excerpt": "A measurement protocol for dependency compatibility evidence in offshore software delivery, testing whether a version change records the test and advisory basis with a frozen population, an evidence sample, and a dated review.",
    "published": "2026-10-28",
    "updated": "2026-10-28",
    "sections": [
      {
        "heading": "Decision the study supports",
        "body": [
          "This study asks whether the dependency compatibility evidence can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The engineering owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "body": [
          "The primary question is whether the dependency compatibility evidence preserves enough evidence for a second reviewer to reconstruct the request, the change, the test, the approval, and the next commitment. The unit is one change journey, not one commit and not one working day.",
          "The population is every eligible item in a frozen observation window, including merged, rejected, reverted, reopened, abandoned, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "body": [
          "The cited public sources frame secure development, configuration control, operational reliability, vulnerability management, or review practice. They help define what a reliable process should preserve. They do not provide a measured result for any particular engineering team.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or organization type, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "body": [
          "Create a dated codebook before opening the sample. Capture the request time, ticket, branch, commit, author, reviewer, test command, CI result, environment, approval, deployment, rollback note, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "body": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by change type, risk class, repository, reviewer, time zone, and whether the item crossed a release boundary.",
          "Include clean, failed, reverted, repeated, and unresolved cases. Sampling only merged work overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "body": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast merge is not a success if the destination system lacks the approved change or the release note omits the rollback."
        ]
      },
      {
        "heading": "Measures and denominators",
        "body": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, approved-review rate, median review wait, reopen rate, rollback-note coverage, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, repositories, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "body": [
          "The record may overrepresent work handled in the tracked repository, items that reached deployment, or teams with cleaner templates. A change that moves through chat, a ticket, and a pull request can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate items at the change level. If the direction changes, call the finding fragile and publish the uncertainty rather than presenting a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and security",
        "body": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the repository, use named accounts, and set a disposal date. Do not publish secrets, customer data, private repository links, or unredacted incident details.",
          "The review process and any follow-up must remain accessible. Test documentation and review instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved security incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "body": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one test link, or test one review window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "name": "OWASP Top 10",
        "url": "https://owasp.org/www-project-top-ten/"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
      },
      {
        "name": "DORA Software Delivery Research",
        "url": "https://dora.dev/"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf"
      },
      {
        "name": "Git Documentation",
        "url": "https://git-scm.com/doc"
      }
    ],
    "keyStats": [
      "6 public sources reviewed",
      "Frozen observation window",
      "Documented review method"
    ],
    "takeaways": [
      "This study asks whether the dependency compatibility evidence can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
      "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
      "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage."
    ],
    "faqs": [
      {
        "question": "What is the unit of analysis?",
        "answer": "One change journey, not one commit or one working day."
      },
      {
        "question": "Does this measure developer productivity?",
        "answer": "No. It measures whether the record can be reconstructed and reviewed."
      }
    ],
    "related": [
      {
        "title": "Developer Offshore services",
        "href": "/services"
      },
      {
        "title": "Engineering blog",
        "href": "/blog"
      }
    ]
  },
  {
    "slug": "dvo28-incident-next-owner",
    "title": "Does an Incident Handoff Preserve the Next Owner?",
    "excerpt": "A measurement protocol for incident next owner in offshore software delivery, testing whether the receiving engineer accepts the current state and the next action with a frozen population, an evidence sample, and a dated review.",
    "published": "2026-10-28",
    "updated": "2026-10-28",
    "sections": [
      {
        "heading": "Decision the study supports",
        "body": [
          "This study asks whether the incident next owner can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The engineering owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "body": [
          "The primary question is whether the incident next owner preserves enough evidence for a second reviewer to reconstruct the request, the change, the test, the approval, and the next commitment. The unit is one change journey, not one commit and not one working day.",
          "The population is every eligible item in a frozen observation window, including merged, rejected, reverted, reopened, abandoned, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "body": [
          "The cited public sources frame secure development, configuration control, operational reliability, vulnerability management, or review practice. They help define what a reliable process should preserve. They do not provide a measured result for any particular engineering team.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or organization type, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "body": [
          "Create a dated codebook before opening the sample. Capture the request time, ticket, branch, commit, author, reviewer, test command, CI result, environment, approval, deployment, rollback note, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "body": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by change type, risk class, repository, reviewer, time zone, and whether the item crossed a release boundary.",
          "Include clean, failed, reverted, repeated, and unresolved cases. Sampling only merged work overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "body": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast merge is not a success if the destination system lacks the approved change or the release note omits the rollback."
        ]
      },
      {
        "heading": "Measures and denominators",
        "body": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, approved-review rate, median review wait, reopen rate, rollback-note coverage, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, repositories, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "body": [
          "The record may overrepresent work handled in the tracked repository, items that reached deployment, or teams with cleaner templates. A change that moves through chat, a ticket, and a pull request can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate items at the change level. If the direction changes, call the finding fragile and publish the uncertainty rather than presenting a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and security",
        "body": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the repository, use named accounts, and set a disposal date. Do not publish secrets, customer data, private repository links, or unredacted incident details.",
          "The review process and any follow-up must remain accessible. Test documentation and review instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved security incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "body": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one test link, or test one review window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "name": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world"
      },
      {
        "name": "DORA Software Delivery Research",
        "url": "https://dora.dev/"
      },
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf"
      }
    ],
    "keyStats": [
      "6 public sources reviewed",
      "Frozen observation window",
      "Documented review method"
    ],
    "takeaways": [
      "This study asks whether the incident next owner can be reconstructed from the engineering record without relying on memory or a private chat. It is designed for an engineering leader deciding how to staff, route, and review offshore work, not for ranking individual developers.",
      "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what changed, what was tested, who approved it, and how it could be reversed.",
      "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including release load and reviewer coverage."
    ],
    "faqs": [
      {
        "question": "What is the unit of analysis?",
        "answer": "One change journey, not one commit or one working day."
      },
      {
        "question": "Does this measure developer productivity?",
        "answer": "No. It measures whether the record can be reconstructed and reviewed."
      }
    ],
    "related": [
      {
        "title": "Developer Offshore services",
        "href": "/services"
      },
      {
        "title": "Engineering blog",
        "href": "/blog"
      }
    ]
  }
];
