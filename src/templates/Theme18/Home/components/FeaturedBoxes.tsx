import React from "react";

const FeaturedBoxes = () => {
     return (
          <section className="feature-boxes-container">
               <div className="container-fluid " data-animation-name="fadeInUpShorter">
                    <div className="row no-gaps m-0 ">
                         <div className="col-sm-6 col-lg-3">
                              <div className="feature-box feature-box-simple text-center mb-2">
                                   <div className="feature-box-icon">
                                        <i className="icon-earphones-alt text-white" />
                                   </div>
                                   <div className="feature-box-content p-0">
                                        <h3 className="text-white">Customer Support</h3>
                                        <h5 className="line-height-1">Need Assistance?</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapib.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-sm-6.col-lg-3 */}
                         <div className="col-sm-6 col-lg-3">
                              <div className="feature-box feature-box-simple text-center mb-2">
                                   <div className="feature-box-icon">
                                        <i className="icon-credit-card text-white" />
                                   </div>
                                   <div className="feature-box-content p-0">
                                        <h3 className="text-white">Secured Payment</h3>
                                        <h5 className="line-height-1">Safe &amp; Fast</h5>
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
                         {/* End .col-sm-6 col-lg-3 */}
                         <div className="col-sm-6 col-lg-3">
                              <div className="feature-box feature-box-simple text-center mb-2">
                                   <div className="feature-box-icon">
                                        <i className="icon-action-undo text-white" />
                                   </div>
                                   <div className="feature-box-content p-0">
                                        <h3 className="text-capitalize text-white">Free Returns</h3>
                                        <h5 className="line-height-1">Easy &amp; Free</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapib.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* col-sm-6 col-lg-3 */}
                         <div className="col-sm-6 col-lg-3">
                              <div className="feature-box feature-box-simple text-center mb-2">
                                   <div className="feature-box-icon">
                                        <i className="icon-shipping text-white" />
                                   </div>
                                   <div className="feature-box-content p-0">
                                        <h3 className="text-white">Free Shipping</h3>
                                        <h5 className="line-height-1">Made To Help You</h5>
                                        <p>
                                             Porto has very powerful admin features to help customer
                                             to build their own shop in minutes without any special
                                             skills in web development.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-sm-6 col-lg-3 */}
                    </div>
                    {/* End .row */}
               </div>
               {/* End .container*/}
          </section>
     );
};

export default FeaturedBoxes;
