import React, { useState } from "react";
import Slider from "react-slick";
import { popularproducts } from "../data";
import { Product } from "./Product";
export const PopularProducts = ({ section, products}) => {
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
          <section className="popular-section">
               <div className="container">
                    <div
                         className="appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={400}
                    >
                         <h2 className="section-title pb-3 m-b-4">{section}</h2>

                         <Slider {...settings}>
                              {products.map((product, idx) => (
                                   <Product key={idx} {...product} />
                              ))}
                         </Slider>
                    </div>
               </div>
          </section>
     );
};
