import Image from "next/image";
import LogoFooter from "../../../assets/images/logo-footer.png";
import logo from "../../../assets/images/logo.png";

import VisaPayment from "../../../assets/images/payments.png";
const Footer = () => {
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
                                                  src={logo}
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
                                                  123 Street Name, City, England
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Phone:</span>
                                                  <a href="tel:">(123) 456-7890</a>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Email:</span>{" "}
                                                  <a href="mailto:mail@example.com">
                                                       mail@example.com
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
                                             <li>
                                                  <a href="demo1-about.html">About Us</a>
                                             </li>
                                             <li>
                                                  <a href="#">Cart</a>
                                             </li>
                                             <li>
                                                  <a href="#">Checkout</a>
                                             </li>
                                             <li>
                                                  <a href="demo1-contact.html">Contact Us</a>
                                             </li>
                                             <li>
                                                  <a href="dashboard.html">Dashboard</a>
                                             </li>
                                             <li>
                                                  <a href="#">Order Tracking</a>
                                             </li>
                                             <li>
                                                  <a href="#">Orders History</a>
                                             </li>
                                             <li>
                                                  <a href="#">Privacy</a>
                                             </li>
                                             <li>
                                                  <a href="#">Shipping & Delivery</a>
                                             </li>
                                             <li>
                                                  <a href="#">Wishlist</a>
                                             </li>
                                        </ul>
                                   </div>
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}

                              <div className="col-lg-3 col-sm-6 pb-0">
                                   <div className="widget mb-1 mb-sm-3">
                                        <h4 className="widget-title">Popular Tags</h4>

                                        <div className="tagcloud">
                                             <a href="#">Bag</a>
                                             <a href="#">Black</a>
                                             <a href="#">Blue</a>
                                             <a href="#">Clothes</a>
                                             <a href="#">Fashion</a>
                                             <a href="#">Hub</a>
                                             <a href="#">Jean</a>
                                             <a href="#">Shirt</a>
                                             <a href="#">Skirt</a>
                                             <a href="#">Sports</a>
                                             <a href="#">Sweater</a>
                                             <a href="#">Winter</a>
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
                                   © Porto eCommerce. 2021. All Rights Reserved
                              </span>
                         </div>

                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <div className="payment-icons">
                                   <Image src={VisaPayment} alt="" width={270} height={80} />
                                   {/* <span className="payment-icon visa" style={{backgroundImage: `url(${VisaPayment})`}}></span>
                    <span className="payment-icon paypal" style={{backgroundImage: "url(assets/images/payments/payment-paypal.svg)"}}></span>
                    <span className="payment-icon stripe" style={{backgroundImage:"url(assets/images/payments/payment-stripe.png)"}}></span>
                    <span className="payment-icon verisign" style={{backgroundImage:  "url(assets/images/payments/payment-verisign.svg)"}}></span> */}
                              </div>
                         </div>
                    </div>
               </div>
               {/* End .footer-bottom */}
          </footer>
     );
};

export default Footer;
