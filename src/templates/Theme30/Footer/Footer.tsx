import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer font2">
               <div className="footer-top">
                    <div className="container">
                         <div className="newsletter-widget row align-items-center">
                              <div className="col-md-6 mb-2 mb-md-0">
                                   <h3 className="mb-0">Sign Up to Newsletter</h3>
                                   <p>
                                        Get all the latest information on Events, Sales and Offers.
                                   </p>
                              </div>
                              <div className="col-md-6">
                                   <form action="#" method="get" className="mb-0">
                                        <div className="submit-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control"
                                                  name="q"
                                                  id="qqq"
                                                  placeholder="Enter your Email address"
                                                  required
                                             />
                                             <button className="btn" type="submit">
                                                  Submit
                                             </button>
                                        </div>
                                   </form>
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

                              <div className="col-sm-6 col-lg-3">
                                   <div className="widget">
                                        <h3 className="widget-title">Follow Us</h3>
                                        <div className="widget-content">
                                             <div className="social-icons">
                                                  <Link
                                                       href="#"
                                                       className="social-icon social-facebook icon-facebook"
                                                       target="_blank"
                                                       title="Facebook"
                                                  ></Link>
                                                  <Link
                                                       href="#"
                                                       className="social-icon social-twitter icon-twitter"
                                                       target="_blank"
                                                       title="Twitter"
                                                  ></Link>
                                                  <Link
                                                       href="#"
                                                       className="social-icon social-instagram icon-instagram"
                                                       target="_blank"
                                                       title="Instagram"
                                                  ></Link>
                                                  <Link
                                                       href="#"
                                                       className="social-icon social-linkedin fab fa-linkedin-in"
                                                       target="_blank"
                                                       title="linkedin"
                                                  ></Link>
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
                                        © copyright 2021. All Rights Reserved.
                                   </span>
                              </div>

                              <div className="footer-right ml-auto mt-1 mt-sm-0">
                                   {/* <img src="assets/images//demoes//demo30/payments_long.png" alt="payment" /> */}
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
