'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales, localeNames, type Locale, defaultLocale } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    
    // 如果选择的语言与当前语言相同，不做任何操作
    if (newLocale === locale) return;
    
    // 获取当前路径并分析
    const pathnameParts = pathname.split('/');
    const currentLocaleInPath = pathnameParts.length > 1 && locales.includes(pathnameParts[1] as Locale) 
      ? pathnameParts[1] as Locale 
      : null;
    
    // 移除当前路径中的语言部分（如果存在）
    let pathWithoutLocale = pathname;
    if (currentLocaleInPath) {
      pathWithoutLocale = pathname.replace(`/${currentLocaleInPath}`, '') || '/';
    }
    
    // 构建新路径 - 由于localePrefix设置为'always'，所有语言都需要前缀
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
    console.log(`Switching from ${locale} to ${newLocale}, new path: ${newPath}`);
    router.push(newPath);
  };

  return (
    <div className="absolute top-4 right-4">
      <select
        value={locale}
        onChange={handleChange}
        className="bg-white border border-gray-300 text-gray-700 py-1 px-2 pr-8 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
} 