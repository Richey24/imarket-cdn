import React from "react";
import logo from "../../../assets/images/your-logo.png";

const Footer = (props) => {
          const { static: staticProps, company } = props.props;
     return (
          <footer className="footer font2">
               <div className="container-fluid">
                    <div className="footer-top top-border d-flex align-items-center justify-content-between flex-wrap">
                         <div className="footer-left widget-newsletter d-md-flex align-items-center">
                              <div className="widget-newsletter-info">
                                   <h5 className="widget-newsletter-title text-white text-uppercase ls-0 mb-0">
                                        subscribe newsletter
                                   </h5>
                                   <p className="widget-newsletter-content mb-0">
                                        Get all the latest information on Events, Sales and Offers.
                                   </p>
                              </div>
                              <form action="#">
                                   <div className="footer-submit-wrapper d-flex">
                                        <input
                                             type="email"
                                             className="form-control"
                                             placeholder="Email address..."
                                             size={40}
                                        />
                                        <button type="submit" className="btn btn-dark btn-sm">
                                             Subscribe
                                        </button>
                                   </div>
                              </form>
                         </div>
                         <div className="footer-right">
                              <div className="social-icons">
                                   <a
                                        href="#"
                                        className="social-icon social-facebook icon-facebook"
                                        target="_blank"
                                   />
                                   <a
                                        href="#"
                                        className="social-icon social-twitter icon-twitter"
                                        target="_blank"
                                   />
                                   <a
                                        href="#"
                                        className="social-icon social-instagram icon-instagram"
                                        target="_blank"
                                   />
                              </div>
                              {/* End .social-icons */}
                         </div>
                    </div>
                    <div className="footer-middle">
                         <div className="row">
                              <div className="col-lg-3">
                                   <a href="demo18.html">
                                        <img src={logo.src} alt="Logo" className="logo" />
                                   </a>
                                   <div className="row">
                                             <div className="col-sm-6 pr-sm-0">
                                                  <div className="contact-widget m-b-3">
                                                       <h4 className="widget-title font2">
                                                            ADDRESS:
                                                       </h4>
                                                       <a href="#">
                                                            {" "}
                                                            {company?.city + " " + company?.country}
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pl-sm-0">
                                                  <div className="contact-widget m-b-3">
                                                       <h4 className="widget-title font2">
                                                            PHONE:
                                                       </h4>
                                                       <a href="#">{company?.phone}</a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pr-sm-0">
                                                  <div className="contact-widget m-b-3">
                                                       <h4 className="widget-title font2">
                                                            EMAIL:
                                                       </h4>
                                                       <a href="mailto:mail@example.com">
                                                            {company?.user_id?.email}
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pl-sm-0">
                                                  <div className="contact-widget m-b-3">
                                                       <h4 className="widget-title font2">
                                                            WORKING DAYS/HOURS:
                                                       </h4>
                                                       <a href="#">Mon - Sun / 9:00AM - 8:00PM</a>
                                                  </div>
                                             </div>
                                        </div>
                              </div>
                            
                              {/* End .col-lg-3 */}
                              <div className="col-lg-3 ">
                                   <div className="widget">
                                        <h4 className="widget-title">Account</h4>
                                        <div className="links link-parts row">
                                             <ul className="link-part col-lg-6 col-md-12 mb-0">
                                                  <li>
                                                       <a href="demo2-about.html">About us</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo2-contact.html">Cart</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo2-contact.html">Checkout</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo2-contact.html">Contact us</a>
                                                  </li>
                                                  <li>
                                                       <a href="login.html">Dashboard</a>
                                                  </li>
                                             </ul>
                                             <ul className="link-part col-lg-6 col-md-12">
                                                  <li>
                                                       <a href="#">Order tracking</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Order history</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Privacy</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Shipping &amp; Delivery</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Wishlist</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}
                         </div>
                         {/* End .row */}
                    </div>
                    <div className="footer-bottom">
                         <p className="footer-copyright text-lg-center mb-0">
                              © Porto eCommerce. 2021. All Rights Reserved
                         </p>
                    </div>
                    {/* End .footer-bottom */}
               </div>
               {/* End .container-fluid */}
          </footer>
     );
};

export default Footer;
