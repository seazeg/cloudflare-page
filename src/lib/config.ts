import type { Metadata } from "next";

export const siteConfig = {
  name: "LeapX",
  description: "专业独立站搭建服务，Shopify替代方案，5天快速上线",
  url: "https://leapx.com",
  ogImage: "/images/logo.png",
  links: {
    twitter: "https://twitter.com/leapx",
    github: "https://github.com/leapx",
  },
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const footerLinks = {
  products: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact", href: "/contact" },
    { name: "Status", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    openGraph: {
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      images: [{ url: image || siteConfig.ogImage }],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
