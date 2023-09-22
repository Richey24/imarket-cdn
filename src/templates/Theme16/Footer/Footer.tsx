import React from "react";
import logo from "../../../assets/images/your-logo.png";
import { featuredProducts, payments } from "../Home/data";
import { ProductWidget } from "../Home/components/ProductWidget";
const Footer = () => {
     return (
          <footer className="footer ">
               <div className="container">
                    <div className="footer-top">
                         <div className="row">
                              <div className="col-lg-5">
                                   <div className="widget widget-about">
                                        <h4 className="widget-title">About Us</h4>
                                        <a href="demo16.html" className="logo mb-2">
                                             <img
                                                  src={logo.src}
                                                  className="footer-logo"
                                                  width={111}
                                                  height={46}
                                                  alt="Porto Logo"
                                             />
                                        </a>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus lacus.
                                             <a href="single.html" className="text-dark">
                                                  <strong>
                                                       <ins>read more...</ins>
                                                  </strong>
                                             </a>
                                        </p>
                                   </div>
                                   {/* End .widget */}
                                   <div>
                                        <div className="widget">
                                             <h4 className="widget-title">Contact Info</h4>
                                             <ul className="contact-info d-flex flex-wrap">
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Address:
                                                       </span>
                                                       1234 Street Name, City, England
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Phone:
                                                       </span>
                                                       <a href="tel:">(123) 456-7890</a>
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Email:
                                                       </span>
                                                       <a href="mailto:mail@example.com">
                                                            mail@example.com
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Working Days/Hours:
                                                       </span>
                                                       Mon - Sun / 9:00 AM - 8:00 PM
                                                  </li>
                                             </ul>
                                        </div>
                                        {/* End .widget */}
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
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-6 */}
                              <div className="col-lg-3 col-sm-6">
                                   <div className="widget widget-products">
                                        <h4 className="widget-title">Featured Products</h4>
                                        {featuredProducts.map((product) => (
                                             <ProductWidget {...product} />
                                        ))}
                                   </div>
                                   {/* End .widget */}
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                   <div className="widget">
                                        <h4 className="widget-title">Twitter Feed</h4>
                                        <div className="twitter-feed">
                                             <div className="twitter-feed-content">
                                                  <a
                                                       className="d-inline-block align-top text-dark"
                                                       href="#"
                                                  >
                                                       <i className="mr-1 icon-twitter" />
                                                  </a>
                                                  <p className="d-inline-block">
                                                       Oops, our twitter feed is unavailable right
                                                       now.
                                                       <br />
                                                       <a
                                                            className="meta"
                                                            href="http://twitter.com/swtheme"
                                                       >
                                                            Follow us on Twitter
                                                       </a>
                                                  </p>
                                             </div>
                                             {/* End .twitter-feed-content */}
                                        </div>
                                        {/* End .twitter-feed */}
                                   </div>
                                   {/* End .widget */}
                              </div>
                         </div>
                         {/* End .row */}
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
               </div>
               <div className="container">
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                         <p className="footer-copyright py-3 pr-4 mb-0">
                              © Porto eCommerce. 2021. All Rights Reserved
                         </p>
                         <div className="footer-right mt-1 mt-sm-0">
                              <div className="payment-icons mr-0">
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
                    {/* End .footer-bottom */}
               </div>
               {/* End .container */}
          </footer>
     );
};

export default Footer;
