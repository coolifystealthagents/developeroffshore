import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { FeaturedComparison } from './FeaturedComparison';
import { Header, Footer, PageHero } from '../components';
import { blogPosts } from '../data';
import { compareNewestBatchFirst, postsPerPage } from '../fleet-data';
import { articleThumbnail } from '../article-thumbnails';

const visibleDate = (date: string) => new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export const metadata: Metadata = {
  title: { absolute: 'Offshore Developer Guides | Developer Offshore' },
  description: 'Practical guides for planning, reviewing, and managing Philippines-based software development work.',
  alternates: { canonical: 'https://developeroffshore.com/blog' },
};

export default function Blog() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  const posts = [...blogPosts].sort((a, b) => compareNewestBatchFirst(a, b, a.datePublished ?? '', b.datePublished ?? '')).slice(0, postsPerPage);
  const [featured, ...rest] = posts;
  const featuredImage = featured ? articleThumbnail('blog', featured.slug, featured.title) : null;

  return (
    <>
      <Header />
      <main id="main-content" className="dx-page">
        <PageHero
          eyebrow="Field notes"
          title={<>Developer Offshore guides.</>}
          lead="Practical planning for Philippines-based software development roles, workflows, and manager handoffs."
          breadcrumb={<><a href="/">Home</a><span>/</span><span>Blog</span></>}
          media={
            <div className="dx-guide-panel">
              <div className="dx-guide-panel-top"><span>Latest guide</span><span>{posts.length} on this page</span></div>
              <h2>{featured?.title ?? 'Developer Offshore guides'}</h2>
              <p>{featured?.excerpt ?? 'Read the brief before you write the ticket.'}</p>
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
              <span>Every guide is written for the reviewer, not the brochure.</span>
              <span>{posts.length} guides on this page</span>
            </div>

            {featured ? (
              <a className="dx-feature" href={`/blog/${featured.slug}`} data-reveal>
                <div className="dx-feature-media">
                  <img src={featuredImage?.src} alt={featuredImage?.alt} />
                </div>
                <div className="dx-feature-copy">
                  <span className="dx-post-meta">Featured · {featured.minutes ?? 7} min read</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  {featured.datePublished ? <span className="dx-post-meta">{visibleDate(featured.datePublished)}</span> : null}
                  <span className="dx-link">Read the guide ↗</span>
                </div>
              </a>
            ) : null}

            <div className="dx-posts">
              {rest.map((post, index) => {
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
                <a aria-current={index === 0 ? 'page' : undefined} href={index === 0 ? '/blog' : `/blog/page/${index + 1}`} key={index}>{index + 1}</a>
              ))}
            </nav>
          </div>
        </section>
        <FeaturedComparison />
      </main>
      <Footer />
    </>
  );
}
