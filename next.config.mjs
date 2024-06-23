/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/messages',
        destination: 'https://www.marvellportfolio.site/api/messages',
      },
    ]
  },
    reactStrictMode: true,
    env: {
        URL: "www.marvellportfolio.site",
      },
};

export default nextConfig;
