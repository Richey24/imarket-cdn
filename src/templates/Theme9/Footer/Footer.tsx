import Link from "next/link";
import React from "react";

const Footer = (props): JSX.Element => {
     const { static: staticProps, company } = props.props;

     return (
          <div className="container">
               <footer className="footer bg-dark">
                    <div className="footer-middle">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-3 col-sm-6">
                                        <div className="widget">
                                             <h4 className="widget-title">Contact Info</h4>
                                             <ul className="contact-info">
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Address:
                                                       </span>
                                                       {company?.city + " " + company?.country}
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Phone:
                                                       </span>
                                                       Toll Free <a href="tel:">{company?.phone}</a>
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Email:
                                                       </span>
                                                       <a
                                                            href={`mailto:${company?.user_id?.email}`}
                                                       >
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
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-sm-6 col-lg-3">
                                        <div className="widget">
                                             <h3 className="widget-title">Account</h3>
                                             <div className="widget-content">
                                                  <ul>
                                                       <li>
                                                            <Link href="dashboard.html">
                                                                 Dashboard
                                                            </Link>
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
                                                            <Link href="#">
                                                                 Shipping & Delivery
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="#">Privacy</Link>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-lg-3 col-sm-6">
                                        <div className="widget">
                                             <h4 className="widget-title">Popular Tags</h4>

                                             <div className="tagcloud">
                                                  {staticProps?.popularTags?.map(
                                                       (link: any, idx: number) => (
                                                            <Link key={idx} href={link.link}>
                                                                 {link.name}
                                                            </Link>
                                                       ),
                                                  )}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="container px-6">
                         <div className="footer-bottom d-sm-flex align-items-center">
                              <div className="footer-left">
                                   <span className="footer-copyright">
                                        © Porto eCommerce. 2021. All Rights Reserved
                                   </span>
                              </div>

                              <div className="footer-right ml-auto mt-1 mt-sm-0">
                                   <div className="payment-icons">
                                        <span
                                             className="payment-icon visa"
                                             style={{
                                                  backgroundImage:
                                                       "url(assets/images/payments/payment-visa.svg)",
                                             }}
                                        />
                                        <span
                                             className="payment-icon paypal"
                                             style={{
                                                  backgroundImage:
                                                       "url(assets/images/payments/payment-paypal.svg)",
                                             }}
                                        />
                                        <span
                                             className="payment-icon stripe"
                                             style={{
                                                  backgroundImage:
                                                       "url(assets/images/payments/payment-stripe.png)",
                                             }}
                                        />
                                        <span
                                             className="payment-icon verisign"
                                             style={{
                                                  backgroundImage:
                                                       "url(assets/images/payments/payment-verisign.svg)",
                                             }}
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
