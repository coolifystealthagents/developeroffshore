import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from '../components';
import { site } from '../data';

const base = `https://${site.domain.toLowerCase()}`;

export const metadata: Metadata = {
  title: 'About Developer Offshore',
  description: 'Learn how Developer Offshore, powered by Stealth Agents, helps teams define and staff reviewable software delivery roles in the Philippines.',
  alternates: { canonical: `${base}/about` },
};

const principles = [
  ['Role clarity before recruiting', 'Define the stack, representative work, required overlap, evidence, and reviewer before assessing candidates.'],
  ['Client-owned decisions', 'Your team keeps product priority, architecture, repository policy, code review, production access, and release approval.'],
  ['Inspectable delivery', 'Contributors return focused changes, test evidence, limitations, and written handoffs inside your existing engineering system.'],
] as const;

export default function AboutPage() {
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${base}/about`,
    name: `About ${site.brand}`,
    mainEntity: {
      '@type': 'Organization',
      name: site.brand,
      url: base,
      parentOrganization: { '@type': 'Organization', name: 'Stealth Agents', url: 'https://stealthagents.com' },
    },
  };
  return (
    <>
      <Header />
      <main id="main-content" className="about-v3">
        <JsonLd data={graph} />
        <section className="about-v3-hero"><div className="container about-v3-hero-grid"><div><p className="eyebrow">About Developer Offshore</p><h1>Software staffing built around clear ownership.</h1><p className="lead">Developer Offshore helps teams plan and recruit Philippines-based software roles without pretending that staffing transfers product or technical accountability.</p></div><figure><img src="/images/stealth-agents-team.webp" alt="Stealth Agents team supporting Developer Offshore clients" width="1200" height="800" /><figcaption>Developer Offshore is powered by Stealth Agents.</figcaption></figure></div></section>
        <section className="section"><div className="container about-v3-story"><div><p className="eyebrow">The operating model</p><h2>Start with one reviewable lane.</h2></div><div><p>A useful staffing conversation begins with the work: what system is changing, which result matters first, who will review it, and which access is actually required. Those answers shape the role and make candidate evaluation more relevant than a generic list of technologies.</p><p>After hiring, the same boundaries support delivery. The contributor works in agreed tools, documents assumptions, and returns evidence. Client owners retain architecture, priority, acceptance, and release decisions.</p></div></div></section>
        <section className="section muted"><div className="container"><p className="eyebrow">Working principles</p><h2>What responsible offshore staffing requires</h2><div className="about-v3-principles">{principles.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
        <section className="parent-proof"><div className="container parent-proof-grid"><div><p className="eyebrow">Powered by Stealth Agents</p><h2>Recruiting and support from an established staffing organization.</h2><p>Stealth Agents provides the parent staffing capability behind Developer Offshore. Specific role fit, availability, engagement terms, and candidate evidence are confirmed during the hiring process rather than assumed from a website claim.</p><a className="btn secondary" href="https://stealthagents.com" target="_blank" rel="noopener noreferrer">Visit Stealth Agents</a></div><figure><img src="/images/stealth-agents-team.webp" alt="Members of the Stealth Agents team" width="1200" height="800" /><figcaption><img src="/images/stealth-agents-logo-black.png" alt="Stealth Agents logo" width="512" height="128" /><span>Parent organization</span></figcaption></figure></div></section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
