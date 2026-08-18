# Developer Offshore topical-authority link ledger

Last audited: 2026-08-18

## Scope and source of truth

- Service routes come only from `app/fleet-data.ts` `fleetServices`. The current generator produces ten `/services/[slug]` routes.
- Blog routes come from `blogPosts` in `app/data.ts`, including the August 17 records imported from `app/aug17-blog-batch.ts`.
- Research routes come from `researchPosts` in `app/fleet-data.ts`.
- The blog renderer shows `relatedLinks` as a reader-facing related-guides block. Its banners can reuse those links, so a generic `/services` link should be replaced only where the named service is a closer fit.
- Blog Article schema currently uses the on-site organization for both author and publisher. No individual author record was found, so this ledger does not propose a person byline.

## Confirmed service pillars

| Service route | Pillar intent | Supporting page that matches the intent |
| --- | --- | --- |
| `/services/next-js-application-development` | Philippines-based Next.js route and application delivery | `/blog/hire-offshore-next-js-developer-philippines` |
| `/services/react-frontend-development` | Philippines-based React interface delivery | `/blog/hire-offshore-react-developer-philippines` |
| `/services/node-js-api-development` | Philippines-based Node.js API delivery | `/blog/hire-offshore-node-js-developer-philippines` |
| `/services/shopify-theme-development` | Philippines-based Shopify theme work | `/blog/offshore-shopify-developer-philippines` |
| `/services/wordpress-engineering` | Philippines-based WordPress engineering | `/blog/offshore-wordpress-developer-philippines` |
| `/services/qa-automation-engineering` | Regression evidence and QA automation | `/blog/offshore-qa-automation-engineer-philippines` |
| `/services/devops-release-support` | Release checks, health evidence, and rollback preparation | `/blog/offshore-devops-engineer-philippines-release-support` |
| `/services/data-pipeline-development` | Bounded data-pipeline work | `/blog/offshore-developer-data-import-validation-guide-daily-2026-08-10-r2` |
| `/services/mobile-app-development` | Mobile client and API coordination | `/blog/offshore-developer-mobile-api-handoff-guide` |
| `/services/legacy-application-maintenance` | Safe, incremental work in older systems | `/blog/offshore-developer-legacy-code-orientation-2026-08-17` |

## Imminent contextual-link candidates

| Priority | Supporting route | Confirmed destination | Why this is the reader's next question | Current link state |
| --- | --- | --- | --- | --- |
| 1 | `/blog/offshore-developer-test-failure-triage-2026-08-17` | `/services/qa-automation-engineering` | A reader sorting a code, runner, or flaky-test failure needs to know whether a QA lane can own repeatable evidence and handoff. | The article currently links only to the generic `/services` index. |
| 2 | `/blog/offshore-developer-small-change-release-2026-08-17` | `/services/devops-release-support` | The article asks for a release owner, recovery evidence, and a rollback step, which matches release-support scope. | The article currently links only to the generic `/services` index. |
| 3 | `/blog/offshore-developer-code-review-evidence-2026-08-17` | `/services/qa-automation-engineering` | The guide centers on repeatable checks and inspected proof rather than general staffing discovery. | The article currently links only to the generic `/services` index. |
| 4 | `/research/offshore-developer-review-latency-research-2026-08-17` | `/services/devops-release-support` | The research asks teams to protect review capacity and establish escalation, which can lead to a scoped release-support conversation. | Research pages currently link to library and blog routes but no confirmed service route. |
| 5 | `/research/offshore-developer-accessibility-defect-research-2026-08-17` | `/services/react-frontend-development` | The report deals with keyboard and assistive-technology defects in frontend journeys. | Research pages currently link to library and blog routes but no confirmed service route. |
| 6 | `/research/offshore-developer-api-error-taxonomy-research-2026-08-17` | `/services/node-js-api-development` | The report covers stable API errors, negative cases, and compatibility. | Research pages currently link to library and blog routes but no confirmed service route. |

## Next bounded release

Update only `/blog/offshore-developer-test-failure-triage-2026-08-17`: replace its generic related-services handoff with `/services/qa-automation-engineering`, use a short route-specific label and note, refresh that article's `dateModified`, then prove the generated page, exact sitemap `<lastmod>`, and cache-busted apex and `www` output. Do not add a service link merely because a route exists; retain the generic index where the article does not support a specific buyer decision.
