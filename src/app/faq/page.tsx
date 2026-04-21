'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, FAQ, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';
import { useAnimation } from '@/hooks/useAnimation';

export default function FAQPage() {
  useAnimation();
  
  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="faq" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="faq-page-title" style={{ backgroundImage: 'url(/images/inner-img/about-page-bg.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">常见问题</h5>
                  <h1 className="page-title split-text">Frequently Asked Questions</h1>
                  <p className="page-desc title-anim">如果没有找到你的问题，欢迎直接咨询</p>
                </div>
              </div>
            </div>
          </section>
          <FAQ image="/images/demo-img/accordian-thumb2.png" />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
