'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';
import Link from 'next/link';
import { useAnimation } from '@/hooks/useAnimation';

const services = [
  {
    icon: '/images/demo-img/service-icon1.png',
    title: '外贸独立站',
    description: 'Shopify替代方案，跨境电商首选。支持PayPal、Stripe、信用卡等多种支付方式，响应式设计，SEO友好，3-15天快速上线。',
    link: '/services/website',
    price: '¥2,999起',
    delivery: '3天起',
    active: true,
  },
  {
    icon: '/images/demo-img/service-icon2.png',
    title: '微信小程序',
    description: '私域流量利器，覆盖商城型、展示型、工具型全类型。支持微信支付、会员系统、分销功能，助力品牌私域运营。',
    link: '/services/miniprogram',
    price: '¥4,999起',
    delivery: '5天起',
  },
];

export default function ServicesPage() {
  useAnimation();
  
  return (
      <>
          <AllScripts />
          <div className="page-wrapper">
              <Preloader />
              <Header activePage="services" />
              <MobileMenu />
              <Sidebar />

              <main>
                  <section
                      className="service-page-title"
                      style={{ backgroundImage: "url(/images/inner-img/about-page-bg.jpg)" }}
                  >
                      <div className="auto-container">
                          <div className="row">
                              <div className="title-content">
                                  <h5 className="page-sub-title split_chars">服务项目</h5>
                                  <h1 className="page-title split-text">Our Services</h1>
                                  <p className="page-desc title-anim">
                                      无论你是刚起步的个人卖家，还是准备品牌出海的企业，我们都有适合你的解决方案
                                  </p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="service-section-inner">
                                  <div className="auto-container">
                                      <div className="row">
                                          <div className="col-xl-6 col-lg-6">
                                              <div className="service-wrapper" id="sticky-box">
                                                  <div className="sec-title">
                                                      <h5 className="page-sub-title split_chars">
                                                          我们的服务
                                                      </h5>
                                                      <h2 className="sec-title-text split_chars">
                                                      一站式建站解决方案
                                                  </h2>
                                                  <h2 className="sec-title-text split_chars">
                                                      外贸独立站 · 微信小程序
                                                  </h2>
                                                  <h2 className="sec-title-text split_chars">
                                                      双擎驱动
                                                  </h2>
                                                  </div>
                                                  <div className="service-btn">
                                                      <Link href="/contact">
                                                          免费咨询
                                                          <i className="fa-light fa-arrow-right"></i>
                                                      </Link>
                                                  </div>
                                                  <div className="service-thumb">
                                                      <figure className="reveal">
                                                          <img
                                                              src="/images/demo-img/service-thumb1.png"
                                                              alt="thumb"
                                                          />
                                                      </figure>
                                                      <div className="service-thumb-shape">
                                                          <img
                                                              src="/images/demo-img/service-thumb-effent.png"
                                                              alt="thumb-effient"
                                                          />
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-xl-6 col-lg-6">
                                              <div className="row" id="scroll-container">
                                                  <div className="col-xl-12">
                                                      {services.map((item, index) => (
                                                          <div
                                                              key={index}
                                                              className="single-service-box"
                                                          >
                                                              <div className="service-inner">
                                                                  <div
                                                                      className={`service-icon${item.active ? "-active" : ""}`}
                                                                  >
                                                                      <img
                                                                          src={item.icon}
                                                                          alt="icon"
                                                                      />
                                                                  </div>
                                                                  <div className="service-content">
                                                                      <h3>{item.title}</h3>
                                                                      <p>{item.description}</p>
                                                                      <div className="service-meta">
                                                                          <span className="price">
                                                                              {item.price}
                                                                          </span>
                                                                          <span className="delivery">
                                                                              {item.delivery}
                                                                          </span>
                                                                      </div>
                                                                      <Link href={item.link}>
                                                                          了解详情
                                                                          <i className="fa-light fa-arrow-right"></i>
                                                                      </Link>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      ))}
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </main>

              <Footer />
              <ScrollToTop />
          </div>
      </>
  );
}
