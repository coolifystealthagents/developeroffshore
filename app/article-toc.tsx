'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

export function ArticleToc({ items, titleId }: { items: readonly TocItem[]; titleId: string }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter((heading): heading is HTMLElement => Boolean(heading));
    if (!headings.length || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)[0];
      if (visible?.target.id) setActiveId(visible.target.id);
    }, { rootMargin: '-96px 0px -68% 0px', threshold: [0, 1] });
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="article-toc" aria-labelledby={titleId}>
      <h2 id={titleId}>Table of contents</h2>
      <ol>{items.map((item) => <li key={item.id}><a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>{item.label}</a></li>)}</ol>
    </nav>
  );
}
