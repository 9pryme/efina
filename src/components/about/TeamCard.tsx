'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  index: number;
  fallbackColor: string;
  bio?: string;
}

export const TeamCard = ({ name, position, image, index, fallbackColor, bio }: TeamCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

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
      className="group perspective"
      onMouseEnter={() => bio && setIsFlipped(true)}
      onMouseLeave={() => bio && setIsFlipped(false)}
    >
      <div 
        className={`
          relative w-full transition-transform duration-500 transform-style-3d
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* Front of card */}
        <div className="backface-hidden w-full">
          <div 
            className={`
              relative aspect-[3/4] overflow-hidden rounded-2xl mb-4
              ${imageError ? fallbackColor : ''}
              ${!bio ? 'transition-transform duration-500 group-hover:scale-110' : ''}
            `}
          >
            {!imageError ? (
              <Image
                src={image}
                alt={name}
                fill
                className={`
                  object-cover 
                  ${!bio ? 'transition-transform duration-500 group-hover:scale-110' : ''}
                `}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-display">
                  {name.split(' ').map(word => word[0]).join('')}
                </span>
              </div>
            )}
          </div>
          <h3 className="font-display text-xl text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{position}</p>
        </div>

        {/* Back of card - Only render if bio exists */}
        {bio && (
          <div 
            className={`
              absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden
              bg-white rounded-2xl p-6 shadow-lg overflow-hidden
            `}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="overflow-y-auto">
                <h3 className="font-display text-xl text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-600 leading-relaxed md:text-sm text-xs">{bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}; 