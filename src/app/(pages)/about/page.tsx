import { AboutHero } from '@/src/components/about/AboutHero';
import { WhoWeAre } from '@/src/components/about/WhoWeAre';
import { FinancialInclusion } from '@/src/components/about/FinancialInclusion';
import { Established } from '@/src/components/about/Established';
import { Values } from '@/src/components/about/Values';
import { Leadership } from '@/src/components/about/Leadership';
import { Team } from '@/src/components/about/Team';
import { Donors } from '@/src/components/about/Donors';
import { Partners } from '@/src/components/shared/Partners';

export default function About() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <FinancialInclusion />
      <Established />
      <Values />
      <Leadership />
      <div className="h-[150px] bg-white"></div>
      <Team />
      <Donors />
      <Partners />
    </main>
  );
} 