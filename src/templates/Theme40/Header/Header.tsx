import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import menuBanner from "../../../assets/images/menu-banner.jpg";
import menuBanner1 from "../../../assets/images/menu-banner-1.jpg";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { templateImages } from "@/appProvider/templateImages";
const Header = (props: any) => {
     const { company, static: staticProps } = props.props;

     return (
          <header className="header">
               <div className="header-top">
                    <div className="container-fluid">
                         <div className="header-menu">
                              <ul style={{ gap: 30 }} className="mb-0 d-none d-lg-flex">
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
                         {/* End .header-left */}
                         <div className="header-right header-dropdowns ml-auto w-sm-100 justify-content-end">
                              <div className="info-box info-box-icon-left p-0">
                                   <i className="icon-shipping" />
                                   <div className="info-box-content">
                                        <h4>FREE Express Shipping On Orders $99+</h4>
                                   </div>
                                   {/* End .info-box-content */}
                              </div>
                              {/* End .info-box */}
                              <div className="separator" />
                              <div className="header-dropdown font2">
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
                              <div className="header-dropdown mr-0 pl-2 font2">
                                   <a href="#">
                                        <i className="flag-us flag" />
                                        ENG
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
                              <div className="separator" />
                              <div className="info-box-container align-items-center">
                                   <div className=" info-box info-box-icon-left">
                                        <i className="icon-pin" />
                                        <div className="info-box-content">
                                             <h4>Our Stores</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                                   {/* End .info-box */}
                                   <div className="info-box info-box-icon-left">
                                        <i className="icon-shipping-truck" />
                                        <div className="info-box-content">
                                             <h4 className="ls-0">Track Your Order</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                                   {/* End .info-box */}
                                   <div className="info-box info-box-icon-left">
                                        <i className="icon-help-circle" />
                                        <div className="info-box-content">
                                             <h4>Help</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                                   {/* End .info-box */}
                              </div>
                         </div>
                         {/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-top */}
               <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}">
                    <div className="container-fluid">
                         <div className="header-left justify-content-lg-center">
                              <button
                                   className="mobile-menu-toggler text-primary mr-2"
                                   type="button"
                              >
                                   <i className="fas fa-bars" />
                              </button>
                              <a href="demo40.html" className="logo">
                                   {company?.logo ? (
                                        <Image
                                             src={company?.logo}
                                             className="black-logo"
                                             alt="Porto Logo"
                                             width={202}
                                             height={80}
                                        />
                                   ) : (
                                        <Image
                                             src={templateImages.logoImage.logo2}
                                             className="black-logo"
                                             alt="Porto Logo"
                                             width={202}
                                             height={80}
                                        />
                                   )}
                              </a>
                         </div>
                         {/* End .header-left */}
                         <div className="header-right w-lg-max">
                              <div className="header-icon header-search header-search-inline header-search-category d-sm-block d-none w-lg-max text-right mt-0">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier" />
                                   </a>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper mr-1">
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
                                                       <option value={4}>Fashion</option>
                                                       <option value={12}>- Women</option>
                                                       <option value={13}>- Men</option>
                                                       <option value={66}>- Jewellery</option>
                                                       <option value={67}>- Kids Fashion</option>
                                                       <option value={5}>Electronics</option>
                                                       <option value={21}>- Smart TVs</option>
                                                       <option value={22}>- Cameras</option>
                                                       <option value={63}>- Games</option>
                                                       <option value={7}>Home &amp; Garden</option>
                                                       <option value={11}>Motors</option>
                                                       <option value={31}>- Cars and Trucks</option>
                                                       <option value={32}>
                                                            - Motorcycles &amp; Powersports
                                                       </option>
                                                       <option value={33}>
                                                            - Parts &amp; Accessories
                                                       </option>
                                                       <option value={34}>- Boats</option>
                                                       <option value={57}>
                                                            - Auto Tools &amp; Supplies
                                                       </option>
                                                  </select>
                                             </div>
                                             {/* End .select-custom */}
                                             <button
                                                  className="btn icon-magnifier p-0"
                                                  title="search"
                                                  type="submit"
                                             />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              {/* End .header-search */}
                              <div className="header-contact header-wishlist d-lg-flex pl-4 pr-sm-4 pr-2 ml-2">
                                   <a
                                        href="wishlist.html"
                                        className="header-icon mr-0"
                                        title="wishlist"
                                   >
                                        <i className="icon-wishlist-2" />
                                   </a>
                                   <h6 className="text-capitalize">
                                        <span>Favorites</span>
                                        <a href="login.html">Wishlist</a>
                                   </h6>
                              </div>
                              <div className="header-contact d-lg-flex pr-sm-4 pr-2">
                                   <a href="login.html" className="header-icon mr-0" title="login">
                                        <i className="icon-user-2" />
                                   </a>
                                   <h6 className="text-capitalize">
                                        <span className="ls-n-20">Welcome</span>
                                        <a href="login.html">Sign In / Register</a>
                                   </h6>
                              </div>
                              <div className="separator" />
                              <div className="cart-dropdown-wrapper d-flex align-items-center pt-2">
                                   <span className="cart-subtotal text-right font2 mr-3">
                                        Shopping Cart
                                        <span className="cart-price d-block font2">$0.00</span>
                                   </span>
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
                                             <span className=" cart-count badge-circle">3</span>
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
                                                                      <a href="product.html">
                                                                           Ultimate 3D Bluetooth
                                                                           Speaker
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
                                                                      href="product.html"
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
                                                                      <a href="product.html">
                                                                           Brown Women Casual
                                                                           HandBag
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
                                                                      href="product.html"
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
                                                                      <a href="product.html">
                                                                           Circled Ultimate 3D
                                                                           Speaker
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
                                                                      href="product.html"
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
