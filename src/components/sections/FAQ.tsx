'use client';

import { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  subTitle?: string;
  title?: string[];
  image?: string;
  items?: FAQItem[];
}

const defaultItems: FAQItem[] = [
  {
    question: '建站需要准备什么资料？',
    answer: '只需提供公司/品牌信息、产品图片和文案，我们全程协助完成。外贸独立站需要准备域名（我们可以协助购买），微信小程序需要企业营业执照。其他技术相关的工作都由我们负责。',
  },
  {
    question: '建站需要多长时间？',
    answer: '外贸独立站：个人版3天、基础版5天、进阶版7天、旗舰版15天。微信小程序：展示型5天、工具型7天、商城型10-25天。具体时间取决于需求复杂度，我们会在需求确认时给出准确时间表。',
  },
  {
    question: '和Shopify有什么区别？',
    answer: 'Shopify是SaaS服务，每月收费$29-299+交易抽成2%。我们是一次性收费，网站完全属于你自己，无月租无抽成，长期更划算。以3年计算，Shopify至少花费$1044+抽成，而我们只需¥2999起一次性付费。',
  },
  {
    question: '网站上线后如何维护？',
    answer: '套餐包含1-12个月免费技术支持（视套餐而定）。之后可选择年度维护服务¥3,999/年（包含技术维护、安全更新、Bug修复、优先响应），或按次收费。我们承诺长期技术支持，让你无后顾之忧。',
  },
  {
    question: '我不会技术，能自己管理网站吗？',
    answer: '当然！我们提供简洁易用的后台管理系统，像发朋友圈一样简单。还可选购培训包（¥1,999，3小时一对一培训），确保你能独立管理日常内容更新。遇到任何问题，我们5分钟内响应。',
  },
  {
    question: '支持哪些支付方式？',
    answer: '外贸独立站支持PayPal、Stripe、信用卡等多种国际支付方式；微信小程序支持微信支付。也可根据需求集成支付宝、Apple Pay等其他支付方式。支付接口配置由我们全程协助完成。',
  },
  {
    question: '价格包含域名和服务器吗？',
    answer: '不包含。域名（约¥80-150/年）和服务器（约¥500-2000/年）需要你自己购买，我们可以协助配置。推荐阿里云或腾讯云，我们也可以提供代采购服务。这样你可以完全掌控自己的资产。',
  },
  {
    question: '可以做多语言多货币吗？',
    answer: '进阶版独立站支持中英双语，旗舰版支持多语言多货币，适合开拓欧美、东南亚等多国市场。微信小程序也可以做多语言版本。多语言功能包含在对应套餐中，无需额外付费。',
  },
  {
    question: '不满意可以退款吗？',
    answer: '设计稿确认前可全额退款，开发过程中按完成度协商退款，开发完成后不支持退款。但我们承诺交付质量，有问题会负责到底，确保你满意。5年来客户满意度高达98%，你可以放心选择。',
  },
  {
    question: '付款方式是怎样的？',
    answer: '标准付款方式为50%预付款启动项目，50%尾款验收后支付。对于大额订单（¥20,000以上），可分三期支付：30%启动+40%开发中+30%验收后。支持银行转账、支付宝、微信支付。',
  },
];

export function FAQ({
  subTitle = "常见问题",
  title = ['你可能想知道的', '建站相关问题解答'],
  image = '/images/demo-img/accordian-thumb1.png',
  items = defaultItems,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-section-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="accordian-wrapper">
              <SectionTitle subTitle={subTitle} title={title} />
              <div className="accordian-thumb-wrap">
                <div className="accordian-thumb">
                  <figure className="reveal">
                    <img src={image} alt="accordian-thumb" />
                  </figure>
                </div>
                <div className="accordian-dot">
                  <img src="/images/demo-img/accordian-thumb-dot.png" alt="accordian dot" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tab_container">
              <div className="tab_content">
                <ul className="accordion">
                  {items.map((item, index) => (
                    <li key={index} className={openIndex === index ? 'active' : ''}>
                      <a onClick={() => toggleAccordion(index)}>
                        <span></span>
                        {item.question}
                      </a>
                      <p style={{ display: openIndex === index ? 'block' : 'none' }}>{item.answer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-effient fade-in">
        <img src="/images/demo-img/accrodion-effient.png" alt="accordion effient" />
      </div>
      <div className="accordion-shape1 fade-in">
        <img src="/images/demo-img/accrodion-shape1.png" alt="accordion shape" />
      </div>
      <div className="accordion-shape2 fade-in">
        <img src="/images/demo-img/accrodion-shape2.png" alt="accordion shape" />
      </div>
    </div>
  );
}
