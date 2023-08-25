const Footer = () => {
     return (
          <div>
               <footer style={{ paddingTop: "50px" }} className="footer">
                    <div className="footer-middle">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-9">
                                        <div className="row row-sm">
                                             <div className="col-sm-4">
                                                  <div className="widget">
                                                       <h4 className="widget-title">
                                                            CONTACT INFO
                                                       </h4>
                                                       <ul className="contact-info mb-3">
                                                            <li>
                                                                 <span className="contact-info-label">
                                                                      Phone:
                                                                 </span>
                                                                 Toll Free{" "}
                                                                 <a href="tel:">(123) 456-7890</a>
                                                            </li>
                                                            <li>
                                                                 <span className="contact-info-label">
                                                                      Email:
                                                                 </span>{" "}
                                                                 <a href="mailto:mail@example.com">
                                                                      mail@example.com
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                       <div className="social-icons">
                                                            <a
                                                                 href="#"
                                                                 className="social-icon social-facebook icon-facebook"
                                                            ></a>
                                                            <a
                                                                 href="#"
                                                                 className="social-icon social-twitter icon-twitter"
                                                            ></a>
                                                            <a
                                                                 href="#"
                                                                 className="social-icon social-linkedin fab fa-linkedin-in"
                                                            ></a>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="col-sm-6 col-lg-3">
                                                  <div className="widget">
                                                       <h3 className="widget-title">Account</h3>
                                                       <div className="widget-content">
                                                            <ul>
                                                                 <li>
                                                                      <a href="dashboard.html">
                                                                           Dashboard
                                                                      </a>
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
                                                                      <a href="about.html">
                                                                           About us
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">Contact us</a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#">
                                                                           Shipping & Delivery
                                                                      </a>
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

                                   <div className="col-lg-3">
                                        <div className="widget widget-newsletter">
                                             <h4 className="widget-title">Subscribe newsletter</h4>
                                             <p>
                                                  Get all the latest information on events, sales
                                                  and offers. Sign up for newsletter:
                                             </p>
                                             <form action="#">
                                                  <input
                                                       type="email"
                                                       className="form-control"
                                                       placeholder="Email address"
                                                       required
                                                  />

                                                  <input
                                                       type="submit"
                                                       className="btn"
                                                       value="Go!"
                                                  />
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="container">
                         <div className="footer-bottom d-sm-flex align-items-center">
                              <div className="footer-left">
                                   <span className="footer-copyright">
                                        © Dreamtechlabs 2021. All Rights Reserved.
                                   </span>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
