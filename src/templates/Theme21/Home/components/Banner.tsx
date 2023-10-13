import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { banners } from "../data";
import { templateImages } from "@/appProvider/templateImages";

export const Banner = ({ slides }) => {
     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc:
               slide?.imageUrl !== "" ? slide?.imageUrl : templateImages.demo21.sliderImage.slide1,
          title: "best price of the year",
          saleTitle: "top accessories",
          discount: "50% off",
          price: 133.99,
          link: "demo13-shop.html",
     }));
     return (
          <section className="intro-section">
               <Carousel>
                    {mappedSlides.map((slide, index) => (
                         <Carousel.Item key={index}>
                              <div
                                   className="home-slide banner test"
                                   style={{
                                        background: `url(${slide.imageSrc})`,
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
                                                  {slide.title}
                                             </h2>
                                             <h1
                                                  className="font1 font-weight-bold text-uppercase"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={500}
                                             >
                                                  {slide.saleTitle}
                                             </h1>
                                             <h2
                                                  className="font1 font-weight-normal text-uppercase mb-3"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={800}
                                             >
                                                  from
                                                  <strong> ${slide.price}</strong>
                                             </h2>
                                             <a
                                                  className="btn btn-dark btn-buy"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={1100}
                                                  href={slide.atag}
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
