import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, PageHero } from '../../../components';
import { blogPosts } from '../../../data';
import { compareNewestBatchFirst, postsPerPage } from '../../../fleet-data';
import { articleThumbnail } from '../../../article-thumbnails';

const visibleDate = (date: string) => new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export function generateStaticParams() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  return Array.from({ length: pages }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const n = Number(page);
  return {
    title: { absolute: `Offshore Developer Guides - Page ${n} | Developer Offshore` },
    description: `Browse page ${n} of practical Philippines-based software development guides.`,
    alternates: { canonical: `https://developeroffshore.com/blog/page/${n}` },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  if (!Number.isInteger(n) || n < 1 || n > pages) notFound();
  const ordered = [...blogPosts].sort((a, b) => compareNewestBatchFirst(a, b, a.datePublished ?? '', b.datePublished ?? ''));
  const posts = ordered.slice((n - 1) * postsPerPage, n * postsPerPage);

  return (
    <>
      <Header />
      <main id="main-content" className="dx-page">
        <PageHero
          compact
          eyebrow={`Field notes · page ${n}`}
          title={<>More guides for your team.</>}
          lead="Browse practical Philippines-based software development guides, ordered by publication date."
          breadcrumb={<><a href="/">Home</a><span>/</span><a href="/blog">Blog</a><span>/</span><span>Page {n}</span></>}
          media={
            <div className="dx-guide-panel">
              <div className="dx-guide-panel-top"><span>Archive</span><span>Page {n} of {pages}</span></div>
              <h2>{posts[0]?.title ?? 'More developer guides'}</h2>
              <p>{posts[0]?.excerpt ?? 'Browse the next set of practical guides.'}</p>
              <div className="dx-guide-rows">
                {posts.slice(1, 4).map((post) => (
                  <div className="dx-guide-row" key={post.slug}><span>{post.minutes ?? 7} min</span><strong>{post.title}</strong><span>↗</span></div>
                ))}
              </div>
            </div>
          }
        />
        <section className="dx-section">
          <div className="dx-container">
            <div className="dx-index-toolbar">
              <span>Page {n} of {pages}. Every article stays at its original URL.</span>
              <span>{posts.length} guides</span>
            </div>
            <div className="dx-posts">
              {posts.map((post, index) => {
                const thumbnail = articleThumbnail('blog', post.slug, post.title);
                return (
                  <a
                    className="dx-post-card"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    data-reveal
                    style={{ '--dx-delay': `${(index % 3) * 50}ms` } as CSSProperties}
                  >
                    <div className="dx-post-media">
                      <img src={thumbnail.src} alt={thumbnail.alt} loading="lazy" />
                      <span>{post.minutes ?? 7} min read</span>
                    </div>
                    <div className="dx-post-body">
                      <span className="dx-post-meta">{post.datePublished ? visibleDate(post.datePublished) : 'Developer guide'}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="dx-link">Read the guide ↗</span>
                    </div>
                  </a>
                );
              })}
            </div>
            <nav className="pagination" aria-label="Blog pages">
              {Array.from({ length: pages }, (_, index) => (
                <a aria-current={index + 1 === n ? 'page' : undefined} href={index === 0 ? '/blog' : `/blog/page/${index + 1}`} key={index}>{index + 1}</a>
              ))}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
