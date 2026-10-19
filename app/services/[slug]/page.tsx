import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;
type ServiceHero = { src: string; width: number; height: number; alt: string };
const serviceImages: Record<string, ServiceHero> = {
  'next-js-application-development': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/frontend-development.svg', width: 180, height: 180, alt: 'Browser interface and code illustration for Next.js application development' },
  'react-frontend-development': { src: '/illustrations/getillustrations/drawink-startup-illustrations-svg/developer-pilot-collaboration.svg', width: 240, height: 240, alt: 'Developer collaboration illustration for React interface delivery' },
  'node-js-api-development': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/backend-development.svg', width: 180, height: 180, alt: 'Connected backend services illustration for Node.js API development' },
  'shopify-theme-development': { src: '/visuals/launch-roadmap.svg', width: 1200, height: 760, alt: 'Controlled preview and launch roadmap for Shopify theme development' },
  'wordpress-engineering': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/backend-systems.svg', width: 180, height: 180, alt: 'Content and backend systems illustration for WordPress engineering' },
  'qa-automation-engineering': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/qa-testing.svg', width: 180, height: 180, alt: 'Quality assurance checklist illustration for automated testing' },
  'devops-release-support': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/devops-support.svg', width: 180, height: 180, alt: 'Deployment pipeline illustration for DevOps release support' },
  'data-pipeline-development': { src: '/visuals/operations-dashboard.svg', width: 1200, height: 760, alt: 'Traceable data operations dashboard with quality checks' },
  'mobile-app-development': { src: '/icons/getillustrations/sharpie-ui-design-icons-svg/delivery-tools.svg', width: 180, height: 180, alt: 'Device delivery tools illustration for mobile application development' },
  'legacy-application-maintenance': { src: '/illustrations/getillustrations/inkdex-saas-illustrations-svg/offshore-developer.svg', width: 1000, height: 1000, alt: 'Developer maintaining an established software application' },
};

function articleHero(slug: string) {
  return serviceImages[slug] || { src: '/illustrations/getillustrations/inkdex-saas-illustrations-svg/offshore-developer.svg', width: 1000, height: 1000, alt: 'Developer working in a defined software delivery lane' };
}

export function generateStaticParams() { return fleetServices.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return { title: 'Not found' };
  const url = `${base}/services/${service.slug}`;
  const hero = articleHero(service.slug);
  return { title: service.title, description: service.desc, alternates: { canonical: url }, openGraph: { title: service.title, description: service.desc, url, type: 'website', images: [{ url: `${base}${hero.src}`, alt: hero.alt, width: hero.width, height: hero.height }] } };
}

function ListSection({ title, items, className = '' }: { title: string; items: readonly string[]; className?: string }) {
  return <section className={`service-v3-section ${className}`}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const url = `${base}/services/${service.slug}`;
  const hero = articleHero(service.slug);
  const related = fleetServices.filter((item) => item.slug !== service.slug).slice(0, 3);
  const graph = { '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.desc, url, provider: { '@type': 'Organization', name: site.brand, url: base }, areaServed: 'Worldwide' };

  return <><Header /><main id="main-content" className="service-v3"><JsonLd data={graph} />
    <section className="service-v3-hero"><div className="container service-v3-hero-grid"><div><p className="eyebrow">Philippines-based engineering support</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><a className="btn primary" href="/contact-us">Discuss this service</a></div><figure><img src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} /></figure></div></section>
    <div className="container service-v3-body">
      <section className="service-v3-intro"><h2>Who this service is for</h2><p>{service.audience}</p><h3>The problem it addresses</h3><p>Backlogs become difficult to move when ownership, inputs, review time, and approval boundaries remain implicit. This service creates one focused lane where a developer can contribute useful work while your internal owner keeps product and technical authority.</p></section>
      <div className="service-v3-pair"><ListSection title="Inputs needed to begin" items={service.inputs} /><ListSection title="Outcomes and deliverables" items={service.outcomes} /></div>
      <ListSection title="Responsibilities and tasks" items={service.tasks} className="service-v3-wide" />
      <section className="service-v3-workflow"><h2>A practical workflow</h2><p>The engagement begins with a bounded result and a representative task. The developer works in your approved tools, records assumptions, and prepares a reviewable change. Your named reviewer checks the evidence and either accepts the result or requests a focused correction. Scope expands only after that lane is repeatable.</p></section>
      <div className="service-v3-pair"><ListSection title="Quality controls" items={service.controls} /><ListSection title="Your first week" items={service.firstWeek} /></div>
      <ListSection title="Proof boundaries" items={service.boundaries} className="service-v3-proof" />
      <section className="service-v3-faq"><h2>Questions teams ask</h2>{service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      <section className="service-v3-related"><h2>Related services</h2><div>{related.map((item) => <a key={item.slug} href={`/services/${item.slug}`}><strong>{item.title}</strong><span>{item.desc}</span></a>)}</div></section>
    </div><CTA /></main><Footer /></>;
}
