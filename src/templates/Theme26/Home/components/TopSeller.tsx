import React, { useState } from "react";
import Slider from "react-slick";
import { topsellerproducts } from "../data";
import { Product } from "./Product";

export const TopSeller = ({ section, products }) => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <section
               className="top-sellers-section appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={200}
          >
               <div className="container">
                    <div
                         className="banner banner3 d-flex flex-wrap align-items-center"
                         style={{
                              background: `#dc7a1f no-repeat center/cover url(assets/images/demoes/demo26/banners/banner-3.jpg)`,
                         }}
                    >
                         <div className="col-lg-9 mb-2 mb-lg-0">
                              <h2 className="d-inline-block ls-n-20 text-white text-uppercase mb-0">
                                   <span className="sale-off">Big sale</span> ALL HIGH PERFORMANCE
                                   ITEMS UP TO 70% OFF
                              </h2>
                              <h6 className="d-inline-block mb-0">Online Purchases Only</h6>
                         </div>
                         <div className="col-lg-3 text-lg-right">
                              <a href="demo26-shop.html" className="btn btn-light btn-lg">
                                   View Sale
                              </a>
                         </div>
                    </div>
                    <h2 className="section-title pb-3 m-b-4">{section} </h2>

                    <Slider {...settings}>
                         {products.map((product) => (
                              <Product {...product} />
                         ))}
                    </Slider>
               </div>
          </section>
     );
};
