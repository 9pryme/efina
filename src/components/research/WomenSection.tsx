'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const WomenSection = () => {
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
            <h2 className="text-2xl font-display text-gray-900 mb-6">
              Assessment of Women&apos;s Financial Inclusion in Nigeria
            </h2>

            <div className="space-y-6 text-gray-700 mb-8">
              <p>
                The gender gap in Nigeria represents a major issue to be resolved if the country is to achieve the targets it set in its National Financial Inclusion Strategy (NFIS). This gender gap is larger than in most other countries, and while financial inclusion is increasing for both men and women, the gender gap is widening.
              </p>
              <p>
                In contrast, comparator countries in Africa such as Kenya, South Africa, Tanzania, and Uganda all exhibit a decreasing gender gap. The gender gap in Nigeria represents a major issue to be resolved if the country is to achieve the targets it set in its National Financial Inclusion Strategy (NFIS).
              </p>
              <p>
                Through the analysis of gender specific data, this study seeks to better understand: a) how supply, access and usage of financial services between men and women in Nigeria, b) what specific gaps and challenges impact Nigerian women&apos;s access to financial services, and c) what can be done by CBN, EFInA and its partners to address the gender gap and reduce inequality.
              </p>
            </div>

            <div className="flex gap-6">
              <Link 
                href="#"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600"
              >
                View Executive Summary
                <span className="ml-2">→</span>
              </Link>
              <Link 
                href="#"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600"
              >
                Full Survey Report
                <span className="ml-2">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 