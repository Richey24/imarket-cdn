import { templateImages } from "@/appProvider/templateImages";
import React from "react";

export const MiniBanner = () => {
     return (
          <section className="banner-section container">
               <div className="row">
                    <div className="col-md-8 mb-md-0 mb-2">
                         <div
                              className="banner banner1 d-flex align-items-center flex-column flex-sm-row justify-content-center justify-content-sm-between"
                              style={{
                                   backgroundImage:
                                        ''
                              }}
                         >
                              <div
                                   className="content-left text-sm-right text-center appear-animate"
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={100}
                              >
                                   <h2 className="text-white">RARE WINES</h2>
                                   <h5 className="mb-sm-0 mb-2">Incredible Discounts</h5>
                              </div>
                              <div
                                   className="content-right text-right appear-animate"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={200}
                              >
                                   <h5 className="d-flex">
                                        <span className="text-transform-none text-white">only</span>
                                        <b className="coupon-sale-text text-white align-middle text-white font2">
                                             <sup>$</sup>
                                             <em>39</em>
                                             <sup>99</sup>
                                        </b>
                                   </h5>
                                   <a href="demo39-shop.html" className="btn btn-lg">
                                        Shop Now
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="col-md-4">
                         <div
                              className="banner banner2"
                              style={{
                                   backgroundImage:
                                   ''
                              }}
                         >
                              <div className="content-left">
                                   <h2
                                        className="appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={50}
                                   >
                                        Top<span className="text-primary font2">10+</span>
                                   </h2>
                                   <h4
                                        className="appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={150}
                                   >
                                        Under<b className="font2">$100</b>
                                   </h4>
                                   <a
                                        href="demo39-shop.html"
                                        className="btn btn-lg appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={200}
                                   >
                                        Shop Now
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
