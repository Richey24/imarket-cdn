import Image from "next/image";
import LogoFooter from "../../../assets/images/logo-footer.png";
import logo from "../../../assets/images/logo.png";

import VisaPayment from "../../../assets/images/payments.png";
import { templateImages } from "@/appProvider/templateImages";
import Link from "next/link";
import Payments from "./Payments";
const Footer = (props: any): JSX.Element => {
     const { static: staticProps, company } = props.props;
     return (
          <footer className="footer bg-dark position-relative">
               <div className="footer-middle">
                    <div className="container position-static">
                         <div className="footer-ribbon">Get in touch</div>

                         <div className="row">
                              <div className="col-lg-3 col-sm-6 pb-2 pb-sm-0">
                                   <div className="widget">
                                        <h4 className="widget-title">About Us</h4>
                                        <a href="demo1.html">
                                             <Image
                                                  src={
                                                       company?.logo ||
                                                       templateImages.logoImage.logo2
                                                  }
                                                  width={80}
                                                  height={80}
                                                  alt="Logo"
                                                  className="logo-footer"
                                             />
                                        </a>
                                        <p className="m-b-4">
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus lacus. Duis
                                             nec vestibulum magna, et dapibus lacus.
                                        </p>
                                        <a href="#" className="read-more text-white">
                                             read more...
                                        </a>
                                   </div>
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}

                              <div className="col-lg-3 col-sm-6 pb-4 pb-sm-0">
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
                                                  <a href="tel:">{company?.phone}</a>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Email:</span>{" "}
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
                                                  className="social-icon social-linkedin fab fa-linkedin-in"
                                                  target="_blank"
                                                  title="Linkedin"
                                             ></a>
                                        </div>
                                        {/* End .social-icons */}
                                   </div>
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}

                              <div className="col-lg-3 col-sm-6 pb-2 pb-sm-0">
                                   <div className="widget">
                                        <h4 className="widget-title pb-1">Customer Service</h4>

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

                              <div className="col-lg-3 col-sm-6 pb-0">
                                   <div className="widget mb-1 mb-sm-3">
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
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .footer-middle */}

               <div className="container">
                    <div className="footer-bottom d-sm-flex align-items-center">
                         <div className="footer-left">
                              <span className="footer-copyright">
                                   © copyright 2021. All Rights Reserved.
                              </span>
                         </div>

                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <Payments />
                         </div>
                    </div>
               </div>
               {/* End .footer-bottom */}
          </footer>
     );
};

export default Footer;
