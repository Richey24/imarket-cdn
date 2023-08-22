const FeatureBoxes = () => {
     return (
          <div className="feature-boxes-container">
               <div className="row mb-1">
                    <div className="col-lg-4 " data-animation-name="fadeInUpShorter">
                         <div className="feature-box m-b-5 mx-sm-5 mx-md-3 feature-box-simple text-center">
                              <i className="icon-earphones-alt" />
                              <div className="feature-box-content">
                                   <h3 className="mb-0">Customer Support</h3>
                                   <h5>Need Assistence?</h5>
                                   <p>Lorem ipsum dolor amet, consectetur.</p>
                              </div>
                              {/* End .feature-box-content */}
                         </div>
                         {/* End .feature-box */}
                    </div>
                    {/* End .col-md-4 */}
                    <div
                         className="col-lg-4 "
                         data-animation-delay={500}
                         data-animation-name="fadeInUpShorter"
                    >
                         <div className="feature-box m-b-5 mx-sm-5 mx-md-3 feature-box-simple text-center">
                              <i className="icon-credit-card" />
                              <div className="feature-box-content">
                                   <h3 className="mb-0">Secured Payment</h3>
                                   <h5>Safe &amp; Fast</h5>
                                   <p>Lorem ipsum dolor amet, consectetur.</p>
                              </div>
                              {/* End .feature-box-content */}
                         </div>
                         {/* End .feature-box */}
                    </div>
                    {/* End .col-md-4 */}
                    <div
                         className="col-lg-4 "
                         data-animation-delay={800}
                         data-animation-name="fadeInUpShorter"
                    >
                         <div className="feature-box m-b-5 mx-sm-5 mx-md-3 feature-box-simple text-center">
                              <i className="icon-action-undo " />
                              <div className="feature-box-content">
                                   <h3 className="mb-0">RETURNS</h3>
                                   <h5>Easy &amp; Free</h5>
                                   <p>Lorem ipsum dolor sit amet.</p>
                              </div>
                              {/* End .feature-box-content */}
                         </div>
                         {/* End .feature-box */}
                    </div>
                    {/* End .col-md-4 */}
               </div>
               {/* End .feature-boxes-container.row */}
          </div>
     );
};

export default FeatureBoxes;
