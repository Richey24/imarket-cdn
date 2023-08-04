import React, { useState } from "react";
import Slider from "react-slick";
import { brandsImage } from "../data";
export const Brands = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <section className="brands-section">
               <div className="container">
                    <h2
                         className="section-title ls-n-10 pb-3 mb-5 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                         data-animation-duration={400}
                    >
                         Top Brands
                    </h2>

                    <Slider {...settings}>
                         {brandsImage.map((brand, index) => (
                              <img
                                   key={index}
                                   src={brand.image.src}
                                   width={200}
                                   height={50}
                                   alt="brand"
                              />
                         ))}
                    </Slider>

                    {/* End .brands-slider */}
               </div>
          </section>
     );
};
