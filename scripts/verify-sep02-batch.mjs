import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const base = process.env.VERIFY_BASE_URL ?? 'http://127.0.0.1:3017';
const expected = { blog: 12, research: 5 };
const manifests = {};

for (const kind of Object.keys(expected)) {
  const source = await readFile(new URL(`../app/sep02-${kind}-batch.ts`, import.meta.url), 'utf8');
  const entries = [...source.matchAll(/slug: '([^']+)', title: '([^']+)'/g)].map(([, slug, title]) => ({ slug, title }));
  if (entries.length !== expected[kind]) throw new Error(`${kind}: expected ${expected[kind]} entries, found ${entries.length}`);
  if (!source.includes(kind === 'blog' ? "datePublished: '2026-09-02'" : "published: '2026-09-02'")) throw new Error(`${kind}: batch date missing`);
  manifests[kind] = entries;
}

const all = Object.entries(manifests).flatMap(([kind, entries]) => entries.map((entry) => ({ kind, ...entry, path: `/${kind}/${entry.slug}` })));
if (new Set(all.map(({ slug }) => slug)).size !== all.length) throw new Error('Duplicate slug in September 2 manifest');
if (new Set(all.map(({ title }) => title)).size !== all.length) throw new Error('Duplicate title in September 2 manifest');

const [blogIndex, researchIndex, sitemap] = await Promise.all(['/blog', '/research', '/sitemap.xml'].map(async (path) => {
  const response = await fetch(base + path);
  if (response.status !== 200) throw new Error(`${path}: HTTP ${response.status}`);
  return response.text();
}));

const hashes = new Set();
for (const article of all) {
  const response = await fetch(base + article.path, { redirect: 'manual' });
  if (response.status !== 200) throw new Error(`${article.path}: HTTP ${response.status}`);
  const html = await response.text();
  const canonical = `https://developeroffshore.com${article.path}`;
  if (!html.includes(`rel="canonical" href="${canonical}"`)) throw new Error(`${article.path}: missing self-canonical`);
  if (!html.includes('September 2, 2026')) throw new Error(`${article.path}: visible date missing`);
  if (!html.includes('"datePublished":"2026-09-02"')) throw new Error(`${article.path}: structured datePublished missing`);
  const index = article.kind === 'blog' ? blogIndex : researchIndex;
  if (!index.includes(`href="${article.path}"`)) throw new Error(`${article.path}: absent from ${article.kind} index`);
  if (!sitemap.includes(`<loc>${canonical}</loc><lastmod>2026-09-02</lastmod>`)) throw new Error(`${article.path}: absent or misdated in sitemap`);
  const body = html.match(/<article[\s\S]*?<\/article>/)?.[0] ?? '';
  const hash = createHash('sha256').update(body).digest('hex');
  if (hashes.has(hash)) throw new Error(`${article.path}: duplicate rendered article hash`);
  hashes.add(hash);
}

console.log(JSON.stringify({ verified: all.length, counts: expected, uniqueRenderedHashes: hashes.size, manifest: manifests }, null, 2));
