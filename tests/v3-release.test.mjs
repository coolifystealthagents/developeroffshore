import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

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
  assert.match(form, /window\.location\.assign\("\/thanks-whats-next"\)/);
  assert.doesNotMatch(form, /tracker[\s\S]{0,180}window\.location\.assign/);
  assert.match(form, /role="status"|aria-live/);
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
  assert.match(booking, /Pause reviews/);
});

test('all service records support a substantial operational template', () => {
  assert.equal((serviceData.match(/slug: '/g) || []).length >= 10, true);
  for (const marker of ['outcomes:', 'audience:', 'inputs:', 'boundaries:', 'faqs:']) assert.match(serviceData, new RegExp(marker));
  for (const heading of ['Who this service is for','Outcomes and deliverables','Responsibilities and tasks','Quality controls','Your first week','Questions teams ask','Proof boundaries','Related services']) assert.match(services, new RegExp(heading));
  assert.match(services, /articleHero/);
  assert.doesNotMatch(services, /href="\/contact"/);
});

test('blog and research details provide generated anchored TOCs and populated sticky sidebars', () => {
  for (const source of [blog, research]) {
    assert.match(source, /article-layout/);
    assert.match(source, /article-sidebar/);
    assert.match(source, /Table of contents/);
    assert.match(source, /id=\{/);
    assert.match(source, /href=\{`#/);
    assert.match(source, /Related|Plan your|Contact Us/);
  }
});

test('conversion redirects, sitemap, canonical metadata, and security policy are explicit', () => {
  assert.match(config, /source: "\/contact"[\s\S]*destination: "\/contact-us"[\s\S]*permanent: true/);
  assert.match(config, /source: "\/thank-you"[\s\S]*destination: "\/thanks-whats-next"[\s\S]*permanent: true/);
  assert.match(config, /Permissions-Policy/);
  assert.match(config, /Content-Security-Policy/);
  assert.match(sitemap, /path: '\/contact-us'/);
  assert.doesNotMatch(sitemap, /path: '\/contact'/);
  assert.doesNotMatch(sitemap, /path: '\/thank-you'/);
  assert.ok(existsSync(new URL('../app/thanks-whats-next/page.tsx', import.meta.url)));
});

test('commercial V3 source avoids forbidden punctuation and decorative numbering', () => {
  const commercial = [components, contact, services, read('app/services/page.tsx'), read('app/thanks-whats-next/page.tsx')].join('\n');
  assert.doesNotMatch(commercial, /[—–]/);
  assert.doesNotMatch(commercial, />0[1-9]</);
  assert.doesNotMatch(commercial, /padStart\(2/);
});
