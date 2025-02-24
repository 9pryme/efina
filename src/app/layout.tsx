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
        url: 'https://res.cloudinary.com/delpitwkb/image/upload/og-image',
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
    images: ['https://res.cloudinary.com/delpitwkb/image/upload/twitter-image'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png'
    }
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${raleway.variable} ${cormorantGaramond.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
