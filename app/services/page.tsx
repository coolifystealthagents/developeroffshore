import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../components';
import { fleetServices } from '../fleet-data';
import { site } from '../data';

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
    {
      '@type': 'CollectionPage',
      '@id': `${url}#collection`,
      url,
      name: `Philippines-based developer services | ${site.brand}`,
      description,
      mainEntity: { '@id': `${url}#services` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
    },
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

const engagementChecks = [
  ['A bounded first outcome', 'Choose one route, feature, workflow, test lane, or maintenance problem that can be reviewed without handing over the whole roadmap.'],
  ['A named internal owner', 'Keep product priority, architecture, sensitive access, production release, and accepted risk with someone on your team.'],
  ['Evidence before expansion', 'Ask for a focused change, the checks that were run, known limitations, and a written handoff before adding scope.'],
] as const;

const faqs = [
  ['Which service should we start with?', 'Start with the service that matches the current bottleneck and the reviewer already available on your team. A frontend backlog points to React or Next.js support. Release uncertainty points to QA automation or DevOps release support.'],
  ['Can one developer cover several services?', 'Related work can be combined after the first lane is dependable. Begin with one primary responsibility so access, acceptance criteria, and review ownership remain clear.'],
  ['What do we need before an introductory conversation?', 'Bring a representative task, the current stack, expected working hours, required tools, and the person who will review the result. A complete job description is helpful but not required.'],
  ['Who makes architecture and production decisions?', 'Your internal owners do. A developer can investigate options, implement an approved direction, prepare release evidence, and document tradeoffs without becoming the unreviewed approver.'],
  ['How is quality evaluated?', 'Quality is tied to the chosen service and task. Useful evidence can include focused tests, browser or device checks, contract cases, preview links, pipeline output, reconciliation results, and a clear handoff.'],
] as const;

export default function Services() {
  return (
    <>
      <Header />
      <main id="main-content" className="services-index-v3">
        <JsonLd data={graph} />
        <section className="services-index-hero">
          <div className="container services-index-hero-grid">
            <div>
              <p className="eyebrow">Philippines-based software delivery</p>
              <h1>Choose a focused engineering lane, not a vague extra pair of hands.</h1>
              <p className="lead">Match a developer to the stack, evidence, schedule, and approval boundary your team can support. Each service below explains the inputs, work, controls, and first-week outcome.</p>
              <div className="services-index-actions"><a className="btn primary" href="#service-catalog">Explore services</a><a className="btn secondary" href="/contact-us">Discuss your backlog</a></div>
            </div>
            <figure>
              <img src="/illustrations/getillustrations/inkdex-saas-illustrations-svg/offshore-developer.svg" alt="Developer at a workstation planning a software delivery lane" width="1000" height="1000" />
              <figcaption>Scope, verify, review, and hand off work inside your existing engineering system.</figcaption>
            </figure>
          </div>
        </section>

        <section className="services-index-context" aria-labelledby="service-system-heading">
          <div className="container services-index-context-grid">
            <div><p className="eyebrow">A service system built for review</p><h2 id="service-system-heading">Capacity works when ownership remains visible.</h2></div>
            <div><p>Developer Offshore supports teams that have real software work and need a dependable contributor to move it. The model is not a transfer of product accountability. Your team defines priority and approval. The developer works in an agreed lane and returns inspectable evidence.</p><p>This structure makes the first assignment easier to evaluate. It also exposes missing requirements, unavailable reviewers, broad permissions, and unclear release authority before those gaps become delivery problems.</p></div>
          </div>
        </section>

        <section className="section services-catalog" id="service-catalog" aria-labelledby="catalog-heading">
          <div className="container">
            <div className="services-index-heading"><p className="eyebrow">Service catalog</p><h2 id="catalog-heading">Ten ways to add focused software capacity</h2><p>Select a destination to see the audience, inputs, deliverables, workflow, quality controls, boundaries, common questions, and a practical first week.</p></div>
            <div className="fleet-service-grid">
              {fleetServices.map((service) => (
                <a className="card fleet-service-card" href={`/services/${service.slug}`} key={service.slug}>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span>Best fit: {service.audience}</span>
                  <b>Review service details</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="services-index-operations" aria-labelledby="operating-heading">
          <div className="container services-index-operations-grid">
            <div><p className="eyebrow">Operating guidance</p><h2 id="operating-heading">Prepare the lane before adding capacity.</h2><p>A useful start does not require perfect documentation. It does require one result that can be inspected, access that can be explained, and a reviewer with time to respond.</p></div>
            <div className="services-index-checks">{engagementChecks.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
          </div>
        </section>

        <section className="services-index-decision" aria-labelledby="decision-heading">
          <div className="container services-index-decision-grid">
            <div><p className="eyebrow">Decision support</p><h2 id="decision-heading">Choose by bottleneck, not by the longest skills list.</h2></div>
            <div>
              <h3>If work is waiting for implementation</h3><p>Choose Next.js, React, Node.js, Shopify, WordPress, mobile, or data pipeline development according to the system where the backlog lives. Bring a representative ticket and current repository conventions.</p>
              <h3>If work is waiting for confidence</h3><p>Choose QA automation when release evidence is weak, or DevOps release support when pipelines, health checks, runbooks, and rollback preparation are the limiting lane.</p>
              <h3>If work is waiting because the system is fragile</h3><p>Choose legacy application maintenance for contained fixes, characterization tests, dependency work, and documentation that reduces uncertainty without disguising a rewrite as routine maintenance.</p>
            </div>
          </div>
        </section>

        <section className="services-index-faq" aria-labelledby="services-faq-heading">
          <div className="container"><p className="eyebrow">Questions before you choose</p><h2 id="services-faq-heading">Service planning FAQ</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
