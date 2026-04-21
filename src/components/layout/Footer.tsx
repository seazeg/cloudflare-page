'use client';

import Link from 'next/link';
import { Logo } from '@/components/common/Logo';

const serviceLinks = [
  { label: '外贸独立站', href: '/services' },
  { label: '微信小程序', href: '/services' },
  { label: 'APP定制开发', href: '/services' },
  { label: '价格方案', href: '/pricing' },
];

const quickLinks = [
  { label: '关于我们', href: '/about' },
  { label: '设计案例', href: '/designs' },
  { label: '博客文章', href: '/blog' },
  { label: '常见问题', href: '/faq' },
];

const contactInfo = {
  wechat: '扫码添加微信咨询',
  email: 'contact@surmox.net',
  hours: '周一至周日 9:00-22:00',
};

export function Footer() {
  return (
    <footer className="main-footer-one" style={{ backgroundImage: 'url(/images/demo-img/footer-bg.png)' }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer-widget-content social">
              <div className="logo">
                <Link href="/">
                  <Logo width="133px" height="100px" color="#ffffff" />
                </Link>
              </div>
              <div className="footer-desc">
                跃迁 - 专注独立站搭建，助力品牌出海
                <br />
                一站式建站服务，让独立站搭建更简单
              </div>
              <div className="footer-btn">
                <Link href="/contact">
                  免费咨询 <i className="fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <h3 className="footer-title">服务项目</h3>
              <ul className="footer-menu">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <h3 className="footer-title">快速链接</h3>
              <ul className="footer-menu">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer-widget-content contact">
              <h3 className="footer-title">联系我们</h3>
              <div className="footer-content">
                <div className="contact-info">
                  <p><i className="fa-brands fa-weixin"></i> {contactInfo.wechat}</p>
                  <p><i className="fa-solid fa-envelope"></i> {contactInfo.email}</p>
                  <p><i className="fa-solid fa-clock"></i> {contactInfo.hours}</p>
                </div>
                <div className="footer-line1">
                  <img src="/images/demo-img/footer-line1.png" alt="line" />
                </div>
                <div className="footer-line2">
                  <img src="/images/demo-img/footer-line2.png" alt="line" />
                </div>
                <div className="footer-line3">
                  <img src="/images/demo-img/footer-line3.png" alt="line" />
                </div>
                <div className="footer-line4">
                  <img src="/images/demo-img/footer-line4.png" alt="line" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="row">
              <div className="copyright-text">
                © {new Date().getFullYear()} 跃迁 SurmoX. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="js-particles-footer"></div>
    </footer>
  );
}
