import React, { useState } from "react";
import Slider from "react-slick";
import { cardData } from "../data";
export const Info = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <section className="cat-section bg-gray">
               <div className="container">
                    <div className="row categories-slider owl-carousel owl-theme owl-loaded owl-drag animated fadeIn appear-animation-visible">
                         <Slider {...settings}>
                              {" "}
                              {cardData.map((data, idx) => (
                                   <div key={idx} className="product-category mb-2">
                                        <a href="demo21-shop.html">
                                             <div className="category-content">
                                                  <i className={data.icon} />
                                                  <h3>{data.h3}</h3>
                                             </div>
                                        </a>
                                   </div>
                              ))}
                         </Slider>
                    </div>
               </div>
          </section>
     );
};
