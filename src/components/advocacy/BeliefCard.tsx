'use client';

import { motion } from 'framer-motion';

interface BeliefCardProps {
  text: string;
  index: number;
}

export const BeliefCard = ({ text, index }: BeliefCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-100 rounded-lg p-6"
    >
      <div className="flex flex-col gap-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <p className="text-gray-900 text-lg">{text}</p>
      </div>
    </motion.div>
  );
}; 