import { Post } from '@/types/wordpress';
import { PostCard } from '@/src/components/shared/PostCard';

interface LatestPostsProps {
  posts: Post[];
}

export const LatestPosts = ({ posts }: LatestPostsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}; 