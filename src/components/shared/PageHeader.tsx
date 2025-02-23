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
  titleClassName?: string;
  categoryClassName?: string;
  dateClassName?: string;
}

export const PageHeader = ({
  title,
  category,
  date,
  image,
  showBackButton = false,
  backButtonLink = '/insights',
  imageHeight = 'h-[50vh]', // Changed to use Tailwind class directly
  titleClassName = 'text-2xl sm:text-3xl md:text-5xl',
  categoryClassName = 'text-xs sm:text-sm',
  dateClassName = 'text-xs sm:text-sm'
}: PageHeaderProps) => {
  return (
    <header className="relative">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 z-0 ${imageHeight}`} // Use imageHeight here
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div 
        className={`relative z-10 container mx-auto px-4 sm:px-6 ${imageHeight}`} // Use imageHeight here
      >
        <div className="h-full flex flex-col justify-end pb-12"> {/* Changed justify-center to justify-end and added padding bottom */}
          {showBackButton && (
            <Link 
              href={backButtonLink}
              className="inline-flex items-center text-white mb-4 sm:mb-8 hover:text-gray-200 transition-colors text-sm sm:text-base"
            >
              <ChevronLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Back
            </Link>
          )}

          {category && (
            <div className={`text-white/80 mb-2 sm:mb-4 ${categoryClassName}`}>
              {category}
            </div>
          )}

          <h1 className={`font-display text-white max-w-4xl leading-tight ${titleClassName}`}>
            {title}
          </h1>

          {date && (
            <div className={`text-white/80 mt-2 sm:mt-4 ${dateClassName}`}>
              {date}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};