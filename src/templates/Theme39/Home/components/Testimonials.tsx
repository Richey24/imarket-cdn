import { templateImages } from "@/appProvider/templateImages";
import React from "react";

export const Testimonials = () => {
     return (
          <div
               className="testimonials-section"
               style={{
                    backgroundImage: '',
               }}
          >
               <div
                    className="container appear-animate"
                    data-animation-name="fadeIn"
                    data-animation-delay={100}
               >
                    <div className="  owl-theme">
                         <div className="testimonial col-sm-8 col-9 m-auto">
                              <blockquote className="pl-0 pr-0">
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur tempor tempus rhoncus. Sed et magna quis nisi
                                        iaculis consectetur. Nullam molestie sed dui at volutpat.
                                        Morbi porta malesuada tortor, eu hendrerit lectus.
                                   </p>
                              </blockquote>
                              <div className="testimonial-owner justify-content-center text-center flex-column">
                                   <figure>
                                        <img
                                             src={templateImages.demo39.clientImage.client1}
                                             alt="client"
                                        />
                                   </figure>
                                   <div>
                                        <h5 className="testimonial-title">Mary Doe</h5>
                                        {/* <div class="ratings-container">
                          <div class="product-ratings">
                              <span class="ratings" style="width:100%"></span>
                              <span class="tooltiptext tooltip-top"></span>
                          </div>
                      </div> */}
                                        {/* End .product-container */}
                                   </div>
                              </div>
                              {/* End .testimonial-owner */}
                         </div>
                         {/* End .testimonial */}
                    </div>
               </div>
               {/* End .container */}
          </div>
     );
};
