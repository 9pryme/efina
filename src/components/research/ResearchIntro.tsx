'use client';

import { motion } from 'framer-motion';

export const ResearchIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            To this end, in pursuit of our goal of providing credible market information on the Nigerian financial sector, EFInA launched its biennial Access to Financial Services in Nigeria survey in 2008 The EFInA Access to Financial Services in Nigeria Survey is our flagship research tool. The survey provides relevant and reliable data on the demand for and use of financial services by the adult population in Nigeria. All datasets are free and can be accessed by sending an email with a brief proposal indicating the purpose for which the data is required to{' '}
            <a href="mailto:info@efina.org.ng" className="text-red-500 hover:text-red-600">
              info@efina.org.ng
            </a>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
}; 