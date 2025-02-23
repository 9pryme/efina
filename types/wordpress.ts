export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  subtitle?: {
    subtitle: string;
  };
}

export interface PostsResponse {
  posts: {
    nodes: Post[];
  };
}

export interface SinglePostResponse {
  post: Post;
} 