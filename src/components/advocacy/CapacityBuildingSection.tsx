'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ number, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#1A1A1A] rounded-lg p-8"
    >
      <div className="text-gray-600 text-sm mb-6">{number}</div>
      <h3 className="text-2xl font-display text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const services = [
  {
    number: "01",
    title: "Boulder Training",
    description: "Microfinance is one of the entry points to access formal financial services for the unbanked. To acquire potential customers, microfinance banks/institutions need to identify sustainable and innovative ways to provide a broad range of financial products that serve the needs of the low income population."
  },
  {
    number: "02",
    title: "Microfinance",
    description: "Increasing access to financial services and therefore enhancing financial inclusion, especially for those in the poorest segment of society has been proven to be a key driver in economic growth and wealth creation. Nigeria must reduce financial exclusion as part of a holistic approach to development. The benefits, for those at the base of the pyramid, as well as for the nation, could be very significant."
  },
  {
    number: "03",
    title: "Non-interest Finance Working Group (NIFWG)",
    description: "In October 2009, EFInA established the Non-interest Finance Working Group (NIFWG) in order to identify and address regulatory and market related issues to ensure the successful implementation of non-interest banking/finance in Nigeria. NIFWG members included market operators and regulators who worked together to drive a multi-institutional approach to implementing non-interest banking/finance in Nigeria."
  }
];

export const CapacityBuildingSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[56px] font-display text-white mb-6"
            >
              Capacity Building
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400"
            >
              Our Capacity Building efforts are tailored towards Financial Services Providers (FSPs) and Regulators and Journalists.
            </motion.p>
          </div>

          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-display text-white mb-4"
            >
              Financial Service Providers and Regulators
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-8"
            >
              Our capacity building efforts for FSPs and Regulators are further categorised as follows:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 