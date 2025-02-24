'use client';

import { useEffect, useState } from 'react';
import { InsightCard } from '@/src/components/insights/InsightCard';
import { Post } from '@/src/types/wordpress';
import { getRecentPosts } from '@/src/lib/wordpress';

interface ReadNextProps {
  currentPostId: string;
}

export const ReadNext = ({ currentPostId }: ReadNextProps) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const posts = await getRecentPosts(currentPostId);
      setRelatedPosts(posts);
    };

    fetchRecentPosts();
  }, [currentPostId]);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-8">
          Read Next
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.slice(0, 1).map((post, index) => (
            <InsightCard 
              key={post.id}
              post={post}
              index={index}
            />
          ))}
          
          <div className="hidden md:contents">
            {relatedPosts.slice(1).map((post, index) => (
              <InsightCard
                key={post.id}
                post={post}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 