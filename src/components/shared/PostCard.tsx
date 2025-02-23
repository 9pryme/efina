import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/wordpress';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        {post.featuredImage && (
          <div className="relative h-48">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          {post.subtitle && (
            <p className="text-gray-600 mb-3">{post.subtitle.subtitle}</p>
          )}
          <div
            className="text-gray-700 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </div>
      </article>
    </Link>
  );
}; 