import React, { useState } from "react";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel";
import Image from "next/image";

export const Banner = () => {
     const owlCarouselOptions = {
          dots: false,
          margin: 20,
          loop: false,
          responsive: {
               576: {
                    items: 1,
               },
               992: {
                    items: 1,
               },
          },
     };

     return (
          <div className="row m-b-3">
               <div className="home-slider-container col-lg-9 offset-lg-3">
                    <OwlCarousel
                         className="home-slider owl-carousel owl-carousel-lazy"
                         {...owlCarouselOptions}
                    >
                         <div className="home-slide banner w-full h-[410px]">
                              <Link href="demo9-shop.html">
                                   <Image
                                        className="slide-bg bg-[#ccc]"
                                        src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                                        alt="banner"
                                        fill
                                   />
                              </Link>
                              <div className="banner-layer slide-1 text-xl-right banner-layer-middle">
                                   <h4
                                        className="text-xl-right slide-title "
                                        data-animation-delay="100"
                                        data-animation-name="fadeInUpShorter"
                                   >
                                        Find the Boundaries. Push Through!
                                   </h4>
                                   <h2
                                        className="text-xl-right text-uppercase sub-title "
                                        data-animation-delay="300"
                                        data-animation-name="fadeInUpShorter"
                                   >
                                        Shoes Sale
                                   </h2>
                                   <div className="row">
                                        <div
                                             className="col-auto col-md-6 "
                                             data-animation-delay="500"
                                             data-animation-name="fadeInRightShorter"
                                        >
                                             <h3 className="sale-label line-height-1 mb-0 d-inline-block text-center">
                                                  40
                                                  <small>
                                                       <sup>%</sup>
                                                       <sub>OFF</sub>
                                                  </small>
                                             </h3>
                                        </div>
                                        <div
                                             className="col-auto col-md-6 content-right "
                                             data-animation-delay="700"
                                             data-animation-name="fadeInRightShorter"
                                        >
                                             <h4 className="d-inline-block text-left text-uppercase line-height-1 d-inline-block">
                                                  Starting At
                                             </h4>
                                             <h5 className="text-left coupon-sale-text">
                                                  $<b>119</b>99
                                             </h5>
                                             <div className="mb-0">
                                                  <Link
                                                       href="demo9-shop.html"
                                                       className="btn btn-modern btn-md btn-dark"
                                                  >
                                                       SHOP NOW!
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="home-slide banner  w-full h-[410px]">
                              <a href="demo9-shop.html">
                                   <Image
                                        className="slide-bg bg-[#ccc]"
                                        src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                                        alt="banner"
                                        fill
                                   />
                              </a>
                              <div className="banner-layer slide-2 text-right banner-layer-middle">
                                   <div>
                                        <h2
                                             className="text-right text-uppercase text-primary ls-n-20 m-b-2 "
                                             data-animation-delay="100"
                                             data-animation-name="fadeInUpShorter"
                                        >
                                             FLASH SALE
                                        </h2>
                                        <h4
                                             className="text-right m-b-2 "
                                             data-animation-delay="300"
                                             data-animation-name="fadeInUpShorter"
                                        >
                                             TOP BRANDS
                                             <br />
                                             SUMMER SUNGLASSES
                                        </h4>
                                        <h3
                                             className="text-right text-uppercase text-light ls-n-20 m-b-4 "
                                             data-animation-delay="500"
                                             data-animation-name="fadeInUpShorter"
                                        >
                                             STARTING
                                             <br />
                                             AT<sup className="pl-2 ml-1">$</sup>199<sup>99</sup>
                                        </h3>
                                        <div className="pt-1">
                                             <a
                                                  href="demo9-shop.html"
                                                  className="btn btn-modern btn-lg btn-light "
                                                  data-animation-delay="700"
                                                  data-animation-name="fadeInUpShorter"
                                             >
                                                  View Sale
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </OwlCarousel>
               </div>
          </div>
     );
};
