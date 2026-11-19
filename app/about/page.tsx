import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { CTA, Footer, Header, JsonLd, PageHero, SectionHead } from '../components';
import { site } from '../data';

const base = `https://${site.domain.toLowerCase()}`;

export const metadata: Metadata = {
  title: { absolute: 'About Developer Offshore | Developer Offshore' },
  description: 'Learn how Developer Offshore, powered by Stealth Agents, helps teams define and staff reviewable software delivery roles in the Philippines.',
  alternates: { canonical: `${base}/about` },
};

const principles = [
  ['Role clarity before recruiting', 'Define the stack, representative work, required overlap, evidence, and reviewer before assessing candidates.'],
  ['Client-owned decisions', 'Your team keeps product priority, architecture, repository policy, code review, production access, and release approval.'],
  ['Inspectable delivery', 'Contributors return focused changes, test evidence, limitations, and written handoffs inside your existing engineering system.'],
] as const;

export default function AboutPage() {
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${base}/about`,
    name: `About ${site.brand}`,
    mainEntity: {
      '@type': 'Organization',
      name: site.brand,
      url: base,
      parentOrganization: { '@type': 'Organization', name: 'Stealth Agents', url: 'https://stealthagents.com' },
    },
  };

  return (
    <>
      <Header />
      <main id="main-content" className="dx-page">
        <JsonLd data={graph} />
        <PageHero
          eyebrow="About Developer Offshore"
          title={<>Software staffing built around clear ownership.</>}
          lead="Developer Offshore helps teams plan and recruit Philippines-based software roles without pretending that staffing transfers product or technical accountability."
          breadcrumb={<><a href="/">Home</a><span>/</span><span>About</span></>}
          actions={<a className="dx-btn" href="/contact-us">Scope a developer role ↗</a>}
          media={<figure className="dx-pagehero-media"><img src="/images/stealth-agents-team-bacolod.jpg" alt="StealthAgents team outside the Bacolod City Government Center" /><figcaption>Official StealthAgents team · Bacolod City</figcaption></figure>}
        />

        <section className="dx-section">
          <div className="dx-container dx-statement">
            <h2 data-reveal>Start with one <em>reviewable lane.</em></h2>
            <div className="dx-statement-copy" data-reveal>
              <p>
                A useful staffing conversation begins with the work: what system is changing, which
                result matters first, who will review it, and which access is actually required.
              </p>
              <p>
                Those answers shape the role and make candidate evaluation more honest. They also
                make the first week easier to inspect without turning the engagement into a vague
                extension of the roadmap.
              </p>
            </div>
          </div>
        </section>

        <section className="dx-section dx-section--white">
          <div className="dx-container">
            <SectionHead
              eyebrow="Working principles"
              title={<>What responsible offshore staffing requires.</>}
              copy="These are operating constraints, not marketing promises."
            />
            <div className="dx-pillars" style={{ marginTop: 0 }}>
              {principles.map(([title, body], index) => (
                <article className="dx-pillar" key={title} data-reveal style={{ '--dx-delay': `${index * 60}ms` } as CSSProperties}>
                  <span>Principle</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
