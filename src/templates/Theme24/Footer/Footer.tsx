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
     return (
          <footer className="footer">
               <div className="footer-top">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3">
                                   <div className="widget">
                                        <h4 className="widget-title">Contact Info</h4>
                                        <div className="contact-widget mb-1">
                                             <strong className="d-block">ADDRESS:</strong>
                                             <p className="mb-0">
                                                  {company?.city + " " + company?.country}
                                             </p>
                                        </div>
                                        <div className="contact-widget">
                                             <strong className="d-block">PHONE:</strong>
                                             <p className="mb-0">{company?.phone}</p>
                                        </div>
                                   </div>
                              </div>
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
                    </div>
               </div>
               <div className="container">
                    <div className="footer-middle">
                         <div className="row justify-content-between widget-newsletter m-0 no-gutters">
                              <div className="col-lg-4 mb-2">
                                   <div className="social-icons">
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
                                             className="social-icon social-instagram icon-instagram"
                                             target="_blank"
                                        />
                                   </div>
                              </div>
                              <div className="col-lg-4 mb-2">
                                   <h4 className="widget-newsletter-title font-weight-bold ls-0 text-uppercase">
                                        Subscribe Newsletter
                                   </h4>
                                   <p className="widget-newsletter-content">
                                        Get all the latest information on Events, Sales and Offers.
                                   </p>
                              </div>
                              <div className="col-lg-4 mb-2">
                                   <form action="#" className="mb-0">
                                        <div className="footer-submit-wrapper d-flex">
                                             <input
                                                  type="email"
                                                  className="form-control mb-0"
                                                  placeholder="Email address"
                                                  size={40}
                                                  required
                                             />
                                             <button
                                                  type="submit"
                                                  className="btn btn-primary btn-sm ls-0"
                                             >
                                                  Subscribe
                                             </button>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
                    <div className="footer-bottom d-sm-flex align-items-center">
                         <div className="footer-left">
                              <span className="footer-copyright">
                                   © copyright 2021 . All Rights Reserved.
                              </span>
                         </div>
                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <Payments />
                         </div>
                    </div>
                    {/* End .footer-bottom */}
               </div>
          </footer>
     );
};
export default Footer;
