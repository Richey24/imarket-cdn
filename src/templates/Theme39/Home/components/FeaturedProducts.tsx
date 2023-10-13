import React, { useState } from "react";
import Slider from "react-slick";
import { featuredproducts } from "../data";
import { Product } from "./Product";
export const FeaturedProducts = () => {
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
          <section
               className="featured-products-container mb-2 appear-animate"
               data-animation-name="fadeInUpShorter"
               data-animation-delay={200}
          >
               <div className="container">
                    <div className="heading">
                         <h2 className="text-uppercase">Featured Wines</h2>
                    </div>
                    <div className="products-slider custom-products   owl-theme nav-outer show-nav-hover nav-image-center appear-animate">
                         <Slider {...settings}>
                              {featuredproducts.map((product, idx) => (
                                   <Product key={idx} {...product} />
                              ))}
                         </Slider>
                    </div>
                    {/* End .featured-proucts */}
               </div>
          </section>
     );
};
