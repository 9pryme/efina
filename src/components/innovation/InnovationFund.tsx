'use client';

import { motion } from 'framer-motion';
import { CloudinaryImage } from '@/src/components/ui/CloudinaryImage';

const aims = [
  "Generate and pilot new ideas and business models that increase access to financial services for low income customers that are unbanked and under-banked",
  "Support projects that extend the provision of inclusive financial services", 
  "Maximize the impact of EFInA's Innovation Fund by supporting innovative projects that have good potential for replication"
];

export const InnovationFund = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display text-gray-900 mb-6 md:mb-8"
          >
            Innovation Fund
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-sm md:text-base text-gray-700"
              >
                EFInA launched our Innovation Fund to encourage financial services providers to develop and launch products and services targeting the unbanked and under-banked low income segment. The Innovation Fund seeks to support new ideas and approaches to expanding financial access to the unbanked and under-banked population in Nigeria.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm md:text-base text-gray-700"
              >
                As innovation involves taking risks, EFInA shares the risk of developing and implementing innovative products by providing grant subsidies for commercial and policy related initiatives. Innovation is sometimes hard to define, and therefore difficult for prospective bidders to address. The EFInA Innovation Fund focuses on novel ways of providing access to financial services in Nigeria, rather than replicating existing approaches.
              </motion.p>

              <div className="space-y-3 md:space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="font-medium text-sm md:text-base text-gray-900"
                >
                  It aims to:
                </motion.p>
                <ul className="space-y-3 md:space-y-4">
                  {aims.map((aim, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      {aim}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative h-[350px] md:h-auto md:aspect-[4/4] rounded-lg md:rounded-2xl overflow-hidden">
              <CloudinaryImage
                src="v1740330346/random/img"
                alt="Modern building"
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