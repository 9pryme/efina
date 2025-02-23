import { AdvocacyHero } from '@/src/components/advocacy/AdvocacyHero';
import { ResearchIntro } from '@/src/components/research/ResearchIntro';
import { ResearchCards } from '@/src/components/research/ResearchCards';

export default function ResearchPage() {
  return (
    <main>
      <AdvocacyHero 
        title="Research"
        description="One of the biggest hurdles to improving access to retail financial services is the absence of relevant and reliable data and analysis about how individuals and households manage their finances."
      />
      <ResearchIntro />
      <ResearchCards />
    </main>
  );
} 