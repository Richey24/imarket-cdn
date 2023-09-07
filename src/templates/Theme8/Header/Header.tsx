import Image from "next/image";
import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/images/your-logo.png";
import Link from "next/link";
import product2 from "../../../assets/images/products/product-2.jpg";
import product3 from "../../../assets/images/products/product-3.jpg";
import menuBanner from "../../../assets/images/menu-banner.jpg";
import menuBanner1 from "../../../assets/images/menu-banner-1.jpg";
import _ from "lodash";

const Header = (props) => {
     const { company, static: staticProps, categories } = props.props;
     const [activeMenuId, setActiveMenuId] = useState(0);

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
                                   <div className="header-dropdown">
                                        <a href="#" className="pl-0">
                                             USD
                                        </a>
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

                                   <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                        <a href="#">
                                             <i className="flag-us flag"></i>ENG
                                        </a>
                                        <div className="header-menu">
                                             <ul>
                                                  <li>
                                                       <a href="#">
                                                            <i className="flag-us flag mr-2"></i>ENG
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="flag-fr flag mr-2"></i>FRA
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="header-right">
                                   <div className="wel-msg text-uppercase d-none d-lg-block">
                                        FREE Returns. Standard Shipping Orders $99+
                                   </div>
                                   <span className="separator d-none d-xl-block"></span>
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
                                   </div>
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
                                   <div className="share-links d-none d-xl-block">
                                        <a
                                             target="_blank"
                                             rel="nofollow"
                                             className="share-facebook icon-facebook"
                                             href="#"
                                             title="Facebook"
                                        ></a>
                                        <a
                                             target="_blank"
                                             rel="nofollow"
                                             className="share-twitter icon-twitter"
                                             href="#"
                                             title="Twitter"
                                        ></a>
                                        <a
                                             target="_blank"
                                             rel="nofollow"
                                             className="share-instagram icon-instagram"
                                             href="#"
                                             title="Instagram"
                                        ></a>
                                   </div>
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
                                             <a href="tel:#" className="text-dark font1">
                                                  {company?.phone}
                                             </a>
                                        </h6>
                                   </div>
                              </div>

                              <div className="header-center">
                                   <button className="mobile-menu-toggler" type="button">
                                        <i className="fas fa-bars"></i>
                                   </button>
                                   <a href="demo8.html" className="logo">
                                        {company?.logo ? (
                                             <Image
                                                  src={company?.logo}
                                                  className="black-logo"
                                                  alt="Porto Logo"
                                                  width={104}
                                                  height={41}
                                             />
                                        ) : (
                                             <h3>{company?.company_name || "Tester"}</h3>
                                        )}
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
                                                       <select id="cat" name="cat">
                                                            <option value="">All Categories</option>
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
                                        {staticProps?.pageLinks?.map(
                                             (link: { name: string; url: string }, idx: number) => (
                                                  <li
                                                       className={
                                                            activeMenuId === idx ? "active" : ""
                                                       }
                                                       key={idx}
                                                       onClick={() => setActiveMenuId(idx)}
                                                  >
                                                       <Link href={link.url}>{link.name}</Link>
                                                  </li>
                                             ),
                                        )}

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
