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
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: base,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: url,
        },
      ],
    },
  ],
};

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <JsonLd data={graph} />
        <section className="fleet-hero variant-3">
          <div className="container">
            <p className="eyebrow">Philippines-based services</p>
            <h1>Developer Offshore services</h1>
            <p className="lead">
              Choose a focused software development workflow, then define its tools, schedule, approvals, and handoffs.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-service-grid">
            {fleetServices.map((service, index) => (
              <a className="card fleet-service-card" href={`/services/${service.slug}`} key={service.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                <b>View service →</b>
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
