'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ResearchCardProps {
  title: string;
  content: string | React.ReactNode;
  links?: Array<{
    text: string;
    href: string;
  }>;
  isDark?: boolean;
  index: number;
}

export const ResearchCard = ({ title, content, links, isDark, index }: ResearchCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`rounded-[30px] overflow-hidden shadow-sm ${index !== 0 ? '-mt-4' : ''} relative z-[${10 - index}] w-full md:w-[900px] min-h-[300px] md:h-[500px]`}
    >
      <div className={`${isDark ? 'bg-[#1A1A1A]' : 'bg-white'} h-full`}>
        <div className="p-4 md:p-8 lg:p-12 overflow-y-auto">
          <h2 className={`text-xl md:text-2xl font-display ${isDark ? 'text-white' : 'text-gray-900'} mb-4 md:mb-6`}>
            {title}
          </h2>
          
          <div className={`space-y-4 md:space-y-6 ${isDark ? 'text-gray-400' : 'text-gray-700'} mb-6 md:mb-8 text-sm md:text-base`}>
            {typeof content === 'string' ? <p>{content}</p> : content}
          </div>

          {links && (
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {links.map((link, i) => (
                <Link 
                  key={i}
                  href={link.href}
                  className={`inline-flex items-center font-medium text-sm md:text-base ${
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
      </div>
    </motion.div>
  );
};