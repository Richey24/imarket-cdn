import React from "react";
import payment from "../../../assets/images/demoes/demo21/payment-icon.png";
import logo from "../../../assets/images/your-logo.png";
import { SubcribeEmail } from "@/templates/shared/SubcribeEmail";

const Footer = () => {
     return (
          <footer>
               <div className="footer">
                    <div className="footer-top">
                         <div className="container">
                              <div className="row align-items-center">
                                   <div className="col-md-6 col-lg-3">
                                        <h4 className="widget-newsletter-title font1 font-weight-bold text-white ls-n-10">
                                             Sign Up to Newsletter
                                        </h4>
                                   </div>
                                   <div className="col-md-6 col-lg-4">
                                        <p className="widget-newsletter-content ls-n-10 text-white mb-0">
                                             Get all the latest information on Events, Sales and
                                             Offers.
                                        </p>
                                        <span className="widget-newsletter-content d-block font-weight-bold ls-n-10 text-white">
                                             Receive $10 coupon for first shopping.
                                        </span>
                                   </div>
                                   <div className="col-md-10 col-lg-5">
                                        <SubcribeEmail />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="container">
                         <div className="footer-middle">
                              <div className="row">
                                   <div className="col-lg-6 mb-1">
                                        <a href="demo21.html">
                                             <img
                                                  src={logo.src}
                                                  alt="Logo"
                                                  className="logo mb-3 mb-lg-6"
                                             />
                                        </a>
                                        <div className="row no-gutters m-0">
                                             <div className="col-md-4 mb-2">
                                                  <div className="contact-widget phone">
                                                       <h4 className="widget-title">
                                                            call us now:
                                                       </h4>
                                                       <a href="#">+123 5678 890</a>
                                                  </div>
                                             </div>
                                             <div className="col-md-4 mb-2">
                                                  <div className="contact-widget email">
                                                       <h4 className="widget-title">
                                                            e-mail address:
                                                       </h4>
                                                       <a href="mailto:mail@example.com">
                                                            mail@example.com
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-md-4 mb-2">
                                                  <div className="contact-widget follow">
                                                       <h4 className="widget-title ls-n-10">
                                                            follow us
                                                       </h4>
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
                                                                 className="social-icon social-linkedin fab fa-linkedin-in"
                                                                 target="_blank"
                                                            />
                                                       </div>
                                                       {/* End .social-icons */}
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-2">
                                        <div className="widget">
                                             <h4 className="widget-title">Categories</h4>
                                             <ul className="links">
                                                  <li>
                                                       <a href="demo21-shop.html">Electronics</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo21-shop.html">Fashion</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo21-shop.html">Gifts</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo21-shop.html">Music</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo21-shop.html">Trousers</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 links link-parts row">
                                        <ul className="link-part col-lg-6 col-md-12 mb-0">
                                             <h4 className="widget-title">About</h4>
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
                                             <h4 className="widget-title">Account</h4>
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
                         </div>
                         <div className="footer-bottom d-sm-flex align-items-center">
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
               </div>
          </footer>
     );
};

export default Footer;
