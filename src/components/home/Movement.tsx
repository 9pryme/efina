'use client';

import { useState } from 'react';
import { Button } from '@/src/components/ui/Button';
import Image from 'next/image';
import { Play } from 'lucide-react';

export const Movement = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-black text-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="font-display text-[32px] md:text-[72px] leading-[1.2] md:leading-[80px] mb-6 md:mb-8">
              A financial movement for everyone.
            </h2>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg">
              Bridging Nigeria&apos;s financial access to economic empowerment. We are transforming data into action, innovation into impact, and challenges into opportunities—empowering every Nigerian.
            </p>
            <p className="text-base md:text-lg">
              With technology and collaboration at our core, we are reshaping 
              the future—one that empowers every Nigerian to participate fully in 
              the economy, achieve their aspirations, and contribute to a shared 
              prosperity.
            </p>
            <div className="pt-2 md:pt-4">
              <Button
                href="/about"
                variant="outline"
                className="w-full md:w-auto text-white border-white hover:bg-white/10 rounded-full text-sm"
              >
                Who we are
              </Button>
            </div>
          </div>
        </div>

        {/* Video Container with Thumbnail */}
        <div className="mt-8 md:mt-16 rounded-2xl md:rounded-3xl overflow-hidden aspect-video relative max-w-4xl mx-auto">
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/dkWfyVrqS4g?autoplay=1"
              title="EFInA Movement Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          ) : (
            <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
              <Image
                src="/images/movement/movement-poster.jpg"
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};