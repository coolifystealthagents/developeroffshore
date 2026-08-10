import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { blogPosts, site, type BlogPost } from '../../data';
import { articleThumbnail } from '../../article-thumbnails';

const baseUrl = 'https://developeroffshore.com';

const defaultBanners = [
  {
    label: 'Check the provider before you choose a candidate',
    href: '/blog/developer-offshore-staffing-provider-questions',
    note: 'Use one question set for screening, management, access, and replacement. Keep the answers beside the candidate scorecard.',
  },
  {
    label: 'Plan a reporting and QA role',
    href: '/services/reporting-and-qa',
    note: 'See the work a Philippines-based QA specialist can own. Your team keeps release decisions and accepted risk.',
  },
  {
    label: 'Talk through the role',
    href: '/contact-us',
    note: 'Share the stack, first outcome, schedule, and review owner. A staffing specialist can use that detail to discuss candidate fit.',
  },
] as const;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const url = `${baseUrl}/blog/${post.slug}`;
  const thumbnail = articleThumbnail('blog', post.slug, post.title);
  return {
    title: { absolute: `${post.title} | ${site.brand}` },
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: `${baseUrl}${thumbnail.src}`, alt: thumbnail.alt }],
    },
  };
}

function ArticleBanner({ index, post }: { index: number; post: BlogPost }) {
  const custom = post.relatedLinks?.[index === 2 ? post.relatedLinks.length - 1 : index];
  const banner = custom
    ? { label: custom.label, href: custom.href, note: custom.note }
    : defaultBanners[index];
  return (
    <aside className="article-banner" data-banner-position={index + 1} aria-label={`Article next step ${index + 1}`}>
      <span>Philippines developer staffing</span>
      <div>
        <strong>{banner.label}</strong>
        <p className="article-banner-note">{banner.note}</p>
      </div>
      <a href={banner.href}>Open guide</a>
    </aside>
  );
}

function AssessmentTable({ post }: { post: BlogPost }) {
  if (!post.table) return null;
  return (
    <section className="article-panel" aria-labelledby="assessment-table-title">
      <h2 id="assessment-table-title">{post.table.title}</h2>
      <p className="table-cue">Scroll sideways to read every column on a small screen.</p>
      <div className="article-table-wrap" tabIndex={0} aria-label={`${post.table.title}, horizontally scrollable`}>
        <table>
          <thead>
            <tr>{post.table.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr>
          </thead>
          <tbody>
            {post.table.rows.map((row) => (
              <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ScoreChart({ post }: { post: BlogPost }) {
  const chart = post.chart;
  if (!chart) return null;
  const barX = 188;
  const barWidth = 520;
  return (
    <figure className="article-figure" aria-labelledby="score-chart-title">
      <h2 id="score-chart-title">{chart.title}</h2>
      <div className="chart-legend" aria-label="Chart legend">
        {chart.categories.map((category) => <span key={category.label}><i style={{ background: category.color }} />{category.label}</span>)}
      </div>
      <div className="svg-scroll" tabIndex={0} aria-label={`${chart.title}, horizontally scrollable`}>
        <svg className="score-chart" viewBox="0 0 760 390" role="img" aria-labelledby="score-chart-svg-title score-chart-svg-desc">
          <title id="score-chart-svg-title">{chart.title}</title>
          <desc id="score-chart-svg-desc">Stacked horizontal bars show {chart.categories.map((category) => category.label).join(', ')} for each review point. Each bar totals 100 percent.</desc>
          {[0, 25, 50, 75, 100].map((tick) => (
            <g key={tick}>
              <line x1={barX + (tick / 100) * barWidth} x2={barX + (tick / 100) * barWidth} y1="36" y2="342" stroke="#cbd5e1" strokeDasharray="4 6" />
              <text x={barX + (tick / 100) * barWidth} y="24" textAnchor="middle">{tick}%</text>
            </g>
          ))}
          {chart.rows.map((row, rowIndex) => {
            let running = 0;
            const y = 58 + rowIndex * 60;
            return (
              <g key={row.label}>
                <text x="8" y={y + 24} className="role-label">{row.label}</text>
                {row.values.map((value, valueIndex) => {
                  const x = barX + (running / 100) * barWidth;
                  const width = (value / 100) * barWidth;
                  running += value;
                  return (
                    <g key={`${row.label}-${chart.categories[valueIndex].label}`}>
                      <rect x={x} y={y} width={width} height="38" rx="3" fill={chart.categories[valueIndex].color} />
                      <text x={x + width / 2} y={y + 25} textAnchor="middle" className="bar-value">{value}%</text>
                    </g>
                  );
                })}
              </g>
            );
          })}
          <text x="448" y="374" textAnchor="middle" className="axis-label">{chart.axisLabel ?? 'Share of total candidate score (percentage points)'}</text>
        </svg>
      </div>
      <figcaption>{chart.method}</figcaption>
    </figure>
  );
}

function WorkSampleGraphic({ post }: { post: BlogPost }) {
  const graphic = post.graphic;
  if (!graphic) return null;
  return (
    <figure className="article-figure" aria-labelledby="work-sample-graphic-title">
      <h2 id="work-sample-graphic-title">{graphic.title}</h2>
      <div className="svg-scroll" tabIndex={0} aria-label={`${graphic.title}, horizontally scrollable`}>
        <svg className="process-graphic" viewBox="0 0 920 220" role="img" aria-labelledby="process-title process-desc">
          <title id="process-title">{graphic.title}</title>
          <desc id="process-desc">A five-step path moves through {graphic.steps.map((step) => step.title).join(', ')}.</desc>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#0f8f73" />
            </marker>
          </defs>
          {graphic.steps.map((step, index) => {
            const x = 8 + index * 182;
            return (
              <g key={step.title}>
                {index < graphic.steps.length - 1 ? <line x1={x + 156} y1="86" x2={x + 178} y2="86" stroke="#0f8f73" strokeWidth="3" markerEnd="url(#arrow)" /> : null}
                <rect x={x} y="26" width="156" height="122" rx="16" fill={index % 2 ? '#eff6ff' : '#ecfdf5'} stroke={index % 2 ? '#2563eb' : '#0f8f73'} strokeWidth="2" />
                <text x={x + 78} y="58" textAnchor="middle" className="step-title">{step.title}</text>
                <text x={x + 78} y="88" textAnchor="middle" className="step-number">{index + 1}</text>
              </g>
            );
          })}
          <text x="460" y="194" textAnchor="middle" className="axis-label">{graphic.axisLabel ?? 'One consistent path for every candidate in the same opening'}</text>
        </svg>
      </div>
      <ol className="graphic-notes">
        {graphic.steps.map((step) => <li key={step.title}><strong>{step.title}:</strong> {step.note}</li>)}
      </ol>
    </figure>
  );
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  const thumbnail = articleThumbnail('blog', post.slug, post.title);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@type': 'Organization', name: site.brand, url: baseUrl },
    publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
    image: `${baseUrl}${thumbnail.src}`,
    citation: post.sources?.map((source) => source.url),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
    ],
  };
  const faqSchema = post.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;
  const fullArticle = Boolean(post.sections?.length);
  const firstSections = post.sections?.slice(0, 2) ?? [];
  const roleSections = post.sections?.slice(2, 4) ?? [];
  const securitySections = post.sections?.slice(4, 6) ?? [];
  const finalSections = post.sections?.slice(6) ?? [];

  const renderSections = (sections: NonNullable<BlogPost['sections']>) => sections.map((section) => (
    <section className="article-panel" key={section.heading}>
      <h2>{section.heading}</h2>
      {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets?.length ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
    </section>
  ));

  return (
    <>
      <Header showScope={false} />
      <main className="article-page">
        <article className="container article-shell" data-article-revision={post.revision || 'legacy-article'}>
          <JsonLd data={articleSchema} />
          <JsonLd data={breadcrumbSchema} />
          {faqSchema ? <JsonLd data={faqSchema} /> : null}
          <header className="article-header">
            <p className="eyebrow">{site.brand} guide</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p><div className='blog-standards-strip' aria-label='Article standards'><span>Source-backed guidance</span><span>Contextual internal links</span><span>Top, middle, and bottom CTAs</span></div>
            <img className="article-featured-image" src={thumbnail.src} alt={thumbnail.alt}/>
            {post.datePublished ? <p className="article-date">Published {post.datePublished}</p> : null}
          </header>

          {fullArticle ? (
            <>
              <section className="article-panel takeaways">
                <h2>{post.title}</h2>
                <ul>{post.keyTakeaways?.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
              <ArticleBanner index={0} post={post} />
              {renderSections(firstSections)}
              <AssessmentTable post={post} />
              {renderSections(roleSections)}
              <ScoreChart post={post} />
              <ArticleBanner index={1} post={post} />
              {renderSections(securitySections)}
              {post.quote ? (
                <figure className="expert-quote">
                  <blockquote>“{post.quote.text}”</blockquote>
                  <figcaption>
                    <strong>{post.quote.by}</strong>, {post.quote.role}. <a href={post.quote.sourceUrl}>Read the source</a>.
                  </figcaption>
                </figure>
              ) : null}
              {renderSections(finalSections)}
              <WorkSampleGraphic post={post} />
              {post.modules?.map((module) => (
                <section className="article-panel" key={module.title}>
                  <h2>{module.title}</h2>
                  <div className="score-table">{module.rows.map((row) => <div className="score-row" key={row.label}><strong>{row.label}</strong><span>{row.value}</span></div>)}</div>
                </section>
              ))}
              {post.script ? <section className="article-panel script-box"><h2>{post.script.title}</h2>{post.script.lines.map((line) => <blockquote key={line}>{line}</blockquote>)}</section> : null}
              {post.relatedLinks?.length ? (
                <section className="article-panel related-guides">
                  <h2>Use the assessment in your hiring plan</h2>
                  <div>{post.relatedLinks.map((link) => <a href={link.href} key={link.href}><strong>{link.label}</strong></a>)}</div>
                </section>
              ) : null}
              {post.faqs?.length ? (
                <section className="article-panel">
                  <h2>Questions about assessing Philippine developers</h2>
                  {post.faqs.map((faq) => <div className="faq-block" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
                </section>
              ) : null}
              <ArticleBanner index={2} post={post} />
              <aside className='article-rotation-banner article-rotation-banner-middle' data-article-banner='true'><p className='eyebrow'>Midpoint planning check</p><h2>Compare providers against one written workflow</h2><p className='article-banner-note'>Use one task lane, one reviewer, and one quality check so each provider conversation is easier to judge.</p><a className='btn' href='/contact-us'>Contact Us</a></aside>{post.sources?.length ? (
                <section className="article-panel sources-card">
                  <h2>Sources</h2>
                  <ol>{post.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a>{source.note ? `: ${source.note}` : ''}</li>)}</ol>
                </section>
              ) : null}
            </>
          ) : (
            <>
              <section className="article-panel">
                <h2>Start with a defined role</h2>
                <p>Write down the work, tools, schedule, and expected result before candidate matching begins. Keep business judgment and final technical approval with a named manager.</p>
                <h2>Use real examples safely</h2>
                <p>Use redacted examples and a sandbox to explain what good work looks like. Review the first output together and update the written process when an exception appears.</p>
                <h2>Limit access and name the handoff owner</h2>
                <p>Give only the access needed for the role and use named accounts where possible. Write down which questions must be escalated and who receives them.</p>
              </section>
              <ArticleBanner index={0} post={post} />
              <ArticleBanner index={1} post={post} />
              <ArticleBanner index={2} post={post} />
            </>
          )}
        <p className='article-source-note'><a href="https://www.ilo.org/global/topics/non-standard-employment/WCMS_534825/lang--en/index.htm" target="_blank" rel="noopener noreferrer">International Labour Organization guidance on remote work arrangements</a> reinforces why remote role briefs should document expectations, communication rhythms, and accountable handoffs.</p>
        </article>
      </main>
      <Footer showScope={false} />
    </>
  );
}
