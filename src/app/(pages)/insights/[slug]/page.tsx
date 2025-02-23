import { InsightHeader } from '@/src/components/insights/detail/InsightHeader';
import { InsightContent } from '@/src/components/insights/detail/InsightContent';
import { InsightMeta } from '@/src/components/insights/detail/InsightMeta';
import { ReadNext } from '@/src/components/insights/detail/ReadNext';

export default function InsightDetailPage() {
  const insight = {
    category: "Publications",
    title: "Request for Proposal for Access to Financial Services in Nigeria 2025 Survey",
    date: "January 13, 2025",
    image: "/images/insights/fdp-survey.jpg",
    author: {
      name: "Prime Enyo",
      position: "Research Analyst",
      avatar: "/images/team/placeholder.jpg"
    },
    content: {
      title: "Understanding Nigeria's Financial Landscape",
      subtitle: "A comprehensive study of financial service dynamics and market trends",
      sections: [
        {
          content: "In pursuit of our goal of providing credible market information on the Nigerian financial sector, EFInA launched a groundbreaking initiative to study Nigeria's financial service demand. This initiative represents a significant milestone in understanding the financial landscape of Nigeria."
        },
        {
          heading: "Historical Context and Evolution",
          content: "The first national survey of this scope, the 2008 Access to Financial Services in Nigeria (A2F) survey, provided unprecedented insights into how consumers manage their financial lives. Building on this foundation, subsequent surveys were conducted in 2010, 2012, 2014, 2016, 2018, 2020, and 2023, creating a comprehensive timeline of financial service evolution in Nigeria.\n\nThe Access to Financial Services in Nigeria surveys utilize the FinScope survey methodology, developed by FinMark Trust (FMT) in South Africa and successfully implemented across 17 African countries.",
          image: {
            src: "/images/insights/fallback.png",
            alt: "Timeline of Financial Services Surveys",
            caption: "Evolution of Financial Services Surveys in Nigeria (2008-2023)"
          }
        },
        {
          heading: "Environmental Sustainability Initiatives",
          content: "In a parallel development focusing on environmental sustainability, the UK government has announced significant funding allocations for various green initiatives. A substantial £3.9 billion will be directed towards carbon capture projects between 2025-2026. This funding will bolster the UK's decarbonisation efforts, with a particular emphasis on the first round of green hydrogen production contracts.\n\nFurthermore, £163 million has been earmarked for the Industrial Energy Transformation Fund, designed to assist high-emission businesses in reducing their carbon footprint."
        },
        {
          heading: "Domestic Energy Efficiency",
          content: "Looking at domestic energy efficiency, the government has made a significant commitment of £3.4 billion to the Warm Homes Plan. This investment forms a crucial component of their broader £13.2 billion strategy aimed at improving household energy efficiency. These comprehensive measures are designed to achieve two primary objectives: reducing overall energy consumption and preparing businesses for the implementation of more stringent environmental regulations in the future."
        }
      ]
    }
  };

  return (
    <main className="bg-gray-50">
      <InsightHeader 
        category={insight.category}
        title={insight.title}
        date={insight.date}
        image={insight.image}
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 order-1">
            <div className="lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto lg:pr-8">
              <div className="text-black">
                <InsightContent content={insight.content} />
              </div>
            </div>
          </div>

          {/* Meta Info - Full width on mobile, sidebar on desktop */}
          <div className="lg:col-span-4 order-2">
            <div className="lg:sticky lg:top-8">
              <InsightMeta 
                author={insight.author}
                date={insight.date}
              />
            </div>
          </div>
        </div>
      </div>

      <ReadNext />
    </main>
  );
} 