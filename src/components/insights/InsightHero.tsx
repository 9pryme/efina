'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FeaturedCard } from './FeaturedCard';

interface InsightHeroProps {
  featuredInsight?: {
    category: string;
    title: string;
    date: string;
    duration: string;
    image: string;
    href: string;
  };
}

export const InsightHero = ({ featuredInsight }: InsightHeroProps) => {
  return (
    <>
      <section className="relative h-[500px] overflow-visible">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/insights/bg.png"
            alt="Background pattern"
            fill
            className="object-cover opacity-100"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="container mx-auto px-4 h-full">
            <div className="relative z-20 flex items-center h-full">
              {/* Left Column - Header */}
              <div className="flex-1">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="font-display text-[72px] leading-[1.1] mb-6 text-white"
                >
                  Insights
                </motion.h1>
              </div>

              {/* Right Column - Body Text */}
              <div className="flex-1">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-white"
                >
                  Enhancing Financial Innovation & Access (EFInA) is a Financial Sector Deepening (FSD) organisation
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Card */}
      <div className="relative -mt-[-250px]">
        <div className="container mx-auto pl-[-100px]">
          <div className="relative flex justify-end pr-0">
            {featuredInsight && <FeaturedCard {...featuredInsight} />}
          </div>
        </div>
      </div>

      {/* Spacer for Featured Card overflow */}
      <div className="h-[100px]" />
    </>
  );
};