import React, { useState } from "react";

import Slider from "react-slick";
import { miniBanners } from "../data";
import Image from "next/image";
export const TopCategories = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 7,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <section className="top-categories" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
               <div className="container">
                    <div className="row m-b-3">
                         {miniBanners.map((banner) => (
                              <div className="col-lg-6">
                                   <div
                                        className="banner banner1 mb-2 appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={200}
                                        style={{ backgroundColor: "#f4f4f4" }}
                                   >
                                        <figure>
                                             <Image
                                                  src={banner.bannerImg}
                                                  alt="banner"
                                                  width={700}
                                                  height={236}
                                             />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle banner-layer-left">
                                             <h3 className="font1 ls-10 text-uppercase mb-0 w-50 d-flex align-items-start justify-content-start flex-wrap">
                                                   {banner.title}
                                             </h3>
                                        </div>
                                        <div className="banner-layer banner-layer-middle banner-layer-right">
                                             <div className="coupon-sale-text">
                                                  <h4
                                                       className="font1 line-height-1 ls-10 text-white   skew-box m-b-2"
                                                       style={{ background: "#01abec" }}
                                                  >
                                                       Starting from
                                                  </h4>
                                                  <h5
                                                       className="d-inline-block font1 text-white   skew-box mb-0"
                                                       style={{ background: "#01abec" }}
                                                  >
                                                       ${banner.productPrice}
                                                       <sub className="text-dark">
                                                            ${banner.oldPrice}
                                                       </sub>
                                                  </h5>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
                    <h2 className="section-title line-height-1 ls-10 pb-4 mb-4">Top Categories</h2>
                    <div
                         className="mb-2 appear-animate"
                         data-animation-name="fadeIn"
                         data-animation-delay={200}
                    >
                         <div
                              className="categories-slider owl-theme"
                              style={{ marginTop: "100px" }}
                         >
                              <Slider {...settings}>
                                   {" "}
                                   <div className="owl-item active">
                                        {" "}
                                        <a href="demo22-shop.html">
                                             <i className="icon-category-fashion" />
                                             <span>Fashion</span>
                                        </a>
                                   </div>
                                   <div className="owl-item active">
                                        {" "}
                                        <a href="demo22-shop.html">
                                             <i className="icon-category-electronics" />
                                             <span>Electronics</span>
                                        </a>
                                   </div>
                                   <div className="owl-item active">
                                        {" "}
                                        <a href="demo22-shop.html">
                                             <i className="icon-category-gifts" />
                                             <span>Gifts</span>
                                        </a>
                                   </div>
                                   <div className="owl-item active">
                                        {" "}
                                        <a href="demo22-shop.html">
                                             <i className="icon-category-garden" />
                                             <span>Garden</span>
                                        </a>
                                   </div>
                                   <div className="owl-item active">
                                        {" "}
                                        <a href="demo22-shop.html">
                                             <i className="icon-category-music" />
                                             <span>Music</span>
                                        </a>
                                   </div>
                                   <div className="owl-item active">
                                        {" "}
                                        <a href="demo22-shop.html">
                                             <i className="icon-category-motors" />
                                             <span>Motors</span>
                                        </a>
                                   </div>
                                   <div className="owl-item active">
                                        {" "}
                                        <a href="demo22-shop.html">
                                             <i className="icon-category-furniture" />
                                             <span>Furniture</span>
                                        </a>
                                   </div>
                              </Slider>
                         </div>
                    </div>
               </div>
          </section>
     );
};
