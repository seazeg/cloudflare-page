'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, Benefits, Marquee, FAQ, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';

export default function FeaturesPage() {
  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="features" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="feature-page-title" style={{ backgroundImage: 'url(/images/inner-img/feature-bg.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">Features</h5>
                  <h1 className="page-title split-text">Core Features</h1>
                  <p className="page-desc title-anim">Monotonectally whiteboard proactive with leading business to niche markets rather than tested</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="single-feature-box">
                    <div className="feature-content">
                      <h4 className="text-anime-3">Automated Charts</h4>
                      <p>Monotonectally whiteboard proactive with leading continually niche markets rather than fully tested</p>
                    </div>
                    <div className="feature-thumb">
                      <figure className="reveal"><img src="/images/demo-img/feature-thumb31.png" alt="thumb" /></figure>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="single-feature-box two">
                    <div className="feature-content">
                      <h4 className="text-anime-3">Smart Security Integration</h4>
                      <p>Monotonectally whiteboard proactive with leading continually niche markets rather than fully tested</p>
                    </div>
                    <div className="feature-thumb">
                      <figure className="reveal"><img src="/images/demo-img/feature-thumb32.png" alt="thumb" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Benefits />
          <Marquee />
          <FAQ image="/images/demo-img/accordian-thumb2.png" />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
