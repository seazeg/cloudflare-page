'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';

export default function TeamDetailClient() {
  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="team" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="team-details-page-title" style={{ backgroundImage: 'url(/images/inner-img/team-bg.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">Team Details</h5>
                  <h1 className="page-title split-text">Team Member</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="team-details-thumb">
                    <figure><img src="/images/inner-img/team-thumb1.png" alt="team" /></figure>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="team-details-content">
                    <h4 className="team-details-title">Team Member Name</h4>
                    <p className="team-details-position">Position / Role</p>
                    <p className="team-details-desc">Team member description goes here.</p>
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
