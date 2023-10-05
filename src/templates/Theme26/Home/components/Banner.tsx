import React, { useState } from "react";
import { bannersdata } from "../data";
import { templateImages } from "@/appProvider/templateImages";
import Carousel from "react-bootstrap/Carousel";

export const Banner = ({ slides }) => {
     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc:
               slide?.imageUrl !== "" ? slide?.imageUrl : templateImages.demo21.sliderImage.slide1,
          title: "Car shock absorbers",
          saleTitle: "Start Shopping Right Now",
          discount: "* Get Plus Discount Buying Package",
          price: 99,
          oldPrice: 59,
          link: "demo26-shop.html",
     }));
     return (
          <section className="intro-section">
               <div className="container">
                    <div className="row">
                         <>
                              <div className="col-md-8 mb-2">
                                   <Carousel>
                                        {mappedSlides.map((slide, index) => (
                                             <Carousel.Item>
                                                  <div
                                                       className="banner banner1 d-flex flex-wrap align-items-center bg-gray no-gutters"
                                                       style={{
                                                            backgroundImage: `url('${slide.imageSrc}')`,
                                                            backgroundColor: "#d85c50",
                                                       }}
                                                  >
                                                       <div
                                                            className="col-md-5 appear-animate"
                                                            data-animation-name="fadeInRightShorter"
                                                            data-animation-delay={200}
                                                       >
                                                            {/* <div className="brand m-b-2">
                                                                 <img
                                                                      src={slide.imageSrc}
                                                                      alt="brand"
                                                                      width={230}
                                                                      height={26}
                                                                 />
                                                            </div> */}
                                                            <h3 className="ls-n-20 text-body text-uppercase m-b-2">
                                                                 {slide.title}
                                                            </h3>
                                                            <h2 className="ls-n-20 text-uppercase m-b-4">
                                                                 Starting
                                                                 <br />
                                                                 at
                                                                 <small>$</small>99<small>99</small>
                                                            </h2>
                                                            <h4 className="font-weight-normal ls-n-20 m-b-3">
                                                                 {slide.saleTitle}
                                                            </h4>
                                                            <p className="font2 text-body m-b-3">
                                                                 {slide.discount}
                                                            </p>
                                                            <a
                                                                 href={slide.link}
                                                                 className="btn btn-dark btn-lg m-b-5"
                                                            >
                                                                 View Sale
                                                            </a>
                                                       </div>
                                                       <div className="col-md-7">
                                                            <figure>
                                                                 <img
                                                                      src={slide.imageSrc}
                                                                      alt="banner"
                                                                      width={700}
                                                                      height={576}
                                                                 />
                                                            </figure>
                                                       </div>
                                                  </div>
                                             </Carousel.Item>
                                        ))}
                                   </Carousel>
                              </div>

                              <div className="col-md-4 mb-2">
                                   <div
                                        className="banner banner2 h-100"
                                        style={{
                                             backgroundImage: `url('${templateImages.demo26.bannerImage.banner3}')`,
                                        }}
                                   >
                                        <div className="banner-layer d-flex flex-column justify-content-center align-items-end text-right">
                                             <h3
                                                  className="font-weight-bold ls-n-20 text-primary text-uppercase m-b-2 appear-animate"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={100}
                                             >
                                                  Flash Sale
                                             </h3>
                                             <h3
                                                  className="ls-n-20 m-b-2 appear-animate"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={250}
                                             >
                                                  ALL HIGH PERFORMANCE
                                                  <br />
                                                  WHEELS AND TIRES
                                             </h3>
                                             <h2
                                                  className="ls-n-20 text-white text-uppercase m-b-3 appear-animate"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={400}
                                             >
                                                  Starting
                                                  <br />
                                                  at
                                                  <small>$</small>199<small>99</small>
                                             </h2>
                                             <a
                                                  href="demo26-shop.html"
                                                  className="btn btn-light btn-lg appear-animate"
                                                  data-animation-name="fadeInUpShorter"
                                                  data-animation-delay={600}
                                             >
                                                  View Sale
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </>
                    </div>
               </div>
          </section>
     );
};
