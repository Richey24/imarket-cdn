import React, { useState } from "react";
import { productScrolls } from "../data";
import Slider from "react-slick";
import { Product } from "./Product";

export const TopProduct = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          margin: 20,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <section
               className="products-scroll-section appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={100}
          >
               <div className="container">
                    <h2 className="section-title heading-border ls-n-10 border-0 text-center text-capitalize">
                         Top 10 Products
                    </h2>

                    <Slider {...settings}>
                         {productScrolls.map((product) => (
                              <Product {...product} />
                         ))}
                    </Slider>
               </div>
          </section>
     );
};
