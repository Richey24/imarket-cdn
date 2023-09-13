import React, { useState } from "react";
import Slider from "react-slick";
import { popularproducts } from "../data";
import { Product } from "./Product";
export const PopularProducts = () => {
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
                         <h2 className="section-title pb-3 m-b-4">Popular Items</h2>

                         <Slider {...settings}>
                              {popularproducts.map((product) => (
                                   <Product {...product} />
                              ))}
                         </Slider>
                    </div>
                    <div
                         className="tagcloud d-flex flex-wrap justify-content-between bg-gray mb-4 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={600}
                    >
                         <a href="demo26-shop.html">Cadillac</a>
                         <a href="demo26-shop.html">Chevy</a>
                         <a href="demo26-shop.html">Dodge</a>
                         <a href="demo26-shop.html">Ford</a>
                         <a href="demo26-shop.html">Honda</a>
                         <a href="demo26-shop.html">Hyundai</a>
                         <a href="demo26-shop.html">Jeep</a>
                         <a href="demo26-shop.html">Nissan</a>
                         <a href="demo26-shop.html">Toyota</a>
                    </div>
               </div>
          </section>
     );
};
