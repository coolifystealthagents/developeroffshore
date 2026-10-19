import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: { absolute: 'Consultation Booked | Developer Offshore' },
  description: 'Your Developer Offshore consultation is booked. Review what to prepare before the conversation.',
  alternates: { canonical: 'https://developeroffshore.com/thanks-whats-next' },
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="booking-confirmation-page">
        <section className="container booking-confirmation-card">
          <img src="/logo.svg?v=v3" alt="Developer Offshore logo" width="128" height="128" />
          <p className="eyebrow">Consultation booked</p>
          <h1>Your meeting is confirmed.</h1>
          <p className="lead">The booking details are in the calendar confirmation sent by OnceHub. Bring the role, current workflow, required hours, tools, and the person who will review the work.</p>
          <div className="booking-confirmation-actions">
            <a className="btn primary" href="/services">Review services</a>
            <a className="btn secondary" href="/">Return home</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
