import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer p-0">
               <div className="footer-top bg-dark">
                    <div className="container d-flex align-items-center justify-content-between flex-wrap">
                         <div className="widget-newsletter pl-3 d-md-flex align-items-center">
                              <div className="widget-newsletter-info">
                                   <h5 className="widget-newsletter-title text-uppercase m-b-1 text-white">
                                        SIGN UP TO NEWSLETTER
                                   </h5>
                                   <p className="widget-newsletter-content font2 mb-0">
                                        Get all the latest information..
                                   </p>
                              </div>
                              <form action="#" className="mb-0">
                                   <div className="footer-submit-wrapper d-flex  mt-2 mb-1 mt-md-0 mb-md-0">
                                        <input
                                             type="email"
                                             className="form-control bg-dark"
                                             placeholder="Enter your e-mail address"
                                             required
                                        />
                                        <button type="submit" className="btn btn-dark btn-sm">
                                             Submit
                                        </button>
                                   </div>
                              </form>
                         </div>
                    </div>

                    <div className="porto-content-box">
                         <h4>20$ OFF</h4>
                         <h3>GOPORTO</h3>
                         <span>USE COUPONS</span>

                         <Link href="javascript:;" className="box-close">
                              ×
                         </Link>
                    </div>
               </div>

               <div className="container">
                    <div className="footer-middle">
                         <div className="row">
                              <div className="col-lg-4">
                                   <div className="info-box info-box-icon-left text-white justify-content-start">
                                        <i className="icon-shipping"></i>

                                        <div className="info-box-content">
                                             <h4>FREE SHIPPING &amp; RETURN</h4>
                                             <p className="font2">
                                                  Free shipping on all orders over $99.
                                             </p>
                                        </div>
                                   </div>

                                   <div className="info-box info-box-icon-left text-white justify-content-start">
                                        <i className="icon-money"></i>

                                        <div className="info-box-content">
                                             <h4>MONEY BACK GUARANTEE</h4>
                                             <p className="font2">100% money back guarantee</p>
                                        </div>
                                   </div>

                                   <div className="info-box info-box-icon-left text-white justify-content-start">
                                        <i className="icon-support"></i>

                                        <div className="info-box-content">
                                             <h4>LIVE SUPPORT</h4>
                                             <p className="font2">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                   </div>
                              </div>

                              <div className="col-sm-6 col-lg-3">
                                   <div className="widget">
                                        <h3 className="widget-title">Account</h3>
                                        <div className="widget-content">
                                             <ul>
                                                  <li>
                                                       <Link href="dashboard.html">Dashboard</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">Cart</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">Checkout</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">Order tracking</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">Order history</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">Wishlist</Link>
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
                                                       <Link href="about.html">About us</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">Contact us</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">Shipping & Delivery</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">Privacy</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>

                              <div className="col-lg-3">
                                   <div className="widget-group">
                                        <div className="widget mb-3">
                                             <h3 className="widget-title">Follow Us</h3>
                                             <div className="widget-content">
                                                  <div className="social-icons ml-1">
                                                       <Link
                                                            href="#"
                                                            className="social-icon social-facebook"
                                                            target="_blank"
                                                            title="Facebook"
                                                       >
                                                            <i className="icon-facebook"></i>
                                                       </Link>
                                                       <Link
                                                            href="#"
                                                            className="social-icon social-twitter"
                                                            target="_blank"
                                                            title="Twitter"
                                                       >
                                                            <i className="icon-twitter"></i>
                                                       </Link>
                                                       <Link
                                                            href="#"
                                                            className="social-icon social-instagram"
                                                            target="_blank"
                                                            title="instagram"
                                                       >
                                                            <i className="icon-instagram"></i>
                                                       </Link>

                                                       <Link
                                                            href="#"
                                                            className="social-icon social-linkedin"
                                                            target="_blank"
                                                            title="Linkedin"
                                                       >
                                                            <i className="fab fa-linkedin-in"></i>
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="widget">
                                             <h3 className="widget-title">Payment Methods</h3>
                                             <div className="widget-content">
                                                  <img
                                                       src="assets/images/demoes/demo32/payments_long.png"
                                                       alt="payment image"
                                                       width="201"
                                                       height="31"
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="footer-bottom flex-column flex-sm-row">
                         <p>Porto eCommerce. © 2021. All Rights Reserved</p>
                         <ul>
                              <li>
                                   <Link href="#">Affiliates</Link>
                              </li>
                              <li>
                                   <Link href="#">Privacy Policy</Link>
                              </li>
                              <li>
                                   <Link href="#">Terms & Conditions</Link>
                              </li>
                         </ul>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
