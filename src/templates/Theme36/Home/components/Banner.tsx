import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel";
import { templateImages } from "@/appProvider/templateImages";

const owlCarouselOptions = {
     dots: false,
     margin: 0,
     loop: false,
     items: 1,
};

export const Banner = () => {
     return (
          <section className="intro-section">
               <OwlCarousel
                    className="home-slider slide-animate owl-carousel owl-theme show-nav-hover loaded m-b-5"
                    {...owlCarouselOptions}
               >
                    <div className="home-slide home-slide-1 banner tw-bg-[#f6dbe2]">
                         <figure>
                              <img
                                   src={templateImages.demo36.sliderImage.slide1}
                                   alt="slider"
                                   width="1920"
                                   height="700"
                              />
                         </figure>

                         <div className="container d-flex align-items-sm-center justify-content-sm-between justify-content-center flex-column flex-sm-row">
                              <div className="banner-content content-left text-sm-right mb-sm-0 mb-2">
                                   <h2 className="text-shadow text-white font1 mb-0 ">TRENDY</h2>
                                   <h1 className="text-dark ">GAMING</h1>
                                   <h3 className="text-dark mb-0 ">CHAIRS</h3>
                                   <h2 className="text-shadow text-white font1 mr-0 mb-0 ">
                                        DEALS
                                   </h2>
                              </div>

                              <div
                                   className="banner-content content-right "
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay="1000"
                              >
                                   <h4 className="text-transform-none">Porto Game Chair</h4>
                                   <h5 className="text-price text-transform-none mb-0">
                                        from <span>$299.99</span>
                                   </h5>
                                   <h5 className="coupon-sale-text">
                                        <span>to</span>
                                        <b className="text-white align-middle">
                                             <sup>$</sup>
                                             <em className="align-text-top">199</em>
                                             <sup>99</sup>
                                        </b>
                                   </h5>
                                   <a href="demo36-shop.html" className="btn btn-dark btn-lg">
                                        Shop Now
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="home-slide home-slide-2 banner tw-bg-[#f6dbe2]">
                         <figure>
                              <img
                                   src={templateImages.demo36.sliderImage.slide2}
                                   alt="slider"
                                   width="1920"
                                   height="700"
                              />
                         </figure>

                         <div className="container d-flex align-items-sm-center justify-content-center justify-content-sm-between flex-column-reverse flex-sm-row">
                              <div
                                   className="banner-content content-left mt-2 mt-sm-0 "
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay="1000"
                              >
                                   <h4 className="text-transform-none">Best Gadtets Deals</h4>
                                   <h5 className="coupon-sale-text">
                                        <span>from</span>
                                        <b className="text-white align-middle">
                                             <sup>$</sup>
                                             <em className="align-text-top">1</em>
                                             <sup>99</sup>
                                        </b>
                                   </h5>
                                   <a href="demo36-shop.html" className="btn btn-dark btn-lg">
                                        Shop Now
                                   </a>
                              </div>

                              <div className="banner-content content-right text-sm-right">
                                   <h2
                                        className="text-shadow text-white font1 mb-0 "
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay="100"
                                   >
                                        NEW
                                   </h2>
                                   <h1
                                        className="text-dark "
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay="400"
                                   >
                                        SELECTED
                                   </h1>
                                   <h3
                                        className="text-dark mb-0 "
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay="600"
                                   >
                                        DEALS
                                   </h3>
                                   <h2
                                        className="text-shadow text-white font1 mr-0 mb-0 "
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay="800"
                                   >
                                        RELEASES
                                   </h2>
                              </div>
                         </div>
                    </div>
               </OwlCarousel>
          </section>
     );
};
