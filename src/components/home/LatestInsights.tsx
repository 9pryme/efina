'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/src/components/ui/Button';

const insights = [
  {
    type: 'Event',
    date: 'Friday, April 8, 2022',
    title: 'EFInA Wants Barriers to Financial Inclusion for Women Removed',
    image: '/images/hero-bg.jpg',
    slug: '/insights/efina-women-financial-inclusion'
  },
  {
    type: 'Press Statement',
    date: 'Friday, April 8, 2022',
    title: 'EFInA Wants Barriers to Financial Inclusion for Women Removed',
    image: '/images/hero-bg.jpg',
    slug: '/insights/efina-press-statement'
  },
  {
    type: 'Report',
    date: 'Friday, April 8, 2022',
    title: 'EFInA 2022-2023 Impact report on financial inclusion for all campaign',
    image: '/images/hero-bg.jpg',
    slug: '/insights/efina-impact-report-2022-2023'
  }
];

export const LatestInsights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-[56px] leading-[64px] mb-4 text-gray-900 font-bold tracking-[-0.04em]">
              Stories, Insights, And<br />Updates About Our Mission
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl">
              Narratives Unfolded: Discovering Stories, Gaining Insights, and
              Staying Updated on Our Ever-Evolving Mission
            </p>
          </div>
          <Button 
            href="/insights" 
            variant="text"
            className="text-gray-800 hover:text-gray-600 text-lg"
          >
            View all
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {insights.map((insight) => (
            <Link 
              key={insight.slug} 
              href={insight.slug}
              className="group"
            >
              <article>
                <div className="relative h-[280px] mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className={`text-sm font-medium ${
                    insight.type === 'Event' ? 'text-[#B01F29]' : 
                    insight.type === 'Press Statement' ? 'text-[#006B48]' : 
                    'text-[#B17E0E]'
                  }`}>
                    {insight.type}
                  </span>
                  <span className="text-sm text-gray-600">{insight.date}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                  {insight.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}; 