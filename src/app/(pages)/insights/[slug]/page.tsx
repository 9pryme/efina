import { InsightHeader } from '@/src/components/insights/detail/InsightHeader';
import { InsightContent } from '@/src/components/insights/detail/InsightContent';
import { InsightMeta } from '@/src/components/insights/detail/InsightMeta';
import { ReadNext } from '@/src/components/insights/detail/ReadNext';
import { getPost } from '@/src/lib/wordpress';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
  };
}

export default async function InsightDetailPage({ params }: Props) {
  try {
    const post = await getPost(params.slug);

    if (!post) {
      notFound();
    }

    return (
      <main className="bg-gray-50">
        <InsightHeader 
          category={post.categories?.nodes[0]?.name || 'Uncategorized'}
          title={post.title.rendered}
          date={new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
          image={post.featuredImage?.node?.sourceUrl || '/images/insights/fallback.png'}
        />
        
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Meta Info - Full width on mobile, sidebar on desktop */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="lg:sticky lg:top-8">
                <InsightMeta 
                  author={{
                    name: post.author?.node?.name || 'Anonymous',
                    position: post.author?.node?.description || '',
                    avatar: post.author?.node?.avatar?.url || '/images/team/placeholder.jpg'
                  }}
                  date={new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric'
                  })}
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto lg:pr-8">
                <div className="text-black">
                  <InsightContent content={{
                    title: post.title.rendered,
                    subtitle: '',
                    sections: [{
                      content: post.content.rendered
                    }]
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ReadNext currentPostId={post.id} />
      </main>
    );
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }
}