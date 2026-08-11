#!/usr/bin/env python3
"""Regression gate for the August 10, 2026 Blog date-repair manifest."""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".paperclip/aug10-2026/blog.json"
TARGET = "2026-08-10"

def git(*args: str) -> str:
    return subprocess.check_output(["git", *args], cwd=ROOT, text=True)

def main() -> None:
    data = json.loads(MANIFEST.read_text())
    entries = data["entries"]
    assert data["schemaVersion"] == 1 and data["contract"] == "sites3-aug10-public-date-v6"
    assert data["family"] == "blog" and data["domain"] == "developeroffshore.com"
    assert len(entries) == 23 and len(entries) >= data["minimum"] >= 22
    slugs = [entry["slug"] for entry in entries]
    assert len(slugs) == len(set(slugs))
    assert all(slug.endswith("-2026-08-10-r2") for slug in slugs)
    source = (ROOT / "app/data.ts").read_text()
    route_source = (ROOT / "app/blog/[slug]/page.tsx").read_text()
    index_source = (ROOT / "app/blog/page.tsx").read_text()
    sitemap = (ROOT / ".next/server/app/sitemap.xml.body").read_text() if (ROOT / ".next/server/app/sitemap.xml.body").exists() else ""
    assert "datePublished: post.datePublished" in route_source
    assert "Published {post.datePublished}" in route_source
    assert "sort((a, b) => (b.datePublished ?? '').localeCompare(a.datePublished ?? ''))" in index_source
    for entry in entries:
        assert entry["route"] == "/blog/" + entry["slug"] and entry["route"].startswith("/blog/")
        assert entry["sourcePath"] == "app/aug10-blog-repair-data.ts" and entry["sourceDateField"] == "datePublished"
        assert entry["sourceDate"] == TARGET and entry["renderedDate"] == TARGET
        assert "datePublished" in entry["renderedDateFields"]
        built = ROOT / ".next/server/app/blog" / (entry["slug"] + ".html")
        assert built.exists(), entry["slug"]
        rendered = built.read_text()
        assert TARGET in rendered and '"datePublished":"2026-08-10"' in rendered
        assert 'rel="canonical"' in rendered and ("/blog/" + entry["slug"]) in sitemap
        try:
            parent_source = git("show", entry["introducedByCommit"] + "^:" + entry["sourcePath"])
        except subprocess.CalledProcessError:
            parent_source = ""
        diff = git("diff", entry["introducedByCommit"] + "^", entry["introducedByCommit"], "--", entry["sourcePath"])
        assert entry["slug"] in source
        assert entry["provenance"] == "repair-replacement"
        pair = re.compile(r"\{\s*slug:\s*['\"]" + re.escape(entry["slug"]) + r"['\"],\s*datePublished:\s*['\"]" + TARGET + r"['\"]\s*\}")
        assert pair.search(diff), entry["slug"]
        assert not pair.search(parent_source), entry["slug"]
    assert all(entries[i]["sourceDate"] >= entries[i + 1]["sourceDate"] for i in range(len(entries) - 1))
    print(f"PASS: {len(entries)} manifest entries, provenance, rendered date contract, and index gate")

if __name__ == "__main__":
    main()
