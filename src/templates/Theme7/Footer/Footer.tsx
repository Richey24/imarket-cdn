const Footer = () => {
     return (
          <footer className="footer">
               <div className="container">
                    <div className="footer-top top-border d-flex align-items-center justify-content-between flex-wrap">
                         <div className="footer-left widget-newsletter d-md-flex align-items-center">
                              <div className="widget-newsletter-info">
                                   <h5 className="widget-newsletter-title text-uppercase m-b-1">
                                        subscribe newsletter
                                   </h5>
                                   <p className="widget-newsletter-content mb-0">
                                        Get all the latest information on Events, Sales and Offers.
                                   </p>
                              </div>
                              <form action="#">
                                   <div className="footer-submit-wrapper d-flex">
                                        <input
                                             type="email"
                                             className="form-control"
                                             placeholder="Email address..."
                                             size={40}
                                             required
                                        />
                                        <button type="submit" className="btn btn-dark btn-sm">
                                             Subscribe
                                        </button>
                                   </div>
                              </form>
                         </div>
                         <div className="footer-right">
                              <div className="social-icons">
                                   <a
                                        href="#"
                                        className="social-icon social-facebook icon-facebook"
                                        target="_blank"
                                   />
                                   <a
                                        href="#"
                                        className="social-icon social-twitter icon-twitter"
                                        target="_blank"
                                   />
                                   <a
                                        href="#"
                                        className="social-icon social-instagram icon-instagram"
                                        target="_blank"
                                   />
                              </div>
                              {/* End .social-icons */}
                         </div>
                    </div>
                    <div className="footer-middle">
                         <div className="row">
                              <div className="col-lg-6 col-xl-4">
                                   <div className="widget">
                                        <h4 className="widget-title">Contact Info</h4>
                                        <div className="row">
                                             <div className="col-sm-6">
                                                  <div className="contact-widget">
                                                       <h4 className="widget-title">ADDRESS:</h4>
                                                       <a href="#">
                                                            1234 Street Name, City, England
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pl-xl-0">
                                                  <div className="contact-widget">
                                                       <h4 className="widget-title">PHONE:</h4>
                                                       <a href="#">(123) 456-7890</a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6">
                                                  <div className="contact-widget email">
                                                       <h4 className="widget-title">EMAIL:</h4>
                                                       <a href="mailto:mail@example.com">
                                                            mail@example.com
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pl-xl-0">
                                                  <div className="contact-widget">
                                                       <h4 className="widget-title">
                                                            WORKING DAYS/HOURS:
                                                       </h4>
                                                       <a href="#">Mon - Sun / 9:00 AM - 8:00 PM</a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-sm-6 col-lg-3">
                                   <div className="widget">
                                        <h3 className="widget-title">Account</h3>
                                        <div className="widget-content">
                                             <ul>
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
                                                       <a href="about.html">About us</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Contact us</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Shipping &amp; Delivery</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Privacy</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="footer-bottom d-sm-flex align-items-center">
                         <div className="footer-left">
                              <span className="footer-copyright">
                                   Porto eCommerce. © 2021. All Rights Reserved
                              </span>
                         </div>
                         <div className="footer-right ml-auto mt-1 mt-sm-0">
                              <div className="payment-icons mr-0">
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
                                                  "url(../../../assets/images/payments/payment-verisign.svg)",
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
