'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, ScrollToTop } from '@/components';
import { PageTitle, AboutTwo, Brand, Process, Team, Marquee, FAQ, Blog } from '@/components';
import { AllScripts } from '@/lib/scripts';
import { PostMeta } from '@/lib/blog';
import { useAnimation } from '@/hooks/useAnimation';

interface AboutClientProps {
  blogPosts: PostMeta[];
}

export function AboutClient({ blogPosts }: AboutClientProps) {
  useAnimation();

  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="about" />
        <MobileMenu />
        <Sidebar />

        <main>
          <PageTitle
            subTitle="关于我们"
            title="About SurmoX"
            description="5年深耕，专注外贸独立站与微信小程序，助力100+品牌成功出海"
          />
          <AboutTwo />
          <Brand />
          <Process />
          <Team />
          <Marquee />
          <FAQ image="/images/demo-img/accordian-thumb2.png" />
          <Blog posts={blogPosts} />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
