"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
     return (
          <header className="header p-0">
               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <button className="mobile-menu-toggler" type="button">
                                   <i className="fas fa-bars"></i>
                              </button>
                              <a href="demo31.html" className="logo">
                                   <img src="assets/images/your-logo.png" alt="Porto Logo" />
                              </a>
                         </div>
                         <div className="header-center">
                              <nav className="main-nav">
                                   <ul className="menu">
                                        <li className="active">
                                             <a href="demo31-shop.html">
                                                  <i className="icon-joystick font-size-lg"></i>
                                                  Games
                                             </a>
                                             <div className="megamenu megamenu-fixed-width megamenu-3cols">
                                                  <div className="row">
                                                       <div className="col-lg-4">
                                                            <a href="#" className="nolink">
                                                                 VARIATION 1
                                                            </a>
                                                            <ul className="submenu">
                                                                 <li>
                                                                      <a href="category.html">
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
                                                                      <a href="category.html">
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
                                                                      <a href="category.html">
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
                                                                           alt="Menu banner"
                                                                           width="300"
                                                                           height="300"
                                                                      />
                                                                 </figure>
                                                                 <div className="banner-content">
                                                                      <h4>
                                                                           <span className="">
                                                                                UP TO
                                                                           </span>
                                                                           <br />
                                                                           <b className="">50%</b>
                                                                           <i>OFF</i>
                                                                      </h4>
                                                                      <a
                                                                           href="category.html"
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
                                        <li className="">
                                             <a href="demo31-product.html">
                                                  <i className="icon-bars mr-3"></i>Products
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
                                                                      <a href="#">BUILD YOUR OWN</a>
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
                                                                           width="380"
                                                                           height="790"
                                                                      />
                                                                 </figure>
                                                                 <i>OFF</i>
                                                                 <div className="banner-content">
                                                                      <h4>
                                                                           <span className="">
                                                                                UP TO
                                                                           </span>
                                                                           <br />
                                                                           <b className="">50%</b>
                                                                      </h4>
                                                                 </div>
                                                                 <a
                                                                      href="category.html"
                                                                      className="btn btn-sm btn-dark"
                                                                 >
                                                                      SHOP NOW
                                                                 </a>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </li>

                                        <li className="menu-deal">
                                             <a href="#">
                                                  <i className="icon-tag-percent mr-3"></i>Deals
                                             </a>
                                        </li>
                                   </ul>
                              </nav>
                         </div>
                         <div className="header-right">
                              <a
                                   href="login.html"
                                   className="header-icon header-icon-user mb-0"
                                   title="Login"
                              >
                                   <i className="icon-user-2"></i>
                              </a>

                              <div className="header-icon header-search header-search-popup header-search-category d-none d-sm-block mb-0">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier"></i>
                                   </a>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control"
                                                  name="q"
                                                  id="q"
                                                  placeholder="I'm searching for..."
                                                  required
                                             />
                                             <div className="select-custom">
                                                  <select id="cat" name="cat">
                                                       <option value="">All Categories</option>
                                                       <option value="4">Fashion</option>
                                                       <option value="12">- Women</option>
                                                       <option value="13">- Men</option>
                                                       <option value="66">- Jewellery</option>
                                                       <option value="67">- Kids Fashion</option>
                                                       <option value="5">Electronics</option>
                                                       <option value="21">- Smart TVs</option>
                                                       <option value="22">- Cameras</option>
                                                       <option value="63">- Games</option>
                                                       <option value="7">Home &amp; Garden</option>
                                                       <option value="11">Motors</option>
                                                       <option value="31">- Cars and Trucks</option>
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
                                                  className="btn icon-search-3"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <a
                                   href="wishlist.html"
                                   className="header-icon header-icon-wishlist"
                                   title="Wishlist"
                              >
                                   <i className="icon-wishlist-2"></i>
                              </a>

                              <div className="dropdown cart-dropdown">
                                   <a
                                        href="#"
                                        title="Cart"
                                        className="dropdown-toggle dropdown-arrow cart-toggle"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-display="static"
                                   >
                                        <i className="minicart-icon"></i>
                                        <span className="cart-count badge-circle">3</span>
                                   </a>

                                   <div className="cart-overlay"></div>

                                   <div className="dropdown-menu mobile-cart">
                                        <a href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </a>

                                        <div className="dropdownmenu-wrapper custom-scrollbar">
                                             <div className="dropdown-cart-header">
                                                  Shopping Cart
                                             </div>

                                             <div className="dropdown-cart-products">
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo31-product.html">
                                                                      Ultimate 3D Bluetooth Speaker
                                                                 </a>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>
                                                                 × $99.00
                                                            </span>
                                                       </div>

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo31-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo31/products/small/product-1.jpg"
                                                                      alt="product"
                                                                      width="80"
                                                                      height="80"
                                                                 />
                                                            </a>

                                                            <a
                                                                 href="#"
                                                                 className="btn-remove"
                                                                 title="Remove Product"
                                                            >
                                                                 <span>×</span>
                                                            </a>
                                                       </figure>
                                                  </div>

                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo31-product.html">
                                                                      Brown Women Casual HandBag
                                                                 </a>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>
                                                                 × $35.00
                                                            </span>
                                                       </div>

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo31-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo31/products/small/product-2.jpg"
                                                                      alt="product"
                                                                      width="80"
                                                                      height="80"
                                                                 />
                                                            </a>

                                                            <a
                                                                 href="#"
                                                                 className="btn-remove"
                                                                 title="Remove Product"
                                                            >
                                                                 <span>×</span>
                                                            </a>
                                                       </figure>
                                                  </div>

                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo31-product.html">
                                                                      Circled Ultimate 3D Speaker
                                                                 </a>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>
                                                                 × $35.00
                                                            </span>
                                                       </div>

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo31-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo31/products/small/product-3.jpg"
                                                                      alt="product"
                                                                      width="80"
                                                                      height="80"
                                                                 />
                                                            </a>
                                                            <a
                                                                 href="#"
                                                                 className="btn-remove"
                                                                 title="Remove Product"
                                                            >
                                                                 <span>×</span>
                                                            </a>
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
                                                  <a
                                                       href="cart.html"
                                                       className="btn btn-gray btn-block view-cart"
                                                  >
                                                       View Cart
                                                  </a>
                                                  <a
                                                       href="checkout.html"
                                                       className="btn btn-dark btn-block"
                                                  >
                                                       Checkout
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     );
}
