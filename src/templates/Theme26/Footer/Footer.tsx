import { templateImages } from "@/appProvider/templateImages";
import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer font2">
               <div className="container">
                    <div className="footer-middle">
                         <div className="row">
                              <div className="col-lg-5">
                                   <a href="demo26.html">
                                        <img
                                             src={templateImages.logoImage.logo2}
                                             alt="Logo"
                                             width={111}
                                             height={44}
                                             className="m-b-4"
                                        />
                                   </a>
                                   <div className="contact-widget mb-2 mb-lg-0">
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Praesent pulvinar feugiat quam, vitae aliquam
                                             urna egestas nec. Phasellus sit amet consequat tortor.
                                        </p>
                                        <div className="row ls-0">
                                             <div className="col-md-2-5">
                                                  <h6 className="text-uppercase text-white mb-0">
                                                       Questions?
                                                  </h6>
                                                  <h3 className="ls-n-10 text-primary">
                                                       1-888-123-456
                                                  </h3>
                                             </div>
                                             <div className="col-md-3-5">
                                                  <h6 className="text-uppercase text-white mb-0">
                                                       Payment Methods
                                                  </h6>
                                                  <img
                                                       src="assets/images/demoes/demo26/payments.png"
                                                       alt="payment methods"
                                                       className="footer-payments m-b-3"
                                                       width={295}
                                                       height={32}
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              {/* End .col-lg-5 */}
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
                         {/* End .row */}
                    </div>
                    {/* End .footer-middle */}
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                         <p className="footer-copyright py-3 pr-4 mb-0">
                              © Porto eCommerce. 2021. All Rights Reserved
                         </p>
                         <div className="social-icons py-3">
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
