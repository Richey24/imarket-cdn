"use client";
import React, { useState } from "react";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel";

interface InfoBoxItem {
     icon: string;
     title: string;
     description: string;
}

const InfoBox: React.FC<InfoBoxItem> = ({ icon, title, description }) => {
     return (
          <div className="info-box info-box-icon-left">
               <i className={icon} />
               <div className="info-box-content pt-1">
                    <h4>{title}</h4>
                    <p>{description}</p>
               </div>
               {/* End .info-box-content */}
          </div>
     );
};

export default function Header(props) {
     const { company, static: staticProps, categories } = props.props;
     const [activeMenuId, setActiveMenuId] = useState(0);
     const infoBoxItems: InfoBoxItem[] = [
          {
               icon: "icon-shipping",
               title: "FREE SHIPPING & RETURN",
               description: "Free Shipping on All Orders Over $99.",
          },
          {
               icon: "icon-money",
               title: "MONEY BACK GUARANTEE",
               description: "100% Money Back Guarantee",
          },
          {
               icon: "icon-support",
               title: "ONLINE SUPPORT 24/7",
               description: "Lorem Ipsum Dolor Sit Amet.",
          },
     ];

     const owlCarouselOptions = {
          dots: false,
          margin: 20,
          loop: false,
          responsive: {
               576: {
                    items: 2,
               },
               992: {
                    items: 3,
               },
          },
     };

     return (
          <header className="header mb-0" data-y="0">
               <div className="container">
                    <div className="pre-header w-100">
                         <OwlCarousel
                              className="feature-box-carousel owl-carousel owl-theme"
                              {...owlCarouselOptions}
                         >
                              {infoBoxItems.map((item, index) => (
                                   <InfoBox key={index} {...item} />
                              ))}
                         </OwlCarousel>
                    </div>
               </div>

               <div className="header-top sticky top-0">
                    <div className="container">
                         <div className="header-left">
                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                   <Link href="#">
                                        <i className="flag-us flag"></i>ENG
                                   </Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <Link href="#">
                                                       <i className="flag-us flag mr-2"></i>ENG
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="#">
                                                       <i className="flag-fr flag mr-2"></i>FRA
                                                  </Link>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="header-dropdown">
                                   <Link href="#" className="pl-0">
                                        USD
                                   </Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <Link href="#">EUR</Link>
                                             </li>
                                             <li>
                                                  <Link href="#">USD</Link>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>

                         <div className="header-right">
                              <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                                   <Link href="#">Links</Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <Link href="dashboard.html">Dashboard</Link>
                                             </li>
                                             <li>
                                                  <Link href="cart.html">Cart</Link>
                                             </li>
                                             <li>
                                                  <Link href="cart.html">Checkout</Link>
                                             </li>
                                             <li>
                                                  <Link href="wishlist.html">Wishlist</Link>
                                             </li>
                                             <li>
                                                  <Link href="about.html">About Us</Link>
                                             </li>
                                             <li>
                                                  <Link href="blog.html">Contact Us</Link>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                   <Link href="#">Order</Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <Link href="#">Order Tracking</Link>
                                             </li>
                                             <li>
                                                  <Link href="#">Order History</Link>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <span className="separator d-none d-lg-block"></span>
                              <div className="social-icons d-flex align-items-center">
                                   <Link
                                        target="_blank"
                                        rel="nofollow"
                                        className="social-icon social-facebook icon-facebook"
                                        href="#"
                                        title="Facebook"
                                   ></Link>
                                   <Link
                                        target="_blank"
                                        rel="nofollow"
                                        className="social-icon social-twitter icon-twitter"
                                        href="#"
                                        title="Twitter"
                                   ></Link>
                                   <Link
                                        target="_blank"
                                        rel="nofollow"
                                        className="social-icon social-instagram icon-instagram"
                                        href="#"
                                        title="Instagram"
                                   ></Link>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="container">
                    <div className="header-middle sticky-header d-flex w-100">
                         <div className="container">
                              <div className="header-left">
                                   <button
                                        className="mobile-menu-toggler text-white mr-2"
                                        type="button"
                                   >
                                        <i className="fas fa-bars"></i>
                                   </button>
                                   <Link href="demo9.html" className="logo">
                                        <img
                                             src="assets/images/your-logo.png"
                                             alt="Porto Logo"
                                             width="110"
                                             height="46"
                                        />
                                   </Link>
                              </div>

                              <div className="header-center flex-1 ml-lg-0 justify-content-end justify-content-lg-start  w-lg-max">
                                   <div className="header-icon header-search header-search-inline header-search-category w-lg-max d-none d-sm-block">
                                        <Link
                                             href="#"
                                             className="search-toggle text-white"
                                             role="button"
                                        >
                                             <i className="icon-search-3 pt-md-1 pr-2 mr-3 d-none d-sm-inline-block"></i>
                                        </Link>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control"
                                                       name="q"
                                                       id="q"
                                                       placeholder="Search..."
                                                       required
                                                  />

                                                  <div className="select-custom">
                                                       <select id="cat" name="cat">
                                                            <option value="">All Categories</option>
                                                            <option value="4">Fashion</option>
                                                            <option value="12">- Women</option>
                                                            <option value="13">- Men</option>
                                                            <option value="66">- Jewellery</option>
                                                            <option value="67">
                                                                 - Kids Fashion
                                                            </option>
                                                            <option value="5">Electronics</option>
                                                            <option value="21">- Smart TVs</option>
                                                            <option value="22">- Cameras</option>
                                                            <option value="63">- Games</option>
                                                            <option value="7">
                                                                 Home &amp; Garden
                                                            </option>
                                                            <option value="11">Motors</option>
                                                            <option value="31">
                                                                 - Cars and Trucks
                                                            </option>
                                                            <option value="32">
                                                                 - Motorcycles &amp; Powersports
                                                            </option>
                                                            <option value="33">
                                                                 - Parts &amp; Accessories
                                                            </option>
                                                            <option value="34">- Boats</option>
                                                            <option value="57">
                                                                 - Auto Tools &amp; Supplies
                                                            </option>
                                                       </select>
                                                  </div>
                                                  <button
                                                       className="btn icon-magnifier"
                                                       type="submit"
                                                  ></button>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                              <div className="header-right ml-0 ml-lg-auto">
                                   <div className="header-contact d-none d-lg-flex align-items-center">
                                        <i className="icon-phone-2"></i>
                                        <h6>
                                             Call us now
                                             <Link href="tel:#" className="font1">
                                                  +123 5678 890
                                             </Link>
                                        </h6>
                                   </div>

                                   <Link
                                        href="login.html"
                                        className="header-icon header-icon-user text-white"
                                   >
                                        <i className="icon-user-2 d-inline-flex-center"></i>
                                   </Link>

                                   <Link
                                        href="wishlist.html"
                                        className="header-icon d-inline-flex text-white"
                                   >
                                        <i className="icon-wishlist-2 d-inline-flex-center line-height-1"></i>
                                   </Link>

                                   <div className="dropdown cart-dropdown">
                                        <Link
                                             href="#"
                                             title="Cart"
                                             className="dropdown-toggle dropdown-arrow cart-toggle d-flex align-items-center"
                                             role="button"
                                             data-toggle="dropdown"
                                             aria-haspopup="true"
                                             aria-expanded="false"
                                             data-display="static"
                                        >
                                             <i className="minicart-icon"></i>
                                             <span className="cart-count badge-circle">3</span>
                                        </Link>

                                        <div className="cart-overlay"></div>

                                        <div className="dropdown-menu mobile-cart">
                                             <Link
                                                  href="#"
                                                  title="Close (Esc)"
                                                  className="btn-close"
                                             >
                                                  ×
                                             </Link>

                                             <div className="dropdownmenu-wrapper custom-scrollbar">
                                                  <div className="dropdown-cart-header">
                                                       Shopping Cart
                                                  </div>

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo9-product.html">
                                                                           Ultimate 3D Bluetooth
                                                                           Speaker
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>{" "}
                                                                      × $99.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <Link
                                                                      href="demo9-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <img
                                                                           src="assets/images/products/product-1.jpg"
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
                                                                      />
                                                                 </Link>

                                                                 <Link
                                                                      href="#"
                                                                      className="btn-remove"
                                                                      title="Remove Product"
                                                                 >
                                                                      <span>×</span>
                                                                 </Link>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo9-product.html">
                                                                           Brown Women Casual
                                                                           HandBag
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>{" "}
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <Link
                                                                      href="demo9-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <img
                                                                           src="assets/images/products/product-2.jpg"
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
                                                                      />
                                                                 </Link>

                                                                 <Link
                                                                      href="#"
                                                                      className="btn-remove"
                                                                      title="Remove Product"
                                                                 >
                                                                      <span>×</span>
                                                                 </Link>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo9-product.html">
                                                                           Circled Ultimate 3D
                                                                           Speaker
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>{" "}
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <Link
                                                                      href="demo9-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <img
                                                                           src="assets/images/products/product-3.jpg"
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
                                                                      />
                                                                 </Link>
                                                                 <Link
                                                                      href="#"
                                                                      className="btn-remove"
                                                                      title="Remove Product"
                                                                 >
                                                                      <span>×</span>
                                                                 </Link>
                                                            </figure>
                                                       </div>
                                                  </div>

                                                  <div className="dropdown-cart-total">
                                                       <span>SUBTOTAL:</span>

                                                       <span className="cart-total-price float-right">
                                                            $134.00
                                                       </span>
                                                  </div>

                                                  <div className="dropdown-cart-action">
                                                       <Link
                                                            href="cart.html"
                                                            className="btn btn-gray btn-block view-cart"
                                                       >
                                                            View Cart
                                                       </Link>
                                                       <Link
                                                            href="checkout.html"
                                                            className="btn btn-dark btn-block"
                                                       >
                                                            Checkout
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="container d-none  d-lg-block">
                    <div className="row">
                         <aside className="sidebar-home col-lg-3 mobile-sidebar toggle-menu-wrap">
                              <div className="side-menu-wrapper text-uppercase d-none d-lg-block ">
                                   <h2 className="side-menu-title">
                                        <a className="d-block btn-dark" href="#">
                                             <i className="fas fa-bars"></i>Shop By Category
                                        </a>
                                   </h2>

                                   <nav className="side-nav">
                                        <ul className="menu menu-vertical sf-arrows">
                                             {staticProps?.pageLinks?.map(
                                                  (
                                                       link: { name: string; url: string },
                                                       idx: number,
                                                  ) => (
                                                       <li
                                                            className={
                                                                 activeMenuId === idx
                                                                      ? "active"
                                                                      : ""
                                                            }
                                                            key={idx}
                                                            onClick={() => setActiveMenuId(idx)}
                                                       >
                                                            <Link href={link.url}>{link.name}</Link>
                                                       </li>
                                                  ),
                                             )}
                                        </ul>
                                   </nav>
                              </div>
                         </aside>
                    </div>
               </div>
          </header>
     );
}
