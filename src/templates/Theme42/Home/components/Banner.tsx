import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

export const Banner = ({ slides }) => {
     console.log({ slides });
     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc: slide?.imageUrl,
          title: "Find the Boundaries. Push Through!",
          saleTitle: "Summer Sale",
          discount: "70% Off",
          price: "$199.99",
          link: "demo13-shop.html",
     }));

     return (
          <section className="intro-section  tw-relative tw-h-[70rem]">
               <Carousel>
                    {mappedSlides.map((slide, next) => {
                         return (
                              <Carousel.Item key={slide.title}>
                                   {/* <figure className="tw-h-full tw-w-full"> */}
                                   <Image
                                        src={slide.imageSrc}
                                        alt="slider"
                                        width="880"
                                        height="428"
                                        style={{ height: "70rem", width: "100vw" }}
                                   />
                                   {/* </figure> */}

                                   <div className="banner-layer banner-layer-middle">
                                        <div
                                             data-animation-name="fadeInLeftShorter"
                                             data-animation-delay="300"
                                        >
                                             <h4 className="m-b-2">New Amazing Collection</h4>
                                             <h2 className="font1 font-italic m-b-4">
                                                  Summer Beauty Sale
                                             </h2>
                                             <p className="font2 ls-n-15 m-b-4">
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Praesent ullamcorper quam lacus, et suscipit
                                                  lectus porta efficitur.
                                             </p>
                                             <h5 className="coupon-sale-text float-left ls-n-20 text-uppercase">
                                                  Starting at
                                                  <em>
                                                       $<strong>39</strong>99
                                                  </em>
                                             </h5>
                                             <a
                                                  href="demo34-shop.html"
                                                  className="btn btn-light btn-lg mb-2"
                                             >
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>
                              </Carousel.Item>
                         );
                    })}
               </Carousel>
          </section>
     );
};
