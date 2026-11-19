import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';
import { LaneVisual } from '../../lane-visual';

const base = `https://${site.domain.toLowerCase()}`;

const serviceImages: Record<string, { src: string; alt: string }> = {
  'next-js-application-development': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/frontend-development.svg', alt: 'Browser interface and code illustration for Next.js application development' },
  'react-frontend-development': { src: '/illustrations/getillustrations/drawink-startup-illustrations-svg/developer-pilot-collaboration.svg', alt: 'Developer collaboration illustration for React interface delivery' },
  'node-js-api-development': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/backend-development.svg', alt: 'Connected backend services illustration for Node.js API development' },
  'shopify-theme-development': { src: '/visuals/launch-roadmap.svg', alt: 'Controlled preview and launch roadmap for Shopify theme development' },
  'wordpress-engineering': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/backend-systems.svg', alt: 'Content and backend systems illustration for WordPress engineering' },
  'qa-automation-engineering': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/qa-testing.svg', alt: 'Quality assurance checklist illustration for automated testing' },
  'devops-release-support': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/devops-support.svg', alt: 'Deployment pipeline illustration for DevOps release support' },
  'data-pipeline-development': { src: '/visuals/operations-dashboard.svg', alt: 'Traceable data operations dashboard with quality checks' },
  'mobile-app-development': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/delivery-tools.svg', alt: 'Device delivery tools illustration for mobile application development' },
  'legacy-application-maintenance': { src: '/illustrations/getillustrations/inkdex-saas-illustrations-svg/offshore-developer.svg', alt: 'Developer maintaining an established software application' },
};

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return { title: 'Not found' };
  const url = `${base}/services/${service.slug}`;
  const image = serviceImages[service.slug] || serviceImages['next-js-application-development'];
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.desc, url, type: 'website', images: [{ url: `${base}${image.src}`, alt: image.alt }] },
  };
}

function ListSection({ title, items, className = '' }: { title: string; items: readonly string[]; className?: string }) {
  return <section className={`service-v3-section ${className}`}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const url = `${base}/services/${service.slug}`;
  const related = fleetServices.filter((item) => item.slug !== service.slug).slice(0, 3);
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.desc,
    url,
    provider: { '@type': 'Organization', name: site.brand, url: base },
    areaServed: 'Worldwide',
  };

  return (
    <>
      <Header />
      <main id="main-content" className="dx-page">
        <JsonLd data={graph} />
        <section className="dx-detail-hero">
          <div className="dx-pagehero-bg" aria-hidden="true" />
          <div className="dx-container dx-detail-grid">
            <div className="dx-detail-copy">
              <div className="dx-breadcrumb"><a href="/">Home</a><span>/</span><a href="/services">Services</a><span>/</span><span>{service.title}</span></div>
              <p className="dx-eyebrow">Philippines-based engineering support</p>
              <h1>{service.title}</h1>
              <p className="dx-hero-lead">{service.desc}</p>
              <div className="dx-actions">
                <a className="dx-btn" href="/contact-us">Scope this lane ↗</a>
                <a className="dx-btn dx-btn--ghost" href="/services">Compare all services</a>
              </div>
            </div>
            <figure className="dx-detail-visual" data-tilt data-tilt-strength="4">
              <span className="dx-lane-thumb"><LaneVisual slug={service.slug} /></span>
              <figcaption>{service.outcomes[0]} · {service.outcomes[1]}</figcaption>
            </figure>
          </div>
        </section>

        <div className="dx-detail-body">
          <div className="dx-container">
            <section className="service-v3-intro">
              <p className="dx-eyebrow">Who this lane is for</p>
              <h2>A bounded change with a named reviewer.</h2>
              <p>{service.audience}</p>
              <h3>The problem it addresses</h3>
              <p>
                Backlogs become difficult to move when ownership, inputs, review time, and approval
                boundaries remain implicit. This lane makes those parts visible before capacity is added.
              </p>
            </section>

            <div className="service-v3-pair">
              <ListSection title="Inputs needed to begin" items={service.inputs} />
              <ListSection title="Outcomes and deliverables" items={service.outcomes} />
            </div>

            <ListSection title="Responsibilities and tasks" items={service.tasks} className="service-v3-wide" />

            <section className="service-v3-workflow">
              <p className="dx-eyebrow">A practical workflow</p>
              <h2>One lane. One reviewer. Reviewable evidence.</h2>
              <p>
                The engagement begins with a bounded result and a representative task. The developer
                works in your approved tools, records assumptions, and prepares a reviewable change.
                Your team keeps architecture, product priority, and production approval.
              </p>
            </section>

            <div className="service-v3-pair">
              <ListSection title="Quality controls" items={service.controls} />
              <ListSection title="Your first week" items={service.firstWeek} />
            </div>

            <ListSection title="Proof boundaries" items={service.boundaries} className="service-v3-proof" />

            <section className="service-v3-faq">
              <p className="dx-eyebrow">Questions teams ask</p>
              <h2>Before you commit to the lane</h2>
              {service.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>

            <section className="service-v3-related">
              <p className="dx-eyebrow">Adjacent capacity</p>
              <h2>Related services</h2>
              <div>
                {related.map((item) => (
                  <a key={item.slug} href={`/services/${item.slug}`}>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
