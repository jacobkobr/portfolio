import type {NextConfig} from 'next';

const config: NextConfig = {
  turbopack: {root: process.cwd()},
  agentRules: false,
  async redirects() {
    return [{source: '/projects/kalshi', destination: '/docs/kalshi', permanent: false}];
  },
};

export default config;
