import { assetPath } from '@/lib/asset-path';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(process.env.GITHUB_PAGES === 'true' ? 'https://rohan26t.github.io/rohan-kuttappa/' : 'https://tm-rohan-profile.rohan26t.chatgpt.site'),
  title: 'T.M. Rohan | Senior Program & Project Manager',
  description: 'Program leadership, technology delivery, transformation, and governance. Explore T.M. Rohan’s 13+ years across enterprise technology, financial services, telecom, and the Indian Army.',
  icons: { icon: assetPath('/favicon.svg') },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
