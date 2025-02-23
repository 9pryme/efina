/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
      },
    ];
  },
};

module.exports = nextConfig; 