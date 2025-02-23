'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface InsightCardProps {
  category: string;
  title: string;
  date: string;
  duration: string;
  image?: string;
  href: string;
  index: number;
}

export const InsightCard = ({ category, title, date, duration, image, href, index }: InsightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true }}
    >
      <Link href={href} className="block group">
        <div className="bg-white border border-[#EAEEF2] rounded-2xl overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-[4/3] bg-[#EAEEF2] flex items-center justify-center">
            <Image
              src={image || '/images/insights/fallback.png'}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#EAEEF2] text-sm text-gray-900 mb-4">
              {category}
            </div>
            <h3 className="font-display text-xl text-gray-900 mb-4 group-hover:text-gray-600 transition-colors line-clamp-2">
              {title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{date}</span>
              <span>•</span>
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}; 