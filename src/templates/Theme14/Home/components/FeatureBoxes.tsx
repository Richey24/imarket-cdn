import React from "react";

export const FeatureBoxes = () => {
     return (
          <div className="feature-boxes-container" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
               <div className="container">
                    <div className="row">
                         <div className="col-md-4">
                              <div className="feature-box mx-md-3 feature-box-simple text-center">
                                   <i className="icon-earphones-alt" />
                                   <div className="feature-box-content">
                                        <h3>Customer Support</h3>
                                        <h5>Need Assistance?</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapib.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-md-4 */}
                         <div className="col-md-4">
                              <div className="feature-box mx-md-3 feature-box-simple text-center">
                                   <i className="icon-credit-card" />
                                   <div className="feature-box-content">
                                        <h3>Secured Payment</h3>
                                        <h5>Safe &amp; Fast</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus lacus.
                                             Lorem ipsum dolor sit amet.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-md-4 */}
                         <div className="col-md-4">
                              <div className="feature-box mx-md-3 feature-box-simple text-center">
                                   <i className="icon-action-undo" />
                                   <div className="feature-box-content">
                                        <h3>Returns</h3>
                                        <h5>Easy &amp; Free</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapib.
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
               {/* End .container */}
          </div>
     );
};
