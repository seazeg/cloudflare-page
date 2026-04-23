import Link from 'next/link';
import { SectionTitle } from '../common/SectionTitle';

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  shape?: string;
  variant?: string;
  checklist?: { text: string }[];
}

interface FeaturesProps {
  subTitle?: string;
  title?: string[];
  items?: FeatureItem[];
  ctaText?: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    title: '外贸独立站',
    description: 'Shopify替代方案，专为跨境电商打造。支持PayPal、Stripe等多种支付方式，响应式设计，SEO友好，3-15天快速上线，助你开拓全球市场。',
    image: '/images/demo-img/feature-thumb31.png',
    shape: '/images/demo-img/feature-shape31.png',
    checklist: [
      { text: 'PayPal / Stripe / 信用卡支付' },
      { text: '响应式设计，多端适配' },
      { text: 'SEO优化，提升搜索排名' },
      { text: '多语言多货币支持' },
      { text: '¥2,999起，3天交付' },
    ],
  },
  {
    title: '微信小程序',
    description: '私域流量运营利器，覆盖商城型、展示型、工具型全场景。支持微信支付、会员系统、分销拼团，助力品牌私域运营，提升用户粘性与复购率。',
    image: '/images/demo-img/feature-thumb32.png',
    shape: '/images/demo-img/feature-shape32.png',
    variant: 'two',
    checklist: [
      { text: '微信支付无缝集成' },
      { text: '会员系统 + 积分功能' },
      { text: '分销拼团，裂变增长' },
      { text: '数据分析，精准运营' },
      { text: '¥4,999起，5天交付' },
    ],
  },
];

export function Features({
  subTitle = '核心服务',
  title = ['外贸独立站 · 微信小程序', '双擎驱动，助力业务增长'],
  items = defaultFeatures,
  ctaText = '了解全部服务',
}: FeaturesProps) {
  return (
    <section className="feature-section-one">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-8">
            <SectionTitle subTitle={subTitle} title={title} />
          </div>
          <div className="col-xl-6 col-lg-4">
            <div className="feature-btn">
              <Link href="/services">
                {ctaText}
                <i className="fa-light fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-xl-6 col-lg-6">
              <div className={`single-feature-box ${item.variant || ''}`}>
                <div className="feature-content">
                  <h4 className="text-anime-3">{item.title}</h4>
                  <p>{item.description}</p>
                  {item.checklist && (
                    <ul className="feature-checklist">
                      {item.checklist.map((check, cIndex) => (
                        <li key={cIndex}>
                          <i className="fa-solid fa-check"></i>
                          {check.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="feature-thumb">
                  <figure className="reveal">
                    <img src={item.image} alt="thumb" />
                  </figure>
                </div>
                {item.shape && (
                  <div className={`feature-shape${item.variant ? '2' : ''}`}>
                    <img src={item.shape} alt="shape" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
