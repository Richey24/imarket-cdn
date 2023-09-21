import React, { useState } from "react";
import Slider from "react-slick";
import { topRatedProducts } from "../data";
import { Product } from "./Product";

export const TopRatedProducts = () => {
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
               className="top-rated-products appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={200}
          >
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Top Rated Products</h2>
                    <Slider {...settings}>
                         {topRatedProducts.map((product) => (
                              <Product {...product} />
                         ))}
                    </Slider>
               </div>
          </section>
     );
};
