import React, { useState } from "react";
import Slider from "react-slick";
import { newArrivalsProducts } from "../data";
export const NewArrival = () => {
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
          <section className="sale-products-section">
               <div className="container">
                    <h2
                         className="section-title heading-border ls-n-10 border-0 text-center text-capitalize appear-animate"
                         data-animation-delay={100}
                         data-animation-name="fadeIn"
                    >
                         New Arrivals
                    </h2>
                    <div
                         className="products-slider custom-products  owl-theme nav-outer show-nav-hover nav-image-center appear-animate"
                         data-animation-delay={200}
                         data-animation-name="fadeInUpShorter"
                    >
                         <Slider {...settings}>
                              {" "}
                              {newArrivalsProducts.map((product) => (
                                    <Product {...product} />
                              ))}
                         </Slider>
                    </div>
               </div>
          </section>
     );
};
