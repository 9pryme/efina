import { AdvocacyHero } from '@/src/components/advocacy/AdvocacyHero';
import { InnovationIntro } from '@/src/components/innovation/InnovationIntro';
import { InnovationFund } from '@/src/components/innovation/InnovationFund';
import { GrantTypes } from '@/src/components/innovation/GrantTypes';

export default function InnovationPage() {
  return (
    <main>
      <AdvocacyHero 
        title="Innovation"
        description="EFInA's focus on supporting Innovation to promote financial sector development and financial inclusion is implemented through the EFInA Innovation Fund and a series of innovation fora."
        bannerImage="banners/innovation"
      />
      <InnovationIntro />
      <InnovationFund />
      <GrantTypes />
    </main>
  );
} 