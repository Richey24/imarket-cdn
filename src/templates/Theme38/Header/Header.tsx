import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import menuBanner from "../../../assets/images/menu-banner.jpg";
import menuBanner1 from "../../../assets/images/menu-banner-1.jpg";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { templateImages } from "@/appProvider/templateImages";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
const Header = (props: any) => {
     const { company, static: staticProps } = props.props;
     console.log("headerProps", staticProps);

     return (
          <header className="header">
               <div className="header-top">
                    <div className="container">
                         <div className="header-left d-none d-md-flex">
                              <a
                                   href="tel:#"
                                   className="font-weight-bold text-primary d-flex align-items-center"
                              >
                                   <i className="sicon-phone" />
                                   (800) 123-4567
                              </a>
                              <span className="separator" />
                              <p>
                                   <span className="font-weight-bold text-primary">
                                        Extra 15% OFF
                                   </span>{" "}
                                   Health &amp; Wellness
                              </p>
                         </div>
                         {/* End .header-left */}
                         <div className="header-right header-dropdowns ml-0 ml-md-auto w-md-100">
                              <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                                   <a href="#">Links</a>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <a href="dashboard.html">Dashboard</a>
                                             </li>
                                             <li>
                                                  <a href="cart.html">Cart</a>
                                             </li>
                                             <li>
                                                  <a href="cart.html">Checkout</a>
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
                                   {/* End .header-menu */}
                              </div>
                              {/* End .header-dropown */}
                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                   <a href="#">Order</a>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <a href="#">Order Tracking</a>
                                             </li>
                                             <li>
                                                  <a href="#">Order History</a>
                                             </li>
                                        </ul>
                                   </div>
                                   {/* End .header-menu */}
                              </div>
                              {/* End .header-dropown */}
                              <span className="separator d-none d-xl-block" />
                              <div className="header-dropdown ">
                                   <a href="#">USD</a>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <a href="#">EUR</a>
                                             </li>
                                             <li>
                                                  <a href="#">USD</a>
                                             </li>
                                        </ul>
                                   </div>
                                   {/* End .header-menu */}
                              </div>
                              {/* End .header-dropown */}
                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                   <a href="#">ENG</a>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <a href="#">ENG</a>
                                             </li>
                                             <li>
                                                  <a href="#">FRA</a>
                                             </li>
                                        </ul>
                                   </div>
                                   {/* End .header-menu */}
                              </div>
                              {/* End .header-dropown */}
                              <span className="separator" />
                              <div className="social-icons ml-auto ml-md-0">
                                   <a
                                        href="#"
                                        className="social-icon social-facebook icon-facebook"
                                        target="_blank"
                                   />
                                   <a
                                        href="#"
                                        className="social-icon social-twitter icon-twitter"
                                        target="_blank"
                                   />
                                   <a
                                        href="#"
                                        className="social-icon social-instagram icon-instagram"
                                        target="_blank"
                                   />
                              </div>
                              {/* End .social-icons */}
                         </div>
                         {/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-top */}
               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <MenuButton />
                              <Logo company={company} />
                         </div>
                         {/* End .header-left */}
                         <div className="header-right">
                              <PageLinks staticProps={staticProps} />
                              <div className="header-icon header-search header-search-popup header-search-category d-none d-sm-block">
                                   <MenuButton />
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
                                             <button className="btn icon-search-3" type="submit" />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              <a
                                   href="login.html"
                                   className="header-icon header-icon-user"
                                   title="Login"
                              >
                                   <i className="icon-user-2" />
                              </a>
                              <a
                                   href="wishlist.html"
                                   className="header-icon position-relative"
                                   title="wishlist"
                              >
                                   <i className="icon-wishlist-2" />
                                   <span className="wishlist-count badge-circle">0</span>
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
                                        <i className="icon-cart-thick" />
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
                                                                 <a href="demo38-product.html">
                                                                      Injection
                                                                 </a>
                                                            </h4>
                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>{" "}
                                                                 × $99.00
                                                            </span>
                                                       </div>
                                                       {/* End .product-details */}
                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo38-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo38/products/product-1.jpg"
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
                                                                 <a href="demo38-product.html">
                                                                      Tonomter V2
                                                                 </a>
                                                            </h4>
                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>{" "}
                                                                 × $35.00
                                                            </span>
                                                       </div>
                                                       {/* End .product-details */}
                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo38-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo38/products/product-2.jpg"
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
                                                                 <a href="demo38-product.html">
                                                                      Wheel Barrow
                                                                 </a>
                                                            </h4>
                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>{" "}
                                                                 × $35.00
                                                            </span>
                                                       </div>
                                                       {/* End .product-details */}
                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo38-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo38/products/product-3.jpg"
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
                         {/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-middle */}
          </header>
     );
     {
          /* End .header */
     }
};
export default Header;
