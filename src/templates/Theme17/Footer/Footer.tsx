import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";

const Footer = () => {
     return (
          <div>
               <footer className="footer font2">
                    <div className="instagram-section">
                         <h2 className="section-title text-center">From Our Instagram</h2>
                         <h6 className="section-subtitle text-center font-weight-normal">
                              @portoecommerce
                         </h6>

                         <div
                              style={{ display: "flex", columnGap: "20px", overflow: "hidden" }}
                              className=""
                         >
                              <Image
                                   src={templateImages.demo17.instagramImage.insta1}
                                   alt="instagram"
                                   width={200}
                                   height={200}
                              />
                              <Image
                                   src={templateImages.demo17.instagramImage.insta2}
                                   alt="instagram"
                                   width={200}
                                   height={200}
                              />
                              <Image
                                   src={templateImages.demo17.instagramImage.insta3}
                                   alt="instagram"
                                   width={200}
                                   height={200}
                              />
                              <Image
                                   src={templateImages.demo17.instagramImage.insta4}
                                   alt="instagram"
                                   width={200}
                                   height={200}
                              />
                              <Image
                                   src={templateImages.demo17.instagramImage.insta5}
                                   alt="instagram"
                                   width={200}
                                   height={200}
                              />
                              <Image
                                   src={templateImages.demo17.instagramImage.insta6}
                                   alt="instagram"
                                   width={200}
                                   height={200}
                              />
                              <Image
                                   src={templateImages.demo17.instagramImage.insta7}
                                   alt="instagram"
                                   width={200}
                                   height={200}
                              />
                              <Image
                                   src={templateImages.demo17.instagramImage.insta8}
                                   alt="instagram"
                                   width={200}
                                   height={200}
                              />
                              <Image
                                   src={templateImages.demo17.instagramImage.insta9}
                                   alt="instagram"
                                   width={200}
                                   height={200}
                              />
                         </div>
                    </div>

                    <div className="container">
                         <div className="footer-middle">
                              <div className="row">
                                   <div className="col-lg-5 m-b-4">
                                        <a href="demo17.html">
                                             <Image
                                                  src={templateImages.logoImage.logo2}
                                                  width={200}
                                                  height={200}
                                                  alt="Logo"
                                                  className="m-b-3 logo"
                                             />
                                        </a>
                                        <p className="footer-desc">
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit.
                                             <br />
                                             Praesent pulvinar feugiat quam, vitae aliquam.
                                        </p>

                                        <div className="row ls-0 footer-question">
                                             <div className="col-5">
                                                  <h6 className="mb-0">QUESTIONS</h6>
                                                  <h3>1-888-123-456</h3>
                                             </div>

                                             <div className="col-7">
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
                                                            className="social-icon social-instagram icon-instagram"
                                                            target="_blank"
                                                            title="Instagram"
                                                       ></a>
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
                    </div>

                    <div className="bg-dark">
                         <div className="container">
                              <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                                   <div className="footer-left">
                                        <p className="footer-copyright py-3 pr-4 mb-0">
                                             © Dreamtechlabs 2021. All Rights Reserved.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
