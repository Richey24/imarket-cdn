import Link from "next/link";
import React from "react";

const Footer = (props): JSX.Element => {
     const { static: staticProps, company } = props.props;

     return (
          <footer className="footer p-0">
               <div className="footer-top">
                    <div className="container">
                         <div className="footer-left nav-links">
                              <Link href="dashboard.html">Dashboard</Link>
                              <Link href="#">Cart</Link>
                              <Link href="#">Checkout</Link>
                              <Link href="#">Wishlist</Link>
                              <Link href="#">Order tracking</Link>
                              <Link href="#">Order history</Link>
                              <Link href="#">About us</Link>
                              <Link href="#">Contact us</Link>
                              <Link href="#">Shipping & Delivery</Link>
                              <Link href="#">Privacy</Link>
                         </div>
                    </div>
               </div>
               <div className="footer-middle">
                    <div className="container">
                         <div className="footer-left">
                              <Link href="demo31.html">
                                   <img
                                        src={company?.logo}
                                        className="logo-footer"
                                        alt="logo image"
                                        width="110"
                                        height="46"
                                   />
                              </Link>
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
                         <img
                              src="assets/images/demoes/demo31/payments_long.png"
                              alt="payment_image"
                              width="180"
                              height="28"
                         />
                    </div>
               </div>
               <div className="footer-bottom">
                    <div className="container justify-content-center">
                         <p>© copyright 2021. All Rights Reserved.</p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
