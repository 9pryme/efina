'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from './AnnouncementBar';
import { NavigationMenu } from './NavigationMenu';
import { Button } from '@/src/components/ui/Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Add initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full z-50">
      <AnnouncementBar />
      <div className={`bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative w-32 h-12">
              <Image
                src="/images/efina-logo.svg"
                alt="EFInA Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Main Navigation */}
            <NavigationMenu />

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Button 
                href="/identity"
                variant="outline-black"
                className="text-gray-900"
              >
                Our new identity
              </Button>
              <Button 
                href="/contact"
                variant="primary"
              >
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}; 