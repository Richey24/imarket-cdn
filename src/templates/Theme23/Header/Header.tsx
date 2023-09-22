import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import banner from "../../../assets/images/menu-banner.jpg";
import banner1 from "../../../assets/images/menu-banner-1.jpg";
import logo from "../../../assets/images/your-logo.png";

const Header = () => {
     const [cat, setCat] = useState(false);
     const [pro, setPro] = useState(false);
     const [pag, setPag] = useState(false);
     return (
          <>
               <div className="top-notice font2">
                    <div className="container-fluid text-center text-dark">
                         <i className="icon-shipping align-middle" />
                         <b className="text-uppercase">Free Shipping</b>&nbsp;on orders of $80 or
                         more! Code:&nbsp;<b className="text-uppercase">PortoMagic</b>&nbsp;|
                         Restrictions Apply.&nbsp;
                         <a href="demo23-shop.html" className="text-dark">
                              See All Offers
                         </a>
                    </div>
                    <button title="Close (Esc)" type="button" className="mfp-close">
                         ×
                    </button>
               </div>
               <header className="header">
                    <div
                         className="header-middle sticky-header"
                         data-sticky-options="{'mobile': true}"
                    >
                         <div className="container-fluid">
                              <div className="header-left d-none d-lg-flex">
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
                                   <div className="header-dropdown">
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
                              </div>
                              <div className="header-center ml-0 ml-lg-auto">
                                   <button className="mobile-menu-toggler" type="button">
                                        <i className="fas fa-bars" />
                                   </button>
                                   <a href="demo23.html" className="logo">
                                        <img
                                             src={logo.src}
                                             alt="Porto Logo"
                                             width={113}
                                             height={48}
                                        />
                                   </a>
                              </div>
                              <div className="header-right">
                                   <a href="login.html" className="header-icon d-lg-block d-none">
                                        <div className="header-user">
                                             <i className="icon-user-2" />
                                             <div className="header-userinfo">
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
                                                                      <a href="demo23-product.html">
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
                                                                      href="demo23-product.html"
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
                                                                      <a href="demo23-product.html">
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
                                                                      href="demo23-product.html"
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
                                                                      <a href="demo23-product.html">
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
                                                                      href="demo23-product.html"
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
                                   <div className="header-search header-search-popup header-search-category text-right d-flex d-lg-none">
                                        <a href="#" className="search-toggle" role="button">
                                             <i className="icon-magnifier" />
                                             <span>Search</span>
                                        </a>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control"
                                                       name="q"
                                                       id="q"
                                                       placeholder="I'm searching for..."
                                                  />
                                                  <div className="select-custom">
                                                       <select id="cat" name="cat">
                                                            <option value="">All Categories</option>
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
                                                       className="btn icon-magnifier p-0"
                                                       title="search"
                                                       type="submit"
                                                  />
                                             </div>
                                             {/* End .header-search-wrapper */}
                                        </form>
                                   </div>
                                   {/* End .header-search */}
                              </div>
                         </div>
                    </div>
                    <div
                         className="header-bottom sticky-header"
                         data-sticky-options="{'mobile': false}"
                    >
                         <div className="container-fluid">
                              <div className="header-left d-flex"></div>
                              <div className="header-center w-auto">
                                   <nav className="main-nav">
                                        <ul className="menu">
                                             <li className="active">
                                                  <a href="demo23.html">Home</a>
                                             </li>
                                             <li
                                                  onMouseEnter={() => setCat(true)}
                                                  onMouseLeave={() => setCat(false)}
                                             >
                                                  <a
                                                       href="demo20-shop.html"
                                                       style={{ display: "flex" }}
                                                  >
                                                       Categories <FiChevronDown size={15} />
                                                  </a>
                                                  {cat && (
                                                       <div
                                                            style={{
                                                                 width: "650px",
                                                                 position: "absolute",
                                                                 backgroundColor: "#fff",
                                                                 border: "1px solid #eee",
                                                                 padding: "10px 20px",
                                                                 zIndex: 999,
                                                                 boxShadow:
                                                                      "0 1rem 2.5rem rgba(0,0,0,0.15)",
                                                            }}
                                                       >
                                                            <div className="row">
                                                                 <div className="col-lg-4">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink"
                                                                      >
                                                                           VARIATION 1
                                                                      </a>
                                                                      <ul
                                                                           style={{
                                                                                display: "block",
                                                                                paddingTop: 0,
                                                                                position: "static",
                                                                                boxShadow: "none",
                                                                                minWidth: 0,
                                                                                margin: 0,
                                                                                borderTop: "none",
                                                                           }}
                                                                      >
                                                                           <li>
                                                                                <a href="category.html">
                                                                                     Fullwidth
                                                                                     Banner
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-banner-boxed-slider.html">
                                                                                     Boxed Slider
                                                                                     Banner
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-banner-boxed-image.html">
                                                                                     Boxed Image
                                                                                     Banner
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
                                                                                     Off Canvas
                                                                                     Filter
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-horizontal-filter1.html">
                                                                                     Horizontal
                                                                                     Filter1
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-horizontal-filter2.html">
                                                                                     Horizontal
                                                                                     Filter2
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-4">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink"
                                                                      >
                                                                           VARIATION 2
                                                                      </a>
                                                                      <ul
                                                                           style={{
                                                                                display: "block",
                                                                                paddingTop: 0,
                                                                                position: "static",
                                                                                boxShadow: "none",
                                                                                minWidth: 0,
                                                                                margin: 0,
                                                                                borderTop: "none",
                                                                           }}
                                                                      >
                                                                           <li>
                                                                                <a href="category-list.html">
                                                                                     List Types
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-infinite-scroll.html">
                                                                                     Ajax Infinite
                                                                                     Scroll
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category.html">
                                                                                     3 Columns
                                                                                     Products
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-4col.html">
                                                                                     4 Columns
                                                                                     Products
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-5col.html">
                                                                                     5 Columns
                                                                                     Products
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-6col.html">
                                                                                     6 Columns
                                                                                     Products
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-7col.html">
                                                                                     7 Columns
                                                                                     Products
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="category-8col.html">
                                                                                     8 Columns
                                                                                     Products
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-4 p-0">
                                                                      <div className="menu-banner">
                                                                           <figure>
                                                                                <img
                                                                                     style={{
                                                                                          height: "100%",
                                                                                          objectFit:
                                                                                               "cover",
                                                                                          objectPosition:
                                                                                               "center 80%",
                                                                                     }}
                                                                                     src={
                                                                                          banner.src
                                                                                     }
                                                                                     alt="Menu banner"
                                                                                     width={300}
                                                                                     height={300}
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
                                                  )}
                                                  {/* End .megamenu */}
                                             </li>
                                             <li
                                                  onMouseEnter={() => setPro(true)}
                                                  onMouseLeave={() => setPro(false)}
                                             >
                                                  <a
                                                       href="demo20-product.html"
                                                       style={{ display: "flex" }}
                                                  >
                                                       Products <FiChevronDown size={15} />
                                                  </a>
                                                  {pro && (
                                                       <div
                                                            style={{
                                                                 width: "650px",
                                                                 position: "absolute",
                                                                 backgroundColor: "#fff",
                                                                 border: "1px solid #eee",
                                                                 padding: "10px 20px",
                                                                 zIndex: 999,
                                                                 boxShadow:
                                                                      "0 1rem 2.5rem rgba(0,0,0,0.15)",
                                                            }}
                                                       >
                                                            <div className="row">
                                                                 <div className="col-lg-4">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink"
                                                                      >
                                                                           PRODUCT PAGES
                                                                      </a>
                                                                      <ul
                                                                           style={{
                                                                                display: "block",
                                                                                paddingTop: 0,
                                                                                position: "static",
                                                                                boxShadow: "none",
                                                                                minWidth: 0,
                                                                                margin: 0,
                                                                                borderTop: "none",
                                                                           }}
                                                                      >
                                                                           <li>
                                                                                <a href="product.html">
                                                                                     SIMPLE PRODUCT
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product-variable.html">
                                                                                     VARIABLE
                                                                                     PRODUCT
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product.html">
                                                                                     SALE PRODUCT
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product.html">
                                                                                     FEATURED &amp;
                                                                                     ON SALE
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product-custom-tab.html">
                                                                                     WITH CUSTOM TAB
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product-sidebar-left.html">
                                                                                     WITH LEFT
                                                                                     SIDEBAR
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product-sidebar-right.html">
                                                                                     WITH RIGHT
                                                                                     SIDEBAR
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product-addcart-sticky.html">
                                                                                     ADD CART STICKY
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 {/* End .col-lg-4 */}
                                                                 <div className="col-lg-4">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink"
                                                                      >
                                                                           PRODUCT LAYOUTS
                                                                      </a>
                                                                      <ul
                                                                           style={{
                                                                                display: "block",
                                                                                paddingTop: 0,
                                                                                position: "static",
                                                                                boxShadow: "none",
                                                                                minWidth: 0,
                                                                                margin: 0,
                                                                                borderTop: "none",
                                                                           }}
                                                                      >
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
                                                                                     FULL WIDTH
                                                                                     LAYOUT
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product-sticky-info.html">
                                                                                     STICKY INFO
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product-sticky-both.html">
                                                                                     LEFT &amp;
                                                                                     RIGHT STICKY
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="product-transparent-image.html">
                                                                                     TRANSPARENT
                                                                                     IMAGE
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
                                                                 {/* End .col-lg-4 */}
                                                                 <div className="col-lg-4 p-0">
                                                                      <div className="menu-banner menu-banner-2">
                                                                           <figure>
                                                                                <img
                                                                                     style={{
                                                                                          height: "100%",
                                                                                          objectFit:
                                                                                               "cover",
                                                                                          objectPosition:
                                                                                               "center 80%",
                                                                                     }}
                                                                                     src={
                                                                                          banner1.src
                                                                                     }
                                                                                     alt="Menu banner"
                                                                                     width={300}
                                                                                     height={300}
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
                                                                                href="category.html"
                                                                                className="btn btn-sm btn-dark"
                                                                           >
                                                                                SHOP NOW
                                                                           </a>
                                                                      </div>
                                                                 </div>
                                                                 {/* End .col-lg-4 */}
                                                            </div>
                                                            {/* End .row */}
                                                       </div>
                                                  )}
                                                  {/* End .megamenu */}
                                             </li>
                                             <li
                                                  onMouseEnter={() => setPag(true)}
                                                  onMouseLeave={() => setPag(false)}
                                             >
                                                  <a href="#" style={{ display: "flex" }}>
                                                       Pages <FiChevronDown size={15} />
                                                  </a>
                                                  {pag && (
                                                       <ul
                                                            style={{
                                                                 display: "block",
                                                                 paddingTop: 0,
                                                                 minWidth: 0,
                                                                 margin: 0,
                                                                 position: "absolute",
                                                                 borderTop: "none",
                                                                 width: "200px",
                                                                 backgroundColor: "#fff",
                                                                 border: "1px solid #eee",
                                                                 padding: "10px 20px",
                                                                 boxShadow:
                                                                      "0 1rem 2.5rem rgba(0,0,0,0.15)",
                                                            }}
                                                       >
                                                            <li>
                                                                 <a href="wishlist.html">
                                                                      Wishlist
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="cart.html">
                                                                      Shopping Cart
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="checkout.html">
                                                                      Checkout
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="dashboard.html">
                                                                      Dashboard
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="demo20-about.html">
                                                                      About Us
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="demo20-contact.html">
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
                                                  )}
                                             </li>
                                        </ul>
                                   </nav>
                              </div>
                              <div className="header-right d-flex pr-0">
                                   <div className="header-search header-search-popup header-search-category text-right">
                                        <a href="#" className="search-toggle" role="button">
                                             <i className="icon-magnifier mr-2" />
                                             <span>Search</span>
                                        </a>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control"
                                                       name="q"
                                                       id="q1"
                                                       placeholder="I'm searching for..."
                                                  />
                                                  <div className="select-custom">
                                                       <select id="cat1" name="cat">
                                                            <option value="">All Categories</option>
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
                                                       className="btn icon-magnifier p-0"
                                                       title="search"
                                                       type="submit"
                                                  />
                                             </div>
                                             {/* End .header-search-wrapper */}
                                        </form>
                                   </div>
                                   {/* End .header-search */}
                              </div>
                         </div>
                    </div>
               </header>
          </>
     );
};

export default Header;
