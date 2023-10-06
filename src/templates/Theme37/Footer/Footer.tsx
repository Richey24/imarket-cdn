import Link from "next/link";
import React from "react";
import { payments } from "../Home/data";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer font2">
               <div className="footer-middle">
                    <div className="container">
                         <div className="row">
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
                              <div className="col-sm-6 col-lg-3">
                                   <div className="widget">
                                        <h3 className="widget-title">More Information</h3>
                                        <div className="widget-content">
                                             <ul>
                                                  <li>
                                                       <a href="#">Affiliates</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Refer a Friend</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Student Beans Offers</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Gift Vouchers</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-sm-6 col-lg-3">
                                   <div className="widget">
                                        <h3 className="widget-title">Social Media</h3>
                                        <div className="widget-content">
                                             <div className="social-icons">
                                                  <a
                                                       href="#"
                                                       target="_blank"
                                                       className="social-icon"
                                                  >
                                                       <i className="fab fa-facebook-f" />
                                                  </a>
                                                  <a
                                                       href="#"
                                                       target="_blank"
                                                       className="social-icon"
                                                  >
                                                       <i className="fab fa-twitter" />
                                                  </a>
                                                  <a
                                                       href="#"
                                                       target="_blank"
                                                       className="social-icon"
                                                  >
                                                       <i className="icon-instagram" />
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="footer-bottom">
                    <div className="container d-sm-flex align-items-center">
                         <div className="footer-left">
                              <span className="footer-copyright">
                                   Porto eCommerce. © 2021. All Rights Reserved
                              </span>
                         </div>
                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <div className="payment-icons">
                                   {payments.map((pay, idx) => (
                                        <span
                                             key={idx}
                                             className="payment-icon visa"
                                             style={{
                                                  backgroundImage: `url(${pay.image})`,
                                             }}
                                        />
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
               {/* End .footer-bottom */}
          </footer>
     );
};

export default Footer;
