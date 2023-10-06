import React from "react";
import { payments } from "../Home/data";

const Footer = (props) => {
     const { static: staticProps, company } = props.props;

     return (
          <footer className="footer bg-dark position-relative">
               <div className="footer-middle">
                    <div className="container position-static">
                         <div className="row">
                              <div className="col-lg-3 col-md-4">
                                   <div className="widget">
                                        <h4 className="widget-title font-weight-bold">
                                             Contact Info
                                        </h4>
                                        <ul className="contact-info">
                                             <li>
                                                  <span className="contact-info-label">
                                                       Address:
                                                  </span>
                                                  {company?.city + " " + company?.country}
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Phone:</span>
                                                  <a href="tel:">{company?.phone}</a>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Email:</span>
                                                  <a href="mailto:mail@example.com">
                                                       {company?.user_id?.email}
                                                  </a>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">
                                                       Working Days/Hours:
                                                  </span>{" "}
                                                  Mon - Sun / 9:00 AM - 8:00 PM
                                             </li>
                                        </ul>
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
                                                  title="instagram"
                                             />
                                        </div>
                                        {/* End .social-icons */}
                                   </div>
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}
                              <div className="col-lg-9 col-md-8">
                                   <div className="widget widget-newsletter">
                                        <h4 className="widget-title">Subscribe newsletter</h4>
                                        <div className="row align-items-center">
                                             <div className="col-lg-6 col-md-12 mb-1">
                                                  <p className="mb-0">
                                                       Get all the latest information on Events,
                                                       Sales and Offers. Sign up for newsletter
                                                       today.
                                                  </p>
                                             </div>
                                             {/* End .col-lg-6 */}
                                             <div className="col-lg-6 col-md-12 mb-1">
                                                  <form action="#" className="d-flex mb-0 w-100">
                                                       <input
                                                            type="email"
                                                            className="form-control mb-0"
                                                            placeholder="Email address"
                                                       />
                                                       <input
                                                            type="submit"
                                                            className="btn shadow-none"
                                                            style={{
                                                                 background: "#7aa93c",
                                                                 color: "#fff",
                                                            }}
                                                            defaultValue="Subscribe"
                                                       />
                                                  </form>
                                             </div>
                                             {/* End .col-lg-6 */}
                                        </div>
                                        {/* End .row */}
                                   </div>
                                   {/* End .widget */}
                                   <div className="row widget-middle">
                                        <div className="col-sm-6 col-lg-3">
                                             <div className="widget">
                                                  <h3 className="widget-title">Account</h3>
                                                  <div className="widget-content">
                                                       <ul>
                                                            <li>
                                                                 <a href="dashboard.html">
                                                                      Dashboard
                                                                 </a>
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
                                                                 <a href="#">
                                                                      Shipping &amp; Delivery
                                                                 </a>
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
                              {/* End .col-lg-9 */}
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .footer-middle */}
               <div className="container">
                    <div className="footer-bottom d-sm-flex align-items-center">
                         <div className="footer-left">
                              <span className="footer-copyright">
                                   © Copyright 2021. All Rights Reserved.
                              </span>
                         </div>
                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <div className="payment-icons mr-0">
                                   {payments.map((pay, idx) => (
                                        <span
                                             className="payment-icon visa"
                                             style={{
                                                  backgroundImage: `url(${pay.image})`,
                                             }}
                                             key={idx}
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
