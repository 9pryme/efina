'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const JournalistTrainingSection = () => {
  return (
    <section className="py-12 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[56px] font-display text-white mb-8 md:mb-16"
          >
            Journalist Training
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] rounded-lg md:rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-6 md:p-12">
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  Enhancing Financial Innovation & Access (EFInA) regularly host innovation fora and workshops to trigger debate and stimulate discussions on pertinent issues in the financial sector. Financial journalists are instrumental to the process of disseminating information and educating the populace on how to improve access to financial services and enhance financial inclusion in Nigeria.
                </p>
              </div>

              {/* Image */}
              <div className="relative h-[300px] md:h-full md:min-h-[400px]">
                <Image
                  src="/images/random/journalist-training.jpg"
                  alt="Journalist Training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 