#!/usr/bin/env python3
"""Refresh generated sections in `app/fleet-data.ts` for routine publishing.

The daily process keeps the script file as the single source of truth and updates
`researchPosts` only when source data is available.
"""
from __future__ import annotations

from pathlib import Path
import json
import re
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
FLEET_PATH = ROOT / 'app' / 'fleet-data.ts'
MARKER_TEXT = '// Add reviewed, source-backed original research here.'
SOURCE_PATHS = [
    ROOT / '.hermes' / 'seo-research' / 'posts.json',
    ROOT / '.hermes' / 'seo-research' / 'research-posts.json',
    ROOT / '.hermes' / 'seo-research.json',
]
RESEARCH_RE = re.compile(
    r"export const researchPosts:\s*readonly ResearchPost\[\]\s*=\s*\[[\s\S]*?\];",
    re.ASCII,
)


def _slugify(value: str) -> str:
    cleaned = ''.join(ch.lower() if ch.isalnum() or ch.isspace() or ch == '-' else '-' for ch in value)
    slug = '-'.join(cleaned.split())
    return slug.strip('-') or 'research-article'


def load_source_posts() -> list[dict[str, Any]] | None:
    for path in SOURCE_PATHS:
        if not path.exists():
            continue
        if path.suffix.lower() != '.json':
            continue
        raw = path.read_text(encoding='utf-8')
        data = json.loads(raw)
        if not isinstance(data, list):
            raise ValueError(f"Research source at {path} must be a JSON array")
        normalized: list[dict[str, Any]] = []
        for item in data:
            if not isinstance(item, dict):
                continue
            sections = item.get('sections') or []
            normalized.append({
                'slug': str(item.get('slug') or _slugify(str(item.get('title', 'research-article')))),
                'title': str(item.get('title', 'Research article')),
                'excerpt': str(item.get('excerpt', 'Research summary for published work.')),
                'published': str(item.get('published', '')),
                'sections': [
                    {
                        'heading': str(section.get('heading', '')),
                        'body': str(section.get('body', '')),
                    }
                    for section in sections
                    if isinstance(section, dict)
                ],
                'sources': [
                    {
                        'name': str(source.get('name', '')),
                        'url': str(source.get('url', '')),
                    }
                    for source in (item.get('sources') or [])
                    if isinstance(source, dict)
                ],
            })
        return normalized
    return None


def apply_fleet_update(posts: list[dict[str, Any]]) -> bool:
    text = FLEET_PATH.read_text(encoding='utf-8')
    if MARKER_TEXT not in text:
        raise RuntimeError(f"Required marker not found in {FLEET_PATH}")

    match = RESEARCH_RE.search(text)
    if not match:
        raise RuntimeError('Could not locate export const researchPosts block.')

    block = f"export const researchPosts: readonly ResearchPost[] = {json.dumps(posts, indent=2, ensure_ascii=False)};"
    next_text = text[:match.start()] + block + text[match.end():]
    if next_text == text:
        return False
    FLEET_PATH.write_text(next_text, encoding='utf-8')
    return True


def main() -> int:
    posts = load_source_posts()
    if posts is None:
        print('No research source found; skipping automatic update.')
        return 0

    changed = apply_fleet_update(posts)
    if changed:
        print(f'updated {len(posts)} research post(s) in app/fleet-data.ts')
    else:
        print('No change needed in app/fleet-data.ts')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
