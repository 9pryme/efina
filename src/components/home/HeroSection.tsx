'use client';

import { Button } from '@/src/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end pb-12 md:pb-20">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full grayscale"
            style={{ objectPosition: 'center center' }}
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 md:from-[#9C9C9C]/90 to-transparent" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-30 -translate-y-[20px] md:-translate-y-[40px]">
        <div className="relative">
          <div className="absolute right-0 md:right-[600px] -left-[100vw] h-full bg-black/60 md:rounded-tr-[30px] md:rounded-br-[30px]" />
          <div className="max-w-full md:max-w-[750px] text-white relative py-6 md:py-9 px-[5px]">
            <h1 className="font-display font-bold text-[32px] md:text-[56px] leading-[1.2] md:leading-[60px] mb-4 md:mb-6">
              A new era of<br />financial access for all
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8">
              Transforming Communities Through Data-Driven Financial Inclusion
            </p>
            <div>
              <Button 
                href="/what-we-do"
                variant="outline"
                size="lg"
                className="w-full md:w-auto text-white border-white hover:bg-white/10 hover:text-white inline-flex items-center justify-center md:justify-start gap-2"
              >
                More on what we do
                <span className="text-xl">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};