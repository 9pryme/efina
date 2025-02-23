'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const focusAreas = [
  {
    title: "Research",
    description: "We have conducted several quantitative and qualitative studies covering demand on both sides",
    buttonText: "Read our Research", 
    color: "bg-[#008F60]",
    image: "/images/focus/research.jpg",
    link: "/research",
    width: "w-[898px]"
  },
  {
    title: "Innovation",
    description: "The innovation forum was designed to trigger debate, disseminate information and stimulate ideas",
    buttonText: "Read about our innovations",
    color: "bg-[#DA2734]",
    image: "/images/focus/innovation.jpg", 
    link: "/innovation",
    width: "w-[952px]"
  },
  {
    title: "Systems Engineering",
    description: "As a market Facilitator, EFInA provides capacity building and technical advisory to eco-system stakeholders",
    buttonText: "More info on DSF",
    color: "bg-[#FABA13]",
    image: "/images/focus/dfs.jpg",
    link: "/dfs",
    textColor: "text-black",
    width: "w-[1006px]"
  },
  {
    title: "Advocacy & Capacity Building",
    description: "We facilitate the emergence of an all-inclusive and growth promoting financial system in Nigeria.",
    buttonText: "Read more on this",
    color: "bg-gray-100",
    image: "/images/focus/advocacy.jpg",
    link: "/advocacy",
    textColor: "text-black",
    width: "w-[1060px]"
  }
];

export const Focus = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!section || cards.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sticky');
          entry.target.classList.remove('translate-y-full');
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -20% 0px'
    });

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    const handleScroll = () => {
      const lastCard = cards[cards.length - 1];
      if (!lastCard) return;

      const sectionBottom = section.offsetTop + section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition >= sectionBottom) {
        lastCard.style.position = 'absolute';
        lastCard.style.top = `calc(100% - ${lastCard.offsetHeight}px - 40vh)`;
      } else {
        lastCard.style.position = 'sticky';
        lastCard.style.top = `calc(20vh + ${(cards.length - 1) * 8}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-[#FFFFFF] min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-[40px] leading-[48px] text-center mb-12 text-black font-bold tracking-[-0.04em]">
          We focus on four key pillars to advance<br />financial inclusion.
        </h2>
        
        <div className="relative space-y-[calc(60vh-10px)] pb-[40vh]">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`rounded-3xl overflow-hidden mx-auto ${area.width} transition-transform duration-700 translate-y-full`}
              style={{
                position: 'sticky',
                top: `calc(20vh + ${index * 8}px)`,
              }}
            >
              <div className={`grid grid-cols-2 ${area.color} h-[456px]`}>
                <div className={`p-12 ${area.textColor || 'text-white'} flex flex-col justify-between`}>
                  <div>
                    <h3 className="font-display text-[32px] mb-4 font-bold tracking-[-0.04em]">{area.title}</h3>
                    <p className="text-sm opacity-90">{area.description}</p>
                  </div>
                  <Link 
                    href={area.link}
                    className={`inline-flex items-center text-sm border ${area.textColor ? 'border-black/30' : 'border-white/30'} rounded-full px-6 py-2 ${area.textColor ? 'hover:bg-black/10' : 'hover:bg-white/10'} transition-colors w-fit`}
                  >
                    {area.buttonText}
                  </Link>
                </div>
                <div className="relative h-full">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};