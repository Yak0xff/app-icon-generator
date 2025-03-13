import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { locales, defaultLocale } from '@/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';
import GoogleAdsenseAuto from '@/components/GoogleAdsense';
import { metadata as seoMetadata } from './metadata';
import '../globals.css';

// 添加更多子集支持，包括拉丁文、中文、日文、韩文等
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif']
});

// 使用一个辅助函数来安全地获取locale
async function getLocaleFromParams(params: { locale: string }): Promise<string> {
  try {
    return params?.locale || defaultLocale;
  } catch (error) {
    console.error('Error getting locale from params:', error);
    return defaultLocale;
  }
}

export async function generateMetadata(props: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  // 使用await获取params
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'app' });
  
  // 获取当前语言的SEO元数据
  const meta = seoMetadata[locale as keyof typeof seoMetadata];
  
  // 构建规范链接URL
  const canonicalUrl = new URL(
    locale === defaultLocale ? '/' : `/${locale}`,
    process.env.NEXT_PUBLIC_SITE_URL || 'https://app-icon-generator-one.vercel.app'
  ).toString();
  
  // 构建备用语言链接
  const alternateLanguages: Record<string, string> = {};
  locales.forEach(loc => {
    alternateLanguages[loc] = new URL(
      loc === defaultLocale ? '/' : `/${loc}`,
      process.env.NEXT_PUBLIC_SITE_URL || 'https://app-icon-generator-one.vercel.app'
    ).toString();
  });
  
  // 构建验证对象，只包含有值的字段
  const verification: Record<string, string | string[] | Record<string, string>> = {};
  
  if (process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION) {
    verification.google = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;
  }
  
  if (process.env.NEXT_PUBLIC_YANDEX_VERIFICATION) {
    verification.yandex = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
  }
  
  if (process.env.NEXT_PUBLIC_YAHOO_VERIFICATION) {
    verification.yahoo = process.env.NEXT_PUBLIC_YAHOO_VERIFICATION;
  }
  
  if (process.env.NEXT_PUBLIC_BAIDU_VERIFICATION) {
    verification.other = {
      'baidu-site-verification': process.env.NEXT_PUBLIC_BAIDU_VERIFICATION
    };
  }
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://app-icon-generator-one.vercel.app'),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: canonicalUrl,
      siteName: 'App Icon Generator',
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: meta.ogTitle,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: meta.twitterCard as 'summary_large_image',
      title: meta.twitterTitle,
      description: meta.twitterDescription,
      images: [meta.twitterImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 使用await获取params
  const { locale } = await params;
  const messages = await getMessages({ locale });
  
  return (
    <html lang={locale}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <GoogleAdsenseAuto />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="relative">
            <LanguageSwitcher />
            <main className="container mx-auto px-4 py-8 max-w-6xl">
              {children}
            </main>
            <footer className="text-center py-4 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} App Icon Generator. All rights reserved.</p>
            </footer>
          </div>
          <StructuredData />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
