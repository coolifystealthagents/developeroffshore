# Developer Offshore V3 acceptance ledger

## Release identity

- Domain: `developeroffshore.com`
- Repository: `coolifystealthagents/developeroffshore.git`
- Production branch: `main`
- Coolify application: `spv5prvi4giijp2o4bq2t04o`
- Pre-release production revision: `28b0afda3525f8ad682588c80dfb84ad0c58f59e`
- Implementation baseline: `98f42565406d20c843ba3757cad47268b85ace61`
- Pre-release sitemap baseline: 791 URLs
- Final candidate, deployment receipt, and post-release counts are intentionally recorded only after immutable verification.

## Design fingerprint

The V3 direction is an **editorial managed-engineering system**: deep navy structure, warm ivory paper surfaces, restrained coral actions, subtle grid rhythm, serif display headings, and evidence-forward cards. It avoids the recent portfolio fingerprints that use neon-lime developer blocks, purple global-map motifs, or generic blue SaaS gradients. Motion is limited to a pausable review rail and is disabled for reduced-motion users. The design uses local engineering illustrations and approved Stealth Agents assets rather than unrelated stock photography.

## Provenance

- Parent brand: Stealth Agents (`https://stealthagents.com/`).
- Review dataset: `app/review-provenance.json`, 10 distinct records captured from the official first-party Stealth Agents site.
- Parent assets: `public/images/stealth-agents-logo-black.png` and `public/images/stealth-agents-team.webp`.
- Parent attribution is rendered in shared header/footer chrome and in the contact-page proof section.
- No review count, performance promise, award, or guaranteed outcome is introduced by V3.

## Clause-level implementation ledger

| ID | Requirement | Implementation evidence | Candidate verification | Source status | Live status |
|---|---|---|---|---|---|
| ID-01 | Bind domain to exact repository, branch, application, and deployed baseline | Release identity above | Compare Git/Coolify/live revision | PASS | NOT YET VERIFIED |
| ID-02 | Preserve unpublished work and build from current remote `main` | Candidate ancestry begins at `98f4256` | `git merge-base`, remote drift guard | PASS | NOT YET VERIFIED |
| IA-01 | Keep the whole public route corpus in scope | Shared route templates, data generators, sitemap route | Exact candidate crawl against generated sitemap | PASS | NOT YET VERIFIED |
| IA-02 | Preserve useful existing public routes | No content-route deletion; compatibility redirects only | Crawl status and redirect map | PASS | NOT YET VERIFIED |
| IA-03 | Use `/contact-us` as the single first conversion step | Shared CTAs, homepage, services, articles, contact redirect | Source scan plus rendered-link crawl | PASS | NOT YET VERIFIED |
| IA-04 | Redirect legacy `/contact` safely | `next.config.mjs`, `app/contact/page.tsx` | HTTP redirect assertion | PASS | NOT YET VERIFIED |
| IA-05 | Use `/thanks-whats-next` only after delivery | Form success route and noindex page | Harmless rejection probe and browser flow | PASS | NOT YET VERIFIED |
| IA-06 | Redirect legacy `/thank-you` safely | `next.config.mjs` | HTTP redirect assertion | PASS | NOT YET VERIFIED |
| LEAD-01 | Analytics must never count as lead acceptance | `StandardContactForm.tsx` requires HTTP success and `accepted === true` | Unit/source contract and rejection probe | PASS | NOT YET VERIFIED |
| LEAD-02 | One authoritative client submit owner | Submit interception removed from `acr-client.tsx` | Regression test scans for competing emitter | PASS | NOT YET VERIFIED |
| LEAD-03 | Tracking may run only after confirmed delivery | Tracker invocation follows acceptance check and is isolated from navigation | Source-order test and browser instrumentation | PASS | NOT YET VERIFIED |
| LEAD-04 | Failed/malformed delivery stays on the form | Accessible error state and no success navigation | API rejection and malformed-response tests | PASS | NOT YET VERIFIED |
| LEAD-05 | Server confirms only primary or durable fallback acceptance | `app/api/contact/route.ts` acceptance contract | Harmless endpoint rejection probes; configuration check | PASS | NOT YET VERIFIED |
| LEAD-06 | Preserve approved contact field schema and hooks | Existing form fields and ACR hook retained | Rendered form inventory | PASS | NOT YET VERIFIED |
| CONV-01 | Provide a clear delivery-confirmed second step | `app/thanks-whats-next/page.tsx` | Render and copy check | PASS | NOT YET VERIFIED |
| CONV-02 | Offer accessible direct scheduler fallback before embed | Same OnceHub destination link precedes iframe | DOM-order and href/src equality check | PASS | NOT YET VERIFIED |
| BRAND-01 | Exact sitewide parent attribution | Shared `ParentMark` in header/footer | Every-page rendered chrome check | PASS | NOT YET VERIFIED |
| BRAND-02 | Use official local parent assets | Approved PNG/WebP files and explicit dimensions | Asset response/hash checks | PASS | NOT YET VERIFIED |
| REV-01 | Use 10 distinct approved reviews | Provenance JSON and `TestimonialsRail` | Count and unique-name regression | PASS | NOT YET VERIFIED |
| REV-02 | Never simulate review volume by presenting duplicates as new records | One 10-record semantic group; visual loop copy is `aria-hidden` | DOM/accessibility inspection | PASS | NOT YET VERIFIED |
| REV-03 | Review motion is pausable and reduced-motion safe | Pause control, hover/focus pause, reduced-motion CSS | Browser interaction and media emulation | PASS | NOT YET VERIFIED |
| SVC-01 | All 10 services have service-specific audience and inputs | `fleetServices` | Data-shape and rendered sampling | PASS | NOT YET VERIFIED |
| SVC-02 | All 10 services have outcomes, tasks, controls, and first-week plan | `fleetServices`, shared service template | All-service route checks | PASS | NOT YET VERIFIED |
| SVC-03 | All 10 services disclose boundaries and answer FAQs | `boundaries` and `faqs` per record | All-service DOM checks | PASS | NOT YET VERIFIED |
| SVC-04 | Provide related services and canonical CTA | Shared service template | Link crawl | PASS | NOT YET VERIFIED |
| ART-01 | Blog details have semantic anchored TOC | `app/article-toc.tsx`, blog detail template | Representative and generated-route checks | PASS | NOT YET VERIFIED |
| ART-02 | Research details have semantic anchored TOC | Research detail template | Representative and generated-route checks | PASS | NOT YET VERIFIED |
| ART-03 | Articles have useful sticky desktop sidebar and mobile fallback | Shared article classes in `globals.css` | 1440/768/390 browser matrix | PASS | NOT YET VERIFIED |
| COPY-01 | Remove decorative zero-padded numbering | Service/home templates | Source scan and rendered check | PASS | NOT YET VERIFIED |
| COPY-02 | Remove forbidden en/em dash punctuation from commercial V3 surfaces | Updated public templates/content | Repository and rendered-text scan | PASS | NOT YET VERIFIED |
| COPY-03 | Avoid unsupported claims and guarantees | Service boundaries and evidence-led copy | Independent claim-safety review | PASS | NOT YET VERIFIED |
| A11Y-01 | One H1 and logical section hierarchy | Shared route templates | Automated and manual heading audit | PASS | NOT YET VERIFIED |
| A11Y-02 | Working skip link on every shared route family | Shared Header plus `main-content` targets | Keyboard browser check | PASS | NOT YET VERIFIED |
| A11Y-03 | Visible keyboard focus and usable touch targets | V3 focus CSS and form controls | Browser keyboard/geometry check | PASS | NOT YET VERIFIED |
| A11Y-04 | Labels, statuses, tables, and motion controls are semantic | Form, article table wrapper, review controls | Accessibility tree/manual check | PASS | NOT YET VERIFIED |
| RESP-01 | No global overflow clipping; wide data scrolls locally | Local table wrappers; no global overflow workaround | Geometry assertions at 1440/768/390 | PASS | NOT YET VERIFIED |
| RESP-02 | New service, article, contact, review, and booking systems respond | V3 media rules in `globals.css` | Route-family viewport matrix | PASS | NOT YET VERIFIED |
| IMG-01 | Images are local/approved, dimensioned, and meaningfully labeled | Shared assets and templates | Asset crawl and alt audit | PASS | NOT YET VERIFIED |
| SEO-01 | Canonicals, titles, and descriptions reflect final public routes | Route metadata and shared dynamic metadata | Every-page head audit | PASS | NOT YET VERIFIED |
| SEO-02 | Sitemap includes canonical contact and excludes redirects/success | `app/sitemap.xml/route.ts` | Parse sitemap and crawl membership | PASS | NOT YET VERIFIED |
| SEO-03 | Success route is noindex/nofollow | `/thanks-whats-next` metadata | Rendered robots check | PASS | NOT YET VERIFIED |
| SEO-04 | Structured data is safely serialized and route appropriate | `JsonLd` helper and article/service schemas | JSON parse/type audit | PASS | NOT YET VERIFIED |
| SEC-01 | Preserve server input, size, origin, honeypot, and rate controls | `app/api/contact/route.ts` | Source review and harmless rejection probes | PASS | NOT YET VERIFIED |
| SEC-02 | Add production security headers without blocking required services | `next.config.mjs` | Live header check and scheduler/tracker browser check | PASS | NOT YET VERIFIED |
| SEC-03 | No credentials or secrets enter source | Diff and static scan | Pre-commit secret scan | PASS | NOT YET VERIFIED |
| HOST-01 | HTTP redirects to HTTPS | Deployment/proxy configuration | Live `curl` redirect chain | NOT YET VERIFIED | NOT YET VERIFIED |
| HOST-02 | `www` consolidates to canonical apex | Deployment/proxy configuration | Live `curl` redirect chain | NOT YET VERIFIED | NOT YET VERIFIED |
| REL-01 | Test and build one immutable candidate | Test suite and clean production build | Record commit/tree and outputs | NOT YET VERIFIED | NOT YET VERIFIED |
| REL-02 | Independently review specification, code quality, claims, and security | Disposable immutable reviewer snapshots | Reviewer receipts | NOT YET VERIFIED | NOT YET VERIFIED |
| REL-03 | Crawl all candidate sitemap URLs and internal links | Candidate production server | Route totals and failures | NOT YET VERIFIED | NOT YET VERIFIED |
| REL-04 | Verify representative routes at required viewports | Homepage, service index/detail, article, contact, success, legal | Screenshots, DOM geometry, keyboard checks | NOT YET VERIFIED | NOT YET VERIFIED |
| REL-05 | Push and deploy the exact accepted SHA | Git remote and Coolify exact revision | Remote SHA plus deployment receipt | NOT YET VERIFIED | NOT YET VERIFIED |
| REL-06 | Re-certify production after deployment | Fresh live crawl, headers, redirects, conversion checks | Timestamped immutable report | NOT YET VERIFIED | NOT YET VERIFIED |

## External release gates

HTTP-to-HTTPS and `www`-to-apex consolidation are deployment-edge behaviors. They remain fail-closed until the live proxy response proves the redirect chain. The source implementation does not claim these gates merely because canonical metadata exists.
