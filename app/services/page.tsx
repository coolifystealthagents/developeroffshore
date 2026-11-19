import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd, PageHero, SectionHead } from '../components';
import { fleetServices } from '../fleet-data';
import { site } from '../data';
import { LaneVisual } from '../lane-visual';

const base = `https://${site.domain.toLowerCase()}`;
const url = `${base}/services`;
const description = 'Explore software development services delivered by talent recruited and hired exclusively in the Philippines.';

export const metadata: Metadata = {
  title: 'Services',
  description,
  alternates: { canonical: url },
  openGraph: {
    title: `Services | ${site.brand}`,
    description,
    url,
    type: 'website',
    images: [{ url: `${base}/illustrations/getillustrations/inkdex-saas-illustrations-svg/offshore-developer.svg`, alt: 'Developer planning a reviewable software delivery workflow' }],
  },
};

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', '@id': `${url}#collection`, url, name: `Philippines-based developer services | ${site.brand}`, description, mainEntity: { '@id': `${url}#services` }, breadcrumb: { '@id': `${url}#breadcrumb` } },
    {
      '@type': 'ItemList',
      '@id': `${url}#services`,
      name: 'Philippines-based software development services',
      numberOfItems: fleetServices.length,
      itemListElement: fleetServices.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.title,
        url: `${url}/${service.slug}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: base },
        { '@type': 'ListItem', position: 2, name: 'Services', item: url },
      ],
    },
  ],
};

const checks = [
  ['A bounded first outcome', 'Choose one route, feature, workflow, test lane, or maintenance problem that can be reviewed without handing over the whole roadmap.'],
  ['A named internal owner', 'Keep product priority, architecture, sensitive access, production release, and accepted risk with someone on your team.'],
  ['Evidence before expansion', 'Ask for a focused change, the checks that were run, known limitations, and a written handoff before adding scope.'],
] as const;

const decision = [
  ['Work is waiting for implementation', 'Choose Next.js, React, Node.js, Shopify, WordPress, mobile, or data pipeline development according to the system where the backlog lives. Bring a representative ticket and current repository conventions.'],
  ['Work is waiting for confidence', 'Choose QA automation when release evidence is weak, or DevOps release support when pipelines, health checks, runbooks, and rollback preparation are the limiting lane.'],
  ['The system feels fragile', 'Choose legacy application maintenance for contained fixes, characterization tests, dependency work, and documentation that reduces uncertainty without disguising a rewrite as routine maintenance.'],
] as const;

const faqs = [
  ['Which service should we start with?', 'Start with the service that matches the current bottleneck and the reviewer already available on your team. A frontend backlog points to React or Next.js. A weak release process points to QA or DevOps.'],
  ['Can one developer cover several services?', 'Related work can be combined after the first lane is dependable. Begin with one primary responsibility so access, acceptance criteria, and review ownership stay clear.'],
  ['What do we need before an introductory conversation?', 'Bring a representative task, the current stack, expected working hours, required tools, and the person who will review the result. A completed brief makes matching more useful.'],
  ['Who makes architecture and production decisions?', 'Your internal owners do. A developer can investigate options, implement an approved direction, prepare release evidence, and document tradeoffs without taking ownership of production risk.'],
  ['How is quality evaluated?', 'Quality is tied to the chosen service and task. Useful evidence can include focused tests, browser or device checks, contract cases, preview links, pipeline output, and a written handoff.'],
] as const;

const tags: Record<string, readonly string[]> = {
  'next-js-application-development': ['Next.js', 'App Router', 'TypeScript'],
  'react-frontend-development': ['React', 'Design system', 'A11y'],
  'node-js-api-development': ['Node.js', 'APIs', 'SQL'],
  'shopify-theme-development': ['Liquid', 'Storefront', 'Commerce'],
  'wordpress-engineering': ['WordPress', 'Blocks', 'PHP'],
  'qa-automation-engineering': ['Playwright', 'CI', 'Test evidence'],
  'devops-release-support': ['CI/CD', 'Docker', 'Release'],
  'data-pipeline-development': ['Python', 'ETL', 'Validation'],
  'mobile-app-development': ['React Native', 'iOS', 'Android'],
  'legacy-application-maintenance': ['Tests', 'Upgrades', 'Docs'],
};

export default function Services() {
  return (
    <>
      <Header />
      <main id="main-content" className="dx-page">
        <JsonLd data={graph} />
        <PageHero
          eyebrow="Service catalog"
          title={<>Choose a focused engineering lane, not a vague extra pair of hands.</>}
          lead="Match a developer to the stack, evidence, schedule, and approval boundary your team can support. Each lane explains the inputs, work, controls, and first-week outcome."
          breadcrumb={<><a href="/">Home</a><span>/</span><span>Services</span></>}
          actions={<><a className="dx-btn" href="#service-catalog">Explore the lanes ↗</a><a className="dx-btn dx-btn--ghost" href="/contact-us">Discuss your backlog</a></>}
          media={
            <figure className="dx-detail-visual" data-tilt data-tilt-strength="3">
              <div className="dx-lane-thumb"><LaneVisual slug="node-js-api-development" /></div>
              <figcaption>Scope · implement · test · review · hand off</figcaption>
            </figure>
          }
        />

        <section className="dx-section dx-section--tight">
          <div className="dx-container">
            <div className="dx-service-summary" data-reveal>
              <div>
                <p className="dx-eyebrow">A service system built for review</p>
                <h2>Capacity works when ownership remains visible.</h2>
              </div>
              <p>
                Developer Offshore supports teams that have real software work and need a dependable
                contributor to move it. The model is not a transfer of product accountability. Your
                team defines priority and approval. The developer works in an agreed lane and returns
                inspectable evidence.
              </p>
            </div>
          </div>
        </section>

        <section className="dx-section dx-section--white" id="service-catalog">
          <div className="dx-container">
            <SectionHead
              eyebrow="Ten delivery lanes"
              title={<>Ten ways to add focused software capacity.</>}
              copy="Select a lane to see the audience, inputs, deliverables, workflow, controls, boundaries, and a practical first week."
            />
            <div className="dx-lanes">
              {fleetServices.map((service, index) => (
                <a
                  className="dx-lane-card"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  data-tilt
                  data-tilt-strength="3"
                  data-reveal
                  style={{ '--dx-delay': `${(index % 2) * 50}ms` } as CSSProperties}
                >
                  <div className="dx-lane-thumb"><LaneVisual slug={service.slug} /></div>
                  <div className="dx-lane-copy">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <span className="dx-tags">{tags[service.slug]?.map((tag) => <span key={tag}>{tag}</span>)}</span>
                  </div>
                  <span className="dx-lane-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="dx-section">
          <div className="dx-container">
            <SectionHead
              eyebrow="Operating guidance"
              title={<>Prepare the lane before adding capacity.</>}
              copy="A useful start does not require perfect documentation. It requires one inspectable result, explainable access, and a reviewer with time."
            />
            <div className="dx-process dx-process--three">
              {checks.map(([title, body], index) => (
                <article className="dx-step" key={title} data-reveal style={{ '--dx-delay': `${index * 70}ms` } as CSSProperties}>
                  <span className="dx-step-dot" aria-hidden="true">{['Scope', 'Owner', 'Proof'][index]}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="dx-service-note" data-reveal>
              <div>
                <p className="dx-eyebrow dx-eyebrow--light">Decision support</p>
                <h3>Choose by bottleneck, not by the longest skills list.</h3>
              </div>
              <div>
                <p>{decision[0][1]}</p>
                <a className="dx-btn dx-btn--light" href="/contact-us">Talk through the bottleneck ↗</a>
              </div>
            </div>
          </div>
        </section>

        <section className="dx-section dx-section--white">
          <div className="dx-container">
            <SectionHead
              eyebrow="Decision support"
              title={<>Three ways teams get stuck.</>}
              copy="Use the constraint to choose the first lane. You can add adjacent work later."
            />
            <div className="dx-pillars" style={{ marginTop: 0 }}>
              {decision.map(([title, body], index) => (
                <article className="dx-pillar" key={title} data-reveal style={{ '--dx-delay': `${index * 60}ms` } as CSSProperties}>
                  <span>Constraint</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dx-section dx-section--tight">
          <div className="dx-container">
            <div className="dx-service-summary" style={{ display: 'block' }}>
              <p className="dx-eyebrow">Questions before you choose</p>
              <h2>Service planning FAQ</h2>
              {faqs.map(([question, answer]) => (
                <details key={question} style={{ borderTop: '1px solid var(--dx-line)', padding: '13px 0' }}>
                  <summary style={{ cursor: 'pointer', color: 'var(--dx-ink)', fontFamily: 'var(--dx-display)', fontSize: 13, fontWeight: 600 }}>{question}</summary>
                  <p style={{ margin: '8px 0 0', color: '#5a6b82', fontSize: 12.5, lineHeight: 1.7 }}>{answer}</p>
                </details>
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
