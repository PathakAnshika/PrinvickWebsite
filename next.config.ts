/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // next/image use karte ho to ye zaruri hai
  },
};

export default nextConfig;
