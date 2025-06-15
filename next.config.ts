import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@invertase/firestore-stripe-payments'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.nflxext.com',
        pathname: '/ffe/siteui/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
