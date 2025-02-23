'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface LeadershipCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedIn: string;
  index: number;
  total: number;
}

export const LeadershipCard = ({ name, title, bio, image, linkedIn, index, total }: LeadershipCardProps) => {
  const reverseDelay = (total - index - 1) * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: reverseDelay
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-2xl p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.05),0_-4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.05),0_-20px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative w-full md:w-[200px] h-[200px] md:h-[240px] shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-xl md:text-2xl text-gray-900 mb-1">{name}</h3>
            <p className="text-sm md:text-base text-gray-600">{title}</p>
          </div>
          <Link 
            href={linkedIn}
            target="_blank"
            className="text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
};