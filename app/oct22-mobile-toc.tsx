'use client';

import { useEffect } from 'react';

type TocItem = { id: string; label: string };

/*
 * Mobile-only sticky contents control for article templates that keep their
 * desktop ToC in a sidebar but do not provide a compact control on small
 * screens. The server renders the disclosure from the page's real ToC items so
 * the links exist before hydration; the effect keeps it in sync with the
 * rendered headings and positions it below the site header.
 */
export default function Oct22MobileToc({ items = [] }: { items?: readonly TocItem[] }) {
  useEffect(() => {
    const main = document.querySelector('main') || document.body;
    const candidate = main.querySelector('article');
    // Some templates put the H1 in a hero outside the article body. Mount the
    // control against the container that actually holds the title.
    const article = candidate && candidate.querySelector('h1') ? candidate : main;
    const headings = Array.from(article.querySelectorAll<HTMLElement>('h2')).filter((h) => h.offsetParent !== null && !h.closest('nav, aside, .article-sidebar, .article-toc, .o22-mobile') && !/^Table of contents$/i.test((h.textContent || '').trim()));
    if (headings.length < 2) return;
    headings.forEach((h, i) => {
      if (!h.id) h.id = `o22-${i + 1}`;
      h.style.scrollMarginTop = '110px';
    });
    let details = article.querySelector<HTMLDetailsElement>('details[data-o22-mobile="true"]');
    if (!details) {
      details = document.createElement('details');
      details.dataset.o22Mobile = 'true';
      details.className = 'o22-mobile';
      article.insertBefore(details, article.firstElementChild);
    }
    const header = document.querySelector<HTMLElement>('header, .site-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    details.style.top = `${Math.round(headerHeight + 8)}px`;
    details.innerHTML = `<summary>Table of contents</summary><nav aria-label="Table of contents mobile"></nav>`;
    const nav = details.querySelector('nav')!;
    headings.forEach((h) => {
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = (h.textContent || '').trim();
      nav.appendChild(a);
    });
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html,body{overflow-x:clip}
.o22-mobile{display:none}
@media(max-width:900px){
  .o22-mobile{display:block;position:sticky;top:72px;z-index:50;margin:0 0 16px auto;width:fit-content;max-width:calc(100% - 1rem);background:#fff;color:#17202a;border:1px solid #17202a;border-radius:12px;padding:8px 12px;box-shadow:0 8px 20px rgba(0,0,0,.16)}
  .o22-mobile[open]{position:relative;top:auto;z-index:auto}
  .o22-mobile>summary{cursor:pointer;font:800 13px Arial,sans-serif;list-style:none;min-height:30px}
  .o22-mobile nav{max-height:60vh;overflow:auto;margin-top:6px;border-top:1px solid #e5e7eb;padding-top:4px}
  .o22-mobile a{display:block;padding:9px 0;color:#17202a;text-decoration:none;font:500 14px/1.35 Arial,sans-serif;border-top:1px solid #eee}
}
`,
        }}
      />
      {items.length ? (
        <details className="o22-mobile" data-o22-mobile="true">
          <summary>Table of contents</summary>
          <nav aria-label="Table of contents mobile">
            {items.map((item) => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}
          </nav>
        </details>
      ) : null}
    </>
  );
}
