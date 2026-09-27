import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/fleet-data.ts', import.meta.url), 'utf8');
const slug = 'offshore-developer-api-error-taxonomy-research-2026-08-17';
const start = source.indexOf(`post.slug === '${slug}'`);
const end = source.indexOf(' : post);', start);
const record = source.slice(start, end === -1 ? source.length : end);

test('API error-taxonomy research has one Node.js handoff with a clear API-owner boundary', () => {
  assert.notEqual(start, -1, 'target research record must exist');
  assert.match(record, /updated: '2026-09-27'/);
  assert.match(record, /heading: 'Prepare an API contract review brief'/);
  assert.match(record, /label: 'Plan Node\.js API development', href: '\/services\/node-js-api-development'/);
  assert.match(record, /anchorId: 'api-contract-review-brief'/);
  assert.match(record, /your API owner approves public contracts, compatibility, and exceptions\./);
  assert.doesNotMatch(record, /href: '\/services\/devops-release-support'/);
});
