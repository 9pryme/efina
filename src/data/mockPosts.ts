import { Post } from '@/src/types/wordpress';

export const mockPosts: Post[] = [
  {
    id: '1',
    date: '2024-01-15',
    title: 'Financial Inclusion in Nigeria: A Progress Report',
    excerpt: 'An overview of the current state of financial inclusion...',
    slug: 'financial-inclusion-progress',
    categories: {
      nodes: [{ id: '1', name: 'Report', slug: 'report' }]
    },
    featuredImage: {
      node: {
        sourceUrl: 'https://res.cloudinary.com/delpitwkb/image/upload/v1740330251/insights/fallback.png',
        altText: 'Financial Inclusion Report'
      }
    }
  },
  {
    id: '2',
    date: '2024-01-10',
    title: 'Digital Banking Trends 2024',
    excerpt: 'Exploring the latest trends in digital banking...',
    slug: 'digital-banking-trends',
    categories: {
      nodes: [{ id: '2', name: 'Press Statement', slug: 'press-statement' }]
    },
    featuredImage: {
      node: {
        sourceUrl: 'https://res.cloudinary.com/delpitwkb/image/upload/v1740330251/insights/fallback.png',
        altText: 'Digital Banking'
      }
    }
  },
  {
    id: '3',
    date: '2024-01-05',
    title: 'EFInA Hosts Financial Inclusion Forum',
    excerpt: 'Industry leaders gather to discuss financial inclusion...',
    slug: 'financial-inclusion-forum',
    categories: {
      nodes: [{ id: '3', name: 'Event', slug: 'event' }]
    },
    featuredImage: {
      node: {
        sourceUrl: 'https://res.cloudinary.com/delpitwkb/image/upload/v1740330251/insights/fallback.png',
        altText: 'Financial Forum'
      }
    }
  }
];