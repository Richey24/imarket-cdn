import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { sliders } from "../data";

export const Banner = () => {
     return (
          <div className="home-slider slide-animate   owl-theme dot-inside show-nav-hover custom-nav-1 mb-4 text-uppercase">
               <Carousel>
                    {sliders.map((data, idx) => (
                         <Carousel.Item key={idx}>
                              <div className={`home-slide home-slide${data.size} banner`}>
                                   <img
                                        className="slide-bg"
                                        src={data.sliderImage}
                                        width={1903}
                                        height={503}
                                        alt="slider image"
                                        style={{ backgroundColor: "#f4f4f4" }}
                                   />
                                   <div className="container d-flex align-items-center">
                                        <div className="banner-layer">
                                             <h2 className="text-transform-none">{data.title}</h2>
                                             <h3
                                                  className="text-capitalize ml-2 appear-animate"
                                                  data-animation-name="fadeInRightShorter"
                                                  data-animation-delay={200}
                                             >
                                                  {data.subTitle}
                                             </h3>
                                             <h4 className="text-transform-none ml-2">
                                                  {data.desc}
                                             </h4>
                                             {data.h5 ? (
                                                  <h5 className="d-flex ml-3">
                                                       <span className="text-transform-none">
                                                            only
                                                       </span>
                                                       <b className="coupon-sale-text text-white align-middle text-primary font2">
                                                            <sup>$</sup>
                                                            <em>39</em>
                                                            <sup>99</sup>
                                                       </b>
                                                  </h5>
                                             ) : null}
                                             <a href="demo39-shop.html" className="btn btn-lg ml-3">
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </Carousel.Item>
                    ))}
               </Carousel>
          </div>
     );
};
