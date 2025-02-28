'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CloudinaryImage } from '@/src/components/ui/CloudinaryImage';
import { Button } from '@/src/components/ui/Button';
import { Post } from '@/src/types/wordpress';
import { mockPosts } from '@/src/data/mockPosts';

export const LatestInsights = () => {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  useEffect(() => {
    setLatestPosts(mockPosts);
  }, []);

  // Don't render the section if no posts are available
  if (latestPosts.length === 0) {
    return null;
  }

  // Map WordPress categories to types
  const getPostType = (post: Post) => {
    const category = post.categories.nodes[0]?.name || '';
    switch (category.toLowerCase()) {
      case 'events':
        return { type: 'Event', color: 'text-[#B01F29]' };
      case 'press':
      case 'press-release':
      case 'press-statement':
        return { type: 'Press Statement', color: 'text-[#006B48]' };
      default:
        return { type: 'Report', color: 'text-[#B17E0E]' };
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-end md:justify-between mb-8 md:mb-12">
          <div>
            <h2 className="font-display text-[32px] md:text-[56px] leading-[1.2] md:leading-[64px] mb-4 text-gray-900 font-bold tracking-[-0.04em]">
              Stories, Insights, And<br className="hidden md:block" /> Updates About Our Mission
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-2xl">
              Narratives Unfolded: Discovering Stories, Gaining Insights, and
              Staying Updated on Our Ever-Evolving Mission
            </p>
          </div>
          <Button 
            href="/insights" 
            variant="text"
            className="hidden md:block text-gray-800 hover:text-gray-600 text-base md:text-lg"
          >
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => {
            const { type, color } = getPostType(post);
            const date = new Date(post.date).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            });

            return (
              <Link 
                key={post.id} 
                href={`/insights/${post.slug}`}
                className="group"
              >
                <article>
                  <div className="relative h-[200px] md:h-[280px] mb-4 md:mb-6 overflow-hidden rounded-2xl">
                    <CloudinaryImage
                      src={post.featuredImage?.node?.sourceUrl || 'insights/fallback.png'}
                      alt={post.featuredImage?.node?.altText || post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-2 md:mb-3">
                    <span className={`text-xs md:text-sm font-medium ${color}`}>
                      {type}
                    </span>
                    <span className="text-xs md:text-sm text-gray-600">{date}</span>
                  </div>
                  <h3 className="text-base md:text-xl font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Button 
            href="/insights" 
            variant="text"
            className="text-gray-800 hover:text-gray-600 text-base"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
};