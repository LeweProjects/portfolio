/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname: "static-00.iconduck.com",
        port:'3000',
        pathname:"./app"
      },
    ],
  },
};

export default nextConfig;
