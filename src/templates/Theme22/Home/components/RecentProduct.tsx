import React, { useState } from "react";
import Slider from "react-slick";
import { recentProducts } from "../data";
import { Product } from "./Product";

export const RecentProduct = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <section className="recent-products">
               <div className="container">
                    <div
                         className="appear-animate"
                         data-animation-name="fadeIn"
                         data-animation-delay={200}
                    >
                         <h2 className="section-title ls-n-10 pb-3 m-b-4">Recent Products</h2>

                         <Slider {...settings}>
                              {recentProducts.map((product) => (
                                   <Product {...product} />
                              ))}
                         </Slider>
                    </div>
                    <div
                         className="banner banner3 bg-dark appear-animate"
                         data-animation-name="fadeIn"
                         data-animation-delay={200}
                    >
                         <div className="row m-0 no-gutters align-items-center">
                              <div className="col-md-6 col-lg-3 align-self-baseline">
                                   <figure>
                                        <img
                                             src="assets/images/demoes/demo22/banners/banner-3.jpg"
                                             alt="image"
                                             width={380}
                                             height={136}
                                        />
                                   </figure>
                              </div>
                              <div className="col-md-6 col-lg-4 py-4 py-lg-5">
                                   <div className="px-5 px-md-0">
                                        <h3 className="font1 text-uppercase m-b-2">
                                             Check new arrivals
                                        </h3>
                                        <h2 className="font1 ls-10 text-uppercase text-white mb-0">
                                             Explore Smartphones
                                        </h2>
                                   </div>
                              </div>
                              <div className="col-md-6 col-lg-3 py-4 py-lg-5 d-flex justify-content-md-center">
                                   <div className="px-5 px-md-0">
                                        <div className="coupon-sale-text d-flex flex-column align-items-start">
                                             <h4 className="m-b-2 font1 d-block text-dark bg-white skew-box">
                                                  Exclusive COUPON
                                             </h4>
                                             <h5 className="mb-0 font1 d-inline-block bg-primary skew-box">
                                                  <i className="text-white ls-0">UP TO</i>
                                                  <b className="text-white">$200</b>
                                                  <sub className="text-white">OFF</sub>
                                             </h5>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md-6 col-lg-2 py-4 py-lg-5">
                                   <div className="px-5 px-md-0">
                                        <a
                                             href="demo22-shop.html"
                                             className="btn btn-dark font1 ls-10"
                                        >
                                             View All Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
