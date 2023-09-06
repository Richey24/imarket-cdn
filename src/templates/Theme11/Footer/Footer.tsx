import React from "react";

const Footer = () => {
     return (
          <footer className="footer bg-dark">
               <div className="container">
                    <div className="footer-middle">
                         <div className="row">
                              <div className="col-md-5 col-lg-3">
                                   <div className="widget widget-contact-info">
                                        <h4 className="widget-title">Contact Info</h4>
                                        <ul className="contact-info">
                                             <li>
                                                  <i className="icon-direction" />
                                                  <span className="contact-info-label">
                                                       Address
                                                  </span>
                                                  123 Street Name, City, England
                                             </li>
                                             <li>
                                                  <i className="icon-phone-1" />
                                                  <span className="contact-info-label">Phone</span>
                                                  Toll Free <a href="tel:">(123) 456-7890</a>
                                             </li>
                                             <li>
                                                  <i className="icon-envolope" />
                                                  <span className="contact-info-label">
                                                       Email
                                                  </span>{" "}
                                                  <a href="mailto:mail@example.com">
                                                       mail@example.com
                                                  </a>
                                             </li>
                                        </ul>
                                   </div>
                                   {/* End .widget */}
                              </div>
                              <div className="col-md-7 offset-lg-1 col-lg-8">
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
                                                                 <a href="about.html">About us</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Contact us</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">
                                                                      Shipping &amp; Delivery
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Privacy</a>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-md-12 col-lg-5">
                                             <div className="widget widget-newsletter">
                                                  <h4 className="widget-title">Newsletter</h4>
                                                  <p className="mb-2 mr-3">
                                                       Get all the latest information on Events,
                                                       Sales and Offers. Sign up for newsletter
                                                       today.
                                                  </p>
                                                  <form action="#">
                                                       <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Email address..."
                                                       />
                                                       <input
                                                            type="submit"
                                                            className="btn"
                                                            defaultValue="GO"
                                                       />
                                                  </form>
                                             </div>
                                             {/* End .widget */}
                                        </div>
                                   </div>
                              </div>
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .footer-middle */}
                    <div className="footer-bottom d-flex flex-column flex-lg-row align-items-sm-center">
                         <p className="footer-copyright mb-lg-0">
                              © Porto eCommerce. 2021. All Rights Reserved
                         </p>
                         <div className="social-icons ml-lg-auto mr-1">
                              <a
                                   href="#"
                                   className="social-icon social-facebook icon-facebook"
                                   target="_blank"
                                   title="Facebook"
                              />
                              <a
                                   href="#"
                                   className="social-icon social-twitter icon-twitter"
                                   target="_blank"
                                   title="Twitter"
                              />
                              <a
                                   href="#"
                                   className="social-icon social-linkedin fab fa-linkedin-in"
                                   target="_blank"
                                   title="Linkedin"
                              />
                         </div>
                         {/* End .social-icons */}
                    </div>
                    {/* End .footer-bottom */}
               </div>
               {/* End .container */}
          </footer>
     );
};

export default Footer;
