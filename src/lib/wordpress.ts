import { Post, Category } from '@/src/types/wordpress';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

async function fetchAPI(query: string) {
  if (!API_URL) {
    throw new Error('WordPress API URL is not defined');
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('API Response not OK:', {
        status: res.status,
        statusText: res.statusText,
        error
      });
      throw new Error(`API responded with status ${res.status}`);
    }

    const json = await res.json();

    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      throw new Error(json.errors[0]?.message || 'GraphQL Error');
    }

    return json.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

interface WordPressPost {
  databaseId: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories: {
    nodes: {
      databaseId: string;
      name: string;
      slug: string;
    }[];
  };
  author?: {
    node: {
      name: string;
      description?: string;
      avatar?: {
        url: string;
      };
    };
  };
}

interface WordPressCategory {
  databaseId: string;
  name: string;
  slug: string;
  count: number;
}

export async function getPosts(): Promise<Post[]> {
  const query = `
    query GetPosts {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes {
          databaseId
          date
          title
          excerpt
          content
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              databaseId
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchAPI(query);
    return data.posts.nodes.map((post: WordPressPost) => ({
      id: post.databaseId,
      date: post.date,
      title: { rendered: post.title },
      excerpt: { rendered: post.excerpt },
      content: { rendered: post.content },
      slug: post.slug,
      featuredImage: post.featuredImage,
      categories: {
        nodes: post.categories.nodes.map((cat) => ({
          id: cat.databaseId,
          name: cat.name,
          slug: cat.slug
        }))
      },
      author: post.author
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getCategories(): Promise<Category[]> {
  const query = `
    query GetCategories {
      categories(first: 100) {
        nodes {
          databaseId
          name
          slug
          count
        }
      }
    }
  `;

  try {
    const data = await fetchAPI(query);
    return data.categories.nodes.map((cat: WordPressCategory) => ({
      id: cat.databaseId,
      name: cat.name,
      slug: cat.slug,
      count: cat.count
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  const query = `
    {
      post(id: "${slug}", idType: SLUG) {
        databaseId
        date
        modified
        title
        content
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            databaseId
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `;

  try {
    const data = await fetchAPI(query);
    if (!data.post) return null;

    return {
      id: data.post.databaseId,
      date: data.post.date,
      title: { rendered: data.post.title },
      content: { rendered: data.post.content },
      excerpt: { rendered: data.post.excerpt || '' },
      slug,
      featuredImage: data.post.featuredImage,
      categories: {
        nodes: data.post.categories.nodes.map((cat: WordPressCategory) => ({
          id: cat.databaseId,
          name: cat.name,
          slug: cat.slug
        }))
      }
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getRelatedPosts(categoryId: string, currentPostId: string): Promise<Post[]> {
  const query = `
    {
      posts(
        first: 3, 
        where: { 
          categoryId: "${categoryId}",
          notIn: ["${currentPostId}"],
          status: PUBLISH 
        }
      ) {
        nodes {
          databaseId
          date
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              databaseId
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchAPI(query);
    return data.posts.nodes.map((post: WordPressPost) => ({
      id: post.databaseId,
      date: post.date,
      title: { rendered: post.title },
      excerpt: { rendered: post.excerpt },
      slug: post.slug,
      featuredImage: post.featuredImage,
      categories: {
        nodes: post.categories.nodes.map(cat => ({
          id: cat.databaseId,
          name: cat.name,
          slug: cat.slug
        }))
      }
    }));
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

export async function getRecentPosts(currentPostId: string): Promise<Post[]> {
  const query = `
    {
      posts(
        first: 3, 
        where: { 
          notIn: ["${currentPostId}"],
          status: PUBLISH,
          orderby: { field: DATE, order: DESC }
        }
      ) {
        nodes {
          databaseId
          date
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              databaseId
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchAPI(query);
    return data.posts.nodes.map((post: WordPressPost) => ({
      id: post.databaseId,
      date: post.date,
      title: { rendered: post.title },
      excerpt: { rendered: post.excerpt },
      slug: post.slug,
      featuredImage: post.featuredImage,
      categories: {
        nodes: post.categories.nodes.map(cat => ({
          id: cat.databaseId,
          name: cat.name,
          slug: cat.slug
        }))
      }
    }));
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
} 