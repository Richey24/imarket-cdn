import Slider from "react-slick";
import "./Banner.css";

const Banner = ({ slides }) => {
     const settings = {
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
     };

     return (
          <div>
               <section className="section-1 pt-0">
                    <Slider {...settings}>
                         {slides.map((slide, index) => (
                              <div key={index} className="home-banner">
                                   <div
                                        className="bg-img tw-h-full tw-w-full banner-left"
                                        style={{
                                             backgroundImage: `url(${slide.imageUrl})`,
                                        }}
                                   >
                                        <div className="container position-relative">
                                             <div className="banner-layer banner-layer-middle">
                                                  <h2
                                                       className="m-b-1 banner-title"
                                                       data-animation-duration="1200"
                                                       data-animation-delay="800"
                                                       data-animation-name="fadeIn"
                                                  >
                                                       {slide.title}
                                                  </h2>
                                                  <h3
                                                       className="text-uppercase rotated-upto-text mb-0 position-relative"
                                                       data-animation-delay="800"
                                                       data-animation-duration="1200"
                                                       data-animation-name="blurIn"
                                                  >
                                                       {slide.text}
                                                  </h3>

                                                  <hr
                                                       className="divider-short-thick"
                                                       data-animation-duration="1200"
                                                       data-animation-delay="800"
                                                       data-animation-name="fadeIn"
                                                  />
                                                  {/* <h5
                                                       className="text-uppercase d-inline-block ls-n-20 pr-1 pt-2"
                                                       data-animation-delay="1600"
                                                       data-animation-duration="1200"
                                                       data-animation-name="fadeIn"
                                                  >
                                                       Starting at
                                                       <span>
                                                            $<strong>1</strong>99
                                                       </span>
                                                  </h5> */}
                                                  <a
                                                       href="demo17-shop.html"
                                                       className="btn btn-dark btn-xl btn-icon-right"
                                                       role="button"
                                                       data-animation-delay="2200"
                                                       data-animation-duration="1200"
                                                       data-animation-name="fadeIn"
                                                  >
                                                       Shop Now
                                                       <i className="fas fa-long-arrow-alt-right"></i>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </Slider>
               </section>
          </div>
     );
};

export default Banner;
