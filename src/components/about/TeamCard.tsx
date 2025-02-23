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
      className="group perspective w-full sm:w-[calc(50%-1rem)]" // Adjusted for 2 column grid on mobile
      onClick={() => bio && window.innerWidth <= 768 && setIsFlipped(!isFlipped)} // Touch interaction for mobile
      onMouseEnter={() => bio && window.innerWidth > 768 && setIsFlipped(true)}
      onMouseLeave={() => bio && window.innerWidth > 768 && setIsFlipped(false)}
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
              relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4
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
                <span className="text-2xl sm:text-4xl font-display">
                  {name.split(' ').map(word => word[0]).join('')}
                </span>
              </div>
            )}
          </div>
          <h3 className="font-display text-lg sm:text-xl text-gray-900">{name}</h3>
          <p className="text-xs sm:text-sm text-gray-600">{position}</p>
        </div>

        {/* Back of card - Only render if bio exists */}
        {bio && (
          <div 
            className={`
              absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden
              bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg
            `}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg sm:text-xl text-gray-900 mb-2">{name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-[12]">{bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}; 