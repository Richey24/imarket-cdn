import React, { useState } from "react";
import Slider from "react-slick";
export const Card = () => {
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
                    <div className="info-box info-box-icon-left col-md-4">
                         <i className="icon-shipping" />
                         <div className="info-box-content">
                              <h4 className="ls-n-25">FREE SHIPPING &amp; RETURN</h4>
                              <p className="font2 font-weight-light">
                                   Free shipping on all orders over $99.
                              </p>
                         </div>
                         {/* End .info-box-content */}
                    </div>
                    {/* End .info-box */}
                    <div className="info-box info-box-icon-left col-md-4">
                         <i className="icon-money" />
                         <div className="info-box-content">
                              <h4 className="ls-n-25">MONEY BACK GUARANTEE</h4>
                              <p className="font2 font-weight-light">100% money back guarantee</p>
                         </div>
                         {/* End .info-box-content */}
                    </div>
                    {/* End .info-box */}
                    <div className="info-box info-box-icon-left col-md-4">
                         <i className="icon-support" />
                         <div className="info-box-content">
                              <h4 className="ls-n-25">ONLINE SUPPORT 24/7</h4>
                              <p className="font2 font-weight-light">Lorem ipsum dolor sit amet.</p>
                         </div>
                         {/* End .info-box-content */}
                    </div>
                    {/* End .info-box */}
               </div>
          </div>
     );
};
