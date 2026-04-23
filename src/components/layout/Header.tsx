'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { CoreScripts } from '@/lib/scripts';
import { Logo } from '@/components/common/Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  activePage?: string;
}

export function Header({ activePage }: HeaderProps) {
  const t = useTranslations('navigation');
  const locale = useLocale();

  const navItems = [
    { label: t('home'), href: `/${locale}` },
    { label: t('services'), href: `/${locale}/services` },
    { label: t('designs'), href: `/${locale}/designs` },
    { label: t('pricing'), href: `/${locale}/pricing` },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('blog'), href: `/${locale}/blog` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('sticky-header');
      if (header) {
        if (window.scrollY < 100) {
          header.classList.remove('sticky');
        } else {
          header.classList.add('sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <>
          <CoreScripts />
          <div className="ai-nest-header-area" id="sticky-header">
              <div className="auto-container">
                  <div className="row align-items-center">
                      <div className="col-lg-2">
                          <div className="header-logo">
                              <Link className="active_logo" href={`/${locale}`}>
                                  <Logo width="133px" height="100px" color="#ffffff" />
                              </Link>
                              <Link className="logo_two" href={`/${locale}`}>
                                  <Logo width="133px" height="100px" color="#ffffff" />
                              </Link>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="header-menu">
                              <ul className="nav_scroll">
                                  {navItems.map((item, index) => (
                                      <li key={index}>
                                          <Link href={item.href}>{item.label}</Link>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="header-right-wrapper">
                              <div className="header-sidebar">
                                  <div className="header-btn">
                                      <Link href={`/${locale}/contact`}>
                                          {t('contact')}{" "}
                                          <i className="fa-solid fa-arrow-down-to-line"></i>
                                      </Link>
                                  </div>
                                  <div className="header-language">
                                      <LanguageSwitcher />
                                  </div>
                                  <div className="header-sidbar-button">
                                      <button
                                          className="menubars"
                                          type="button"
                                          data-bs-toggle="offcanvas"
                                          data-bs-target="#menubar"
                                      >
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
