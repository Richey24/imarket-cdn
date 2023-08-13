import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer font2 footer-reveal">
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
                                                  className="social-icon social-instagram icon-instagram"
                                                  target="_blank"
                                             ></Link>
                                             <Link
                                                  href="#"
                                                  className="social-icon social-twitter icon-twitter"
                                                  target="_blank"
                                             ></Link>
                                             <Link
                                                  href="#"
                                                  className="social-icon social-facebook icon-facebook"
                                                  target="_blank"
                                             ></Link>
                                        </div>
                                   </div>

                                   <div className="widget mb-3">
                                        <h4 className="widget-title">Payment Methods</h4>

                                        <img
                                             src="assets/images/demoes/demo35/payment.png"
                                             alt="payment"
                                             width="240"
                                             height="32"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="footer-bottom">
                         <p className="footer-copyright text-lg-center ls-n-25 mb-0">
                              Porto eCommerce.&nbsp;&copy;&nbsp;&nbsp;2021.&nbsp;&nbsp;All Rights
                              Reserved.
                         </p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
