import Link from 'next/link';
import { SectionTitle } from '../common/SectionTitle';

interface AboutTwoProps {
  subTitle?: string;
  title?: string[];
  description?: string;
  listItems?: string[];
  image?: string;
  shape?: string;
  ctaText?: string;
  ctaLink?: string;
}

const defaultListItems = [
  '5年+行业深耕，100+成功案例',
  '3天极速交付，抢占市场先机',
  '价格透明，一次付费永久使用',
  '7×24小时技术支持，5分钟响应',
  '外贸独立站 + 微信小程序双擎驱动',
];

export function AboutTwo({
  subTitle = '关于跃迁',
  title = ['SurmoX 跃迁', '让出海更简单'],
  description = 'SurmoX（跃迁）成立于2019年，专注为跨境电商卖家和中小企业提供外贸独立站与微信小程序解决方案。我们深知平台抽成高、规则多变的痛点，致力于让独立站建站更简单、更实惠、更高效。5年来，我们已服务100+客户，涵盖家居、服装、美妆、电子等多个行业，客户满意度高达98%。',
  listItems = defaultListItems,
  image = '/images/demo-img/about-thumb21.png',
  shape = '/images/demo-img/about-thumb-shape21.png',
  ctaText = '联系我们',
  ctaLink = '/contact',
}: AboutTwoProps) {
  return (
    <section className="about-section-two">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <SectionTitle subTitle={subTitle} title={title} description={description} />
            <div className="about-item-list">
              <ul>
                {listItems.map((item, index) => (
                  <li key={index}>
                    <img src="/images/demo-img/check.png" alt="check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-btn">
              <Link href={ctaLink}>
                {ctaText}
                <i className="fa-light fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="about-thumb-wrapper">
              <div className="about-thumb">
                <figure className="reveal">
                  <img src={image} alt="thumb" />
                </figure>
              </div>
              <div className="about-thu-effiect">
                <img src={shape} alt="thumb-effiect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
