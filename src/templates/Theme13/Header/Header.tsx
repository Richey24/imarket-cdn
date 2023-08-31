import React, { useState } from "react";
import { FaPhoneAlt, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import product3 from "../../../assets/images/products/product-3.jpg";
import product2 from "../../../assets/images/products/product-2.jpg";
import product1 from "../../../assets/images/products/product-1.jpg";
import menuBanner from "../../../assets/images/menu-banner.jpg";
import menuBanner1 from "../../../assets/images/menu-banner-1.jpg";

import phone from "../../../assets/images/phone.png";
import Image from "next/image";
import logoBlack from "../../../assets/images/logo-black.png";
import logoWhite from "../../../assets/images/logo-white.png";
import stickyLogo from "../../../assets/images/sticky-logo.png";
import Link from "next/link";
import _ from "lodash";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;
     const [activeMenuId, setActiveMenuId] = useState(0);

     return (
          <div style={{ width: "100%" }}>
               <div className="top-notice text-white bg-secondary">
                    <div className="container text-center">
                         <h5 className="d-inline-block mb-0">
                              Get Up to
                              <b>40% OFF</b> New-Season Styles
                         </h5>
                         <a href="category.html" className="category">
                              MEN
                         </a>
                         <a href="category.html" className="category">
                              WOMEN
                         </a>
                         <small>* Limited time only.</small>
                         <button title="Close (Esc)" type="button" className="mfp-close">
                              ×
                         </button>
                    </div>
               </div>
               <header className="header">
                    <div className="header-top">
                         <div className="container">
                              <div className="header-left header-dropdowns">
                                   <div className="header-dropdown lang-menu">
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
                                   </div>
                                   <div className="header-dropdown">
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
                                   </div>
                              </div>
                              <div className="header-right">
                                   <p className="top-message text-uppercase d-none d-sm-block">
                                        Free returns. Standard shipping orders $99+
                                   </p>
                                   <span className="separator" />
                                   <div className="header-dropdown dropdown-expanded mx-3 px-1">
                                        <a href="#">Links</a>
                                        <div className="header-menu">
                                             <ul>
                                                  <li>
                                                       <Link href="/dashboard">My Account</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/wishlist">My Wishlist</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/cart">Cart</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/login" className="login-link">
                                                            Log In
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                        {/* End .header-menu */}
                                   </div>
                                   {/* End .header-dropown */}
                                   <span className="separator separator-1" />
                                   <div className="social-icons d-flex">
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
                              </div>
                         </div>
                    </div>
                    <div
                         className="header-middle sticky-header"
                         data-sticky-options="{'mobile': false}"
                    >
                         <div className="container">
                              <div className="header-left col-lg-2 w-auto pl-0">
                                   <button className="mobile-menu-toggler" type="button">
                                        <i className="fas fa-bars" />
                                   </button>
                                   <Link href="/" className="logo">
                                        {company?.logo ? (
                                             <Image
                                                  src={company?.logo}
                                                  className="black-logo"
                                                  alt="Porto Logo"
                                                  width={202}
                                                  height={80}
                                             />
                                        ) : (
                                             <h3>{company?.company_name || "Tester"}</h3>
                                        )}
                                   </Link>
                              </div>
                              {/* End .header-left */}
                              <div className="header-right w-lg-max">
                                   <div className="header-icon header-search header-search-inline header-search-category mr-lg-5 pr-lg-4 w-lg-max">
                                        <a href="#" className="search-toggle" role="button">
                                             <i className="icon-search-3" />
                                        </a>
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
                                                  <div className="select-custom body-text">
                                                       <select id="cat" name="cat">
                                                            <option>All Categories</option>
                                                            {categories &&
                                                                 categories.map((category) => (
                                                                      <>
                                                                           {!category.parent_id && (
                                                                                <option
                                                                                     value={
                                                                                          category.id
                                                                                     }
                                                                                >
                                                                                     {category.name}
                                                                                </option>
                                                                           )}
                                                                           {category.child_id.map(
                                                                                (id) => {
                                                                                     const child =
                                                                                          categories.find(
                                                                                               (
                                                                                                    cat,
                                                                                               ) =>
                                                                                                    cat.id ===
                                                                                                    id,
                                                                                          );
                                                                                     if (child) {
                                                                                          return (
                                                                                               <option
                                                                                                    value={
                                                                                                         child.id
                                                                                                    }
                                                                                               >
                                                                                                    -{" "}
                                                                                                    {_.capitalize(
                                                                                                         child.name,
                                                                                                    )}
                                                                                               </option>
                                                                                          );
                                                                                     } else {
                                                                                          return (
                                                                                               <></>
                                                                                          );
                                                                                     }
                                                                                },
                                                                           )}
                                                                      </>
                                                                 ))}
                                                       </select>
                                                  </div>
                                                  {/* End .select-custom */}
                                                  <button
                                                       className="btn icon-search-3"
                                                       type="submit"
                                                  />
                                             </div>
                                             {/* End .header-search-wrapper */}
                                        </form>
                                   </div>
                                   {/* End .header-search */}
                                   <div className="header-contact d-none d-lg-flex pl-1 mr-xl-5 pr-4">
                                        <Image
                                             alt="phone"
                                             src={phone}
                                             width={30}
                                             height={30}
                                             className="pb-1"
                                        />
                                        <h6>
                                             Call us now
                                             <a href="tel:#" className="text-dark font1">
                                                  {company?.phone}
                                             </a>
                                        </h6>
                                   </div>
                                   {/* End .header-contact */}
                                   <a href="dashboard.html" className="header-icon login-btn pl-1">
                                        <i className="icon-user-2" />
                                   </a>
                                   <a href="#" className="header-icon account-link pl-1">
                                        <i className="icon-wishlist-2" />
                                   </a>
                                   <div className="dropdown cart-dropdown">
                                        <a
                                             href="#"
                                             title="Cart"
                                             className="dropdown-toggle dropdown-arrow cart-toggle d-flex align-items-center"
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
                                                                      <a href="demo13-product.html">
                                                                           Ultimate 3D Bluetooth
                                                                           Speaker
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
                                                                      href="demo13-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product1}
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
                                                                      <a href="demo13-product.html">
                                                                           Brown Women Casual
                                                                           HandBag
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
                                                                      href="demo13-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product2}
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
                                                                      <a href="demo13-product.html">
                                                                           Circled Ultimate 3D
                                                                           Speaker
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
                                                                      href="demo13-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product3}
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
                    <div
                         className="header-bottom sticky-header d-lg-block d-none"
                         data-sticky-options="{'mobile': false}"
                    >
                         <div className="container">
                              <div className="header-left">
                                   <a href="demo13.html" className="logo">
                                        <Image
                                             src={stickyLogo}
                                             className="white-logo sticky-logo"
                                             alt="Porto Logo"
                                             width={110}
                                             height={46}
                                        />
                                   </a>
                              </div>
                              <div className="header-center">
                                   <nav className="main-nav w-100">
                                        <ul className="menu">
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

                                             {/* <li>
                                                  <a href="demo13-shop.html">Categories</a>
                                                  <div className="megamenu megamenu-fixed-width megamenu-3cols">
                                                       <div className="row">
                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">
                                                                      VARIATION 1
                                                                 </a>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <a href="demo13-shop.html">
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
                                                                           <a href="demo13-shop.html">
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
                                                                           <a href="demo13-shop.html">
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
                                                                           <Image
                                                                                src={menuBanner}
                                                                                alt="Menu banner"
                                                                                width={380}
                                                                                height={790}
                                                                           />
                                                                      </figure>
                                                                      <div className="banner-content">
                                                                           <h4>
                                                                                <span>UP TO</span>
                                                                                <br />
                                                                                <b>50%</b>
                                                                                <i>OFF</i>
                                                                           </h4>
                                                                           <a
                                                                                href="demo13-shop.html"
                                                                                className="btn btn-sm btn-dark"
                                                                           >
                                                                                SHOP NOW
                                                                           </a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li> */}

                                             <li className="float-right">
                                                  <a
                                                       href="https://1.envato.market/DdLk5"
                                                       target="_blank"
                                                  >
                                                       Buy Porto!
                                                  </a>
                                             </li>
                                             <li className="float-right">
                                                  <a href="#">Special Offer!</a>
                                             </li>
                                        </ul>
                                   </nav>
                              </div>
                              <div className="header-right">
                                   <div className="header-search header-icon header-search-inline header-search-category w-lg-max">
                                        <a href="#" className="search-toggle" role="button">
                                             <i className="icon-search-3" />
                                        </a>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control"
                                                       name="q"
                                                       id="qqq"
                                                       placeholder="Search..."
                                                       required
                                                  />
                                                  <div className="select-custom">
                                                       <select id="cat-1" name="cat">
                                                            <option>All Categories</option>
                                                            <option value={4}>Fashion</option>
                                                            <option value={12}>- Women</option>
                                                            <option value={13}>- Men</option>
                                                            <option value={66}>- Jewellery</option>
                                                            <option value={67}>
                                                                 - Kids Fashion
                                                            </option>
                                                            <option value={5}>Electronics</option>
                                                            <option value={21}>- Smart TVs</option>
                                                            <option value={22}>- Cameras</option>
                                                            <option value={63}>- Games</option>
                                                            <option value={7}>
                                                                 Home &amp; Garden
                                                            </option>
                                                            <option value={11}>Motors</option>
                                                            <option value={31}>
                                                                 - Cars and Trucks
                                                            </option>
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
                                                       className="btn p-0 icon-search-3"
                                                       type="submit"
                                                  />
                                             </div>
                                             {/* End .header-search-wrapper */}
                                        </form>
                                   </div>
                                   {/* End .header-search */}
                                   <a href="login.html" className="header-icon ">
                                        <i className="icon-user-2" />
                                   </a>
                                   <a href="wishlist.html" className="header-icon">
                                        <i className="icon-wishlist-2" />
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
                                                                      <a href="demo13-product.html">
                                                                           Ultimate 3D Bluetooth
                                                                           Speaker
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
                                                                      href="demo13-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product1}
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
                                                                      <a href="demo13-product.html">
                                                                           Brown Women Casual
                                                                           HandBag
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
                                                                      href="demo13-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product2}
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
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Circled Ultimate 3D
                                                                           Speaker
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
                                                                      href="demo13-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product3}
                                                                           height={80}
                                                                           alt="product"
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
          </div>
     );
}
