import React, { useState } from "react";
 
import Slider from "react-slick";
import { templateImages } from "@/appProvider/templateImages";
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
          <section className="top-categories" style={{paddingLeft:'80px', paddingRight:'80px'}}>
               <div className="container">
                    <div className="row m-b-3">
                         <div className="col-lg-6">
                              <div
                                   className="banner banner1 mb-2 appear-animate"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={200}
                                   style={{ backgroundColor: "#f4f4f4" }}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo22.bannerImage.banner2}
                                             alt="banner"
                                             width={700}
                                             height={236}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle banner-layer-left">
                                        <h3 className="font1 ls-10 text-uppercase mb-0">
                                             Action
                                             <br />
                                             Cameras
                                        </h3>
                                   </div>
                                   <div className="banner-layer banner-layer-middle banner-layer-right">
                                        <div className="coupon-sale-text">
                                             <h4 className="font1 line-height-1 ls-10 text-white   skew-box m-b-2" style={{background:'#01abec'}}>
                                                  Starting from
                                             </h4>
                                             <h5 className="d-inline-block font1 text-white   skew-box mb-0" style={{background:'#01abec'}}>
                                                  $399<sub className="text-dark">$499</sub>
                                             </h5>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="col-lg-6">
                              <div
                                   className="banner banner2 mb-2 appear-animate"
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={200}
                                   style={{ backgroundColor: "#f4f4f4" }}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo22.bannerImage.banner3}
                                             alt="banner"
                                             width={700}
                                             height={236}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle banner-layer-left">
                                        <h3 className="font1 text-uppercase ls-10 mb-0">
                                             For all
                                             <br />
                                             styles
                                        </h3>
                                   </div>
                                   <div className="banner-layer banner-layer-middle banner-layer-right">
                                        <div className="coupon-sale-text">
                                             <h4 className="font1 line-height-1 ls-10 text-white   skew-box m-b-2" style={{background:'#188268'}}>
                                                  Starting from
                                             </h4>
                                             <h5 className="d-inline-block font1 text-white  skew-box mb-0" style={{background:'#188268'}}>
                                                  $199<sub className="text-dark">$299</sub>
                                             </h5>
                                        </div>
                                   </div>
                              </div>
                         </div>
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
