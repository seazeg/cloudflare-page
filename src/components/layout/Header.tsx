'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CoreScripts } from '@/lib/scripts';
import { Logo } from '@/components/common/Logo';

interface HeaderProps {
  activePage?: string;
}

const navItems = [
  { label: '首页', href: '/' },
  { label: '服务', href: '/services' },
  { label: '效果图', href: '/designs' },
  { label: '价格', href: '/pricing' },
  { label: '关于', href: '/about' },
  { label: '博客', href: '/blog' },
  { label: '联系', href: '/contact' },
];

export function Header({ activePage }: HeaderProps) {
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
                              <Link className="active_logo" href="/">
                                  <Logo width="133px" height="100px" color="#ffffff" />
                              </Link>
                              <Link className="logo_two" href="/">
                                  <Logo width="133px" height="100px" color="#ffffff" />
                              </Link>
                          </div>
                      </div>
                      <div className="col-lg-7">
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
                      <div className="col-lg-3">
                          <div className="header-right-wrapper">
                              <div className="header-sidebar">
                                  <div className="header-btn">
                                      <Link href="/contact">
                                          免费咨询{" "}
                                          <i className="fa-solid fa-arrow-down-to-line"></i>
                                      </Link>
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
