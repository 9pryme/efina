'use client';

import { Button } from '@/src/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end pb-20">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full grayscale"
            style={{ objectPosition: '90% center' }}
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#9C9C9C]/90 to-transparent" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-30 -translate-y-[40px]">
        <div className="relative">
          <div className="absolute right-[600px] -left-[100vw] h-full bg-black/60 rounded-tr-[30px] rounded-br-[30px]" />
          <div className="max-w-[750px] text-white relative py-9 px-[5px]">
            <h1 className="font-display font-bold text-[56px] leading-[60px] mb-6">
              A new era of<br />financial access for all
            </h1>
            <p className="text-lg mb-8">
              Transforming Communities Through Data-Driven Financial Inclusion
            </p>
            <div>
              <Button 
                href="/what-we-do"
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 hover:text-white inline-flex items-center gap-2"
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