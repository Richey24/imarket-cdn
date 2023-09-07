import Image from "next/image";
import "./Header.css";
import logo from "../../../assets/images/your-logo.png";
import product2 from "../../../assets/images/products/product-2.jpg";
import product3 from "../../../assets/images/products/product-3.jpg";
import menuBanner from "../../../assets/images/menu-banner.jpg";
import menuBanner1 from "../../../assets/images/menu-banner-1.jpg";
import SocialIcons from "@/templates/shared/SocialIcons";
import Language from "@/templates/shared/Header/HeaderLinks/Language";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import CategorySelect from "@/templates/shared/Header/HeaderLinks/CategorySelect";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     const showSearch = () => {
          document.getElementById("searchDiv").classList.toggle("showSearch");
     };
     const showCanvas = () => {
          document.getElementById("cartCanvas").classList.toggle("showCanvas");
     };

     const showDrop = (id: string) => {
          document.getElementById(id)?.classList.toggle("showDrop");
     };

     return (
          <div>
               <header className="header">
                    <div className="pre-header">
                         <div>
                              <div className="container">
                                   Get Up to <b>40% OFF</b> New Furniture Deals{" "}
                                   <small>* Limited time only.</small>
                              </div>
                              <button className="mfp-close"></button>
                         </div>
                    </div>

                    <div className="header-top">
                         <div className="header-row container">
                              <div className="header-left">
                                   <Language />
                              </div>
                              <div className="header-right">
                                   <div className="wel-msg text-uppercase d-none d-lg-block">
                                        FREE Returns. Standard Shipping Orders $99+
                                   </div>
                                   <span className="separator d-none d-xl-block"></span>
                                   <Links />
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
                                   </div>
                                   <span className="separator d-none d-xl-block"></span>
                                   <SocialIcons links={staticProps?.socials} />
                              </div>
                         </div>
                    </div>

                    <div
                         style={{ padding: "0px" }}
                         className="header-middle sticky-header"
                         data-sticky-options="{'mobile': true}"
                    >
                         <div className="container">
                              <div className="header-left d-lg-block d-none">
                                   <div className="header-contact d-none d-lg-flex align-items-center pl-1 mr-lg-5 pr-xl-2">
                                        <i className="icon-phone-2"></i>
                                        <h6>
                                             Call us now
                                             <a
                                                  href={`tel:${company?.phone}`}
                                                  className="text-dark font1"
                                             >
                                                  {company?.phone}
                                             </a>
                                        </h6>
                                   </div>
                              </div>

                              <div className="header-center">
                                   <MenuButton />
                                   <a href="demo8.html" className="logo">
                                        <Image
                                             src={logo}
                                             alt="Porto Logo"
                                             width="104"
                                             height="41"
                                        />
                                   </a>
                              </div>

                              <div style={{ alignItems: "baseline" }} className="header-right">
                                   <a href="login.html" className="header-icon header-icon-user">
                                        <i className="icon-user-2"></i>
                                   </a>
                                   <a href="#" className="header-icon">
                                        <i className="icon-wishlist-2"></i>
                                   </a>
                                   <div className="header-search header-search-popup header-search-category d-none d-sm-block">
                                        <a
                                             onClick={showSearch}
                                             className="search-toggle"
                                             role="button"
                                        >
                                             <i className="icon-magnifier"></i>
                                        </a>
                                        <form action="#" method="get">
                                             <div
                                                  id="searchDiv"
                                                  style={{ borderRadius: "30px" }}
                                                  className="header-search-wrapper"
                                             >
                                                  <input
                                                       style={{ borderRadius: "30px" }}
                                                       type="search"
                                                       className="form-control"
                                                       name="q"
                                                       id="q"
                                                       placeholder="I'm searching for..."
                                                       required
                                                  />
                                                  <div className="select-custom">
                                                       <CategorySelect categories={categories} />
                                                  </div>
                                                  <button
                                                       style={{ borderRadius: "30px" }}
                                                       className="btn icon-search-3"
                                                       type="submit"
                                                  ></button>
                                             </div>
                                        </form>
                                   </div>

                                   <div className="dropdown cart-dropdown">
                                        <a
                                             onClick={showCanvas}
                                             href="#"
                                             title="Cart"
                                             className="dropdown-toggle dropdown-arrow cart-toggle"
                                             role="button"
                                             data-toggle="dropdown"
                                             aria-haspopup="true"
                                             aria-expanded="false"
                                             data-display="static"
                                        >
                                             <i className="minicart-icon"></i>
                                             <span className="cart-count badge-circle">3</span>
                                        </a>

                                        {/* <div className="cart-overlay"></div> */}

                                        <div
                                             id="cartCanvas"
                                             className="cartCanvas"
                                             style={{
                                                  position: "fixed",
                                                  top: "0px",
                                                  right: "0px",
                                                  zIndex: "10",
                                                  alignItems: "flex-start",
                                                  gap: "10px",
                                             }}
                                        >
                                             <a
                                                  onClick={showCanvas}
                                                  style={{ fontSize: "40px", color: "white" }}
                                                  href="#"
                                                  title="Close (Esc)"
                                                  className="btn-close"
                                             >
                                                  ×
                                             </a>

                                             <div className="dropdownmenu-wrapper custom-scrollbar">
                                                  <div className="dropdown-cart-header">
                                                       Shopping Cart
                                                  </div>

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo8-product.html">
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

                                                            <figure className="product-image-container">
                                                                 <a
                                                                      href="demo8-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={logo}
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
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
                                                                      <a href="demo8-product.html">
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

                                                            <figure className="product-image-container">
                                                                 <a
                                                                      href="demo8-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product2}
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
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
                                                                      <a href="demo8-product.html">
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

                                                            <figure className="product-image-container">
                                                                 <a
                                                                      href="demo8-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product3}
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
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

                    <div
                         className="header-bottom sticky-header d-none d-lg-flex"
                         data-sticky-options="{'mobile': false}"
                    >
                         <div className="container">
                              <nav className="main-nav w-100">
                                   <ul className="menu w-100">
                                        <li className="active">
                                             <a href="demo8.html">Home</a>
                                        </li>
                                        <li>
                                             <a
                                                  onMouseEnter={() => showDrop("theCategory")}
                                                  onMouseLeave={() => showDrop("theCategory")}
                                                  className="themeEightDrop"
                                                  href="demo8-shop.html"
                                             >
                                                  Categories
                                             </a>
                                             <div
                                                  onMouseEnter={() => showDrop("theCategory")}
                                                  onMouseLeave={() => showDrop("theCategory")}
                                                  id="theCategory"
                                                  className="megamenu megamenu-fixed-width megamenu-3cols"
                                             >
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
                                                                      <Image
                                                                           src={menuBanner}
                                                                           width="192"
                                                                           height="313"
                                                                           alt="Menu banner"
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
                                        </li>
                                        <li>
                                             <a
                                                  onMouseEnter={() => showDrop("theProducts")}
                                                  onMouseLeave={() => showDrop("theProducts")}
                                                  className="themeEightDrop"
                                                  href="demo8-product.html"
                                             >
                                                  Products
                                             </a>
                                             <div
                                                  onMouseEnter={() => showDrop("theProducts")}
                                                  onMouseLeave={() => showDrop("theProducts")}
                                                  id="theProducts"
                                                  className="megamenu megamenu-fixed-width"
                                             >
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
                                                                           FEATURED & ON SALE
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
                                                                           LEFT & RIGHT STICKY
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

                                                       <div className="col-lg-4 p-0">
                                                            <div className="menu-banner menu-banner-2">
                                                                 <figure>
                                                                      <Image
                                                                           src={menuBanner1}
                                                                           alt="Menu banner"
                                                                           className="product-promo"
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
                                                  </div>
                                             </div>
                                        </li>
                                        <li>
                                             <a
                                                  onMouseEnter={() => showDrop("thePages")}
                                                  onMouseLeave={() => showDrop("thePages")}
                                                  className="themeEightDrop"
                                                  href="#"
                                             >
                                                  Pages
                                             </a>
                                             <ul
                                                  onMouseEnter={() => showDrop("thePages")}
                                                  onMouseLeave={() => showDrop("thePages")}
                                                  id="thePages"
                                             >
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
                                                       <a href="demo8-about.html">About Us</a>
                                                  </li>

                                                  <li>
                                                       <a href="demo8-contact.html">Contact Us</a>
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

                                        <li style={{ display: "block" }}>
                                             <a href="demo8-contact.html">Contact Us</a>
                                        </li>
                                   </ul>
                              </nav>
                         </div>
                    </div>
               </header>
          </div>
     );
};

export default Header;
