import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel";

const owlCarouselOptions = {
     dots: false,
     margin: 0,
     loop: true,
     items: 1,
     nav: true,
};

export const Banner = () => {
     return (
          <section className="w-full pb-0 mb-0">
               <OwlCarousel className="top-slider" {...owlCarouselOptions}>
                    <div
                         className="home-slide home-slide1"
                         style={{
                              backgroundImage:
                                   "url('https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80')",
                              backgroundPosition: "60%",
                         }}
                    >
                         <div className="slide-content content-left">
                              <div className="divide-txt mb-0 ">
                                   <span className="font2">New Brown Collection</span>
                              </div>
                              <h2 className="">Summer Sale</h2>
                              <h3 className=" ">30% OFF</h3>
                              <div className="image-info-group ">
                                   <h5>
                                        STARTING AT{" "}
                                        <span>
                                             <sup>$</sup>39<sup>99</sup>
                                        </span>
                                   </h5>
                                   <a href="demo32-shop.html" className="btn">
                                        GET YOURS!
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div
                         className="home-slide home-slide2"
                         style={{
                              backgroundImage:
                                   "background-image: url('https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1152&q=80')",
                         }}
                    >
                         <div className="slide-content content-right">
                              <div className="divide-txt no-txt ">
                                   <div className="divide-line"></div>
                              </div>
                              <h2 className="">Must Have</h2>
                              <h3 className="">SANDALS</h3>
                              <div className="image-info-group ">
                                   <h5>
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
               </OwlCarousel>
          </section>
     );
};
