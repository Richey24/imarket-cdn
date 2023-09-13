import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import banner from "../../../assets/images/menu-banner.jpg";
import banner1 from "../../../assets/images/menu-banner-1.jpg";
import logo from "../../../assets/images/your-logo.png";
import banner2 from "../../../assets/images/demoes/demo22/banners/header-item.png";

const Header = () => {
     const [cat, setCat] = useState(false);
     const [pro, setPro] = useState(false);
     const [pag, setPag] = useState(false);
     const [ven, setVen] = useState(false);
     return (
          <div>
               <div className="top-notice">
                    <div className="container d-flex flex-wrap align-items-center justify-content-center text-center">
                         <img src={banner2.src} alt="Top Ads" width={237} height={49} />
                         <div className="notice-content my-2">
                              <h3
                                   className="d-inline-block font1   mb-0"
                                   style={{ color: "#188268" }}
                              >
                                   PortoPlus X Pro Only
                              </h3>
                              <div className="d-inline-block">
                                   <span
                                        className="d-inline-block skew-box product-price font1 font-weight-bold  "
                                        style={{ background: "#188268" }}
                                   >
                                        $199
                                   </span>
                                   <span
                                        className="d-inline-block font1 old-price   mr-0"
                                        style={{ color: "#188268" }}
                                   >
                                        $299
                                   </span>
                              </div>
                         </div>
                         <a href="#" className="btn btn-dark font1 ls-n-10 round-box my-2">
                              code: <strong>portoplusx</strong>
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
                         style={{ paddingLeft: "80px", paddingRight: "80px" }}
                    >
                         <div className="container">
                              <div className="header-left">
                                   <a href="demo22.html" className="logo">
                                        <img
                                             src={logo.src}
                                             alt="Porto Logo"
                                             width={111}
                                             height={44}
                                        />
                                   </a>
                                   <div className="header-col">
                                        <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mt-0">
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
                                                            placeholder="I'm searching for..."
                                                       />
                                                       <div className="select-custom">
                                                            <select id="cat" name="cat">
                                                                 <option value="">
                                                                      All Categories
                                                                 </option>
                                                                 <option value={4}>Fashion</option>
                                                                 <option value={12}>- Women</option>
                                                                 <option value={13}>- Men</option>
                                                                 <option value={66}>
                                                                      - Jewellery
                                                                 </option>
                                                                 <option value={67}>
                                                                      - Kids Fashion
                                                                 </option>
                                                                 <option value={5}>
                                                                      Electronics
                                                                 </option>
                                                                 <option value={21}>
                                                                      - Smart TVs
                                                                 </option>
                                                                 <option value={22}>
                                                                      - Cameras
                                                                 </option>
                                                                 <option value={63}>- Games</option>
                                                                 <option value={7}>
                                                                      Home &amp; Garden
                                                                 </option>
                                                                 <option value={11}>Motors</option>
                                                                 <option value={31}>
                                                                      - Cars and Trucks
                                                                 </option>
                                                                 <option value={32}>
                                                                      - Motorcycles &amp;
                                                                      Powersports
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
                                                            className="btn icon-magnifier"
                                                            title="search"
                                                            type="submit"
                                                       />
                                                  </div>
                                                  {/* End .header-search-wrapper */}
                                             </form>
                                        </div>
                                        {/* End .header-search */}
                                        <div className="tagcloud d-none d-lg-flex">
                                             <a href="demo22-shop.html">clothes</a>
                                             <a href="demo22-shop.html">fashion</a>
                                             <a href="demo22-shop.html">hub</a>
                                             <a href="demo22-shop.html">shirt</a>
                                             <a href="demo22-shop.html">skirt</a>
                                             <a href="demo22-shop.html">sports</a>
                                             <a href="demo22-shop.html">sweater</a>
                                        </div>
                                   </div>
                              </div>
                              <div className="header-right ml-0 ml-lg-auto">
                                   <a
                                        href="login.html"
                                        className="header-icon d-md-block d-none mr-0"
                                   >
                                        <div className="header-user">
                                             <i className="icon-user-2" />
                                             <div className="header-userinfo">
                                                  <span className="d-inline-block line-height-1 ls-10">
                                                       Hello!
                                                  </span>
                                                  <h4 className="font1 mb-0">My Account</h4>
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
                                                                      <a href="demo22-product.html">
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
                                                                      href="demo22-product.html"
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
                                                                      <a href="demo22-product.html">
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
                                                                      href="demo22-product.html"
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
                                                                      <a href="demo22-product.html">
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
                                                                      href="demo22-product.html"
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
                         className="header-bottom sticky-header"
                         data-sticky-options="{'mobile': false, 'offset': 684}"
                    >
                         <div className="container">
                              <div className="header-center">
                                   <button className="mobile-menu-toggler" type="button">
                                        <i className="fas fa-bars" />
                                   </button>
                                   <nav className="main-nav d-none d-lg-flex flex-wrap">
                                        <div className="menu-depart show-always">
                                             <a href="#" className="toggle">
                                                  <i className="fas fa-bars" />
                                                  Shop by Category
                                             </a>
                                             <div className="submenu">
                                                  <a href="demo22-shop.html" className="active">
                                                       <i className="icon-category-home" />
                                                       Home
                                                  </a>
                                                  <a href="demo22-shop.html">
                                                       <i className="icon-category-fashion" />
                                                       Fashion
                                                  </a>
                                                  <a href="demo22-shop.html">
                                                       <i className="icon-category-electronics" />
                                                       Electronics
                                                  </a>
                                                  <a href="demo22-shop.html">
                                                       <i className="icon-category-gifts" />
                                                       Gifts
                                                  </a>
                                                  <a href="demo22-shop.html">
                                                       <i className="icon-category-garden" />
                                                       Garden
                                                  </a>
                                                  <a href="demo22-shop.html">
                                                       <i className="icon-category-music" />
                                                       Music
                                                  </a>
                                                  <a href="demo22-shop.html">
                                                       <i className="icon-category-motors" />
                                                       Motors
                                                  </a>
                                                  <a href="demo22-shop.html">
                                                       <i className="icon-category-furniture" />
                                                       Furniture
                                                  </a>
                                                  <a href="demo22-shop.html">
                                                       VIEW ALL <i className="icon-angle-right" />
                                                  </a>
                                             </div>
                                        </div>
                                        <ul className="menu">
                                             <li className="active">
                                                  <a href="demo22.html">Home</a>
                                             </li>
                                             <li
                                                  onMouseEnter={() => setVen(true)}
                                                  onMouseLeave={() => setVen(false)}
                                             >
                                                  <a
                                                       href="demo22-vendors.html"
                                                       style={{ display: "flex" }}
                                                  >
                                                       Vendor <FiChevronDown size={15} />
                                                  </a>
                                                  {ven && (
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
                                                                 <a href="demo22-vendors.html">
                                                                      Store List
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="demo22-store.html">
                                                                      Vendor Store
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                  )}
                                             </li>
                                             <li
                                                  onMouseEnter={() => setCat(true)}
                                                  onMouseLeave={() => setCat(false)}
                                             >
                                                  <a
                                                       href="demo21-shop.html"
                                                       style={{ display: "flex" }}
                                                  >
                                                       Categories <FiChevronDown size={15} />{" "}
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
                                                       href="demo21-product.html"
                                                       style={{ display: "flex" }}
                                                  >
                                                       Products <FiChevronDown size={15} />
                                                  </a>
                                                  {pro && (
                                                       <div
                                                            style={{
                                                                 width: "600px",
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
                                                                                <a href="demo21-product.html">
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
                                                                                <a href="demo21-product.html">
                                                                                     SALE PRODUCT
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo21-product.html">
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
                                                                 <a href="demo21-about.html">
                                                                      About Us
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="demo21-contact.html">
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
                                   <div className="header-dropdowns ml-auto">
                                        <a
                                             href="#"
                                             className="link-seller font-weight-bold d-none d-sm-block"
                                        />
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
                              </div>
                         </div>
                    </div>
               </header>
          </div>
     );
};

export default Header;
