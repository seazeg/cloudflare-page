'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, Marquee, FAQ, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';
import { useAnimation } from '@/hooks/useAnimation';

export default function PricingPage() {
  useAnimation();
  
  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="pricing" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="pricing-page-title" style={{ backgroundImage: 'url(/images/inner-img/pricing-bg.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">透明定价</h5>
                  <h1 className="page-title split-text">Choose Your Plan</h1>
                  <p className="page-desc title-anim">一次付费，无隐藏费用，无月租，永久使用</p>
                </div>
              </div>
              
              {/* 外贸独立站价格 */}
              <div className="row pricing-category">
                <div className="col-12">
                  <h3 className="category-title">外贸独立站</h3>
                </div>
                {[
                  { 
                    name: '个人版', 
                    price: '2,999',
                    delivery: '3天交付',
                    features: ['3个核心页面', 'PayPal支付集成', '响应式设计', '基础SEO设置', '1个月技术支持']
                  },
                  { 
                    name: '基础版', 
                    price: '4,999',
                    delivery: '5天交付',
                    features: ['5个核心页面', 'PayPal + Stripe支付', '响应式设计', 'SEO优化', '2个月技术支持']
                  },
                  { 
                    name: '进阶版', 
                    price: '8,999',
                    delivery: '7天交付',
                    popular: true,
                    features: ['10个页面', '多支付方式', '中英双语支持', '数据分析看板', '3个月技术支持']
                  },
                  { 
                    name: '旗舰版', 
                    price: '18,999',
                    delivery: '15天交付',
                    features: ['无限页面', '定制功能开发', '会员系统 + 积分', '多语言多货币', '全年技术维护']
                  },
                ].map((plan, index) => (
                  <div key={index} className="col-xl-3 col-lg-6 col-md-6">
                    <div className={`pricing-single-item ${plan.popular ? 'popular' : ''}`}>
                      <h5 className="pricing-tag">{plan.popular ? '最受欢迎' : '热门选择'}</h5>
                      <h3 className="pricing-plan">
                        <span><img src="/images/demo-img/pricing-icon.png" alt="icon" /></span>
                        {plan.name}
                      </h3>
                      <div className="pricing-money">
                        <h3><span className="currency">¥</span><span className="dollar">{plan.price}</span>起</h3>
                      </div>
                      <div className="pricing-delivery">
                        <span className="delivery-badge">{plan.delivery}</span>
                      </div>
                      <div className="pricing-btn">
                        <a href="/contact">选择此方案<i className="fa-light fa-arrow-right"></i></a>
                      </div>
                      <div className="pricing-body">
                        <div className="pricing-title"><h4>包含功能</h4></div>
                        <div className="pricing-feature">
                          <ul>
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex}>
                                <span><img src="/images/demo-img/pricing-check.png" alt="check" /></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 微信小程序价格 */}
              <div className="row pricing-category">
                <div className="col-12">
                  <h3 className="category-title">微信小程序</h3>
                </div>
                {[
                  { 
                    name: '展示型', 
                    price: '4,999',
                    delivery: '5天交付',
                    features: ['5个展示页面', '企业信息展示', '表单/预约功能', '地图导航集成', '2个月技术支持']
                  },
                  { 
                    name: '工具型', 
                    price: '6,999',
                    delivery: '7天交付',
                    features: ['预约/工具系统', '会员管理', '消息通知', '数据统计', '2个月技术支持']
                  },
                  { 
                    name: '商城型-基础', 
                    price: '9,999',
                    delivery: '10天交付',
                    popular: true,
                    features: ['商品管理系统', '购物车 + 订单', '微信支付集成', '物流跟踪', '3个月技术支持']
                  },
                  { 
                    name: '商城型-进阶', 
                    price: '14,999',
                    delivery: '15天交付',
                    features: ['全功能商城', '分销系统', '拼团/秒杀', '积分系统', '6个月技术支持']
                  },
                  { 
                    name: '商城型-旗舰', 
                    price: '24,999',
                    delivery: '25天交付',
                    features: ['定制功能开发', '数据分析大屏', '营销工具全套', '全年技术维护', '源码交付']
                  },
                ].map((plan, index) => (
                  <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                    <div className={`pricing-single-item ${plan.popular ? 'popular' : ''}`}>
                      <h5 className="pricing-tag">{plan.popular ? '最受欢迎' : '热门选择'}</h5>
                      <h3 className="pricing-plan">
                        <span><img src="/images/demo-img/pricing-icon.png" alt="icon" /></span>
                        {plan.name}
                      </h3>
                      <div className="pricing-money">
                        <h3><span className="currency">¥</span><span className="dollar">{plan.price}</span>起</h3>
                      </div>
                      <div className="pricing-delivery">
                        <span className="delivery-badge">{plan.delivery}</span>
                      </div>
                      <div className="pricing-btn">
                        <a href="/contact">选择此方案<i className="fa-light fa-arrow-right"></i></a>
                      </div>
                      <div className="pricing-body">
                        <div className="pricing-title"><h4>包含功能</h4></div>
                        <div className="pricing-feature">
                          <ul>
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex}>
                                <span><img src="/images/demo-img/pricing-check.png" alt="check" /></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 增值服务 */}
              <div className="row pricing-category">
                <div className="col-12">
                  <h3 className="category-title">增值服务（可选）</h3>
                </div>
                {[
                  { 
                    name: '加速包', 
                    price: '+50%',
                    delivery: '立即生效',
                    features: ['交付时间减半', '优先排期', '加急开发', '7x24小时支持']
                  },
                  { 
                    name: '源码包', 
                    price: '+30%',
                    delivery: '项目交付时',
                    features: ['完整源代码', '技术文档', '部署指南', '二次开发支持']
                  },
                  { 
                    name: '培训包', 
                    price: '1,999',
                    delivery: '预约制',
                    features: ['3小时一对一培训', '后台操作指导', '常见问题解答', '视频教程']
                  },
                  { 
                    name: '年度维护', 
                    price: '3,999/年',
                    delivery: '全年',
                    features: ['技术维护', '安全更新', 'Bug修复', '优先响应']
                  },
                ].map((plan, index) => (
                  <div key={index} className="col-xl-3 col-lg-6 col-md-6">
                    <div className="pricing-single-item">
                      <h5 className="pricing-tag">可选服务</h5>
                      <h3 className="pricing-plan">
                        <span><img src="/images/demo-img/pricing-icon.png" alt="icon" /></span>
                        {plan.name}
                      </h3>
                      <div className="pricing-money">
                        <h3><span className="currency">¥</span><span className="dollar">{plan.price}</span></h3>
                      </div>
                      <div className="pricing-delivery">
                        <span className="delivery-badge">{plan.delivery}</span>
                      </div>
                      <div className="pricing-btn">
                        <a href="/contact">了解详情<i className="fa-light fa-arrow-right"></i></a>
                      </div>
                      <div className="pricing-body">
                        <div className="pricing-title"><h4>服务内容</h4></div>
                        <div className="pricing-feature">
                          <ul>
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex}>
                                <span><img src="/images/demo-img/pricing-check.png" alt="check" /></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Marquee />
          <FAQ image="/images/demo-img/accordian-thumb2.png" />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
