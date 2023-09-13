import { templateImages } from "@/appProvider/templateImages";
import React from "react";

export const PromoBanner = () => {
     return (
          <div
               className="promo-section bg-gray"
               data-parallax="{'speed': 2, 'enableOnMobile': true}"
               style={{ backgroundImage: `url(${templateImages.demo14.bannerImage.banner8})` }}
               //  data-image-src={promobanner.src}
          >
               <div className="promo-banner banner container text-uppercase">
                    <div className="banner-content row align-items-center text-center">
                         <div className="col-md-4 ml-xl-auto text-md-right left-text">
                              <h2 className="mb-md-0" style={{ fontWeight: "bold" }}>
                                   Top electronic
                                   <br />
                                   Deals
                              </h2>
                         </div>
                         <div className="col-md-3 pb-4 pb-md-0">
                              <a
                                   href="#"
                                   className="btn ls-10"
                                   style={{ background: "#7aa93c", color: "#fff" }}
                              >
                                   View Sale
                              </a>
                         </div>
                         <div className="col-md-4 mr-xl-auto text-md-left right-text">
                              <h4 className="mb-1 coupon-sale-text p-0 d-block text-transform-none">
                                   <b className="bg-dark text-white font1">Exclusive COUPON</b>
                              </h4>
                              <h5 className="mb-2 coupon-sale-text ls-10 p-0">
                                   <i className="ls-0">UP TO</i>
                                   <b className="text-white" style={{ background: "#ff7272" }}>
                                        $100
                                   </b>{" "}
                                   OFF
                              </h5>
                         </div>
                    </div>
               </div>
          </div>
     );
};
