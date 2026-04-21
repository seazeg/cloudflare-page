'use client';

import Link from 'next/link';

interface BannerProps {
  badge?: string;
  title?: string[];
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage?: string;
}

export function Banner({
  badge = '专注外贸独立站与微信小程序',
  title = ['让出海更简单', '3天上线，开启全球生意', '外贸独立站 · 微信小程序'],
  description = 'Shopify太贵？我们提供更高性价比的解决方案。3天快速交付，一次付费永久使用，无隐藏费用。5年行业经验，100+成功案例，98%客户满意度。',
  ctaText = '免费咨询',
  ctaLink = '/contact',
  bgImage = '/images/demo-img/banner-bg1.png',
}: BannerProps) {
  return (
    <div className="banner-section-one" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="banner-content-wrap">
              <div className="banner-content">
                <h5 className="split_chars">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.29952 12.1663C6.25774 12.1663 6.21641 12.1576 6.17814 12.1409C6.13986 12.1241 6.10547 12.0996 6.07711 12.069L0.0804686 5.58232C0.0404934 5.53907 0.0139924 5.48511 0.00420897 5.42704C-0.00557448 5.36897 0.00178397 5.3093 0.0253838 5.25535C0.0489837 5.20139 0.0878012 5.15549 0.137086 5.12325C0.18637 5.09101 0.243983 5.07384 0.302874 5.07384H3.18933C3.23266 5.07385 3.2755 5.08315 3.31493 5.10112C3.35437 5.11909 3.3895 5.14531 3.41794 5.178L5.42204 7.48365C5.63863 7.02067 6.05791 6.24978 6.79367 5.31042C7.88137 3.92172 9.90455 1.87936 13.366 0.0356649C13.4329 3.7701e-05 13.5107 -0.00920898 13.5841 0.00975084C13.6575 0.0287107 13.7211 0.0744987 13.7624 0.138074C13.8037 0.201649 13.8196 0.278389 13.8071 0.353142C13.7945 0.427894 13.7544 0.495225 13.6946 0.541839C13.6814 0.552167 12.3468 1.60316 10.8108 3.52824C9.39723 5.29979 7.5181 8.19654 6.59343 11.9362C6.57719 12.0019 6.53941 12.0603 6.48612 12.102C6.43283 12.1437 6.36711 12.1664 6.29943 12.1664L6.29952 12.1663Z"
                      fill="#6766FF"
                    />
                  </svg> {badge}
                </h5>
                {title.map((line, index) => (
                  <h2 key={index} className="split_chars">
                    {line}
                  </h2>
                ))}
                <p className="text-anime-3">{description}</p>
                <Link href={ctaLink}>
                  {ctaText} <i className="fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
