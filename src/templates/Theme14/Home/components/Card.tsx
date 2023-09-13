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
                                        <div
                                             className="owl-item active"
                                             style={{ width: "380px", marginRight: "20px" }}
                                        >
                                             {" "}
                                             <div className="info-box info-box-icon-left">
                                                  <i className="icon-shipping" />
                                                  <div className="info-box-content">
                                                       <h4 className="pb-1">
                                                            FREE SHIPPING &amp; RETURN
                                                       </h4>
                                                       <p>Free shipping on all orders over $99</p>
                                                  </div>
                                                  {/* End .info-box-content */}
                                             </div>
                                        </div>{" "}
                                        <div
                                             className="owl-item active"
                                             style={{ width: "380px", marginRight: "20px" }}
                                        >
                                             {" "}
                                             <div className="info-box info-box-icon-left">
                                                  <i className="icon-money" />
                                                  <div className="info-box-content">
                                                       <h4 className="pb-1">
                                                            MONEY BACK GUARANTEE
                                                       </h4>
                                                       <p>100% money back guarantee</p>
                                                  </div>
                                                  {/* End .info-box-content */}
                                             </div>
                                        </div>
                                        <div
                                             className="owl-item active"
                                             style={{ width: "380px", marginRight: "20px" }}
                                        >
                                             {" "}
                                             <div className="info-box info-box-icon-left">
                                                  <i className="icon-support" />
                                                  <div className="info-box-content">
                                                       <h4 className="pb-1">ONLINE SUPPORT 24/7</h4>
                                                       <p>Lorem ipsum dolor sit amet.</p>
                                                  </div>
                                                  {/* End .info-box-content */}
                                             </div>
                                        </div>
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
