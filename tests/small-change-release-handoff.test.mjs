import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/aug17-blog-batch.ts', import.meta.url), 'utf8');
const slug = 'offshore-developer-small-change-release-2026-08-17';
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("\n  { slug:", start + 1);
const record = source.slice(start, end === -1 ? source.length : end);

test('small-change release guide links the release-support service and preserves owner authority', () => {
  assert.notEqual(start, -1, 'target blog record must exist');
  assert.match(record, /dateModified: '2026-09-13'/);
  assert.match(record, /label: 'Plan release support', href: '\/services\/devops-release-support'/);
  assert.match(record, /Prepare the checks and recovery proof; your release owner accepts the risk\./);
  assert.doesNotMatch(record, /label: 'Plan release support', href: '\/services'/);
});
