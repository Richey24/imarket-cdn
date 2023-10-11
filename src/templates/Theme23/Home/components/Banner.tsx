import React, { useState } from "react";

import { templateImages } from "@/appProvider/templateImages";
import Carousel from "react-bootstrap/Carousel";

export const Banner = ({ banners }) => {
     return (
          <section className="intro-section mb-3">
               <div className="home-slider slide-animate  owl-theme">
                    <Carousel>
                         {banners.map((banner, index) => (
                              <Carousel.Item key={index}>
                                   {" "}
                                   <div className="home-slide home-slide-1 banner">
                                        <img
                                             className="slide-bg"
                                             src={banner.imageUrl}
                                             alt="slider image"
                                             width={1200}
                                             height={575}
                                        />

                                        <div
                                             className={`banner-layer banner-layer-middle ${
                                                  index === 0
                                                       ? "banner-layer-left"
                                                       : "banner-layer-right"
                                             }`}
                                        >
                                             <div className="container-fluid">
                                                  <div
                                                       className="appear-animate"
                                                       data-animation-name="fadeInLeftShorter"
                                                       data-animation-delay={200}
                                                  >
                                                       <h2 className="font-weight-light ls-10 text-primary">
                                                            {banner.title}
                                                       </h2>
                                                       <a
                                                            href="demo23-shop.html"
                                                            className="btn btn-link"
                                                       >
                                                            <i>{banner.text}</i>
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
