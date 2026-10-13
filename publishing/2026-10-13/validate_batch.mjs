import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';

const fail = (message) => { throw new Error(message); };
const read = (file) => fs.readFileSync(file, 'utf8');
const parse = (text, pattern, label) => { const match = text.match(pattern); if (!match) fail(`cannot parse ${label}`); return JSON.parse(match[1]); };
const manifest = JSON.parse(read('publishing/2026-10-13/manifest.json'));
const blogSource = read('app/oct13-blog-batch.ts');
const researchSource = read('app/oct13-research-batch.ts');
const blogs = parse(blogSource, /export const october13BlogBatch: readonly BlogPost\[\] = ([\s\S]*?);\n$/, 'Blog batch');
const research = parse(researchSource, /export const october13ResearchBatch: readonly ResearchPost\[\] = ([\s\S]*?);\n$/, 'Research batch');
const all = [...blogs.map((item) => ({ ...item, kind: 'blog' })), ...research.map((item) => ({ ...item, kind: 'research' }))];

if (manifest.site !== 'DeveloperOffshore.com' || manifest.canonicalDomain !== 'https://developeroffshore.com') fail('site identity mismatch');
if (manifest.date !== '2026-10-13' || manifest.baseSha !== '5ebfd3cb2fc3e385d1d435d9c8415848a5fad1fb') fail('date or immutable base mismatch');
if (blogs.length !== 12 || research.length !== 5 || manifest.items.length !== 17) fail('expected exactly 12 Blog and 5 Research');
if (new Set(all.map((item) => item.slug)).size !== 17 || new Set(all.map((item) => item.title)).size !== 17) fail('duplicate slug or title');
if (all.some((item) => /\b(?:2026|oct(?:ober)?\s+13|10[-/]13)\b/i.test(item.title))) fail('date-bearing title');

const wiring = { data:read('app/data.ts'), fleet:read('app/fleet-data.ts'), thumbs:read('app/article-thumbnails.ts'), blogIndex:read('app/blog/page.tsx'), blogPages:read('app/blog/page/[page]/page.tsx'), blogDetail:read('app/blog/[slug]/page.tsx'), researchIndex:read('app/research/page.tsx'), researchDetail:read('app/research/[slug]/page.tsx'), sitemap:read('app/sitemap.xml/route.ts') };
if (!wiring.data.includes("import { october13BlogBatch } from './oct13-blog-batch'") || !wiring.data.includes('...october13BlogBatch')) fail('Blog registry missing');
if (!wiring.fleet.includes("import { october13ResearchBatch } from './oct13-research-batch'") || !wiring.fleet.includes('...october13ResearchBatch')) fail('Research registry missing');
if (!wiring.blogIndex.includes('Published {visibleDate') || !wiring.blogPages.includes('Published {visibleDate') || !wiring.blogDetail.includes('Published <time')) fail('visible Blog dates missing');
if (!wiring.researchIndex.includes('Published <time') || !wiring.researchDetail.includes('<time dateTime={post.published}')) fail('visible Research dates missing');
if (!wiring.blogDetail.includes('post.relatedLinks') || !wiring.researchDetail.includes('Related Research')) fail('family-specific related behavior missing');
if (!wiring.blogDetail.includes('article-banner') || !wiring.researchIndex.includes('research-hero-card')) fail('family-specific sidebar/panel behavior missing');
if (!wiring.sitemap.includes('blogPosts.map') || !wiring.sitemap.includes('researchPosts.map')) fail('sitemap registry routes missing');

const hashes = new Set();
const paragraphs = [];
for (const item of all) {
  const entry = manifest.items.find((value) => value.slug === item.slug && value.title === item.title && value.kind === item.kind);
  if (!entry || entry.wordCount < (item.kind === 'research' ? 3300 : 2800)) fail(`manifest or depth failed: ${item.slug} (${entry?.wordCount})`);
  if (item.kind === 'blog' && (item.datePublished !== '2026-10-13' || item.dateModified !== '2026-10-13')) fail(`Blog dates failed: ${item.slug}`);
  if (item.kind === 'research' && (item.published !== '2026-10-13' || item.updated !== '2026-10-13')) fail(`Research dates failed: ${item.slug}`);
  const escapedSlug = item.slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const collision = spawnSync('git', ['grep', '-E', `["']${escapedSlug}["']`, manifest.baseSha, '--', 'app', 'content'], { encoding:'utf8' });
  if (collision.status === 0) fail(`slug collision with immutable base: ${item.slug}`);
  if (!wiring.thumbs.includes(`'${item.slug}': '/october-13/${item.slug}.svg'`)) fail(`thumbnail routing missing: ${item.slug}`);
  if (!fs.existsSync(entry.thumbnailPath)) fail(`thumbnail missing: ${item.slug}`);
  const svg = read(entry.thumbnailPath);
  if (!svg.includes('width="1200" height="630"') || !svg.includes(`<title id="title">${item.title.replaceAll('&','&amp;')}</title>`)) fail(`thumbnail contract failed: ${item.slug}`);
  if (/October 13|2026-10-13/i.test(svg)) fail(`dated thumbnail: ${item.slug}`);
  hashes.add(crypto.createHash('sha256').update(svg).digest('hex'));
  for (const section of item.sections) for (const paragraph of section.body) paragraphs.push({ slug:item.slug, raw:paragraph });
}
if (hashes.size !== 17) fail('thumbnails are not 17 unique native files');

const allowed = new Set(['csrc.nist.gov','www.cisa.gov','owasp.org','slsa.dev','scorecard.dev','www.rfc-editor.org','www.w3.org','opentelemetry.io','www.cncf.io']);
for (const item of research) {
  if (item.sources?.length !== 10 || new Set(item.sources.map((source) => source.url)).size !== 10) fail(`Research source depth failed: ${item.slug}`);
  for (const source of item.sources) { const url = new URL(source.url); if (url.protocol !== 'https:' || !allowed.has(url.hostname)) fail(`non-authoritative source: ${source.url}`); }
  if (!item.sections.some((section) => section.body.some((paragraph) => paragraph.startsWith('Limitations.')))) fail(`Research limitations missing: ${item.slug}`);
  if (item.related.length < 3 || !item.nextAction) fail(`Research related/sidebar behavior missing: ${item.slug}`);
}

const seen = new Map();
for (const paragraph of paragraphs) {
  const normalized = paragraph.raw.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  if (normalized.split(' ').length < 25) continue;
  if (seen.has(normalized)) fail(`duplicate substantive paragraph: ${seen.get(normalized)} and ${paragraph.slug}`);
  seen.set(normalized, paragraph.slug);
}
const priorFiles = execFileSync('git',['ls-tree','-r','--name-only',manifest.baseSha,'--','app','content'],{encoding:'utf8'}).trim().split('\n').filter(Boolean);
const priorCorpus = priorFiles.map((file)=>{try{return execFileSync('git',['show',`${manifest.baseSha}:${file}`],{encoding:'utf8',maxBuffer:8*1024*1024});}catch{return '';}}).join('\n');
for (const paragraph of paragraphs) if (priorCorpus.includes(paragraph.raw)) fail(`paragraph duplicates immutable base: ${paragraph.slug}`);

console.log(JSON.stringify({status:'PASS',date:manifest.date,blog:12,research:5,minBlogWords:Math.min(...manifest.items.filter((x)=>x.kind==='blog').map((x)=>x.wordCount)),minResearchWords:Math.min(...manifest.items.filter((x)=>x.kind==='research').map((x)=>x.wordCount)),researchHttpsSources:50,uniqueExactTitleThumbnails:17,duplicateSubstantiveParagraphs:0,immutableBaseCollisions:0,visibleDates:true,separateSystems:true,registryRoutesSidebarRelatedSitemap:true},null,2));
