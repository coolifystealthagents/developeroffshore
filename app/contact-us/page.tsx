import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import StandardContactForm from './StandardContactForm';

export const metadata: Metadata = {
  title: { absolute: 'Contact Developer Offshore | Plan Your Engineering Team' },
  description: 'Share your delivery backlog, technical stack, and review needs with a Philippines developer staffing specialist.',
  alternates: { canonical: 'https://developeroffshore.com/contact-us' },
  robots: { index: true, follow: true },
};

const prepCards = [
  { title: 'The delivery lane', text: 'Name the product area, recurring work, and first result you want a new developer to own.' },
  { title: 'The working system', text: 'Include the stack, repository workflow, test expectations, and hours your team can support.' },
  { title: 'The review owner', text: 'Identify who will inspect pull requests, answer questions, and approve releases.' },
  { title: 'The access boundary', text: 'List the tools the role needs and the sensitive systems that must stay restricted.' },
];

const expectations = [
  ['A scoped first sprint', 'We turn the brief into one bounded lane with a representative ticket and a named reviewer.'],
  ['A stack-matched shortlist', 'Candidates are reviewed against the work sample, communication needs, and real time-zone overlap.'],
  ['A pilot with evidence', 'Start with limited access and five to ten tickets. Inspect the diffs, checks, and handoff notes before expanding.'],
];

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="dx-page dx-contact">
        <section className="dx-contact-hero">
          <div className="dx-pagehero-bg" aria-hidden="true" />
          <div className="dx-container dx-contact-grid">
            <div className="dx-contact-copy">
              <p className="dx-eyebrow">Plan the work before the hire</p>
              <h1>Build engineering capacity around your real roadmap.</h1>
              <p className="dx-hero-lead">
                Tell us where delivery is slowing down. We will use your stack, backlog, schedule,
                and approval boundaries to prepare a focused staffing conversation.
              </p>
              <ul className="dx-contact-scope" aria-label="Engagement scope">
                <li>Philippines-based talent</li>
                <li>Stack-matched screening</li>
                <li>Documented handoffs</li>
              </ul>
              <div className="dx-contact-brief">
                <span className="dx-contact-brief-kicker">What the first call covers</span>
                <div className="dx-contact-brief-row"><strong>One lane</strong><span>Choose work with a reviewable finish.</span></div>
                <div className="dx-contact-brief-row"><strong>One owner</strong><span>Name the person who approves the merge.</span></div>
                <div className="dx-contact-brief-row"><strong>One rhythm</strong><span>Agree the weekly update and pilot scorecard.</span></div>
              </div>
            </div>
            <div className="dx-contact-form">
              <StandardContactForm />
            </div>
          </div>
        </section>

        <section className="dx-official" aria-labelledby="official-team-title">
          <div className="dx-container dx-official-grid">
            <figure className="dx-official-media">
              <img src="/images/stealth-agents-team-bacolod.jpg" alt="Official StealthAgents team outside the Bacolod City Government Center" width="953" height="540" />
              <figcaption>Official StealthAgents team · Bacolod City, Philippines</figcaption>
            </figure>
            <div className="dx-official-copy">
              <p className="dx-eyebrow">Official team, Bacolod</p>
              <img className="dx-official-logo" src="/images/stealth-agents-logo-black.png" alt="StealthAgents" width="512" height="128" />
              <h2 id="official-team-title">A real team behind the developer.</h2>
              <p>
                Developer Offshore is powered by StealthAgents. The team recruits in the Philippines,
                coordinates onboarding, and supports the developer after the first sprint starts.
              </p>
              <p>
                Your team keeps product priority, architecture, sensitive access, and production
                approval. The developer works inside your tools and returns reviewable evidence.
              </p>
              <a className="dx-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Meet StealthAgents ↗</a>
            </div>
          </div>
        </section>

        <section className="dx-contact-prep" aria-labelledby="prep-title">
          <div className="dx-container">
            <div className="dx-head">
              <div><p className="dx-eyebrow">A more useful first conversation</p><h2 id="prep-title">What to bring to the call.</h2></div>
              <p>You do not need a finished job description. A few concrete details make the match more precise.</p>
            </div>
            <div className="dx-prep-grid">
              {prepCards.map((card) => (
                <article className="dx-prep-card" key={card.title}>
                  <span>Brief</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dx-section dx-section--white" aria-labelledby="expectations-title">
          <div className="dx-container">
            <div className="dx-head">
              <div><p className="dx-eyebrow">What happens next</p><h2 id="expectations-title">From brief to reviewable pilot.</h2></div>
              <p>We keep the first step small enough to inspect and useful enough to change your mind.</p>
            </div>
            <div className="dx-process dx-process--three">
              {expectations.map(([title, body], index) => (
                <article className="dx-step" key={title}>
                  <span className="dx-step-dot" aria-hidden="true">{['Scope', 'Match', 'Pilot'][index]}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dx-cta">
          <div className="dx-container dx-cta-inner">
            <div>
              <p className="dx-eyebrow">Ready when you are</p>
              <h2>Turn the backlog into one clear lane.</h2>
              <p>Share the work you want a developer to own. We will prepare the next conversation around fit, access, and a reviewable first sprint.</p>
            </div>
            <div className="dx-cta-actions">
              <a className="dx-btn dx-btn--light" href="#contactPageForm">Request a staffing plan ↗</a>
              <a className="dx-link dx-link--light" href="/services">Compare the services</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
