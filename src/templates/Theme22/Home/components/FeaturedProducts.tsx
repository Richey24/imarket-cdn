import React, { useState } from "react";
import Slider from "react-slick";
import { Product } from "./Product";

export const FeaturedProducts = ({ products }) => {
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
          <section
               className="most-viewed-products appear-animate"
               data-animation-name="fadeInUpShorter"
               data-animation-delay={200}
          >
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Featured Products</h2>

                    <Slider {...settings}>
                         {products.map((product) => (
                              <Product {...product} />
                         ))}
                    </Slider>
               </div>
          </section>
     );
};
