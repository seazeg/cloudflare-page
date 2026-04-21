import Link from 'next/link';
import { SectionTitle } from '../common/SectionTitle';

interface PortfolioItem {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
  result?: string;
}

interface PortfolioProps {
  subTitle?: string;
  title?: string[];
  items?: PortfolioItem[];
  ctaText?: string;
  ctaLink?: string;
}

const defaultItems: PortfolioItem[] = [
  {
    image: '/images/demo-img/protfolio-thumb1.png',
    category: '外贸独立站',
    title: '某家居品牌独立站',
    description: '5天完成建站，月销售额突破10万+',
    result: '转化率提升 35%',
    link: '#',
  },
  {
    image: '/images/demo-img/protfolio-thumb2.png',
    category: '微信小程序',
    title: '某服装品牌商城',
    description: '定制化设计，打造高端品牌形象',
    result: '客单价提升 50%',
    link: '#',
  },
];

export function Portfolio({
  subTitle = '成功案例',
  title = ['他们已经选择了我们', '真实案例展示'],
  items = defaultItems,
  ctaText = '查看更多案例',
  ctaLink = '#',
}: PortfolioProps) {
  return (
    <div className="portfolio-section-one">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <SectionTitle subTitle={subTitle} title={title} />
          </div>
          <div className="col-lg-6">
            <div className="portfolio-btn">
              <Link href={ctaLink}>
                {ctaText}
                <i className="fa-light fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-xl-6 col-lg-6 col-md-6">
              <div className="single-portfolio-box">
                <div className="portfolio-box">
                  <div className="portfolio-thumb">
                    <figure className="reveal">
                      <img src={item.image} alt="thumb" />
                    </figure>
                    <div className="portfolio-arrow">
                      <Link href={item.link}>
                        <i className="fa-light fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <div className="sub-title">
                      <h6>{item.category}</h6>
                    </div>
                    <div className="title">
                      <h4 className="text-anime-3">
                        <Link href={item.link}>{item.title}</Link>
                      </h4>
                    </div>
                    <div className="description">
                      <p>{item.description}</p>
                    </div>
                    {item.result && (
                      <div className="result-badge" style={{marginTop: '10px', padding: '5px 15px', background: '#6766FF', color: '#fff', borderRadius: '20px', display: 'inline-block', fontSize: '14px'}}>
                        {item.result}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
