'use client';

import { SectionTitle } from '../common/SectionTitle';

interface ContactProps {
  subTitle?: string;
  title?: string;
  image?: string;
  bgImage?: string;
  pageSubTitle?: string;
  pageTitle?: string;
  pageDescription?: string;
}

export function Contact({
    subTitle = "Contact",
    title = "Leave A Reply",
    image = "/images/inner-img/contact-thumb.jpg",
    bgImage = "/images/inner-img/blog-details.jpg",
    pageSubTitle = "联系我们",
    pageTitle = "Contact Us",
    pageDescription = "填写下方表单，我会在24小时内回复你。如果着急，可以直接加我微信咨询。",
}: ContactProps) {
    return (
        <section className="contact-page-title" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="auto-container">
                <div className="row">
                    <div className="title-content">
                        <h5 className="page-sub-title split_chars">{pageSubTitle}</h5>
                        <h1 className="page-title split-text">{pageTitle}</h1>
                        <p className="page-desc title-anim">{pageDescription}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="contact-thumb">
                            <figure className="reveal">
                                <img src={image} alt="contact thumb" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="contact-form-area">
                            <SectionTitle subTitle={subTitle} title={title} />
                            <form action="#" method="POST">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="contact-input-box">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-input-box">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-input-box">
                                            <textarea
                                                name="message"
                                                placeholder="Describe your needs briefly, such as: what products you sell, target market, required features, etc."
                                                rows={5}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="blog-details-submi-button">
                                            <button type="submit">
                                                Submit Now
                                                <i className="fa-light fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
