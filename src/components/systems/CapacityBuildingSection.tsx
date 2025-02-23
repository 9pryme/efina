'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    title: "Needs Assessment",
    description: "Identifying the skill/knowledge gaps among different stakeholder groups in order of priority and expected impact"
  },
  {
    title: "Strategic Planning",
    description: "Developing a strategic plan that addresses the highlighted and prioritised area with clear goals and objectives"
  },
  {
    title: "Implementation",
    description: "Designing and executing through targeted knowledge transfer sessions"
  },
  {
    title: "Monitoring & Evaluation",
    description: "Establishing systems that monitor performance and impact of training sessions and creating channels for continuous feedback from stakeholders"
  }
];

const StepCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-50 rounded-2xl p-6 md:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008F60] text-white flex items-center justify-center font-medium">
          {index + 1}
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">{title}</h3>
          <p className="text-sm md:text-base text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const CapacityBuildingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display text-gray-900 mb-8"
          >
            Capacity Building
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                {...step}
                index={index}
              />
            ))}
          </div>

          {/* Image */}
          <div className="mt-16 relative aspect-[21/9] rounded-2xl overflow-hidden bg-[#C9FFED]">
            <Image
              src="/images/random/pos.png"
              alt="Capacity Building"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 