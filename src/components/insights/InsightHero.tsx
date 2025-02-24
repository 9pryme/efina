'use client';

import { motion } from 'framer-motion';
import { CloudinaryImage } from '@/src/components/ui/CloudinaryImage';

interface InsightHeroProps {
  title: string;
  description: string;
}

export const InsightHero = ({ title, description }: InsightHeroProps) => {
  return (
    <>
      <section className="relative min-h-[400px] md:min-h-[600px] bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <CloudinaryImage
            src="insights/bg"
            alt="Insights background"
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
                <iframe
                  src="https://www.youtube.com/embed/ocdV9tbm8jg"
                  title="YouTube video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
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