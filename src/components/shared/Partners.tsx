'use client';

import { Ticker } from './Ticker';

const partners = [
  {
    name: 'FSDT',
    logo: '/images/partners/fsdt.png'
  },
  {
    name: 'FST', 
    logo: '/images/partners/fsd.png'
  },
  {
    name: 'FMT',
    logo: '/images/partners/fmt.png'
  }
];

export const Partners = () => {
  const partnerItems = partners.map(partner => (
    `<img src="${partner.logo}" alt="${partner.name}" class="h-8 md:h-12 w-auto transition-opacity duration-300 hover:opacity-80" />`
  ));

  return (
    <section className="py-8 md:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-500 text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-8">
          Our Partners & Donors
        </h3>
        
        <div className="relative max-w-full md:max-w-5xl mx-auto">
          <Ticker 
            items={partnerItems}
            speed={20}
            direction="left"
            className="py-2 md:py-4"
          />
        </div>
      </div>
    </section>
  );
};