'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Logo } from '@/components/common/Logo';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const serviceLinks = [
    { label: t('footer.services.independent'), href: `/${locale}/services` },
    { label: t('footer.services.miniprogram'), href: `/${locale}/services` },
    { label: t('navigation.features'), href: `/${locale}/features` },
    { label: t('navigation.pricing'), href: `/${locale}/pricing` },
  ];

  const quickLinks = [
    { label: t('footer.company.about'), href: `/${locale}/about` },
    { label: t('navigation.designs'), href: `/${locale}/designs` },
    { label: t('navigation.blog'), href: `/${locale}/blog` },
    { label: t('navigation.faq'), href: `/${locale}/faq` },
  ];

  const contactInfo = {
    wechat: locale === 'zh' ? '扫码添加微信咨询' : 'Scan QR code to add WeChat',
    email: 'contact@surmox.net',
    hours: locale === 'zh' ? '周一至周日 9:00-22:00' : 'Mon-Sun 9:00-22:00',
  };

  return (
    <footer className="main-footer-one" style={{ backgroundImage: 'url(/images/demo-img/footer-bg.png)' }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer-widget-content social">
              <div className="logo">
                <Link href={`/${locale}`}>
                  <Logo width="133px" height="100px" color="#ffffff" />
                </Link>
              </div>
              <div className="footer-desc">
                {t('footer.slogan')}
                <br />
                {locale === 'zh' 
                  ? '一站式建站服务，让独立站搭建更简单' 
                  : 'One-stop website building service, making independent site creation easier'}
              </div>
              <div className="footer-btn">
                <Link href={`/${locale}/contact`}>
                  {t('common.contactUs')} <i className="fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <h3 className="footer-title">{t('footer.services.title')}</h3>
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
              <h3 className="footer-title">{t('footer.support.title')}</h3>
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
              <h3 className="footer-title">{t('footer.contact.title')}</h3>
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
                {t('footer.copyright')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="js-particles-footer"></div>
    </footer>
  );
}
