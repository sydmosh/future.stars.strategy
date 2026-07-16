import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransitionWrapper from '@/components/layout/PageTransitionWrapper';
import { SITE_NAME, SITE_URL, AUTHOR_NAME } from '@/lib/constants';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Online Book Publishing & Reading Platform`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Discover and read books by Moshoeshoe Koali. A modern online reading platform featuring Christian, Technology, Programming, and Personal Growth literature.',
  keywords: ['books', 'reading', 'online books', 'Moshoeshoe Koali', 'Christian literature', 'technology books', 'programming'],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Online Book Publishing & Reading Platform`,
    description: 'Discover and read books by Moshoeshoe Koali. A modern online reading platform.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Discover and read books by Moshoeshoe Koali.',
    images: ['/images/og-image.png'],
    creator: '@moshoeshoekoali',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen flex flex-col antialiased`}>
        <Providers>
          <Header />
          <main className="flex-1">
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
