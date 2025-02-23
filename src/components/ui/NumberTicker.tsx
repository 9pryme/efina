'use client';

import { useEffect, useRef } from 'react';
import { useInView, motion, useSpring } from 'framer-motion';

interface NumberTickerProps {
  value: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const NumberTicker = ({ value, prefix, suffix, className = '' }: NumberTickerProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const numberValue = parseFloat(value.replace(/,/g, ''));
  
  const animatedValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2
  });

  useEffect(() => {
    if (inView) {
      animatedValue.set(numberValue);
    }
  }, [inView, numberValue, animatedValue]);

  return (
    <motion.span 
      ref={ref}
      className={className}
    >
      {prefix}
      <motion.span>{animatedValue}</motion.span>
      {suffix}
    </motion.span>
  );
}; 