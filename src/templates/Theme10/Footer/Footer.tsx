const Footer = (props) => {
     const { static: staticProps, company } = props.props;
     return (
          <div>
               <footer className="footer">
                    <div className="container">
                         <div className="feature-boxes-container">
                              <div className="row">
                                   <div className="col-md-4">
                                        <div className="feature-box feature-rounded">
                                             <i className="sicon-earphones-alt"></i>

                                             <div className="feature-box-content">
                                                  <h3>Customer Support</h3>
                                                  <h5>Need Assistance?</h5>

                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       adipiscing elit. Duis nec vestibulum magna,
                                                       et dapib.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-md-4">
                                        <div className="feature-box feature-rounded">
                                             <i className="sicon-credit-card"></i>

                                             <div className="feature-box-content">
                                                  <h3>Secured Payment</h3>
                                                  <h5>Safe &amp; Fast</h5>

                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       adipiscing elit. Duis nec vestibulum magna,
                                                       et dapibus lacus.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-md-4">
                                        <div className="feature-box feature-rounded">
                                             <i className="sicon-action-undo"></i>

                                             <div className="feature-box-content">
                                                  <h3>Returns</h3>
                                                  <h5>Easy &amp; Free</h5>

                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       adipiscing elit. Duis nec vestibulum magna,
                                                       et dapib.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="footer-middle">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-3 col-md-4">
                                        <div className="widget">
                                             <h4 className="widget-title font-weight-bold">
                                                  Contact Info
                                             </h4>
                                             <ul className="contact-info">
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Address:
                                                       </span>
                                                       {company?.city + " " + company?.country}
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Phone:
                                                       </span>
                                                       <a href="tel:">{company?.phone}</a>
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Email:
                                                       </span>{" "}
                                                       <a href="mailto:mail@example.com">
                                                            {company?.user_id?.email}
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Working Days/Hours:
                                                       </span>{" "}
                                                       Mon - Sun / 9:00 AM - 8:00 PM
                                                  </li>
                                             </ul>
                                             <div className="social-icons mb-6 mb-md-0">
                                                  <a
                                                       href="#"
                                                       className="social-icon social-facebook icon-facebook"
                                                       target="_blank"
                                                       title="Facebook"
                                                  ></a>
                                                  <a
                                                       href="#"
                                                       className="social-icon social-twitter icon-twitter"
                                                       target="_blank"
                                                       title="Twitter"
                                                  ></a>
                                                  <a
                                                       href="#"
                                                       className="social-icon social-linkedin icon-instagram"
                                                       target="_blank"
                                                       title="Linkedin"
                                                  ></a>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-lg-9 col-md-8">
                                        <div className="widget widget-newsletter mb-0">
                                             <h4 className="widget-title">Subscribe newsletter</h4>
                                             <div className="row align-items-center">
                                                  <div className="col-lg-6 col-md-12 mb-1">
                                                       <p className="mb-0">
                                                            Get all the latest information on
                                                            Events, Sales and Offers. Sign up for
                                                            newsletter today.
                                                       </p>
                                                  </div>

                                                  <div className="col-lg-6 col-md-12 mb-1">
                                                       <form
                                                            action="#"
                                                            className="d-flex mb-0 w-100"
                                                       >
                                                            <input
                                                                 type="email"
                                                                 className="form-control mb-0"
                                                                 placeholder="Email Address"
                                                                 required
                                                            />

                                                            <input
                                                                 type="submit"
                                                                 className="btn btn-primary shadow-none"
                                                                 value="Subscribe"
                                                            />
                                                       </form>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="row">
                                             <div className="col-sm-6 col-lg-3">
                                                  <div className="widget">
                                                       <h3 className="widget-title">Account</h3>
                                                       <div className="widget-content">
                                                            <ul>
                                                                 <li>
                                                                      <a href="dashboard.html">
                                                                           Dashboard
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Cart</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Checkout</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Order tracking</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Order history</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Wishlist</a>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-3">
                                                  <div className="widget">
                                                       <h3 className="widget-title">About</h3>
                                                       <div className="widget-content">
                                                            <ul>
                                                                 <li>
                                                                      <a href="about.html">
                                                                           About us
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Contact us</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">
                                                                           Shipping & Delivery
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Privacy</a>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="container">
                         <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                              <p className="footer-copyright py-3 pr-sm-4 pr-0 mb-0">
                                   © Dreamtechlabs 2021. All Rights Reserved.
                              </p>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
