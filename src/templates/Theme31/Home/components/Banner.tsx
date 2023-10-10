import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel";

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     responsive: {
          576: {
               items: 1,
          },
     },
};

export const Banner = ({ slides }) => {
     return (
          <div className="container">
               <section>
                    <div className="row">
                         <div className="col-md-8  height-x1">
                              <div className="home-banner">
                                   <figure>
                                        <img
                                             src={slides[0]?.imageUrl}
                                             width="780"
                                             height="440"
                                             alt="Home Banner"
                                        />
                                   </figure>
                                   <div className="banner-content content-right-bottom">
                                        {/* <span
                                             className="span-box span-primary "
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay="200"
                                        >
                                             50% off
                                        </span> */}
                                        <h3
                                             className=" "
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay="400"
                                        >
                                             {slides[0]?.title}
                                        </h3>
                                        <div
                                             className="price-box "
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay="600"
                                        >
                                             <span className="product-price">
                                                  {" "}
                                                  {slides[0]?.text}
                                             </span>
                                        </div>
                                        <a
                                             href="demo31-shop.html"
                                             className="btn "
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay="800"
                                        >
                                             shop now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-12 col-md-4">
                              <div className="row">
                                   <div className="col-sm-6 col-md-12  height-x2">
                                        <div className="home-banner">
                                             <figure>
                                                  <img
                                                       src={slides[1]?.imageUrl}
                                                       width="380"
                                                       height="210"
                                                       alt="Home Banner"
                                                  />
                                             </figure>
                                             <div className="banner-content content-right-bottom">
                                                  <span
                                                       className="font1 "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="1000"
                                                  >
                                                       {slides[1]?.text}
                                                  </span>
                                                  <h3
                                                       className=" "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="1200"
                                                  >
                                                       {slides[1]?.title}
                                                  </h3>
                                                  <a
                                                       href="demo31-shop.html"
                                                       className="btn "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="1400"
                                                  >
                                                       shop now
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-sm-6 col-md-12  height-x2">
                                        <div className="home-banner">
                                             <figure>
                                                  <img
                                                       src="assets/images/demoes/demo31/banners/home_banner3.jpg"
                                                       width="380"
                                                       height="210"
                                                       alt="Home Banner"
                                                  />
                                             </figure>
                                             <div className="banner-content content-stretch">
                                                  <span
                                                       className="font1 "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="1500"
                                                  >
                                                       check new wireless
                                                  </span>
                                                  <h3
                                                       className=" "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="1700"
                                                  >
                                                       controllers
                                                  </h3>
                                                  <h4
                                                       className="sale-off text-white font1 "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="1900"
                                                  >
                                                       <span className="span-box span-secondary ls-0">
                                                            50%
                                                       </span>
                                                       off
                                                  </h4>
                                                  <a
                                                       href="demo31-shop.html"
                                                       className="btn "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="2100"
                                                  >
                                                       shop now
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <section
                    className="info-section mt-1 row row-joined "
                    data-animation-name="fadeInUpShorter"
                    data-animation-delay="600"
               >
                    <div className="col-md-4">
                         <div className="info-box info-box-icon-left text-white">
                              <i className="icon-shipping"></i>

                              <div className="info-box-content">
                                   <h4>FREE SHIPPING &amp; RETURN</h4>
                                   <p className="font2">Free shipping on all orders over $99</p>
                              </div>
                         </div>
                    </div>

                    <div className="col-md-4">
                         <div className="info-box info-box-icon-left text-white">
                              <i className="icon-money"></i>

                              <div className="info-box-content">
                                   <h4>MONEY BACK GUARANTEE</h4>
                                   <p className="font2">100% money back guarantee</p>
                              </div>
                         </div>
                    </div>

                    <div className="col-md-4">
                         <div className="info-box info-box-icon-left text-white">
                              <i className="icon-support"></i>

                              <div className="info-box-content">
                                   <h4>ONLINE SUPPORT 24/7</h4>
                                   <p className="font2">Lorem ipsum dolor sit amet</p>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};
