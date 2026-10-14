import type {NextConfig} from 'next';

const config: NextConfig = {
  turbopack: {root: process.cwd()},
  agentRules: false,
  async redirects() {
    return [
      {source: '/projects/kalshi', destination: '/projects/prediction-market', permanent: true},
      {source: '/docs/kalshi/:path*', destination: '/docs/prediction-market/:path*', permanent: true},
    ];
  },
};

export default config;
