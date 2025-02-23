'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface DonorCardProps {
  name: string;
  logo: string;
  description: string;
  bgColor: string;
  index: number;
}

export const DonorCard = ({ name, logo, description, bgColor, index }: DonorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.2
        }
      }}
      viewport={{ once: true }}
      className={`rounded-3xl overflow-hidden ${bgColor} group w-full max-w-sm mx-auto`}
    >
      <div className="aspect-[3/2] relative">
        {/* Background Image */}
        <Image
          src={`/images/donors/${name === 'FCDO' ? 'fcdo.png' : 'gates.png'}`}
          alt=""
          fill
          className="object-cover opacity-90"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Logo */}
        <div className="relative h-full p-4 sm:p-8 flex items-center justify-center">
          <div className="relative w-32 sm:w-48 h-16 sm:h-24">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-white mx-2 sm:mx-4 mb-2 sm:mb-4 rounded-2xl p-3 sm:p-4 h-[200px] sm:h-[250px] flex flex-col">
        <h3 className="font-display text-xl sm:text-2xl text-gray-900 mb-2 sm:mb-4">{name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1 overflow-y-auto">{description}</p>
      </div>
    </motion.div>
  );
}; 