import { SectionTitle } from '../common/SectionTitle';

interface ProcessItem {
  icon: string;
  title: string;
  description: string;
  number: string;
  active?: boolean;
}

interface ProcessProps {
  subTitle?: string;
  title?: string[];
  items?: ProcessItem[];
}

const defaultItems: ProcessItem[] = [
  {
    icon: '/images/demo-img/process-icon1.png',
    title: '需求沟通',
    description: '了解你的业务模式、目标市场、功能需求，为你量身定制建站方案',
    number: '01',
  },
  {
    icon: '/images/demo-img/process-icon2.png',
    title: '方案确认',
    description: '提供详细的建站方案和报价，确认后签订合同，开始项目',
    number: '02',
    active: true,
  },
  {
    icon: '/images/demo-img/process-icon3.png',
    title: '开发交付',
    description: '按约定时间完成开发，提供测试环境预览，确保你满意',
    number: '03',
  },
  {
    icon: '/images/demo-img/process-icon40.png',
    title: '上线运营',
    description: '协助域名配置、上线发布，提供操作培训，长期技术支持',
    number: '04',
  },
];

export function Process({
  subTitle = '服务流程',
  title = ['简单4步', '开启你的独立站'],
  items = defaultItems,
}: ProcessProps) {
  return (
    <section className="process-section-one">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <SectionTitle subTitle={subTitle} title={title} align="center" />
            </div>
          </div>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-6">
              <div className={`single-process-box ${item.active ? 'active' : ''}`}>
                <div className="process-icon">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="process-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="process-number">
                  <span>{item.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="process-shape1">
        <img src="/images/demo-img/process-shape1.png" alt="shape" />
      </div>
      <div className="process-shape2">
        <img src="/images/demo-img/process-shape2.png" alt="shape" />
      </div>
    </section>
  );
}
