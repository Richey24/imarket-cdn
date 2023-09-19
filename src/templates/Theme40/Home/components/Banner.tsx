import Image from "next/image";
import Slider from "react-slick";
import { templateImages } from "@/appProvider/templateImages";

const Banner = () => {
     let settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
          className: "",
     };
     return (
          <section className="home-section ">
               <div className="row">
                    <div className="col-md-12 col-xl-8 col-lg-12 mb-xl-0 mb-2 h-100">
                         <div className="home-slider slide-animate owl-carouse owl-theme show-nav-hover dot-inside nav-big h-100 text-uppercase">
                              <Slider {...settings}>
                                   <div className="home-slide home-slide1 banner h-100">
                                        <Image
                                             className="slide-bg"
                                             src={templateImages.demo40.sliderImage.slide1}
                                             width={1028}
                                             height={465}
                                             alt="slider image"
                                             style={{
                                                  objectFit: "cover",
                                             }}
                                        />
                                        <div className="container d-flex align-items-center">
                                             <div className="banner-layer d-flex flex-column">
                                                  <h6
                                                       className="text-transform-none"
                                                       data-animation-name="fadeInDownShorter"
                                                       data-animation-delay={100}
                                                  >
                                                       Exclusive Product New Arrival
                                                  </h6>
                                                  <h2
                                                       className="text-transform-none"
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay={600}
                                                  >
                                                       Condensed Milk
                                                  </h2>
                                                  <h3
                                                       className=""
                                                       data-animation-name="fadeInRightShorter"
                                                       data-animation-delay={1100}
                                                  >
                                                       NATURAL PRODUCT
                                                  </h3>
                                                  <span
                                                       className="custom-font text-transform-none"
                                                       data-animation-name="fadeInRightShorter"
                                                       data-animation-delay={1100}
                                                  >
                                                       <span>Extra!</span>
                                                  </span>
                                                  <h5
                                                       className=""
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay={1400}
                                                  >
                                                       BREAKFAST PRODUCTS ON SALE
                                                  </h5>
                                                  <h4
                                                       className="d-inline-block"
                                                       data-animation-name="fadeInRightShorter"
                                                       data-animation-delay={1800}
                                                  >
                                                       <sup>UP TO</sup>
                                                       <b className="coupon-sale-text ls-10 text-white align-middle">
                                                            50%
                                                       </b>
                                                  </h4>
                                             </div>
                                             {/* End .banner-layer */}
                                        </div>
                                   </div>

                                   <div className="home-slide home-slide2 banner banner-md-vw">
                                        <Image
                                             className="slide-bg"
                                             src={templateImages.demo40.sliderImage.slide2}
                                             alt="slider image"
                                             width={659}
                                             height={600}
                                             style={{ objectFit: "cover" }}
                                        />
                                        <div className="container d-flex align-items-center">
                                             <div className="container d-flex align-items-center">
                                                  <div className="banner-layer d-flex flex-column text-right">
                                                       <h6
                                                            className="text-transform-none"
                                                            data-animation-name="fadeInDownShorter"
                                                            data-animation-delay={100}
                                                       >
                                                            Exclusive Whole Wheat
                                                       </h6>
                                                       <h2
                                                            className="text-transform-none"
                                                            data-animation-name="fadeInUpShorter"
                                                            data-animation-delay={600}
                                                       >
                                                            Fluffy Pancakes
                                                       </h2>
                                                       <h3
                                                            className=""
                                                            data-animation-name="fadeInRightShorter"
                                                            data-animation-delay={1100}
                                                       >
                                                            GOOD OLD FASHIONED
                                                       </h3>
                                                       <h5
                                                            className=""
                                                            data-animation-name="fadeInUpShorter"
                                                            data-animation-delay={1400}
                                                       >
                                                            BREAKFAST PRODUCTS ON SALE
                                                       </h5>
                                                       <h4
                                                            className="d-inline-block"
                                                            data-animation-name="fadeInRightShorter"
                                                            data-animation-delay={1800}
                                                       >
                                                            <sup>UP TO</sup>
                                                            <b className="coupon-sale-text ls-10 text-white align-middle">
                                                                 50%
                                                            </b>
                                                       </h4>
                                                  </div>
                                                  {/* End .banner-layer */}
                                             </div>
                                        </div>
                                   </div>
                              </Slider>
                         </div>
                    </div>
                    <div className="col-md-12 col-xl-4 col-lg-12 d-sm-flex d-xl-block">
                         <div className="banner banner1 mb-2 pr-sm-3 pr-0 pr-xl-0">
                              <Image
                                   className="slide-bg"
                                   src={templateImages.demo40.sliderImage.slide2}
                                   alt="slider image"
                                   width={504}
                                   height={222}
                                   style={{ backgroundColor: "#d9e2e1", minHeight: "218px" }}
                              />
                              <div className="container d-flex align-items-center">
                                   <div className="banner-layer d-flex flex-column pt-0">
                                        <h6
                                             className="text-transform-none mb-1"
                                             data-animation-name="fadeInDownShorter"
                                             data-animation-delay={100}
                                        >
                                             Exclusive Product New Arrival
                                        </h6>
                                        <h2
                                             className="text-transform-none"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={600}
                                        >
                                             Organic Coffee
                                        </h2>
                                        <h3
                                             className=""
                                             data-animation-name="fadeInRightShorter"
                                             data-animation-delay={1100}
                                        >
                                             SPECIAL BLEND
                                        </h3>
                                        <span
                                             className="custom-font text-transform-none"
                                             data-animation-name="fadeInRightShorter"
                                             data-animation-delay={1100}
                                        >
                                             <span>Fresh!</span>
                                        </span>
                                   </div>
                                   {/* End .banner-layer */}
                              </div>
                         </div>
                         {/* End .home-slide */}
                         <div className="banner banner2 pl-sm-3 pl-0 pl-xl-0">
                              <Image
                                   className="slide-bg"
                                   src={templateImages.demo40.sliderImage.slide1}
                                   alt="slider image"
                                   width={504}
                                   height={222}
                                   style={{ backgroundColor: "#b48476", minHeight: "218px" }}
                              />
                              <div className="container d-flex align-items-center">
                                   <div className="banner-layer d-flex flex-column">
                                        <h6
                                             className="text-transform-none mb-1"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={200}
                                        >
                                             Stay Healthy
                                        </h6>
                                        <h2
                                             className="text-transform-none text-white ml-0"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={400}
                                        >
                                             Low Carb
                                        </h2>
                                        <h3
                                             className=" text-white"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={800}
                                        >
                                             STRAWBERRY
                                        </h3>
                                        <span
                                             className="custom-font text-transform-none"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={1200}
                                        >
                                             <span className="text-white text-transform-none">
                                                  Sugar-Free
                                             </span>
                                        </span>
                                   </div>
                                   {/* End .banner-layer */}
                              </div>
                         </div>
                         {/* End .home-slide */}
                    </div>
               </div>
          </section>
     );
};
export default Banner;
