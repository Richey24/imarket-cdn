import React from "react";
import Link from "next/link";
import Image from "next/image";
import CopyRight from "@/templates/shared/Footer/Copy-Right";
import SocialIcons from "@/templates/shared/SocialIcons";
import { templateImages } from "@/appProvider/templateImages";

const Footer = (props: any): JSX.Element => {
     const { static: staticProps, company } = props.props;

     return (
          <footer className="footer bg-dark position-relative">
               <div className="footer-middle">
                    <div className="container position-static">
                         <div className="row">
                              <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                   <div className="widget">
                                        <h4 className="widget-title">About Us</h4>
                                        <a href="demo7.html">
                                             <Link href="demo1.html">
                                                  <Image
                                                       src={
                                                            company?.logo ||
                                                            templateImages.logoImage.logo2
                                                       }
                                                       width={80}
                                                       height={80}
                                                       alt="Logo"
                                                       className="logo-footer"
                                                  />
                                             </Link>{" "}
                                        </a>
                                        <p className="m-b-4 ls-0">
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus lacus. Duis
                                             nec vestibulum magna, et dapibus lacus.
                                        </p>
                                        <SocialIcons />
                                   </div>
                              </div>

                              <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                   <div className="widget mb-2">
                                        <h4 className="widget-title pb-1">Customer Service</h4>

                                        <ul className="links">
                                             <li>
                                                  <a href="demo4-dark-about.html">About Us</a>
                                             </li>
                                             <li>
                                                  <a href="#">Cart</a>
                                             </li>
                                             <li>
                                                  <a href="#">Checkout</a>
                                             </li>
                                             <li>
                                                  <a href="#">Contact us</a>
                                             </li>
                                             <li>
                                                  <a href="dashboard.html">Dashboard</a>
                                             </li>
                                             <li>
                                                  <a href="#">Orders Tracking</a>
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
                              </div>

                              <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                   <div className="widget widget-post">
                                        <h4 className="widget-title pb-1">Latest News</h4>

                                        <ul className="links">
                                             <li>
                                                  <a href="#">
                                                       Top Jeans Collection
                                                       <br />
                                                       <span className="font1">JULY 23, 2021</span>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="#">
                                                       Post Format Standard
                                                       <br />
                                                       <span className="font1">
                                                            FEBRUARY 26, 2020
                                                       </span>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="#">
                                                       Post Format Video
                                                       <br />
                                                       <span className="font1">
                                                            FEBRUARY 26, 2019
                                                       </span>
                                                  </a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                   <div className="widget widget-newsletter">
                                        <h4 className="widget-title">Subscribe newsletter</h4>
                                        <p className="mb-2 ls-0">
                                             Get all the latest information on events, sales and
                                             offers. Sign up for newsletter:
                                        </p>
                                        <form action="#" className="mb-0">
                                             <input
                                                  type="email"
                                                  className="form-control"
                                                  placeholder="Email address"
                                                  required
                                             />

                                             <input
                                                  type="submit"
                                                  className="btn btn-primary ls-10 shadow-none"
                                                  value="Subscribe"
                                             />
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="container">
                    <CopyRight name={company.company_name} />
               </div>
          </footer>
     );
};

export default Footer;
