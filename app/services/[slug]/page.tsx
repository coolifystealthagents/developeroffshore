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

const laneTags: Record<string, readonly string[]> = {
  'next-js-application-development': ['Next.js', 'App Router', 'TypeScript'],
  'react-frontend-development': ['React', 'Design system', 'Accessibility'],
  'node-js-api-development': ['Node.js', 'API contracts', 'SQL'],
  'shopify-theme-development': ['Liquid', 'Theme preview', 'Commerce'],
  'wordpress-engineering': ['WordPress', 'Blocks', 'PHP'],
  'qa-automation-engineering': ['Playwright', 'CI', 'Test evidence'],
  'devops-release-support': ['CI/CD', 'Docker', 'Release'],
  'data-pipeline-development': ['Python', 'ETL', 'Validation'],
  'mobile-app-development': ['React Native', 'iOS', 'Android'],
  'legacy-application-maintenance': ['Tests', 'Upgrades', 'Docs'],
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

const rhythm = [
  ['Brief', 'Write the boundary', 'One representative ticket and the finish condition are written down.'],
  ['Build', 'Ship one slice', 'The developer works inside the approved repository and access boundary.'],
  ['Review', 'Inspect the evidence', 'Your tech lead inspects the diff, tests, and known limitations.'],
  ['Handoff', 'Record the decision', 'The change, decisions, and open questions are recorded for the team.'],
] as const;

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
      <main id="main-content" className="dx-page dx-service-page">
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
                <a className="dx-btn" href="/contact-us">Scope this lane <span aria-hidden="true">↗</span></a>
                <a className="dx-btn dx-btn--ghost" href="/services">Compare all services</a>
              </div>
              <div className="sp-hero-tags">
                {laneTags[service.slug]?.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <figure className="dx-detail-visual" data-tilt data-tilt-strength="4">
              <div className="dx-lane-thumb"><LaneVisual slug={service.slug} variant="panel" /></div>
              <figcaption>{service.outcomes[0]} · {service.outcomes[1]}</figcaption>
            </figure>
          </div>
        </section>

        <section className="sp-snapshot" aria-label="Lane snapshot">
          <div className="dx-container sp-snapshot-grid">
            <article><span>Best fit</span><strong>{service.audience}</strong></article>
            <article><span>First outcome</span><strong>{service.outcomes[0]}</strong></article>
            <article><span>Review owner</span><strong>Your tech lead keeps merge approval</strong></article>
            <article><span>Access</span><strong>Named accounts, scoped permissions</strong></article>
          </div>
        </section>

        <nav className="dx-service-nav" aria-label="On this page">
          <div className="dx-container">
            <a href="#overview">Overview</a>
            <a href="#lane">Inside the lane</a>
            <a href="#rhythm">Workflow</a>
            <a href="#controls">Controls</a>
            <a href="#questions">Questions</a>
            <a href="#related">Related</a>
            <a className="dx-service-nav-cta" href="/contact-us">Scope this lane ↗</a>
          </div>
        </nav>

        <section className="dx-container sp-intro" id="overview">
          <div data-reveal>
            <p className="dx-eyebrow">The operating lane</p>
            <h2>A bounded change with a named reviewer.</h2>
          </div>
          <div className="sp-intro-copy" data-reveal>
            <p>
              Backlogs become difficult to move when ownership, inputs, review time, and approval
              boundaries remain implicit. This lane makes those parts visible before capacity is added.
            </p>
            <p>
              The developer works inside your tools, records assumptions, and returns a reviewable
              change. Your team keeps product priority, architecture, sensitive access, and production
              approval.
            </p>
            <div className="sp-keep">
              <span>Product priority</span>
              <span>Architecture</span>
              <span>Sensitive access</span>
              <span>Production approval</span>
            </div>
          </div>
        </section>

        <section className="sp-lane" id="lane">
          <div className="dx-container">
            <div className="dx-head" data-reveal>
              <div><p className="dx-eyebrow">Inside the lane</p><h2>What the work actually includes.</h2></div>
              <p>Each part is written down before the first ticket so the review boundary is not left to interpretation.</p>
            </div>
            <div className="sp-lane-grid">
              <article className="sp-card" data-reveal>
                <span>Inputs</span>
                <h3>What we need to begin</h3>
                <ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article className="sp-card sp-card--dark" data-reveal>
                <span>Outcomes</span>
                <h3>What the first slice returns</h3>
                <ul>{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article className="sp-card" data-reveal>
                <span>Responsibilities</span>
                <h3>What the developer owns</h3>
                <ul>{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section className="sp-rhythm" id="rhythm">
          <div className="dx-container sp-rhythm-grid">
            <div data-reveal>
              <p className="dx-eyebrow dx-eyebrow--light">A practical workflow</p>
              <h2>One lane. One reviewer. Reviewable evidence.</h2>
              <p>
                The engagement begins with a bounded result and a representative task. The developer
                works in your approved tools, records assumptions, and prepares a reviewable change.
              </p>
              <ul className="dx-review-checks">
                {service.controls.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="sp-timeline" data-reveal>
              {rhythm.map(([label, title, body]) => (
                <article key={label}>
                  <span>{label}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dx-container sp-controls" id="controls">
          <div className="sp-controls-grid">
            <article className="sp-panel sp-panel--blue" data-reveal>
              <p className="dx-eyebrow">Quality controls</p>
              <h2>How the work is checked.</h2>
              <ul>{service.controls.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="sp-panel" data-reveal>
              <p className="dx-eyebrow">Your first week</p>
              <h2>A small batch, then a decision.</h2>
              <ol>{service.firstWeek.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, '0')}</b><span>{item}</span></li>)}</ol>
            </article>
          </div>
        </section>

        <section className="dx-container sp-boundaries">
          <div className="sp-boundary-card" data-reveal>
            <div>
              <p className="dx-eyebrow dx-eyebrow--light">Proof boundaries</p>
              <h2>What this lane does not promise.</h2>
              <p>A focused test or successful review is not a guarantee of reliability, security, or business outcomes.</p>
            </div>
            <ul>{service.boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="dx-container sp-faq" id="questions">
          <div className="sp-faq-grid">
            <div data-reveal>
              <p className="dx-eyebrow">Questions teams ask</p>
              <h2>Before you commit to the lane.</h2>
              <p>Bring a representative ticket and the reviewer's name. That is enough to have a useful first conversation.</p>
              <a className="dx-link" href="/contact-us">Talk through the lane ↗</a>
            </div>
            <div className="sp-faq-list">
              {service.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="dx-container sp-related" id="related">
          <div className="dx-head" data-reveal>
            <div><p className="dx-eyebrow">Adjacent capacity</p><h2>Related services.</h2></div>
            <p>Add a neighboring lane only after the first one is dependable.</p>
          </div>
          <div className="sp-related-grid">
            {related.map((item) => (
              <a className="sp-related-card" href={`/services/${item.slug}`} key={item.slug} data-reveal>
                <div className="sp-related-thumb"><LaneVisual slug={item.slug} /></div>
                <div><h3>{item.title}</h3><p>{item.desc}</p><span>Open the lane ↗</span></div>
              </a>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
