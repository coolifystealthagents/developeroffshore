#!/usr/bin/env python3
"""Verify the rendered evidence-backed article without third-party packages."""
from __future__ import annotations

import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

WORD_RE = re.compile(r"\b[\w’'-]+\b", re.UNICODE)
SENTENCE_RE = re.compile(r"[.!?](?=\s|$)")
FORBIDDEN_RE = re.compile(r"\b(pricing|prices?|rates?|salary|salaries|pay|costs?|savings?|tiers?)\b", re.I)


class ArticleParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.article_depth = 0
        self.script_depth = 0
        self.text: list[str] = []
        self.h1: list[str] = []
        self.current_h1 = False
        self.current_p: list[str] | None = None
        self.current_p_class = ""
        self.paragraphs: list[tuple[str, str]] = []
        self.links: list[str] = []
        self.tags: dict[str, int] = {}
        self.banner_positions: list[str] = []
        self.revision: str | None = None
        self.source_heading = False
        self.source_section_depth = 0
        self.source_items = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = dict(attrs)
        if tag == "article":
            self.article_depth += 1
            self.revision = data.get("data-article-revision")
        if not self.article_depth:
            return
        if tag == "script":
            self.script_depth += 1
            return
        if self.script_depth:
            return
        self.tags[tag] = self.tags.get(tag, 0) + 1
        classes = data.get("class", "") or ""
        if "article-banner" in classes and data.get("data-banner-position"):
            self.banner_positions.append(data.get("data-banner-position", ""))
        if tag == "h1":
            self.current_h1 = True
        if tag == "p":
            self.current_p = []
            self.current_p_class = classes
        if tag == "a":
            self.links.append(data.get("href", "") or "")
        if tag == "section" and "sources-card" in classes:
            self.source_section_depth += 1
        if tag == "li" and self.source_section_depth:
            self.source_items += 1

    def handle_endtag(self, tag: str) -> None:
        if not self.article_depth:
            return
        if tag == "script" and self.script_depth:
            self.script_depth -= 1
            return
        if self.script_depth:
            return
        if tag == "h1":
            self.current_h1 = False
        if tag == "p" and self.current_p is not None:
            self.paragraphs.append((self.current_p_class, " ".join(self.current_p)))
            self.current_p = None
            self.current_p_class = ""
        if tag == "section" and self.source_section_depth:
            self.source_section_depth -= 1
        if tag == "article":
            self.article_depth -= 1

    def handle_data(self, data: str) -> None:
        if not self.article_depth or self.script_depth:
            return
        clean = " ".join(data.split())
        if not clean:
            return
        self.text.append(clean)
        if self.current_h1:
            self.h1.append(clean)
        if self.current_p is not None:
            self.current_p.append(clean)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("html", type=Path)
    parser.add_argument("--keyword", required=True)
    args = parser.parse_args()

    document = args.html.read_text(encoding="utf-8")
    page = ArticleParser()
    page.feed(document)
    visible = " ".join(page.text)
    word_count = len(WORD_RE.findall(visible))
    h1 = " ".join(page.h1)
    narrative = [
        text for classes, text in page.paragraphs
        if not any(skip in classes.split() for skip in ("eyebrow", "article-date", "table-cue", "article-banner-note", "article-source-note"))
    ]
    bad_paragraphs = [
        {"sentences": len(SENTENCE_RE.findall(text)), "text": text}
        for text in narrative
        if len(SENTENCE_RE.findall(text)) not in (2, 3)
    ]
    internal = [href for href in page.links if href.startswith("/")]
    external = [href for href in page.links if urlparse(href).scheme in ("http", "https")]
    schema_types = set(re.findall(r'\\?"@type\\?"\s*:\s*\\?"([^"\\]+)', document))
    forbidden = sorted({match.group(0).lower() for match in FORBIDDEN_RE.finditer(visible)})
    checks = {
        "word_count_1500_2000": 1500 <= word_count <= 2000,
        "keyword_led_h1": args.keyword.lower() in h1.lower(),
        "paragraphs_2_3_sentences": not bad_paragraphs,
        "one_table": page.tags.get("table", 0) == 1,
        "two_or_more_svgs": page.tags.get("svg", 0) >= 2,
        "expert_blockquote": page.tags.get("blockquote", 0) >= 1,
        "numbered_sources": page.source_items >= 4,
        "three_banners": page.banner_positions == ["1", "2", "3"],
        "three_internal_links": len(set(internal)) >= 3,
        "four_external_links": len(set(external)) >= 4,
        "no_forbidden_terms": not forbidden,
        "required_schema": {"BlogPosting", "FAQPage", "BreadcrumbList"}.issubset(schema_types),
        "revision_marker": bool(page.revision),
    }
    result = {
        "file": str(args.html),
        "h1": h1,
        "word_count": word_count,
        "narrative_paragraphs": len(narrative),
        "bad_paragraphs": bad_paragraphs,
        "table_count": page.tags.get("table", 0),
        "svg_count": page.tags.get("svg", 0),
        "blockquote_count": page.tags.get("blockquote", 0),
        "source_items": page.source_items,
        "banner_positions": page.banner_positions,
        "unique_internal_links": len(set(internal)),
        "unique_external_links": len(set(external)),
        "forbidden_terms": forbidden,
        "schema_types": sorted(schema_types),
        "revision": page.revision,
        "checks": checks,
        "passed": all(checks.values()),
    }
    print(json.dumps(result, indent=2))
    return 0 if result["passed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
