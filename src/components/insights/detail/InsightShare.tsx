'use client';

import { Linkedin, Facebook, Twitter } from 'lucide-react';

export const InsightShare = () => {
  return (
    <div className="sticky top-8 flex flex-col gap-4">
      <button className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:bg-[#004182] transition-colors">
        <Linkedin size={20} />
      </button>
      <button className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:bg-[#0C7ABF] transition-colors">
        <Twitter size={20} />
      </button>
      <button className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:bg-[#0B5FCC] transition-colors">
        <Facebook size={20} />
      </button>
    </div>
  );
}; 