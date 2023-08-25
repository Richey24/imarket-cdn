import { templateImages } from "@/appProvider/templateImages";
import React from "react";
import Slider from "react-slick";

const Hero = () => {
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
     };
     return (
          <section className="home-slider-container">
               <Slider {...settings} className="home-slider with-dots-container">
                    <div
                         className="home-slide home-slide1 banner"
                         style={{ backgroundColor: "#111" }}
                    >
                         <div
                              className="slide-bg"
                              style={{
                                   backgroundImage: `url(${templateImages.demo18.sliderImage.slide6})`,
                              }}
                         />
                         {/* End .slide-bg !*/}
                         <ul className="slide-bg scene" style={{ width: "100%", height: "100%" }}>
                              <li className="layer" data-depth="0.05">
                                   <img src={templateImages.demo18.sliderImage.slide9} alt="" />
                              </li>
                              <li className="layer" data-depth="0.06">
                                   <img
                                        style={{
                                             position: "absolute",
                                             top: "31%",
                                             left: "46.5%",
                                        }}
                                        src={templateImages.demo18.sliderImage.slide2}
                                        alt=""
                                   />
                              </li>
                              <li className="layer" data-depth="0.07">
                                   <img
                                        className="animation-spin"
                                        style={{
                                             position: "absolute",
                                             top: "25%",
                                             left: "66%",
                                        }}
                                        src={templateImages.demo18.sliderImage.slide3}
                                        alt=""
                                   />
                              </li>
                              <li className="layer" data-depth="0.10">
                                   <img
                                        className="animation-wave"
                                        style={{
                                             position: "absolute",
                                             top: "50%",
                                             left: "80%",
                                        }}
                                        src={templateImages.demo18.sliderImage.slide4}
                                        alt=""
                                   />
                              </li>
                              <li className="layer" data-depth="0.15">
                                   <img
                                        style={{
                                             position: "absolute",
                                             top: "70%",
                                             left: "55%",
                                        }}
                                        src={templateImages.demo18.sliderImage.slide5}
                                        alt=""
                                   />
                              </li>
                         </ul>
                         <div className="home-slide-content">
                              <h2 className="text-white text-transform-uppercase line-height-1">
                                   Spring / Summer Season
                              </h2>
                              <h3 className="text-white d-inline-block line-height-1 ls-0 text-center">
                                   up
                                   <br /> to
                              </h3>
                              <h4 className="text-white text-uppercase line-height-1 d-inline-block">
                                   50% off
                              </h4>
                              <div />
                              <h5 className="float-left text-white text-uppercase line-height-1 ls-n-20">
                                   Starting At
                              </h5>
                              <h6 className="float-left coupon-sale-text line-height-1 ls-n-20 font-weight-bold text-secondary">
                                   <sup>$</sup>19<sup>99</sup>
                              </h6>
                              <a href="demo18-shop.html" className="btn btn-light d-inline-block">
                                   Shop Now
                              </a>
                         </div>
                         {/* End .home-slide-content */}
                    </div>
                    {/* End .home-slide */}
                    <div
                         className="home-slide home-slide2 banner"
                         style={{ backgroundColor: "#111" }}
                    >
                         <div
                              className="slide-bg"
                              style={{
                                   backgroundImage: `url(${templateImages.demo18.sliderImage.slide6})`,
                                   transform: "scaleX(-1)",
                              }}
                         />
                         {/* End .slide-bg !*/}
                         <ul className="slide-bg scene" style={{ width: "100%", height: "100%" }}>
                              <li className="layer" data-depth="0.05">
                                   <img src={templateImages.demo18.sliderImage.slide1} alt="" />
                              </li>
                              <li className="layer" data-depth="0.06">
                                   <img
                                        style={{
                                             position: "absolute",
                                             top: "70%",
                                             left: "42%",
                                        }}
                                        src={templateImages.demo18.sliderImage.slide2}
                                        alt=""
                                   />
                              </li>
                              <li className="layer" data-depth="0.07">
                                   <img
                                        className="animation-spin"
                                        style={{
                                             position: "absolute",
                                             top: "25%",
                                             left: "45%",
                                        }}
                                        src={templateImages.demo18.sliderImage.slide3}
                                        alt=""
                                   />
                              </li>
                              <li className="layer" data-depth="0.10">
                                   <img
                                        className="animation-wave"
                                        style={{
                                             position: "absolute",
                                             top: "49%",
                                             left: "21%",
                                        }}
                                        src={templateImages.demo18.sliderImage.slide4}
                                        alt=""
                                   />
                              </li>
                              <li className="layer" data-depth="0.15">
                                   <img
                                        style={{
                                             position: "absolute",
                                             top: "25%",
                                             left: "23%",
                                        }}
                                        src={templateImages.demo18.sliderImage.slide5}
                                        alt=""
                                   />
                              </li>
                         </ul>
                         <div className="home-slide-content">
                              <h2 className="text-white text-transform-uppercase line-height-1">
                                   Spring / Summer Season
                              </h2>
                              <h3 className="text-white d-inline-block line-height-1 ls-0 text-center">
                                   up
                                   <br /> to
                              </h3>
                              <h4 className="text-white text-uppercase line-height-1 d-inline-block">
                                   50% off
                              </h4>
                              <div />
                              <h5 className="float-left text-white text-uppercase line-height-1 ls-n-20">
                                   Starting At
                              </h5>
                              <h6 className="float-left coupon-sale-text line-height-1 ls-n-20 font-weight-bold text-secondary">
                                   <sup>$</sup>19<sup>99</sup>
                              </h6>
                              <a href="demo18-shop.html" className="btn btn-light d-inline-block">
                                   Shop Now
                              </a>
                         </div>
                         {/* End .home-slide-content */}
                    </div>
                    {/* End .home-slide */}
               </Slider>
               {/* End .home-slider */}
               {/* End .home-slide-thumbs */}
          </section>
     );
};

export default Hero;
