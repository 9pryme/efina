import { InsightHero } from '@/src/components/insights/InsightHero';
import { InsightsGrid } from '@/src/components/insights/InsightsGrid';
import { mockPosts } from '@/src/data/mockPosts';

export default async function InsightsPage() {
  return (
    <>
      <InsightHero 
        title="Insights"
        description="Stay informed with our latest research, insights, and updates on financial inclusion in Nigeria."
      />
      <InsightsGrid 
        posts={mockPosts} 
        categories={[
          { id: '1', name: 'Report', slug: 'report', count: 1 },
          { id: '2', name: 'Press Statement', slug: 'press-statement', count: 1 },
          { id: '3', name: 'Event', slug: 'event', count: 1 }
        ]} 
      />
    </>
  );
}