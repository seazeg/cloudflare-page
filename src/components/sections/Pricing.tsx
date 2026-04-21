import Link from 'next/link';
import { SectionTitle } from '../common/SectionTitle';

interface PricingFeature {
  text: string;
}

interface PricingItem {
  tag?: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  delivery?: string;
}

interface PricingProps {
  subTitle?: string;
  title?: string[];
  items?: PricingItem[];
}

const defaultItems: PricingItem[] = [
  {
    tag: '入门首选',
    name: '独立站-基础版',
    price: '4,999',
    period: '起',
    delivery: '5天交付',
    description: '适合个人创业者、刚起步的小卖家',
    features: [
      { text: '5个核心页面' },
      { text: 'PayPal + Stripe支付' },
      { text: '响应式设计' },
      { text: 'SEO优化' },
      { text: '2个月技术支持' },
    ],
  },
  {
    tag: '最受欢迎',
    name: '独立站-进阶版',
    price: '8,999',
    period: '起',
    delivery: '7天交付',
    description: '适合有一定规模的中小卖家',
    popular: true,
    features: [
      { text: '10个页面，功能更完善' },
      { text: '多支付方式' },
      { text: '中英双语支持' },
      { text: '数据分析看板' },
      { text: '3个月技术支持' },
    ],
  },
  {
    tag: '私域利器',
    name: '小程序-商城型',
    price: '9,999',
    period: '起',
    delivery: '10天交付',
    description: '适合想做私域流量的品牌商家',
    features: [
      { text: '商品管理系统' },
      { text: '购物车 + 订单管理' },
      { text: '微信支付集成' },
      { text: '物流跟踪' },
      { text: '3个月技术支持' },
    ],
  },
];

export function Pricing({
  subTitle = '透明定价',
  title = ['选择适合你的方案', '一次付费，无隐藏费用，永久使用'],
  items = defaultItems,
}: PricingProps) {
  return (
    <section className="pricing-plan-section-one">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <SectionTitle subTitle={subTitle} title={title} align="center" />
          </div>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
              <div className={`pricing-single-item ${item.popular ? 'popular' : ''}`}>
                <h5 className="pricing-tag">
                  <Link href="/pricing">{item.tag}</Link>
                </h5>
                <h3 className="pricing-plan">
                  <span>
                    <img src="/images/demo-img/pricing-icon.png" alt="icon" />
                  </span>
                  {item.name}
                </h3>
                <div className="pricing-money">
                  <h3>
                    <span className="currency">¥</span>
                    <span className="dollar">{item.price}</span>
                    {item.period}
                  </h3>
                </div>
                <div className="pricing-delivery">
                  <span className="delivery-badge">{item.delivery}</span>
                </div>
                <div className="pricing-desc">
                  <p>{item.description}</p>
                </div>
                <div className="pricing-btn">
                  <Link href="/contact">
                    选择此方案
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="pricing-body">
                  <div className="pricing-title">
                    <h4>包含功能</h4>
                  </div>
                  <div className="pricing-feature">
                    <ul>
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex}>
                          <span>
                            <img src="/images/demo-img/pricing-check.png" alt="check" />
                          </span>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pricing-effient">
                  <img src="/images/demo-img/pricing-box3.png" alt="effient" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pricing-top-circle fade-in">
        <img src="/images/demo-img/pricing-top3.png" alt="pricing circle" />
      </div>
    </section>
  );
}
