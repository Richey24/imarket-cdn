import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import OwlCarousel from "react-owl-carousel";
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
               {/* <OwlCarousel
                    className="home-slider slide-animate owl-carousel owl-theme show-nav-hover loaded m-b-5"
                    {...owlCarouselOptions}
               >
                    <div className="home-slide home-slide-1 banner tw-bg-[#f6dbe2]">
                         <figure>
                              <img
                                   src={templateImages.demo35.sliderImage.slide1}
                                   alt="slider"
                                   width="1920"
                                   height="700"
                              />
                         </figure>

                         <div className="banner-layer banner-layer-middle banner-layer-left">
                              <h4 className="font-weight-normal text-body m-b-2 ">
                                   Exclusive Product New Arrival
                              </h4>
                              <h2 className="">Organic Coffee</h2>
                              <div>
                                   <h3 className="text-uppercase mb-4">Special Blend</h3>
                                   <h5 className="rotate-text font-weight-normal text-primary">
                                        Fresh!
                                   </h5>
                              </div>
                              <p className="font2 text-right text-uppercase ">
                                   Breakfast products on sale
                              </p>
                              <div className="coupon-sale-text m-b-2 ">
                                   <h6 className="text-uppercase text-right mb-0">
                                        <sup>up to</sup>
                                        <strong className=" text-white">50%</strong>
                                   </h6>
                              </div>
                         </div>
                    </div>
                    <div className="home-slide home-slide-2 banner tw-bg-[#f6dbe2]">
                         <figure>
                              <img
                                   src={templateImages.demo35.sliderImage.slide2}
                                   alt="slider"
                                   width="1920"
                                   height="700"
                              />
                         </figure>

                         <div className="banner-layer banner-layer-middle banner-layer-right">
                              <h4 className="font-weight-normal text-body m-b-2 ">
                                   Exclusive Product New Arrival
                              </h4>
                              <h2 className="">Fit Low Carb</h2>
                              <div className="position-relative ">
                                   <h3 className="text-uppercase">Candy Bar</h3>
                                   <h5 className="rotate-text font-weight-normal text-secondary">
                                        Sugar-Free
                                   </h5>
                              </div>
                              <p className="font2 text-right text-uppercase ">
                                   Breakfast products on sale
                              </p>
                              <div className="coupon-sale-text pb-0 ">
                                   <h6 className="text-uppercase text-right mb-0">
                                        <sup>up to</sup>
                                        <strong className=" text-white">70%</strong>
                                   </h6>
                              </div>
                         </div>
                    </div>
               </OwlCarousel> */}
          </section>
     );
};
