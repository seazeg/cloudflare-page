import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './lib/i18n/config';

export default getRequestConfig(async ({ locale }) => {
  // 验证语言代码，如果无效则使用默认语言
  const validLocale = locales.includes(locale as Locale) ? locale : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
