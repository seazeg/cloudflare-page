interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  items?: BenefitItem[];
}

const defaultBenefits: BenefitItem[] = [
  {
    icon: '/images/demo-img/binifits-icon21.png',
    title: '快速上线',
    description: '5天快速交付，让你的产品快速触达全球客户，抢占市场先机。专业团队高效协作，确保项目按时交付。',
  },
  {
    icon: '/images/demo-img/binifits-icon23.png',
    title: '价格透明',
    description: '一次付费，无月租无抽成。价格仅为Shopify的1/3，功能同样强大，更适合中小卖家。',
  },
  {
    icon: '/images/demo-img/binifits-icon22.png',
    title: '本土化服务',
    description: '懂国内卖家痛点，响应速度快。支持中文沟通，时区无障碍，问题5分钟内响应。',
  },
];

export function Benefits({ items = defaultBenefits }: BenefitsProps) {
  return (
    <section className="benifits-section-one">
      <div className="auto-container">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-binifits-box">
                <div className="binifits-content">
                  <div className="binifits-icon">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
