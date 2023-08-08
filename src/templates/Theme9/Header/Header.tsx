"use client";
import React from "react";
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

export default function Header() {
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
                              <div className="side-menu-wrapper text-uppercase d-none d-lg-block">
                                   <h2 className="side-menu-title">
                                        <a className="d-block btn-dark" href="#">
                                             <i className="fas fa-bars"></i>Shop By Category
                                        </a>
                                   </h2>

                                   <nav className="side-nav">
                                        <ul className="menu menu-vertical sf-arrows">
                                             <li className="active">
                                                  <a href="demo9.html">
                                                       <i className="sicon-home"></i>Home
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="demo9-shop.html" className="sf-with-ul">
                                                       <i className="sicon-briefcase"></i>Categories
                                                  </a>
                                                  <div className="megamenu megamenu-fixed-width megamenu-3cols">
                                                       <div className="row">
                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">
                                                                      VARIATION 1
                                                                 </a>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <a href="demo9-shop.html">
                                                                                Fullwidth Banner
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-banner-boxed-slider.html">
                                                                                Boxed Slider Banner
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-banner-boxed-image.html">
                                                                                Boxed Image Banner
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="demo9-shop.html">
                                                                                Left Sidebar
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-sidebar-right.html">
                                                                                Right Sidebar
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-off-canvas.html">
                                                                                Off Canvas Filter
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-horizontal-filter1.html">
                                                                                Horizontal Filter1
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-horizontal-filter2.html">
                                                                                Horizontal Filter2
                                                                           </a>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">
                                                                      VARIATION 2
                                                                 </a>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <a href="category-list.html">
                                                                                List Types
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-infinite-scroll.html">
                                                                                Ajax Infinite Scroll
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="demo9-shop.html">
                                                                                3 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-4col.html">
                                                                                4 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-5col.html">
                                                                                5 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-6col.html">
                                                                                6 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-7col.html">
                                                                                7 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-8col.html">
                                                                                8 Columns Products
                                                                           </a>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                            <div className="col-lg-4 p-0">
                                                                 <div className="menu-banner">
                                                                      <figure>
                                                                           <img
                                                                                src="assets/images/menu-banner.jpg"
                                                                                width="192"
                                                                                height="313"
                                                                                alt="Menu banner"
                                                                           />
                                                                      </figure>
                                                                      <div className="banner-content">
                                                                           <h4>
                                                                                <span className="">
                                                                                     UP TO
                                                                                </span>
                                                                                <br />
                                                                                <b className="">
                                                                                     50%
                                                                                </b>
                                                                                <i>OFF</i>
                                                                           </h4>
                                                                           <a
                                                                                href="demo9-shop.html"
                                                                                className="btn btn-sm btn-dark"
                                                                           >
                                                                                SHOP NOW
                                                                           </a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li>
                                                  <a
                                                       href="demo9-product.html"
                                                       className="sf-with-ul"
                                                  >
                                                       <i className="sicon-present"></i>Products
                                                  </a>
                                                  <div className="megamenu megamenu-fixed-width">
                                                       <div className="row">
                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">
                                                                      PRODUCT PAGES
                                                                 </a>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <a href="product.html">
                                                                                SIMPLE PRODUCT
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-variable.html">
                                                                                VARIABLE PRODUCT
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product.html">
                                                                                SALE PRODUCT
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product.html">
                                                                                FEATURED & ON SALE
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-custom-tab.html">
                                                                                WITH CUSTOM TAB
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-sidebar-left.html">
                                                                                WITH LEFT SIDEBAR
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-sidebar-right.html">
                                                                                WITH RIGHT SIDEBAR
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-addcart-sticky.html">
                                                                                ADD CART STICKY
                                                                           </a>
                                                                      </li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">
                                                                      PRODUCT LAYOUTS
                                                                 </a>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <a href="product-extended-layout.html">
                                                                                EXTENDED LAYOUT
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-grid-layout.html">
                                                                                GRID IMAGE
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-full-width.html">
                                                                                FULL WIDTH LAYOUT
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-sticky-info.html">
                                                                                STICKY INFO
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-sticky-both.html">
                                                                                LEFT & RIGHT STICKY
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-transparent-image.html">
                                                                                TRANSPARENT IMAGE
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="product-center-vertical.html">
                                                                                CENTER VERTICAL
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="#">
                                                                                BUILD YOUR OWN
                                                                           </a>
                                                                      </li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-4 p-0">
                                                                 <div className="menu-banner menu-banner-2">
                                                                      <figure>
                                                                           <img
                                                                                src="assets/images/menu-banner-1.jpg"
                                                                                alt="Menu banner"
                                                                                className="product-promo"
                                                                           />
                                                                      </figure>
                                                                      <i>OFF</i>
                                                                      <div className="banner-content">
                                                                           <h4>
                                                                                <span className="">
                                                                                     UP TO
                                                                                </span>
                                                                                <br />
                                                                                <b className="">
                                                                                     50%
                                                                                </b>
                                                                           </h4>
                                                                      </div>
                                                                      <a
                                                                           href="demo9-shop.html"
                                                                           className="btn btn-sm btn-dark"
                                                                      >
                                                                           SHOP NOW
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li>
                                                  <a href="#" className="sf-with-ul">
                                                       <i className="sicon-docs"></i>Pages
                                                  </a>
                                                  <ul>
                                                       <li>
                                                            <a href="wishlist.html">Wishlist</a>
                                                       </li>
                                                       <li>
                                                            <a href="cart.html">Shopping Cart</a>
                                                       </li>
                                                       <li>
                                                            <a href="checkout.html">Checkout</a>
                                                       </li>
                                                       <li>
                                                            <a href="dashboard.html">Dashboard</a>
                                                       </li>
                                                       <li>
                                                            <a href="demo9-about.html">About Us</a>
                                                       </li>

                                                       <li>
                                                            <a href="demo9-contact.html">
                                                                 Contact Us
                                                            </a>
                                                       </li>
                                                       <li>
                                                            <a href="login.html">Login</a>
                                                       </li>
                                                       <li>
                                                            <a href="forgot-password.html">
                                                                 Forgot Password
                                                            </a>
                                                       </li>
                                                  </ul>
                                             </li>

                                             <li>
                                                  <a href="demo9-about.html">
                                                       <i className="sicon-users"></i>About Us
                                                  </a>
                                             </li>
                                             <li className="item-menu-sale">
                                                  <a href="#" className="border-top-0">
                                                       HUGE SALE – 70% OFF
                                                  </a>
                                             </li>
                                        </ul>
                                   </nav>
                              </div>
                         </aside>
                    </div>
               </div>
          </header>
     );
}
