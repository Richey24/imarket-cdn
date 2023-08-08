import Image from "next/image";
import logo from "../../../assets/images/your-logo.png";
import product1 from "../../../assets/images/products/product-1.jpg";
import product2 from "../../../assets/images/products/product-2.jpg";
import product3 from "../../../assets/images/products/product-3.jpg";
import menuBanner from "../../../assets/images/menu-banner.jpg";
import menuBanner1 from "../../../assets/images/menu-banner-1.jpg";
import "./Header.css"

const Header = () => {

     const showDrop = (id: string) => {
          document.getElementById(id)?.classList.toggle("showDrop")
     }

     const showCanvas = (id: string) => {
          document.getElementById(id)?.classList.toggle("showCanvas")
     }

     return (
          <div>
               <div className="top-notice text-white bg-dark">
                    <div className="container text-center">
                         <h5 className="d-inline-block mb-0 mr-1">Get Up to <b>40% OFF</b> New-Season Styles</h5>
                         <a href="category.html" className="category">MEN</a>
                         <a href="category.html" className="category ml-2 mr-2">WOMEN</a>
                         <small className="ml-1">* Limited time only.</small>
                         <button title="Close (Esc)" type="button" className="mfp-close">×</button>
                    </div>
               </div>

               <header style={{ backgroundColor: "#F6F7F9", paddingBottom: "20px" }} className="header">
                    <div className="header-top">
                         <div className="container">
                              <div className="header-left d-none d-sm-block">
                                   <p className="top-message text-uppercase">FREE Returns. Standard Shipping Orders $99+</p>
                              </div>

                              <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
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

                                   <span className="separator d-none d-lg-inline-block"></span>

                                   <div className="header-dropdown pr-0">
                                        <a href="#">USD</a>
                                        <div className="header-menu">
                                             <ul>
                                                  <li><a href="#">EUR</a></li>
                                                  <li><a href="#">USD</a></li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="header-dropdown ml-0 ml-md-4 mr-auto mr-sm-3 mr-md-0">
                                        <a href="#"><i className="flag-us flag"></i>ENG</a>
                                        <div className="header-menu">
                                             <ul>
                                                  <li><a href="#"><i className="flag-us flag mr-2"></i>ENG</a>
                                                  </li>
                                                  <li><a href="#"><i className="flag-fr flag mr-2"></i>FRA</a></li>
                                             </ul>
                                        </div>
                                   </div>

                                   <span className="separator"></span>

                                   <div className="social-icons">
                                        <a href="#" className="social-icon social-facebook icon-facebook" target="_blank"></a>
                                        <a href="#" className="social-icon social-twitter icon-twitter" target="_blank"></a>
                                        <a href="#" className="social-icon social-instagram icon-instagram" target="_blank"></a>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}">
                         <div className="container">
                              <div className="header-left col-lg-2 w-auto pl-0">
                                   <button className="mobile-menu-toggler mr-2" type="button">
                                        <i className="fas fa-bars"></i>
                                   </button>
                                   <a href="demo5.html" className="logo">
                                        <Image src={logo} width={100} height={100} alt="Porto Logo" />
                                        <Image src={logo} width={100} height={100} alt="Porto Logo" />
                                   </a>
                              </div>

                              <div className="header-right w-lg-max">
                                   <div
                                        className="header-icon header-icon header-search header-search-inline header-search-category w-lg-max ml-3 mr-xl-4">
                                        <a href="#" className="search-toggle" role="button"><i className="icon-search-3"></i></a>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} type="search" className="form-control" name="q" id="q" placeholder="Search..."
                                                       required />
                                                  <div className="select-custom">
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
                                                  <button style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }} className="btn icon-magnifier" type="submit"></button>
                                             </div>
                                        </form>
                                   </div>

                                   <div className="header-contact d-none d-lg-flex align-items-center ml-auto pl-1  pr-xl-2">
                                        <i className="icon-phone-2"></i>
                                        <h6 className="pt-1">Call us now<a href="tel:#" className="text-dark font1">+123 5678 890</a></h6>
                                   </div>

                                   <a href="login.html" className="header-icon header-icon-user login-link"><i
                                        className="icon-user-2"></i></a>

                                   <a href="wishlist.html" className="header-icon pb-md-1"><i className="icon-wishlist-2"></i></a>

                                   <div className="dropdown cart-dropdown">
                                        <a onClick={() => showCanvas("cartCanvas")} href="#" title="Cart" className="dropdown-toggle dropdown-arrow cart-toggle" role="button"
                                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                             <i className="minicart-icon"></i>
                                             <span className="cart-count badge-circle">3</span>
                                        </a>



                                        <div id="cartCanvas" className="cartCanvas" style={{ position: "fixed", top: "0px", right: "0px", zIndex: "10", alignItems: "flex-start", gap: "10px" }}>
                                             <a onClick={() => showCanvas("cartCanvas")} style={{ fontSize: "40px", color: "white" }} href="#" title="Close (Esc)" className="btn-close">×</a>

                                             <div className="dropdownmenu-wrapper custom-scrollbar">
                                                  <div className="dropdown-cart-header">Shopping Cart</div>

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo5-product.html">Ultimate 3D Bluetooth Speaker</a>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">1</span>
                                                                      × $99.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <a href="demo5-product.html" className="product-image">
                                                                      <Image src={product1}
                                                                           alt="product" width="80" height="80" />
                                                                 </a>

                                                                 <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo5-product.html">Brown Women Casual HandBag</a>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">1</span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <a href="demo5-product.html" className="product-image">
                                                                      <Image src={product2}
                                                                           alt="product" width="80" height="80" />
                                                                 </a>

                                                                 <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo5-product.html">Circled Ultimate 3D Speaker</a>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">1</span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <a href="demo5-product.html" className="product-image">
                                                                      <Image src={product3}
                                                                           alt="product" width="80" height="80" />
                                                                 </a>
                                                                 <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
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

                    <div className="header-bottom sticky-header d-lg-block d-none" data-sticky-options="{'mobile': false}">
                         <div className="container">
                              <div className="header-left">
                                   <a href="demo5.html" className="logo">
                                        <Image src={logo} alt="Porto Logo" />
                                   </a>
                              </div>
                              <div className="header-center">
                                   <nav style={{ backgroundColor: "#1D70BA" }} className="main-nav w-100 w-lg-max">
                                        <ul className="menu">
                                             <li>
                                                  <a className="theList" style={{ paddingTop: "20px", paddingBottom: "20px", paddingLeft: "20px", backgroundColor: "#1B65A9" }} href="demo5.html">Home</a>
                                             </li>
                                             <li>
                                                  <a onMouseEnter={() => showDrop("theCategory")} onMouseLeave={() => showDrop("theCategory")} style={{ paddingTop: "20px", paddingBottom: "20px" }} href="demo5-shop.html" className="theListDrop">Categories</a>
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
                                                                      <li><a href="category-off-canvas.html">Off Canvas Filter</a></li>
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
                                                                      <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll</a>
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
                                                                           <Image src={menuBanner} alt="Menu banner"
                                                                                width="300" height="300" />
                                                                      </figure>
                                                                      <div className="banner-content">
                                                                           <h4>
                                                                                <span className="">UP TO</span><br />
                                                                                <b className="">50%</b>
                                                                                <i>OFF</i>
                                                                           </h4>
                                                                           <a href="demo5-shop.html" className="btn btn-sm btn-dark">SHOP
                                                                                NOW</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li>
                                                  <a onMouseEnter={() => showDrop("theProducts")} onMouseLeave={() => showDrop("theProducts")} style={{ paddingTop: "20px", paddingBottom: "20px" }} href="demo5-product.html" className="theListDrop">Products</a>
                                                  <div onMouseEnter={() => showDrop("theProducts")} onMouseLeave={() => showDrop("theProducts")} id="theProducts" className="megamenu megamenu-fixed-width megamenu-3cols">
                                                       <div className="row">
                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">PRODUCT PAGES</a>
                                                                 <ul className="submenu">
                                                                      <li><a href="product.html">SIMPLE PRODUCT</a></li>
                                                                      <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                                                                      <li><a href="product.html">SALE PRODUCT</a></li>
                                                                      <li><a href="product.html">FEATURED & ON SALE</a></li>
                                                                      <li><a href="product-custom-tab.html">WITH CUSTOM TAB</a></li>
                                                                      <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a></li>
                                                                      <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a></li>
                                                                      <li><a href="product-addcart-sticky.html">ADD CART STICKY</a></li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">PRODUCT LAYOUTS</a>
                                                                 <ul className="submenu">
                                                                      <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a></li>
                                                                      <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                                                                      <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                                                                      <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                                                                      <li><a href="product-sticky-both.html">LEFT & RIGHT STICKY</a></li>
                                                                      <li><a href="product-transparent-image.html">TRANSPARENT IMAGE</a>
                                                                      </li>
                                                                      <li><a href="product-center-vertical.html">CENTER VERTICAL</a></li>
                                                                      <li><a href="#">BUILD YOUR OWN</a></li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-4 p-0">
                                                                 <div className="menu-banner menu-banner-2">
                                                                      <figure>
                                                                           <Image src={menuBanner1} alt="Menu banner"
                                                                                className="product-promo" width="380" height="790" />
                                                                      </figure>
                                                                      <i>OFF</i>
                                                                      <div className="banner-content">
                                                                           <h4>
                                                                                <span className="">UP TO</span><br />
                                                                                <b className="">50%</b>
                                                                           </h4>
                                                                      </div>
                                                                      <a href="demo5-shop.html" className="btn btn-sm btn-dark">SHOP NOW</a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li>
                                                  <a onMouseEnter={() => showDrop("thePages")} onMouseLeave={() => showDrop("thePages")} style={{ paddingTop: "20px", paddingBottom: "20px" }} href="#" className="theListDrop">Pages</a>
                                                  <ul onMouseEnter={() => showDrop("thePages")} onMouseLeave={() => showDrop("thePages")} id="thePages">
                                                       <li><a href="wishlist.html">Wishlist</a></li>
                                                       <li><a href="cart.html">Shopping Cart</a></li>
                                                       <li><a href="checkout.html">Checkout</a></li>
                                                       <li><a href="dashboard.html">Dashboard</a></li>
                                                       <li><a href="demo5-about.html">About Us</a></li>

                                                       <li><a href="demo5-contact.html">Contact Us</a></li>
                                                       <li><a href="login.html">Login</a></li>
                                                       <li><a href="forgot-password.html">Forgot Password</a></li>
                                                  </ul>
                                             </li>


                                             <li style={{ display: "block" }}><a className="theList" style={{ paddingTop: "20px", paddingBottom: "20px" }} href="demo5-contact.html">Contact Us</a></li>

                                        </ul>
                                   </nav>
                              </div>
                              <div className="header-right">
                                   <div className="header-search header-icon header-search-inline header-search-category w-lg-max">
                                        <a href="#" className="search-toggle" role="button"><i className="icon-search-3"></i></a>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input type="search" className="form-control" name="q" id="qqq" placeholder="Search..."
                                                       required />
                                                  <div className="select-custom">
                                                       <select id="category" name="cat">
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
                                                  <button className="btn p-0 icon-search-3" type="submit"></button>
                                             </div>
                                        </form>
                                   </div>

                                   <a href="login.html" className="header-icon "><i className="icon-user-2"></i></a>

                                   <a href="wishlist.html" className="header-icon"><i className="icon-wishlist-2"></i></a>

                                   <div className="dropdown cart-dropdown">
                                        <a href="#" title="Cart" className="dropdown-toggle dropdown-arrow cart-toggle" role="button"
                                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                             <i className="minicart-icon"></i>
                                             <span className="cart-count badge-circle">3</span>
                                        </a>

                                        <div className="cart-overlay"></div>

                                        <div className="dropdown-menu mobile-cart">
                                             <a href="#" title="Close (Esc)" className="btn-close">×</a>

                                             <div className="dropdownmenu-wrapper custom-scrollbar">
                                                  <div className="dropdown-cart-header">Shopping Cart</div>

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo5-product.html">Ultimate 3D Bluetooth Speaker</a>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">1</span>
                                                                      × $99.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <a href="demo5-product.html" className="product-image">
                                                                      <Image src={product1} alt="product"
                                                                           width="80" height="80" />
                                                                 </a>

                                                                 <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo5-product.html">Brown Women Casual HandBag</a>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">1</span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <a href="demo5-product.html" className="product-image">
                                                                      <Image src={product2} alt="product"
                                                                           width="80" height="80" />
                                                                 </a>

                                                                 <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo5-product.html">Circled Ultimate 3D Speaker</a>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">1</span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <a href="demo5-product.html" className="product-image">
                                                                      <Image src={product3} alt="product"
                                                                           width="80" height="80" />
                                                                 </a>
                                                                 <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
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
               </header>
          </div>
     );
};
export default Header;
