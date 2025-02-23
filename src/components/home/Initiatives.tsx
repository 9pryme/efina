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
    <section className="py-20 bg-[#F3F3F3]">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-[56px] leading-[64px] mb-16 text-gray-900 font-bold tracking-[-0.04em]">
          Our Initiatives
        </h2>

        <div className="grid grid-cols-3 gap-6">
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
                className="relative bg-transparent rounded-2xl overflow-hidden w-[399px] h-[457px] group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-orange-500 transition-all duration-300 p-4"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-white transition-colors duration-300">
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