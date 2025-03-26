import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable CSS optimization
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Strict mode for better development
  reactStrictMode: true,
  swcMinify: true,
  // Remove distDir and trailingSlash as they might conflict with static export
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
