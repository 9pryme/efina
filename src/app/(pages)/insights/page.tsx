import { InsightHero } from '@/src/components/insights/InsightHero';
import { InsightsGrid } from '@/src/components/insights/InsightsGrid';

const featuredInsight = {
  category: "News",
  title: "Watch: Diagnostic Survey of Forcibly Displaced Persons (FDPs) in Nigeria",
  date: "November 15, 2024",
  duration: "3mins",
  image: "/images/insights/fdp-survey.jpg",
  href: "/insights/fdp-survey"
};

export default function InsightsPage() {
  return (
    <main className="bg-white">
      <InsightHero featuredInsight={featuredInsight} />
      <InsightsGrid />
    </main>
  );
}