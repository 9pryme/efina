import { InsightCard } from '../InsightCard';

const relatedInsights = [
  {
    category: "Events",
    title: "Terms of reference for documentary team on financial inclusion",
    date: "November 11, 2024", 
    duration: "3mins",
    href: "/insights/event-1",
  },
  {
    category: "News", 
    title: "Terms of reference for documentary team on financial inclusion",
    date: "November 11, 2024",
    duration: "3mins",
    href: "/insights/news-1",
  },
  {
    category: "Podcast",
    title: "Terms of reference for documentary team on financial inclusion", 
    date: "November 11, 2024",
    duration: "3mins",
    href: "/insights/podcast-1",
  }
];

export const ReadNext = () => {
  return (
    <section className="bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-[40px] text-gray-900 mb-16">Read next</h2>
        <div className="grid grid-cols-3 gap-8">
          {relatedInsights.map((insight, index) => (
            <InsightCard 
              key={insight.href}
              {...insight}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 