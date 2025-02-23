'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Framework = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] py-12 md:py-0 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/framework-bg.jpg"
          alt="Framework background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <div className="max-w-[1000px] w-full">
          <h2 className="font-['Raleway'] text-[32px] md:text-[64px] leading-[1.2] md:leading-[60px] text-white mb-6 md:mb-8 tracking-[-0.04em]">
            Collaborative efforts with regulators
            have led to new{' '}
            <span className="inline-block bg-white text-black px-3 py-1 rounded-2xl transform -rotate-3 text-[28px] md:text-[52px] font-medium">
              Frameworks
            </span>
            {' '}supporting agent banking, reaching
            previously underserved communities.
          </h2>

          <div className="flex justify-start">
            <button 
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 text-white border border-white/30 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base hover:bg-white/10 transition-colors"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white md:w-6 md:h-6"
              >
                <path 
                  d="M8 5v14l11-7z" 
                  fill="currentColor"
                />
              </svg>
              Watch how we achieved this
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              Close
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UijMe1blOio"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};