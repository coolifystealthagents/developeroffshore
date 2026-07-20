import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://developeroffshore.com'), title: { default: 'Developer Offshore | Offshore developer staffing', template: '%s | Developer Offshore' }, description: 'Plan an offshore developer role around your backlog, stack, access rules, code review, and schedule.', openGraph: { title: 'Developer Offshore', description: 'Practical offshore developer hiring and onboarding guides.', url: 'https://developeroffshore.com', siteName: 'Developer Offshore', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
