import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SurmoX - AI驱动的独立站搭建专家",
    template: "%s | SurmoX",
  },
  description: "专业独立站搭建服务，利用AI技术快速构建高性能电商网站，Shopify最佳替代方案，5天快速上线",
  keywords: ["独立站", "Shopify替代", "电商建站", "AI解决方案", "网站建设", "数字化转型"],
  authors: [{ name: "SurmoX Team" }],
  creator: "SurmoX",
  publisher: "SurmoX",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://surmox.com",
    siteName: "SurmoX",
    title: "SurmoX - AI驱动的独立站搭建专家",
    description: "专业独立站搭建服务，利用AI技术快速构建高性能电商网站",
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
    title: "SurmoX - AI驱动的独立站搭建专家",
    description: "专业独立站搭建服务，利用AI技术快速构建高性能电商网站",
    images: ["/images/logo.png"],
  },
  other: {
    "X-UA-Compatible": "IE=edge",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link href="/css/swiper.min.css" rel="stylesheet" />
        <link href="/css/magnific.css" rel="stylesheet" />
        <link href="/css/linear.css" rel="stylesheet" />
        <link href="/css/fontawesome-free.css" rel="stylesheet" />
        <link href="/css/fontawesome.css" rel="stylesheet" />
        <link href="/css/tm-bs-mp.css" rel="stylesheet" />
        <link href="/css/tm-utility-classes.css" rel="stylesheet" />
        <link href="/css/odometer-theme-default.css" rel="stylesheet" />
        <link href="/css/cusor-text.css" rel="stylesheet" />
        <link href="/css/nice-select.css" rel="stylesheet" />
        <link href="/css/meanmenu.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
