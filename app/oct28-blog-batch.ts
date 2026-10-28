import type { BlogPost } from './data';

export const octoberTwentyEightBlogBatch: readonly BlogPost[] = [
  {
    "slug": "dvo28-spike-delivery-date",
    "title": "Scope a Spike Before Promising a Delivery Date",
    "excerpt": "A practical Developer Offshore guide to the delivery spike, focused on separating learning work from a committed release, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-spike-delivery-date",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The delivery spike exists to make that evidence visible before the work moves.",
      "Open the delivery spike at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For separating learning work from a committed release, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The delivery spike exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the delivery spike at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the delivery spike queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the delivery spike: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the delivery spike only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For separating learning work from a committed release, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one delivery spike: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the delivery spike: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the delivery spike: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the delivery spike: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the delivery spike: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the delivery spike workflow?",
        "answer": "Open the delivery spike at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
      }
    ],
    "sources": [
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf"
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
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
      },
      {
        "name": "Git Documentation",
        "url": "https://git-scm.com/doc"
      }
    ]
  },
  {
    "slug": "dvo28-pull-request-evidence",
    "title": "Review Pull Request Evidence Without Redoing the Work",
    "excerpt": "A practical Developer Offshore guide to the pull request evidence, focused on checking the diff, tests, and rollback note at the right boundary, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-pull-request-evidence",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The pull request evidence exists to make that evidence visible before the work moves.",
      "Open the pull request evidence at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For checking the diff, tests, and rollback note at the right boundary, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The pull request evidence exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the pull request evidence at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the pull request evidence queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the pull request evidence: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the pull request evidence only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For checking the diff, tests, and rollback note at the right boundary, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one pull request evidence: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the pull request evidence: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the pull request evidence: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the pull request evidence: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the pull request evidence: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the pull request evidence workflow?",
        "answer": "Open the pull request evidence at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
      }
    ],
    "sources": [
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
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
        "name": "DORA Software Delivery Research",
        "url": "https://dora.dev/"
      },
      {
        "name": "OWASP Top 10",
        "url": "https://owasp.org/www-project-top-ten/"
      }
    ]
  },
  {
    "slug": "dvo28-secret-free-handoff",
    "title": "Keep Environment Secrets Out of Offshore Handoffs",
    "excerpt": "A practical Developer Offshore guide to the secret-free handoff, focused on sharing access instructions without sending credentials, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-secret-free-handoff",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The secret-free handoff exists to make that evidence visible before the work moves.",
      "Open the secret-free handoff at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For sharing access instructions without sending credentials, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The secret-free handoff exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the secret-free handoff at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the secret-free handoff queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the secret-free handoff: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the secret-free handoff only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For sharing access instructions without sending credentials, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one secret-free handoff: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the secret-free handoff: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the secret-free handoff: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the secret-free handoff: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the secret-free handoff: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the secret-free handoff workflow?",
        "answer": "Open the secret-free handoff at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world"
      },
      {
        "name": "OWASP Top 10",
        "url": "https://owasp.org/www-project-top-ten/"
      },
      {
        "name": "NIST SP 800-128 Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
      }
    ]
  },
  {
    "slug": "dvo28-small-deployment-rollback",
    "title": "Write a Rollback Note for a Small Deployment",
    "excerpt": "A practical Developer Offshore guide to the rollback note, focused on recording how to reverse a change before the release window, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-small-deployment-rollback",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The rollback note exists to make that evidence visible before the work moves.",
      "Open the rollback note at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For recording how to reverse a change before the release window, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The rollback note exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the rollback note at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the rollback note queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the rollback note: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the rollback note only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For recording how to reverse a change before the release window, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one rollback note: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the rollback note: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the rollback note: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the rollback note: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the rollback note: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the rollback note workflow?",
        "answer": "Open the rollback note at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
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
        "name": "Git Documentation",
        "url": "https://git-scm.com/doc"
      }
    ]
  },
  {
    "slug": "dvo28-ci-failure-triage",
    "title": "Triage a Failing CI Pipeline by Evidence",
    "excerpt": "A practical Developer Offshore guide to the failing CI pipeline, focused on separating a flaky test from an environment or code defect, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-ci-failure-triage",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The failing CI pipeline exists to make that evidence visible before the work moves.",
      "Open the failing CI pipeline at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For separating a flaky test from an environment or code defect, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The failing CI pipeline exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the failing CI pipeline at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the failing CI pipeline queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the failing CI pipeline: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the failing CI pipeline only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For separating a flaky test from an environment or code defect, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one failing CI pipeline: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the failing CI pipeline: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the failing CI pipeline: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the failing CI pipeline: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the failing CI pipeline: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the failing CI pipeline workflow?",
        "answer": "Open the failing CI pipeline at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
      }
    ],
    "sources": [
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
      },
      {
        "name": "Git Documentation",
        "url": "https://git-scm.com/doc"
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
        "name": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/"
      }
    ]
  },
  {
    "slug": "dvo28-dependency-upgrade-audit",
    "title": "Audit a Dependency Upgrade Before Merge",
    "excerpt": "A practical Developer Offshore guide to the dependency upgrade audit, focused on checking compatibility, advisories, and rollback before a version change, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-dependency-upgrade-audit",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The dependency upgrade audit exists to make that evidence visible before the work moves.",
      "Open the dependency upgrade audit at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For checking compatibility, advisories, and rollback before a version change, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The dependency upgrade audit exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the dependency upgrade audit at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the dependency upgrade audit queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the dependency upgrade audit: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the dependency upgrade audit only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For checking compatibility, advisories, and rollback before a version change, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one dependency upgrade audit: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the dependency upgrade audit: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the dependency upgrade audit: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the dependency upgrade audit: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the dependency upgrade audit: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the dependency upgrade audit workflow?",
        "answer": "Open the dependency upgrade audit at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
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
      }
    ]
  },
  {
    "slug": "dvo28-cross-time-zone-review",
    "title": "Set a Code Review Response Window Across Time Zones",
    "excerpt": "A practical Developer Offshore guide to the cross-time-zone review window, focused on making the next reviewer visible when the author signs off, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-cross-time-zone-review",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The cross-time-zone review window exists to make that evidence visible before the work moves.",
      "Open the cross-time-zone review window at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For making the next reviewer visible when the author signs off, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The cross-time-zone review window exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the cross-time-zone review window at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the cross-time-zone review window queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the cross-time-zone review window: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the cross-time-zone review window only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For making the next reviewer visible when the author signs off, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one cross-time-zone review window: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the cross-time-zone review window: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the cross-time-zone review window: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the cross-time-zone review window: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the cross-time-zone review window: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the cross-time-zone review window workflow?",
        "answer": "Open the cross-time-zone review window at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
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
      }
    ]
  },
  {
    "slug": "dvo28-incident-shift-handoff",
    "title": "Write an Incident Handoff at the End of a Shift",
    "excerpt": "A practical Developer Offshore guide to the incident shift handoff, focused on carrying the current state, evidence, and next owner into the next coverage window, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-incident-shift-handoff",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The incident shift handoff exists to make that evidence visible before the work moves.",
      "Open the incident shift handoff at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For carrying the current state, evidence, and next owner into the next coverage window, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The incident shift handoff exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the incident shift handoff at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the incident shift handoff queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the incident shift handoff: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the incident shift handoff only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For carrying the current state, evidence, and next owner into the next coverage window, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one incident shift handoff: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the incident shift handoff: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the incident shift handoff: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the incident shift handoff: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the incident shift handoff: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the incident shift handoff workflow?",
        "answer": "Open the incident shift handoff at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
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
      }
    ]
  },
  {
    "slug": "dvo28-test-data-separation",
    "title": "Keep Test Data Separate From Production Records",
    "excerpt": "A practical Developer Offshore guide to the test data boundary, focused on building realistic fixtures without copying customer records, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-test-data-separation",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The test data boundary exists to make that evidence visible before the work moves.",
      "Open the test data boundary at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For building realistic fixtures without copying customer records, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The test data boundary exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the test data boundary at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the test data boundary queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the test data boundary: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the test data boundary only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For building realistic fixtures without copying customer records, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one test data boundary: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the test data boundary: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the test data boundary: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the test data boundary: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the test data boundary: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the test data boundary workflow?",
        "answer": "Open the test data boundary at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
      }
    ],
    "sources": [
      {
        "name": "OWASP Top 10",
        "url": "https://owasp.org/www-project-top-ten/"
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf"
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
        "name": "NIST SP 800-128 Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      }
    ]
  },
  {
    "slug": "dvo28-feature-flag-retirement",
    "title": "Review Feature Flag Retirement After Rollout",
    "excerpt": "A practical Developer Offshore guide to the feature flag retirement, focused on proving the old path is gone and the new path is owned, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-feature-flag-retirement",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The feature flag retirement exists to make that evidence visible before the work moves.",
      "Open the feature flag retirement at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For proving the old path is gone and the new path is owned, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The feature flag retirement exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the feature flag retirement at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the feature flag retirement queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the feature flag retirement: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the feature flag retirement only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For proving the old path is gone and the new path is owned, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one feature flag retirement: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the feature flag retirement: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the feature flag retirement: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the feature flag retirement: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the feature flag retirement: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the feature flag retirement workflow?",
        "answer": "Open the feature flag retirement at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
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
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf"
      },
      {
        "name": "Git Documentation",
        "url": "https://git-scm.com/doc"
      }
    ]
  },
  {
    "slug": "dvo28-repository-onboarding",
    "title": "Onboard an Offshore Developer to an Existing Repository",
    "excerpt": "A practical Developer Offshore guide to the repository onboarding, focused on giving a new developer enough context to make one safe change, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-repository-onboarding",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The repository onboarding exists to make that evidence visible before the work moves.",
      "Open the repository onboarding at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For giving a new developer enough context to make one safe change, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The repository onboarding exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the repository onboarding at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the repository onboarding queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the repository onboarding: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the repository onboarding only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For giving a new developer enough context to make one safe change, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one repository onboarding: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the repository onboarding: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the repository onboarding: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the repository onboarding: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the repository onboarding: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the repository onboarding workflow?",
        "answer": "Open the repository onboarding at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
      }
    ],
    "sources": [
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
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
      },
      {
        "name": "DORA Software Delivery Research",
        "url": "https://dora.dev/"
      }
    ]
  },
  {
    "slug": "dvo28-migration-approval-boundary",
    "title": "Document a Database Migration Approval Boundary",
    "excerpt": "A practical Developer Offshore guide to the migration approval boundary, focused on separating migration preparation from the decision to change production data, with a named source, a bounded queue, and a close condition.",
    "minutes": 5,
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "revision": "daily-blog-2026-10-28-dvo28-migration-approval-boundary",
    "keyTakeaways": [
      "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The migration approval boundary exists to make that evidence visible before the work moves.",
      "Open the migration approval boundary at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
      "For separating migration preparation from the decision to change production data, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release."
    ],
    "sections": [
      {
        "heading": "Why the control matters",
        "body": [
          "An offshore development task can look complete while the next engineer still cannot tell what was verified, which branch was reviewed, or what would reverse the change. The migration approval boundary exists to make that evidence visible before the work moves.",
          "The cost is not only a bad merge. It is the review cycle that restarts because the test result was stale, the rollback note was missing, or the receiving owner never accepted the handoff. Each gap turns a small change into a coordination problem."
        ]
      },
      {
        "heading": "Start with the governing record",
        "body": [
          "Open the migration approval boundary at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it.",
          "Keep the observation separate from the engineer interpretation. When the ticket, the diff, and the test output disagree, preserve all three and label the conflict. A reviewer should see the disagreement rather than a clean narrative that hides it."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "body": [
          "The developer may prepare the change, run the agreed checks, document the risk, and route the review. the engineering owner decides whether the change enters the protected branch, production, or a client commitment. Write that boundary into the task brief before work starts.",
          "A green local test is not an approval. A pull request, a migration plan, or a rollback note still needs the named reviewer when the change affects shared code, data, access, or a release promise. The developer should stop when the evidence is missing or the scope exceeds the ticket."
        ]
      },
      {
        "heading": "Build the daily routine",
        "body": [
          "Each day, review the migration approval boundary queue, confirm the latest commit, record the blocking check, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one change with another without reading every comment.",
          "Keep review work separate from new feature work. A queue that mixes both hides the oldest review and makes throughput look better than it is. Measure the age of the oldest open review, the number waiting on CI, and the number waiting on a named decision."
        ]
      },
      {
        "heading": "Handle exceptions before they harden",
        "body": [
          "Use a small reason set for the migration approval boundary: missing test evidence, stale branch, failing dependency, environment mismatch, unclear ownership, and scope change. The code should describe the evidence problem, not the person who found it.",
          "When an exception touches production data, secrets, a client release, or a security boundary, pause the dependent action and route it. Urgency does not create approval. Record who accepted the risk, what compensating check was used, and when the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "body": [
          "Close the migration approval boundary only when the destination system shows the result. A merged pull request is not a deployed change, a passed pipeline is not a working route, and a rollback note is not proof that restoration succeeded. Check the system that owns the outcome.",
          "At the end of the day, explain the carryover instead of silently moving it. Review a sample each week and compare the ticket, the diff, the test evidence, and the release confirmation. A repeated gap usually means the template or the review gate needs repair."
        ]
      },
      {
        "heading": "What the developer prepares and what the owner decides",
        "body": [
          "For separating migration preparation from the decision to change production data, the developer makes the decision ready: the options, the diff, the evidence, the risks, and the rollback path. the engineering owner chooses whether the change is accepted and remains accountable for the release.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears under deadline pressure. Test it on one routine change, one exception, and one unresolved case before the developer works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "body": [
          "Once a week, inspect one migration approval boundary: that took longer than expected. Note the blocking check, the reviewer who waited, and the correction that followed. Finish by naming one rule change, the owner, and a date to test it.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the commit link and the review decision with the record so a second reviewer can repeat the check.",
          "Record what would reopen the migration approval boundary: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the migration approval boundary: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the migration approval boundary: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A merged request, a passed pipeline, or a completed migration should be verified in the system that owns the result.",
          "Record what would reopen the migration approval boundary: a failed check, a reverted change, a missing approval, or a changed release condition. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should the team check in the migration approval boundary workflow?",
        "answer": "Open the migration approval boundary at the repository or delivery system that owns the fact. Record the branch, commit, environment, test command, observed time, reviewer, and the ticket or decision the change supports. A chat summary may point to the record but cannot replace it."
      },
      {
        "question": "Who approves the change?",
        "answer": "The named engineering owner approves changes to shared code, production data, access, or a release promise."
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
        "name": "NIST SP 800-128 Configuration Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
      },
      {
        "name": "DORA Software Delivery Research",
        "url": "https://dora.dev/"
      },
      {
        "name": "GitHub Docs, Pull Requests",
        "url": "https://docs.github.com/en/pull-requests"
      }
    ]
  }
];
