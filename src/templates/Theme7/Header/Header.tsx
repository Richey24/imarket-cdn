"use client";
import Link from "next/link";
import React from "react";

export default function Header() {

     return (
          <header className="header">
               <div className="header-top text-uppercase">
                    <div className="container">
                         <div className="header-left">
                              <div className="header-dropdown mr-3 pr-1">
                                   <Link href="#" className="pl-0">USD</Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li><Link href="#">EUR</Link></li>
                                             <li><Link href="#">USD</Link></li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="header-dropdown mr-auto">
                                   <Link href="#" className="pl-0"><i className="flag-us flag"></i>ENG</Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li><Link href="#"><i className="flag-us flag mr-2"></i>ENG</Link>
                                             </li>
                                             <li><Link href="#"><i className="flag-fr flag mr-2"></i>FRA</Link></li>
                                        </ul>
                                   </div>
                              </div>
                         </div>

                         <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                              <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                                   <Link href="#">Links</Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li><Link href="dashboard.html">Dashboard</Link></li>
                                             <li><Link href="cart.html">Cart</Link></li>
                                             <li><Link href="cart.html">Checkout</Link></li>
                                             <li><Link href="wishlist.html">Wishlist</Link></li>
                                             <li><Link href="about.html">About Us</Link></li>
                                             <li><Link href="blog.html">Contact Us</Link></li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                   <Link href="#">Order</Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li><Link href="#">Order Tracking</Link></li>
                                             <li><Link href="#">Order History</Link></li>
                                        </ul>
                                   </div>
                              </div>

                              <span className="separator d-none d-lg-inline-block"></span>

                              <div className="social-icons">
                                   <Link href="#" className="social-icon social-facebook icon-facebook" target="_blank"></Link>
                                   <Link href="#" className="social-icon social-twitter icon-twitter" target="_blank"></Link>
                                   <Link href="#" className="social-icon social-instagram icon-instagram mr-1" target="_blank"></Link>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <button className="mobile-menu-toggler" type="button">
                                   <i className="fas fa-bars"></i>
                              </button>

                              <Link href="demo7.html" className="logo w-100">
                                   <img src="assets/images/your-logo.png" alt="Porto Logo" />
                              </Link>

                              <nav className="main-nav w-100">
                                   <ul className="menu">
                                        <li className="active">
                                             <Link href="demo7.html">Home</Link>
                                        </li>
                                        <li>
                                             <Link href="demo7-shop.html">Categories</Link>
                                             <div className="megamenu megamenu-fixed-width megamenu-3cols">
                                                  <div className="row">
                                                       <div className="col-lg-4">
                                                            <Link href="#" className="nolink">VARIATION 1</Link>
                                                            <ul className="submenu">
                                                                 <li><Link href="category.html">Fullwidth Banner</Link></li>
                                                                 <li><Link href="category-banner-boxed-slider.html">Boxed Slider
                                                                      Banner</Link>
                                                                 </li>
                                                                 <li><Link href="category-banner-boxed-image.html">Boxed Image
                                                                      Banner</Link>
                                                                 </li>
                                                                 <li><Link href="category.html">Left Sidebar</Link></li>
                                                                 <li><Link href="category-sidebar-right.html">Right Sidebar</Link></li>
                                                                 <li><Link href="category-off-canvas.html">Off Canvas Filter</Link></li>
                                                                 <li><Link href="category-horizontal-filter1.html">Horizontal
                                                                      Filter1</Link>
                                                                 </li>
                                                                 <li><Link href="category-horizontal-filter2.html">Horizontal
                                                                      Filter2</Link>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                       <div className="col-lg-4">
                                                            <Link href="#" className="nolink">VARIATION 2</Link>
                                                            <ul className="submenu">
                                                                 <li><Link href="category-list.html">List Types</Link></li>
                                                                 <li><Link href="category-infinite-scroll.html">Ajax Infinite Scroll</Link>
                                                                 </li>
                                                                 <li><Link href="category.html">3 Columns Products</Link></li>
                                                                 <li><Link href="category-4col.html">4 Columns Products</Link></li>
                                                                 <li><Link href="category-5col.html">5 Columns Products</Link></li>
                                                                 <li><Link href="category-6col.html">6 Columns Products</Link></li>
                                                                 <li><Link href="category-7col.html">7 Columns Products</Link></li>
                                                                 <li><Link href="category-8col.html">8 Columns Products</Link></li>
                                                            </ul>
                                                       </div>
                                                       <div className="col-lg-4 p-0">
                                                            <div className="menu-banner">
                                                                 <figure>
                                                                      <img src="assets/images/menu-banner.jpg" alt="Menu banner"
                                                                           width="300" height="300" />
                                                                 </figure>
                                                                 <div className="banner-content">
                                                                      <h4>
                                                                           <span className="">UP TO</span><br />
                                                                           <b className="">50%</b>
                                                                           <i>OFF</i>
                                                                      </h4>
                                                                      <Link href="demo7-shop.html" className="btn btn-sm btn-dark">SHOP
                                                                           NOW</Link>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </li>
                                        <li>
                                             <Link href="demo7-product.html">Products</Link>
                                             <div className="megamenu megamenu-fixed-width">
                                                  <div className="row">
                                                       <div className="col-lg-4">
                                                            <Link href="#" className="nolink">PRODUCT PAGES</Link>
                                                            <ul className="submenu">
                                                                 <li><Link href="product.html">SIMPLE PRODUCT</Link></li>
                                                                 <li><Link href="product-variable.html">VARIABLE PRODUCT</Link></li>
                                                                 <li><Link href="product.html">SALE PRODUCT</Link></li>
                                                                 <li><Link href="product.html">FEATURED & ON SALE</Link></li>
                                                                 <li><Link href="product-custom-tab.html">WITH CUSTOM TAB</Link></li>
                                                                 <li><Link href="product-sidebar-left.html">WITH LEFT SIDEBAR</Link></li>
                                                                 <li><Link href="product-sidebar-right.html">WITH RIGHT SIDEBAR</Link></li>
                                                                 <li><Link href="product-addcart-sticky.html">ADD CART STICKY</Link></li>
                                                            </ul>
                                                       </div>

                                                       <div className="col-lg-4">
                                                            <Link href="#" className="nolink">PRODUCT LAYOUTS</Link>
                                                            <ul className="submenu">
                                                                 <li><Link href="product-extended-layout.html">EXTENDED LAYOUT</Link></li>
                                                                 <li><Link href="product-grid-layout.html">GRID IMAGE</Link></li>
                                                                 <li><Link href="product-full-width.html">FULL WIDTH LAYOUT</Link></li>
                                                                 <li><Link href="product-sticky-info.html">STICKY INFO</Link></li>
                                                                 <li><Link href="product-sticky-both.html">LEFT & RIGHT STICKY</Link></li>
                                                                 <li><Link href="product-transparent-image.html">TRANSPARENT IMAGE</Link>
                                                                 </li>
                                                                 <li><Link href="product-center-vertical.html">CENTER VERTICAL</Link></li>
                                                                 <li><Link href="#">BUILD YOUR OWN</Link></li>
                                                            </ul>
                                                       </div>

                                                       <div className="col-lg-4 p-0">
                                                            <div className="menu-banner menu-banner-2">
                                                                 <figure>
                                                                      <img src="assets/images/menu-banner-1.jpg" alt="Menu banner"
                                                                           className="product-promo" width="380" height="790" />
                                                                 </figure>
                                                                 <i>OFF</i>
                                                                 <div className="banner-content">
                                                                      <h4>
                                                                           <span className="">UP TO</span><br />
                                                                           <b className="">50%</b>
                                                                      </h4>
                                                                 </div>
                                                                 <Link href="demo7-shop.html" className="btn btn-sm btn-dark">SHOP NOW</Link>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </li>
                                        <li>
                                             <Link href="#">Pages</Link>
                                             <ul>
                                                  <li><Link href="wishlist.html">Wishlist</Link></li>
                                                  <li><Link href="cart.html">Shopping Cart</Link></li>
                                                  <li><Link href="checkout.html">Checkout</Link></li>
                                                  <li><Link href="dashboard.html">Dashboard</Link></li>
                                                  <li><Link href="demo7-about.html">About Us</Link></li>

                                                  <li><Link href="demo7-contact.html">Contact Us</Link></li>
                                                  <li><Link href="login.html">Login</Link></li>
                                                  <li><Link href="forgot-password.html">Forgot Password</Link></li>
                                             </ul>
                                        </li>


                                   </ul>
                              </nav>

                              <div className="header-search header-search-popup header-search-category d-none d-lg-block ml-xl-5">
                                   <Link href="#" className="search-toggle" role="button"><i className="icon-magnifier"></i></Link>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                             <input type="search" className="form-control bg-white" name="q" id="q"
                                                  placeholder="I'm searching for..." required />
                                             <div className="select-custom bg-white">
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
                                                       <option value="32">- Motorcycles &amp; Powersports</option>
                                                       <option value="33">- Parts &amp; Accessories</option>
                                                       <option value="34">- Boats</option>
                                                       <option value="57">- Auto Tools &amp; Supplies</option>
                                                  </select>
                                             </div>
                                             <button className="btn bg-white icon-search-3" type="submit"></button>
                                        </div>
                                   </form>
                              </div>
                         </div>

                         <div className="header-right">
                              <div className="header-contact d-none d-lg-flex pl-4 pr-4">
                                   <img alt="phone" src="assets/images/phone.png" width="30" height="30" className="pb-1" />
                                   <h6><span>Call us now</span><Link href="tel:#" className="text-dark font1">+123 5678 890</Link></h6>
                              </div>

                              <Link href="login.html" className="header-icon header-icon-user d-lg-none d-block" title="login"><i
                                   className="icon-user-2"></i></Link>

                              <Link href="wishlist.html" className="header-icon d-lg-none d-block" title="wishlist"><i
                                   className="icon-wishlist-2"></i></Link>

                              <span className="separator d-lg-inline-block d-none"></span>

                              <div className="dropdown cart-dropdown">
                                   <Link href="#" title="Cart" className="dropdown-toggle dropdown-arrow cart-toggle" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                        <i className="icon-shopping-cart"></i>
                                        <span className="cart-count badge-circle">3</span>
                                   </Link>

                                   <div className="cart-overlay"></div>

                                   <div className="dropdown-menu mobile-cart">
                                        <Link href="#" title="Close (Esc)" className="btn-close">×</Link>

                                        <div className="dropdownmenu-wrapper custom-scrollbar">
                                             <div className="dropdown-cart-header">Shopping Cart</div>


                                             <div className="dropdown-cart-products">
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <Link href="product.html">Ultimate 3D Bluetooth Speaker</Link>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">1</span>
                                                                 × $99.00
                                                            </span>
                                                       </div>

                                                       <figure className="product-image-container">
                                                            <Link href="product.html" className="product-image">
                                                                 <img src="assets/images/products/product-1.jpg" alt="product"
                                                                      width="80" height="80" />
                                                            </Link>

                                                            <Link href="#" className="btn-remove" title="Remove Product"><span>×</span></Link>
                                                       </figure>
                                                  </div>

                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <Link href="product.html">Brown Women Casual HandBag</Link>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">1</span>
                                                                 × $35.00
                                                            </span>
                                                       </div>

                                                       <figure className="product-image-container">
                                                            <Link href="product.html" className="product-image">
                                                                 <img src="assets/images/products/product-2.jpg" alt="product"
                                                                      width="80" height="80" />
                                                            </Link>

                                                            <Link href="#" className="btn-remove" title="Remove Product"><span>×</span></Link>
                                                       </figure>
                                                  </div>

                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <Link href="product.html">Circled Ultimate 3D Speaker</Link>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">1</span>
                                                                 × $35.00
                                                            </span>
                                                       </div>

                                                       <figure className="product-image-container">
                                                            <Link href="product.html" className="product-image">
                                                                 <img src="assets/images/products/product-3.jpg" alt="product"
                                                                      width="80" height="80" />
                                                            </Link>
                                                            <Link href="#" className="btn-remove" title="Remove Product"><span>×</span></Link>
                                                       </figure>
                                                  </div>
                                             </div>

                                             <div className="dropdown-cart-total">
                                                  <span>SUBTOTAL:</span>

                                                  <span className="cart-total-price float-right">$134.00</span>
                                             </div>

                                             <div className="dropdown-cart-action">
                                                  <Link href="cart.html" className="btn btn-gray btn-block view-cart">View
                                                       Cart</Link>
                                                  <Link href="checkout.html" className="btn btn-dark btn-block">Checkout</Link>
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
