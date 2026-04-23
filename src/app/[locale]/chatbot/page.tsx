'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, Process, FAQ, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';

export default function ChatbotPage() {
  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="chatbot" />
        <MobileMenu />
        <Sidebar />

        <main>
          <div className="banner-section-two" style={{ backgroundImage: 'url(/images/demo-img/banner-bg2.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-content-wrap">
                    <div className="banner-content">
                      <h5 className="split_chars">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.38561 11.9999C6.34326 11.9999 6.30137 11.9913 6.26258 11.9748C6.22378 11.9583 6.18891 11.9342 6.16017 11.9039L0.0815684 5.5059C0.0410469 5.46325 0.0141836 5.41003 0.00426649 5.35275C-0.00565067 5.29547 0.00180835 5.23662 0.0257308 5.1834C0.0496532 5.13018 0.0890012 5.08491 0.138959 5.05311C0.188917 5.02131 0.247317 5.00438 0.307013 5.00438H3.23292C3.27685 5.00438 3.32026 5.01356 3.36024 5.03128C3.40022 5.049 3.43582 5.07486 3.46465 5.10712L5.49615 7.38125C5.7157 6.9246 6.1407 6.16424 6.88652 5.23772C7.98909 3.868 10.0399 1.85355 13.5487 0.0350571C13.6165 -8.32163e-05 13.6954 -0.00920352 13.7698 0.00949718C13.8442 0.0281979 13.9086 0.0733601 13.9505 0.136066C13.9923 0.198772 14.0085 0.274464 13.9958 0.348195C13.983 0.421926 13.9424 0.488336 13.8818 0.534313C13.8684 0.5445 12.5155 1.58113 10.9586 3.4799C9.52566 5.22724 7.62085 8.0844 6.68355 11.773C6.66708 11.8378 6.62879 11.8953 6.57477 11.9365C6.52075 11.9776 6.45413 12 6.38552 12L6.38561 11.9999Z" fill="#6766FF"/>
                        </svg>
                        AI Integrated Solutions
                      </h5>
                      <h2 className="split_chars">Innovative AI Chatbot </h2>
                      <h2 className="split_chars">Solutions For Smart</h2>
                      <h2 className="split_chars">Modern <span>Technology</span></h2>
                      <p className="text-anime-3">Monotonectally whiteboard proactive with leading niche markets rather than fully tested</p>
                      <a href="/about">Get Started<i className="fa-light fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-thumb-wrapper">
                    <div className="banner-thumb">
                      <figure><img src="/images/demo-img/banner-thumb2.png" alt="banner-thumb2" /></figure>
                    </div>
                    <div className="banner-effiect2">
                      <img src="/images/demo-img/banner-thumb-effect2.png" alt="banner effiect" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="chatbot-section-one">
            <div className="auto-container">
              <div className="row">
                <div className="chatbot-content">
                  <div className="chatbot-title">
                    <h2>AI Chatbot</h2>
                  </div>
                  <div className="chat-container">
                    <div className="chat-header">
                      <h3>How can I help you?</h3>
                      <button>+ New Chat</button>
                    </div>
                    <div className="chat-messages" id="chatMessages"></div>
                    <div className="chat-input">
                      <span>+</span>
                      <input type="text" id="userInput" placeholder="Type your message..." />
                      <button>SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Process />
          <FAQ image="/images/demo-img/accordian-thumb2.png" />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
