#!/usr/bin/env python3
"""Regression gate for the August 10, 2026 Research date-repair manifest."""
import atexit
import json
import re
import subprocess
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / '.paperclip/aug10-2026/research.json'
TARGET = '2026-08-10'
FROZEN_SHA = 'adb0fc552f4e1a1f870f1a9bb6d909662bb7ac9a'
INTRODUCED_SHA = '416c1c8f2f2b458edc7abca52a43619ff9898330'
REPAIR_BASE_SHA = '31fcace8d04f19cf4e54a40916818c16969d9d1a'
EXPECTED_SLUGS = [
    'offshore-developer-change-approval-research-2026-08-10-run2',
    'offshore-developer-open-source-governance-research-2026-08-10-run2',
    'offshore-developer-threat-modeling-research-2026-08-10-run2',
    'offshore-developer-automated-test-evidence-research-2026-08-10-run2',
    'offshore-developer-configuration-drift-research-2026-08-10-run2',
    'offshore-developer-queue-reliability-research-2026-08-10-run2',
    'offshore-developer-schema-change-research-2026-08-10-run2',
    'offshore-developer-frontend-component-research-2026-08-10-run2',
    'offshore-developer-error-budget-research-2026-08-10-run2',
    'offshore-developer-vendor-risk-research-2026-08-10-run2',
    'offshore-developer-release-rollback-research-2026-08-10-run2',
    'offshore-developer-technical-onboarding-research-2026-08-10-run2',
    'offshore-developer-review-capacity-research-2026-08-10-run2',
]

def tuple_line(source: str, slug: str) -> str:
    match = re.search(r"^\s*\['" + re.escape(slug) + r"'.*\],\s*$", source, re.MULTILINE)
    assert match, f'{slug} tuple is absent'
    return match.group(0).strip()

def git(*args: str) -> str:
    return subprocess.check_output(['git', *args], cwd=ROOT, text=True)

def git_file(commit: str, path: str) -> str:
    result = subprocess.run(['git', 'show', f'{commit}:{path}'], cwd=ROOT, text=True, capture_output=True)
    return result.stdout if result.returncode == 0 else ''

def stop_server(process: subprocess.Popen[str]) -> None:
    if process.poll() is None:
        process.terminate()
        process.wait(timeout=10)

def start_production_server() -> tuple[subprocess.Popen[str], str]:
    port = '31999'
    process = subprocess.Popen(['npm', 'run', 'start', '--', '-p', port], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, text=True)
    base = f'http://127.0.0.1:{port}'
    for _ in range(40):
        try:
            urllib.request.urlopen(base + '/research', timeout=1).read()
            atexit.register(stop_server, process)
            return process, base
        except Exception:
            time.sleep(0.25)
    process.kill()
    raise RuntimeError('production server did not start')

def main() -> None:
    data = json.loads(MANIFEST.read_text(encoding='utf-8'))
    entries = data['entries']
    assert data['schemaVersion'] == 1 and data['contract'] == 'sites3-aug10-public-date-v6'
    assert data['family'] == 'research' and data['domain'] == 'developeroffshore.com'
    assert len(entries) == 13 and len(entries) >= data['minimum'] >= 10
    assert len({entry['slug'] for entry in entries}) == len(entries)
    assert [entry['slug'] for entry in entries] == EXPECTED_SLUGS
    route_source = (ROOT / 'app/research/[slug]/page.tsx').read_text(encoding='utf-8')
    index_source = (ROOT / 'app/research/page.tsx').read_text(encoding='utf-8')
    sitemap = (ROOT / '.next/server/app/sitemap.xml.body').read_text(encoding='utf-8') if (ROOT / '.next/server/app/sitemap.xml.body').exists() else ''
    server = None
    base = ''
    if not sitemap or not any((ROOT / '.next/server/app/research' / entry['slug'] / 'page.html').exists() for entry in entries):
        server, base = start_production_server()
        sitemap = urllib.request.urlopen(base + '/sitemap.xml').read().decode('utf-8')
    assert 'datePublished:post.published' in route_source
    assert '<time dateTime={post.published}>{post.published}</time>' in route_source
    assert 'sort((a,b)=>b.published.localeCompare(a.published))' in index_source
    for entry in entries:
        slug = entry['slug']
        assert entry['route'] == '/research/' + slug and entry['route'].startswith('/research/')
        source_path = ROOT / entry['sourcePath']
        assert source_path.exists() and entry['sourceDateField'] == 'sourceDate'
        source = source_path.read_text(encoding='utf-8')
        assert entry['sourceDate'] == TARGET and entry['renderedDate'] == TARGET
        assert set(entry['renderedDateFields']) == {'datePublished', 'time[datetime]'}
        assert entry['provenance'] == 'original-aug10-batch'
        assert entry['introducedByCommit'] == INTRODUCED_SHA
        assert slug in source
        explicit_record = re.search(
            r"\['" + re.escape(slug) + r"'.*?'2026-08-10'\],",
            source,
        )
        assert explicit_record, f'{slug} lacks an explicit source publication date record'
        built = ROOT / '.next/server/app/research' / slug / 'page.html'
        if built.exists():
            rendered = built.read_text(encoding='utf-8')
        else:
            assert base, slug
            rendered = urllib.request.urlopen(base + entry['route']).read().decode('utf-8')
        assert TARGET in rendered and '"datePublished":"2026-08-10"' in rendered
        assert 'dateTime="2026-08-10"' in rendered and 'rel="canonical"' in rendered
        assert entry['route'] in sitemap
        frozen_source = git_file(FROZEN_SHA, entry['sourcePath'])
        frozen_record = tuple_line(frozen_source, slug)
        current_record = tuple_line(source, slug)
        assert "'2026-08-10'" not in frozen_record
        assert current_record.replace(", '2026-08-10'],", '],') == frozen_record
        introduced_source = git_file(INTRODUCED_SHA, entry['sourcePath'])
        introduced_parent = git_file(INTRODUCED_SHA + '^', entry['sourcePath'])
        assert slug not in introduced_parent
        assert tuple_line(introduced_source, slug) == frozen_record
    current_source = (ROOT / 'app/fleet-data.ts').read_text(encoding='utf-8')
    for slug in EXPECTED_SLUGS:
        current_source, removed = re.subn(
            r"^\s*\['" + re.escape(slug) + r"'.*\],\n?",
            '', current_source, count=1, flags=re.MULTILINE,
        )
        assert removed == 1
    assert current_source == git_file(REPAIR_BASE_SHA, 'app/fleet-data.ts')
    dates = [entry['sourceDate'] for entry in entries]
    assert all(dates[i] >= dates[i + 1] for i in range(len(dates) - 1))
    if server:
        stop_server(server)
    print(f'PASS: {len(entries)} manifest entries, provenance, rendered date contract, sitemap, and index gate')

if __name__ == '__main__':
    main()
