'use client';

import { useLocale } from 'next-intl';
import { Locale, defaultLocale } from '@/i18n';
import { metadata } from '@/app/[locale]/metadata';

export default function StructuredData() {
  // 获取当前语言，如果无法获取则使用默认语言
  let locale: Locale;
  try {
    locale = (useLocale() as Locale) || defaultLocale;
  } catch (error) {
    console.error('Error getting locale in StructuredData:', error);
    locale = defaultLocale;
  }
  
  // 确保meta存在，如果不存在则使用默认语言的元数据
  const meta = metadata[locale] || metadata[defaultLocale];
  
  // 网站的基础URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://app-icon-generator-one.vercel.app';
  
  // 构建WebSite结构化数据
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'App Icon Generator',
    url: baseUrl,
    description: meta.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
  
  // 构建SoftwareApplication结构化数据
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'App Icon Generator',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: meta.description
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
} 