import Image from "next/image";
import Slider from "react-slick";
import { templateImages } from "@/appProvider/templateImages";

const Banner = () => {
     let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
          className: " ",
     };
     return (
          <div className="home-slider show-nav-hover  dot-inside mb-2">
               <Slider {...settings}>
                    <div>
                         <div className="home-slide home-slide1 banner">
                              {/* <Image
                                   className="slide-bg"
                                   src={templateImages.demo38.sliderImage.slide2}
                                   alt="slider image"
                                   style={{ backgroundColor: "#f4f4f4" }}
                                   width={1343}
                                   height={800}
                              /> */}
                              <div className="container d-flex align-items-center">
                                   <div
                                        className="banner-layer row align-items-center justify-content-center  mr-0 ml-0"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={150}
                                   >
                                        <div className="col-lg-6 col-xl-6 col-md-12 p-0 content-left text-center text-md-left mb-6">
                                             <h4 className="text-transform-none">
                                                  Shop for our products at exclusive prices
                                             </h4>
                                             <h3 className="text-transform-none">
                                                  Infrared Thermometers
                                             </h3>
                                             <h2 className="text-uppercase">70% Off</h2>
                                             <a
                                                  href="demo38-shop.html"
                                                  className="btn btn-primary btn-lg  mr-0 ml-0"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={200}
                                             >
                                                  Shop Now!
                                             </a>
                                        </div>
                                        <div
                                             className="col-md-6 col-xl-3 col-lg-3 col-sm-4 col-6 p-0 content-center  mr-0 ml-0"
                                             data-animation-name="fadeIn"
                                             data-animation-delay={700}
                                        >
                                             <p
                                                  style={{ animationDelay: "800ms" }}
                                                  data-appear-animation="zoomIn"
                                                  data-appear-animation-delay={800}
                                                  className="appear-animation zoomIn appear-animation-visible"
                                             >
                                                  <Image
                                                       src={
                                                            templateImages.demo38.sliderImage.slide4
                                                       }
                                                       alt=""
                                                       width={85}
                                                       height={85}
                                                       data-plugin-float-element=""
                                                       data-plugin-options="{'startPos': 'none', 'speed': 4, 'transition': true}"
                                                  />
                                             </p>
                                        </div>
                                        <div
                                             className="col-lg-3 col-xl-3 col-md-12 col-sm-4 col-6 pr-0 content-right  mr-0 ml-0"
                                             data-animation-name="fadeInLeftShorter"
                                             data-animation-delay={280}
                                        >
                                             {/* <img
                                                  src="assets/images/demoes/demo38/slider/fda.png"
                                                  className="w-auto mb-3"
                                                  alt="Slider Thumb"
                                             /> */}
                                             <ul className="text-capitalize">
                                                  <li>
                                                       <i className="fa fa-check" />
                                                       Non-Contact Temperature Taking
                                                  </li>
                                                  <li>
                                                       <i className="fa fa-check" />
                                                       Get Readings in Only 1 Second
                                                  </li>
                                                  <li>
                                                       <i className="fa fa-check" />
                                                       Fever Alarm at 100°F
                                                  </li>
                                             </ul>
                                             <span className="d-block">
                                                  from <span className="old-price">$299.99</span>
                                             </span>
                                             <h5 className="d-inline-flex align-items-center mb-0">
                                                  <span>to</span>
                                                  <b className="coupon-sale-text text-white align-middle d-block">
                                                       <sup>$</sup>
                                                       <em className="align-text-top">199</em>
                                                       <sup>99</sup>
                                                  </b>
                                             </h5>
                                        </div>
                                   </div>
                                   {/* End .banner-layer */}
                              </div>
                         </div>
                    </div>
                    <div>
                         <div className="home-slide home-slide2 banner">
                              <Image
                                   className="slide-bg"
                                   src={templateImages.demo38.sliderImage.slide3}
                                   alt="slider image"
                                   width={1343}
                                   height={800}
                              />
                              <div className="container d-flex align-items-center justify-content-center">
                                   <div
                                        className="banner-layer  mr-0 ml-0 "
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={150}
                                   >
                                        <h4 className="text-transform-none">
                                             Shop for our products at exclusive prices
                                        </h4>
                                        <h3 className="text-transform-none">Pro Respirator Mask</h3>
                                        <h2 className="text-uppercase">50% Off</h2>
                                        <a
                                             href="demo38-shop.html"
                                             className="btn btn-primary btn-lg  mr-0 ml-0"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={200}
                                        >
                                             Shop Now!
                                        </a>
                                   </div>
                                   {/* End .banner-layer */}
                              </div>
                         </div>
                    </div>
               </Slider>
          </div>
     );
};
export default Banner;
