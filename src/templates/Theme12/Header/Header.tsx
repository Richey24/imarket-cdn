import "./Header.css"
import Image from "next/image";
import { templateImages } from "@/appProvider/templateImages";

const Header = () => {

     const showSearch = () => {
          document.getElementById("searchDiv").classList.toggle("showSearch")
     }
     const showCanvas = () => {
          document.getElementById("cartCanvas").classList.toggle("showCanvas")
     }

     const showDrop = (id: string) => {
          document.getElementById(id)?.classList.toggle("showDrop")
     }

     return (
          <div>
               <div className="top-notice bg-dark text-white">
                    <div className="container text-center pl-6 pr-6">
                         <h5 className="d-inline-block mb-0 m-r-1">Get Up to <b>40% OFF</b> New-Season Styles</h5>
                         <a href="demo12-shop.html" className="category">MEN</a>
                         <a href="demo12-shop.html" className="category m-l-1 m-r-2">WOMEN</a>
                         <small>* Limited time only.</small>
                         <button title="Close (Esc)" type="button" className="mfp-close">×</button>
                    </div>
               </div>
               <div className="header-wrapper position-relative">
                    <div className="header position-absolute">
                         <div className="header-top">
                              <div className="container d-flex">
                                   <div className="header-left">
                                        <div className="header-dropdown">
                                             <a href="#" className="pl-0">USD</a>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li><a href="#">EUR</a></li>
                                                       <li><a href="#">USD</a></li>
                                                  </ul>
                                             </div>

                                        </div>


                                        <div className="header-dropdown">
                                             <a href="#" className="pl-0">ENG</a>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li><a href="#">ENG</a></li>
                                                       <li><a href="#">FRH</a></li>
                                                  </ul>
                                             </div>

                                        </div>

                                   </div>


                                   <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                                        <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                                             <a href="#">Links</a>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li><a href="dashboard.html">Dashboard</a></li>
                                                       <li><a href="cart.html">Cart</a></li>
                                                       <li><a href="cart.html">Checkout</a></li>
                                                       <li><a href="wishlist.html">Wishlist</a></li>
                                                       <li><a href="about.html">About Us</a></li>
                                                       <li><a href="blog.html">Contact Us</a></li>
                                                  </ul>
                                             </div>
                                        </div>
                                        <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                             <a href="#">Order</a>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li><a href="#">Order Tracking</a></li>
                                                       <li><a href="#">Order History</a></li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                         </div>


                         <div className="header-middle sticky-header">
                              <div className="container d-flex">
                                   <div className="header-left">
                                        <button className="mobile-menu-toggler" type="button">
                                             <i className="fas fa-bars"></i>
                                        </button>

                                        <a href="demo12.html" className="logo">
                                             <Image src={templateImages.logoImage.logo2} alt="Porto Logo" width="104" height="41" />
                                        </a>

                                        <nav className="main-nav font2">
                                             <ul className="menu">
                                                  <li>
                                                       <a href="demo12.html">Home</a>
                                                  </li>

                                                  <li>
                                                       <a className="themeEightDrop" onMouseEnter={() => showDrop("theCategory")} onMouseLeave={() => showDrop("theCategory")} href="demo12-shop.html">Categories</a>
                                                       <div onMouseEnter={() => showDrop("theCategory")} onMouseLeave={() => showDrop("theCategory")} id="theCategory" className="megamenu megamenu-fixed-width megamenu-3cols">
                                                            <div className="row">
                                                                 <div className="col-lg-4">
                                                                      <a href="#" className="nolink">VARIATION 1</a>
                                                                      <ul className="submenu">
                                                                           <li><a href="category.html">Fullwidth Banner</a></li>
                                                                           <li><a href="category-banner-boxed-slider.html">Boxed Slider
                                                                                Banner</a>
                                                                           </li>
                                                                           <li><a href="category-banner-boxed-image.html">Boxed Image
                                                                                Banner</a>
                                                                           </li>
                                                                           <li><a href="category.html">Left Sidebar</a></li>
                                                                           <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                                                           <li><a href="category-off-canvas.html">Off Canvas Filter</a>
                                                                           </li>
                                                                           <li><a href="category-horizontal-filter1.html">Horizontal
                                                                                Filter1</a>
                                                                           </li>
                                                                           <li><a href="category-horizontal-filter2.html">Horizontal
                                                                                Filter2</a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-4">
                                                                      <a href="#" className="nolink">VARIATION 2</a>
                                                                      <ul className="submenu">
                                                                           <li><a href="category-list.html">List Types</a></li>
                                                                           <li><a href="category-infinite-scroll.html">Ajax Infinite
                                                                                Scroll</a>
                                                                           </li>
                                                                           <li><a href="category.html">3 Columns Products</a></li>
                                                                           <li><a href="category-4col.html">4 Columns Products</a></li>
                                                                           <li><a href="category-5col.html">5 Columns Products</a></li>
                                                                           <li><a href="category-6col.html">6 Columns Products</a></li>
                                                                           <li><a href="category-7col.html">7 Columns Products</a></li>
                                                                           <li><a href="category-8col.html">8 Columns Products</a></li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-4 p-0">
                                                                      <div className="menu-banner">
                                                                           <figure>
                                                                                <Image src={templateImages.menuBanner.menu1} width="192"
                                                                                     height="313" alt="Menu banner" />
                                                                           </figure>
                                                                           <div className="banner-content">
                                                                                <h4>
                                                                                     <span className="">UP TO</span><br />
                                                                                     <b className="">50%</b>
                                                                                     <i>OFF</i>
                                                                                </h4>
                                                                                <a href="category.html" className="btn btn-sm btn-dark">SHOP
                                                                                     NOW</a>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>

                                                  </li>

                                                  <li>
                                                       <a className="themeEightDrop" onMouseEnter={() => showDrop("theProducts")} onMouseLeave={() => showDrop("theProducts")} href="demo12-product.html">Products</a>
                                                       <div onMouseEnter={() => showDrop("theProducts")} onMouseLeave={() => showDrop("theProducts")} id="theProducts" className="megamenu megamenu-fixed-width">
                                                            <div className="row">
                                                                 <div className="col-lg-4">
                                                                      <a href="#" className="nolink">PRODUCT PAGES</a>
                                                                      <ul className="submenu">
                                                                           <li><a href="product.html">SIMPLE PRODUCT</a></li>
                                                                           <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                                                                           <li><a href="product.html">SALE PRODUCT</a></li>
                                                                           <li><a href="product.html">FEATURED & ON SALE</a></li>
                                                                           <li><a href="product-custom-tab.html">WITH CUSTOM TAB</a></li>
                                                                           <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a>
                                                                           </li>
                                                                           <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a>
                                                                           </li>
                                                                           <li><a href="product-addcart-sticky.html">ADD CART STICKY</a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>


                                                                 <div className="col-lg-4">
                                                                      <a href="#" className="nolink">PRODUCT LAYOUTS</a>
                                                                      <ul className="submenu">
                                                                           <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a>
                                                                           </li>
                                                                           <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                                                                           <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                                                                           <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                                                                           <li><a href="product-sticky-both.html">LEFT & RIGHT STICKY</a>
                                                                           </li>
                                                                           <li><a href="product-transparent-image.html">TRANSPARENT
                                                                                IMAGE</a></li>
                                                                           <li><a href="product-center-vertical.html">CENTER VERTICAL</a>
                                                                           </li>
                                                                           <li><a href="#">BUILD YOUR OWN</a></li>
                                                                      </ul>
                                                                 </div>


                                                                 <div className="col-lg-4 p-0">
                                                                      <div className="menu-banner menu-banner-2">
                                                                           <figure>
                                                                                <Image src={templateImages.menuBanner.menu2} alt="Menu banner"
                                                                                     className="product-promo" width="192"
                                                                                     height="313" />
                                                                           </figure>
                                                                           <i>OFF</i>
                                                                           <div className="banner-content">
                                                                                <h4>
                                                                                     <span className="">UP TO</span><br />
                                                                                     <b className="">50%</b>
                                                                                </h4>
                                                                           </div>
                                                                           <a href="demo12-shop.html" className="btn btn-sm btn-dark">SHOP
                                                                                NOW</a>
                                                                      </div>
                                                                 </div>

                                                            </div>

                                                       </div>

                                                  </li>

                                                  <li>
                                                       <a className="themeEightDrop" onMouseEnter={() => showDrop("thePages")} onMouseLeave={() => showDrop("thePages")} href="#">Pages</a>
                                                       <ul onMouseEnter={() => showDrop("thePages")} onMouseLeave={() => showDrop("thePages")} id="thePages">
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                            <li><a href="cart.html">Shopping Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                            <li><a href="dashboard.html">Dashboard</a></li>
                                                            <li><a href="demo12-about.html">About Us</a></li>

                                                            <li><a href="demo12-contact.html">Contact Us</a></li>
                                                            <li><a href="login.html">Login</a></li>
                                                            <li><a href="forgot-password.html">Forgot Password</a></li>
                                                       </ul>
                                                  </li>





                                             </ul>
                                        </nav>
                                   </div>


                                   <div className="header-right">
                                        <a href="login.html" className="header-icon header-icon-user"><i className="icon-user-2"></i></a>

                                        <a href="#" className="header-icon position-relative header-wishlist">
                                             <i className="icon-wishlist-2"></i>
                                             <span className="cart-count badge-circle bg-secondary">0</span>
                                        </a>

                                        <div className="header-search header-search-popup header-search-category d-none d-sm-block">
                                             <a onClick={showSearch} href="#" className="search-toggle header-icon" role="button">
                                                  <i className="icon-search-3"></i>
                                             </a>

                                             <form action="#" method="get">
                                                  <div id="searchDiv" className="header-search-wrapper">
                                                       <input type="search" className="form-control bg-white" name="q" id="q"
                                                            placeholder="Search..." required />
                                                       <div className="select-custom bg-white">
                                                            <select id="cat" name="cat">
                                                                 <option value="">All Categories</option>
                                                                 <option value="4">Fashion</option>
                                                                 <option value="12">- Women</option>
                                                                 <option value="13">- Men</option>
                                                                 <option value="66">- Jewellery</option>
                                                                 <option value="67">- Kids Fashion</option>
                                                                 <option value="5">Electronics</option>
                                                                 <option value="21">- Smart TVs</option>
                                                                 <option value="22">- Cameras</option>
                                                                 <option value="63">- Games</option>
                                                                 <option value="7">Home &amp; Garden</option>
                                                                 <option value="11">Motors</option>
                                                                 <option value="31">- Cars and Trucks</option>
                                                                 <option value="32">- Motorcycles &amp; Powersports</option>
                                                                 <option value="33">- Parts &amp; Accessories</option>
                                                                 <option value="34">- Boats</option>
                                                                 <option value="57">- Auto Tools &amp; Supplies</option>
                                                            </select>
                                                       </div>
                                                       <button className="btn icon-search-3 bg-white" type="submit"></button>
                                                  </div>
                                             </form>
                                        </div>

                                        <div className="dropdown cart-dropdown">
                                             <a onClick={showCanvas} href="#" className="dropdown-toggle dropdown-arrow cart-toggle" role="button"
                                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                  data-display="static">
                                                  <i className="icon-shopping-cart"></i>
                                                  <span className="cart-count badge-circle bg-secondary">3</span>
                                             </a>

                                             {/* <div className="cart-overlay"></div> */}

                                             <div id="cartCanvas" className="cartCanvas" style={{ position: "fixed", top: "0px", right: "0px", zIndex: "10", alignItems: "flex-start", gap: "10px" }}>
                                                  <a style={{ fontSize: "40px", color: "white" }} onClick={showCanvas} href="#" title="Close (Esc)" className="btn-close">×</a>

                                                  <div className="dropdownmenu-wrapper custom-scrollbar">
                                                       <div className="dropdown-cart-header">Shopping Cart</div>

                                                       <div className="dropdown-cart-products">
                                                            <div className="product">
                                                                 <div className="product-details">
                                                                      <h4 className="product-title">
                                                                           <a href="demo12-product.html">Ultimate 3D Bluetooth Speaker</a>
                                                                      </h4>

                                                                      <span className="cart-product-info">
                                                                           <span className="cart-product-qty">1</span> × $99.00
                                                                      </span>
                                                                 </div>

                                                                 <figure className="product-image-container">
                                                                      <a href="demo12-product.html" className="product-image">
                                                                           <Image src={templateImages.allTemplateImage.product.product1} alt="product"
                                                                                width="80" height="80" />
                                                                      </a>

                                                                      <a href="#" className="btn-remove"
                                                                           title="Remove Product"><span>×</span></a>
                                                                 </figure>
                                                            </div>

                                                            <div className="product">
                                                                 <div className="product-details">
                                                                      <h4 className="product-title">
                                                                           <a href="demo12-product.html">Brown Women Casual HandBag</a>
                                                                      </h4>

                                                                      <span className="cart-product-info">
                                                                           <span className="cart-product-qty">1</span> × $35.00
                                                                      </span>
                                                                 </div>

                                                                 <figure className="product-image-container">
                                                                      <a href="demo12-product.html" className="product-image">
                                                                           <Image src={templateImages.allTemplateImage.product.product2} alt="product"
                                                                                width="80" height="80" />
                                                                      </a>

                                                                      <a href="#" className="btn-remove"
                                                                           title="Remove Product"><span>×</span></a>
                                                                 </figure>
                                                            </div>

                                                            <div className="product">
                                                                 <div className="product-details">
                                                                      <h4 className="product-title">
                                                                           <a href="demo12-product.html">Circled Ultimate 3D Speaker</a>
                                                                      </h4>

                                                                      <span className="cart-product-info">
                                                                           <span className="cart-product-qty">1</span> × $35.00
                                                                      </span>
                                                                 </div>

                                                                 <figure className="product-image-container">
                                                                      <a href="demo12-product.html" className="product-image">
                                                                           <Image src={templateImages.allTemplateImage.product.product3} alt="product"
                                                                                width="80" height="80" />
                                                                      </a>
                                                                      <a href="#" className="btn-remove"
                                                                           title="Remove Product"><span>×</span></a>
                                                                 </figure>
                                                            </div>
                                                       </div>

                                                       <div className="dropdown-cart-total">
                                                            <span>SUBTOTAL:</span>

                                                            <span className="cart-total-price float-right">$134.00</span>
                                                       </div>

                                                       <div className="dropdown-cart-action">
                                                            <a href="cart.html" className="btn btn-gray btn-block view-cart">View
                                                                 Cart</a>
                                                            <a href="checkout.html" className="btn btn-dark btn-block">Checkout</a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Header
