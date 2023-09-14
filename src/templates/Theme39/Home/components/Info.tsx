import React from "react";

export const Info = () => {
     return (
          <div
               className="info-boxes-container row row-joined appear-animate"
               data-animation-name="fadeIn"
               data-animation-duration={1000}
               data-animation-delay={100}
          >
               <div className="info-box info-box-icon-left col-lg-4">
                    <i className="icon-shipping" />
                    <div className="info-box-content">
                         <h4>FREE SHIPPING &amp; RETURN</h4>
                         <p className="text-body">Free shipping on all orders over $99.</p>
                    </div>
                    {/* End .info-box-content */}
               </div>
               {/* End .info-box */}
               <div className="info-box info-box-icon-left col-lg-4">
                    <i className="icon-money" />
                    <div className="info-box-content">
                         <h4>MONEY BACK GUARANTEE</h4>
                         <p className="text-body">100% money back guarantee</p>
                    </div>
                    {/* End .info-box-content */}
               </div>
               {/* End .info-box */}
               <div className="info-box info-box-icon-left col-lg-4">
                    <i className="icon-support" />
                    <div className="info-box-content">
                         <h4>ONLINE SUPPORT 24/7</h4>
                         <p className="text-body">Lorem ipsum dolor sit amet.</p>
                    </div>
                    {/* End .info-box-content */}
               </div>
               {/* End .info-box */}
          </div>
     );
};
