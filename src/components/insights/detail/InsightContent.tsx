'use client';

import Image from 'next/image';

interface StructuredContent {
  title: string;
  subtitle?: string;
  sections: {
    heading?: string;
    content: string;
    image?: {
      src: string;
      alt: string;
      caption?: string;
    };
  }[];
}

interface InsightContentProps {
  content: string | StructuredContent;
}

export const InsightContent = ({ content }: InsightContentProps) => {
  // Handle unstructured content (plain text)
  if (typeof content === 'string') {
    return (
      <article className="prose prose-xl max-w-none mb-8 sm:mb-16 px-4 sm:px-0">
        <div className="space-y-6 sm:space-y-8">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-900 leading-relaxed text-base sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    );
  }

  // Handle structured content
  return (
    <article className="prose prose-xl max-w-none mb-8 sm:mb-16 px-4 sm:px-0">
      {/* Main Title */}
      <h1 className="text-2xl sm:text-4xl font-display text-gray-900 mb-3 sm:mb-4">{content.title}</h1>
      
      {/* Subtitle if exists */}
      {content.subtitle && (
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 font-medium">{content.subtitle}</p>
      )}

      {/* Content Sections */}
      {content.sections.map((section, index) => (
        <div key={index} className="mb-8 sm:mb-12">
          {/* Section Heading */}
          {section.heading && (
            <h2 className="text-xl sm:text-2xl font-display text-gray-900 mb-4 sm:mb-6">
              {section.heading}
            </h2>
          )}

          {/* Section Content */}
          <div className="space-y-4 sm:space-y-6 text-gray-900">
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="leading-relaxed text-base sm:text-lg">{paragraph}</p>
            ))}
          </div>

          {/* Section Image */}
          {section.image && (
            <figure className="my-6 sm:my-8">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              {section.image.caption && (
                <figcaption className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 text-center">
                  {section.image.caption}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      ))}
    </article>
  );
};