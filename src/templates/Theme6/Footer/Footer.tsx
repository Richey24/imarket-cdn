const Footer = (): JSX.Element => {
     return (
          <div>
               <footer className="footer">
                    <div className="container-fluid">
                         <div className="footer-top">
                              <div className="widget widget-newsletter">
                                   <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-9">
                                             <h4 className="widget-title">Subscribe newsletter</h4>
                                             <p>
                                                  Get all the latest information on Events, Sales
                                                  and Offers. Sign up for newsletter today.
                                             </p>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-7 d-flex align-items-center">
                                             <form action="#" className="d-flex w-100 pb-2">
                                                  <input
                                                       type="email"
                                                       className="form-control mb-0"
                                                       placeholder="Enter Your Email address"
                                                       required
                                                  />
                                                  <button
                                                       type="submit"
                                                       className="btn btn-primary text-white"
                                                  >
                                                       Subscribe
                                                  </button>
                                             </form>
                                        </div>

                                        <div className="col-lg-2 col-md-12 col-sm-5 widget-social d-flex align-items-center justify-content-lg-end justify-content-start mt-2 mb-1 mb-sm-0 mt-sm-0">
                                             <div className="social-icons pb-1">
                                                  <a
                                                       href="#"
                                                       className="social-icon"
                                                       target="_blank"
                                                  >
                                                       <i className="icon-instagram"></i>
                                                  </a>
                                                  <a
                                                       href="#"
                                                       className="social-icon"
                                                       target="_blank"
                                                  >
                                                       <i className="icon-twitter"></i>
                                                  </a>
                                                  <a
                                                       href="#"
                                                       className="social-icon"
                                                       target="_blank"
                                                  >
                                                       <i className="icon-facebook"></i>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="footer-middle">
                         <div className="container-fluid">
                              <div className="row">
                                   <div className="col-lg-3">
                                        <div className="widget">
                                             <h4 className="widget-title pb-2 mb-1">
                                                  Contact Info
                                             </h4>
                                             <ul className="contact-info">
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Address:
                                                       </span>
                                                       1234 Street Name, City, England
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Phone:
                                                       </span>
                                                       Toll Free <a href="tel:">(123) 456-7890</a>
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
                                        </div>
                                   </div>

                                   <div className="col-lg-9">
                                        <div className="row footer-content">
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

                                             <div className="col-lg-3">
                                                  <div className="widget widget-time">
                                                       <h4 className="widget-title mb-1">
                                                            Working Days/Hours
                                                       </h4>
                                                       <ul className="contact-info">
                                                            <li>Mon - Sun / 9:00AM - 8:00PM</li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="footer-bottom d-sm-flex align-items-center">
                                             <div className="footer-left">
                                                  <span className="footer-copyright">
                                                       © Dreamtechlabs 2021. All Rights Reserved.
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
