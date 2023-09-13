"use client";
import Link from "next/link";
import React from "react";
import { CatData } from "../Home/data";
import { templateImages } from "@/appProvider/templateImages";

export default function Header() {
     return (
          <header className="header">
               <div className="header-top">
                    <div className="container">
                         <div className="header-left d-none d-sm-block">
                              
                              {/* End .info-box */}
                         </div>
                         {/* End .header-left */}
                         <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
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
                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0 pl-2">
                                   <a href="#">
                                        <i className="flag-us flag" />
                                        Eng
                                   </a>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <a href="#">
                                                       <i className="flag-us flag mr-2" />
                                                       ENG
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="#">
                                                       <i className="flag-fr flag mr-2" />
                                                       FRA
                                                  </a>
                                             </li>
                                        </ul>
                                   </div>
                                   {/* End .header-menu */}
                              </div>
                              {/* End .header-dropown */}
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
                              <div className="social-icons">
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
                         <div className="header-left col-lg-2 w-auto pl-0">
                              <button
                                   className="mobile-menu-toggler text-primary mr-2"
                                   type="button"
                              >
                                   <i className="fas fa-bars" />
                              </button>
                              <a href="demo37.html" className="logo">
                                   <img
                                        src={templateImages.logoImage.logo2}
                                        className="w-100"
                                        width={111}
                                        height={44}
                                        alt="Porto Logo"
                                   />
                              </a>
                         </div>
                         {/* End .header-left */}
                         <div className="header-right w-lg-max">
                              <div className="header-icon header-search header-search-inline d-sm-block d-none w-lg-max ">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-search-3" />
                                   </a>
                                   <form className="mb-0" action="#" method="get">
                                        <div className="header-search-wrapper submit-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control font2"
                                                  name="q"
                                                  id="q"
                                                  placeholder="Search..."
                                             />
                                             <button className="btn" type="submit">
                                                  <i className="icon-search-3" />
                                             </button>
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              <div className="header-contact d-lg-flex pl-4 pr-4">
                                   <a href="login.html" className="header-icon mr-0" title="login">
                                        <i className="icon-user-2" />
                                   </a>
                                   <h6 className="text-capitalize d-none d-lg-block">
                                        <span className="ls-n-20">Welcome</span>
                                        <a href="login.html">Sign In / Register</a>
                                   </h6>
                              </div>
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
                                                                 <a href="demo37-product.html">
                                                                      Black wrist watch
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
                                                                 href="demo37-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo37/products/product-1.jpg"
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
                                                                 <a href="demo37-product.html">
                                                                      Warm Jacket
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
                                                                 href="demo37-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo37/products/product-2.jpg"
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
                                                                 <a href="demo37-product.html">
                                                                      White Sports Shoes
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
                                                                 href="demo37-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo37/products/product-3.jpg"
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
               <div className="header-bottom d-none d-lg-block">
                    <div className="container">
                         <nav className="thumbs-nav w-100">
                              <ul className="thumbs d-flex align-items-center justify-content-center mb-2 row">
                                   <li className="thumb-item active col-1">
                                        <a href="demo37-shop.html">
                                             <i className="fas fa-bars bg-primary" />
                                             Categories
                                        </a>
                                   </li>
                                   {CatData.map((data) => (
                                        <li className="thumb-item col-1">
                                             <a href={data.link} className=" has-preview">
                                                  <span
                                                       className="thumb-info-image fixed-image"
                                                       style={{
                                                            backgroundImage: `url(${data.img})`,
                                                       }}
                                                  ></span>
                                                  {data.atag}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </nav>
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-bottom */}
          </header>
     );
}
