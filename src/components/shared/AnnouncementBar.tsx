'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#E5F2F0] py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center relative">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 text-sm">EFInA Annual Impact Meet up- </span>
            <span className="text-gray-900 text-sm font-medium">February 2025</span>
            <Link 
              href="/register" 
              className="text-[#B91810] text-sm font-medium hover:underline ml-4"
            >
              Register now →
            </Link>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-700 hover:text-gray-900 absolute right-0"
            aria-label="Close announcement"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}; 