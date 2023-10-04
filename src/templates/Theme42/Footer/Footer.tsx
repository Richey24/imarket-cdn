import React from "react";
import Image from "next/image";
import SocialIcons from "@/templates/shared/SocialIcons";
import Link from "next/link";
import payments from "../../../assets/images/payments.png";
import ContactInfo from "@/templates/shared/Footer/Contact-Info";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";

const Footer = (props: any): JSX.Element => {
     const { static: staticProps, company } = props.props;

     return (
          <footer className="footer bg-dark position-relative">
               <div className="footer-middle">
                    <div className="container position-static">
                         <div className="row">
                              <div className="col-lg-2 col-sm-6 pb-2 pb-sm-0 d-flex align-items-center">
                                   <div className="widget m-b-3">
                                        <Logo company={company} />
                                   </div>
                              </div>

                              <div className="col-lg-3 col-sm-6 pb-4 pb-sm-0">
                                   <div className="widget mb-2">
                                        <ContactInfo
                                             staticProps={staticProps}
                                             company={company}
                                             title="Get In Touch"
                                        />
                                        <SocialIcons links={staticProps.socials} />
                                   </div>
                              </div>

                              <div className="col-lg-3 col-sm-6 pb-2 pb-sm-0">
                                   <div className="widget">
                                        <h4 className="widget-title pb-1">Customer Services</h4>

                                        <ul className="links">
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
                                             <li>
                                                  <a href="about.html">About us</a>
                                             </li>
                                             <li>
                                                  <a href="#">Contact us</a>
                                             </li>
                                             <li>
                                                  <a href="#">Shipping & Delivery</a>
                                             </li>
                                             <li>
                                                  <a href="#">Privacy</a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-sm-6 pb-0">
                                   <div className="widget widget-newsletter mb-1 mb-sm-3">
                                        <h4 className="widget-title">Subscribe Newsletter</h4>

                                        <p className="mb-2">
                                             Get all the latest information on events, sales and
                                             offers. Sign up for newsletter:
                                        </p>
                                        <form action="#" className="d-flex mb-0 w-100">
                                             <input
                                                  type="email"
                                                  className="form-control mb-0"
                                                  placeholder="Email address"
                                                  required
                                             />

                                             <input
                                                  type="submit"
                                                  className="btn shadow-none"
                                                  value="OK"
                                             />
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="container">
                    <div className="footer-bottom d-sm-flex align-items-center bg-dark">
                         <div className="footer-left">
                              <span className="footer-copyright">
                                   Porto eCommerce. © 2021. All Rights Reserved
                              </span>
                         </div>

                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <div className="payment-icons">
                                   <Image src={payments} alt="" />
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
