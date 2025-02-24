'use client';

import { Post, Category } from '@/src/types/wordpress';
import { InsightCard } from './InsightCard';
import { useState } from 'react';
import { ChevronDown, Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface InsightsGridProps {
  posts: Post[];
  categories: Category[];
}

export const InsightsGrid = ({ posts, categories }: InsightsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Get unique years from posts
  const years = [...new Set(posts.map(post => 
    new Date(post.date).getFullYear()
  ))].sort((a, b) => b - a); // Sort descending

  // Filter posts based on category, year and search
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || 
      post.categories.nodes.some(cat => cat.slug === selectedCategory);
    
    const matchesYear = selectedYear === 'all' ||
      new Date(post.date).getFullYear().toString() === selectedYear;

    const matchesSearch = searchQuery === '' || 
      post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.rendered.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch && matchesYear;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between p-4 rounded-[2rem] ">
          <div className="flex gap-4">
            {/* Category Filter Dropdown */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 pr-10 bg-white border border-gray-300 rounded-[2rem] text-gray-800 hover:bg-gray-50 appearance-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>

            {/* Year Filter Dropdown */}
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-3 pr-10 bg-white border border-gray-300 rounded-[2rem] text-gray-800 hover:bg-gray-50 appearance-none cursor-pointer"
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-[2rem] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#008F60] focus:border-transparent"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post, index) => (
            <InsightCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#F0F2F5] bg-white">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-800"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="px-4 py-2 text-gray-800">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-800"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};