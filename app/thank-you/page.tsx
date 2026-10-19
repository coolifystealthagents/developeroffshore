import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import OnceHubScheduler from './OnceHubScheduler';

export const metadata: Metadata = {
  title: { absolute: 'Choose a Consultation Time | Developer Offshore' },
  description: 'Your request was delivered. Choose a consultation time with the Stealth Agents team.',
  alternates: { canonical: 'https://developeroffshore.com/thank-you' },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="sa-booking-page">
        <div className="container booking-v3">
          <header className="booking-v3-intro">
            <p className="eyebrow">Request delivered</p>
            <h1>Choose a consultation time.</h1>
            <p className="lead">Your staffing request reached the team. Select a convenient time to discuss the role, workflow, and review boundaries.</p>
            <img className="sa-booking-image" src="/thank-you-hero.png" alt="Stealth Agents team ready for a consultation" width="619" height="402" />
          </header>
          <OnceHubScheduler />
        </div>
      </main>
      <Footer />
    </>
  );
}
