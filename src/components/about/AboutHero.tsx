'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <>
      <section className="relative min-h-[60vh] bg-black text-white overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-yellow-500/20 to-red-500/20 blur-3xl"
            />
          </div>
          <div className="absolute -right-20 top-40">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-[300px] h-[200px] rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-40 pb-40">
          <div className="relative z-20">
            {/* Text Content */}
            <div className="max-w-[50%]">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-[72px] leading-[1.1] mb-6"
              >
                About
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300"
              >
                Enhancing Financial Innovation & Access (EFInA) is a Financial Sector Deepening (FSD) organisation
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[30vh] bg-white">
        {/* Absolutely positioned image that overlaps both sections */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute -top-[200px] -right-[400px] w-[1678px] h-[400px] z-10"
        >
          <Image
            src="/images/about-hero.png"
            alt="EFInA team member speaking at an event"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-4 py-20">
          {/* Content for white section */}
        </div>
      </section>
    </>
  );
}; 