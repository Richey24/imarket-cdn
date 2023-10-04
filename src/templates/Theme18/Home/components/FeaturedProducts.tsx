import React, { FC, useState } from "react";
import Slider from "react-slick";
import { ProductsProps } from "../types";
import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import { Product } from "./Product";

const FeaturedProducts = ({ products, section }) => {
     const [currentSlide, setCurrentSlide] = useState(0);

     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };

     return (
          <section className="product-slider-section bg-gray">
               <div className="container-fluid">
                    <h2
                         className="subtitle text-center text-uppercase mb-2 "
                         data-animation-name="fadeIn"
                    >
                         {section}
                    </h2>
                    <div
                         className="featured-products  owl-theme show-nav-hover nav-outer nav-image-center mb-3 "
                         data-animation-name="fadeIn"
                    >
                         <Slider {...settings}>
                              {products.map((product, index) => (
                                   <Product key={`featured-product-${index}`} {...product} />
                              ))}
                         </Slider>
                    </div>
                    {/* End .featured-produts */}
                    <div className="row">
                         <div className="col-lg-6">
                              <div
                                   className="banner "
                                   data-animation-name="fadeInLeftShorter"
                                   style={{ backgroundColor: "#fff" }}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo18.bannerImage.banner3}
                                             alt="banner"
                                             width={873}
                                             height={151}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle d-flex align-items-center justify-content-between">
                                        <div className="">
                                             <h4 className="mb-0">Summer Sale</h4>
                                             <h5 className="text-uppercase mb-0">20% off</h5>
                                        </div>
                                        <a href="demo18-shop.html" className="btn btn-dark">
                                             Shop now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-lg-6">
                              <div
                                   className="banner "
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={400}
                                   style={{ backgroundColor: "#111" }}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo18.bannerImage.banner4}
                                             alt="banner"
                                             width={873}
                                             height={151}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle d-flex align-items-center justify-content-between">
                                        <div className="">
                                             <h4 className="text-white mb-0">Flash Sale</h4>
                                             <h5 className="text-uppercase text-white mb-0">
                                                  30% off
                                             </h5>
                                        </div>
                                        <a href="demo18-shop.html" className="btn btn-light">
                                             Shop now
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* End .container-fluid */}
          </section>
     );
};

export default FeaturedProducts;
