import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/fleet-data.ts', import.meta.url), 'utf8');
const slug = 'offshore-developer-accessibility-defect-research-2026-08-17';
const start = source.indexOf(`post.slug === '${slug}'`);
const end = source.indexOf(' : post);', start);
const record = source.slice(start, end === -1 ? source.length : end);

test('accessibility-defect research has one React handoff with a clear approval boundary', () => {
  assert.notEqual(start, -1, 'target research record must exist');
  assert.match(record, /updated: '2026-09-26'/);
  assert.match(record, /heading: 'Prepare a frontend accessibility brief'/);
  assert.match(record, /label: 'Plan React frontend development', href: '\/services\/react-frontend-development'/);
  assert.match(record, /your accessibility owner sets release priority and exceptions\./);
  assert.match(record, /anchorId: 'frontend-accessibility-brief'/);
  assert.doesNotMatch(record, /href: '\/services\/devops-release-support'/);
});
