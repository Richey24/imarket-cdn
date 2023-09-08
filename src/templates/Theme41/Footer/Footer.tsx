import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
     return (
          <div>
               <div className="container">
                    <div className="newsletter d-flex align-items-center flex-wrap">
                         <div className="info-box info-box-icon-left d-inline-flex">
                              <i className="icon-envolope"></i>

                              <div className="info-box-content">
                                   <h4 className="font-weight-bold text-capitalize">Subscribe To Our Newsletter</h4>
                                   <p>Get all the latest information on Events, Sales and Offers.</p>
                              </div>
                         </div>
                         <form action="#" className="d-flex justify-content-center mb-0">
                              <input type="email" className="form-control mb-0" placeholder="Your E-mail Address" required />
                              <button className="btn btn-secondary">subscribe now!</button>
                         </form>
                    </div>
               </div>
               <footer className="footer">
                    <div className="footer-middle">
                         <div className="container">
                              <div className="row">
                                   <div className="col-sm-6 col-lg-3">
                                        <div className="widget">
                                             <h3 className="widget-title">Account</h3>
                                             <div className="widget-content">
                                                  <ul>
                                                       <li><a href="dashboard.html">Dashboard</a></li>
                                                       <li><a href="#">Cart</a></li>
                                                       <li><a href="#">Checkout</a></li>
                                                       <li><a href="#">Order tracking</a></li>
                                                       <li><a href="#">Order history</a></li>
                                                       <li><a href="#">Wishlist</a></li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-sm-6 col-lg-3">
                                        <div className="widget">
                                             <h3 className="widget-title">About</h3>
                                             <div className="widget-content">
                                                  <ul>
                                                       <li><a href="about.html">About us</a></li>
                                                       <li><a href="#">Contact us</a></li>
                                                       <li><a href="#">Shipping & Delivery</a></li>
                                                       <li><a href="#">Privacy</a></li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-3 col-sm-6">
                                        <div className="widget">
                                             <h3 className="widget-title">Follow Us</h3>
                                             <div className="social-icons">
                                                  <a href="#" className="social-icon social-facebook icon-facebook" target="_blank"
                                                       title="Facebook"></a>
                                                  <a href="#" className="social-icon social-twitter icon-twitter" target="_blank"
                                                       title="Twitter"></a>
                                                  <a href="#" className="social-icon social-instagram icon-instagram" target="_blank"
                                                       title="Instagram"></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="container">
                         <div className="footer-bottom">
                              <div className="container d-sm-flex align-items-center">
                                   <div className="footer-left">
                                        <span className="footer-copyright">© Dreamtechlabs 2021. All Rights Reserved.</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
