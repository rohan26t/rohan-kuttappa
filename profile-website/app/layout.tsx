import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://tm-rohan-profile.bright-ibis-7107.chatgpt.site'),
  title: 'T.M. Rohan | Senior Program & Project Manager',
  description: 'Program leadership, technology delivery, transformation, and governance. Explore T.M. Rohan’s 13+ years across enterprise technology, financial services, telecom, and the Indian Army.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
