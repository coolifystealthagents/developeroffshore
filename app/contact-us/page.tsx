import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { TestimonialsRail } from '../booking-components';
import StandardContactForm from './StandardContactForm';

export const metadata: Metadata = {
  title: { absolute: 'Contact Developer Offshore | Plan Your Engineering Team' },
  description: 'Share your delivery backlog, technical stack, and review needs with a Philippines developer staffing specialist.',
  alternates: { canonical: 'https://developeroffshore.com/contact-us' },
  robots: { index: true, follow: true },
};

export default function ContactUsPage() {
  return <><Header /><main id="main-content" className="contact-v3">
    <section className="contact-v3-hero">
      <div className="container contact-v3-grid">
        <div className="contact-v3-copy">
          <p className="eyebrow">Plan the work before the hire</p>
          <h1>Build engineering capacity around your real roadmap.</h1>
          <p className="lead">Tell us where delivery is slowing down. We will use your stack, backlog, schedule, and approval boundaries to prepare a focused staffing conversation.</p>
          <ul className="contact-scope" aria-label="Engagement scope"><li>Philippines-based talent</li><li>Role-specific matching</li><li>Documented handoffs</li></ul>
          <TestimonialsRail contact />
        </div>
        <div className="contact-v3-form"><StandardContactForm /></div>
      </div>
    </section>
    <section className="parent-proof" aria-labelledby="parent-proof-title">
      <div className="container parent-proof-grid">
        <figure><img src="/images/stealth-agents-team.webp" alt="Official Stealth Agents operations team in Bacolod" width="1600" height="1067" /><figcaption><img src="/images/stealth-agents-logo-black.png" alt="Stealth Agents" width="512" height="128" /><strong>Official team, Bacolod</strong></figcaption></figure>
        <div><p className="eyebrow">Managed delivery context</p><h2 id="parent-proof-title">Powered by StealthAgents</h2><p>Developer Offshore focuses the conversation on software delivery. Stealth Agents provides the recruiting and managed-service operation behind candidate matching, onboarding coordination, and ongoing support.</p><p>Your team remains responsible for product priority, architecture, production approval, security exceptions, and accepted risk. The managed team helps make the staffing and communication process clear.</p><a className="btn primary" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Learn about Stealth Agents</a></div>
      </div>
    </section>
    <section className="contact-v3-guide"><div className="container"><h2>What helps us prepare a useful response</h2><div className="contact-guide-grid"><article><h3>The delivery lane</h3><p>Name the product area, recurring work, and first result you want a new developer to own.</p></article><article><h3>The working system</h3><p>Include the stack, repository workflow, test expectations, and hours needed for decisions.</p></article><article><h3>The approval boundary</h3><p>Identify who reviews code, accepts risk, and approves production changes on your team.</p></article></div></div></section>
  </main><Footer /></>;
}
