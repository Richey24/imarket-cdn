import React, { useState } from "react";
import Slider from "react-slick";
import { instagramsImg } from "../data";
export const Instagram = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <div
               className="instagram-section appear-animate appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={100}
          >
               <div className="heading">
                    <h2 className="text-uppercase">
                         FROM INSTAGRAM - <span>@PORTOWINESHOP</span>
                    </h2>
               </div>
               <div className="  owl-theme instagram-feed-list dots-small">
                    <Slider {...settings}>
                         {instagramsImg.map((data) => (
                              <a href="#"className="px-3" >
                                   <img
                                        src={data.img}
                                        width={197}
                                        height={150}
                                        alt="Feed"
                                        
                                   />
                              </a>
                         ))}
                    </Slider>
               </div>
               {/* End .instagram-feed-carousel */}
          </div>
     );
};
