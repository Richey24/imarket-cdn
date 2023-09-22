import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { slidersData } from "../data";

export const Banner = () => {
     return (
          <div className="home-slider slide-animate  owl-theme show-nav-hover nav-big mb-2 text-uppercase">
               <Carousel>
                    {slidersData.map((data) => (
                         <Carousel.Item>
                              {" "}
                              <div className="home-slide home-slide1 banner">
                                   <img
                                        className="slide-bg"
                                        src={data.slideImage}
                                        width={1920}
                                        height={580}
                                        alt="slider image"
                                        style={{ backgroundColor: "#eee" }}
                                   />
                                   <div className="container d-flex align-items-center">
                                        <div
                                             className="banner-layer"
                                             style={{ left: `${data.left}` }}
                                        >
                                             <h4
                                                  className="text-transform-none appear-animate"
                                                  data-animation-name="fadeInLeftShorter"
                                                  data-animation-delay={200}
                                             >
                                                  {data.title}
                                             </h4>
                                             <h2
                                                  className="text-transform-none mb-0 appear-animate"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={200}
                                             >
                                                  {data.subTitle}
                                             </h2>
                                             <img
                                                  src={data.sliderImage2}
                                                  className="appear-animate"
                                                  data-animation-name="fadeInLeftShorter"
                                                  data-animation-delay={400}
                                                  width={255}
                                                  height={25}
                                                  alt="Image"
                                             />
                                             <div className="d-flex">
                                                  <a
                                                       href={data.link}
                                                       className="btn btn-dark btn-lg appear-animate"
                                                       data-animation-name="fadeInLeftShorter"
                                                       data-animation-delay={600}
                                                  >
                                                       Shop Now!
                                                  </a>
                                                  <h5 className="d-inline-block mb-0">
                                                       <span
                                                            className="d-inline-block appear-animate"
                                                            data-animation-name="fadeInLeftShorter"
                                                            data-animation-delay={900}
                                                       >
                                                            Starting At
                                                       </span>
                                                       <b
                                                            className="coupon-sale-text text-white bg-secondary align-middle appear-animate"
                                                            data-animation-name="fadeIn"
                                                            data-animation-delay={1400}
                                                       >
                                                            <sup>$</sup>
                                                            <em className="align-text-top">99</em>
                                                            <sup>99</sup>
                                                       </b>
                                                  </h5>
                                             </div>
                                        </div>
                                        {/* End .banner-layer */}
                                   </div>
                              </div>
                         </Carousel.Item>
                    ))}
               </Carousel>
          </div>
     );
};
