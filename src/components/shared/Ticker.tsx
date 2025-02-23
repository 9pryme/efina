'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface TickerProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export const Ticker = ({ 
  items, 
  speed = 20, 
  direction = 'left',
  className = ''
}: TickerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const contentWidth = container.scrollWidth;
    const startPosition = direction === 'left' ? 0 : -contentWidth + container.offsetWidth;
    const endPosition = direction === 'left' ? -contentWidth + container.offsetWidth : 0;

    const animate = async () => {
      controls.set({ x: startPosition });
      await controls.start({
        x: endPosition,
        transition: {
          duration: contentWidth / speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        },
      });
    };

    animate();

    return () => {
      controls.stop();
    };
  }, [controls, direction, speed, items]);

  return (
    <div className="relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
      
      {/* Ticker content */}
      <div 
        ref={containerRef} 
        className={`overflow-hidden whitespace-nowrap ${className}`}
      >
        <motion.div
          className="inline-flex items-center justify-center gap-16 w-full"
          animate={controls}
        >
          {items.map((item, index) => (
            <span 
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
              className="inline-block"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};