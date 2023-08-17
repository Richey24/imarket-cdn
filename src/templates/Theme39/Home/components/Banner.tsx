import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel";

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
                                   src="assets/images/demoes/demo34/slider/slide-1.jpg"
                                   alt="slider"
                                   width="1920"
                                   height="700"
                              />
                         </figure>

                         <div className="banner-layer banner-layer-middle">
                              <div
                                   className="appear-animate"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay="300"
                              >
                                   <h4 className="m-b-2">New Amazing Collection</h4>
                                   <h2 className="font1 font-italic m-b-4">Summer Beauty Sale</h2>
                                   <p className="font2 ls-n-15 m-b-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Praesent ullamcorper quam lacus, et suscipit lectus porta
                                        efficitur.
                                   </p>
                                   <h5 className="coupon-sale-text float-left ls-n-20 text-uppercase">
                                        Starting at
                                        <em>
                                             $<strong>39</strong>99
                                        </em>
                                   </h5>
                                   <a href="demo34-shop.html" className="btn btn-light btn-lg mb-2">
                                        Shop Now
                                   </a>
                              </div>
                         </div>

                         <div className="banner-layer banner-layer-bottom banner-text">
                              <img
                                   src="assets/images/demoes/demo34/slider/slide-1-text.png"
                                   alt="bg-text"
                                   width="1281"
                                   height="275"
                              />
                         </div>

                         <div className="banner-layer dot-image">
                              <img
                                   src="assets/images/demoes/demo34/dots.png"
                                   alt="dots"
                                   width="123"
                                   height="126"
                              />
                         </div>
                    </div>
                    <div className="home-slide home-slide-2 banner tw-bg-[#f6dbe2]">
                         <figure>
                              <img
                                   src="assets/images/demoes/demo34/slider/slide-2.jpg"
                                   alt="slider"
                                   width="1920"
                                   height="700"
                              />
                         </figure>

                         <div className="banner-layer banner-layer-middle text-right">
                              <div
                                   className="appear-animate"
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay="300"
                              >
                                   <h4 className="m-b-2">Back In Stock</h4>
                                   <h2 className="font1 font-italic m-b-4">Ultimate SkinCare</h2>
                                   <p className="font2 ls-n-15 m-b-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Praesent lori ullamcorper quam lacus, et suscipit lectus
                                        porta efficitur.
                                   </p>
                                   <a
                                        href="demo34-shop.html"
                                        className="btn btn-light btn-lg mb-2 float-right"
                                   >
                                        Shop Now
                                   </a>
                                   <h5 className="coupon-sale-text float-right ls-n-20 text-uppercase">
                                        Starting at
                                        <em>
                                             $<strong>39</strong>99
                                        </em>
                                   </h5>
                              </div>
                         </div>

                         <div className="banner-layer banner-layer-bottom banner-text">
                              <img
                                   src="assets/images/demoes/demo34/slider/slide-2-text.png"
                                   alt="bg-text"
                                   width="1281"
                                   height="275"
                              />
                         </div>

                         <div className="banner-layer dot-image">
                              <img
                                   src="assets/images/demoes/demo34/dots.png"
                                   alt="dots"
                                   width="123"
                                   height="126"
                              />
                         </div>
                    </div>
               </OwlCarousel>
          </section>
     );
};
