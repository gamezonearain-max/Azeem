import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { MotionProvider } from '@/components/motion/MotionProvider';
import { WhatsAppFloatButton } from '@/components/ui/WhatsAppFloatButton';
import { siteConfig } from '@/config/site';
import { getSiteUrl } from '@/lib/seo';
import './globals.css';

const siteUrl = getSiteUrl();
const defaultTitle = `${siteConfig.name} — ${siteConfig.title}`;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: defaultTitle,
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  keywords: [
    siteConfig.name,
    ...siteConfig.skills.map((skill) => skill.title),
    'Creative Portfolio',
  ],
  ...(siteUrl ? { alternates: { canonical: '/' } } : {}),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    ...(siteUrl ? { url: '/' } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#06070A] font-sans text-[#F8FAFC] antialiased"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#22D3EE] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#06070A] focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <MotionProvider>
          {children}
          <WhatsAppFloatButton />
        </MotionProvider>
      </body>
    </html>
  );
}
