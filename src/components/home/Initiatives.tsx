'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const initiatives = [
  {
    title: "Access to Financial Services",
    description: "Comprehensive tracking of financial inclusion at the state level across all 36 states in Nigeria",
    logo: "/images/initiatives/access-logo.svg",
    href: "/initiatives/access-to-finance"
  },
  {
    title: "Inclusion for All", 
    description: "Removing barriers to financial inclusion for marginalised Nigerian communities.",
    logo: "/images/initiatives/inclusion-logo.svg",
    href: "/initiatives/inclusion-for-all"
  },
  {
    title: "Gender Centre of Excellence",
    description: "A strategic resource centre that provides much-needed support to the Nigerian financial inclusion",
    logo: "/images/initiatives/gender-logo.svg",
    href: "/initiatives/gender-centre"
  }
];

export const Initiatives = () => {
  return (
    <section className="py-12 md:py-20 bg-[#F3F3F3]">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-[32px] md:text-[56px] leading-[1.2] md:leading-[64px] mb-8 md:mb-16 text-gray-900 font-bold tracking-[-0.04em]">
          Our Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <Link 
              key={initiative.title}
              href={initiative.href}
              className="group"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-green-500 to-orange-500 md:bg-transparent rounded-2xl overflow-hidden w-full md:w-[399px] h-[457px] md:group-hover:bg-gradient-to-br md:group-hover:from-green-500 md:group-hover:to-orange-500 transition-all duration-300 p-4"
              >
                <div className="relative h-[320px] bg-white rounded-xl">
                  <div className="absolute top-4 left-4">
                    <Image
                      src={initiative.logo}
                      alt={`${initiative.title} Logo`}
                      width={80}
                      height={24}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white md:text-gray-900 mb-2 md:mb-3 md:group-hover:text-white transition-colors duration-300">
                    {initiative.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white md:text-gray-600 md:group-hover:text-white transition-colors duration-300">
                    {initiative.description}
                  </p>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};