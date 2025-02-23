'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const menuItems = {
  about: {
    label: 'About',
    href: '/about',
  },
  initiatives: {
    label: 'Initiatives',
    items: [
      { label: 'Access to Finance', href: '/initiatives/access-to-finance', description: 'Comprehensive tracking of financial inclusion' },
      { label: 'Gender Center of Excellence', href: '/initiatives/gender-center', description: 'A strategic resource centre' },
      { label: 'Inclusion for All', href: '/initiatives/inclusion-for-all', description: 'Removing barriers to financial inclusion' },
    ],
  },
  ourWork: {
    label: 'Our Work',
    items: [
      { label: 'Advocacy & Capacity Building', href: '/advocacy', description: 'A tool for facilitating emergence' },
      { label: 'Digital Financial Services', href: '/our-work/digital-services', description: 'To expand the access and reach' },
      { label: 'Innovation', href: '/our-work/innovation', description: 'To promote financial sector development' },
      { label: 'Research', href: '/our-work/research', description: 'Reliable data and analysis' },
    ],
  },
  insights: {
    label: 'Insights',
    href: '/insights',
  },
};

export const NavigationMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="flex items-center">
      <ul className="flex gap-8">
        {Object.entries(menuItems).map(([key, item]) => (
          <li 
            key={key}
            className="relative py-2"
            onMouseEnter={() => setActiveMenu(key)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {'items' in item ? (
              <>
                <button className="flex items-center gap-1 text-gray-900 hover:text-gray-900 transition-colors">
                  {item.label}
                  <ChevronDown size={16} className="text-gray-500" />
                </button>
                {activeMenu === key && (
                  <div className="absolute top-full left-0 w-[400px] bg-white shadow-lg rounded-lg overflow-hidden py-4 mt-1">
                    <div className="grid gap-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-50"
                        >
                          <div className="text-gray-900 font-medium mb-1">{subItem.label}</div>
                          <div className="text-gray-500 text-sm">{subItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="text-gray-900 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};