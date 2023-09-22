import React from "react";

export const Info = () => {
     return (
          <div className="container" style={{ marginTop: "20px" }}>
               <div className="info-boxes-container">
                    <div className="row m-0 divide-line">
                         <div className="info-box info-box-icon-left col-sm-6 col-lg-3">
                              <i className="icon-shipping" style={{ color: "#01abec" }} />
                              <div className="info-box-content">
                                   <h4 className="font1 line-height-1 ls-10">
                                        FREE SHIPPING &amp; RETURN
                                   </h4>
                                   <p className="font-weight-light">
                                        Free shipping on orders over $99.
                                   </p>
                              </div>
                              {/* End .info-box-content */}
                         </div>
                         {/* End .info-box */}
                         <div className="info-box info-box-icon-left col-sm-6 col-lg-3">
                              <i className="icon-money " style={{ color: "#01abec" }} />
                              <div className="info-box-content">
                                   <h4 className="font1 line-height-1 ls-10">
                                        MONEY BACK GUARANTEE
                                   </h4>
                                   <p className="font-weight-light">100% money back guarantee</p>
                              </div>
                              {/* End .info-box-content */}
                         </div>
                         {/* End .info-box */}
                         <div className="info-box info-box-icon-left col-sm-6 col-lg-3">
                              <i className="icon-support " style={{ color: "#01abec" }} />
                              <div className="info-box-content">
                                   <h4 className="font1 line-height-1 ls-10">
                                        ONLINE SUPPORT 24/7
                                   </h4>
                                   <p className="font-weight-light">Lorem ipsum dolor sit amet.</p>
                              </div>
                              {/* End .info-box-content */}
                         </div>
                         {/* End .info-box */}
                         <div className="info-box info-box-icon-left col-sm-6 col-lg-3">
                              <i className="icon-secure-payment  " style={{ color: "#01abec" }} />
                              <div className="info-box-content">
                                   <h4 className="font1 line-height-1 ls-10">SECURE PAYMENT</h4>
                                   <p className="font-weight-light">Lorem Ipsum dolor sit amet.</p>
                              </div>
                              {/* End .info-box-content */}
                         </div>
                         {/* End .info-box */}
                    </div>
               </div>
          </div>
     );
};
