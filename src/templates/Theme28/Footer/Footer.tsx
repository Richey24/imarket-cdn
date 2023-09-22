import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";

const Footer = () => {
     return (
          <div>
               <footer className="footer">
                    <div className="container">
                         <div className="footer-top">
                              <a href="demo28.html" className="footer-logo">
                                   <Image
                                        src={templateImages.logoImage.logo2}
                                        alt="footer=logo"
                                        width="202"
                                        height="80"
                                   />
                              </a>
                         </div>
                         <div className="footer-middle">
                              <ul className="link-btns scrolling-box">
                                   <li>
                                        <a href="#intro">Intro</a>
                                   </li>
                                   <li>
                                        <a href="#feature">Features</a>
                                   </li>
                                   <li>
                                        <a href="#tour">Tour</a>
                                   </li>
                                   <li>
                                        <a href="#specific">Specifications</a>
                                   </li>
                                   <li>
                                        <a href="#testimonial">Testimonials</a>
                                   </li>
                              </ul>
                              <form action=" #" method="get" className="mb-0">
                                   <div className="submit-wrapper">
                                        <label className="text-uppercase text-white mb-0">
                                             newsletter
                                        </label>
                                        <input
                                             type="search"
                                             className="form-control mb-0"
                                             name="q"
                                             id="q"
                                             placeholder="Email Address..."
                                             required
                                        />
                                        <button className="btn btn-primary" type="submit">
                                             GO
                                        </button>
                                   </div>
                              </form>
                         </div>
                         <div className="footer-bottom d-lg-flex justify-content-between align-items-center flex-wrap">
                              <p className="footer-copyright py-3 pr-4 mb-0">
                                   © Dreamtechlabs 2021. All Rights Reserved.
                              </p>

                              <div className="social-icons">
                                   <a
                                        href="#"
                                        className="social-icon social-facebook icon-facebook"
                                        target="_blank"
                                   ></a>
                                   <a
                                        href="#"
                                        className="social-icon social-twitter icon-twitter"
                                        target="_blank"
                                   ></a>
                                   <a
                                        href="#"
                                        className="social-icon social-linkedin fab fa-linkedin-in"
                                        target="_blank"
                                   ></a>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
