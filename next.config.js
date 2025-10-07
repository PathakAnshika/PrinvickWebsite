// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ This enables static HTML export
  images: {
    unoptimized: true, // ✅ So images also work in static build
  },
};

export default nextConfig;
