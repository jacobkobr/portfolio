import type {NextConfig} from 'next';

const config: NextConfig = {
  turbopack: {root: process.cwd()},
  agentRules: false,
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        {key: 'X-Content-Type-Options', value: 'nosniff'},
        {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
        {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
        {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()'},
        // Allow the site's own article iframe while blocking other sites from framing it.
        {key: 'Content-Security-Policy', value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'"},
      ],
    }];
  },
  async redirects() {
    return [
      {source: '/projects/kalshi', destination: '/projects/prediction-market', permanent: true},
      {source: '/docs/kalshi/:path*', destination: '/docs/prediction-market/:path*', permanent: true},
    ];
  },
};

export default config;
