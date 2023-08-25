import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import product9 from "../../../assets/images/demoes/demo15/products/product-9.jpg";
import product3 from "../../../assets/images/demoes/demo15/products/product-3.jpg";
import product6 from "../../../assets/images/demoes/demo15/products/product-6.jpg";
import payments from "../../../assets/images/demoes/demo15/payment-icon.png";

const Footer = (props: any) => {
     const { static: staticProps, company } = props.props;
     return (
          <footer className="footer bg-dark ">
               <div className="container">
                    <div className="footer-top">
                         <div className="row">
                              <div className="col-lg-5">
                                   <div className="widget widget-about">
                                        <h4 className="widget-title">About Us</h4>
                                        <a href="demo15.html" className="logo mb-2">
                                             <Image
                                                  src={logo}
                                                  className="m-b-3"
                                                  width={110}
                                                  height={46}
                                                  alt="Porto Logo"
                                             />
                                        </a>
                                        <p className="mb-3">
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus lacus.
                                             <a href="#" className="text-white">
                                                  <strong>
                                                       <ins>read more...</ins>
                                                  </strong>
                                             </a>
                                        </p>
                                   </div>
                                   {/* End .widget */}
                                   <div>
                                        <div className="widget">
                                             <h4 className="widget-title">Contact Info</h4>
                                             <ul className="contact-info d-flex flex-wrap">
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Address:
                                                       </span>
                                                       {company?.city + " " + company?.country}
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Phone:
                                                       </span>
                                                       <span>{company?.phone}</span>
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Email:
                                                       </span>
                                                       <a href="mailto:mail@example.com">
                                                            {company?.user_id?.email}
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <span className="contact-info-label">
                                                            Working Days/Hours:
                                                       </span>
                                                       <a href="tel:">
                                                            Mon - Sun / 9:00 AM - 8:00 PM
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>
                                        {/* End .widget */}
                                        <div className="social-icons">
                                             <a
                                                  href="#"
                                                  className="social-icon social-facebook icon-facebook"
                                                  target="_blank"
                                                  title="Facebook"
                                             />
                                             <a
                                                  href="#"
                                                  className="social-icon social-twitter icon-twitter"
                                                  target="_blank"
                                                  title="Twitter"
                                             />
                                             <a
                                                  href="#"
                                                  className="social-icon social-instagram icon-instagram"
                                                  target="_blank"
                                                  title="Instagram"
                                             />
                                        </div>
                                   </div>
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-6 */}
                              <div className="col-lg-3">
                                   <div className="widget widget-product mb-3">
                                        <h4 className="widget-title">Featured Products</h4>
                                        <div className="product-default left-details product-widget">
                                             <figure>
                                                  <a href="demo15-product.html">
                                                       <Image
                                                            src={product9}
                                                            width={95}
                                                            height={95}
                                                            alt="product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <h3 className="product-title text-white">
                                                       <a href="demo15-product.html">
                                                            Woman Black Blouse
                                                       </a>
                                                  </h3>
                                                  {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                                  {/* End .product-container */}
                                                  <div className="price-box">
                                                       <span className="product-price">
                                                            $129.00 – $185.00
                                                       </span>
                                                  </div>
                                                  {/* End .price-box */}
                                             </div>
                                             {/* End .product-details */}
                                        </div>
                                        <div className="product-default left-details product-widget">
                                             <figure>
                                                  <a href="demo15-product.html">
                                                       <Image
                                                            src={product6}
                                                            width={95}
                                                            height={95}
                                                            alt="product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <h3 className="product-title text-white">
                                                       <a href="demo15-product.html">Jeans Wear</a>
                                                  </h3>
                                                  {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                                  {/* End .product-container */}
                                                  <div className="price-box">
                                                       <span className="product-price">
                                                            $185.00
                                                       </span>
                                                  </div>
                                                  {/* End .price-box */}
                                             </div>
                                             {/* End .product-details */}
                                        </div>
                                        <div className="product-default left-details product-widget">
                                             <figure>
                                                  <a href="demo15-product.html">
                                                       <Image
                                                            src={product3}
                                                            width={95}
                                                            height={95}
                                                            alt="product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <h3 className="product-title text-white">
                                                       <a href="demo15-product.html">
                                                            Porto Sticky Info
                                                       </a>
                                                  </h3>
                                                  {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                                  {/* End .product-container */}
                                                  <div className="price-box">
                                                       <span className="product-price">
                                                            $129.00
                                                       </span>
                                                  </div>
                                                  {/* End .price-box */}
                                             </div>
                                             {/* End .product-details */}
                                        </div>
                                   </div>
                                   {/* End .widget */}
                              </div>
                              <div className="col-lg-4">
                                   <div className="widget">
                                        <h4 className="widget-title">Twitter Feeds</h4>
                                        <div className="twitter-feed">
                                             <div className="twitter-feed-content">
                                                  <a
                                                       className="d-inline-block align-top text-white"
                                                       href="#"
                                                  >
                                                       <i className="mr-2 icon-twitter" />
                                                  </a>
                                                  <p className="d-inline-block m-b-4">
                                                       Oops, our twitter feed is unavailable right
                                                       now.
                                                       <br />
                                                       <a
                                                            className="meta"
                                                            href="http://twitter.com/swtheme"
                                                       >
                                                            Follow us on Twitter
                                                       </a>
                                                  </p>
                                             </div>
                                             {/* End .twitter-feed-content */}
                                        </div>
                                        {/* End .twitter-feed */}
                                   </div>
                                   {/* End .widget */}
                              </div>
                         </div>
                         {/* End .row */}
                    </div>
               </div>
               <div className="container">
                    <div className="footer-middle">
                         <div className="row">
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
                         {/* End .row */}
                    </div>
                    {/* End .footer-middle */}
               </div>
               <div className="container">
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                         <p className="footer-copyright py-3 pr-4 mb-0">
                              © Porto eCommerce. 2021. All Rights Reserved
                         </p>
                         <div className="footer-right mt-1 mt-sm-0">
                              <div className="payment-icons mr-0">
                                   <Image src={payments} alt="" />
                              </div>
                         </div>
                    </div>
                    {/* End .footer-bottom */}
               </div>
               {/* End .container */}
          </footer>
     );
};
export default Footer;
