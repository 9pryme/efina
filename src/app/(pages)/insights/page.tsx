import { InsightHero } from '@/src/components/insights/InsightHero';
import { InsightsGrid } from '@/src/components/insights/InsightsGrid';
import { getPosts, getCategories } from '@/src/lib/wordpress';

export default async function InsightsPage() {
  try {
    const [posts, categories] = await Promise.all([
      getPosts(),
      getCategories()
    ]);

    return (
      <main>
        <InsightHero 
          title="Insights"
          description="Stay informed with our latest research, insights, and updates on financial inclusion in Nigeria."
        />
        <InsightsGrid posts={posts} categories={categories} />
      </main>
    );
  } catch (error) {
    console.error('Error loading insights:', error);
    return (
      <main>
        <InsightHero 
          title="Insights"
          description="Stay informed with our latest research, insights, and updates on financial inclusion in Nigeria."
        />
        <div className="container mx-auto px-4 py-12">
          <p className="text-center text-gray-600">
            Failed to load insights. Please try again later.
          </p>
        </div>
      </main>
    );
  }
}