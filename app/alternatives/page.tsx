import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { Header, Footer, PageHero } from '../components';
import { alternativePages } from '../alternatives-data';

export const metadata: Metadata = {
  title: { absolute: 'Developer Staffing Alternatives | Developer Offshore' },
  description: 'Independent comparisons of developer talent platforms, outsourcing firms, and Philippines-based offshore staffing.',
  alternates: { canonical: 'https://developeroffshore.com/alternatives' },
};

export default function Alternatives() {

  return (
    <>
      <Header />
      <main id="main-content" className="dx-page">
        <PageHero
          eyebrow="Alternatives"
          title={<>Compare developer staffing options by operating model.</>}
          lead="Use current vendor sources, then verify contracts, assessments, locations, access controls, and day-to-day ownership."
          breadcrumb={<><a href="/">Home</a><span>/</span><span>Alternatives</span></>}
          media={
            <div className="dx-compare-panel">
              <div className="dx-guide-panel-top"><span>Operating models</span><span>Verify the contract</span></div>
              {[
                ['Platform', 'Broad pool, variable continuity', 'cyan'],
                ['Agency', 'Managed team, less direct control', 'violet'],
                ['Direct', 'One employment lane, clear review', 'blue'],
              ].map(([label, note, tone]) => (
                <div className="dx-compare-row" key={label}>
                  <span className={`dx-compare-dot ${tone}`} />
                  <strong>{label}</strong>
                  <span>{note}</span>
                </div>
              ))}
              <p>Use the same scorecard for delivery ownership, overlap, assessment evidence, security, replacement, and offboarding.</p>
            </div>
          }
        />

        <section className="dx-section">
          <div className="dx-container">
            <div className="dx-index-toolbar">
              <span>Independent comparisons with source links and verification checks.</span>
              <span>{alternativePages.length} comparisons</span>
            </div>
            <div className="dx-research-grid">
              {alternativePages.map((page, index) => (
                <a
                  className="dx-research-card"
                  href={`/alternatives/${page.slug}`}
                  key={page.slug}
                  data-reveal
                  style={{ '--dx-delay': `${(index % 3) * 40}ms` } as CSSProperties}
                >
                  <span className="dx-tag">{page.competitor}</span>
                  <h3>{page.title}</h3>
                  <p>{page.description}</p>
                  <footer><span>{page.model}</span><span>Read ↗</span></footer>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
