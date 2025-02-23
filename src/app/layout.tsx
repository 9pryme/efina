import type { Metadata } from "next";
import { Raleway, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from '@/src/components/shared/Header';
import { Footer } from '@/src/components/shared/Footer';

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EFInA - Enhancing Financial Innovation & Access",
  description: "EFInA is a Financial Sector Deepening (FSD) organisation that promotes inclusive finance in Nigeria.",
  keywords: "EFInA, Financial Inclusion, Nigeria, Innovation, Research, Financial Services",
  authors: [{ name: 'EFInA' }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://efina.org.ng',
    siteName: 'EFInA',
    title: 'EFInA - Enhancing Financial Innovation & Access',
    description: 'Promoting inclusive finance in Nigeria',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EFInA'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EFInA - Enhancing Financial Innovation & Access',
    description: 'Promoting inclusive finance in Nigeria',
    images: ['/images/twitter-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    shortcut: ['/shortcut-icon.png'],
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#008F60',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${cormorantGaramond.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
