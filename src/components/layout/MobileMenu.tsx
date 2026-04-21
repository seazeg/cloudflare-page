'use client';

import Link from 'next/link';
import { CoreScripts } from '@/lib/scripts';
import { Logo } from '@/components/common/Logo';

const navItems = [
  { label: '首页', href: '/' },
  { label: '服务', href: '/services' },
  { label: '价格', href: '/pricing' },
  { label: '关于', href: '/about' },
  { label: '联系', href: '/contact' },
];

export function MobileMenu() {
  return (
    <>
      <CoreScripts />
      <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
        <div className="mobile-menu">
          <nav className="header-menu">
            <div className="mobile-logo">
              <Link className="logo_img" href="/" title="跃迁">
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
