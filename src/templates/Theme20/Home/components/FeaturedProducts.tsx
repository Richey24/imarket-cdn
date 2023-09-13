import React, { useState } from "react";
import { featuredProducts } from "../data";

import Slider from "react-slick";
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
          <section className="featured-products-section"  >
               <div className="container">
                    <h2
                         className="section-title ls-n-10 text-center text-uppercase m-b-3"
                         style={{ fontWeight: "bold" }}
                    >
                         Featured Products
                    </h2>
                    <Slider {...settings}>
                         {featuredProducts.map((product, index) => (
                              
                        <Product key={index} {...product} />
                         ))}
                    </Slider>
               </div>
          </section>
     );
};
