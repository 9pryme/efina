import { AdvocacyHero } from '@/src/components/advocacy/AdvocacyHero';
import { IntroSection } from '@/src/components/systems/IntroSection';
import { CapacityBuildingSection } from '@/src/components/systems/CapacityBuildingSection';
import { TechnicalAdvisorySection } from '@/src/components/systems/TechnicalAdvisorySection';

export default function SystemsEngineeringPage() {
  return (
    <main>
      <AdvocacyHero 
        title="Systems Strengthening"
        description="As a market facilitator, EFInA provides capacity building and technical advisory to eco-system stakeholders including policymakers, regulators, and financial service providers."
        bannerImage="/images/banners/systems.png"
      />
      <IntroSection />
      <CapacityBuildingSection />
      <TechnicalAdvisorySection />
    </main>
  );
} 