'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Established = () => {
  return (
    <section className="relative min-h-[700px] md:h-[700px] bg-black text-white overflow-hidden py-16 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/established-bg.png"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-12 md:gap-0">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="font-display text-4xl md:text-[72px] leading-[1.1] mb-6">
              Established in<br />late 2007
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-12 md:space-y-16"
          >
            {/* Vision */}
            <div>
              <h3 className="text-lg font-medium mb-3 md:mb-4">Our Vision</h3>
              <p className="text-xl md:text-2xl">
              We want  to see a world where all Nigerians are financially included and economically empowered.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-lg font-medium mb-3 md:mb-4">Our Mission</h3>
              <p className="text-xl md:text-2xl">
                To facilitate a market where diverse, affordable and secure digital financial services drive economic growth and make a difference in the lives of EVERY Nigerian.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};