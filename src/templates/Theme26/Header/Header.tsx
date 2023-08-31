
import { templateImages } from "@/appProvider/templateImages";
import React from "react";
 
export default function Header() {
     return (
          <header className="header">
               <div className="header-top font2">
                    <div className="container d-block">
                         <div className="row">
                              <div className="col-lg-5 order-lg-last">
                                   <div className="info-box info-box-icon-left justify-content-lg-end p-0">
                                        <i className="icon-shipping" />
                                        <div className="info-box-content">
                                             <h4 className="font-weight-bold line-height-1 ls-10 text-dark text-uppercase">
                                                  Free next day delivery*
                                             </h4>
                                             <p className="ls-n-20 text-body">
                                                  * On Business Days - Purchases $100 or More
                                             </p>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-7 d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center text-center">
                                   <h2 className="line-height-1 text-body ls-n-20 m-b-2">
                                        <span className="sale-off">30% OFF</span> <b>$200*</b> Use
                                        Code:
                                        <b>PORTOCARS</b>
                                   </h2>
                                   <div className="m-b-2">
                                        <h5 className="line-height-1 ls-n-20 text-dark mb-0">
                                             Online Purchases Only
                                        </h5>
                                        <p className="ls-n-20 text-left">
                                             * Minimal Purchase Price
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}">
                    <div className="container">
                         <div className="header-left">
                              <button className="mobile-menu-toggler pl-0" type="button">
                                   <i className="fas fa-bars" />
                              </button>
                              <a href="demo26.html" className="logo">
                                   <img
                                        src={templateImages.logoImage.logo2}
                                        alt="Porto Logo"
                                        width={111}
                                        height={44}
                                   />
                              </a>
                              <div className="header-search header-search-inline header-search-category w-lg-max text-right d-none d-sm-block">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier" />
                                   </a>
                                   <form action=" #" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control font-italic"
                                                  name="q"
                                                  id="q"
                                                  placeholder="I'm searching for..."
                                             />
                                             <button
                                                  className="btn icon-magnifier"
                                                  title="search"
                                                  type="submit"
                                             />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              {/* End .header-search */}
                         </div>
                         <div className="header-right">
                              <span className="separator d-none d-lg-inline" />
                              <div className="contact-widget d-none d-lg-block">
                                   <p className="font2 text-body mb-0">CALL US NOW</p>
                                   <h3 className="contact-phone ls-n-10 text-dark">
                                        1-888-123-456{" "}
                                   </h3>
                                   <a href="#" className="d-block font2 ">
                                        or Chat Online
                                   </a>
                              </div>
                              <span className="separator d-none d-lg-inline" />
                              <a className="header-icon" href="login.html">
                                   <div className="header-user">
                                        <i className="icon-user-2" />
                                        <div className="header-userinfo d-none d-lg-block">
                                             <span className="d-inline-block font2 line-height-1">
                                                  Hello!
                                             </span>
                                             <h4 className="mb-0">My Account</h4>
                                        </div>
                                   </div>
                              </a>
                              <a href="wishlist.html" className="header-icon">
                                   <i className="icon-wishlist-2" />
                              </a>
                              <div className="dropdown cart-dropdown">
                                   <a
                                        href="#"
                                        title="Cart"
                                        className="dropdown-toggle cart-toggle"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-display="static"
                                   >
                                        <i className="minicart-icon" />
                                        <span className="cart-count badge-circle">3</span>
                                   </a>
                                   <div className="cart-overlay" />
                                   <div className="dropdown-menu mobile-cart">
                                        <a href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </a>
                                        <div className="dropdownmenu-wrapper custom-scrollbar">
                                             <div className="dropdown-cart-header">
                                                  Shopping Cart
                                             </div>
                                             {/* End .dropdown-cart-header */}
                                             <div className="dropdown-cart-products">
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo26-product.html">
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
                                                       {/* End .product-details */}
                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo26-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/products/product-1.jpg"
                                                                      alt="product"
                                                                      width={80}
                                                                      height={80}
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
                                                  {/* End .product */}
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo26-product.html">
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
                                                       {/* End .product-details */}
                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo26-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/products/product-2.jpg"
                                                                      alt="product"
                                                                      width={80}
                                                                      height={80}
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
                                                  {/* End .product */}
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo26-product.html">
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
                                                       {/* End .product-details */}
                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo26-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/products/product-3.jpg"
                                                                      alt="product"
                                                                      width={80}
                                                                      height={80}
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
                                                  {/* End .product */}
                                             </div>
                                             {/* End .cart-product */}
                                             <div className="dropdown-cart-total">
                                                  <span>SUBTOTAL:</span>
                                                  <span className="cart-total-price float-right">
                                                       $134.00
                                                  </span>
                                             </div>
                                             {/* End .dropdown-cart-total */}
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
                                             {/* End .dropdown-cart-total */}
                                        </div>
                                        {/* End .dropdownmenu-wrapper */}
                                   </div>
                                   {/* End .dropdown-menu */}
                              </div>
                              {/* End .dropdown */}
                         </div>
                    </div>
               </div>
               <div
                    className="header-bottom sticky-header d-none d-lg-flex mb-2"
                    data-sticky-options="{'mobile': false}"
               >
                    <div className="container">
                         <div className="header-menu">
                              <ul className="nav-categories">
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="fas fa-bars" />
                                             All
                                             <br />
                                             Categories
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="icon-category-sound-video size-big" />
                                             Sound &amp; Video
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="icon-category-lanterns-lighting" />
                                             Lanterns &amp; lighting
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="icon-category-internal-accessories" />
                                             Internal Accessories
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="icon-category-external-accessories size-big" />
                                             External Accessories
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="icon-category-motorcycles size-big" />
                                             Motorcycles Parts
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="icon-category-fluids size-big" />
                                             Fluids &amp; Chemicals
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="icon-category-steering" />
                                             Steering Wheels
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="icon-category-mechanics" />
                                             Mechanics &amp; performance
                                        </a>
                                   </li>
                                   <li>
                                        <a href="demo26-shop.html">
                                             <i className="icon-category-hot-deals" />
                                             Hot
                                             <br />
                                             Deals
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </header>
     );
}
