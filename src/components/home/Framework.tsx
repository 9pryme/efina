import Image from 'next/image';

export const Framework = () => {
  return (
    <section className="relative h-[80vh]">
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
        <div className="max-w-[1000px]">
          <h2 className="font-['Raleway'] text-[64px] leading-[60px] text-white mb-8 tracking-[-0.04em]">
            Collaborative efforts with regulators<br />
            have led to new{' '}
            <span className="inline-block bg-white text-black px-3 py-1 rounded-2xl transform -rotate-3 text-[52px] font-medium">
              Frameworks
            </span><br />
            supporting agent banking, reaching<br />
            previously underserved communities.
          </h2>

          <div className="flex justify-start">
            <button 
              className="inline-flex items-center gap-2 text-white border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-colors"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
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
    </section>
  );
}; 