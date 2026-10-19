import type { Metadata } from 'next';
import { Footer, Header } from '../components';

const scheduler = 'https://go.oncehub.com/StealthAgentsTeam';

export const metadata: Metadata = {
  title: { absolute: 'Request Received | Schedule Your Developer Staffing Call' },
  description: 'Your staffing request was delivered. Choose a time for a focused engineering staffing conversation.',
  alternates: { canonical: 'https://developeroffshore.com/thanks-whats-next' },
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return <><Header /><main id="main-content" className="sa-booking-page"><div className="container booking-v3">
    <header className="booking-v3-intro"><p className="eyebrow">Delivery confirmed</p><h1>Your request reached our team.</h1><p className="lead">Choose a meeting time to discuss the role, workflow, and review boundaries. Scheduling is optional and your delivered request remains on record.</p><a className="btn primary" href={scheduler} target="_blank" rel="noopener noreferrer">Open the accessible OnceHub scheduler</a><p className="booking-fallback-note">The direct scheduler link appears before the embedded calendar so it remains available if the embed is blocked or difficult to use.</p></header>
    <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title"><h2 id="booking-calendar-title">Choose a consultation time</h2><iframe src={`${scheduler}?brdr=1pxd8d8d8&em=1&Si=1`} title="Schedule a consultation with Stealth Agents" loading="lazy" height="850" width="100%" className="sa-oncehub-frame" referrerPolicy="strict-origin-when-cross-origin" /></section>
  </div></main><Footer /></>;
}
