import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = (props: any): JSX.Element => {
     const { static: staticProps, company } = props.props;
     return (
          <footer className="footer">
               <div className="footer-middle">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                                   <div className="widget">
                                        <h4 className="widget-title">About Us</h4>
                                        <a href="demo13.html">
                                             <Image
                                                  src={company?.logo}
                                                  alt="Logo"
                                                  className="logo footer-logo"
                                                  width={202}
                                                  height={80}
                                             />
                                        </a>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                                   <div className="widget mb-2">
                                        <h4 className="widget-title mb-1 pb-1">Contact Info</h4>
                                        <ul className="contact-info m-b-4">
                                             <li>
                                                  <span className="contact-info-label">
                                                       Address:
                                                  </span>
                                                  {company?.city + " " + company?.country}
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Phone:</span>
                                                  <span>{company?.phone}</span>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Email:</span>
                                                  <a href={`mailto:${company?.user_id?.email}`}>
                                                       {company?.user_id?.email}
                                                  </a>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">
                                                       Working Days/Hours:
                                                  </span>
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
                                                  className="social-icon social-linkedin fab fa-linkedin-in"
                                                  target="_blank"
                                                  title="Linkedin"
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                                   <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>
                                        <ul className="links">
                                             {staticProps?.customerService?.map(
                                                  (link: any, idx: number) => (
                                                       <li key={idx}>
                                                            <Link href={link.link}>
                                                                 {link.name}
                                                            </Link>
                                                       </li>
                                                  ),
                                             )}
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
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
               <div className="footer-bottom">
                    <div className="container d-sm-flex justify-content-between align-items-center flex-wrap">
                         <div className="footer-left">
                              <span className="footer-copyright">
                                   © copyright 2021. All Rights Reserved.
                              </span>
                         </div>
                         <div className="footer-right mt-1 mt-sm-0">
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
     );
};

export default Footer;
