import React from "react";
import Link from "next/link";

const Footer = (props) => {
     const { static: staticProps, company } = props.props;

     return (
          <div>
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
                                                       <a href="tel:">{company?.phone}</a>
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Email:
                                                       </span>{" "}
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
                                                  ></a>
                                                  <a
                                                       href="#"
                                                       className="social-icon social-twitter icon-twitter"
                                                       target="_blank"
                                                       title="Twitter"
                                                  ></a>
                                                  <a
                                                       href="#"
                                                       className="social-icon social-instagram icon-instagram"
                                                       target="_blank"
                                                       title="Instagram"
                                                  ></a>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-lg-3 col-sm-6">
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

                                   <div className="col-lg-3 col-sm-6">
                                        <div className="widget">
                                             <h4 className="widget-title tag-widget-title">
                                                  Popular Tags
                                             </h4>

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

                                   <div className="col-lg-3 col-sm-6">
                                        <div className="widget widget-newsletter">
                                             <h4 className="widget-title newsletter-title">
                                                  Subscribe newsletter
                                             </h4>
                                             <p>
                                                  Get all the latest information on Events,
                                                  <br />
                                                  Sales and Offers. Sign up for newsletter today.
                                             </p>
                                             <form action="#" className="mb-0">
                                                  <input
                                                       type="email"
                                                       className="form-control m-b-3"
                                                       placeholder="Email address"
                                                       required
                                                  />

                                                  <input
                                                       type="submit"
                                                       className="btn shadow-none"
                                                       value="Subscribe"
                                                  />
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="container">
                         <div className="footer-bottom">
                              <div className="container d-sm-flex align-items-center">
                                   <div className="footer-left">
                                        <span className="footer-copyright">
                                             © Dreamtechlabs 2021. All Rights Reserved.
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
