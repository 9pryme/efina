'use client';

import { useEffect, useRef } from 'react';
import { ResearchCard } from './ResearchCard';

const cards = [
  {
    title: "Access to Financial Services in Nigeria survey",
    content: "EFInA launched its first Access to Financial services in Nigeria survey in 2008. Subsequent surveys were undertaken in 2010, 2012, 2014, 2016 and 2018. The EFInA Access to Financial Services in Nigeria 2018 was recently disseminated on Tuesday, December 11, 2018. The findings from the survey shows 36.8% of the adult population are financially excluded and it highlight the opportunities to extend financial services to the unbanked and under-banked low income segments in the country. The EFInA Access to Financial Services in Nigeria survey is referenced and covers over 20,000 consumers. All datasets are free and can be accessed by sending an email with a brief proposal indicating the purpose for which the data is required to info@efina.org",
    links: [
      {
        text: "View Survey Results",
        href: "#"
      }
    ]
  },
  {
    title: "Assessment of Women&apos;s Financial Inclusion in Nigeria",
    content: (
      <>
        <p>
          The gender gap in Nigeria represents a major issue to be resolved if the country is to achieve the targets it set in its National Financial Inclusion Strategy (NFIS). This gender gap is larger than in most other countries, and while financial inclusion is increasing for both men and women, the gender gap is widening.
        </p>
        <p>
          In contrast, comparator countries in Africa such as Kenya, South Africa, Tanzania, and Uganda all exhibit a decreasing gender gap. The gender gap in Nigeria represents a major issue to be resolved if the country is to achieve the targets it set in its National Financial Inclusion Strategy (NFIS).
        </p>
        <p>
          Through the analysis of gender specific data, this study seeks to better understand: a) how supply, access and usage of financial services between men and women in Nigeria, b) what specific gaps and challenges impact Nigerian women&apos;s access to financial services, and c) what can be done by CBN, EFInA and its partners to address the gender gap and reduce inequality.
        </p>
      </>
    ),
    links: [
      {
        text: "View Executive Summary",
        href: "#"
      },
      {
        text: "Full Survey Report",
        href: "#"
      }
    ]
  },
  {
    title: "Other Research",
    content: "We have also conduct several other quantitative and qualitative studies covering both the demand side (i.e. consumer) and supply side (financial services providers)",
    links: [
      {
        text: "View Research",
        href: "#"
      }
    ],
    isDark: true,
    image: {
      src: "/images/research/library.jpg",
      alt: "Library"
    }
  }
];

export const ResearchCards = () => {
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
        lastCard.style.bottom = '40vh';
        lastCard.style.top = 'auto';
      } else {
        lastCard.style.position = 'sticky';
        lastCard.style.top = `calc(20vh + ${(cards.length - 1) * 8}px)`;
        lastCard.style.bottom = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="relative space-y-[60vh] pb-[40vh] flex flex-col items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="transition-transform duration-700 translate-y-full w-full max-w-[900px]"
              style={{
                position: 'sticky',
                top: `calc(20vh + ${index * 8}px)`,
              }}
            >
              <ResearchCard {...card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};