'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, ScrollToTop } from '@/components';
import { Banner, Benefits, Features, About, AboutTwo, Process, Brand, Portfolio, FAQ, Pricing, Testimonial, Blog } from '@/components';
import { AllScripts } from '@/lib/scripts';
import { PostMeta } from '@/lib/blog';
import { useAnimation } from '@/hooks/useAnimation';

interface HomeClientProps {
  blogPosts: PostMeta[];
}

export function HomeClient({ blogPosts }: HomeClientProps) {
  useAnimation();

  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header />
        <MobileMenu />
        <Sidebar />

        <main>
          <Banner />
          <Benefits />
          <Features />
          <About />
          <AboutTwo />
          <Process />
          <Brand />
          <Portfolio />
          <FAQ />
          <Pricing />
          <Testimonial />
          <Blog posts={blogPosts} />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
