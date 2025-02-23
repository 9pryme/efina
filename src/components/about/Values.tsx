'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Marquee } from '@/src/components/shared/Marquee';

const topValues = ['Professionalism', 'Objectivity', 'Innovativeness'];
const bottomValues = ['Objectivity', 'Integrity', 'Commitment'];

export const Values = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-20 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-wider text-gray-700 mb-4"
            >
              OUR VALUES
            </motion.span>
            
            <h2 className="font-display text-[44px] leading-[1.2] text-gray-900">
              We are deeply committed to equity between men and women and supporting the vulnerable and marginalised.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative rounded-full overflow-hidden w-[400px] h-[400px]">
              <Image
                src="/images/about/values.jpg"
                alt="Diverse group of people"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Text */}
      <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw]">
        <Marquee 
          items={topValues}
          direction="right"
          speed={30}
          className="mb-4 font-raleway tracking-[-4px] font-bold"
        />
        <Marquee 
          items={bottomValues}
          direction="left"
          speed={30}
          className="font-raleway tracking-[-4px] font-bold"
        />
      </div>
    </section>
  );
}; 