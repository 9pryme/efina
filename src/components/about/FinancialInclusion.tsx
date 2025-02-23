'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const FinancialInclusion = () => {
  return (
    <section className="relative bg-[#008F60] text-white h-[700px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src="/images/about/pattern.svg"
          alt=""
          width={1920}
          height={70}
          className="w-full object-cover h-[70px] opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="font-display text-[56px] leading-[1.2] mb-8">
            What is Financial Inclusion?
          </h2>
          
          <div className="space-y-8 text-xl">
            <p>
              Financial inclusion is the provision of a broad range of high quality financial products, such as savings, credit, insurance, payments and pensions, which are relevant, appropriate and affordable for the entire adult population, especially the low income segment.
            </p>
            
            <p>
              An inclusive financial sector is characterised by the diversity of financial services providers, the level of competition between them, and the legal and regulatory environments that ensure the integrity of the financial sector and access to financial services for all.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 