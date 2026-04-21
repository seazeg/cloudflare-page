import Link from 'next/link';
import { SectionTitle } from '../common/SectionTitle';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  link: string;
  price?: string;
  delivery?: string;
  active?: boolean;
}

interface ServicesProps {
  subTitle?: string;
  title?: string[];
  mainImage?: string;
  mainImageShape?: string;
  items?: ServiceItem[];
  pageSubTitle?: string;
  pageTitle?: string;
  pageDescription?: string;
  bgImage?: string;
}

const defaultItems: ServiceItem[] = [
  {
    icon: '/images/demo-img/service-icon1.png',
    title: '外贸独立站',
    description: 'Shopify替代方案，跨境电商首选。支持PayPal、Stripe、信用卡等多种支付方式，响应式设计，SEO友好，5天快速上线。',
    link: '/services/website',
    price: '¥3,999起',
    delivery: '5天交付',
    active: true,
  },
  {
    icon: '/images/demo-img/service-icon2.png',
    title: '微信小程序',
    description: '私域流量利器，覆盖商城型、展示型、工具型全类型。支持微信支付、会员系统、分销功能，助力品牌私域运营。',
    link: '/services/miniprogram',
    price: '¥2,999起',
    delivery: '3天交付',
  },
  {
    icon: '/images/demo-img/service-icon3.png',
    title: 'APP定制开发',
    description: 'iOS+Android双端开发，原生体验。适合需要独立品牌APP的企业，提供从设计到上架全流程服务。',
    link: '/services/app',
    price: '¥19,999起',
    delivery: '20天交付',
  },
];

export function Services({
  subTitle = '我们的服务',
  title = ['一站式建站解决方案', '独立站 · 小程序 · APP', '全渠道覆盖'],
  mainImage = '/images/demo-img/service-thumb1.png',
  mainImageShape = '/images/demo-img/service-thumb-effent.png',
  items = defaultItems,
  pageSubTitle = '服务项目',
  pageTitle = 'Our Services',
  pageDescription = '无论你是刚起步的个人卖家，还是准备品牌出海的企业，我们都有适合你的解决方案',
  bgImage = '/images/inner-img/about-page-bg.jpg',
}: ServicesProps) {
  return (
    <section className="service-page-title" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="title-content">
            <h5 className="page-sub-title split_chars">{pageSubTitle}</h5>
            <h1 className="page-title split-text">{pageTitle}</h1>
            <p className="page-desc title-anim">{pageDescription}</p>
          </div>
        </div>
        <div className="row">
          <section className="service-section-inner">
            <div className="auto-container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="service-wrapper" id="sticky-box">
                    <SectionTitle subTitle={subTitle} title={title} />
                    <div className="service-btn">
                      <Link href="/contact">
                        免费咨询
                        <i className="fa-light fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="service-thumb">
                      <figure className="reveal">
                        <img src={mainImage} alt="thumb" />
                      </figure>
                      <div className="service-thumb-shape">
                        <img src={mainImageShape} alt="thumb-effient" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="row" id="scroll-container">
                    <div className="col-xl-12">
                      {items.map((item, index) => (
                        <div key={index} className="single-service-box">
                          <div className="service-inner">
                            <div className={`service-icon${item.active ? '-active' : ''}`}>
                              <img src={item.icon} alt="icon" />
                            </div>
                            <div className="service-content">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                              <div className="service-meta">
                                <span className="price">{item.price}</span>
                                <span className="delivery">{item.delivery}</span>
                              </div>
                              <Link href={item.link}>
                                了解详情
                                <i className="fa-light fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
