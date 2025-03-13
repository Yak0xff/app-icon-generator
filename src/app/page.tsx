import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n';

export default function RootPage() {
  // 由于localePrefix设置为'always'，默认语言也需要前缀
  redirect(`/${defaultLocale}`);
}
