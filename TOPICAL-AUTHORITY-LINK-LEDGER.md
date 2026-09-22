# Developer Offshore topical-authority link ledger

## 2026-09-19 daily Blog publishing

- Added 12 new decision guides covering offshore developer onboarding, codebase orientation, ticket readiness, overlap hours, definition of done, branch protection, environment access, reviewer capacity, escalation, knowledge transfer, delivery reporting, and offboarding.
- All guides link to a relevant service lane, `/services`, and `/contact`; their durable article-level provenance is recorded in `.paperclip/daily-content/2026-09-19/blog.json`.
- Source content commit: `95a1a120ae3f444f5035c4c07c2a0a9bb6aff2f1`; TypeScript and the clean production build passed with 12 generated routes.
- Deployed commit `984cea2fac8206669971d5af6f5f7907db04bf33` through Coolify3 deployment `rr4wgehwx5w9ywrqhlrk62ak`. All 12 public URLs passed HTTP, unique content, canonical, publication date, structured-data, asset, and sitemap checks at `2026-09-19T01:09:41Z`.

Last audited: 2026-09-13

## Daily Blog Publishing — 2026-09-18

- Twelve new decision-focused guides were added in content commit `df0ba16b9ba115c8f3babd2ac78ea5a1c3564a25`; none reuses an existing slug.
- Pillars strengthened: QA automation (3), DevOps/release support (4), legacy maintenance (2), Node.js API development (1), React review workflow (1), and Next.js technical governance (1).
- Each record links to the closest service lane, `/services`, and `/contact`, and cites one topic-specific authority plus GitHub review guidance and NIST SSDF.
- The durable article-level family, topic, slug, sources, content hash, publication date, and live URL ledger is `.paperclip/daily-content/2026-09-18/blog.json`.

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
| 1 | `/blog/offshore-developer-test-failure-triage-2026-08-17` | `/services/qa-automation-engineering` | A reader sorting a code, runner, or flaky-test failure needs to know whether a QA lane can own repeatable evidence and handoff. | Delivered: the route-local related guide uses the specific service. Do not add another CTA. |
| 2 | `/blog/offshore-developer-small-change-release-2026-08-17` | `/services/devops-release-support` | The article asks for a release owner, recovery evidence, and a rollback step, which matches release-support scope. | Delivered locally on 2026-09-13: the route-owned guide now names DevOps Release Support. Do not add another CTA. |
| 3 | `/blog/offshore-developer-code-review-evidence-2026-08-17` | `/services/qa-automation-engineering` | The guide centers on repeatable checks and inspected proof rather than general staffing discovery. | Delivered locally by `6b3f7e9749f9c945b3338921eed48fcc59957e53`: the built route has the named service four times in route-local `<main>` because the reusable banners and related guide intentionally reuse the record. Public verification remains stale as recorded below. Do not add another CTA. |
| 4 | `/research/offshore-developer-review-latency-research-2026-08-17` | `/services/devops-release-support` | The research asks teams to protect review capacity and establish escalation, which can lead to a scoped release-support conversation. | Delivered locally by `1087f586f0b708dbead0e0360353a67a2a5f5aad`: one route-local, anchored release-support handoff preserves platform-owner approval for release scope, production changes, and exceptions. Public verification remains stale as recorded below. Do not add another CTA. |
| 5 | `/research/offshore-developer-accessibility-defect-research-2026-08-17` | `/services/react-frontend-development` | The report deals with keyboard and assistive-technology defects in frontend journeys. | Verified absent in the current production artifact: route-local `<main>` has zero `/services/react-frontend-development` links. |
| 6 | `/research/offshore-developer-api-error-taxonomy-research-2026-08-17` | `/services/node-js-api-development` | The report covers stable API errors, negative cases, and compatibility. | Verified absent in the current production artifact: route-local `<main>` has zero `/services/node-js-api-development` links. |

## Next bounded release

The review-latency handoff is delivered locally and must not be duplicated. The next verified-absent research candidate is `/research/offshore-developer-accessibility-defect-research-2026-08-17` to `/services/react-frontend-development`; scope it separately after a clean baseline and retain client-side approval for production and accessibility-risk decisions.

## Release status — 2026-09-13

- Rendered source: `40f633272b661e2994364fc594f6b192838f6a29` passed the focused handoff test, TypeScript check, production build, and local artifact proof. The built route has the DevOps Release Support link three times in route-local `<main>`, current Open Graph and BlogPosting modified dates, and sitemap `<lastmod>` `2026-09-13`.
- Preserve rendered-source commit `40f633272b661e2994364fc594f6b192838f6a29`. Cache-busted apex and `www` pages still serve the former generic `/services` handoff and the `2026-08-17` sitemap record. No repository-approved deployment target or workflow was configured, so this is `deployment_pending_public_verification / public_stale`, not a published rollout.

## Release status — 2026-09-15

- Rendered source: `6b3f7e9749f9c945b3338921eed48fcc59957e53` passed TypeScript, production build, and local artifact proof. The generated route has the QA Automation link in its route-owned guide placements, `datePublished` `2026-08-17`, `dateModified` `2026-09-15`, and sitemap `<lastmod>` `2026-09-15`.
- Preserve rendered-source commit `6b3f7e9749f9c945b3338921eed48fcc59957e53`. Cache-busted apex and `www` pages returned the expected H1 and canonical but omitted the new `Plan QA automation work` marker and retained `article:modified_time` `2026-08-17`; the public sitemap still lists `2026-08-17`. No repository-approved deployment target or workflow is configured, so this is `deployment_pending_public_verification / public_stale`, not a published rollout.

## Release status — 2026-09-22

- Rendered source: `1087f586f0b708dbead0e0360353a67a2a5f5aad` passed `git diff --check`, TypeScript linting, the production build, and generated-artifact proof. The local route `<main>` has one `release-support-brief` target with one `/services/devops-release-support` link, the owner-approval boundary, `article:modified_time` and `ResearchArticle.dateModified` `2026-09-22`, and sitemap `<lastmod>` `2026-09-22`.
- Preserve rendered-source commit `1087f586f0b708dbead0e0360353a67a2a5f5aad`. Cache-busted apex and `www` routes each returned HTTP 200 with the expected H1 and apex canonical but omitted the `Plan DevOps release support` marker and `2026-09-22` modified date; each sitemap returned XML but retained an older record. No repository-approved application UUID, deployment workflow, or local deployment configuration was found, so no trigger was guessed. This is `deployment_pending_public_verification / public_stale`, not a published rollout.
