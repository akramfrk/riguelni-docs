/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  // Enable CSS optimization
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Strict mode for better development
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig
