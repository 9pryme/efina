'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const Marquee = ({ items, direction = 'left', speed = 20, className = '' }: MarqueeProps) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, -1035] : [-1035, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="inline-block"
      >
        {items.map((item, index) => (
          <span key={index} className="inline-block mx-2 md:mx-4 text-[40px] md:text-[80px] font-display text-gray-900">
            {item}
            <span className="text-[#006B48] mx-1 md:mx-2">•</span>
          </span>
        ))}
      </motion.div>
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="inline-block"
      >
        {items.map((item, index) => (
          <span key={index} className="inline-block mx-2 md:mx-4 text-[40px] md:text-[80px] font-display text-gray-900">
            {item}
            <span className="text-[#006B48] mx-1 md:mx-2">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}; 