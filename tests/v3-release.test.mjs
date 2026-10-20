import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const applicationSources = readdirSync(new URL('../app', import.meta.url), { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.(?:tsx?|json)$/.test(entry.name))
  .map((entry) => read(`app/${entry.parentPath.replace(new URL('../app', import.meta.url).pathname, '').replace(/^\//, '')}${entry.parentPath.endsWith('/') ? '' : '/'}${entry.name}`))
  .join('\n');

const components = read('app/components.tsx');
const form = read('app/contact-us/StandardContactForm.tsx');
const contact = read('app/contact-us/page.tsx');
const services = read('app/services/[slug]/page.tsx');
const serviceData = read('app/fleet-data.ts');
const blog = read('app/blog/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');
const sitemap = read('app/sitemap.xml/route.ts');
const config = read('next.config.mjs');
const booking = read('app/booking-components.tsx');
const css = read('app/globals.css');
const success = read('app/thanks-whats-next/page.tsx');
const thankYou = read('app/thank-you/page.tsx');
const scheduler = read('app/thank-you/OnceHubScheduler.tsx');
const api = read('app/api/contact/route.ts');
const acrClient = read('app/acr-client.tsx');
const articleToc = read('app/article-toc.tsx');
const internalLinkSources = [read('app/sep19-blog-batch.ts'), read('app/sep22-blog-batch.ts'), read('app/alternatives/[slug]/page.tsx')].join('\n');
const cancellation = read('app/cancellation/page.tsx');
const legacyCancellation = read('app/cancellation-policy/page.tsx');
const middleware = read('middleware.ts');

test('sitewide chrome uses the canonical conversion route and parent attribution', () => {
  assert.match(components, /position:\s*sticky|className="nav"/);
  assert.match(components, />Home<.*>Services<.*>Contact Us</s);
  assert.doesNotMatch(components, /href="\/contact"/);
  assert.ok((components.match(/Powered by StealthAgents/g) || []).length >= 2);
  assert.match(components, /stealth-agents-logo-black\.png/);
  assert.match(components, /skip-link/);
});

test('contact delivery fails closed and only confirmed API acceptance can navigate', () => {
  assert.match(form, /endpoint = "\/api\/contact"/);
  assert.match(form, /accepted/);
  assert.match(form, /window\.location\.assign\("\/thank-you"\)/);
  assert.doesNotMatch(form, /tracker[\s\S]{0,180}window\.location\.assign/);
  assert.match(form, /role="status"|aria-live/);
});

test('the contact form is the only client-side lead delivery owner', () => {
  assert.doesNotMatch(acrClient, /addEventListener\(['"]submit/);
  assert.doesNotMatch(acrClient, /fetch\(action/);
  assert.doesNotMatch(acrClient, /location\.assign/);
});

test('contact page has approved provenance-backed review and parent team architecture', () => {
  const provenance = JSON.parse(read('app/review-provenance.json'));
  assert.equal(provenance.source, 'https://stealthagents.com/');
  assert.equal(provenance.records.length, 10);
  assert.equal(new Set(provenance.records.map((review) => review.name)).size, 10);
  for (const name of ['Chad Sublet','Alex Behrens','Sarah Jacoby','Martine Cadet','Rich Cochran','George Assi','Lee Maasen','Kevin Carabajal','Lynda Sunshine West','McKay Jaeckel']) {
    assert.ok(provenance.records.some((review) => review.name === name));
  }
  assert.match(contact, /TestimonialsRail/);
  assert.match(contact, /stealth-agents-team\.webp/);
  assert.match(contact, /Official team, Bacolod/);
  assert.doesNotMatch(contact, /href=\{booking\}/);
  assert.match(booking, /review-provenance\.json/);
  assert.doesNotMatch(booking, /Pause reviews|Resume reviews|Previous|Next/);
  assert.match(css, /\.sa-testimonial-viewport:hover \.sa-testimonial-card[^{]*\{[^}]*animation-play-state:\s*paused/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test('all service records support a substantial operational template', () => {
  assert.equal((serviceData.match(/slug: '/g) || []).length >= 10, true);
  for (const marker of ['outcomes:', 'audience:', 'inputs:', 'boundaries:', 'faqs:']) assert.match(serviceData, new RegExp(marker));
  for (const heading of ['Who this service is for','Outcomes and deliverables','Responsibilities and tasks','Quality controls','Your first week','Questions teams ask','Proof boundaries','Related services']) assert.match(services, new RegExp(heading));
  assert.match(services, /articleHero/);
  assert.doesNotMatch(services, /export function articleHero/);
  assert.doesNotMatch(services, /href="\/contact"/);
});

test('blog and research details provide generated anchored TOCs and populated sticky sidebars', () => {
  for (const source of [blog, research]) {
    assert.match(source, /article-layout/);
    assert.match(source, /article-sidebar/);
    assert.match(source, /ArticleToc/);
    assert.match(source, /id=\{/);
    assert.match(source, /Related|Plan your|Contact Us/);
  }
  assert.match(articleToc, /Table of contents/);
  assert.match(articleToc, /href=\{`#\$\{item\.id\}`\}/);
});

test('conversion redirects, sitemap, canonical metadata, and security policy are explicit', () => {
  assert.match(config, /source: "\/contact"[\s\S]*destination: "\/contact-us"[\s\S]*permanent: true/);
  for (const [source, destination] of [
    ['/services/reporting-and-qa', '/services/qa-automation-engineering'],
    ['/services/operations-support', '/services/devops-release-support'],
    ['/services/admin-support', '/services/legacy-application-maintenance'],
    ['/services/offshore-software-development', '/services'],
    ['/cancellation-policy', '/cancellation'],
  ]) {
    assert.match(config, new RegExp(`source: "${source.replaceAll('/', '\\/')}"[\\s\\S]*destination: "${destination.replaceAll('/', '\\/')}"[\\s\\S]*permanent: true`));
  }
  assert.doesNotMatch(config, /source: "\/thank-you"/);
  assert.match(config, /Permissions-Policy/);
  assert.match(config, /Content-Security-Policy/);
  assert.match(sitemap, /path: '\/contact-us'/);
  assert.match(sitemap, /path: '\/about'/);
  assert.match(sitemap, /path: '\/cancellation'/);
  assert.doesNotMatch(sitemap, /path: '\/contact'/);
  assert.doesNotMatch(sitemap, /path: '\/cancellation-policy'/);
  assert.doesNotMatch(sitemap, /path: '\/thank-you'/);
  assert.ok(existsSync(new URL('../app/thanks-whats-next/page.tsx', import.meta.url)));
});

test('canonical host middleware respects Cloudflare visitor scheme and exact hosts', () => {
  assert.match(middleware, /CF-Visitor/i);
  assert.match(middleware, /x-forwarded-proto/);
  assert.match(middleware, /x-forwarded-host/);
  assert.match(middleware, /host === CANONICAL_HOST \|\| host === WWW_HOST/);
  assert.doesNotMatch(middleware, /endsWith\(CANONICAL_HOST\)/);
  assert.match(middleware, /new URL\(CANONICAL_ORIGIN\)/);
  assert.match(middleware, /destination\.pathname = request\.nextUrl\.pathname/);
  assert.match(middleware, /destination\.search = request\.nextUrl\.search/);
  assert.match(middleware, /NextResponse\.redirect\(destination, 308\)/);
});

test('commercial V3 source avoids forbidden punctuation and decorative numbering', () => {
  const commercial = [components, contact, services, read('app/services/page.tsx'), read('app/thanks-whats-next/page.tsx')].join('\n');
  assert.doesNotMatch(commercial, /[\u2014\u2013]/);
  assert.doesNotMatch(commercial, />0[1-9]</);
  assert.doesNotMatch(commercial, /padStart\(2/);
});

test('lead success route is noindex and offers the direct scheduler before the embed', () => {
  assert.match(thankYou, /robots:\s*\{\s*index:\s*false/);
  assert.match(thankYou, /Request delivered/);
  assert.ok(scheduler.indexOf('href={scheduler}') < scheduler.indexOf('<iframe'));
  assert.match(scheduler, /src=\{`\$\{scheduler\}/);
  assert.match(scheduler, /confirmationPath = '\/thanks-whats-next'/);
});

test('booking completion route is noindex and confirms the consultation', () => {
  assert.match(success, /robots:\s*\{\s*index:\s*false/);
  assert.match(success, /Consultation booked/);
  assert.match(success, /meeting is confirmed/);
});

test('API acceptance is tied to primary delivery rather than tracking', () => {
  assert.match(api, /upstream\.ok/);
  assert.match(api, /result\?\.ok === true/);
  assert.match(api, /sendLeadFallbackToMattermost/);
  assert.match(api, /if \(!accepted\) return errorResponse\(502\)/);
  assert.match(api, /accepted:\s*true/);
  assert.ok(api.search(/accepted:\s*true/) > api.indexOf('upstream.ok'));
});

test('V3 responsive and accessibility styles cover new shared systems', () => {
  for (const selector of ['skip-link', 'parent-mark', 'service-v3-hero-grid', 'service-v3-body', 'article-layout', 'article-sidebar', 'contact-v3-grid', 'booking-v3']) assert.match(css, new RegExp(`\\.${selector}`));
  assert.doesNotMatch(css, /html,body\{[^}]*overflow-x:\s*hidden/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media\(max-width:\s*900px\)/);
  assert.match(css, /\.pagination\{[^}]*flex-wrap:\s*wrap/);
  assert.match(css, /\.article-card>img\{[^}]*width:\s*100%[^}]*aspect-ratio:\s*auto/);
  assert.doesNotMatch(css, /\.article-card>img\{[^}]*width:\s*calc\(100%\s*\+\s*48px\)/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
  assert.match(css, /\.sa-testimonial-card\{display:\s*flex!important;[^}]*animation:\s*none!important/);
});

test('published internal links avoid retired service routes and legal pages consolidate canonically', () => {
  assert.doesNotMatch(internalLinkSources, /\/services\/(?:admin-support|operations-support|offshore-software-development)/);
  assert.doesNotMatch(applicationSources, /(?:href|ctaHref|path):\s*['"]\/contact['"]/);
  assert.match(cancellation, /canonical:\s*'\/cancellation'/);
  assert.match(legacyCancellation, /permanentRedirect\('\/cancellation'\)/);
});
