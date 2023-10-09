import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import product9 from "../../../assets/images/demoes/demo15/products/product-9.jpg";
import product3 from "../../../assets/images/demoes/demo15/products/product-3.jpg";
import product6 from "../../../assets/images/demoes/demo15/products/product-6.jpg";
import payments from "../../../assets/images/demoes/demo15/payment-icon.png";
import { templateImages } from "@/appProvider/templateImages";
import Payments from "./Payments";

const Footer = (props: any) => {
     const { static: staticProps, company } = props.props;
     console.log("footerProps", company);
     return (
          <footer className="footer font2">
               <div className="footer-top">
                    <div className="container">
                         <div className="widget-newsletter d-lg-flex align-items-center flex-wrap">
                              <div className="footer-left d-md-flex flex-wrap align-items-center mr-5">
                                   <div className="info-box w-auto mr-5 my-3">
                                        <i className="far fa-envelope text-white mr-4" />
                                        <div className="widget-newsletter-info">
                                             <h4 className="line-height-1 text-white">
                                                  Get Special Offers and Savings
                                             </h4>
                                             <p className="line-height-1">
                                                  Get all the latest information on Events, Sales
                                                  and Offers.
                                             </p>
                                        </div>
                                   </div>
                                   <form action="#" className="my-3">
                                        <div className="footer-submit-wrapper d-flex">
                                             <input
                                                  type="email"
                                                  className="form-control font-italic"
                                                  placeholder="Enter Your E-mail Address..."
                                                  size={40}
                                                  required
                                             />
                                             <button type="submit" className="btn btn-sm">
                                                  Sign Up
                                             </button>
                                        </div>
                                   </form>
                              </div>
                              <div className="footer-right text-lg-right">
                                   <div className="social-icons my-3">
                                        <a
                                             href="#"
                                             className="social-icon social-facebook icon-facebook"
                                             target="_blank"
                                        />
                                        <a
                                             href="#"
                                             className="social-icon social-twitter icon-twitter"
                                             target="_blank"
                                        />
                                        <a
                                             href="#"
                                             className="social-icon social-linkedin fab fa-linkedin-in"
                                             target="_blank"
                                        />
                                   </div>
                                   {/* End .social-icons */}
                              </div>
                         </div>
                    </div>
               </div>
               <div className="container">
                    <div className="footer-middle">
                         <div className="row">
                              <div className="col-lg-3">
                                   <a href="demo27.html">
                                        <Image
                                             src={company?.logo}
                                             alt="Logo"
                                             className="logo"
                                             width={202}
                                             height={80}
                                        />
                                   </a>
                                   <div className="ls-0 footer-question mb-3">
                                        <h6 className="mb-0 text-white">QUESTIONS?</h6>
                                        <h3 className="mb-0 text-primary">{company?.phone}</h3>
                                   </div>
                              </div>
                              {/* End .col-lg-3 */}
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
                    <div className="footer-bottom">
                         <p className="footer-copyright text-lg-center mb-0">
                              © Porto eCommerce. 2021. All Rights Reserved
                         </p>
                    </div>
                    {/* End .footer-bottom */}
               </div>
               {/* End .container */}
          </footer>
     );
};
export default Footer;
