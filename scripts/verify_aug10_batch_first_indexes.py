#!/usr/bin/env python3
"""Verify August 10 frozen batches precede same-date legacy cards without breaking pagination."""
import html
import json
import re
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / '.next/server/app'
TARGET = '2026-08-10'
PAGE_SIZE = 23


def anchor_tags(raw: str) -> list[str]:
    return re.findall(r'<a\b[^>]*>', raw, re.I | re.S)


def href_from_tag(tag: str) -> str | None:
    match = re.search(r'href=["\']([^"\']+)', tag, re.I)
    return urlparse(html.unescape(match.group(1))).path.rstrip('/') if match else None


def family_links(raw: str, family: str) -> list[str]:
    links = []
    for tag in anchor_tags(raw):
        path = href_from_tag(tag)
        if path and re.fullmatch('/' + re.escape(family) + r'/[^/]+', path):
            links.append(path)
    return links


def card_links(raw: str, family: str) -> list[str]:
    marker = 'article-card' if family == 'blog' else 'research-library-card'
    links = []
    for tag in anchor_tags(raw):
        if marker not in tag:
            continue
        path = href_from_tag(tag)
        if path and re.fullmatch('/' + re.escape(family) + r'/[^/]+', path):
            links.append(path)
    return links


def expected_routes(family: str) -> list[str]:
    manifest = json.loads((ROOT / f'.paperclip/aug10-2026/{family}.json').read_text())
    return [entry['route'] for entry in manifest['entries']]


def page_paths(family: str) -> list[Path]:
    paths = [BUILD / f'{family}.html']
    if family == 'blog':
        paths.extend(BUILD / f'blog/page/{page}.html' for page in range(2, 20))
    return paths


def publication_date(route: str) -> str:
    built = BUILD / (route.lstrip('/') + '.html')
    assert built.exists(), f'missing built route {route}'
    raw = built.read_text(encoding='utf-8')
    match = re.search(r'"datePublished":"(\d{4}-\d{2}-\d{2})', raw)
    return match.group(1) if match else ''


def built_index(family: str) -> tuple[list[str], list[str], list[int]]:
    document_links: list[str] = []
    cards: list[str] = []
    card_counts: list[int] = []
    for path in page_paths(family):
        if not path.exists():
            if not document_links:
                raise AssertionError(f'missing built index {path}')
            break
        raw = path.read_text(encoding='utf-8')
        page_document = family_links(raw, family)
        page_cards = card_links(raw, family)
        document_links.extend(page_document)
        cards.extend(page_cards)
        card_counts.append(len(page_cards))
    return document_links, cards, card_counts


def main() -> None:
    results = {}
    for family in ('blog', 'research'):
        expected = expected_routes(family)
        document_links, cards, page_sizes = built_index(family)
        assert len(cards) == len(set(cards)), f'{family} duplicate card route across pagination'
        assert set(expected).issubset(set(cards)), f'{family} cards omit frozen routes'
        dates = [publication_date(route) for route in cards]
        assert all(dates[i] >= dates[i + 1] for i in range(len(dates) - 1)), f'{family} card dates not newest-first'
        date_by_route = dict(zip(cards, dates))
        assert all(date_by_route[route] == TARGET for route in expected), f'{family} frozen route date mismatch'
        same_date = [route for route, date in zip(cards, dates) if date == TARGET]
        assert set(same_date[:len(expected)]) == set(expected), f'{family} frozen batch does not precede same-date legacy cards'
        unique_document = list(dict.fromkeys(document_links))
        assert set(unique_document[:len(expected)]) == set(expected), f'{family} controller document order is not batch-first'
        if family == 'blog':
            assert all(size == PAGE_SIZE for size in page_sizes[:-1]), 'blog non-final page size mismatch'
            assert 1 <= page_sizes[-1] <= PAGE_SIZE, 'blog final page size mismatch'
        else:
            assert len(page_sizes) == 1 and page_sizes[0] == len(cards), 'research index should contain all cards'
        results[family] = {
            'accepted': len(expected),
            'cards': len(cards),
            'pageSizes': page_sizes,
            'uniqueAcrossPages': True,
            'datesNewestFirst': True,
            'sameDateBatchFirst': True,
            'controllerFirstNExactSet': True,
        }
    print(json.dumps(results, sort_keys=True))


if __name__ == '__main__':
    main()
