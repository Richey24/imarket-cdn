import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel";

import Slider from "react-slick";

const settings = {
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
};

export const Banner = () => {
     return (
          <div style={{ height: "500px", overflow: "hidden" }}>
               <div
                    style={{
                         display: "flex",
                         justifyContent: "space-between",
                         paddingLeft: "80px",
                         paddingRight: "50px",
                    }}
                    className="info-boxes-slider"
               >
                    <div className="info-box info-box-icon-left">
                         <i className="icon-shipping font-35 pt-1"></i>

                         <div className="info-box-content pt-1">
                              <h4>FREE SHIPPING &amp; RETURN</h4>
                              <p className="text-body">Free shipping on all orders over $99</p>
                         </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                         <i className="icon-money pt-1"></i>

                         <div className="info-box-content">
                              <h4>MONEY BACK GUARANTEE</h4>
                              <p className="text-body">100% money back guarantee</p>
                         </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                         <i className="icon-support pt-1"></i>

                         <div className="info-box-content">
                              <h4>ONLINE SUPPORT 24/7</h4>
                              <p className="text-body">Lorem ipsum dolor sit amet.</p>
                         </div>
                    </div>
               </div>

               <Slider {...settings}>
                    <div className="home-slide banner banner-md-vw">
                         <Image
                              width={200}
                              height={200}
                              className="slide-bg"
                              src={
                                   "https://absa7kzimnaf.blob.core.windows.net/templates-images/demo5-slide1.jpg"
                              }
                              style={{ width: "85%", margin: "0 auto" }}
                              alt="slider image"
                         />
                         <div
                              style={{ marginLeft: "100px" }}
                              className="banner-layer banner-layer-middle"
                         >
                              <h4
                                   style={{
                                        color: "#838588",
                                        fontWeight: "400",
                                        fontSize: "23px",
                                   }}
                                   className="m-b-3"
                              >
                                   Find the Boundaries. Push Through!
                              </h4>
                              <h2 style={{ fontSize: "70px" }} className="font-script mb-0">
                                   Jeans Sale
                              </h2>
                              <h3
                                   style={{
                                        fontSize: "80px",
                                        display: "flex",
                                        columnGap: "10px",
                                   }}
                                   className="upto-text"
                              >
                                   <em
                                        style={{
                                             fontSize: "40px",
                                             display: "flex",
                                             flexDirection: "column",
                                        }}
                                   >
                                        up <span>to</span>
                                   </em>
                                   80% OFF
                              </h3>
                              <h5 className="d-inline-block mb-0 text-uppercase ls-n-20">
                                   Starting At
                                   <b
                                        style={{
                                             backgroundColor: "#FF7272",
                                             marginLeft: "15px",
                                             marginRight: "15px",
                                        }}
                                        className="coupon-sale-text text-white"
                                   >
                                        $<em>199</em>99
                                   </b>
                              </h5>
                              <a href="demo5-shop.html" className="btn btn-dark btn-lg ls-10">
                                   Shop Now!
                              </a>
                         </div>
                    </div>

                    <div className="home-slide banner banner-md-vw">
                         <Image
                              width={200}
                              height={200}
                              className="slide-bg"
                              src={
                                   "https://absa7kzimnaf.blob.core.windows.net/templates-images/demo5-slide2.jpg"
                              }
                              style={{ width: "85%", margin: "0 auto" }}
                              alt="slider image"
                         />
                         <div
                              style={{ marginLeft: "100px" }}
                              className="banner-layer banner-layer-middle"
                         >
                              <h2 style={{ fontSize: "40px" }} className="ls-n-25 mb-0">
                                   {"Women's"} Business Fashion
                              </h2>
                              <h3
                                   style={{
                                        fontSize: "100px",
                                        marginTop: "10px",
                                        display: "flex",
                                        columnGap: "10px",
                                   }}
                                   className="upto-text"
                              >
                                   <em
                                        style={{
                                             fontSize: "50px",
                                             fontStyle: "normal",
                                             display: "flex",
                                             flexDirection: "column",
                                        }}
                                   >
                                        up <span>to</span>
                                   </em>
                                   60% OFF
                              </h3>
                              <h5 className="text-uppercase d-inline-block mb-0 align-top ls-n-20">
                                   Starting at
                                   <b
                                        style={{
                                             color: "#FF7272",
                                             marginLeft: "5px",
                                             marginRight: "25px",
                                             fontSize: "21px",
                                        }}
                                        className="coupon-sale-text "
                                   >
                                        $<em>29</em>99
                                   </b>
                              </h5>
                              <a
                                   href="demo5-shop.html"
                                   className="btn btn-dark btn-outline ls-10 btn-xl mt-0"
                              >
                                   Shop Now!
                              </a>
                         </div>
                    </div>
               </Slider>
          </div>
     );
};
