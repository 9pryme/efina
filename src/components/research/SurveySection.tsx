'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const years = ['2023', '2020', '2018', '2016', '2014', '2012', '2010', '2008'];

export const SurveySection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-medium text-gray-900">Summary</h2>
              <div className="flex gap-2">
                {years.map((year) => (
                  <span 
                    key={year}
                    className="text-sm text-gray-500"
                  >
                    {year}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-display text-gray-900 mb-6">
              Access to Financial Services in Nigeria survey
            </h3>

            <p className="text-gray-700 mb-8">
              EFInA launched its first Access to Financial services in Nigeria survey in 2008. Subsequent surveys were undertaken in 2010, 2012, 2014, 2016 and 2018. The EFInA Access to Financial Services in Nigeria 2018 was recently disseminated on Tuesday, December 11, 2018. The findings from the survey shows 36.8% of the adult population are financially excluded and it highlight the opportunities to extend financial services to the unbanked and under-banked low income segments in the country. The EFInA Access to Financial Services in Nigeria survey is referenced and covers over 20,000 consumers. All datasets are free and can be accessed by sending an email with a brief proposal indicating the purpose for which the data is required to info@efina.org
            </p>

            <Link 
              href="#"
              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600"
            >
              View Survey Results
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 