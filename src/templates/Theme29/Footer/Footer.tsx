import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";

const Footer = (props) => {
     const { static: staticProps, company } = props.props;
     return (
          <div>
               <footer className="footer">
                    <div className="container">
                        
                         <div className="footer-middle row">
                              <div className="col-lg-5 col-xl-6">
                                   <div
                                        className="row mt-2"
                                        style={{ display: "flex", alignItems: "center" }}
                                   >
                                        <div className="col-md-4 col-lg-12 col-xl-4">
                                             <a href="demo29.html" className="logo-footer">
                                                  <Image
                                                       src={company?.logo}
                                                       width="112"
                                                       height="44"
                                                       alt="logo"
                                                  />
                                             </a>
                                        </div>
                                        <div className="row">
                                             <div className="col-sm-6 pr-sm-0">
                                                  <div className="contact-widget m-b-3">
                                                       <h4 className="widget-title font2">
                                                            ADDRESS:
                                                       </h4>
                                                       <a href="#">
                                                            {" "}
                                                            {company?.city + " " + company?.country}
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pl-sm-0">
                                                  <div className="contact-widget m-b-3">
                                                       <h4 className="widget-title font2">
                                                            PHONE:
                                                       </h4>
                                                       <a href="#">{company?.phone}</a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pr-sm-0">
                                                  <div className="contact-widget m-b-3">
                                                       <h4 className="widget-title font2">
                                                            EMAIL:
                                                       </h4>
                                                       <a href="mailto:mail@example.com">
                                                            {company?.user_id?.email}
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 pl-sm-0">
                                                  <div className="contact-widget m-b-3">
                                                       <h4 className="widget-title font2">
                                                            WORKING DAYS/HOURS:
                                                       </h4>
                                                       <a href="#">Mon - Sun / 9:00AM - 8:00PM</a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-7 col-xl-6">
                                   <div className="row">
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
                         <div className="footer-bottom d-lg-flex align-items-center">
                              <p className="footer-copyright font2 mb-0">
                                   © Dreamtechlabs 2021. All Rights Reserved.
                              </p>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
