/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

module.exports = withNextIntl(nextConfig);
