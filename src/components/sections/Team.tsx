import Link from 'next/link';
import { SectionTitle } from '../common/SectionTitle';

interface TeamItem {
  image: string;
  name: string;
  role: string;
  link: string;
}

interface TeamProps {
  subTitle?: string;
  title?: string[];
  items?: TeamItem[];
}

const defaultItems: TeamItem[] = [
  {
    image: '/images/inner-img/team-thumb1.png',
    name: 'Anjelina Watson',
    role: 'UI Designer',
    link: '/team/slug',
  },
  {
    image: '/images/inner-img/team-thumb2.png',
    name: 'John D. Alexon',
    role: 'UI Designer',
    link: '/team/slug',
  },
  {
    image: '/images/inner-img/team-thumb3.png',
    name: 'Shornaly M. Shila',
    role: 'UI Designer',
    link: '/team/slug',
  },
];

export function Team({ subTitle = 'Our Team', title = ['Meet our Super Professional', 'Team Members'], items = defaultItems }: TeamProps) {
  return (
    <section className="team-section-one">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <SectionTitle subTitle={subTitle} title={title} align="center" />
          </div>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-team-box">
                <div className="team-thumb">
                  <figure className="reveal">
                    <img src={item.image} alt="img" />
                  </figure>
                </div>
                <div className="team-content-box">
                  <div className="team-content">
                    <h3 className="team-title">
                      <Link href={item.link}>{item.name}</Link>
                    </h3>
                    <h5 className="team-desi">{item.role}</h5>
                  </div>
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-effiect1">
                  <img src="/images/inner-img/team-box-eff1.png" alt="box eff" />
                </div>
                <div className="team-effiect2">
                  <img src="/images/inner-img/team-box-eff2.png" alt="box eff" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="team-top-effiect fade-in">
        <img src="/images/inner-img/team-top-effiect.png" alt="team effient" />
      </div>
    </section>
  );
}
