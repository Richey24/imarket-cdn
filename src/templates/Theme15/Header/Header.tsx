import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import menuBanner from "../../../assets/images/menu-banner.jpg";
import menuBanner1 from "../../../assets/images/menu-banner-1.jpg";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { templateImages } from "@/appProvider/templateImages";
const Header = (props: any) => {
     const { company, static: staticProps } = props.props;

     const [cat, setCat] = useState(false);
     const [pro, setPro] = useState(false);
     const [pag, setPag] = useState(false);
     return (
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
                                   {/* End .header-menu */}
                              </div>
                              {/* End .header-dropown */}
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
                                   {/* End .header-menu */}
                              </div>
                              {/* End .header-dropown */}
                         </div>
                         {/* End .header-left */}
                         <div className="header-right">
                              <p className="top-message text-uppercase d-none d-sm-block">
                                   Free returns. Standard shipping orders $99+
                              </p>
                              <span className="separator" />
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
                              {/* End .social-icons */}
                         </div>
                         {/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-top */}
               <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}">
                    <div className="container">
                         <div className="header-left col-lg-2 w-auto pl-0">
                              <button className="mobile-menu-toggler" type="button">
                                   <i className="fas fa-bars" />
                              </button>
                              <a href="demo15.html" className="logo">
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
                              </a>
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
                                                  className="form-control bg-light"
                                                  name="q"
                                                  id="q"
                                                  placeholder="Search..."
                                                  required
                                             />
                                             <div className="select-custom body-text d-flex align-items-center mx-1">
                                                  <select id="cat" name="cat" className="bg-light">
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
                                                  <FiChevronDown className="bg-light h-100" />
                                             </div>
                                             {/* End .select-custom */}
                                             <button
                                                  className="btn icon-search-3 bg-light"
                                                  type="submit"
                                             />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              {/* End .header-search */}
                              <div className="header-contact d-none d-lg-flex pl-1">
                                   <i className="icon-phone-2" />
                                   <h6>
                                        Call us now
                                        <a href="tel:#" className="text-dark font1">
                                             +123 5678 890
                                        </a>
                                   </h6>
                              </div>
                              {/* End .header-contact */}
                              <a
                                   href="login.html"
                                   className="header-icon btn-login login-link pl-1"
                              >
                                   <i className="icon-user-2" />
                              </a>
                              <a href="#" className="header-icon btn-wishlist pl-1">
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
                                                                 <a href="demo15-product.html">
                                                                      Ultimate 3D Bluetooth Speaker
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
                                                                 href="demo15-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo15/products/product-1.jpg"
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
                                                                 <a href="demo15-product.html">
                                                                      Brown Women Casual HandBag
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
                                                                 href="demo15-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo15/products/product-2.jpg"
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
                                                                 <a href="demo15-product.html">
                                                                      Circled Ultimate 3D Speaker
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
                                                                 href="demo15-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo15/products/product-3.jpg"
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
                              <a href="demo15.html" className="logo">
                                   <Image
                                        src={templateImages.logoImage.logo1}
                                        className="white-logo sticky-logo"
                                        alt="Porto Logo"
                                        width={110}
                                        height={46}
                                   />
                              </a>
                         </div>
                         <nav className="main-nav d-flex w-lg-max justify-content-center text-white">
                              <ul className="menu">
                                   <li className="active">
                                        <a href="demo15.html">Home</a>
                                   </li>
                                   <li
                                        onMouseEnter={() => setCat(true)}
                                        onMouseLeave={() => setCat(false)}
                                   >
                                        <a href="demo15-shop.html">Categories</a>
                                        {cat && (
                                             <div
                                                  className="megamen megamenu-fixed-width megamenu-3cols"
                                                  style={{
                                                       width: "700px",
                                                       position: "absolute",
                                                       backgroundColor: "#fff",
                                                       border: "1px solid #eee",
                                                       padding: "10px 20px",
                                                       zIndex: 999,
                                                       boxShadow: "0 1rem 2.5rem rgba(0,0,0,0.15)",
                                                  }}
                                             >
                                                  <div className="row">
                                                       <div className="col-lg-4">
                                                            <a href="#" className="nolink">
                                                                 VARIATION 1
                                                            </a>
                                                            <ul
                                                                 className="submen"
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
                                                                      <a href="demo15-shop.html">
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
                                                                      <a href="demo15-shop.html">
                                                                           Left Sidebar
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="category-sidebar-right.html">
                                                                           Right Sidebar
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="category-flex-grid.html">
                                                                           Product Flex Grid
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
                                                            <ul
                                                                 className="submen"
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
                                                                           Ajax Infinite Scroll
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="demo15-shop.html">
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
                                                                           src={
                                                                                templateImages
                                                                                     .allBannerImage
                                                                                     .banner2
                                                                           }
                                                                           alt="Menu banner"
                                                                           width={380}
                                                                           height={790}
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
                                                                           href="demo15-shop.html"
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
                                        <a href="demo15-product.html">Products</a>
                                        {pro && (
                                             <div
                                                  className="megamen megamenu-fixed-width megamenu-3cols"
                                                  style={{
                                                       width: "700px",
                                                       position: "absolute",
                                                       backgroundColor: "#fff",
                                                       border: "1px solid #eee",
                                                       padding: "10px 20px",
                                                       zIndex: 999,
                                                       boxShadow: "0 1rem 2.5rem rgba(0,0,0,0.15)",
                                                  }}
                                             >
                                                  <div className="row">
                                                       <div className="col-lg-4">
                                                            <a href="#" className="nolink">
                                                                 PRODUCT PAGES
                                                            </a>
                                                            <ul
                                                                 className="submen"
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
                                                                      <a href="demo15-product.html">
                                                                           SIMPLE PRODUCT
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="product-variable.html">
                                                                           VARIABLE PRODUCT
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="demo15-product.html">
                                                                           SALE PRODUCT
                                                                      </a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="demo15-product.html">
                                                                           FEATURED &amp; ON SALE
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
                                                       {/* End .col-lg-4 */}
                                                       <div className="col-lg-4">
                                                            <a href="#" className="nolink">
                                                                 PRODUCT LAYOUTS
                                                            </a>
                                                            <ul
                                                                 className="submen"
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
                                                                           LEFT &amp; RIGHT STICKY
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
                                                       {/* End .col-lg-4 */}
                                                       <div className="col-lg-4 p-0">
                                                            <div className="menu-banner menu-banner-2">
                                                                 <figure>
                                                                      <Image
                                                                           style={{
                                                                                height: "100%",
                                                                                objectFit: "cover",
                                                                                objectPosition:
                                                                                     "center 80%",
                                                                           }}
                                                                           src={
                                                                                templateImages
                                                                                     .allBannerImage
                                                                                     .banner1
                                                                           }
                                                                           alt="Menu banner"
                                                                           className="product-prom"
                                                                           width={380}
                                                                           height={790}
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
                                                                      href="demo15-shop.html"
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
                                        <a href="#">Pages</a>
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
                                                       boxShadow: "0 1rem 2.5rem rgba(0,0,0,0.15)",
                                                  }}
                                             >
                                                  <li>
                                                       <a href="cart.html">Shopping Cart</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Checkout</a>
                                                       <ul>
                                                            <li>
                                                                 <a href="checkout-shipping.html">
                                                                      Checkout Shipping
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="checkout-shipping-2.html">
                                                                      Checkout Shipping 2
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="checkout-review.html">
                                                                      Checkout Review
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li>
                                                       <a href="#">Dashboard</a>
                                                       <ul>
                                                            <li>
                                                                 <a href="dashboard.html">
                                                                      Dashboard
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="my-account.html">
                                                                      My Account
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li>
                                                       <a href="about.html">About Us</a>
                                                  </li>
                                                  <li>
                                                       <a href="contact.html">Contact Us</a>
                                                  </li>
                                                  <li>
                                                       <a href="#" className="login-link">
                                                            Login
                                                       </a>
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
                         <div className="header-right">
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
                                                                 <a href="demo15-product.html">
                                                                      Ultimate 3D Bluetooth Speaker
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
                                                                 href="demo15-product.html"
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
                                                                 <a href="demo15-product.html">
                                                                      Brown Women Casual HandBag
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
                                                                 href="demo15-product.html"
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
                                                                 <a href="demo15-product.html">
                                                                      Circled Ultimate 3D Speaker
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
                                                                 href="demo15-product.html"
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
                    {/* End .container */}
               </div>
               {/* End .header-bottom */}
          </header>
     );
     {
          /* End .header */
     }
};
export default Header;
