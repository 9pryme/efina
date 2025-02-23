'use client';

import { HeroSection } from '@/src/components/home/HeroSection';
import { Focus } from '@/src/components/home/Focus';
import { StatsSection } from '@/src/components/home/StatsSection';
import { LatestInsights } from '@/src/components/home/LatestInsights';
import { Movement } from '@/src/components/home/Movement';
import { Framework } from '@/src/components/home/Framework';
import { Initiatives } from '@/src/components/home/Initiatives';
import { Partners } from '@/src/components/shared/Partners';

export function Home() {
  return (
    <main>
      <HeroSection />
      <Focus />
      <LatestInsights />
      <Movement />
      <Framework />
      <StatsSection />
      <Initiatives />
      <Partners />
    </main>
  );
} 