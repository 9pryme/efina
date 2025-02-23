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
      className="bg-white rounded-lg p-8 space-y-6"
    >
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <h3 className="text-2xl font-display font-bold text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <Link 
        href="#"
        className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600"
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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-center text-gray-900 mb-16"
          >
            The Innovation Fund <br /> offers three types of grants
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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