'use client';

import { useState } from 'react';
import { InsightCard } from './InsightCard';
import { ChevronDown, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const insights = [
  {
    category: "Publications",
    title: "Request for Proposal for Access to Financial Services in Nigeria 2025 Survey",
    date: "November 11, 2024", 
    duration: "3mins",
    href: "/insights/rfp-2025",
  },
  {
    category: "News",
    title: "Request for Proposal for Access to Financial Services in Nigeria 2025 Survey",
    date: "November 11, 2024",
    duration: "3mins", 
    href: "/insights/news-1",
  },
  {
    category: "Event",
    title: "Terms of reference for documentary team on financial inclusion",
    date: "November 11, 2024",
    duration: "3mins",
    href: "/insights/event-1",
  },
  {
    category: "Publications",
    title: "Financial Inclusion Report 2023: Progress and Challenges",
    date: "November 10, 2024",
    duration: "5mins",
    href: "/insights/report-2023",
  },
  {
    category: "News",
    title: "EFInA Announces New Partnership for Digital Financial Services",
    date: "November 9, 2024",
    duration: "4mins",
    href: "/insights/partnership-announcement",
  },
  {
    category: "Event",
    title: "Upcoming Webinar: The Future of Mobile Money in Nigeria",
    date: "November 8, 2024",
    duration: "2mins",
    href: "/insights/webinar-mobile-money",
  }
];

export const InsightsGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(insights.length / itemsPerPage);
  
  // For display purposes, show max 5 page numbers
  const getPageNumbers = () => {
    return [1, 2, 3]; // Simulated pagination numbers
  };

  const paginatedInsights = insights.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-8 md:py-32">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-row md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12">
          <div className="flex flex-row md:flex-row items-center gap-4 flex-1">
            {/* Category Filter */}
            <div className="relative flex-1 md:flex-none md:w-auto">
              <select 
                className="w-full md:w-auto appearance-none bg-white rounded-full px-6 py-3 pr-12 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300"
              >
                <option value="">Category</option>
                <option value="news">News</option>
                <option value="events">Events</option>
                <option value="publications">Publications</option>
                <option value="podcast">Podcast</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Year Filter */}
            <div className="relative flex-1 md:flex-none md:w-auto">
              <select 
                className="w-full md:w-auto appearance-none bg-white rounded-full px-6 py-3 pr-12 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300"
              >
                <option value="">Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            {/* Mobile Search Icon */}
            <button 
              className="md:hidden w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <Search className="text-gray-400" size={20} />
            </button>

            {/* Mobile Search Input */}
            {showMobileSearch && (
              <div className="absolute right-0 top-14 w-[280px] md:hidden">
                <input
                  type="text"
                  placeholder="Search for anything"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white rounded-full px-6 py-3 pl-12 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            )}

            {/* Desktop Search */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search for anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[300px] bg-white rounded-full px-6 py-3 pl-12 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <p className="text-gray-600 text-sm md:text-base">Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, insights.length)} Of {insights.length} Results.</p>
          <div className="relative">
            <select 
              className="appearance-none bg-transparent text-gray-900 pr-6 focus:outline-none text-sm md:text-base"
            >
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-900" size={16} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {paginatedInsights.map((insight, index) => (
            <InsightCard 
              key={insight.href}
              {...insight}
              index={index}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 md:mt-12">
          <div className="inline-flex items-center gap-1 border border-gray-200 rounded-full px-2 py-1">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft size={20} className="text-gray-900" />
            </button>
            
            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(Number(page))}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === page 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight size={20} className="text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 