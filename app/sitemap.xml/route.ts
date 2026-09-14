import { alternativePages } from '../alternatives-data';
import { blogPosts, site } from '../data';
import { fleetServices, postsPerPage, researchPosts } from '../fleet-data';

type SitemapEntry = {
  path: string;
  lastModified: string;
};

const STATIC_ENTRIES: readonly SitemapEntry[] = [
  { path: '', lastModified: '2026-07-28' },
  { path: '/services', lastModified: '2026-07-28' },
  { path: '/blog/top-30-offshore-development-companies', lastModified: '2026-07-29' },
  { path: '/research', lastModified: '2026-07-28' },
  { path: '/contact', lastModified: '2026-07-28' },
  { path: '/privacy', lastModified: '2026-07-28' },
  { path: '/terms', lastModified: '2026-07-28' },
  { path: '/cancellation-policy', lastModified: '2026-07-28' },
] as const;

const SERVICES_LAST_MODIFIED = '2026-07-28';
const ALTERNATIVES_LAST_MODIFIED = '2026-07-29';

function latestDate(dates: readonly (string | undefined)[], fallback: string): string {
  return dates.filter((date): date is string => Boolean(date)).sort().at(-1) ?? fallback;
}

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  })[character] as string);
}

export function GET() {
  const base = `https://${site.domain.toLowerCase()}`;
  const blogLastModified = latestDate(
    blogPosts.map((post) => post.dateModified ?? post.datePublished),
    '2026-07-28',
  );
  const researchLastModified = latestDate(
    researchPosts.map((post) => post.published),
    '2026-07-28',
  );
  const blogPages = Array.from(
    { length: Math.max(1, Math.ceil(blogPosts.length / postsPerPage)) },
    (_, pageIndex): SitemapEntry => ({
      path: pageIndex === 0 ? '/blog' : `/blog/page/${pageIndex + 1}`,
      lastModified: latestDate(
        blogPosts
          .slice(pageIndex * postsPerPage, (pageIndex + 1) * postsPerPage)
          .map((post) => post.dateModified ?? post.datePublished),
        blogLastModified,
      ),
    }),
  );

  const entries: SitemapEntry[] = [
    ...STATIC_ENTRIES,
    ...blogPages,
    { path: '/alternatives', lastModified: ALTERNATIVES_LAST_MODIFIED },
    ...fleetServices.map((service) => ({
      path: `/services/${service.slug}`,
      lastModified: SERVICES_LAST_MODIFIED,
    })),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: post.dateModified ?? post.datePublished ?? blogLastModified,
    })),
    ...researchPosts.map((post) => ({
      path: `/research/${post.slug}`,
      lastModified: post.published ?? researchLastModified,
    })),
    ...alternativePages.map((alternative) => ({
      path: `/alternatives/${alternative.slug}`,
      lastModified: ALTERNATIVES_LAST_MODIFIED,
    })),
  ];

  const body = entries
    .map(({ path, lastModified }) => (
      `<url><loc>${escapeXml(`${base}${path}`)}</loc><lastmod>${lastModified}</lastmod></url>`
    ))
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`,
    { headers: { 'content-type': 'application/xml' } },
  );
}
