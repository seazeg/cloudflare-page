interface PageTitleProps {
  subTitle?: string;
  title?: string;
  description?: string;
  bgImage?: string;
  dashboards?: { image: string; col: string }[];
}

const defaultDashboards = [
  { image: '/images/inner-img/about-dashbord1.png', col: 'col-xl-5 col-lg-5' },
  { image: '/images/inner-img/about-dashbord2.png', col: 'col-xl-3 col-lg-3' },
  { image: '/images/inner-img/about-dashbord3.png', col: 'col-xl-4 col-lg-4' },
];

export function PageTitle({
  subTitle = 'Our Company',
  title = 'About Our Company',
  description = 'Monotonectally whiteboard proactive with leading business to niche markets rather than tested',
  bgImage = '/images/inner-img/about-page-bg.jpg',
  dashboards = defaultDashboards,
}: PageTitleProps) {
  return (
    <section className="about-page-title" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="title-content">
            <h5 className="page-sub-title split_chars">{subTitle}</h5>
            <h1 className="page-title split-text">{title}</h1>
            <p className="page-desc title-anim">{description}</p>
          </div>
        </div>
        {dashboards && dashboards.length > 0 && (
          <div className="row">
            {dashboards.map((item, index) => (
              <div key={index} className={item.col}>
                <div className="single-dashbord">
                  <div className="dashbord-thumb">
                    <figure className="reveal">
                      <img src={item.image} alt={`dashboard-${index}`} />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
