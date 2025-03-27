import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
    ],
  },
  // Enable CSS optimization
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Strict mode for better development
  reactStrictMode: true,
  swcMinify: true,
  // Configure base path for production
  basePath: process.env.NODE_ENV === 'production' ? '/riguelni-docs' : '',
  webpack: (config, { isServer }) => {
    // Optimize CSS in production
    if (!isServer && process.env.NODE_ENV === 'production') {
      config.optimization.minimize = true;
      config.optimization.minimizer.push(
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: ['default', {
              discardComments: { removeAll: true },
              normalizeWhitespace: false,
            }],
          },
        })
      );
    }
    return config;
  }
}

export default nextConfig
