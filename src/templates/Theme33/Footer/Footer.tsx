import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer font2 text-gray-900 bg-white">
               <div className="container">
                    <div className="footer-middle">
                         <div className="row">
                              <div className="col-lg-5 m-b-4">
                                   <Link href="demo-33.html" className="logo">
                                        <img
                                             src="assets/images/your-logo.png"
                                             alt="Logo"
                                             width="115"
                                             height="42"
                                        />
                                   </Link>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Praesent pulvinar feugiat quam, vitae aliquam urna egestas
                                        nec. sit amet
                                   </p>

                                   <div className="row ls-0">
                                        <div className="col-sm-6">
                                             <h6 className="text-uppercase mb-0">Questions?</h6>
                                             <h3>(123) 456-7890</h3>
                                        </div>
                                        <div className="col-sm-6">
                                             <h6 className="text-uppercase mb-0">
                                                  Payment Methods
                                             </h6>
                                             <img
                                                  src="assets/images/demoes/demo33/payments.jpg"
                                                  alt="payment methods"
                                                  className="footer-payments m-b-3"
                                                  width="186"
                                                  height="27"
                                             />
                                        </div>
                                   </div>
                              </div>

                              <div className="col-sm-6 col-lg-3">
                                   <div className="widget">
                                        <h3 className="widget-title !text-gray-900">Account</h3>
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
                                        <h3 className="widget-title !text-gray-900">About</h3>
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
                         </div>
                    </div>

                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                         <p className="footer-copyright py-3 pr-4 mb-0">
                              Porto eCommerce. &copy; 2021. All Rights Reserved
                         </p>

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
          </footer>
     );
};

export default Footer;
