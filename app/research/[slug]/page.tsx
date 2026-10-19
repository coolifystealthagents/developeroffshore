import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleToc } from '../../article-toc';
import { articleThumbnail } from '../../article-thumbnails';
import { Footer, Header, JsonLd } from '../../components';
import { researchPosts, type ResearchPost } from '../../fleet-data';
import { site } from '../../data';
import { compactSeoDescription, compactSeoTitle } from '../../seo-metadata';

const publicationDateFormatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const headingId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function formatPublicationDate(value: string) { return publicationDateFormatter.format(new Date(`${value}T00:00:00Z`)); }

export function generateStaticParams() { return researchPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const thumbnail = articleThumbnail('research', post.slug, post.title);
  const baseUrl = `https://${site.domain.toLowerCase()}`;
  const url = `${baseUrl}/research/${post.slug}`;
  return {
    title: { absolute: compactSeoTitle(post.title) },
    description: compactSeoDescription(post.excerpt),
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.excerpt, url, type: 'article', modifiedTime: post.updated ?? post.published, images: [{ url: `${baseUrl}${thumbnail.src}`, alt: thumbnail.alt }] },
  };
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: ResearchPost | undefined = researchPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const thumbnail = articleThumbnail('research', post.slug, post.title);
  const canonical = `https://${site.domain.toLowerCase()}/research/${post.slug}`;
  const organization={"@type":"Organization",name:site.brand,url:`https://${site.domain.toLowerCase()}`};
  const faqSchema = post.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } }));
  const toc = [
    { id: 'key-stats', label: 'Key stats' },
    { id: 'key-takeaways', label: 'Key takeaways' },
    ...post.sections.map((section) => ({ id: headingId(section.heading), label: section.heading })),
    { id: 'evidence-table', label: 'Evidence table' },
    { id: 'frequently-asked-questions', label: 'Frequently asked questions' },
    ...(post.sources?.length ? [{ id: 'sources', label: 'Sources' }] : []),
    { id: 'related-research', label: 'Related research' },
    ...(post.nextAction ? [{ id: post.nextAction.anchorId, label: post.nextAction.heading }] : []),
  ];
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'ResearchArticle', headline: post.title, datePublished: post.published, dateModified: post.updated ?? post.published, mainEntityOfPage: canonical, url: canonical, description: post.excerpt, author:organization,publisher:organization, citation: post.sources?.map((source) => source.url) },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqSchema },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Research', item: `https://${site.domain}/research` }, { '@type': 'ListItem', position: 2, name: post.title, item: canonical }] },
  ];

  return <><Header /><main id="main-content" className="article-page"><article className="container article-shell">
    <JsonLd data={structuredData} />
    <header className="article-header">
      <p className="eyebrow">{site.brand} research</p><h1>{post.title}</h1>
      <p className="article-date"><time dateTime={post.published}>{formatPublicationDate(post.published)}</time>{post.updated ? <> · Updated <time dateTime={post.updated}>{formatPublicationDate(post.updated)}</time></> : null} · Research report</p>
      <p className="lead">{post.excerpt}</p><p>Use this report with the <a href="/research">Research library</a> and related <a href="/blog">developer guides</a> to turn evidence into a bounded work brief.</p>
      <img className="article-featured-image" src={thumbnail.src} alt={thumbnail.alt} width={thumbnail.width} height={thumbnail.height} />
    </header>
    <div className="article-layout">
      <aside className="article-sidebar" aria-label="Research navigation and next action">
        <ArticleToc items={toc} titleId="research-toc-title" />
        <div className="article-sidebar-action"><h2>Apply the findings</h2><p>Turn this research into a bounded role, review owner, and first-week routine.</p><a href="/contact-us">Contact Us</a><a href="/blog">Related guides</a></div>
      </aside>
      <div className="article-content">
        <section className="article-panel" id="key-stats"><h2>Key stats</h2><ul>{post.keyStats.map((stat) => <li key={stat}>{stat}</li>)}</ul></section>
        <section className="article-panel takeaways" id="key-takeaways"><h2>Key takeaways</h2><ul>{post.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul></section>
        {post.sections.map((section) => <section className="article-panel" id={headingId(section.heading)} key={section.heading}><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        <section className="article-panel" id="evidence-table"><h2>Evidence table</h2><div className="article-table-wrap" tabIndex={0} aria-label="Evidence ownership table, horizontally scrollable"><table><caption className="sa-sr-only">Signals, inspection points, and accountable owners</caption><thead><tr><th scope="col">Signal</th><th scope="col">What to inspect</th><th scope="col">Owner</th></tr></thead><tbody><tr><th scope="row">Outcome</th><td>Acceptance evidence for the bounded task</td><td>Task reviewer</td></tr><tr><th scope="row">Control</th><td>Access, test, and approval boundary</td><td>Internal owner</td></tr><tr><th scope="row">Handoff</th><td>Open risks and next decision</td><td>Next owner</td></tr></tbody></table></div><blockquote>Good distributed work is observable at the handoff: the result, evidence, limitations, and next owner are explicit.</blockquote></section>
        <section className="article-panel" id="frequently-asked-questions"><h2>Frequently asked questions</h2>{post.faqs.map((faq) => <div className="faq-block" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>
        {post.sources?.length ? <section className="article-panel sources-card" id="sources"><h2>Sources</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noreferrer">{source.name}</a></li>)}</ol></section> : null}
        <section className="article-panel related-guides" id="related-research"><h2>Related research</h2><div>{post.related.slice(0, 3).map((link) => <a key={link.href} href={link.href}><strong>{link.title}</strong></a>)}</div></section>
        {post.nextAction ? <section className="article-panel" id={post.nextAction.anchorId} tabIndex={-1} data-route-next-action><h2>{post.nextAction.heading}</h2><p>{post.nextAction.body}</p><p><a className="btn primary" href={post.nextAction.href}>{post.nextAction.label}</a></p></section> : null}
      </div>
    </div>
  </article></main><Footer /></>;
}
