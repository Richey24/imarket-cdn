import { useState } from "react";

import logo from "../../../assets/images/your-logo.png";

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
       setIsMenuOpen(!isMenuOpen);
     };
     const [cat, setCat] = useState(false);
     const [pro, setPro] = useState(false);
     const [pag, setPag] = useState(false);

     return (
          <header className="header">
               <div className="header-top bg-dark">
                    <div className="container">
                         <div className="header-left">
                              <div className="top-notice mb-0 text-white">
                                   <h5 className="mb-0">
                                        Get 10% OFF at the Porto Fashion Selection -
                                        <a href="demo16-shop.html" className="text-white">
                                             Shop Now!
                                        </a>
                                   </h5>
                              </div>
                         </div>
                         <div className="header-right">
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
                              <div className="header-dropdowns">
                                   <div className="header-dropdown">
                                        <a href="#" className="text-white text-nowrap">
                                             USD
                                        </a>
                                        <div className="header-menu">
                                             <ul className="text-center">
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
                                   <div className="header-dropdown text-nowrap">
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
               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <a href="demo16.html" className="logo">
                                   <img src={logo.src} alt="Porto Logo" />
                              </a>
                         </div>
                         {/* End .header-left */}
                         <div className="header-right">
                              <a href="#" className="popup-menu-toggler mr-2 pr-1" >
                                   <i className="toggler-icon" />
                              </a>
                              <div className="separator sepa-1" />
                              <div className="popup-menu">
                                   <button
                                        title="Close (Esc)"
                                        type="button"
                                        className="mfp-close popup-menu-close"
                                   />
                                   <nav>
                                        <ul className="popup-menu-ul">
                                             <li className="active">
                                                  <a href="demo16.html">Home</a>
                                             </li>
                                             <li>
                                                  <a href="demo16-shop.html" className="sf-with-ul">
                                                       Categories
                                                  </a>
                                                  <ul>
                                                       <li>
                                                            <a href="#">
                                                                 Variations 1
                                                                 <span className="tip tip-new">
                                                                      New!
                                                                 </span>
                                                            </a>
                                                            <ul>
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
                                                       </li>
                                                       <li>
                                                            <a href="#">Variations 2</a>
                                                            <ul>
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
                                                       </li>
                                                  </ul>
                                             </li>
                                             <li>
                                                  <a
                                                       href="demo16-product.html"
                                                       className="sf-with-ul"
                                                  >
                                                       Products
                                                  </a>
                                                  <ul>
                                                       <li>
                                                            <a href="#">PRODUCT PAGES</a>
                                                            <ul>
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
                                                       </li>
                                                       <li>
                                                            <a href="#">Product Layout Types</a>
                                                            <ul>
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
                                                       </li>
                                                  </ul>
                                             </li>
                                             <li>
                                                  <a href="#">Pages</a>
                                                  <ul>
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
                                                            <a href="demo16-about.html">About Us</a>
                                                       </li>
                                                       <li>
                                                            <a href="demo16-contact.html">
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
                                             </li>
                                        </ul>
                                   </nav>
                              </div>
                              {/* End .popup-menu */}
                              <div className="header-search header-search-popup header-search-category d-none d-sm-block">
                                   <a
                                        href="#"
                                        className="search-toggle btn icon-magnifier p-0 mr-2 ml-2"
                                        role="button"
                                   />
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper rounded-0">
                                             <input
                                                  type="search"
                                                  className="form-control rounded-0 bg-white"
                                                  name="q"
                                                  id="q"
                                                  placeholder="Search..."
                                             />
                                             <button
                                                  className="btn icon-magnifier rounded-0 p-0"
                                                  type="submit"
                                             />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              <div className="separator sepa-2" />
                              <a href="login.html" className="header-icon login-link mr-3 ml-3">
                                   <i className="icon-user-2" />
                              </a>
                              <div className="separator sepa-3" />
                              <a href="#" className="header-icon icon-wish">
                                   <i className="icon-wishlist-2" />
                              </a>
                              <div className="separator sepa-4" />
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
                                                                 <a href="demo16-product.html">
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
                                                                 href="demo16-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo16/products/product-1.jpg"
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
                                                                 <a href="demo16-product.html">
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
                                                                 href="demo16-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo16/products/product-2.jpg"
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
                                                                 <a href="demo16-product.html">
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
                                                                 href="demo16-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/demoes/demo16/products/product-3.jpg"
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
};

export default Header;
