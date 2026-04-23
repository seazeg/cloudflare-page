'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';

export default function ServiceDetailClient() {
  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="services" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="service-details-page-title" style={{ backgroundImage: 'url(/images/inner-img/team-bg.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">Our service Details</h5>
                  <h1 className="page-title split-text">Our Expert service</h1>
                  <p className="page-desc title-anim">Monotonectally whiteboard proactive with leading business to niche markets rather than tested</p>
                </div>
              </div>
              <div className="services-details-area">
                <div className="auto-container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="services-details-thumb">
                            <figure><img src="/images/inner-img/service-details-thumb.png" alt="thumb" /></figure>
                          </div>
                          <div className="services-details-content">
                            <h4 className="services-details-title">proactive with leading business</h4>
                            <p className="services-details-desc">Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results Appropriately evolve customized channels before viral leadership skills.</p>
                            <p className="services-details-desc">Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results Appropriately evolve customized channels before viral leadership skills.</p>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="service-details-icon-box">
                                <div className="service-details-icon-thumb">
                                  <img src="/images/demo-img/about-icon11.png" alt="icon" />
                                </div>
                                <div className="service-details-box-content">
                                  <h4>Web Application Development</h4>
                                  <p>We analyze your unique business needs to develop machine learning</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="service-details-icon-box">
                                <div className="service-details-icon-thumb">
                                  <img src="/images/demo-img/about-icon12.png" alt="icon" />
                                </div>
                                <div className="service-details-box-content">
                                  <h4>Mobile Apps Interface</h4>
                                  <p>Our approach focuses on delivering end-to-end AI solutions that optimize</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="widget-sidber-contact-box">
                        <div className="widget-sidber-contact">
                          <span><i className="fa-regular fa-circle-phone"></i></span>
                        </div>
                        <p className="widget-sidber-contact-text">Call Us Anytime</p>
                        <h3 className="widget-sidber-contact-number">+123 (4567) 890</h3>
                        <span className="widget-sidber-contact-gmail"><i className="fa-solid fa-envelope"></i> example@gmail.com</span>
                        <div className="widget-sidber-contact-btn">
                          <a href="/contact">Contact Us<i className="fa-solid fa-arrow-right-long"></i></a>
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
