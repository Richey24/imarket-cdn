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
                         {infoData.map((data) => (
                              <div className="info-box info-box-icon-left">
                                   <i className={data.icon} />
                                   <div className="info-box-content">
                                        <h4 className="line-height-1">{data.h4}</h4>
                                        <p className="font2 line-height-1 text-body ">{data.p}</p>
                                   </div>
                              </div>
                         ))}
                    </Slider>
               </div>
          </section>
     );
};
