export interface WordPressAuthor {
  node: {
    name: string;
    description?: string;
    avatar?: {
      url: string;
    };
  };
}

export interface Post {
  id: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  slug: string;
  categories: {
    nodes: {
      id: string;
      name: string;
      slug: string;
    }[];
  };
  author?: WordPressAuthor;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
} 