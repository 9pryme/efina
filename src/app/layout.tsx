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
  title: "Efina - Financial Inclusion for Africa",
  description: "Promoting financial inclusion across Africa through research, advocacy, and innovation.",
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
