import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer font2">
               <div className="footer-top">
                    <div className="container">
                         <div className="widget-newsletter">
                              <div className="row align-items-center">
                                   <div className="col-sm-6 col-lg-4">
                                        <h4 className="newsletter-title line-height-1 text-uppercase m-b-1">
                                             Subscribe Newsletter
                                        </h4>
                                        <p className="newsletter-info">
                                             Get all the latest information on Events, Sales and
                                             Offers.
                                        </p>
                                   </div>

                                   <div className="col-sm-6 col-lg-8">
                                        <form action="#" className="mb-0">
                                             <div className="footer-submit-wrapper d-flex">
                                                  <input
                                                       type="email"
                                                       className="form-control mb-1"
                                                       placeholder="Email address..."
                                                       required
                                                  />
                                                  <button
                                                       type="submit"
                                                       className="btn btn-dark btn-sm"
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

               <div className="container">
                    <div className="footer-middle">
                         <div className="row">
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
                                   <div className="widget mb-3">
                                        <h4 className="widget-title">More Information</h4>

                                        <ul className="links">
                                             <li>
                                                  <Link href="#">Affiliates</Link>
                                             </li>
                                             <li>
                                                  <Link href="#">Refer a Friend</Link>
                                             </li>
                                             <li>
                                                  <Link href="#">Student Beans Offers</Link>
                                             </li>
                                             <li>
                                                  <Link href="#">Gift Vouchers</Link>
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="col-lg-3">
                                   <div className="widget mb-3">
                                        <h4 className="widget-title">Social Media</h4>

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

                                   <div className="widget mb-3">
                                        <h4 className="widget-title">Payment Methods</h4>

                                        <img
                                             src="assets/images/demoes/demo34/payments.png"
                                             alt="payment"
                                             width="240"
                                             height="32"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="footer-bottom">
                         <p className="footer-copyright text-lg-center mb-0">
                              Porto eCommerce. &copy; 2021. All Rights Reserved
                         </p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
