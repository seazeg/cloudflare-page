'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { CoreScripts } from '@/lib/scripts';
import { Logo } from '@/components/common/Logo';

export function MobileMenu() {
  const t = useTranslations('navigation');
  const locale = useLocale();

  const navItems = [
    { label: t('home'), href: `/${locale}` },
    { label: t('services'), href: `/${locale}/services` },
    { label: t('pricing'), href: `/${locale}/pricing` },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <>
      <CoreScripts />
      <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
        <div className="mobile-menu">
          <nav className="header-menu">
            <div className="mobile-logo">
              <Link className="logo_img" href={`/${locale}`} title="SurmoX">
                <Logo width="100px" height="35px" />
              </Link>
            </div>
            <ul className="nav_scroll">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
