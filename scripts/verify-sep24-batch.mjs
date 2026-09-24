import fs from 'node:fs';

const source = fs.readFileSync('app/sep24-blog-batch.ts', 'utf8');
const dataSource = fs.readFileSync('app/data.ts', 'utf8');
const routeSource = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const sitemapSource = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const priorSources = fs.readdirSync('app').filter((name) => /blog-batch\.ts$/.test(name) && name !== 'sep24-blog-batch.ts').map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n');
const slugs = [...source.matchAll(/slug:'([^']+)'/g)].map((match) => match[1]);
const titles = [...source.matchAll(/title:'([^']+)'/g)].map((match) => match[1]);
const topicRecords = source.match(/^  \{slug:/gm) ?? [];

const failures = [];
if (topicRecords.length !== 12) failures.push(`expected 12 topics, found ${topicRecords.length}`);
if (new Set(slugs).size !== 12) failures.push('batch slugs are not unique');
if (new Set(titles).size !== 12) failures.push('batch titles are not unique');
for (const slug of slugs) {
  if (priorSources.includes(`slug:'${slug}'`) || priorSources.includes(`slug: '${slug}'`)) failures.push(`prior inventory contains ${slug}`);
  const htmlPath = `.next/server/app/blog/${slug}.html`;
  if (!fs.existsSync(htmlPath)) failures.push(`missing prerendered route ${slug}`);
  else {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const checks = [
      ['canonical', `https://developeroffshore.com/blog/${slug}`],
      ['date', '2026-09-24'],
      ['schema', 'BlogPosting'],
      ['revision', `daily-blog-2026-09-24-${slug}`],
    ];
    for (const [label, needle] of checks) if (!html.includes(needle)) failures.push(`${slug}: missing ${label}`);
  }
}
if (!dataSource.includes('...september24BlogBatch')) failures.push('batch is not registered first in blogPosts');
if (!routeSource.includes('datePublished') || !routeSource.includes('alternates: { canonical: url }')) failures.push('article metadata contract missing');
if (!sitemapSource.includes('...blogPosts.map')) failures.push('sitemap does not enumerate blogPosts');
if (!source.includes("makeDailyBlogPost(topic, index, '2026-09-24')")) failures.push('publication date is not fixed to this run date');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`PASS: 12 new Blog articles; unique inventory; prerender, canonical, datePublished, schema, revision, and sitemap wiring verified.`);
