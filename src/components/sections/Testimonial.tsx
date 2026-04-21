import { SectionTitle } from '../common/SectionTitle';

interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

interface TestimonialProps {
  subTitle?: string;
  title?: string[];
  mainImage?: string;
  items?: TestimonialItem[];
}

const defaultItems: TestimonialItem[] = [
  {
    name: '张先生',
    role: '某家居品牌创始人',
    avatar: '/images/demo-img/testi-autor411.png',
    content:
      '从咨询到上线只用了3天，效率惊人！独立站帮我打开了欧美市场，月销售额翻了三倍。Shopify一年要交好几千，跃迁一次付费太划算了。',
  },
  {
    name: '李女士',
    role: '跨境电商创业者',
    avatar: '/images/demo-img/testi-autor412.png',
    content:
      '作为一个技术小白，本来担心搞不定独立站。没想到跃迁的服务这么贴心，后台操作简单得像发朋友圈，现在我已经能自己管理网站了。',
  },
  {
    name: '王总',
    role: '某美妆品牌运营总监',
    avatar: '/images/demo-img/testi-autor413.png',
    content:
      '小程序的会员系统太棒了，我们的复购率提升了60%。私域流量现在占我们总销量的40%，这个数据在以前是不敢想象的。',
  },
  {
    name: '陈女士',
    role: '服装品牌创始人',
    avatar: '/images/demo-img/testi-autor414.png',
    content:
      '微信小程序上线首月，私域用户就增长了10万+。整个开发过程很顺畅，交付准时，技术支持响应超快，强烈推荐！',
  },
];

export function Testimonial({
  subTitle = '客户评价',
  title = ['听听他们怎么说', '5年来服务100+客户，满意度98%'],
  mainImage = '/images/demo-img/testi-thumb41.png',
  items = defaultItems,
}: TestimonialProps) {
  return (
    <section className="testimonial-section-one">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="testi-thumb-wrapper">
              <div className="testi-thumb">
                <figure>
                  <img src={mainImage} alt="thumb41" />
                </figure>
              </div>
              <div className="testi-thumb-circle">
                <img src="/images/demo-img/testi-thumb-circle.png" alt="circle" />
              </div>
              <div className="testi-avatars-img">
                <div className="testimonial-autor1">
                  <img src="/images/demo-img/testi-autor41.png" alt="autor41" />
                </div>
                <div className="testimonial-autor2">
                  <img src="/images/demo-img/testi-autor42.png" alt="autor42" />
                </div>
                <div className="testimonial-autor3">
                  <img src="/images/demo-img/testi-autor43.png" alt="autor43" />
                </div>
                <div className="testimonial-autor4">
                  <img src="/images/demo-img/testi-autor44.png" alt="autor44" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <SectionTitle subTitle={subTitle} title={title} />
            <div className="row">
              <div className="swiper testi-active2">
                <div className="swiper-wrapper">
                  {items.map((item, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="col-lg-12">
                        <div className="testi-box">
                          <div className="single-testi-box">
                            <div className="testi-autor-box">
                              <div className="testi-autor-content">
                                <h5 className="autor-title">{item.name}</h5>
                                <p className="autor-desi">{item.role}</p>
                                <ul className="testi-ratting">
                                  {[...Array(5)].map((_, i) => (
                                    <li key={i}>
                                      <i className="fa-solid fa-star"></i>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="testi-content">
                              <p>{item.content}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
