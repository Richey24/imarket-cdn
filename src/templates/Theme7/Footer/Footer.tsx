import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
     return (
          <footer className="footer bg-dark position-relative">
               <div className="footer-middle">
                    <div className="container position-static">
                         <div className="row">
                              <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                   <div className="widget">
                                        <h4 className="widget-title">About Us</h4>
                                        <Link href="demo7.html">
                                             {/* <img src="assets/images/your-logo.png"  */}
                                        </Link>
                                        <p className="m-b-4 ls-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                             nec
                                             vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.
                                        </p>
                                        <div className="social-icons">
                                             <Link href="#" className="social-icon social-facebook icon-facebook" target="_blank"
                                                  title="Facebook"></Link>
                                             <Link href="#" className="social-icon social-twitter icon-twitter" target="_blank"
                                                  title="Twitter"></Link>
                                             <Link href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                                  target="_blank" title="Linkedin"></Link>
                                        </div>
                                   </div>
                              </div>

                              <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                   <div className="widget mb-2">
                                        <h4 className="widget-title pb-1">Customer Service</h4>

                                        <ul className="links">
                                             <li><Link href="demo4-dark-about.html">About Us</Link></li>
                                             <li><Link href="#">Cart</Link></li>
                                             <li><Link href="#">Checkout</Link></li>
                                             <li><Link href="#">Contact us</Link></li>
                                             <li><Link href="dashboard.html">Dashboard</Link></li>
                                             <li><Link href="#">Orders Tracking</Link></li>
                                             <li><Link href="#">Orders History</Link></li>
                                             <li><Link href="#">Privacy</Link></li>
                                             <li><Link href="#">Shipping & Delivery</Link></li>
                                             <li><Link href="#">Wishlist</Link></li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                   <div className="widget widget-post">
                                        <h4 className="widget-title pb-1">Latest News</h4>

                                        <ul className="links">
                                             <li><Link href="#">Top Jeans Collection<br /><span className="font1">JULY 23,
                                                  2021</span></Link></li>
                                             <li><Link href="#">Post Format Standard<br /><span className="font1">FEBRUARY 26,
                                                  2020</span></Link></li>
                                             <li><Link href="#">Post Format Video<br /><span className="font1">FEBRUARY 26,
                                                  2019</span></Link></li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                   <div className="widget widget-newsletter">
                                        <h4 className="widget-title">Subscribe newsletter</h4>
                                        <p className="mb-2 ls-0">Get all the latest information on events, sales and offers. Sign up
                                             for
                                             newsletter:
                                        </p>
                                        <form action="#" className="mb-0">
                                             <input type="email" className="form-control" placeholder="Email address" required />

                                             <input type="submit" className="btn btn-primary ls-10 shadow-none" value="Subscribe" />
                                        </form>
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
                                   {/* <span className="payment-icon visa"
                                             style="background-image: url(assets/images/payments/payment-visa.svg)"></span>
                                        <span className="payment-icon paypal"
                                             style="background-image: url(assets/images/payments/payment-paypal.svg)"></span>
                                        <span className="payment-icon stripe"
                                             style="background-image: url(assets/images/payments/payment-stripe.png)"></span>
                                        <span className="payment-icon verisign"
                                             style="background-image:  url(assets/images/payments/payment-verisign.svg)"></span> */}
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
