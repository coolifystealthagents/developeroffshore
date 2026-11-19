import type { CSSProperties, ReactNode } from 'react';
import * as data from './data';
import { fleetServices } from './fleet-data';

const site = (data as { site?: { brand?: string; primary?: string; domain?: string } }).site || {};
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function LogoMark() {
  return (
    <span className="logo-mark-wrap">
      <img className="logo-img" src="/logo.svg?v=v3" alt={`${site.brand} logo`} width="128" height="128" />
      <span className="logo-text">
        <span className="logo-name">{site.brand}</span>
        <span className="logo-sub">Powered by StealthAgents</span>
      </span>
    </span>
  );
}

export function Header() {
  return (
    <header className="dx-header">
      <div className="dx-nav-inner">
        <a className="dx-brand" href="/" aria-label={`${site.brand} home`}>
          <LogoMark />
        </a>
        <nav className="dx-nav-links" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
        <a className="dx-nav-cta" href="/contact-us">
          Scope a developer <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="dx-footer">
      <div className="dx-footer-inner dx-container">
        <div className="dx-footer-top">
          <div className="dx-footer-brand">
            <a className="dx-brand" href="/" aria-label={`${site.brand} home`}>
              <LogoMark />
            </a>
            <p>
              Philippines-based software delivery capacity for teams with a real backlog,
              a defined stack, and a reviewer who can keep the standard high.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <div className="dx-footer-links">
              {fleetServices.slice(0, 7).map((service) => (
                <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>
              ))}
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="dx-footer-links">
              <a href="/services">All services</a>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/research">Research</a>
              <a href="/alternatives">Alternatives</a>
              <a href="/contact-us">Contact Us</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>

        <div className="dx-footer-parent">
          <a
            className="dx-parent-logo"
            href="https://stealthagents.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="StealthAgents parent company"
          >
            <img src="/images/stealth-agents-logo-black.png" alt="StealthAgents" width="512" height="128" />
          </a>
          <div>
            <h3>Parent company</h3>
            <p>
              StealthAgents recruits, employs, and supports the Philippines-based professionals
              who deliver this work. Developer Offshore is a StealthAgents subsidiary.
            </p>
            <a className="dx-parent-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">
              Powered by StealthAgents ↗
            </a>
          </div>
        </div>

        <div className="dx-footer-bottom">
          <span>© {year} {site.brand}. All rights reserved.</span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  media,
  actions,
  breadcrumb,
  compact = false,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  media?: ReactNode;
  actions?: ReactNode;
  breadcrumb?: ReactNode;
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`dx-pagehero${compact ? ' dx-pagehero--compact' : ''}`}>
      <div className="dx-pagehero-bg" aria-hidden="true" />
      <div className="dx-container dx-pagehero-grid">
        <div className="dx-pagehero-copy">
          {breadcrumb ? <div className="dx-breadcrumb">{breadcrumb}</div> : null}
          <p className="dx-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="dx-hero-lead">{lead}</p>
          {actions ? <div className="dx-actions">{actions}</div> : null}
          {children}
        </div>
        {media || null}
      </div>
    </section>
  );
}

export function Ticker({ items }: { items: readonly string[] }) {
  return (
    <div className="dx-ticker" aria-hidden="true">
      <div className="dx-ticker-track">
        {[0, 1].map((group) => (
          <div className="dx-ticker-group" key={group}>
            {items.map((item, index) => <span key={`${group}-${index}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`dx-head${light ? ' dx-head--light' : ''}`} data-reveal>
      <div>
        <p className={`dx-eyebrow${light ? ' dx-eyebrow--light' : ''}`}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function CTA() {
  return (
    <section className="dx-cta">
      <div className="dx-container dx-cta-inner">
        <div data-reveal>
          <p className="dx-eyebrow">A bounded first sprint</p>
          <h2>Have a backlog but not enough developers?</h2>
          <p>
            Bring one lane, a representative ticket, and the review rules your team already uses.
            We will turn that into a focused staffing conversation.
          </p>
        </div>
        <div className="dx-cta-actions" data-reveal style={{ '--dx-delay': '100ms' } as CSSProperties}>
          <a className="dx-btn dx-btn--light" href="/contact-us">Request a staffing plan ↗</a>
          <a className="dx-link dx-link--light" href="/services">Compare all ten services</a>
        </div>
      </div>
    </section>
  );
}
