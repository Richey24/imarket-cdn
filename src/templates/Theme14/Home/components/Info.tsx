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
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <div
               className="info-boxes-container bg-gray"
               style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
               <div className="container py-3">
                    <div className="info-boxes-slider owl-theme py-3">
                         <div className="owl-stage-outer">
                              <div className="owl-stage" style={{ width: "1200px" }}>
                                   <Slider {...settings}>
                                        {infoData.map((data, idx) => (
                                             <div key={idx} className="info-box info-box-icon-left">
                                                  <i className={data.icon} />
                                                  <div className="info-box-content">
                                                       <h4 className="line-height-1">{data.h4}</h4>
                                                       <p className="font2 line-height-1 text-body ">
                                                            {data.p}
                                                       </p>
                                                  </div>
                                             </div>
                                        ))}
                                   </Slider>
                              </div>
                         </div>
                    </div>
                    {/* End .info-boxes-slider */}
               </div>
               {/* End .container */}
          </div>
     );
};
