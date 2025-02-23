'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    title: "Understanding Issues",
    description: "Understanding specific technical issues"
  },
  {
    title: "Root Cause Analysis",
    description: "Diagnosing and pinpointing root causes, identifying areas for improvement"
  },
  {
    title: "Solution Development",
    description: "Developing customised solutions incorporating best practices as well as an action plan for implementation"
  },
  {
    title: "Implementation Support",
    description: "Providing guidance and oversight during the implementation of the recommended solution"
  },
  {
    title: "Progress Tracking",
    description: "Establishing structured M&E frameworks that track progress and impact of intervention"
  }
];

export const TechnicalAdvisorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#C9FFED]">
              <Image
                src="/images/random/technical-advisory.jpg"
                alt="Technical Advisory"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display text-gray-900 mb-8"
              >
                Technical Advisory
              </motion.h2>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 