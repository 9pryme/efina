'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface AdvocacyHeroProps {
  title: string;
  description: string;
}

export const AdvocacyHero = ({ title, description }: AdvocacyHeroProps) => {
  return (
    <>
      <section className="relative min-h-[600px] bg-black">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 to-black/20" />
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/advocacy/hero-bg.jpg"
            alt="Advocacy background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 py-48">
          <div className="flex items-center">
            {/* Left Column - Header */}
            <div className="flex-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-[72px] leading-[1.1] text-white mb-6"
              >
                {title}
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
                {description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* White Section */}
      <section className="bg-white">
        {/* Overlapping Image Container */}
        <div className="relative -mt-[200px]">
          <div className="container mx-auto px-4">
            <div className="flex justify-end">
              <div className="relative w-[1500px] h-[400px] bg-blue-500 rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
        
        {/* Extra white space below */}
        <div className="h-[50px]" />
      </section>
    </>
  );
}; 