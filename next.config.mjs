/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
  basePath: "/vivekkasula26.github.io", // Replace with your GitHub repo name
  assetPrefix: "/vivekkasula26.github.io/",
};

export default nextConfig;
