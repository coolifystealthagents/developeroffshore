import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

test('ResearchArticle uses the on-site Organization for both author and publisher', () => {
  assert.match(source, /const organization=\{"@type":"Organization",name:site\.brand,url:`https:\/\/\$\{site\.domain\.toLowerCase\(\)\}`\}/);
  assert.match(source, /author:organization,publisher:organization/);
  assert.doesNotMatch(source, /author:\{"@type":"Organization",name:site\.brand\},citation/);
});
