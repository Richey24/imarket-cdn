import React from "react";
import Link from "next/link";

const Footer = (props) => {
     const { static: staticProps, company } = props.props;
     console.log("===>", props);

     return (
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
                                                  <span className="contact-info-label">Phone:</span>
                                                  <span>{company?.phone}</span>
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
                                                  title="Instagram"
                                             />
                                        </div>
                                        {/* End .social-icons */}
                                   </div>
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}
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
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}
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
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}
                              <div className="col-lg-3 col-sm-6">
                                   <div className="widget widget-newsletter">
                                        <h4 className="widget-title">Subscribe newsletter</h4>
                                        <p>
                                             Get all the latest information on events, sales and
                                             offers. Sign up for newsletter:
                                        </p>
                                        <form action="#" className="mb-0">
                                             <input
                                                  type="email"
                                                  className="form-control m-b-3"
                                                  placeholder="Email address"
                                             />
                                             <input
                                                  type="submit"
                                                  className="btn btn-primary shadow-none"
                                                  defaultValue="Subscribe"
                                             />
                                        </form>
                                   </div>
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .footer-middle */}
               <div className="container">
                    <div className="footer-bottom">
                         <div className="container d-sm-flex align-items-center">
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
                    {/* End .footer-bottom */}
               </div>
               {/* End .container */}
          </footer>
     );
};

export default Footer;
