import React, { useState } from "react";
import Slider from "react-slick";
import { infoData } from "../data";
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
          <div
               className="info-boxes-container appear-animate"
               data-animation-name="fadeInUpShorter"
               data-animation-delay={200}
          >
               <div className="row m-0">
                    {infoData.map((data, idx) => (
                         <div key={idx} className="info-box info-box-icon-left col-md-4">
                              <i className={data.icon} />
                              <div className="info-box-content">
                                   <h4 className="ls-n-25">{data.h4}</h4>
                                   <p className="font2 font-weight-light">{data.p}</p>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};
