'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ResearchCardProps {
  title: string;
  content: string | React.ReactNode;
  links?: Array<{
    text: string;
    href: string;
  }>;
  isDark?: boolean;
  image?: {
    src: string;
    alt: string;
  };
  index: number;
}

export const ResearchCard = ({ title, content, links, isDark, image, index }: ResearchCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`rounded-[30px] overflow-hidden shadow-sm ${index !== 0 ? '-mt-4' : ''} relative z-[${10 - index}] w-[900px] h-[500px]`}
    >
      <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-2' : ''} ${isDark ? 'bg-[#1A1A1A]' : 'bg-white'} h-full`}>
        <div className="p-8 lg:p-12 overflow-y-auto">
          <h2 className={`text-2xl font-display ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
            {title}
          </h2>
          
          <div className={`space-y-6 ${isDark ? 'text-gray-400' : 'text-gray-700'} mb-8`}>
            {typeof content === 'string' ? <p>{content}</p> : content}
          </div>

          {links && (
            <div className="flex gap-6">
              {links.map((link, i) => (
                <Link 
                  key={i}
                  href={link.href}
                  className={`inline-flex items-center font-medium ${
                    isDark 
                      ? 'text-white hover:text-gray-200' 
                      : 'text-gray-900 hover:text-gray-600'
                  }`}
                >
                  {link.text}
                  <span className="ml-2">→</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {image && (
          <div className="relative h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};