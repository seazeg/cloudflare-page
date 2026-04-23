import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  // 生成 hreflang 链接
  const baseUrl = "https://surmox.com";
  const languages: Record<string, string> = {
    zh: `${baseUrl}/zh`,
    en: `${baseUrl}/en`,
    "x-default": `${baseUrl}/zh`,
  };

  return {
    title: {
      default: t("title"),
      template: "%s | SurmoX",
    },
    description: t("description"),
    keywords: locale === "zh" 
      ? ["独立站", "Shopify替代", "电商建站", "AI解决方案", "网站建设", "数字化转型"]
      : ["independent site", "Shopify alternative", "e-commerce", "AI solution", "website building"],
    authors: [{ name: "SurmoX Team" }],
    creator: "SurmoX",
    publisher: "SurmoX",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      url: `${baseUrl}/${locale}`,
      siteName: "SurmoX",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: "SurmoX",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/logo.png"],
    },
    other: {
      "X-UA-Compatible": "IE=edge",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  // 验证语言代码
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // 获取翻译消息
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
