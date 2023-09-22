import React, { useState } from "react";
import { SaleProducts } from "../data";
import Slider from "react-slick";
import { templateImages } from "@/appProvider/templateImages";
import { Product } from "./Product";

export const SaleProduct = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <section className="sale-products-section">
               <div className="container">
                    <h2
                         className="section-title heading-border ls-n-10 border-0 text-center text-capitalize appear-animate"
                         data-animation-delay={100}
                         data-animation-name="fadeIn"
                    >
                         Sale Products
                    </h2>
                    <div
                         className="products-slider custom-products  owl-theme nav-outer show-nav-hover nav-image-center appear-animate"
                         data-animation-delay={200}
                         data-animation-name="fadeInUpShorter"
                    >
                         <Slider {...settings}>
                              {" "}
                              {SaleProducts.map((product) => (
                                   <Product {...product} />
                              ))}
                         </Slider>
                    </div>
                    {/* End .featured-proucts */}
                    <div
                         className="banner banner-big-sale appear-animate"
                         data-animation-delay={100}
                         data-animation-name="fadeIn"
                         style={{
                              background: `#2A95CB center/cover url(${templateImages.demo37.bannerImage.banner2})`,
                         }}
                    >
                         <div className="banner-content row align-items-center mx-0 justify-content-center">
                              <div className="col-xl-9 col-sm-8">
                                   <h2 className="text-white text-uppercase text-center text-sm-left ls-n-20 mb-md-0 px-4">
                                        <b className="d-inline-block mb-1 mb-xl-0">Big Sale</b>
                                        All new fashion brands items up to 70% off
                                        <small className="text-transform-none align-middle ls-n-10">
                                             Online Purchases Only
                                        </small>
                                   </h2>
                              </div>
                              <div className="col-md-3 col-sm-4 text-center text-sm-right">
                                   <a
                                        className="btn btn-light btn-white btn-lg"
                                        href="demo37-shop.html"
                                   >
                                        View Sale
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
