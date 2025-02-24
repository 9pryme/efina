'use client';

import { CloudinaryImage } from '@/src/components/ui/CloudinaryImage';
import { cleanWordPressContent } from '@/src/lib/utils';

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
        <div key={index} className="mb-8">
          {section.image && (
            <div className="relative h-64 mb-4">
              <CloudinaryImage
                src={section.image.src}
                alt={section.image.alt}
                fill
                className="object-cover rounded-lg"
              />
              {section.image.caption && (
                <p className="text-sm text-gray-600 mt-2">{section.image.caption}</p>
              )}
            </div>
          )}
          <div dangerouslySetInnerHTML={{ 
            __html: cleanWordPressContent(section.content)
          }} />
        </div>
      ))}
    </article>
  );
};