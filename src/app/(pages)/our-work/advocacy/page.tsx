import { AdvocacyHero } from '@/src/components/advocacy/AdvocacyHero';
import { IntroSection } from '@/src/components/advocacy/IntroSection';
import { BeliefsSection } from '@/src/components/advocacy/BeliefsSection';
import { CapacityBuildingSection } from '@/src/components/advocacy/CapacityBuildingSection';
import { JournalistTrainingSection } from '@/src/components/advocacy/JournalistTrainingSection';

export default function AdvocacyPage() {
  return (
    <main>
      <AdvocacyHero 
        title="Advocacy"
        description="EFInA uses advocacy and capacity building as a tool for facilitating the emergence of an all-inclusive and growth promoting financial system in Nigeria."
        bannerImage="banners/advocacy"
      />
      <IntroSection />
      <BeliefsSection />
      <CapacityBuildingSection />
      <JournalistTrainingSection />
    </main>
  );
} 