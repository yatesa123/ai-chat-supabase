/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: { ppr: true },   // ← removed so it builds on stable Next.js
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      },
      {
        protocol: 'https',
        hostname: 'your-image-domain.com'
      }
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/protected-route',
        destination: '/login',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig;
