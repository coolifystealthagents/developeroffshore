import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';

const baseUrl = 'https://developeroffshore.com';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  return {
    title: p?.title || 'Guide',
    description: p?.excerpt,
    alternates: p ? { canonical: `${baseUrl}/blog/${p.slug}` } : undefined,
    openGraph: p ? { title: p.title, description: p.excerpt, url: `${baseUrl}/blog/${p.slug}`, type: 'article' } : undefined,
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug) || blogPosts[0];
  const hasFullArticle = Boolean(p.sections?.length);
  const articleUrl = `${baseUrl}/blog/${p.slug}`;
  const faqSchema = p.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: p.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.excerpt,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    author: { '@type': 'Organization', name: site.brand, url: baseUrl },
    publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
    citation: p.sources?.map((source) => source.url),
    hasPart: [
      ...(p.sections?.map((section) => ({
        '@type': 'WebPageElement',
        name: section.heading,
        text: [...section.body, ...(section.bullets || [])].join(' '),
      })) || []),
      ...(p.modules?.map((module) => ({
        '@type': 'Table',
        name: module.title,
        about: module.rows.map((row) => `${row.label}: ${row.value}`).join(' | '),
      })) || []),
    ],
  };

  return (
    <>
      <Header />
      <main className='section'>
        <article className='container article-shell'>
          <JsonLd data={articleSchema} />
          {faqSchema ? <JsonLd data={faqSchema} /> : null}
          <p className='eyebrow'>{site.brand} guide</p>
          <h1>{p.title}</h1>
          <p className='lead'>{p.excerpt}</p>

          {hasFullArticle ? (
            <>
              <section className='card article-card'>
                <h2>Key takeaways</h2>
                <ul className='check-list'>
                  {p.keyTakeaways?.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              {p.sections?.map((section) => (
                <section className='card article-card' key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : null}
                </section>
              ))}

              {p.modules?.map((module) => (
                <section className='card article-card' key={module.title}>
                  <h2>{module.title}</h2>
                  <div className='score-table'>
                    {module.rows.map((row) => (
                      <div className='score-row' key={row.label}>
                        <strong>{row.label}</strong>
                        <span>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              {p.script ? (
                <section className='card article-card script-box'>
                  <h2>{p.script.title}</h2>
                  {p.script.lines.map((line) => <p key={line}>{line}</p>)}
                </section>
              ) : null}

              {p.faqs?.length ? (
                <section className='card article-card'>
                  <h2>FAQ</h2>
                  {p.faqs.map((faq) => (
                    <div key={faq.question} className='faq-block'>
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </section>
              ) : null}

              {p.sources?.length ? (
                <section className='card article-card sources-card'>
                  <h2>Sources</h2>
                  <ul>
                    {p.sources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url}>{source.name}</a>{source.note ? ` - ${source.note}` : ''}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </>
          ) : (
            <div className='card article-card'>
              <h2>The short answer</h2>
              <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
              <h2>What to prepare</h2>
              <ul>
                <li>Task examples and sample replies</li>
                <li>Tool access and permission rules</li>
                <li>Daily output target</li>
                <li>Escalation rules for anything sensitive</li>
              </ul>
              <h2>Questions to ask</h2>
              <ul>
                <li>Who screens the worker?</li>
                <li>Who checks quality?</li>
                <li>What happens if fit is poor?</li>
                <li>How are passwords and customer data handled?</li>
              </ul>
            </div>
          )}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
