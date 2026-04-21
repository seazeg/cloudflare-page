interface BrandProps {
  count?: number;
  brands?: string[];
}

const defaultBrands = [
  '/images/demo-img/band-img.png',
  '/images/demo-img/band-img.png',
  '/images/demo-img/band-img.png',
  '/images/demo-img/band-img.png',
  '/images/demo-img/band-img.png',
  '/images/demo-img/band-img.png',
];

export function Brand({ count = 160, brands = defaultBrands }: BrandProps) {
  return (
    <div className="brand-area-one style-two">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="brand-desc">
              <p>
                <span>{count}+ </span>Trusted companies in the world
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="swiper band-active">
            <div className="swiper-wrapper">
              {brands.map((brand, index) => (
                <div key={index} className="swiper-slide">
                  <div className="col-lg-12">
                    <div className="brand-box">
                      <div className="brand-thumb">
                        <img src={brand} alt="brand img" />
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
  );
}
