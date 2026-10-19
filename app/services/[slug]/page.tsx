import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;
const serviceImages: Record<string, string> = {
  'next-js-application-development': '/icons/getillustrations/sharpie-ui-design-icons-svg/frontend-development.svg',
  'react-frontend-development': '/icons/getillustrations/sharpie-ui-design-icons-svg/frontend-development.svg',
  'node-js-api-development': '/icons/getillustrations/sharpie-ui-design-icons-svg/backend-development.svg',
  'shopify-theme-development': '/icons/getillustrations/sharpie-ui-design-icons-svg/frontend-development.svg',
  'wordpress-engineering': '/icons/getillustrations/sharpie-ui-design-icons-svg/backend-systems.svg',
  'qa-automation-engineering': '/icons/getillustrations/sharpie-ui-design-icons-svg/qa-testing.svg',
  'devops-release-support': '/icons/getillustrations/sharpie-ui-design-icons-svg/devops-support.svg',
  'data-pipeline-development': '/icons/getillustrations/sharpie-ui-design-icons-svg/backend-systems.svg',
  'mobile-app-development': '/icons/getillustrations/sharpie-ui-design-icons-svg/frontend-development.svg',
  'legacy-application-maintenance': '/icons/getillustrations/sharpie-ui-design-icons-svg/delivery-tools.svg',
};

function articleHero(slug: string) {
  return serviceImages[slug] || '/illustrations/getillustrations/inkdex-saas-illustrations-svg/offshore-developer.svg';
}

export function generateStaticParams() { return fleetServices.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return { title: 'Not found' };
  const url = `${base}/services/${service.slug}`;
  return { title: service.title, description: service.desc, alternates: { canonical: url }, openGraph: { title: service.title, description: service.desc, url, type: 'website', images: [{ url: `${base}${articleHero(service.slug)}`, alt: `${service.title} workflow illustration` }] } };
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
  const graph = { '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.desc, url, provider: { '@type': 'Organization', name: site.brand, url: base }, areaServed: 'Worldwide' };

  return <><Header /><main id="main-content" className="service-v3"><JsonLd data={graph} />
    <section className="service-v3-hero"><div className="container service-v3-hero-grid"><div><p className="eyebrow">Philippines-based engineering support</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><a className="btn primary" href="/contact-us">Discuss this service</a></div><figure><img src={articleHero(service.slug)} alt={`${service.title} workflow illustration`} width="800" height="640" /></figure></div></section>
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
