import React, { useState } from "react";
import Image from "next/image";
import slide1 from "../../../../assets/images/demoes/demo2/slider/slide-1.jpg";
import slide2 from "../../../../assets/images/demoes/demo2/slider/slide-2.jpg";
import slide3 from "../../../../assets/images/demoes/demo2/slider/slide-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import react-slick styles
import "slick-carousel/slick/slick-theme.css"; // Import react-slick theme styles

export const Banner = () => {
     const settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
     };

     return (
          <div
               style={{
                    paddingLeft: "100px",
                    paddingRight: "100px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
               }}
               className="row"
          >
               <div
                    className="col-lg-3 mb-2"
                    data-animation-name="fadeInRightShorter"
                    data-animation-delay="200"
                    data-animation-duration="1000"
               >
                    <div className="side-menu-wrapper">
                         <h2 className="side-menu-title ls-10">Top Categories</h2>

                         <div className="side-menu-body mb-2 px-3 mx-3">
                              <ul className="side-menu pb-1">
                                   <li>
                                        <a href="demo2-shop.html">
                                             <i className="icon-category-fashion"></i>Fashion
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo2-shop.html">
                                             <i className="icon-category-electronics"></i>
                                             Electronics
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo2-shop.html">
                                             <i className="icon-category-gifts"></i>Gifts
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo2-shop.html">
                                             <i className="icon-category-garden"></i>Home &amp;
                                             Garden
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo2-shop.html">
                                             <i className="icon-category-music"></i>Music
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo2-shop.html">
                                             <i className="icon-cat-sport"></i>Sports
                                        </a>
                                   </li>
                              </ul>

                              <a href="#" className="btn btn-block btn-dark btn-lg px-0 ls-10">
                                   Huge Sale -<strong>70%</strong>
                                   Off
                              </a>
                         </div>
                    </div>
               </div>

               <div
                    className="col-lg-9 mb-2"
                    data-animation-name="fadeInLeftShorter"
                    data-animation-delay="400"
                    data-animation-duration="1000"
               >
                    <div
                         className="home-slider owl-theme"
                         data-owl-options="{
							'dots': true,
							'nav': false
						}"
                    >
                         <Slider {...settings}>
                              <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                                   <Image
                                        className="slide-bg"
                                        style={{ backgroundColor: "#71b5da" }}
                                        src={slide1}
                                        width="835"
                                        height="415"
                                        alt="slider image"
                                   />
                                   <div className="banner-layer">
                                        <h4 className="text-white">
                                             Find the Boundaries. Push Through!
                                        </h4>
                                        <h2 className="text-white mb-0">Summer Sale</h2>
                                        <h3 className="text-white text-uppercase">30% Off</h3>
                                        <h5 className="text-white text-uppercase d-inline-flex ls-n-20 mb-0">
                                             Starting At{" "}
                                             <b className="coupon-sale-text text-secondary bg-white">
                                                  $<em className="align-text-top">199</em>99
                                             </b>
                                        </h5>
                                        <a href="demo2-shop.html" className="btn btn-dark">
                                             Get Yours!
                                        </a>
                                   </div>
                                   S
                              </div>

                              <div className="home-slide home-slide2 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                                   <Image
                                        className="slide-bg"
                                        style={{ backgroundColor: "#dadada" }}
                                        src={slide2}
                                        width="835"
                                        height="415"
                                        alt="slider image"
                                   />
                                   <div className="banner-layer text-uppercase">
                                        <h4>Over 200 products with discounts</h4>
                                        <h2>Great Deals</h2>
                                        <h5 className="d-inline-block mb-0 align-top mr-4 pr-3">
                                             Starting At
                                             <b>
                                                  $<em>299</em>99
                                             </b>
                                        </h5>

                                        <a href="demo2-shop.html" className="btn btn-dark ls-10">
                                             Get Yours!
                                        </a>
                                   </div>
                              </div>

                              <div
                                   className=" home-slide home-slide3 banner banner-md-vw banner-sm-vw d-flex
                                        align-items-center"
                              >
                                   <Image
                                        className="slide-bg"
                                        src={slide3}
                                        style={{ backgroundColor: "#ccc" }}
                                        width="835"
                                        height="415"
                                        alt="home slider"
                                   />
                                   <div className="banner-layer text-uppercase">
                                        <h4>Up to 70% off</h4>
                                        <h2>New Arrivals</h2>
                                        <h5 className="d-inline-block mb-0 align-top mr-4 pr-3">
                                             Starting At
                                             <b>
                                                  $<em>299</em>99
                                             </b>
                                        </h5>
                                        <a href="demo2-shop.html" className="btn btn-dark">
                                             Get Yours!
                                        </a>
                                   </div>
                              </div>
                         </Slider>
                    </div>
               </div>
          </div>
     );
};
