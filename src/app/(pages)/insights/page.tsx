import { InsightHero } from '@/src/components/insights/InsightHero';
import { InsightsGrid } from '@/src/components/insights/InsightsGrid';

export default function InsightsPage() {
  return (
    <main className="bg-white">
      <InsightHero 
        title="Insight"
        description="Enhancing Financial Innovation & Access (EFInA) is a Financial Sector Deepening (FSD) organisation"
      />
      <InsightsGrid />
    </main>
  );
}