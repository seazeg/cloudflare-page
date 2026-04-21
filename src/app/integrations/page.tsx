'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, Marquee, FAQ, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';

export default function IntegrationsPage() {
  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="integrations" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="integration-page-title" style={{ backgroundImage: 'url(/images/inner-img/integration-bg.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">Integrations</h5>
                  <h1 className="page-title split-text">Integrations</h1>
                  <p className="page-desc title-anim">Monotonectally whiteboard proactive with leading business to niche markets rather than tested</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-integration">
                    <div className="integration-thumb fade-in">
                      <figure><img src="/images/inner-img/integration-thumb.png" alt="integration" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Marquee />
          <FAQ image="/images/demo-img/accordian-thumb2.png" />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
