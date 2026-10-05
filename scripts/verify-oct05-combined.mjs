import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const base = process.env.VERIFY_BASE_URL || 'http://127.0.0.1:3000';
const expectedDate = process.env.VERIFY_PUBLICATION_DATE || '2026-10-05';
const timeoutMs = 20000;

function sourceFile(file) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  return { source, ast: ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS) };
}
function unwrap(node) {
  while (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node)) node = node.expression;
  if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression) && node.expression.name.text === 'map') node = node.expression.expression;
  return node;
}
function variableArray(file, name) {
  const { ast } = sourceFile(file);
  let value;
  ast.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (declaration.name.getText(ast) === name) value = unwrap(declaration.initializer);
    }
  });
  assert(value && ts.isArrayLiteralExpression(value), `${file}:${name} must be a literal array`);
  return { ast, elements: value.elements };
}
function prop(ast, object, name) {
  const property = object.properties.find((entry) => ts.isPropertyAssignment(entry) && entry.name.getText(ast).replace(/["']/g, '') === name);
  return property?.initializer;
}
function stringValue(node) {
  assert(node && (ts.isStringLiteralLike(node) || ts.isNoSubstitutionTemplateLiteral(node)), 'expected literal string');
  return node.text;
}
function stringArray(node) {
  assert(node && ts.isArrayLiteralExpression(node), 'expected literal array');
  return node.elements.map(stringValue);
}
function objectArray(node) {
  assert(node && ts.isArrayLiteralExpression(node), 'expected object array');
  return node.elements;
}
function decodeHtml(value) {
  return value
    .replace(/&nbsp;/g, '\u00a0').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&#x2F;/g, '/')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}
function textHtml(html) {
  return decodeHtml(html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}
function words(value) { return value.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) || []; }
function normalized(value) { return value.toLowerCase().match(/[\p{L}\p{N}]+/gu) || []; }
function shingles(value) {
  const tokens = normalized(value), result = new Set();
  for (let i = 0; i + 4 < tokens.length; i += 1) result.add(tokens.slice(i, i + 5).join(' '));
  return result;
}
function sha(value) { return crypto.createHash('sha256').update(value).digest('hex'); }
function parseBlog() {
  const file = 'app/oct05-blog-batch.ts', { ast, elements } = variableArray(file, 'october05BlogBatch');
  return elements.map((entry) => {
    const sections = objectArray(prop(ast, entry, 'sections'));
    const paragraphs = sections.flatMap((section) => stringArray(prop(ast, section, 'body')));
    const sources = objectArray(prop(ast, entry, 'sources')).map((source) => stringValue(prop(ast, source, 'url')));
    const links = objectArray(prop(ast, entry, 'relatedLinks')).map((link) => stringValue(prop(ast, link, 'href')));
    return { family: 'blog', slug: stringValue(prop(ast, entry, 'slug')), title: stringValue(prop(ast, entry, 'title')), paragraphs, sources, links };
  });
}
function parseResearch() {
  const file = 'app/oct05-research-batch.ts', { ast, elements } = variableArray(file, 'october5ResearchBatch');
  return elements.map((entry) => {
    const sections = objectArray(prop(ast, entry, 'sections'));
    const paragraphs = sections.flatMap((section) => stringArray(prop(ast, section, 'body')));
    const sources = objectArray(prop(ast, entry, 'sources')).map((source) => stringValue(prop(ast, source, 'url')));
    const links = objectArray(prop(ast, entry, 'related')).map((link) => stringValue(prop(ast, link, 'href')));
    return { family: 'research', slug: stringValue(prop(ast, entry, 'slug')), title: stringValue(prop(ast, entry, 'title')), paragraphs, sources, links };
  });
}
async function request(url) {
  const response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(timeoutMs), headers: { 'user-agent': 'DeveloperOffshore-release-validator/1.0' } });
  const bytes = new Uint8Array(await response.arrayBuffer());
  return { response, bytes, body: new TextDecoder().decode(bytes) };
}
function imageSignature(bytes, type) {
  if (type.includes('svg')) return new TextDecoder().decode(bytes.slice(0, 300)).includes('<svg');
  if (type.includes('png')) return bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
  if (type.includes('jpeg')) return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes.at(-2) === 0xff && bytes.at(-1) === 0xd9;
  if (type.includes('webp')) return new TextDecoder().decode(bytes.slice(0, 12)).startsWith('RIFF') && new TextDecoder().decode(bytes.slice(8, 12)) === 'WEBP';
  return false;
}

const articles = [...parseBlog(), ...parseResearch()];
assert.equal(articles.filter((item) => item.family === 'blog').length, 12);
assert.equal(articles.filter((item) => item.family === 'research').length, 5);
assert.equal(new Set(articles.map((item) => item.slug)).size, 17, 'cycle slugs must be unique');

const corpusFiles = fs.readdirSync(path.join(root, 'app')).filter((name) => /batch\.ts$/.test(name) && !/^oct05-/.test(name));
for (const article of articles) {
  const collisions = corpusFiles.filter((file) => fs.readFileSync(path.join(root, 'app', file), 'utf8').includes(article.slug));
  assert.deepEqual(collisions, [], `prior-corpus slug collision: ${article.slug}`);
}

const familySimilarity = {};
for (const family of ['blog', 'research']) {
  const group = articles.filter((item) => item.family === family);
  let maximum = { value: 0, pair: [] };
  const paragraphOwners = new Map();
  for (const item of group) for (const paragraph of item.paragraphs) {
    const key = normalized(paragraph).join(' '), owners = paragraphOwners.get(key) || [];
    owners.push(item.slug); paragraphOwners.set(key, owners);
  }
  assert.equal([...paragraphOwners.values()].filter((owners) => new Set(owners).size > 1).length, 0, `${family} repeated paragraph`);
  for (let i = 0; i < group.length; i += 1) for (let j = i + 1; j < group.length; j += 1) {
    const left = shingles(group[i].paragraphs.join(' ')), right = shingles(group[j].paragraphs.join(' '));
    let intersection = 0; for (const value of left) if (right.has(value)) intersection += 1;
    const score = intersection / (left.size + right.size - intersection);
    if (score > maximum.value) maximum = { value: score, pair: [group[i].slug, group[j].slug] };
  }
  assert(maximum.value < 0.5, `${family} similarity threshold`);
  familySimilarity[family] = maximum;
}

const indexBodies = { blog: (await request(`${base}/blog`)).body, research: (await request(`${base}/research`)).body };
const sitemap = (await request(`${base}/sitemap.xml`)).body;
const sourceUrls = new Set(), internalUrls = new Set(), routeEvidence = [];
for (const article of articles) {
  const route = `/${article.family}/${article.slug}`, canonical = `https://developeroffshore.com${route}`;
  const { response, body } = await request(`${base}${route}`);
  assert.equal(response.status, 200, route);
  const decoded = decodeHtml(body), visible = textHtml(body);
  assert(decoded.includes(`<h1>${article.title}</h1>`), `${route} title`);
  assert(visible.includes(new Date(`${expectedDate}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })), `${route} visible date`);
  assert(decoded.includes(`datePublished`), `${route} schema date field`);
  assert(decoded.includes(expectedDate), `${route} schema date value`);
  assert(decoded.includes(`rel="canonical" href="${canonical}"`) || decoded.includes(`href="${canonical}" rel="canonical"`), `${route} canonical`);
  assert(indexBodies[article.family].includes(`href="${route}"`), `${route} family index`);
  assert(sitemap.includes(`<loc>${canonical}</loc>`), `${route} sitemap`);
  let cursor = -1;
  for (const paragraph of article.paragraphs) {
    const rendered = decoded.indexOf(paragraph, cursor + 1);
    assert(rendered > cursor, `${route} missing/out-of-order paragraph: ${paragraph.slice(0, 70)}`);
    cursor = rendered;
  }
  const minimum = article.family === 'blog' ? 900 : 1200, wordCount = words(article.paragraphs.join(' ')).length;
  assert(wordCount >= minimum, `${route} body word count ${wordCount}`);
  const imageMatch = body.match(/<img[^>]+class="article-featured-image"[^>]+src="([^"]+)"/i);
  assert(imageMatch, `${route} image`);
  const imageUrl = new URL(imageMatch[1], base).href, image = await request(imageUrl), type = image.response.headers.get('content-type') || '';
  assert.equal(image.response.status, 200, `${route} image status`);
  assert(type.startsWith('image/'), `${route} image MIME ${type}`);
  assert(image.bytes.length > 100, `${route} image length`);
  assert(imageSignature(image.bytes, type), `${route} image signature/decode`);
  for (const url of article.sources) sourceUrls.add(url);
  for (const href of article.links) internalUrls.add(href);
  routeEvidence.push({ family: article.family, slug: article.slug, route, title: article.title, bodyWordCount: wordCount, bodyHash: sha(article.paragraphs.join('\n\n')), paragraphs: article.paragraphs.length, canonical, imageUrl: new URL(imageMatch[1], 'https://developeroffshore.com').href, imageType: type });
}
for (const href of internalUrls) {
  const result = await request(`${base}${href}`);
  assert(result.response.status < 400, `internal link ${href}: ${result.response.status}`);
}
const sourceEvidence = [];
for (const url of sourceUrls) {
  const result = await request(url);
  assert(result.response.status < 400, `source link ${url}: ${result.response.status}`);
  sourceEvidence.push({ url, status: result.response.status, finalUrl: result.response.url });
}
console.log(JSON.stringify({ verifiedAt: new Date().toISOString(), base, expectedDate, counts: { blog: 12, research: 5, total: 17 }, familySimilarity, internalLinks: [...internalUrls], sourceEvidence, routes: routeEvidence }, null, 2));
