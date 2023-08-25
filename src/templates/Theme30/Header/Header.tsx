"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
     return (
          <header className="header mb-2">
               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left d-none d-lg-flex">
                              <div className="header-contact phone">
                                   <span>Call us now</span>
                                   <a href="#">1-888-123-456</a>
                              </div>
                              <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                                   <a href="#">Links</a>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <a href="dashboard.html">Dashboard</a>
                                             </li>
                                             <li>
                                                  <a href="wishlist.html">Wishlist</a>
                                             </li>
                                             <li>
                                                  <a href="about.html">About Us</a>
                                             </li>
                                             <li>
                                                  <a href="blog.html">Contact Us</a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                         <div className="header-center ml-lg-auto ml-0">
                              <button className="mobile-menu-toggler" type="button">
                                   <i className="fas fa-bars"></i>
                              </button>
                              <a href="demo30.html" className="logo">
                                   <img src="assets/images/your-logo.png" alt="Porto Logo" />
                              </a>
                         </div>
                         <div className="header-right">
                              <a href="login.html" className="d-lg-block d-none">
                                   <div className="header-user">
                                        <i className="icon-user-2"></i>
                                        <div className="header-userinfo">
                                             <span>Hello!</span>
                                             <h4 className="mb-0">My Account</h4>
                                        </div>
                                   </div>
                              </a>

                              <div className="header-icon header-search header-search-popup header-search-category d-none d-sm-block d-lg-none">
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
                                                  className="btn icon-magnifier"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <a href="wishlist.html" className="header-icon" title="wishlist">
                                   <i className="icon-wishlist-2"></i>
                              </a>

                              <div className="dropdown cart-dropdown">
                                   <a
                                        href="#"
                                        title="Cart"
                                        className="dropdown-toggle dropdown-arrow cart-toggle"
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
                                                                 <a href="demo30-product.html">
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
                                                                 href="demo30-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/products/product-1.jpg"
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
                                                                 <a href="demo30-product.html">
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
                                                                 href="demo30-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/products/product-2.jpg"
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
                                                                 <a href="demo30-product.html">
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
                                                                 href="demo30-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/products/product-3.jpg"
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

               <div className="header-bottom sticky-header d-lg-block d-none">
                    <div className="container">
                         <div className="header-left">
                              <nav className="main-nav">
                                   <ul className="menu">
                                        <li className="menu-item">
                                             <a className="d-inline-flex align-items-center sf-with-ul">
                                                  <i className="custom-icon-toggle-menu d-inline-table"></i>
                                                  <span>Departments</span>
                                             </a>
                                             <div className="menu-depart-overlay"></div>
                                             <div className="menu-depart">
                                                  <a href="demo30-shop.html">
                                                       <i className="icon-smiling-girl"></i>For Her
                                                  </a>
                                                  <a href="demo30-shop.html">
                                                       <i className="icon-boy-broad-smile"></i>For
                                                       Him
                                                  </a>
                                                  <a href="demo30-shop.html">
                                                       <i className="icon-smiling-baby"></i>For Kids
                                                  </a>
                                                  <a href="demo30-shop.html">
                                                       <i className="icon-tshirt"></i>Fashion
                                                  </a>
                                                  <a href="demo30-shop.html">
                                                       <i className="icon-chef"></i>Kitchen
                                                  </a>
                                                  <a href="demo30-shop.html">
                                                       <i className="icon-edit"></i>Stationary
                                                  </a>
                                                  <a href="demo30-shop.html">
                                                       <i className="icon-gift-2"></i>Personalized
                                                  </a>
                                             </div>
                                        </li>
                                        <li className="tw-group px-12">
                                             <a href="demo30-shop.html">Categories</a>
                                             <div className="megamenu megamenu-fixed-width megamenu-3cols tw-hidden group-hover:tw-block">
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
                                        <li className="tw-group">
                                             <a href="demo30-product.html">Products</a>
                                             <div className="megamenu megamenu-fixed-width tw-hidden group-hover:tw-block">
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
                                        <li className="tw-group">
                                             <a href="#">Pages</a>
                                             <ul className="tw-hidden group-hover:tw-block">
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
                                                       <a href="about.html">About Us</a>
                                                  </li>

                                                  <li>
                                                       <a href="contact.html">Contact Us</a>
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
                                             <a
                                                  href="https://1.envato.market/DdLk5"
                                                  target="_blank"
                                             >
                                                  New Arrivals
                                             </a>
                                        </li>
                                   </ul>
                              </nav>
                         </div>

                         <div className="header-right pr-0">
                              <form className="mb-0" action="#" method="get">
                                   <div className="submit-wrapper">
                                        <input
                                             type="search"
                                             className="form-control font2"
                                             name="q"
                                             id="qq"
                                             placeholder="I'm searching for..."
                                             required
                                        />
                                        <button className="btn" type="submit">
                                             <i className="icon-magnifier"></i>
                                        </button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </header>
     );
}
