import Link from "next/link";
import React from "react";
import { payments } from "../Home/data";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer font2">
               <div className="container">
                    <div className="footer-top">
                         <div className="widget-newsletter d-flex align-items-center flex-column flex-md-row justify-content-center justify-content-md-between">
                              <div className="widget-newsletter-info text-center text-md-left">
                                   <h5 className="widget-newsletter-title text-uppercase">
                                        NEWSLETTER
                                   </h5>
                                   <p className="widget-newsletter-content mb-0">
                                        Get all the latest information on Events, Sales and Offers.
                                   </p>
                              </div>
                              <form action="#" className="mb-0 w-lg-max mt-2 mt-md-0">
                                   <div className="footer-submit-wrapper d-flex">
                                        <input
                                             type="email"
                                             className="form-control mb-0"
                                             placeholder="Email address..."
                                             size={40}
                                        />
                                        <button type="submit" className="btn btn-primary btn-sm">
                                             SUBMIT
                                        </button>
                                   </div>
                              </form>
                         </div>
                    </div>
                    <div className="footer-middle">
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
                              <div className="col-md-6 col-lg-3">
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
                              <div className="col-md-6 col-lg-3">
                                   <div className="widget">
                                        <h3 className="widget-title">Social Media</h3>
                                        <div className="widget-content">
                                             <div className="social-icons">
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
                                                       className="social-icon social-instagram icon-instagram"
                                                       target="_blank"
                                                       title="Instagram"
                                                  />
                                             </div>
                                        </div>
                                   </div>
                                   <div className="widget widget-payment">
                                        <h3 className="widget-title ls-n-10">PAYMENT METHODS</h3>
                                        <div className="widget-content">
                                             <div className="payment-icons">
                                                  {payments.map((pay) => (
                                                       <span
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
                         </div>
                    </div>
                    <div className="footer-bottom text-center">
                         <span className="footer-copyright">
                              Porto eCommerce. © 2021. All Rights Reserved
                         </span>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
