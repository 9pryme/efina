'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text Content */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                Our Systems Strengthening tool is built around two thematic areas: Capacity Building
                Initiatives and Technical Advisory Programs. These programs are designed to bridge the
                knowledge and capacity gaps, achieving a more efficient and effective financial market.
              </motion.p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#C9FFED]">
              <Image
                src="/images/random/systems.jpg"
                alt="Systems Strengthening"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};