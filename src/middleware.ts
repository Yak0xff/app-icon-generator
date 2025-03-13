import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // 支持的语言列表
  locales: locales,
  // 默认语言
  defaultLocale: defaultLocale,
  // 本地化路径 - 改为always以避免边缘情况
  localePrefix: 'always',
});

export const config = {
  // 匹配所有路径，除了以下路径：
  // - 以 `/api` 开头的 API 路由
  // - 以 `/_next` 开头的 Next.js 内部路由
  // - 以 `/public` 开头的静态文件
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 