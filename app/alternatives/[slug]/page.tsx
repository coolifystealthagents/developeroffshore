import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { alternativePages } from '../../alternatives-data';
import { articleThumbnail } from '../../article-thumbnails';
import { ArticleToc, type TocItem } from '../../article-toc';
import { compactSeoDescription, compactSeoTitle } from '../../seo-metadata';
import { Footer, Header, JsonLd } from '../../components';

const base = 'https://developeroffshore.com';
const published = '2026-07-29';
const headingId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function generateStaticParams() {
  return alternativePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = alternativePages.find((item) => item.slug === slug);
  if (!page) return {};
  const url = `${base}/alternatives/${slug}`;
  const image = articleThumbnail('alternatives', slug, page.title);
  return {
    title: { absolute: compactSeoTitle(page.title) },
    description: compactSeoDescription(page.description),
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: 'article',
      publishedTime: published,
      images: [{ url: `${base}${image.src}`, alt: image.alt }],
    },
  };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = alternativePages.find((item) => item.slug === slug);
  if (!page) notFound();

  const url = `${base}/alternatives/${slug}`;
  const image = articleThumbnail('alternatives', slug, page.title);
  const isTopic = Boolean(page.topicType);
  const faq = isTopic ? [
    { q: `What is the main alternative to a ${page.competitor}?`, a: 'The practical alternatives are a dedicated offshore role, a client-led pod, a managed provider, direct hiring, or a bounded specialist engagement. The right choice depends on who will own the outcome and whether the work is recurring.' },
    { q: 'How should an engineering team compare these models?', a: 'Use one scorecard for delivery ownership, required overlap, assessment evidence, security access, continuity, replacement, and offboarding. Record assumptions instead of treating a model label as a guarantee.' },
    { q: 'Should the client still run a technical assessment?', a: 'Yes. Use a role-specific interview or compensated exercise based on representative work, then keep client owners for code review and production access.' },
  ] : [
    { q: `Is Developer Offshore the same type of service as ${page.competitor}?`, a: `Not necessarily. ${page.competitor} describes a ${page.model}. Developer Offshore focuses on planning Philippines-based staffing around client-owned work, access, review, and escalation routines.` },
    { q: `What should I verify before choosing a ${page.competitor} alternative?`, a: 'Verify the worker location, assessment evidence, fees, replacement terms, IP language, required overlap, and day-to-day management ownership.' },
    { q: 'Should the client still run a technical interview?', a: 'Yes. A vendor screen is an input, not a substitute for a role-specific interview or paid exercise based on the work the person will handle.' },
  ];
  const toc: TocItem[] = [
    { id: 'quick-decision', label: 'Quick decision' },
    ...(isTopic ? [{ id: 'frame-the-decision', label: 'Frame the decision first', level: 2 as const }] : []),
    { id: 'how-models-differ', label: 'How the models differ' },
    { id: 'evaluation-scorecard', label: 'Evaluation scorecard' },
    { id: 'verification-checklist', label: 'Verification checklist' },
    { id: 'comparison-questions', label: 'Common questions' },
    ...faq.map((item) => ({ id: headingId(item.q), label: item.q, level: 3 as const })),
    { id: 'source-notes', label: 'Source notes' },
    { id: 'plan-next-step', label: 'Plan the next step' },
  ];
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: page.title, description: page.description, datePublished: published, dateModified: published, mainEntityOfPage: url, image: `${base}${image.src}`, author: { '@type': 'Organization', name: 'Developer Offshore' }, publisher: { '@type': 'Organization', name: 'Developer Offshore', url: base } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${base}/alternatives` }, { '@type': 'ListItem', position: 3, name: page.title, item: url }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ];

  return <>
    <Header />
    <main id="main-content" className="article-page">
      <article className="container article-shell comparison-detail">
        <JsonLd data={schema} />
        <header className="article-header">
          <p className="eyebrow">{isTopic ? `${page.topicType} model comparison` : 'Independent staffing comparison'}</p>
          <h1>{page.title}</h1>
          <p className="lead">{page.description}</p>
          <p className="article-date">Reviewed July 29, 2026 | Sources and requirements can change; verify them directly.</p>
          <img className="article-featured-image" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </header>

        <div className="article-layout">
          <aside className="article-sidebar" aria-label="Comparison navigation and resources">
            <ArticleToc items={toc} titleId="comparison-toc-title" />
            <section className="article-sidebar-meta" aria-labelledby="comparison-about-title">
              <h2 id="comparison-about-title">About this comparison</h2>
              <dl><div><dt>Publisher</dt><dd>Developer Offshore</dd></div><div><dt>Reviewed</dt><dd>July 29, 2026</dd></div><div><dt>Model</dt><dd>{page.competitor}</dd></div></dl>
            </section>
            <section className="article-sidebar-action" aria-labelledby="comparison-help-title">
              <h2 id="comparison-help-title">Define the role first</h2>
              <p>Bring the stack, first outcome, overlap window, and internal review owner to a focused staffing conversation.</p>
              <a href="/services/next-js-application-development">Related service</a>
              <a href="/contact-us">Contact Us</a>
            </section>
          </aside>

          <div className="article-content">
            <section className="article-panel takeaways" id="quick-decision">
              <h2>Quick decision</h2>
              <ul><li><strong>{page.competitor} may fit:</strong> {page.bestFor}.</li><li><strong>Consider Developer Offshore when:</strong> {page.alternativeAngle}.</li><li><strong>Do not skip:</strong> a role-specific assessment and written operating boundaries.</li></ul>
            </section>

            {isTopic && <section className="article-panel" id="frame-the-decision"><h2>Frame the decision first</h2><p>{page.decision}</p><p>{page.tradeoff}</p></section>}

            <section className="article-panel" id="how-models-differ">
              <h2>How the models differ</h2>
              <p>A {page.competitor} approach means {page.model}. That is a different buying decision from recruiting a Philippines-based developer into a client-led backlog.</p>
              <p className="table-cue">Scroll sideways to read every column on a small screen.</p>
              <div className="article-table-wrap" tabIndex={0} aria-label="Comparison of delivery models, horizontally scrollable">
                <table><caption>Operating model comparison</caption><thead><tr><th scope="col">Decision area</th><th scope="col">{page.competitor}</th><th scope="col">Philippines-based staffing</th></tr></thead><tbody>
                  <tr><th scope="row">Core choice</th><td>{page.model}.</td><td>Recruit named contributors for defined roles and client-owned engineering routines.</td></tr>
                  <tr><th scope="row">Management</th><td>Confirm included matching, support, and delivery responsibilities.</td><td>The client names owners for architecture, backlog priority, code review, and releases.</td></tr>
                  <tr><th scope="row">Location</th><td>Verify each proposed professional's location and working hours.</td><td>Recruit talent in the Philippines and agree the required overlap in writing.</td></tr>
                  <tr><th scope="row">Validation</th><td>Ask for role-specific screening evidence and run your own assessment.</td><td>Use a representative paid exercise and a client-owned technical interview.</td></tr>
                  <tr><th scope="row">Continuity</th><td>Check replacement, notice, knowledge-transfer, and offboarding terms.</td><td>Document handoffs, access removal, and replacement responsibilities before work begins.</td></tr>
                </tbody></table>
              </div>
            </section>

            <section className="article-panel" id="evaluation-scorecard"><h2>Evaluation scorecard</h2><p>Score each option against the same operating needs. A recognizable provider name does not resolve who owns technical decisions or how evidence reaches your reviewers.</p><ul><li>Delivery ownership and the first measurable outcome</li><li>Role-specific technical evidence and client review</li><li>Time-zone overlap, written handoffs, and escalation</li><li>Repository, data, secret, and production-access boundaries</li><li>Continuity, replacement, knowledge transfer, and offboarding</li></ul></section>

            <section className="article-panel" id="verification-checklist"><h2>Verification checklist</h2><p>Use current contract language and direct provider answers. Record each answer beside the person responsible for accepting it.</p><ul>{page.checks.map((check) => <li key={check}>{check}.</li>)}</ul></section>

            <section className="article-panel" id="comparison-questions"><h2>Common comparison questions</h2>{faq.map((item) => <div className="faq-block" key={item.q}><h3 id={headingId(item.q)}>{item.q}</h3><p>{item.a}</p></div>)}</section>

            <section className="article-panel sources-card" id="source-notes"><h2>Source notes</h2><p>This comparison uses the provider or reference page below to describe the alternative model. Public pages and commercial terms can change, so verify scope, worker location, pricing, and legal terms directly.</p><p><a href={page.sourceUrl} target="_blank" rel="noopener noreferrer">Review the primary source for {page.competitor}</a>.</p></section>

            <section className="article-rotation-banner article-rotation-banner-bottom" id="plan-next-step"><p className="eyebrow">Role planning</p><h2>Compare candidates against one written brief</h2><p>Define the first outcome, tools, evidence, review owner, access boundary, and overlap window before selecting a provider.</p><a className="btn" href="/contact-us">Contact Us</a></section>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </>;
}
