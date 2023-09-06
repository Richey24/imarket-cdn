import React, { useState } from "react";
import Slider from "react-slick";
export const Card = () => {
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
                         <div className="info-box info-box-icon-left">
                              <i className="icon-shipping text-primary" />
                              <div className="info-box-content">
                                   <h4 className="line-height-1">
                                        Free Shipping on Orders Over $99
                                   </h4>
                                   <p className="font2 line-height-1 text-body ">
                                        For more than 100,000 parts!
                                   </p>
                              </div>
                         </div>
                         <div className="info-box info-box-icon-left">
                              <i className="icon-money text-primary" />
                              <div className="info-box-content">
                                   <h4 className="line-height-1">
                                        Up to 40% OFF on Selected Items
                                   </h4>
                                   <p className="font2 line-height-1 text-body ">
                                        Available for all Categories!
                                   </p>
                              </div>
                         </div>
                         <div className="info-box info-box-icon-left">
                              <i className="icon-secure-payment text-primary" />
                              <div className="info-box-content">
                                   <h4 className="line-height-1">100% Secure Payments</h4>
                                   <p className="font2 line-height-1 text-body ">
                                        We ensure secure payment!
                                   </p>
                              </div>
                         </div>
                    </Slider>
               </div>
          </section>
     );
};
