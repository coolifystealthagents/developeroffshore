import * as data from './data';
import { fleetServices } from './fleet-data';

const site = (data as { site?: { brand?: string; primary?: string; domain?: string } }).site || {};
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg?v=v3" alt="" width="128" height="128" /><span className="logo-name">{site.brand}</span></span>;
}

function ParentMark({ dark = false }: { dark?: boolean }) {
  return <span className={`parent-mark${dark ? ' parent-mark-dark' : ''}`}><span>Powered by StealthAgents</span><img src="/images/stealth-agents-logo-black.png" alt="Stealth Agents" width="512" height="128" /></span>;
}

export function Header(_props: unknown = {}) {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><header className="nav"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><ParentMark /><nav className="links fleet-nav" aria-label="Main navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a></nav></div></header></>;
}

export function Footer(_props: unknown = {}) {
  return <footer className="footer legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/"><LogoMark /></a><p>Philippines-based {site.primary || 'software development'} support designed around documented scope and accountable handoffs.</p><ParentMark dark /></div><div><h2>Services</h2><div className="footer-links">{fleetServices.slice(0, 6).map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>)}</div></div><div><h2>Explore</h2><div className="footer-links"><a href="/blog">Blog</a><a href="/research">Research</a><a href="/alternatives">Alternatives</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>{site.domain}</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta fleet-final"><p className="eyebrow">Philippines-based staffing</p><h2>Define the work before hiring.</h2><p>Share the positions, systems, hours, and approval points your team needs. A staffing specialist can use that context to discuss fit.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>;
}
