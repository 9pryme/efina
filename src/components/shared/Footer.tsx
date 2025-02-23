'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/src/components/ui/Button';

const footerLinks = [
  { label: 'Who we are', href: '/who-we-are' },
  { label: 'Blog', href: '/blog' },
  { label: 'Media', href: '/media' },
  { label: 'Initiatives', href: '/initiatives' },
  { label: 'Contact', href: '/contact' },
];

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/newsletter-bg.png"
            alt="Newsletter background"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.2] md:leading-[64px] mb-4">
              Stay informed by subscribing<br className="hidden md:block" /> to our newsletter.
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
              Join our community to receive a wealth of information, stories, and highlights about our 
              work and impact.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-white/30 rounded-full px-6 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
              <Button 
                type="submit"
                variant="primary"
                className="w-full md:w-auto bg-[#008F60] hover:bg-[#006B48]"
              >
                Subscribe now
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* Left Side - Logo */}
          <Link href="/" className="mb-6 md:mb-0">
            <Image
              src="/images/efina-logo-white.svg"
              alt="EFInA Logo"
              width={120}
              height={36}
            />
          </Link>

          {/* Center - Navigation */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:flex-row gap-4 md:gap-8">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side - Social Links */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <Link href="mailto:info@efina.org" className="text-white hover:text-gray-300">
              <span className="sr-only">Email</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </Link>
            <Link href="https://twitter.com/efina" className="text-white hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com/company/efina" className="text-white hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-400 text-xs md:text-sm">
            All rights reserved ©EFInA 2024
          </p>
        </div>
      </div>
    </footer>
  );
};