import Image from "next/image"
import "./Header.css"
import { templateImages } from "@/appProvider/templateImages"
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import Link from "next/link";

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
                    <div className="header-wrapper">
                         <div className="header-top sticky-header">
                              <div className="container">
                                   <div className="header-left header-dropdowns">
                                        <div className="header-dropdown d-none d-lg-block">
                                             <Link href="#" className="pl-0">
                                                  ENG
                                             </Link>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li>
                                                            <Link href="#">ENG</Link>
                                                       </li>
                                                       <li>
                                                            <Link href="#">FRE</Link>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>

                                        <div className="header-dropdown d-none d-lg-block">
                                             <Link href="#" className="pt-0">
                                                  USD
                                             </Link>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li>
                                                            <Link href="#">EUR</Link>
                                                       </li>
                                                       <li>
                                                            <Link href="#">USD</Link>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>

                                        <MenuButton />

                                        <Logo company={company} />
                                   </div>

                                   <div className="header-right">
                                        <Link
                                             href="login.html"
                                             className="header-icon header-icon-user d-lg-block d-none"
                                        >
                                             <i className="icon-user-2"></i>
                                        </Link>

                                        <div className="header-search d-lg-none d-block mr-4">
                                             <Link href="#" className="search-toggle" role="button">
                                                  <i className="icon-magnifier"></i>
                                             </Link>
                                             <div className="header-search-wrapper show">
                                                  <form action="#" method="get">
                                                       <input
                                                            type="search"
                                                            className="form-control"
                                                            name="q"
                                                            id="q"
                                                            placeholder="Search..."
                                                            required
                                                       />
                                                       <button className="btn" type="submit">
                                                            <i className="icon-magnifier"></i>
                                                       </button>
                                                  </form>
                                             </div>
                                        </div>

                                        <Link
                                             href="wishlist.html"
                                             title="Wishlist"
                                             className="header-icon"
                                        >
                                             <i className=" icon-wishlist-2"></i>
                                        </Link>

                                        <div className="dropdown cart-dropdown">
                                             <a
                                                  onClick={showCanvas}
                                                  href="#"
                                                  title="Cart"
                                                  className="dropdown-toggle dropdown-arrow cart-toggle d-flex align-items-center"
                                                  role="button"
                                                  data-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                  data-display="static"
                                             >
                                                  <i className="minicart-icon"></i>
                                                  <span className="cart-count badge-circle">3</span>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="header-middle d-lg-block d-none">
                              <div className="container d-block">
                                   <div className="header-left d-none d-lg-flex justify-content-center">
                                        <MenuButton/>

                                       <Logo company={company}/>
                                   </div>

                                   <div className="header-right d-lg-block d-flex">
                                        <div className="header-search d-lg-block d-none">
                                             <a
                                                  href="#"
                                                  className="search-toggle d-lg-none d-inline-block"
                                                  role="button"
                                             >
                                                  <i className="icon-magnifier"></i>
                                             </a>
                                             <div className="header-search-wrapper d-lg-flex position-relative border-0">
                                                  <form action="#" method="get">
                                                       <input
                                                            type="search"
                                                            className="form-control"
                                                            name="q"
                                                            id="qq"
                                                            placeholder="Search..."
                                                            required
                                                       />
                                                       <button className="btn" type="submit">
                                                            <i className="icon-magnifier"></i>
                                                       </button>
                                                  </form>
                                             </div>
                                        </div>

                                        <nav className="main-nav">
                                             <ul className="menu  menu-vertical sf-arrows no-animation">
                                                  <li className="active border-0">
                                                       <Link href="demo10.html">HOME</Link>
                                                  </li>
                                                  <li className="border-0">
                                                       <a
                                                            onMouseEnter={() =>
                                                                 showDrop("theCategory")
                                                            }
                                                            onMouseLeave={() =>
                                                                 showDrop("theCategory")
                                                            }
                                                            href="demo10-shop.html"
                                                            className="sf-with-ul border-0"
                                                       >
                                                            CATEGORIES
                                                       </a>
                                                       <div
                                                            onMouseEnter={() =>
                                                                 showDrop("theCategory")
                                                            }
                                                            onMouseLeave={() =>
                                                                 showDrop("theCategory")
                                                            }
                                                            id="theCategory"
                                                            className="megamenu megamenu-fixed-width megamenu-3cols"
                                                       >
                                                            <div className="row">
                                                                 <div className="col-lg-4">
                                                                      <Link
                                                                           href="#"
                                                                           className="nolink"
                                                                      >
                                                                           VARIATION 1
                                                                      </Link>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <Link href="category.html">
                                                                                     Fullwidth
                                                                                     Banner
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-banner-boxed-slider.html">
                                                                                     Boxed Slider
                                                                                     Banner
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-banner-boxed-image.html">
                                                                                     Boxed Image
                                                                                     Banner
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category.html">
                                                                                     Left Sidebar
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-sidebar-right.html">
                                                                                     Right Sidebar
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-off-canvas.html">
                                                                                     Off Canvas
                                                                                     Filter
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-horizontal-filter1.html">
                                                                                     Horizontal
                                                                                     Filter1
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-horizontal-filter2.html">
                                                                                     Horizontal
                                                                                     Filter2
                                                                                </Link>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-4">
                                                                      <Link
                                                                           href="#"
                                                                           className="nolink"
                                                                      >
                                                                           VARIATION 2
                                                                      </Link>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <Link href="category-list.html">
                                                                                     List Types
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-infinite-scroll.html">
                                                                                     Ajax Infinite
                                                                                     Scroll
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category.html">
                                                                                     3 Columns
                                                                                     Products
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-4col.html">
                                                                                     4 Columns
                                                                                     Products
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-5col.html">
                                                                                     5 Columns
                                                                                     Products
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-6col.html">
                                                                                     6 Columns
                                                                                     Products
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-7col.html">
                                                                                     7 Columns
                                                                                     Products
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="category-8col.html">
                                                                                     8 Columns
                                                                                     Products
                                                                                </Link>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-4 p-0">
                                                                      <div className="menu-banner">
                                                                           <figure>
                                                                                <Image
                                                                                     src={
                                                                                          templateImages
                                                                                               .menuBanner
                                                                                               .menu1
                                                                                     }
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
                                                  </li>
                                                  <li className="megamenu-container border-0">
                                                       <a
                                                            onMouseEnter={() =>
                                                                 showDrop("theProducts")
                                                            }
                                                            onMouseLeave={() =>
                                                                 showDrop("theProducts")
                                                            }
                                                            href="demo10-product.html"
                                                            className="sf-with-ul border-0"
                                                       >
                                                            PRODUCTS
                                                       </a>
                                                       <div
                                                            onMouseEnter={() =>
                                                                 showDrop("theProducts")
                                                            }
                                                            onMouseLeave={() =>
                                                                 showDrop("theProducts")
                                                            }
                                                            id="theProducts"
                                                            className="megamenu megamenu-fixed-width megamenu-3cols"
                                                       >
                                                            <div className="row">
                                                                 <div className="col-lg-4">
                                                                      <Link
                                                                           href="#"
                                                                           className="nolink"
                                                                      >
                                                                           PRODUCT PAGES
                                                                      </Link>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <Link href="product.html">
                                                                                     SIMPLE PRODUCT
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-variable.html">
                                                                                     VARIABLE
                                                                                     PRODUCT
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product.html">
                                                                                     SALE PRODUCT
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product.html">
                                                                                     FEATURED & ON
                                                                                     SALE
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-custom-tab.html">
                                                                                     WITH CUSTOM TAB
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-sidebar-left.html">
                                                                                     WITH LEFT
                                                                                     SIDEBAR
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-sidebar-right.html">
                                                                                     WITH RIGHT
                                                                                     SIDEBAR
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-addcart-sticky.html">
                                                                                     ADD CART STICKY
                                                                                </Link>
                                                                           </li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="col-lg-4">
                                                                      <Link
                                                                           href="#"
                                                                           className="nolink"
                                                                      >
                                                                           PRODUCT LAYOUTS
                                                                      </Link>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <Link href="product-extended-layout.html">
                                                                                     EXTENDED LAYOUT
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-grid-layout.html">
                                                                                     GRID IMAGE
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-full-width.html">
                                                                                     FULL WIDTH
                                                                                     LAYOUT
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-sticky-info.html">
                                                                                     STICKY INFO
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-sticky-both.html">
                                                                                     LEFT & RIGHT
                                                                                     STICKY
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-transparent-image.html">
                                                                                     TRANSPARENT
                                                                                     IMAGE
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="product-center-vertical.html">
                                                                                     CENTER VERTICAL
                                                                                </Link>
                                                                           </li>
                                                                           <li>
                                                                                <Link href="#">
                                                                                     BUILD YOUR OWN
                                                                                </Link>
                                                                           </li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="col-lg-4 p-0">
                                                                      <div className="menu-banner menu-banner-2">
                                                                           <figure>
                                                                                <Image
                                                                                     src={
                                                                                          templateImages
                                                                                               .menuBanner
                                                                                               .menu2
                                                                                     }
                                                                                     alt="Menu banner"
                                                                                     className="product-promo"
                                                                                     width={100}
                                                                                     height={100}
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
                                                            </div>
                                                       </div>
                                                  </li>
                                                  <li className="border-0">
                                                       <a
                                                            onMouseEnter={() =>
                                                                 showDrop("thePages")
                                                            }
                                                            onMouseLeave={() =>
                                                                 showDrop("thePages")
                                                            }
                                                            href="#"
                                                            className="sf-with-ul border-0"
                                                       >
                                                            PAGES
                                                       </a>

                                                       <ul
                                                            onMouseEnter={() =>
                                                                 showDrop("thePages")
                                                            }
                                                            onMouseLeave={() =>
                                                                 showDrop("thePages")
                                                            }
                                                            id="thePages"
                                                       >
                                                            <li>
                                                                 <Link href="cart.html">
                                                                      Shopping Cart
                                                                 </Link>
                                                            </li>
                                                            <li>
                                                                 <Link href="#">Checkout</Link>
                                                                 <ul>
                                                                      <li>
                                                                           <Link href="checkout-shipping.html">
                                                                                Checkout Shipping
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="checkout-shipping-2.html">
                                                                                Checkout Shipping 2
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="checkout-review.html">
                                                                                Checkout Review
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </li>
                                                            <li>
                                                                 <Link href="#">Dashboard</Link>
                                                                 <ul>
                                                                      <li>
                                                                           <Link href="dashboard.html">
                                                                                Dashboard
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="dashboard.html">
                                                                                My Account
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </li>
                                                            <li>
                                                                 <Link href="demo10-about.html">
                                                                      About Us
                                                                 </Link>
                                                            </li>

                                                            <li>
                                                                 <Link href="demo10-contact.html">
                                                                      Contact Us
                                                                 </Link>
                                                            </li>
                                                            <li>
                                                                 <Link href="login.html">
                                                                      Login
                                                                 </Link>
                                                            </li>
                                                            <li>
                                                                 <Link href="forgot-password.html">
                                                                      Forgot Password
                                                                 </Link>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li className="border-0">
                                                       <a
                                                            href="demo10-contact.html"
                                                            className="border-0"
                                                       >
                                                            CONTACT US
                                                       </a>
                                                  </li>

                                                  <li className="border-0">
                                                       <Link
                                                            href="#"
                                                            className="login-link border-0"
                                                       >
                                                            LOG IN
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </nav>
                                   </div>
                              </div>
                         </div>

                         <div className="header-bottom d-none d-lg-block text-align-center position-absolute">
                              <div className="container d-block text-center">
                                   <div className="header-left d-block">
                                        <h6 className="mb-0">CALL US NOW</h6>
                                   </div>

                                   <div className="header-right d-block pr-0">
                                        <div className="header-contact text-white">
                                             <Link href="tel:#">+123 456 7890</Link>
                                        </div>
                                   </div>
                              </div>

                              <div className="social-icons text-center">
                                   <Link href="#" className="social-icon" target="_blank">
                                        <i className="icon-facebook"></i>
                                   </Link>
                                   <Link href="#" className="social-icon" target="_blank">
                                        <i className="icon-twitter"></i>
                                   </Link>
                                   <Link href="#" className="social-icon" target="_blank">
                                        <i className="icon-instagram"></i>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </header>
          </div>
     );
};

export default Header