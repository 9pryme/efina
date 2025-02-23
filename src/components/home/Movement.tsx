'use client';

import { Button } from '@/src/components/ui/Button';

export const Movement = () => {
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

        {/* Video Container */}
        <div className="mt-8 md:mt-16 rounded-2xl md:rounded-3xl overflow-hidden aspect-video relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-6 md:h-6"
              >
                <path 
                  d="M8 5v14l11-7z" 
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <video
            poster="/images/movement-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/videos/movement.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};