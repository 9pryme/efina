'use client';

import { Post } from '@/src/types/wordpress';
import { CloudinaryImage } from '@/src/components/ui/CloudinaryImage';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface InsightCardProps {
  post?: Post;
  // Legacy props for ReadNext component
  category?: string;
  title?: string;
  date?: string;
  duration?: string;
  href?: string;
  index: number;
}

export const InsightCard = ({ post, category, title, date, href, index }: InsightCardProps) => {
  // Handle both WordPress posts and legacy data
  const isWordPressPost = !!post;
  const displayTitle = isWordPressPost ? post.title.rendered : title;
  const displayLink = isWordPressPost ? `/insights/${post.slug}` : href;
  const displayDate = isWordPressPost ? new Date(post.date).toLocaleDateString() : date;
  const displayCategory = isWordPressPost ? post.categories.nodes[0]?.name : category;

  // Use Cloudinary fallback image
  const fallbackImage = 'https://res.cloudinary.com/delpitwkb/image/upload/v1740330251/insights/fallback.png';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 md:h-64">
        <CloudinaryImage
          src={post?.featuredImage?.node?.sourceUrl || fallbackImage}
          alt={post?.featuredImage?.node?.altText || displayTitle || 'Article thumbnail'}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        {displayCategory && (
          <div className="flex gap-2 mb-3">
            <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              {displayCategory}
            </span>
          </div>
        )}
        <h3 className="text-xl font-display text-gray-900 mb-2">
          {displayTitle}
        </h3>
        {isWordPressPost && (
          <div 
            className="text-sm text-gray-600 mb-4"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        )}
        <span className="text-xs md:text-sm text-gray-600">{displayDate}</span>
        <Link
          href={displayLink || '#'}
          className="inline-flex items-center text-sm font-medium text-[#008F60] hover:text-[#006B48]"
        >
          Read more
          <span className="ml-2">→</span>
        </Link>
      </div>
    </motion.article>
  );
}; 