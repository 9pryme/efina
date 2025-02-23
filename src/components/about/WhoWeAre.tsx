'use client';

import Image from 'next/image';
import { Button } from '@/src/components/ui/Button';
import { motion } from 'framer-motion';

export const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-[56px] leading-[1.2] mb-16 text-gray-900"
        >
          Who we are?
        </motion.h2>

        <div className="grid grid-cols-2 gap-20">
          {/* Left Column - Text Content */}
          <div className="space-y-6 mt-[150px]">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-800"
            >
              Enhancing Financial Innovation & Access (EFInA) is a Financial Sector Deepening (FSD) organisation that promotes inclusive finance in Nigeria. The FSD Network is a family of nine Financial Sector Deepening, or FSD, programmes operating across Africa.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-gray-800"
            >
              EFInA is renowned, within Nigeria&apos;s financial sector, for providing thought leadership toward achieving financial inclusion and championing the unbanked. By funding and catalysing innovation, providing cutting-edge research, advocating for inclusive policies, and building capacity, EFInA has gained a reputation as an &quot;honest broker&quot; among the private and public sectors in Nigeria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button 
                href="/about/fsd"
                variant="outline"
                className="rounded-full text-gray-900 border-gray-900 hover:bg-gray-100"
              >
                Read more about FSD →
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-800"
            >
              EFInA was established with support from the UK&apos;s Foreign Commonwealth & Development Office (FCDO) in 2007 and began receiving funding support from the Bill & Melinda Gates Foundation in 2009.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/mission.jpg"
                alt="Modern office building"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}; 