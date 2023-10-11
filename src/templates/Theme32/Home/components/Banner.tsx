import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import OwlCarousel from "react-owl-carousel";

const owlCarouselOptions = {
     dots: false,
     margin: 0,
     loop: true,
     items: 1,
     nav: true,
};

export const Banner = ({ slides }) => {
     return (
          <section className="w-full pb-0 mb-0">
               {/* <OwlCarousel className="top-slider" {...owlCarouselOptions}>
                    <div
                         className="home-slide home-slide1"
                         style={{
                              backgroundImage: `url(${slides[0]?.imageUrl})`,
                              backgroundPosition: "60%",
                         }}
                    >
                         <div className="slide-content content-left">
                              <div className="divide-txt mb-0 ">
                                   <span className="font2">{slides[0]?.text}</span>
                              </div>
                              {/* <h2 className="">Summer Sale</h2> *
                              <h3 className=" ">{slides[0]?.title}</h3>
                              <div className="image-info-group ">
                                   {/* <h5>
                                        STARTING AT{" "}
                                        <span>
                                             <sup>$</sup>39<sup>99</sup>
                                        </span>
                                   </h5> *
                                   <a href="demo32-shop.html" className="btn">
                                        GET YOURS!
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div
                         className="home-slide home-slide2"
                         style={{
                              backgroundImage: `url(${slides[1]?.imageUrl})`,
                         }}
                    >
                         <div className="slide-content content-right">
                              <div className="divide-txt no-txt ">
                                   <div className="divide-line"></div>
                              </div>
                              <h2 className="">{slides[1]?.text}</h2>
                              <h3 className="">{slides[1]?.title}</h3>
                              <div className="image-info-group ">
                                   {/* <h5>
                                        STARTING AT{" "}
                                        <span>
                                             <sup>$</sup>19<sup>99</sup>
                                        </span>
                                   </h5> 
                                   <a href="demo32-shop.html" className="btn">
                                        GET YOURS!
                                   </a>
                              </div>
                         </div>
                    </div>
               </OwlCarousel> */}
          </section>
     );
};
