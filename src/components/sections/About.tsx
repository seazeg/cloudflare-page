import Link from 'next/link';
import { SectionTitle } from '../common/SectionTitle';

interface AboutItem {
  icon: string;
  title: string;
  description: string;
}

interface AboutProps {
  subTitle?: string;
  title?: string[];
  description?: string;
  items?: AboutItem[];
  image?: string;
  ctaText?: string;
  ctaLink?: string;
}

const defaultItems: AboutItem[] = [
  {
    icon: '/images/demo-img/about-icon11.png',
    title: '技术实力',
    description: '5年+开发经验，100+成功案例，精通前后端全栈开发',
  },
  {
    icon: '/images/demo-img/about-icon12.png',
    title: '极速交付',
    description: '3天快速上线，专业项目管理，准时交付率98%',
  },
  {
    icon: '/images/demo-img/about-icon13.png',
    title: '超高性价比',
    description: '价格透明，无隐藏费用，一次付费永久使用',
  },
];

export function About({
  subTitle = '关于我们',
  title = ['5年深耕，专注出海', '让建站更简单'],
  description = 'SurmoX（跃迁）成立于2019年，专注为跨境电商卖家和中小企业提供外贸独立站与微信小程序解决方案。我们深知平台抽成高、规则多变的痛点，致力于让独立站建站更简单、更实惠、更高效。',
  items = defaultItems,
  image = '/images/demo-img/about-thumb1.png',
  ctaText = '了解更多',
  ctaLink = '/about',
}: AboutProps) {
  return (
    <section className="about-section-one">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="about-thumb-wrapper">
              <div className="about-thumb1">
                <figure className="reveal">
                  <img src={image} alt="thumb" />
                </figure>
              </div>
              <div className="saas-cusor">
                <span>跃迁 SurmoX</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <SectionTitle subTitle={subTitle} title={title} description={description} />
            <div className="about-wrapper-box">
              {items.map((item, index) => (
                <div key={index} className="about-icon-box">
                  <div className="about-icon-content">
                    <div className="about-icon">
                      <img src={item.icon} alt="icon" />
                    </div>
                    <div className="about-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-btn">
              <Link href={ctaLink}>
                {ctaText}
                <i className="fa-light fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-effient11 fade-in">
        <img src="/images/demo-img/about-effient11.png" alt="about effient" />
      </div>
    </section>
  );
}
