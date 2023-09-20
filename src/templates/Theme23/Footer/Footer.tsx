import React from "react";
import payment from "../../../assets/images/demoes/demo21/payment-icon.png";
import logo from "../../../assets/images/your-logo.png";
const Footer = () => {
     return (
          <footer className="footer">
               <div className="footer-middle">
                    <div className="container-fluid">
                         <div className="row">
                              <div className="col-lg-6 col-xl-4">
                                   <a href="#">
                                        <img
                                             className="logo mb-3"
                                             src={logo.src}
                                             alt="Porto Logo"
                                             width={113}
                                             height={48}
                                        />
                                   </a>
                                   <div className="row">
                                        <div className="col-sm-6 pr-sm-0">
                                             <div className="contact-widget m-b-3">
                                                  <h4 className="widget-title font2">ADDRESS:</h4>
                                                  <a href="#">123 Street Name, City, England</a>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 pl-sm-0">
                                             <div className="contact-widget m-b-3">
                                                  <h4 className="widget-title font2">PHONE:</h4>
                                                  <a href="#">Toll Free (123) 456-7890</a>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 pr-sm-0">
                                             <div className="contact-widget m-b-3">
                                                  <h4 className="widget-title font2">EMAIL:</h4>
                                                  <a href="mailto:mail@example.com">
                                                       mail@example.com
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
                                   <div className="social-icons mt-1 mb-3">
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
                              <div className="col-lg-6 col-xl-2">
                                   <div className="widget">
                                        <h4 className="widget-title">Newsletter</h4>
                                        <div className="widget-newsletter">
                                             <div className="widget-newsletter-info">
                                                  <p className="widget-newsletter-content m-b-4">
                                                       Get all the latest information on Events,
                                                       Sales and Offers. Sign up for newsletter
                                                       today
                                                  </p>
                                             </div>
                                             <form action="#">
                                                  <div className="footer-submit-wrapper d-flex">
                                                       <input
                                                            type="email"
                                                            className="form-control mb-0"
                                                            placeholder="Email Address"
                                                            size={40}
                                                       />
                                                       <button
                                                            type="submit"
                                                            className="btn btn-primary btn-sm ls-0"
                                                       >
                                                            Subscribe
                                                       </button>
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="footer-bottom">
                    <div className="container-fluid d-sm-flex align-items-center">
                         <div className="footer-left">
                              <span className="footer-copyright">
                                   © Porto eCommerce. 2021. All Rights Reserved
                              </span>
                         </div>
                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <img src={payment.src} alt="payment" />
                         </div>
                    </div>
               </div>
               {/* End .footer-bottom */}
          </footer>
     );
};

export default Footer;
