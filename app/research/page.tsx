import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { Header, Footer, PageHero } from '../components';
import { compareNewestBatchFirst, researchPosts } from '../fleet-data';
import { site } from '../data';

export const metadata: Metadata = {
  title: { absolute: `Software Development Research | ${site.brand}` },
  description: 'Original research and source-backed analysis for planning Philippines-based software development.',
  alternates: { canonical: 'https://developeroffshore.com/research' },
};

const visibleDate = (date: string) => new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

function clusterFor(title: string) {
  const value = title.toLowerCase();
  if (/hiring|onboard|access|contract|scope|review|role/.test(value)) return 'Hiring and review controls';
  if (/quality|test|defect|incident|alert|performance|reliab|flak/.test(value)) return 'Delivery signals';
  return 'Maintenance and workflow';
}

export default function Research() {
  const posts = [...researchPosts].sort((a, b) => compareNewestBatchFirst(a, b, a.published, b.published));
  const featured = posts.slice(0, 9);
  const archive = posts.slice(9);
  const clusters = Array.from(new Set(archive.map((post) => clusterFor(post.title))));

  return (
    <>
      <Header />
      <main id="main-content" className="dx-page">
        <PageHero
          eyebrow="Research library"
          title={<>Research for better delivery decisions.</>}
          lead="Use these reports to examine evidence, review boundaries, and handoff risks before assigning software work to a Philippines-based team."
          breadcrumb={<><a href="/">Home</a><span>/</span><span>Research</span></>}
          actions={<a className="dx-btn dx-btn--ghost" href="/blog">Read the practical guides ↗</a>}
          media={
            <div className="dx-service-summary" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12, padding: 18 }}>
              {[
                ['Defined', 'Research questions'],
                ['Named', 'Evidence sources'],
                ['Explicit', 'Limitations'],
              ].map(([strong, span]) => (
                <div key={strong} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '15px 16px', border: '1px solid var(--dx-line)', borderRadius: 8, background: '#fff' }}>
                  <strong style={{ color: 'var(--dx-blue)', fontFamily: 'var(--dx-display)', fontSize: 18, minWidth: 78 }}>{strong}</strong>
                  <span style={{ color: '#5f7087', fontSize: 11 }}>{span}</span>
                </div>
              ))}
            </div>
          }
        />

        <section className="dx-section">
          <div className="dx-container">
            <div className="dx-index-toolbar">
              <span>Each brief pairs a source review with operating implications.</span>
              <span>{posts.length} research briefs</span>
            </div>
            <div className="dx-research-grid">
              {featured.map((post, index) => {
                const cluster = clusterFor(post.title);
                return (
                  <a
                    className="dx-research-card"
                    href={`/research/${post.slug}`}
                    key={post.slug}
                    data-reveal
                    style={{ '--dx-delay': `${(index % 3) * 50}ms` } as CSSProperties}
                  >
                    <span className="dx-tag">{cluster}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <footer><span>{visibleDate(post.published)}</span><span>Read brief ↗</span></footer>
                  </a>
                );
              })}
            </div>

            <div className="dx-archive" id="research-archive">
              <div className="dx-head" data-reveal>
                <div><p className="dx-eyebrow">Complete archive</p><h2>Find a focused brief.</h2></div>
                <p>Browse every report by topic. All research URLs remain available.</p>
              </div>
              {clusters.map((cluster) => {
                const items = archive.filter((post) => clusterFor(post.title) === cluster);
                return (
                  <details key={cluster}>
                    <summary><span>{cluster}</span><small>{items.length} briefs</small></summary>
                    <div className="dx-archive-links">
                      {items.map((post) => (
                        <a href={`/research/${post.slug}`} key={post.slug}>
                          <span className="dx-archive-title">{post.title}</span>
                          <span>Read ↗</span>
                        </a>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
