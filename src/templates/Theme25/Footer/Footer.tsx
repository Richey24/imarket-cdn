import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";

const Footer = (props) => {
     const { static: staticProps, company } = props.props;

     return (
          <div>
               <section className="newsletter-section bg-white text-center">
                    <div className="container">
                         <p className="text-dark m-b-2">
                              <i className="far fa-envelope"></i>
                         </p>
                         <h2 className="ls-n-10 mb-0">Subscribe to Our Newsletter</h2>
                         <h5 className="font-weight-normal text-body m-b-4">
                              Get all the latest information on Events, Sales and Offers.
                         </h5>
                         <form className="newsletter-form" action="#" method="get">
                              <input
                                   type="email"
                                   className="form-control font2 mb-0"
                                   placeholder="Enter Your E-mail Address..."
                                   required
                              />

                              <button type="submit" className="btn btn-submit text-white">
                                   Subscribe
                              </button>
                         </form>
                    </div>
               </section>
               <footer className="footer font2">
                    <div className="container">
                         <div className="footer-middle">
                              <div className="row">
                                   <div className="col-lg-5 mb-1 mb-lg-0">
                                        <div
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay="200"
                                        >
                                             <a href="demo25.html">
                                                  <Image
                                                       src={company.logo}
                                                       alt="Logo"
                                                       width="111"
                                                       height="44"
                                                       className="m-b-4"
                                                  />
                                             </a>
                                        </div>

                                        <div className="contact-widget">
                                             <div className="row ls-0">
                                                  <div className="col-md-2-5">
                                                       <h6 className="text-uppercase mb-0">
                                                            Questions?
                                                       </h6>
                                                       <h3 className="text-primary m-b-4">
                                                            (123) 456-7890
                                                       </h3>
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
                                                            <a href="#">Shipping & Delivery</a>
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

                         <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                              <p className="footer-copyright py-3 pr-4 mb-0">
                                   © Dreamtechlabs 2021. All Rights Reserved.
                              </p>

                              <div className="social-icons py-3">
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
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
