'use client';

import { motion } from 'framer-motion';
import { DonorCard } from './DonorCard';

const donors = [
  {
    name: "FCDO",
    logo: "/images/donors/fcdo-logo.png", 
    description: "As EFInA's founding donor and key partner in financial inclusion, FCDO provided critical funding and strategic support from EFInA's inception in 2007. This funding was instrumental in shaping EFInA's early efforts to expand financial inclusion across Nigeria, enabling the organization to conduct groundbreaking research, foster innovation, and influence policy reforms. While FCDO's direct funding to EFInA has concluded, the two organizations continue to foster a strong relationship focused on shared socio-developmental goals.",
    bgColor: "bg-[#1D2B5C]",
    link: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office"
  },
  {
    name: "Gates Foundation", 
    logo: "/images/donors/gates-logo.png",
    description: "The Gates Foundation are guided by the belief that every life has equal value. The Foundation focuses on improving people's health and giving them the chance to lift themselves out of hunger and extreme poverty. The goal of the Global Development Program, Financial Services for the Poor is to provide millions of poor people in the developing world with reliable access to affordable financial services that can help them build better, healthier lives.",
    bgColor: "bg-[#C0376B]",
    link: "https://www.gatesfoundation.org/"
  }
];

export const Donors = () => {
  return (
    <section className="py-16 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-[36px] md:text-[56px] leading-[1.2] text-center mb-4 text-gray-900"
        >
          Our donors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center mb-12 md:mb-20 max-w-xl mx-auto px-4"
        >
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {donors.map((donor, index) => (
            <DonorCard
              key={donor.name}
              {...donor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};