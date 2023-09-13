import React, { useState } from "react";
import Slider from "react-slick";
import { products } from "../data";
import { Product } from "./Product";

export const PopularProducts = () => {
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
               className="popular-products-section appear-animate"
               data-animation-name="fadeInUpShorter"
          >
               <div className="container">
                    <div className="heading">
                         <h2 className="text-uppercase">Popular Wines</h2>
                    </div>
                    <div className="products-slider custom-products   owl-theme nav-outer show-nav-hover nav-image-center">
                         <Slider {...settings}>
                              {products.map((product) => (
                                 <Product {...product} />
                              ))}
                         </Slider>
                    </div>
               </div>
          </section>
     );
};
