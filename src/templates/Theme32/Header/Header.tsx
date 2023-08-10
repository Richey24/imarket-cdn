"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
     return (
          <header className="home header header-transparent p-0">
               <div className="header-top d-flex align-items-center">
                    <div className="container">
                         <div className="header-left mr-lg-0 mr-3 d-sm-flex d-none">
                              <h4 className="mb-0">
                                   Get 10% OFF at the Porto GIFTs Selection -{" "}
                                   <Link href="shop">Shop Now!</Link>
                              </h4>
                         </div>
                         <div className="header-right">
                              <ul className="d-lg-flex d-none">
                                   <li>
                                        <Link href="dashboard">Dashboard</Link>
                                   </li>
                                   <li>
                                        <Link href="cart">Cart</Link>
                                   </li>
                                   <li>
                                        <Link href="cart">Checkout</Link>
                                   </li>
                                   <li>
                                        <Link href="wishlist">Wishlist</Link>
                                   </li>
                                   <li>
                                        <Link href="about">About Us</Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>

               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <button className="mobile-menu-toggler" type="button">
                                   <i className="fas fa-bars"></i>
                              </button>

                              <Link href="demo32.html" className="logo">
                                   <img src="assets/images/your-logo.png" alt="Porto Logo" />
                              </Link>
                         </div>

                         <div className="header-right">
                              <div className="header-icon header-search header-search-popup header-search-category d-none d-sm-block">
                                   <Link href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier"></i>
                                   </Link>
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
                                             <button
                                                  className="btn icon-search-3"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <a
                                   href="login.html"
                                   className="header-icon header-icon-user"
                                   title="login"
                              >
                                   <i className="icon-user-2"></i>
                              </a>

                              <Link href="wishlist.html" className="header-icon" title="wishlist">
                                   <i className="icon-wishlist-2"></i>
                              </Link>

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
                                        <Link href="#" title="Close (Esc)" className="btn-close">
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
                                                                 <Link href="demo32-product.html">
                                                                      Ultimate 3D Bluetooth Speaker
                                                                 </Link>
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
                                                                 href="demo32-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo32/products/product-1.jpg"
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
                                                                 <Link href="demo32-product.html">
                                                                      Brown Women Casual HandBag
                                                                 </Link>
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
                                                                 href="demo32-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo32/products/product-2.jpg"
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
                                                                 <Link href="demo32-product.html">
                                                                      Circled Ultimate 3D Speaker
                                                                 </Link>
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
                                                                 href="demo32-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo32/products/product-3.jpg"
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
                                                       className="btn btn-dark text-white btn-block"
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

               <div className="header-bottom">
                    <nav className="main-nav">
                         <ul className="menu no-superfish">
                              <li className="active">
                                   <Link href="demo32.html">Home</Link>
                              </li>
                              <li>
                                   <Link href="demo32-shop.html" className="sf-with-ul">
                                        Categories
                                   </Link>
                                   <div className="megamenu megamenu-fixed-width megamenu-3cols">
                                        <div className="row">
                                             <div className="col-lg-4">
                                                  <Link href="#" className="nolink">
                                                       VARIATION 1
                                                  </Link>
                                                  <ul className="submenu">
                                                       <li>
                                                            <Link href="category.html">
                                                                 Fullwidth Banner
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-banner-boxed-slider.html">
                                                                 Boxed Slider Banner
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-banner-boxed-image.html">
                                                                 Boxed Image Banner
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category.html">
                                                                 Left Sidebar
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-sidebar-right.html">
                                                                 Right Sidebar
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-off-canvas.html">
                                                                 Off Canvas Filter
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-horizontal-filter1.html">
                                                                 Horizontal Filter1
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-horizontal-filter2.html">
                                                                 Horizontal Filter2
                                                            </Link>
                                                       </li>
                                                  </ul>
                                             </div>
                                             <div className="col-lg-4">
                                                  <Link href="#" className="nolink">
                                                       VARIATION 2
                                                  </Link>
                                                  <ul className="submenu">
                                                       <li>
                                                            <Link href="category-list.html">
                                                                 List Types
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-infinite-scroll.html">
                                                                 Ajax Infinite Scroll
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category.html">
                                                                 3 Columns Products
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-4col.html">
                                                                 4 Columns Products
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-5col.html">
                                                                 5 Columns Products
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-6col.html">
                                                                 6 Columns Products
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-7col.html">
                                                                 7 Columns Products
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="category-8col.html">
                                                                 8 Columns Products
                                                            </Link>
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
                                                                 <span className="">UP TO</span>
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
                              <li>
                                   <Link href="demo32-product.html" className="sf-with-ul">
                                        Products
                                   </Link>
                                   <div className="megamenu megamenu-fixed-width">
                                        <div className="row">
                                             <div className="col-lg-4">
                                                  <Link href="#" className="nolink">
                                                       PRODUCT PAGES
                                                  </Link>
                                                  <ul className="submenu">
                                                       <li>
                                                            <Link href="product.html">
                                                                 SIMPLE PRODUCT
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-variable.html">
                                                                 VARIABLE PRODUCT
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product.html">
                                                                 SALE PRODUCT
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product.html">
                                                                 FEATURED & ON SALE
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-custom-tab.html">
                                                                 WITH CUSTOM TAB
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-sidebar-left.html">
                                                                 WITH LEFT SIDEBAR
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-sidebar-right.html">
                                                                 WITH RIGHT SIDEBAR
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-addcart-sticky.html">
                                                                 ADD CART STICKY
                                                            </Link>
                                                       </li>
                                                  </ul>
                                             </div>

                                             <div className="col-lg-4">
                                                  <Link href="#" className="nolink">
                                                       PRODUCT LAYOUTS
                                                  </Link>
                                                  <ul className="submenu">
                                                       <li>
                                                            <Link href="product-extended-layout.html">
                                                                 EXTENDED LAYOUT
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-grid-layout.html">
                                                                 GRID IMAGE
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-full-width.html">
                                                                 FULL WIDTH LAYOUT
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-sticky-info.html">
                                                                 STICKY INFO
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-sticky-both.html">
                                                                 LEFT & RIGHT STICKY
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-transparent-image.html">
                                                                 TRANSPARENT IMAGE
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="product-center-vertical.html">
                                                                 CENTER VERTICAL
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="#">BUILD YOUR OWN</Link>
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
                                                                 <span className="">UP TO</span>
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
                              <li className="sf-with-ul">
                                   <Link href="#" className="sf-with-ul">
                                        Pages
                                   </Link>
                                   <ul>
                                        <li>
                                             <Link href="wishlist">Wishlist</Link>
                                        </li>
                                        <li>
                                             <Link href="cart">Shopping Cart</Link>
                                        </li>
                                        <li>
                                             <Link href="checkout">Checkout</Link>
                                        </li>
                                        <li>
                                             <Link href="dashboard">Dashboard</Link>
                                        </li>
                                        <li>
                                             <Link href="about">About Us</Link>
                                        </li>
                                        <li>
                                             <Link href="#" className="sf-with-ul">
                                                  Blog
                                             </Link>
                                             <ul>
                                                  <li>
                                                       <Link href="single.html">Blog Post</Link>
                                                  </li>
                                             </ul>
                                        </li>
                                        <li>
                                             <Link href="contact">Contact Us</Link>
                                        </li>
                                        <li>
                                             <Link href="login">Login</Link>
                                        </li>
                                        <li>
                                             <Link href="forgot-password">Forgot Password</Link>
                                        </li>
                                   </ul>
                              </li>
                         </ul>
                    </nav>
               </div>
          </header>
     );
}
