'use client';

import { useState, useRef, useEffect } from 'react';
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
      { label: 'Access to Finance', href: 'https://a2f.ng/', description: 'Comprehensive tracking of financial inclusion' },
      { label: 'Gender Center of Excellence', href: 'https://gendercentreofexcellence.org/', description: 'A strategic resource centre' },
      { label: 'Inclusion for All', href: 'https://inclusion-for-all.org/', description: 'Removing barriers to financial inclusion' },
    ],
  },
  ourWork: {
    label: 'Our Work',
    items: [
      { label: 'Advocacy', href: '/our-work/advocacy', description: 'A tool for facilitating emergence' },
      { label: 'Systems Strengthening', href: '/our-work/systems-engineering', description: 'To expand the access and reach' },
      { label: 'Innovation', href: '/our-work/innovation', description: 'To promote financial sector development' },
      { label: 'Research', href: '/our-work/research', description: 'Reliable data and analysis' },
    ],
  },
  insights: {
    label: 'Insights',
    href: '/insights',
  },
};

interface NavigationMenuProps {
  onNavigate?: () => void;
}

export const NavigationMenu = ({ onNavigate }: NavigationMenuProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleNavigate = () => {
    setActiveMenu(null);
    onNavigate?.();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav ref={menuRef}>
      <ul className="flex flex-col md:flex-row md:gap-8">
        {Object.entries(menuItems).map(([key, item]) => (
          <li 
            key={key}
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            {'items' in item ? (
              <>
                <button 
                  className="flex items-center justify-between w-full md:w-auto gap-1 text-gray-900 hover:text-gray-900 transition-colors px-4 md:px-0"
                  onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                >
                  {item.label}
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-500 transform transition-transform ${activeMenu === key ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeMenu === key && (
                  <div 
                    className="md:absolute md:top-full md:left-0 w-full md:w-[400px] bg-gray-50 md:bg-white md:shadow-lg md:rounded-lg overflow-hidden py-2 md:py-4 md:mt-1"
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid gap-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-6 md:px-4 py-2 hover:bg-gray-100 md:hover:bg-gray-50"
                          onClick={handleNavigate}
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
                className="block px-4 md:px-0 text-gray-900 hover:text-gray-900 transition-colors"
                onClick={handleNavigate}
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