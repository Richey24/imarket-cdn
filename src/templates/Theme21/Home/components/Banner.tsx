import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { banners } from "../data";

export const Banner = () => {
     return (
          <section className="intro-section">
               <Carousel>
                    {banners.map((data) => (
                         <Carousel.Item>
                              <div
                                   className="home-slide banner test"
                                   style={{
                                        background: `url(${data.bannerImg})`,
                                   }}
                              >
                                   <div
                                        className="banner-layer banner-layer-middle"
                                        style={{ paddingLeft: "80px" }}
                                   >
                                        <div className="container banner-content">
                                             <h2
                                                  className="font1 font-weight-normal text-uppercase mb-0"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={200}
                                             >
                                                  {data.bannerTitle}
                                             </h2>
                                             <h1
                                                  className="font1 font-weight-bold text-uppercase"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={500}
                                             >
                                                  {data.bannerSubTitle}
                                             </h1>
                                             <h2
                                                  className="font1 font-weight-normal text-uppercase mb-3"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={800}
                                             >
                                                  from
                                                  <strong>${data.price}</strong>
                                             </h2>
                                             <a
                                                  className="btn btn-dark btn-buy"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={1100}
                                                  href={data.atag}
                                             >
                                                  BUY NOW
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .home-slide-content */}
                              </div>
                         </Carousel.Item>
                    ))}
               </Carousel>
          </section>
     );
};
