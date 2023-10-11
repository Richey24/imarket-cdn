import React, { useState } from "react";
import Slider from "react-slick";
import { infoData } from "../data";
export const Info = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <section
               className="info-boxes-container appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={200}
          >
               <div className="container">
                    <Slider {...settings}>
                         {" "}
                         {infoData.map((data, idx) => (
                              <div className="info-box info-box-icon-left" key={idx}>
                                   <i className={data.icon} />
                                   <div className="info-box-content">
                                        <h4>{data.h4}</h4>
                                        <p className="text-body">{data.p}</p>
                                   </div>
                              </div>
                         ))}
                    </Slider>
               </div>
          </section>
     );
};
