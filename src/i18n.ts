import { getRequestConfig } from 'next-intl/server';

export const locales = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh-CN';

export const localeNames: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
  'fr': 'Français',
  'es': 'Español'
};

// 检查是否为有效的语言代码
function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default getRequestConfig(async ({ locale }) => {
  // 确保locale不为undefined且是有效的语言代码，如果不是则使用默认语言
  const safeLocale = locale && isValidLocale(locale) ? locale : defaultLocale;
  
  try {
    // 动态导入语言文件
    const messages = (await import(`./messages/${safeLocale}/index.json`)).default;
    return {
      locale: safeLocale,
      messages
    };
  } catch (error) {
    console.error(`Error loading messages for locale ${safeLocale}:`, error);
    // 如果加载失败，尝试使用默认语言
    if (safeLocale !== defaultLocale) {
      const defaultMessages = (await import(`./messages/${defaultLocale}/index.json`)).default;
      return {
        locale: defaultLocale,
        messages: defaultMessages
      };
    }
    // 如果默认语言也加载失败，返回空对象
    return {
      locale: defaultLocale,
      messages: {}
    };
  }
}); 