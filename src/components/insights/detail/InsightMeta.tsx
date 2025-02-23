'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';

interface InsightMetaProps {
  author: {
    name: string;
    position: string;
    avatar: string;
  };
  date: string;
}

export const InsightMeta = ({ author, date }: InsightMetaProps) => {
  // Get first letter of first and last name
  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.length > 1 
      ? `${names[0][0]}${names[names.length-1][0]}`.toUpperCase()
      : names[0][0].toUpperCase();
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm w-[350px] border border-[#008F60] border-t-8">
      <div className="space-y-6">
        {/* Written By */}
        <div className="space-y-4">
          <h3 className="uppercase text-xs tracking-wider text-gray-500 font-medium">
            WRITTEN BY
          </h3>
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#D4DDE6]">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
                sizes="56px"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium text-lg">
                {getInitials(author.name)}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-base text-gray-900">{author.name}</div>
              <div className="text-xs text-gray-500">{author.position}</div>
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Posted On */}
        <div className="space-y-3">
          <h3 className="uppercase text-xs tracking-wider text-gray-500 font-medium">
            POSTED ON
          </h3>
          <div className="text-lg text-gray-900">
            {date}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Share This Post */}
        <div className="space-y-3">
          <h3 className="uppercase text-xs tracking-wider text-gray-500 font-medium">
            SHARE THIS POST
          </h3>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#EAEEF2] text-gray-400 hover:text-[#0A66C2] transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#EAEEF2] text-gray-400 hover:text-[#1DA1F2] transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#EAEEF2] text-gray-400 hover:text-[#1877F2] transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#EAEEF2] text-gray-400 hover:text-gray-600 transition-colors">
              <LinkIcon size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}; 