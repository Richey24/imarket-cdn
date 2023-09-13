const ServiceBox = () => {
     return (
          <section className="service-box">
               <div className="container">
                    <div className="info-boxes-container border-bottom mb-3">
                         <div className="row row-joined">
                              <div className="info-box col-sm-6 col-md-6 col-lg-3">
                                   <div className="info-box-icon-left w-100">
                                        <i className="icon-shipping" />
                                        <div className="info-box-content">
                                             <h4>FREE SHIPPING &amp; RETURN</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                              </div>
                              {/* End .info-box */}
                              <div className="info-box col-sm-6 col-md-6 col-lg-3">
                                   <div className="info-box-icon-left w-100">
                                        <i className="icon-money" />
                                        <div className="info-box-content">
                                             <h4>MONEY BACK GUARANTEE</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                              </div>
                              {/* End .info-box */}
                              <div className="info-box col-sm-6 col-md-6 col-lg-3">
                                   <div className="info-box-icon-left w-100">
                                        <i className="icon-support" />
                                        <div className="info-box-content">
                                             <h4>ONLINE SUPPORT 24/7</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                              </div>
                              {/* End .info-box */}
                              <div className="info-box col-sm-6 col-md-6 col-lg-3">
                                   <div className="info-box-icon-left w-100">
                                        <i className="icon-secure-payment" />
                                        <div className="info-box-content">
                                             <h4>SECURE PAYMENT</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                              </div>
                              {/* End .info-box */}
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .info-boxes-container */}
               </div>
          </section>
     );
};
export default ServiceBox;
