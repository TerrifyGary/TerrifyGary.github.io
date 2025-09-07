/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/', // For user pages like YOUR_USERNAME.github.io
  assetPrefix: '/', // For user pages like YOUR_USERNAME.github.io
}

export default nextConfig
