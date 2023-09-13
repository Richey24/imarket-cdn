import { templateImages } from "@/appProvider/templateImages";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
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
                         <div className="home-banner banner-left theBanner">
                              <div className="container position-relative">
                                   <div className="banner-layer banner-layer-middle">
                                        <h2
                                             className="m-b-1 banner-title"
                                             data-animation-duration="1200"
                                             data-animation-delay="800"
                                             data-animation-name="fadeIn"
                                        >
                                             New Hot Cosmetics
                                        </h2>
                                        <h3
                                             className="text-uppercase rotated-upto-text mb-0 position-relative"
                                             data-animation-delay="800"
                                             data-animation-duration="1200"
                                             data-animation-name="blurIn"
                                        >
                                             <small>Up to</small>50% Off
                                        </h3>

                                        <hr
                                             className="divider-short-thick"
                                             data-animation-duration="1200"
                                             data-animation-delay="800"
                                             data-animation-name="fadeIn"
                                        />

                                        <h5
                                             className="text-uppercase d-inline-block ls-n-20 pr-1 pt-2"
                                             data-animation-delay="1600"
                                             data-animation-duration="1200"
                                             data-animation-name="fadeIn"
                                        >
                                             Starting at
                                             <span>
                                                  $<strong>1</strong>99
                                             </span>
                                        </h5>
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

                         <div
                              className="home-banner bg-img secondBanner"
                              style={{
                                   backgroundImage: `url(${templateImages.demo17.sliderImage.slide5})`,
                                   backgroundColor: "#c0bec1",
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
                                             Deals are Here!
                                        </h2>
                                        <h3
                                             className="text-uppercase rotated-upto-text mb-0 position-relative"
                                             data-animation-duration="1200"
                                             data-animation-delay="800"
                                             data-animation-name="blurIn"
                                        >
                                             <small>Up to</small>50% Off
                                        </h3>

                                        <hr className="divider-short-thick" />

                                        <h5
                                             className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2"
                                             data-animation-duration="1200"
                                             data-animation-delay="800"
                                             data-animation-name="fadeIn"
                                        >
                                             Starting at
                                             <span>
                                                  $<strong>1</strong>99
                                             </span>
                                        </h5>
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
                    </Slider>
               </section>
          </div>
     );
};

export default Banner;
