'use client';

import { Button } from '@/src/components/ui/Button';

export const Movement = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="font-display text-[72px] leading-[80px] mb-8">
              A financial movement for everyone.
            </h2>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-lg">
              Bridging Nigeria&apos;s financial access to economic empowerment. We are transforming data into action, innovation into impact, and challenges into opportunities—empowering every Nigerian.
            </p>
            <p className="text-lg">
              With technology and collaboration at our core, we are reshaping 
              the future—one that empowers every Nigerian to participate fully in 
              the economy, achieve their aspirations, and contribute to a shared 
              prosperity.
            </p>
            <div className="pt-4">
              <Button
                href="/about"
                variant="outline"
                className="text-white border-white hover:bg-white/10 rounded-full text-sm"
              >
                Who we are
              </Button>
            </div>
          </div>
        </div>

        {/* Video Container */}
        <div className="mt-16 rounded-3xl overflow-hidden aspect-video relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
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