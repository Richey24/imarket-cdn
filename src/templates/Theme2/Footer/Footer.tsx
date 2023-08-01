import React from "react";
import visa from "../../../assets/images/payments/payment-visa.svg"
import paypal from "../../../assets/images/payments/payment-paypal.svg"
import stripe from "../../../assets/images/payments/payment-stripe.png"
import verisign from "../../../assets/images/payments/payment-verisign.svg"

const Footer = (): JSX.Element => {
     console.log(visa);

     return (

          <footer className="footer bg-dark position-relative">
               <div className="footer-middle">
                    <div className="container position-static">
                         <div className="footer-ribbon bg-primary text-white ls-0">
                              Get in touch
                         </div>
                         <div className="row">
                              <div className="col-lg-3 col-md-4">
                                   <div className="widget">
                                        <h4 className="widget-title font-weight-bold">Contact Info</h4>
                                        <ul className="contact-info">
                                             <li>
                                                  <span className="contact-info-label">Address:</span>123 Street Name, City, England
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Phone:</span><a href="tel:">(123)
                                                       456-7890</a>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Email:</span> <a
                                                       href="mailto:mail@example.com">mail@example.com</a>
                                             </li>
                                             <li>
                                                  <span className="contact-info-label">Working Days/Hours:</span> Mon - Sun / 9:00 AM
                                                  - 8:00 PM
                                             </li>
                                        </ul>
                                        <div className="social-icons">
                                             <a href="#" className="social-icon social-facebook icon-facebook" target="_blank"
                                                  title="Facebook"></a>
                                             <a href="#" className="social-icon social-twitter icon-twitter" target="_blank"
                                                  title="Twitter"></a>
                                             <a href="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank"
                                                  title="Linkedin"></a>
                                        </div>
                                   </div>
                              </div>

                              <div className="col-lg-9 col-md-8">
                                   <div className="widget widget-newsletter">
                                        <h4 className="widget-title">Subscribe newsletter</h4>
                                        <div className="row align-items-center">
                                             <div className="col-lg-6 col-md-12 mb-1">
                                                  <p className="mb-0">Get all the latest information on Events, Sales and Offers. Sign
                                                       up for newsletter today.</p>
                                             </div>

                                             <div className="col-lg-6 col-md-12 mb-1">
                                                  <form action="#" className="d-flex mb-0 w-100">
                                                       <input type="email" className="form-control mb-0" placeholder="Email Address"
                                                            required />

                                                       <input type="submit" className="btn btn-primary shadow-none" value="Subscribe" />
                                                  </form>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="row">
                                        <div className="col-sm-6 col-lg-3">
                                             <div className="widget">
                                                  <h3 className="widget-title">Account</h3>
                                                  <div className="widget-content">
                                                       <ul>
                                                            <li><a href="dashboard.html">Dashboard</a></li>
                                                            <li><a href="#">Cart</a></li>
                                                            <li><a href="#">Checkout</a></li>
                                                            <li><a href="#">Order tracking</a></li>
                                                            <li><a href="#">Order history</a></li>
                                                            <li><a href="#">Wishlist</a></li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                             <div className="widget">
                                                  <h3 className="widget-title">About</h3>
                                                  <div className="widget-content">
                                                       <ul>
                                                            <li><a href="about.html">About us</a></li>
                                                            <li><a href="#">Contact us</a></li>
                                                            <li><a href="#">Shipping & Delivery</a></li>
                                                            <li><a href="#">Privacy</a></li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="container">
                    <div className="footer-bottom d-sm-flex align-items-center">
                         <div className="footer-left">
                              <span className="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
                         </div>

                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <div className="payment-icons mr-0">
                                   <span className="payment-icon visa"
                                        style={{ backgroundImage: `url(${visa.src})` }}></span>
                                   <span className="payment-icon paypal"
                                        style={{ backgroundImage: `url(${paypal.src})` }}></span>
                                   <span className="payment-icon stripe"
                                        style={{ backgroundImage: `url(${stripe.src})` }}></span>
                                   <span className="payment-icon verisign"
                                        style={{ backgroundImage: `url(${verisign.src})` }}></span>
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
