import { CTA, Footer, Header, JsonLd } from '../../components';
import { services, site } from '../../data';

const baseUrl = 'https://developeroffshore.com';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const serviceUrl = service ? `${baseUrl}/services/${service.slug}` : undefined;

  return {
    title: service?.title || 'Service',
    description: service?.desc,
    alternates: serviceUrl ? { canonical: serviceUrl } : undefined,
    openGraph: service ? {
      title: service.title,
      description: service.desc,
      url: serviceUrl,
      type: 'website',
    } : undefined,
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const serviceUrl = `${baseUrl}/services/${service.slug}`;
  const breadcrumbId = `${serviceUrl}#breadcrumb`;
  const serviceId = `${serviceUrl}#service`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${serviceUrl}#webpage`,
        url: serviceUrl,
        name: service.title,
        description: service.desc,
        breadcrumb: { '@id': breadcrumbId },
        mainEntity: { '@id': serviceId },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: service.title,
        description: service.desc,
        serviceType: 'Offshore developer staffing support',
        provider: {
          '@type': 'Organization',
          '@id': `${baseUrl}/#organization`,
          name: site.brand,
          url: baseUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: service.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className='service-hero'>
          <div className='container two'>
            <div>
              <p className='eyebrow'>Offshore developer support</p>
              <h1>{service.title}</h1>
              <p className='lead'>{service.desc}</p>
              <a className='btn' href='/contact'>Talk through this role</a>
            </div>
            <div className='hero-card'>
              <img src={site.serviceImage} alt={`${service.title} offshore service team`} />
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container cards'>
            <div className='card'>
              <h3>Good first tasks</h3>
              <ul>
                <li>Tickets with a clear result and an example</li>
                <li>Bug fixes, tests, documentation, and small features</li>
                <li>Work your tech lead can review in a pull request</li>
              </ul>
            </div>
            <div className='card'>
              <h3>How to check the work</h3>
              <ul>
                <li>Daily written update</li>
                <li>Tests or screenshots with each pull request</li>
                <li>A weekly review with your tech lead</li>
              </ul>
            </div>
            <div className='card'>
              <h3>First-week setup</h3>
              <ul>
                <li>Limited repo and ticket access</li>
                <li>One sample ticket</li>
                <li>Clear merge and escalation rules</li>
              </ul>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
