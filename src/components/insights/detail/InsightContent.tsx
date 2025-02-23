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
      <article className="prose prose-xl max-w-none mb-16">
        <div className="space-y-8">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-900 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    );
  }

  // Handle structured content
  return (
    <article className="prose prose-xl max-w-none mb-16">
      {/* Main Title */}
      <h1 className="text-4xl font-display text-gray-900 mb-4">{content.title}</h1>
      
      {/* Subtitle if exists */}
      {content.subtitle && (
        <p className="text-xl text-gray-600 mb-8 font-medium">{content.subtitle}</p>
      )}

      {/* Content Sections */}
      {content.sections.map((section, index) => (
        <div key={index} className="mb-12">
          {/* Section Heading */}
          {section.heading && (
            <h2 className="text-2xl font-display text-gray-900 mb-6">
              {section.heading}
            </h2>
          )}

          {/* Section Content */}
          <div className="space-y-6 text-gray-900">
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="leading-relaxed">{paragraph}</p>
            ))}
          </div>

          {/* Section Image */}
          {section.image && (
            <figure className="my-8">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              {section.image.caption && (
                <figcaption className="mt-3 text-sm text-gray-500 text-center">
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