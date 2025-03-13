import { MetadataRoute } from 'next';

// 网站的基础URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://app-icon-generator.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
} 