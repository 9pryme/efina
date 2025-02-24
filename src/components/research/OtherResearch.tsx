'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const OtherResearch = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] rounded-xl overflow-hidden"
          >
            <div className="p-12">
              <h2 className="text-2xl font-display text-white mb-6">
                Other Research
              </h2>
              <p className="text-gray-400 mb-8">
                We have also conduct several other quantitative and qualitative studies covering both the demand side (i.e. consumer) and supply side (financial services providers)
              </p>
              <Link 
                href="#"
                className="inline-flex items-center text-white font-medium hover:text-gray-200"
              >
                View Research
                <span className="ml-2">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 