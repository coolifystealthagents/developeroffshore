import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://developeroffshore.com'), title: { default: 'Developer Offshore | Offshore outsourcing guides', template: '%s | Developer Offshore' }, description: 'Stealth Agents-style guides for developer offshore staffing: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Developer Offshore', description: 'Practical outsourcing guides for business teams.', url: 'https://developeroffshore.com', siteName: 'Developer Offshore', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
