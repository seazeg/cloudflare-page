import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n/config';

// 所有需要收录的页面路径
const routes = [
  '',
  '/about',
  '/services',
  '/pricing',
  '/designs',
  '/blog',
  '/contact',
  '/faq',
  '/features',
  '/integrations',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://surmox.com';

  // 为每个路由生成多语言版本的 sitemap 条目
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    // 为每个语言生成一个条目
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${route}`;
      const path = route || 'home';
      
      // 构建 alternates
      const alternates = {
        languages: {} as Record<string, string>,
      };

      locales.forEach((altLocale) => {
        alternates.languages[altLocale] = `${baseUrl}/${altLocale}${route}`;
      });

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates,
      });
    });
  });

  return sitemapEntries;
}
