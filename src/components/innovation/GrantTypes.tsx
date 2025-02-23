'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface GrantCardProps {
  title: string;
  description: string;
  index: number;
}

const GrantCard = ({ title, description, index }: GrantCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-4 md:p-8 space-y-4 md:space-y-6"
    >
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
      <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900">{title}</h3>
      <p className="text-sm md:text-base text-gray-700">{description}</p>
      <Link 
        href="#"
        className="inline-flex items-center text-sm md:text-base text-gray-900 font-medium hover:text-gray-600"
      >
        Learn More
        <span className="ml-2">→</span>
      </Link>
    </motion.div>
  );
};

const grants = [
  {
    title: "Technical Assistance Grants",
    description: "Technical assistance grants are general or early stage approach support for projects in design stage once the project strategy is clear to EFInA when to move forward with a grant being implemented."
  },
  {
    title: "Innovation Grants",
    description: "Innovation grants provide longer-term funds which are available for projects in motion, defined by our Request for Proposals (RFP)."
  },
  {
    title: "Fintech Challenge Grants",
    description: "These Grants will support innovations use of digital technology to address specific financial inclusion challenges and identify ways to drive down costs, increase access to financial services."
  }
];

export const GrantTypes = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-display font-bold text-center text-gray-900 mb-8 md:mb-16"
          >
            The Innovation Fund <br className="hidden md:block" /> offers three types of grants
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {grants.map((grant, index) => (
              <GrantCard 
                key={index}
                {...grant}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 