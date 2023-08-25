import React, { useState } from "react";

import { templateImages } from "@/appProvider/templateImages";
import Carousel from "react-bootstrap/Carousel";
import { banners } from "../data";
export const Banner = () => {
     return (
          <section className="intro-section mb-3">
               <div className="home-slider slide-animate  owl-theme">
                    <Carousel>
                         {banners.map((banner) => (
                              <Carousel.Item>
                                   {" "}
                                   <div className="home-slide home-slide-1 banner">
                                        <img
                                             className="slide-bg"
                                             src={banner.bannerImage}
                                             alt="slider image"
                                             width={1200}
                                             height={575}
                                        />
                                      
                                      <div  className={`banner-layer banner-layer-middle ${banner.classname}`}>
                                                  <div className="container-fluid">
                                                       <div
                                                            className="appear-animate"
                                                            data-animation-name="fadeInLeftShorter"
                                                            data-animation-delay={200}
                                                       >
                                                            <h2 className="font-weight-light ls-10 text-primary">
                                                                 {banner.h2}
                                                            </h2>
                                                            <a
                                                                 href="demo23-shop.html"
                                                                 className="btn btn-link"
                                                            >
                                                                 <i>View our Dresses</i>
                                                                 <i className="icon-right-open-big" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                   </div>
                              </Carousel.Item>
                         ))}
                    </Carousel>
               </div>
          </section>
     );
};
