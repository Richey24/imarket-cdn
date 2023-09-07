import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import product9 from "../../../assets/images/demoes/demo15/products/product-9.jpg";
import product3 from "../../../assets/images/demoes/demo15/products/product-3.jpg";
import product6 from "../../../assets/images/demoes/demo15/products/product-6.jpg";
import payments from "../../../assets/images/demoes/demo15/payment-icon.png";
import { templateImages } from "@/appProvider/templateImages";
import Payments from "./Payments";
import Link from "next/link";

const Footer = (props: any) => {
     const { static: staticProps, company } = props.props;
     console.log("footerProps", company);
     return (
          <footer className="footer bg-dark">
               <div className="footer-middle">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-12 col-xl-2 col-lg-2 d-flex align-items-center">
                                   <a href="demo38.html">
                                        <Image
                                             src={company?.logo || templateImages.logoImage.logo2}
                                             alt="Logo"
                                             className="logo footer-logo"
                                             width={202}
                                             height={80}
                                        />
                                   </a>
                              </div>
                              {/* End .col-lg-3 */}
                              <div className="col-md-12 col-xl-3 col-lg-3">
                                   <div className="widget">
                                        <h4 className="widget-title">GET IN TOUCH</h4>
                                        <ul className="contact-info">
                                             <li>
                                                  <span className="contact-info-label">
                                                       Address
                                                  </span>
                                                  {company?.city + " " + company?.country}
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Phone</span>
                                                  <Link href={`tel:${company?.phone}`}>
                                                       {" "}
                                                       {company?.phone}
                                                  </Link>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Email</span>{" "}
                                                  <Link href={`mailto:${company?.user_id?.email}`}>
                                                       {company?.user_id?.email}
                                                  </Link>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">
                                                       Working Days/Hours
                                                  </span>{" "}
                                                  Mon - Sun / 9:00AM - 8:00PM
                                             </li>
                                        </ul>
                                        <div className="social-icons">
                                             <a
                                                  href="#"
                                                  className="social-icon social-instagram icon-instagram"
                                                  target="_blank"
                                                  title="Instagram"
                                             />
                                             <a
                                                  href="#"
                                                  className="social-icon social-twitter icon-twitter"
                                                  target="_blank"
                                                  title="Twitter"
                                             />
                                             <a
                                                  href="#"
                                                  className="social-icon social-facebook icon-facebook"
                                                  target="_blank"
                                                  title="Facebook"
                                             />
                                        </div>
                                        {/* End .social-icons */}
                                   </div>
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}
                              <div className="col-md-6 col-xl-3 col-lg-3 col-12">
                                   <div className="widget">
                                        <h4 className="widget-title">Customer Services</h4>
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
                              <div className="col-md-6 col-xl-4 col-lg-4 col-12">
                                   <div className="widget widget-newsletter">
                                        <h4 className="widget-title ls-n-10">
                                             Subscribe newsletter
                                        </h4>
                                        <p>
                                             Get all the latest information on events,
                                             <br /> sales and offers. Sign up for newsletter:
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
                                                  className="btn btn-outline-primary shadow-none"
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
                                        Porto Medical. ©{" "}
                                        <span className="d-inline-block">2021.</span>
                                        All Rights Reserved
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
