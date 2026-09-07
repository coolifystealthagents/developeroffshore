import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const origin = process.env.VERIFY_ORIGIN ?? 'http://127.0.0.1:3000';
const canonicalOrigin = 'https://developeroffshore.com';
const date = '2026-09-07';

async function slugsFrom(file) {
  const source = await readFile(file, 'utf8');
  return [...source.matchAll(/^\s*\['([^']+-2026-09-07)'/gm)].map((match) => match[1]);
}

const groups = [
  { family: 'blog', expected: 12, slugs: await slugsFrom('app/sep07-blog-batch.ts') },
  { family: 'research', expected: 5, slugs: await slugsFrom('app/sep07-research-batch.ts') },
];

const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200, 'sitemap HTTP status');
const sitemap = await sitemapResponse.text();
const titles = new Set();
const bodies = new Set();

for (const group of groups) {
  assert.equal(group.slugs.length, group.expected, `${group.family} manifest count`);
  const indexResponse = await fetch(`${origin}/${group.family}`);
  assert.equal(indexResponse.status, 200, `${group.family} index HTTP status`);
  const index = await indexResponse.text();

  for (const slug of group.slugs) {
    const path = `/${group.family}/${slug}`;
    const response = await fetch(`${origin}${path}`);
    assert.equal(response.status, 200, `${path} HTTP status`);
    const html = await response.text();
    const title = html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1];
    assert(title, `${path} visible title`);
    assert(!titles.has(title), `${path} unique title`);
    titles.add(title);
    assert(!bodies.has(html), `${path} unique rendered body`);
    bodies.add(html);
    assert(html.includes(date), `${path} visible or structured date`);
    assert(html.includes(`\"datePublished\":\"${date}\"`), `${path} structured datePublished`);
    assert(html.includes(`<link rel="canonical" href="${canonicalOrigin}${path}"`), `${path} self-canonical`);
    assert(index.includes(`href="${path}"`), `${path} family-index membership`);
    assert(sitemap.includes(`<loc>${canonicalOrigin}${path}</loc>`), `${path} sitemap membership`);

    const imagePaths = [...html.matchAll(/(?:src|content)="(\/[^" ]+\.(?:png|svg|jpg|jpeg|webp)[^" ]*)"/gi)].map((match) => match[1]);
    assert(imagePaths.length > 0, `${path} rendered image present`);
    const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    assert(ogImage, `${path} OG image present`);
    for (const image of new Set([...imagePaths, ogImage])) {
      const imageUrl = image.startsWith('http') ? image.replace(canonicalOrigin, origin) : `${origin}${image}`;
      const imageResponse = await fetch(imageUrl);
      assert.equal(imageResponse.status, 200, `${path} image ${image}`);
    }
  }
}

console.log(`PASS ${groups[0].slugs.length}/12 Blog and ${groups[1].slugs.length}/5 Research routes at ${origin}`);
