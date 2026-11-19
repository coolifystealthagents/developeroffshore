import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { Header, Footer, JsonLd, SectionHead, Ticker } from './components';
import { fleetServices } from './fleet-data';
import { blogPosts, site, stats } from './data';
import { compareNewestBatchFirst } from './fleet-data';
import { articleThumbnail } from './article-thumbnails';
import { LaneVisual } from './lane-visual';

export const metadata: Metadata = {
  title: { absolute: 'Offshore Developers in the Philippines | Developer Offshore' },
  description: 'Plan Philippines-based developer roles around your backlog, stack, access controls, code review, and delivery schedule.',
  alternates: { canonical: 'https://developeroffshore.com/' },
};

const tags: Record<string, readonly string[]> = {
  'next-js-application-development': ['Next.js', 'App Router', 'TypeScript'],
  'react-frontend-development': ['React', 'Design system', 'A11y'],
  'node-js-api-development': ['Node.js', 'APIs', 'SQL'],
  'shopify-theme-development': ['Liquid', 'Storefront', 'Commerce'],
  'wordpress-engineering': ['WordPress', 'Blocks', 'PHP'],
  'qa-automation-engineering': ['Playwright', 'CI', 'Test evidence'],
  'devops-release-support': ['CI/CD', 'Docker', 'Release'],
  'data-pipeline-development': ['Python', 'ETL', 'Validation'],
  'mobile-app-development': ['React Native', 'iOS', 'Android'],
  'legacy-application-maintenance': ['Tests', 'Upgrades', 'Docs'],
};

const ticker = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS', 'Playwright', 'Shopify', 'WordPress'];

const steps = [
  { label: 'Brief', title: 'Define the lane', body: 'Name one backlog area, a representative ticket, the stack, and the person who will review the pull request.' },
  { label: 'Match', title: 'Meet the shortlist', body: 'Review developers against the same work sample, communication needs, and time-zone overlap your team actually has.' },
  { label: 'Pilot', title: 'Run a paid pilot', body: 'Start with limited access and five to ten real tickets. Inspect the changes, tests, and review notes before expanding.' },
  { label: 'Expand', title: 'Decide from evidence', body: 'Keep the same reviewer and weekly scorecard. Add scope only when the first lane is dependable.' },
];

const reviewChecks = [
  'Pull request size kept reviewable',
  'Tests and checks attached to the change',
  'Known limitations written down',
  'Production approval stays with your team',
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: 'https://developeroffshore.com',
  };
  const lanes = fleetServices.slice(0, 8);
  const posts = [...blogPosts]
    .sort((a, b) => compareNewestBatchFirst(a, b, a.datePublished ?? '', b.datePublished ?? ''))
    .slice(0, 3);

  return (
    <>
      <Header />
      <main id="main-content" className="dx-home">
        <JsonLd data={schema} />

        <section className="dx-hero">
          <div className="dx-hero-bg" aria-hidden="true"><span className="dx-hero-grid" /></div>
          <div className="dx-container dx-hero-inner">
            <div className="dx-hero-copy">
              <p className="dx-eyebrow">Philippines-based engineering capacity</p>
              <h1>
                Add offshore developers without lowering your{' '}
                <span className="dx-accent">code standards.</span>
              </h1>
              <p className="dx-hero-lead">
                Hire for the stack and tickets you have now. Keep code approval with your tech lead,
                start with limited access, and see the work before you add more scope.
              </p>
              <div className="dx-actions">
                <a className="dx-btn" href="/contact-us" id="cta-page-action-1">Scope a developer <span aria-hidden="true">↗</span></a>
                <a className="dx-btn dx-btn--ghost" href="#lanes" id="cta-page-action-2">See the delivery lanes</a>
              </div>
              <ul className="dx-trust">
                <li>Stack-matched screening</li>
                <li>Your tech lead keeps merge approval</li>
                <li>Documented handover</li>
              </ul>
            </div>

            <div className="dx-scene" aria-label="A code review console, CI pipeline, and deployment cube">
              <div className="dx-scene-ring" aria-hidden="true" />
              <div className="dx-cube" data-depth="7" aria-hidden="true">
                <span>Build</span><span>Test</span><span>Review</span><span>Merge</span><span>Deploy</span><span>Verify</span>
              </div>

              <div className="dx-console" data-tilt data-tilt-strength="3">
                <div className="dx-console-bar">
                  <i /><i /><i />
                  <span className="dx-console-file">app/(delivery)/review/page.tsx</span>
                  <span className="dx-console-tag">PR #248</span>
                </div>
                <div className="dx-code" aria-hidden="true">
                  <span className="dx-scan" />
                  <div className="dx-code-line"><b>1</b><span><span className="tok-com">// bounded change, named reviewer</span></span></div>
                  <div className="dx-code-line"><b>2</b><span><span className="tok-key">export default</span> <span className="tok-key">function</span> <span className="tok-fn">ReviewLane</span>() {'{'}</span></div>
                  <div className="dx-code-line"><b>3</b><span>{'  '}<span className="tok-key">const</span> scope = <span className="tok-fn">useScope</span>(<span className="tok-str">'checkout'</span>);</span></div>
                  <div className="dx-code-line"><b>4</b><span>{'  '}<span className="tok-key">const</span> checks = <span className="tok-fn">useChecks</span>({'{'} coverage: <span className="tok-num">0.92</span> {'}'});</span></div>
                  <div className="dx-code-line"><b>5</b><span>{'  '}</span></div>
                  <div className="dx-code-line"><b>6</b><span>{'  '}<span className="tok-key">return</span> (</span></div>
                  <div className="dx-code-line"><b>7</b><span>{'    '}&lt;<span className="tok-fn">ChangeSet</span> scope={'{'}scope{'}'} checks={'{'}checks{'}'} /&gt;</span></div>
                  <div className="dx-code-line"><b>8</b><span>{'  '});</span></div>
                  <div className="dx-code-line"><b>9</b><span>{'}'}<span className="dx-code-cursor" /></span></div>
                </div>
                <div className="dx-console-foot">
                  <span>✓ 42 checks passed</span>
                  <span>reviewer: your team</span>
                  <span>access: scoped</span>
                </div>
              </div>

              <div className="dx-float dx-float--review" data-depth="16">
                <div className="dx-float-label"><span>Review</span><strong>approved</strong></div>
                <h4>Bounded pull request</h4>
                <div className="dx-check-row">Diff stays reviewable</div>
                <div className="dx-check-row">Tests attached</div>
                <div className="dx-check-row">Rollback noted</div>
              </div>

              <div className="dx-float dx-float--ci" data-depth="20">
                <div className="dx-float-label"><span>Pipeline</span><strong>passing</strong></div>
                <div className="dx-pipe"><span /><span /><span /><span /><span /></div>
                <p>build · test · preview · review</p>
              </div>
            </div>
          </div>
          <Ticker items={ticker} />
        </section>

        <section className="dx-section dx-section--white" style={{ paddingTop: 34 }}>
          <div className="dx-container">
            <div className="dx-proof" data-reveal>
              {stats.map((stat) => (
                <article key={stat.label}>
                  <b>{stat.value}</b>
                  <span>{stat.label} · {stat.note}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dx-section">
          <div className="dx-container">
            <div className="dx-statement">
              <h2 data-reveal>Start small enough to <em>review the work</em> properly.</h2>
              <div className="dx-statement-copy" data-reveal style={{ '--dx-delay': '90ms' } as CSSProperties}>
                <p>
                  A developer is not a black box. The first engagement should produce a change you
                  can inspect, checks you can rerun, and a handoff your team can keep.
                </p>
                <p>
                  We help you define one delivery lane, match a Philippines-based developer to the
                  stack, and keep product priority, sensitive access, and production approval inside
                  your team.
                </p>
                <div className="dx-pillars">
                  <article className="dx-pillar"><span>Review</span><strong>Reviewable by default</strong><p>Small pull requests, test evidence, and written limits.</p></article>
                  <article className="dx-pillar"><span>Control</span><strong>Your approval boundary</strong><p>Your tech lead owns merge, release, and accepted risk.</p></article>
                  <article className="dx-pillar"><span>Handoff</span><strong>Evidence, not activity</strong><p>Ticket status, checks, and decisions stay visible.</p></article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dx-section dx-section--white" id="lanes">
          <div className="dx-container">
            <SectionHead
              eyebrow="Delivery lanes"
              title={<>Choose the work your team needs help with.</>}
              copy="Each lane has a defined stack, review boundary, and first-week outcome. Start with the bottleneck, not the longest skills list."
            />
            <div className="dx-lanes">
              {lanes.map((service, index) => (
                <a
                  className="dx-lane-card"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  data-tilt
                  data-tilt-strength="3"
                  data-reveal
                  style={{ '--dx-delay': `${(index % 2) * 60}ms` } as CSSProperties}
                >
                  <div className="dx-lane-thumb"><LaneVisual slug={service.slug} /></div>
                  <div className="dx-lane-copy">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <span className="dx-tags">{tags[service.slug]?.map((tag) => <span key={tag}>{tag}</span>)}</span>
                  </div>
                  <span className="dx-lane-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="dx-lane-tools">
              <span>10 lanes · one recruiting and employment team</span>
              <a href="/services">Compare every service ↗</a>
            </div>
          </div>
        </section>

        <section className="dx-review">
          <div className="dx-container dx-review-grid">
            <div className="dx-review-copy" data-reveal>
              <p className="dx-eyebrow dx-eyebrow--light">The review is the product</p>
              <h2>Good offshore work should survive a closer look.</h2>
              <p>
                A polished demo is not enough. The useful evidence is the diff, the tests, the
                notes about what changed, and the person on your team who approved it.
              </p>
              <ul className="dx-review-checks">
                {reviewChecks.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="dx-diff" data-reveal style={{ '--dx-delay': '100ms' } as CSSProperties}>
              <div className="dx-diff-bar">
                <strong>checkout/retry-policy.ts</strong>
                <span>+18 −6</span>
              </div>
              <div className="dx-diff-code">
                <div className="dx-diff-line"><b>12</b><span>export async function submitOrder(input: OrderInput) {'{'}</span></div>
                <div className="dx-diff-line is-remove"><b>13</b><span>-  return post('/orders', input);</span></div>
                <div className="dx-diff-line is-add"><b>13</b><span>+  const result = await post('/orders', input);</span></div>
                <div className="dx-diff-line is-add"><b>14</b><span>+  if (!result.ok) await queue.retry(result);</span></div>
                <div className="dx-diff-line is-add"><b>15</b><span>+  return result;</span></div>
                <div className="dx-diff-line"><b>16</b><span>{'}'}</span></div>
                <div className="dx-diff-line"><b>17</b><span /></div>
                <div className="dx-diff-line"><b>18</b><span className="tok-com">// test: retry path, duplicate guard, timeout</span></div>
              </div>
              <div className="dx-review-note">
                <span>✓</span>
                <p><strong>Reviewer note</strong>Retry path covered. Merge approved by client tech lead. Production access unchanged.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="dx-section dx-section--white">
          <div className="dx-container">
            <SectionHead
              eyebrow="First two weeks"
              title={<>Give the developer real tickets, then review the result.</>}
              copy="A short pilot is more useful than a long interview loop. Keep the lane bounded and the review owner named."
            />
            <div className="dx-process">
              {steps.map((step, index) => (
                <article className="dx-step" key={step.label} data-reveal style={{ '--dx-delay': `${index * 70}ms` } as CSSProperties}>
                  <span className="dx-step-dot" aria-hidden="true">{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dx-section dx-section--dark">
          <div className="dx-container dx-team">
            <figure className="dx-team-media" data-tilt data-tilt-strength="2">
              <img src="/images/stealth-agents-team-bacolod.jpg" alt="StealthAgents team outside the Bacolod City Government Center" loading="lazy" />
              <figcaption>StealthAgents team · Bacolod City, Philippines</figcaption>
            </figure>
            <div className="dx-team-copy" data-reveal>
              <p className="dx-eyebrow dx-eyebrow--light">The team behind the pod</p>
              <h2>Recruiting, employment, and support in one place.</h2>
              <p>
                StealthAgents recruits, employs, and supports the Philippines-based professionals
                who deliver this work. Developer Offshore helps your team define the lane and keep
                the technical standard.
              </p>
              <p>
                You retain product direction, architecture, sensitive access, and production
                approval. The developer works inside your tools and returns reviewable evidence.
              </p>
              <a className="dx-link dx-link--light" href="/contact-us">Talk through the lane ↗</a>
            </div>
          </div>
        </section>

        <section className="dx-reviews" aria-label="Client reviews">
          <div className="dx-container">
            <div className="sa-testimonials">
              <div className="sa-testimonial-heading">
                <h2>What clients say about the team</h2>
                <span>Verified source</span>
              </div>
              <div className="sa-testimonial-viewport">
                <div className="sa-testimonial-track">
                  {[
                    { q: 'They understood the stack before the first call. Our tech lead could review the pilot without translating the brief.', n: 'Engineering lead, SaaS team' },
                    { q: 'The pilot produced a real change, not a slide deck. That made the decision much easier.', n: 'CTO, commerce platform' },
                    { q: 'Weekly notes and clear pull requests kept the work inside our review process.', n: 'Product director, services company' },
                    { q: 'We kept architecture and release approval. The developer added capacity without changing how we ship.', n: 'Founder, B2B software' },
                  ].map((review, index) => (
                    <article className="sa-testimonial-card" key={review.n} style={{ '--review-index': index } as CSSProperties}>
                      <div className="sa-testimonial-stars" aria-hidden="true">★★★★★</div>
                      <blockquote>“{review.q}”</blockquote>
                      <p>{review.n}</p>
                    </article>
                  ))}
                </div>
              </div>
              <p className="sa-testimonial-source">
                Clearly labeled client feedback from the StealthAgents network. Individual results vary by lane, reviewer, and access.
              </p>
            </div>
          </div>
        </section>

        <section className="dx-section">
          <div className="dx-container">
            <SectionHead
              eyebrow="Field notes"
              title={<>Read before you write the brief.</>}
              copy="Practical guides for scoping, reviewing, and handing off offshore development work."
            />
            <div className="dx-posts">
              {posts.map((post, index) => {
                const thumbnail = articleThumbnail('blog', post.slug, post.title);
                return (
                  <a
                    className="dx-post-card"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    data-reveal
                    style={{ '--dx-delay': `${index * 60}ms` } as CSSProperties}
                  >
                    <div className="dx-post-media">
                      <img src={thumbnail.src} alt={thumbnail.alt} loading="lazy" />
                      <span>{post.minutes ?? 7} min read</span>
                    </div>
                    <div className="dx-post-body">
                      <span className="dx-post-meta">{post.datePublished ? new Date(`${post.datePublished}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : 'Developer guide'}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="dx-link">Read the guide ↗</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="dx-cta">
          <div className="dx-container dx-cta-inner">
            <div data-reveal>
              <p className="dx-eyebrow">A bounded first sprint</p>
              <h2>Have a backlog but not enough developers?</h2>
              <p>Bring one lane, a representative ticket, and the review rules your team already uses. We will turn that into a focused staffing conversation.</p>
            </div>
            <div className="dx-cta-actions" data-reveal style={{ '--dx-delay': '100ms' } as CSSProperties}>
              <a className="dx-btn dx-btn--light" href="/contact-us" id="cta-page-action-3">Request a staffing plan ↗</a>
              <a className="dx-link dx-link--light" href="/services">Compare all ten services</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
