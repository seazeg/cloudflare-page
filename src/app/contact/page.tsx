'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, ScrollToTop } from '@/components';
import { Contact } from '@/components';
import { AllScripts } from '@/lib/scripts';
import { useAnimation } from '@/hooks/useAnimation';

export default function ContactPage() {
  useAnimation();

  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="contact" />
        <MobileMenu />
        <Sidebar />

        <main>
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
