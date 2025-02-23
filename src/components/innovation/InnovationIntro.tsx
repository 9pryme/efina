'use client';

import { motion } from 'framer-motion';

export const InnovationIntro = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            The Innovation fund was launched in 2009 while the innovation fora was designed to trigger debate, disseminate information and stimulate ideas about access to finance and other pertinent issues in the Nigerian financial sector
          </motion.p>
        </div>
      </div>
    </section>
  );
}; 