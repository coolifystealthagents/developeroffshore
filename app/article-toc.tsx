'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string; level?: 2 | 3 };

export function ArticleToc({ items, titleId }: { items: readonly TocItem[]; titleId: string }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));
    if (!headings.length) return;

    const updateActiveHeading = () => {
      const headerOffset = 128;
      const current = headings.reduce((active, heading) => {
        return heading.getBoundingClientRect().top <= headerOffset ? heading : active;
      }, headings[0]);
      setActiveId(current.id);
    };

    updateActiveHeading();
    window.addEventListener('scroll', updateActiveHeading, { passive: true });
    window.addEventListener('resize', updateActiveHeading);
    return () => {
      window.removeEventListener('scroll', updateActiveHeading);
      window.removeEventListener('resize', updateActiveHeading);
    };
  }, [items]);

  return (
    <nav className="article-toc" aria-labelledby={titleId}>
      <h2 id={titleId}>Table of contents</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id} data-level={item.level ?? 2}>
            <a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
