import { templateImages } from "@/appProvider/templateImages";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = (props): JSX.Element => {
     const { static: staticProps, company } = props.props;
     return (
          <footer className="footer font2">
               <div className="container">
                    <div className="footer-middle">
                         <div className="row">
                              <div className="col-lg-5">
                                   <a href="demo26.html">
                                        <img
                                             src={company?.logo}
                                             alt="Logo"
                                             width={111}
                                             height={44}
                                             className="m-b-4"
                                        />
                                   </a>
                                   <div className="row">
                                        <div className="col-sm-6 pr-sm-0">
                                             <div className="contact-widget m-b-3">
                                                  <h4 className="widget-title font2">ADDRESS:</h4>
                                                  <a href="#">
                                                       {" "}
                                                       {company?.city + " " + company?.country}
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 pl-sm-0">
                                             <div className="contact-widget m-b-3">
                                                  <h4 className="widget-title font2">PHONE:</h4>
                                                  <a href="#">{company?.phone}</a>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 pr-sm-0">
                                             <div className="contact-widget m-b-3">
                                                  <h4 className="widget-title font2">EMAIL:</h4>
                                                  <a href="mailto:mail@example.com">
                                                       {company?.user_id?.email}
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 pl-sm-0">
                                             <div className="contact-widget m-b-3">
                                                  <h4 className="widget-title font2">
                                                       WORKING DAYS/HOURS:
                                                  </h4>
                                                  <a href="#">Mon - Sun / 9:00AM - 8:00PM</a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              {/* End .col-lg-5 */}
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
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                         <p className="footer-copyright py-3 pr-4 mb-0">
                              © Porto eCommerce. 2021. All Rights Reserved
                         </p>
                         <div className="social-icons py-3">
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
                                   className="social-icon social-linkedin fab fa-linkedin-in"
                                   target="_blank"
                                   title="Linkedin"
                              />
                         </div>
                         {/* End .social-icons */}
                    </div>
                    {/* End .footer-bottom */}
               </div>
               {/* End .container */}
          </footer>
     );
};

export default Footer;
