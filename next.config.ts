
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Ignore Genkit server files from client bundle
    if (!isServer) {
      config.resolve.alias['@/ai/dev$'] = false;
      config.resolve.alias['@/ai/genkit$'] = false;
      config.resolve.alias['@/ai/flows/resume-critique$'] = false;
      config.resolve.alias['@/ai/flows/resume-rephrasing$'] = false;
      config.resolve.alias['@/services/resume-analysis$'] = false; // Added this line
    }
    return config;
  },
};

export default nextConfig;
