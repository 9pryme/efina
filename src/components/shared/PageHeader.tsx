'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export interface PageHeaderProps {
  title: string;
  category?: string;  // Make category optional
  date?: string;      // Make date optional
  image: string;
  showBackButton?: boolean;
  backButtonLink?: string;
  imageHeight?: string;
}

export const PageHeader = ({
  title,
  category,
  date,
  image,
  showBackButton = false,
  backButtonLink = '/insights',
  imageHeight = '500px'
}: PageHeaderProps) => {
  return (
    <header className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ height: imageHeight }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 container mx-auto px-4"
        style={{ height: imageHeight }}
      >
        <div className="h-full flex flex-col justify-center">
          {showBackButton && (
            <Link 
              href={backButtonLink}
              className="inline-flex items-center text-white mb-8 hover:text-gray-200 transition-colors"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back
            </Link>
          )}

          {category && (
            <div className="text-white/80 text-sm mb-4">
              {category}
            </div>
          )}

          <h1 className="text-5xl font-display text-white max-w-4xl">
            {title}
          </h1>

          {date && (
            <div className="text-white/80 text-sm mt-4">
              {date}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};