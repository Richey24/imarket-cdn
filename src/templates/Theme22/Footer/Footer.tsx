import React from "react";
import logo from "../../../assets/images/your-logo.png";
import payment from "../../../assets/images/demoes/demo21/payment-icon.png";

const Footer = (props: any) => {
     return (
          <footer>
               <div className="footer">
                    <div
                         className="footer-top"
                         style={{ paddingLeft: "80px", paddingRight: "80px" }}
                    >
                         <div className="container">
                              <div className="row align-items-center">
                                   <div className="col-md-6 col-lg-3">
                                        <h4 className="widget-newsletter-title font1 font-weight-bold text-white">
                                             Sign Up to Newsletter
                                        </h4>
                                   </div>
                                   <div className="col-md-6 col-lg-4">
                                        <p className="widget-newsletter-content ls-10 text-white mb-0">
                                             Get all the latest information on Events, Sales and
                                             Offers.
                                        </p>
                                        <span className="widget-newsletter-content d-block font-weight-bold ls-10 text-white">
                                             Receive $10 coupon for first shopping.
                                        </span>
                                   </div>
                                   <div className="col-md-10 col-lg-5">
                                        <form action="#" className="mb-0">
                                             <div className="footer-submit-wrapper d-flex">
                                                  <input
                                                       type="email"
                                                       className="form-control mb-0"
                                                       placeholder="Enter your Email address..."
                                                  />
                                                  <button
                                                       type="submit"
                                                       className="btn btn-md btn-dark"
                                                  >
                                                       Subscribe
                                                  </button>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div
                         className="container"
                         style={{ paddingLeft: "80px", paddingRight: "80px" }}
                    >
                         <div className="footer-middle">
                              <div className="row">
                                   <div className="col-lg-4">
                                        <a href="demo22.html">
                                             <img
                                                  className="logo"
                                                  src={logo.src}
                                                  alt="Porto Logo"
                                                  width={220}
                                                  height={80}
                                             />
                                        </a>
                                        <div className="row">
                                             <div className="col-sm-6 pr-sm-0">
                                                  <div className="contact-widget">
                                                       <h4 className="widget-title">ADDRESS:</h4>
                                                       <a href="#">
                                                            123 Street Name, City, England
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pl-sm-0">
                                                  <div className="contact-widget">
                                                       <h4 className="widget-title">PHONE:</h4>
                                                       <a href="#">Toll Free (123) 456-7890</a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pr-sm-0">
                                                  <div className="contact-widget">
                                                       <h4 className="widget-title">EMAIL:</h4>
                                                       <a href="mailto:mail@example.com">
                                                            mail@example.com
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pl-sm-0">
                                                  <div className="contact-widget">
                                                       <h4 className="widget-title">
                                                            WORKING DAYS/HOURS:
                                                       </h4>
                                                       <a href="#">Mon - Sun / 9:00AM - 8:00PM</a>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="social-icons mb-3 mb-lg-0">
                                             <a
                                                  href="#"
                                                  className="social-icon social-facebook"
                                                  target="_blank"
                                             >
                                                  <i className="fab fa-facebook-f" />
                                             </a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-twitter"
                                                  target="_blank"
                                             >
                                                  <i className="fab fa-twitter" />
                                             </a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-linkedin"
                                                  target="_blank"
                                             >
                                                  <i className="fab fa-linkedin-in" />
                                             </a>
                                        </div>
                                   </div>
                                   <div className="col-sm-6 col-lg-3">
                                        <div className="widget">
                                             <h3 className="widget-title">Account</h3>
                                             <div className="widget-content">
                                                  <ul>
                                                       <li>
                                                            <a href="dashboard.html">Dashboard</a>
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
                                                            <a href="#">Shipping &amp; Delivery</a>
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
                         <div className="footer-bottom d-sm-flex align-items-center">
                              <div className="footer-left">
                                   <span className="footer-copyright">
                                        © Porto eCommerce. 2021. All Rights Reserved
                                   </span>
                              </div>
                              <div className="footer-right ml-auto mt-1 mt-sm-0">
                                   <img src={payment.src} alt="payment" width={200} height={27} />
                              </div>
                         </div>
                    </div>
                    {/* End .footer-bottom */}
               </div>
          </footer>
     );
};

export default Footer;
