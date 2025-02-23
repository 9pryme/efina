'use client';

import Image from 'next/image';

export const BeliefsSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[4/3] md:aspect-[16/9] relative">
            <div className="absolute inset-0 rounded-lg md:rounded-2xl overflow-hidden">
              <Image
                src="/images/random/ad.png"
                alt="Advocacy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};