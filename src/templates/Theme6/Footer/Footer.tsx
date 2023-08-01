import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer">
               <div className="container">
                    <div className="footer-top top-border d-flex align-items-center justify-content-between flex-wrap">
                         {/* news letter */}
                         <div className="footer-right">
                              <div className="social-icons">
                                   <Link
                                        href="#"
                                        className="social-icon social-facebook icon-facebook"
                                        target="_blank"
                                   ></Link>
                                   <Link
                                        href="#"
                                        className="social-icon social-twitter icon-twitter"
                                        target="_blank"
                                   ></Link>
                                   <Link
                                        href="#"
                                        className="social-icon social-instagram icon-instagram"
                                        target="_blank"
                                   ></Link>
                              </div>
                         </div>
                    </div>

                    <div className="footer-middle">
                         <div className="row">
                              <div className="col-lg-6 col-xl-4">
                                   <div className="widget">
                                        <h4 className="text-xl font-bold text-gray-400 mb-1">
                                             Contact Info
                                        </h4>
                                        <div className="row gap-y-4 text-base">
                                             <div className="col-sm-6">
                                                  <div className="contact-widget">
                                                       <h4 className="text-lg text-gray-400">
                                                            ADDRESS:
                                                       </h4>
                                                       <Link href="#">
                                                            1234 Street Name, City, England
                                                       </Link>
                                                  </div>
                                             </div>

                                             <div className="col-sm-6 pl-xl-0">
                                                  <div className="contact-widget">
                                                       <h4 className="text-lg text-gray-400">
                                                            PHONE:
                                                       </h4>
                                                       <Link href="#">(123) 456-7890</Link>
                                                  </div>
                                             </div>

                                             <div className="col-sm-6">
                                                  <div className="contact-widget email">
                                                       <h4 className="text-lg text-gray-400">
                                                            EMAIL:
                                                       </h4>
                                                       <Link href="mailto:mail@example.com">
                                                            mail@example.com
                                                       </Link>
                                                  </div>
                                             </div>

                                             <div className="col-sm-6 pl-xl-0">
                                                  <div className="contact-widget">
                                                       <h4 className="text-lg text-gray-400">
                                                            WORKING DAYS/HOURS:
                                                       </h4>
                                                       <Link href="#">
                                                            Mon - Sun / 9:00 AM - 8:00 PM
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-sm-6 col-lg-3 col-xl-4">
                                   <div className="widget">
                                        <h4 className="text-xl font-bold text-gray-400 mb-1">
                                             My Account
                                        </h4>
                                        <div className="links link-parts row text-base">
                                             <ul className="link-part col-xl-4 mb-0">
                                                  <li>
                                                       <Link href="demo3-about.html">About Us</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="demo3-contact.html">
                                                            Contact Us
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href="dashboard.html">My Account</Link>
                                                  </li>
                                             </ul>
                                             <ul className="link-part col-xl-8">
                                                  <li className="pl-xl-2 ml-xl-1">
                                                       <Link href="#">Orders History</Link>
                                                  </li>
                                                  <li className="pl-xl-2 ml-xl-1">
                                                       <Link href="#">Advanced Search</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-sm-6 col-lg-3 col-xl-4">
                                   <div className="widget">
                                        <h4 className="text-xl font-bold text-gray-400 mb-1">
                                             Main Features
                                        </h4>
                                        <div className="links link-parts row text-base">
                                             <ul className="link-part col-xl-6 mb-0">
                                                  <li>
                                                       <Link href="#">
                                                            Super Fast HTML Template
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">
                                                            1st Fully working Ajax Theme
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">33 Unique Shop Layouts</Link>
                                                  </li>
                                             </ul>
                                             <ul className="link-part col-xl-6 pl-xl-2">
                                                  <li>
                                                       <Link href="#">Powerful Admin Panel</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">
                                                            Mobile &amp; Retina Optimized
                                                       </Link>
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
                                   Porto eCommerce. © 2021. All Rights Reserved
                              </span>
                         </div>

                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <div className="payment-icons mr-0">
                                   <span
                                        className="payment-icon visa"
                                        style={{
                                             backgroundImage:
                                                  "url(assets/images/payments/payment-visa.svg)",
                                        }}
                                   />
                                   <span
                                        className="payment-icon paypal"
                                        style={{
                                             backgroundImage:
                                                  "url(assets/images/payments/payment-paypal.svg)",
                                        }}
                                   />
                                   <span
                                        className="payment-icon stripe"
                                        style={{
                                             backgroundImage:
                                                  "url(assets/images/payments/payment-stripe.png)",
                                        }}
                                   />
                                   <span
                                        className="payment-icon verisign"
                                        style={{
                                             backgroundImage:
                                                  "url(assets/images/payments/payment-verisign.svg)",
                                        }}
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
