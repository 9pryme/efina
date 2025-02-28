export interface Post {
  id: string;
  date: string;
  title: string;
  content?: string;
  excerpt: string;
  slug: string;
  categories: {
    nodes: Array<{
      id: string;
      name: string;
      slug: string;
    }>;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}