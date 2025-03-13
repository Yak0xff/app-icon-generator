import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n';

// 网站的基础URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://app-icon-generator-one.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  // 创建主页的URL（每种语言一个）
  const homePageUrls = locales.map(locale => {
    const path = locale === defaultLocale ? '' : `/${locale}`;
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    };
  });

  // 可以在这里添加其他页面的URL
  // const otherPages = [
  //   {
  //     url: `${baseUrl}/about`,
  //     lastModified: new Date(),
  //     changeFrequency: 'monthly' as const,
  //     priority: 0.8,
  //   },
  // ];

  return [
    ...homePageUrls,
    // ...otherPages,
  ];
} 