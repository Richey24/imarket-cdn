import React from "react";

export const FeatureBoxes = () => {
     return (
          <div className="feature-boxes-container bg-gray">
               <div className="container">
                    <div className="row">
                         <div className="col-md-4">
                              <div
                                   className="feature-box feature-box-simple text-center mb-2"
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={200}
                              >
                                   <div className="feature-box-icon">
                                        <i className="icon-shipping" />
                                   </div>
                                   <div className="feature-box-content p-0">
                                        <h3 className="font1 ls-n-10">
                                             Free Shipping &amp; Returns
                                        </h3>
                                        <h5 className="font1 m-b-3">All Orders Over $99</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-md-4 */}
                         <div className="col-md-4">
                              <div
                                   className="feature-box feature-box-simple text-center mb-2"
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={400}
                              >
                                   <div className="feature-box-icon">
                                        <i className="icon-money" />
                                   </div>
                                   <div className="feature-box-content p-0">
                                        <h3 className="font1 ls-n-10">Money Back Guarantee</h3>
                                        <h5 className="font1 m-b-3">Safe &amp; Fast</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-md-4 */}
                         <div className="col-md-4">
                              <div
                                   className="feature-box feature-box-simple text-center mb-2"
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={600}
                              >
                                   <div className="feature-box-icon">
                                        <i className="icon-support" />
                                   </div>
                                   <div className="feature-box-content p-0">
                                        <h3 className="font1 ls-n-10">Online Support</h3>
                                        <h5 className="font1 m-b-3">Need Assistence?</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-md-4 */}
                    </div>
                    {/* End .row */}
               </div>
          </div>
     );
};
