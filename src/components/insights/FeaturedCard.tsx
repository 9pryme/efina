'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface FeaturedCardProps {
  category: string;
  title: string;
  date: string;
  duration: string;
  image: string;
  href: string;
}

export const FeaturedCard = ({ category, title, date, duration, image, href }: FeaturedCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  // Generate a consistent pastel color based on the title
  const pastelColor = `bg-[#${Math.floor(Math.random()*16777215).toString(16)}]`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute left-[25%] -translate-x-1/2 bottom-0 translate-y-[75%] w-[90%] max-w-[1000px]"
    >
      <Link href={href} className="block group">
        <div className="flex bg-white shadow-lg overflow-hidden rounded-l-2xl h-[400px]">
          {/* Left Part - Video Thumbnail */}
          <div className={`relative w-[400px] ${imageError ? 'bg-[#F3F4F6]' : ''}`}>
            {!imageError ? (
              <>
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
              </>
            ) : (
              <div className={`absolute inset-0 ${pastelColor} bg-opacity-30 flex items-center justify-center`}>
                <div className="text-4xl font-display text-gray-600">
                  {title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Right Part - Content */}
          <div className="flex-1 p-8">
            <div className="inline-block px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-900 mb-4">
              {category}
            </div>
            <h2 className="font-display text-2xl text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
              {title}
            </h2>
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