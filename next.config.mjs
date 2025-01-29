/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
};

export default nextConfig;
