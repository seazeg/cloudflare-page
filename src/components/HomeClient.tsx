'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations('home');

  // Banner 翻译数据
  const bannerProps = {
    badge: t('banner.badge'),
    title: [t('banner.title'), t('banner.subtitle'), t('banner.highlight')],
    description: t('banner.description'),
    ctaText: t('banner.cta'),
  };

  // About 翻译数据
  const aboutProps = {
    subTitle: t('about.subTitle'),
    title: [t('about.title')],
    description: t('about.description'),
    items: [
      {
        icon: '/images/demo-img/about-icon11.png',
        title: t('about.items.0.title'),
        description: t('about.items.0.description'),
      },
      {
        icon: '/images/demo-img/about-icon12.png',
        title: t('about.items.1.title'),
        description: t('about.items.1.description'),
      },
      {
        icon: '/images/demo-img/about-icon13.png',
        title: t('about.items.2.title'),
        description: t('about.items.2.description'),
      },
    ],
    ctaText: t('about.cta'),
  };

  // Benefits 翻译数据
  const benefitsItems = [
    {
      icon: '/images/demo-img/binifits-icon21.png',
      title: t('benefits.items.0.title'),
      description: t('benefits.items.0.description'),
    },
    {
      icon: '/images/demo-img/binifits-icon23.png',
      title: t('benefits.items.1.title'),
      description: t('benefits.items.1.description'),
    },
    {
      icon: '/images/demo-img/binifits-icon22.png',
      title: t('benefits.items.2.title'),
      description: t('benefits.items.2.description'),
    },
  ];

  // Features 翻译数据
  const featuresProps = {
    subTitle: t('features.subTitle'),
    title: [t('features.title.0'), t('features.title.1')],
    ctaText: t('features.cta'),
    items: [
      {
        title: t('features.items.0.title'),
        description: t('features.items.0.description'),
        image: '/images/demo-img/feature-thumb31.png',
        shape: '/images/demo-img/feature-shape31.png',
        checklist: [
          { text: t('features.items.0.checklist.0') },
          { text: t('features.items.0.checklist.1') },
          { text: t('features.items.0.checklist.2') },
          { text: t('features.items.0.checklist.3') },
          { text: t('features.items.0.checklist.4') },
        ],
      },
      {
        title: t('features.items.1.title'),
        description: t('features.items.1.description'),
        image: '/images/demo-img/feature-thumb32.png',
        shape: '/images/demo-img/feature-shape32.png',
        variant: 'two',
        checklist: [
          { text: t('features.items.1.checklist.0') },
          { text: t('features.items.1.checklist.1') },
          { text: t('features.items.1.checklist.2') },
          { text: t('features.items.1.checklist.3') },
          { text: t('features.items.1.checklist.4') },
        ],
      },
    ],
  };

  // AboutTwo 翻译数据
  const aboutTwoProps = {
    subTitle: t('aboutTwo.subTitle'),
    title: [t('aboutTwo.title.0'), t('aboutTwo.title.1')],
    description: t('aboutTwo.description'),
    listItems: [
      t('aboutTwo.listItems.0'),
      t('aboutTwo.listItems.1'),
      t('aboutTwo.listItems.2'),
      t('aboutTwo.listItems.3'),
      t('aboutTwo.listItems.4'),
    ],
    ctaText: t('aboutTwo.cta'),
  };

  // Process 翻译数据
  const processProps = {
    subTitle: t('process.subTitle'),
    title: [t('process.title.0'), t('process.title.1')],
    items: [
      {
        icon: '/images/demo-img/process-icon1.png',
        title: t('process.items.0.title'),
        description: t('process.items.0.description'),
        number: '01',
      },
      {
        icon: '/images/demo-img/process-icon2.png',
        title: t('process.items.1.title'),
        description: t('process.items.1.description'),
        number: '02',
        active: true,
      },
      {
        icon: '/images/demo-img/process-icon3.png',
        title: t('process.items.2.title'),
        description: t('process.items.2.description'),
        number: '03',
      },
      {
        icon: '/images/demo-img/process-icon40.png',
        title: t('process.items.3.title'),
        description: t('process.items.3.description'),
        number: '04',
      },
    ],
  };

  // Portfolio 翻译数据
  const portfolioProps = {
    subTitle: t('portfolio.subTitle'),
    title: [t('portfolio.title.0'), t('portfolio.title.1')],
    ctaText: t('portfolio.cta'),
    items: [
      {
        image: '/images/demo-img/protfolio-thumb1.png',
        category: t('portfolio.items.0.category'),
        title: t('portfolio.items.0.title'),
        description: t('portfolio.items.0.description'),
        result: t('portfolio.items.0.result'),
        link: '/designs',
      },
      {
        image: '/images/demo-img/protfolio-thumb2.png',
        category: t('portfolio.items.1.category'),
        title: t('portfolio.items.1.title'),
        description: t('portfolio.items.1.description'),
        result: t('portfolio.items.1.result'),
        link: '/designs',
      },
    ],
  };

  // FAQ 翻译数据
  const faqProps = {
    subTitle: t('faq.subTitle'),
    title: [t('faq.title.0'), t('faq.title.1')],
  };

  // Pricing 翻译数据
  const pricingProps = {
    subTitle: t('pricing.subTitle'),
    title: [t('pricing.title.0'), t('pricing.title.1')],
    items: [
      {
        tag: t('pricing.items.0.tag'),
        name: t('pricing.items.0.name'),
        price: '4,999',
        period: t('pricing.startingAt'),
        delivery: `5${t('pricing.delivery')}`,
        description: t('pricing.items.0.description'),
        features: [
          { text: t('pricing.items.0.features.0') },
          { text: t('pricing.items.0.features.1') },
          { text: t('pricing.items.0.features.2') },
          { text: t('pricing.items.0.features.3') },
          { text: t('pricing.items.0.features.4') },
        ],
      },
      {
        tag: t('pricing.items.1.tag'),
        name: t('pricing.items.1.name'),
        price: '8,999',
        period: t('pricing.startingAt'),
        delivery: `7${t('pricing.delivery')}`,
        description: t('pricing.items.1.description'),
        popular: true,
        features: [
          { text: t('pricing.items.1.features.0') },
          { text: t('pricing.items.1.features.1') },
          { text: t('pricing.items.1.features.2') },
          { text: t('pricing.items.1.features.3') },
          { text: t('pricing.items.1.features.4') },
        ],
      },
      {
        tag: t('pricing.items.2.tag'),
        name: t('pricing.items.2.name'),
        price: '9,999',
        period: t('pricing.startingAt'),
        delivery: `10${t('pricing.delivery')}`,
        description: t('pricing.items.2.description'),
        features: [
          { text: t('pricing.items.2.features.0') },
          { text: t('pricing.items.2.features.1') },
          { text: t('pricing.items.2.features.2') },
          { text: t('pricing.items.2.features.3') },
          { text: t('pricing.items.2.features.4') },
        ],
      },
    ],
  };

  // Testimonial 翻译数据
  const testimonialProps = {
    subTitle: t('testimonials.subTitle'),
    title: [t('testimonials.title.0'), t('testimonials.title.1')],
  };

  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header />
        <MobileMenu />
        <Sidebar />

        <main>
          <Banner {...bannerProps} />
          <Benefits items={benefitsItems} />
          <Features {...featuresProps} />
          <About {...aboutProps} />
          <AboutTwo {...aboutTwoProps} />
          <Process {...processProps} />
          <Brand />
          <Portfolio {...portfolioProps} />
          <FAQ {...faqProps} />
          <Pricing {...pricingProps} />
          <Testimonial {...testimonialProps} />
          <Blog posts={blogPosts} />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
