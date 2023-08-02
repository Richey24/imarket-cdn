const Header = () => {
     return (
          <header className="header">
               <div className="header-top d-none d-lg-block">
                    <div className="container">
                         <div className="header-left">
                              <div className="header-search header-search-inline header-search-category d-block header-icon text-dark">
                                   <a
                                        href="#"
                                        className="search-toggle btn p-0 icon-search-3"
                                        role="button"
                                   ></a>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control"
                                                  name="q"
                                                  id="q"
                                                  placeholder="Search..."
                                              
                                             />
                                             <button
                                                  className="btn icon-magnifier p-0"
                                                  type="submit"
                                             />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                         </div>
                         {/* End .header-dropdown */}
                         <div className="header-right ml-0 ml-lg-auto">
                              <div className="header-dropdowns">
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
                                   {/* End .header-menu */}
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
                                   {/* End .header-dropdown */}
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
                              </div>
                              <a href="login.html" className="header-icon login-link text-dark">
                                   <i className="icon-user-2" />
                              </a>
                              <a href="#" className="header-icon position-relative">
                                   <i className="icon-wishlist-2 text-dark" />
                                   <span className="badge-circle">0</span>
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
                                                                 <a href="demo20-product.html">
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
                                                                 href="demo20-product.html"
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
                                                                 <a href="demo20-product.html">
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
                                                                 href="demo20-product.html"
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
                                                                 <a href="demo20-product.html">
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
                                                                 href="demo20-product.html"
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
                         {/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-top */}
               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left d-none d-lg-flex justify-content-center">
                              <nav className="main-nav">
                                   <ul className="menu">
                                        <li className="active">
                                             <a href="demo20.html">Home</a>
                                        </li>
                                        <li>
                                             <a href="demo20-shop.html">Categories</a>
                                             <div className="megamenu megamenu-fixed-width megamenu-3cols">
                                                  <div className="row">
                                                       <div className="col-lg-4">
                                                            <a href="#" className="nolink">
                                                                 VARIATION 1
                                                            </a>
                                                            <ul className="submenu">
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
                                                       </div>
                                                       <div className="col-lg-4 p-0">
                                                            <div className="menu-banner">
                                                                 <figure>
                                                                      <img
                                                                           src="assets/images/menu-banner.jpg"
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
                                                                           <b className="">50%</b>
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
                                             {/* End .megamenu */}
                                        </li>
                                        <li>
                                             <a href="demo20-product.html">Products</a>
                                             <div className="megamenu megamenu-fixed-width">
                                                  <div className="row">
                                                       <div className="col-lg-4">
                                                            <a href="#" className="nolink">
                                                                 PRODUCT PAGES
                                                            </a>
                                                            <ul className="submenu">
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
                                                       </div>
                                                       {/* End .col-lg-4 */}
                                                       <div className="col-lg-4">
                                                            <a href="#" className="nolink">
                                                                 PRODUCT LAYOUTS
                                                            </a>
                                                            <ul className="submenu">
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
                                                                      <img
                                                                           src="assets/images/menu-banner-1.jpg"
                                                                           alt="Menu banner"
                                                                           className="product-promo"
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
                                             {/* End .megamenu */}
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
                                                       <a href="demo20-about.html">About Us</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo20-contact.html">Contact Us</a>
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
                         <div className="header-center ml-0">
                              <button className="mobile-menu-toggler mr-2" type="button">
                                   <i className="fas fa-bars" />
                              </button>
                              <a href="demo20.html" className="logo">
                                   <img
                                        src="assets/images/your-logo.png"
                                        alt="Porto Logo"
                                        width={101}
                                        height={40}
                                   />
                              </a>
                         </div>
                         <div className="header-right justify-content-center ml-0">
                              <nav className="main-nav">
                                   <ul className="menu">
                                        <li>
                                             <a href="demo20-about.html">About Us</a>
                                        </li>
                                   </ul>
                              </nav>
                         </div>
                         <div className="header-right d-lg-none">
                              <div className="header-icon header-search header-search-popup header-search-category d-none d-sm-block header-icon text-dark">
                                   <a href="#" className="search-toggle btn p-0" role="button">
                                        <i className="icon-search-3" />
                                   </a>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control"
                                                  name="q"
                                                  id="q1"
                                                  placeholder="Search..."
                                             
                                             />
                                             <button
                                                  className="btn icon-magnifier p-0"
                                                  type="submit"
                                             />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              <a href="login.html" className="header-icon login-link text-dark">
                                   <i className="icon-user-2" />
                              </a>
                              <a href="#" className="header-icon position-relative">
                                   <i className="icon-wishlist-2 text-dark" />
                                   <span className="badge-circle">0</span>
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
                                                                 <a href="demo20-product.html">
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
                                                                 href="demo20-product.html"
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
                                                                 <a href="demo20-product.html">
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
                                                                 href="demo20-product.html"
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
                                                                 <a href="demo20-product.html">
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
                                                                 href="demo20-product.html"
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
          </header>
     );
};

export default Header;
