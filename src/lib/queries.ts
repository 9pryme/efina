export const GET_POSTS = `
  query GetPosts {
    posts(first: 10, where: { status: PUBLISH }) {
      nodes {
        id
        title
        date
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        subtitle {
          subtitle
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      subtitle {
        subtitle
      }
    }
  }
`; 