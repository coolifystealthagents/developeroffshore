#!/usr/bin/env python3
"""Regression gate for the August 10, 2026 Research date-repair manifest."""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / '.paperclip/aug10-2026/research.json'
TARGET = '2026-08-10'

def git(*args: str) -> str:
    return subprocess.check_output(['git', *args], cwd=ROOT, text=True)

def git_file(commit: str, path: str) -> str:
    result = subprocess.run(['git', 'show', f'{commit}:{path}'], cwd=ROOT, text=True, capture_output=True)
    return result.stdout if result.returncode == 0 else ''

def main() -> None:
    data = json.loads(MANIFEST.read_text(encoding='utf-8'))
    entries = data['entries']
    assert data['schemaVersion'] == 1 and data['contract'] == 'sites3-aug10-public-date-v6'
    assert data['family'] == 'research' and data['domain'] == 'developeroffshore.com'
    assert len(entries) >= data['minimum'] >= 10
    assert len({entry['slug'] for entry in entries}) == len(entries)
    route_source = (ROOT / 'app/research/[slug]/page.tsx').read_text(encoding='utf-8')
    index_source = (ROOT / 'app/research/page.tsx').read_text(encoding='utf-8')
    sitemap = (ROOT / '.next/server/app/sitemap.xml.body').read_text(encoding='utf-8') if (ROOT / '.next/server/app/sitemap.xml.body').exists() else ''
    assert 'datePublished:post.published' in route_source
    assert '<time dateTime={post.published}>{post.published}</time>' in route_source
    assert 'sort((a,b)=>b.published.localeCompare(a.published))' in index_source
    for entry in entries:
        slug = entry['slug']
        assert entry['route'] == '/research/' + slug and entry['route'].startswith('/research/')
        source_path = ROOT / entry['sourcePath']
        assert source_path.exists() and entry['sourceDateField'] == 'published'
        source = source_path.read_text(encoding='utf-8')
        assert entry['sourceDate'] == TARGET and entry['renderedDate'] == TARGET
        assert set(entry['renderedDateFields']) == {'datePublished', 'time[datetime]'}
        assert "slug: '" + slug + "'" in source
        explicit_record = re.search(r"slug:\s*'" + re.escape(slug) + r"'.*?published:\s*'2026-08-10'", source)
        assert explicit_record, f'{slug} lacks an explicit source publication date record'
        built = ROOT / '.next/server/app/research' / slug / 'page.html'
        if not built.exists():
            built = ROOT / '.next/server/app/research' / (slug + '.html')
        assert built.exists(), slug
        rendered = built.read_text(encoding='utf-8')
        assert TARGET in rendered and '"datePublished":"2026-08-10"' in rendered
        assert 'dateTime="2026-08-10"' in rendered and 'rel="canonical"' in rendered
        assert entry['route'] in sitemap
        parent_source = git_file(entry['introducedByCommit'] + '^', entry['sourcePath'])
        diff = git('diff', entry['introducedByCommit'] + '^', entry['introducedByCommit'], '--', entry['sourcePath'])
        assert slug not in parent_source and slug in diff
    dates = [entry['sourceDate'] for entry in entries]
    assert all(dates[i] >= dates[i + 1] for i in range(len(dates) - 1))
    print(f'PASS: {len(entries)} manifest entries, provenance, rendered date contract, sitemap, and index gate')

if __name__ == '__main__':
    main()
