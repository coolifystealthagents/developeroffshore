import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import '@fontsource/sora/400.css';
import '@fontsource/sora/500.css';
import '@fontsource/sora/600.css';
import '@fontsource/sora/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './console.css';
import ConsoleMotion from './ConsoleMotion';
import type { Metadata, Viewport } from 'next';

import "./site-chrome-fixes.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://developeroffshore.com'),
  title: { default: 'Developer Offshore | Offshore developer staffing', template: '%s | Developer Offshore' },
  description: 'Plan an offshore developer role around your backlog, stack, access rules, code review, and schedule.',
  openGraph: { title: 'Developer Offshore', description: 'Practical offshore developer hiring and onboarding guides.', url: 'https://developeroffshore.com', siteName: 'Developer Offshore', type: 'website' },
};

export const viewport: Viewport = {
  themeColor: '#f4f6fb',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ConsoleMotion />
        <AcrClient />
        <Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'developer-offshore',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thanks-whats-next',step:2,label:'Lead Delivered',event:'funnel_form_submitted'}]};`}</Script>
        <Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
        <Script
          id="databull-analytics"
          src="https://databull.stealthagents.us/js/script.js"
          data-website-id="dc_1oo2qp2wh1lktp"
          data-domain="developeroffshore.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
