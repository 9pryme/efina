'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from './AnnouncementBar';
import { NavigationMenu } from './NavigationMenu';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@/src/components/ui/Button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavigate = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50">
      <AnnouncementBar />
      <div className={`bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="relative w-24 md:w-32 h-8 md:h-12" onClick={handleNavigate}>
              <Image
                src="/images/efina-logo.svg"
                alt="EFInA Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationMenu />
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              {/* <Button 
                href="/identity"
                variant="outline-black"
                className="text-gray-900"
              >
                Our new identity
              </Button> */}
              {/* <Button 
                href="/contact"
                variant="primary"
              >
                Talk to us
              </Button> */}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 focus:outline-none text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-[104px] bg-white overflow-y-auto">
              <div className="py-6 px-4">
                <NavigationMenu onNavigate={handleNavigate} />
              </div>
              <div className="flex flex-col gap-4 p-4 border-t">
                {/* <Button 
                  href="/identity"
                  variant="outline-black"
                  className="w-full text-gray-900 justify-center text-base py-3"
                  onClick={handleNavigate}
                >
                  Our new identity
                </Button> */}
                {/* <Button 
                  href="/contact"
                  variant="primary"
                  className="w-full justify-center text-base py-3"
                  onClick={handleNavigate}
                >
                  Talk to us
                </Button> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}; 