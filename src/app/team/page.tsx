'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, Team, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';

export default function TeamPage() {
  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="team" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="team-page-title" style={{ backgroundImage: 'url(/images/inner-img/team-bg.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">Our Team</h5>
                  <h1 className="page-title split-text">Team Members</h1>
                  <p className="page-desc title-anim">Monotonectally whiteboard proactive with leading business to niche markets rather than tested</p>
                </div>
              </div>
            </div>
          </section>
          <Team
            subTitle="Our Team"
            title={['Meet our Super Professional', 'Team Members']}
            items={[
              { image: '/images/inner-img/team-thumb1.png', name: 'Anjelina Watson', role: 'UI Designer', link: '/team/slug' },
              { image: '/images/inner-img/team-thumb2.png', name: 'John D. Alexon', role: 'UI Designer', link: '/team/slug' },
              { image: '/images/inner-img/team-thumb3.png', name: 'Shornaly M. Shila', role: 'UI Designer', link: '/team/slug' },
              { image: '/images/inner-img/team-thumb1.png', name: 'Emily Brown', role: 'Developer', link: '/team/slug' },
              { image: '/images/inner-img/team-thumb2.png', name: 'Michael Chen', role: 'Designer', link: '/team/slug' },
              { image: '/images/inner-img/team-thumb3.png', name: 'Sarah Wilson', role: 'Manager', link: '/team/slug' },
            ]}
          />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
