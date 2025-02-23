'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface AdvocacyHeroProps {
  title: string;
  description: string;
  bannerImage: string; // Add banner image prop
}

export const AdvocacyHero = ({ title, description, bannerImage }: AdvocacyHeroProps) => {
  return (
    <>
      <section className="relative min-h-[400px] md:min-h-[600px] bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/banners/hero-bg.png"
            alt="Advocacy background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 pt-32 pb-12 md:py-48">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 mt-16 md:mt-0">
            {/* Left Column - Header */}
            <div className="w-full md:flex-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl md:text-[72px] leading-[1.1] text-white mb-2 md:mb-6"
              >
                {title}
              </motion.h1>
            </div>

            {/* Right Column - Body Text */}
            <div className="w-full md:flex-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* White Section */}
      <section className="bg-white">
        {/* Overlapping Image Container */}
        <div className="relative -mt-[50px] md:-mt-[200px]">
          <div className="container mx-auto px-4">
            <div className="flex justify-end">
              <div className="relative w-full md:w-[1500px] h-[200px] md:h-[400px] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src={bannerImage}
                  alt="Banner image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Extra white space below */}
        <div className="h-[25px] md:h-[50px]" />
      </section>
    </>
  );
}; 