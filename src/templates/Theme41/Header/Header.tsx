"use client";
import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import React from "react";
import "./Header.css"

export default function Header() {

     const showCanvas = () => {
          document.getElementById("cartCanvas").classList.toggle("showCanvas")
     }

     return (
          <div>
               <header className="header">
                    <div className="header-top">
                         <div className="container">
                              <div className="header-left d-none d-sm-flex">
                                   <i className="icon-shipping"></i>
                                   <p className="top-message">FREE Express Shipping On Orders $99+</p>
                              </div>

                              <div className="header-right header-dropdowns ml-0 ml-sm-5 w-sm-100">

                                   <div className="header-dropdown">
                                        <a href="#">USD</a>
                                        <div className="header-menu">
                                             <ul>
                                                  <li><a href="#">EUR</a></li>
                                                  <li><a href="#">USD</a></li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                        <a href="#"><i className="flag-us flag"></i>ENG</a>
                                        <div className="header-menu">
                                             <ul>
                                                  <li><a href="#"><i className="flag-us flag mr-2"></i>Eng</a>
                                                  </li>
                                                  <li><a href="#"><i className="flag-fr flag mr-2"></i>Fra</a></li>
                                             </ul>
                                        </div>
                                   </div>

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

                                   <div className="social-icons">
                                        <a href="#" className="social-icon social-facebook icon-facebook" title="social-icon"
                                             target="_blank"></a>
                                        <a href="#" className="social-icon social-twitter icon-twitter" title="social-icon"
                                             target="_blank"></a>
                                        <a href="#" className="social-icon social-instagram icon-instagram" title="social-icon"
                                             target="_blank"></a>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="header-middle">
                         <div className="container">
                              <div className="header-left col-lg-2 w-auto pl-0">
                                   <button className="mobile-menu-toggler text-primary mr-2" type="button">
                                        <i className="fas fa-bars"></i>
                                   </button>
                                   <a href="demo41.html" className="logo">
                                        <Image src={templateImages.logoImage.logo2} width="210" height="88" alt="Porto Logo" />
                                   </a>
                              </div>

                              <div className="header-right w-lg-max">
                                   <div
                                        className="header-search header-search-inline header-search-category d-lg-block d-none text-right mt-0">
                                        <a href="#" className="search-toggle" role="button"><i className="icon-magnifier"></i></a>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input type="search" className="form-control" name="q" id="q" placeholder="Search..."
                                                       required />
                                                  <button className="btn icon-magnifier p-0" title="search" type="submit"></button>
                                             </div>
                                        </form>
                                   </div>

                                   <a className="header-login d-none d-lg-flex pr-4" href="login.html" title="login">
                                        <div className="login-icon">
                                             <i className="icon-user-2"></i>
                                        </div>
                                        <div className="d-none d-xl-block"><span>Welcome</span>
                                             <p className="text-dark font1">Sign
                                                  In / Register</p>
                                        </div>
                                   </a>



                                   <a href="wishlist.html" className="header-icon position-relative mb-0" title="wishlist"><i
                                        className="icon-wishlist-2"></i>
                                        <span className="cart-count badge-circle">3</span></a>

                                   <div className="dropdown cart-dropdown">
                                        <a onClick={showCanvas} href="#" title="Cart" className="dropdown-toggle cart-toggle" role="button"
                                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                             <i className="icon-cart-thick"></i>
                                             <span className="cart-count badge-circle">3</span>
                                        </a>

                                        {/* <div className="cart-overlay"></div> */}

                                        <div id="cartCanvas" className="cartCanvas" style={{ position: "fixed", top: "0px", right: "0px", zIndex: "10", alignItems: "flex-start", gap: "10px" }}>
                                             <a style={{ fontSize: "40px", color: "black" }} onClick={showCanvas} href="#" title="Close (Esc)" className="btn-close">×</a>

                                             <div className="dropdownmenu-wrapper custom-scrollbar">
                                                  <div className="dropdown-cart-header">Shopping Cart</div>

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="product.html">Ultimate 3D Bluetooth Speaker</a>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">1</span>
                                                                      × $99.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <a href="product.html" className="product-image">
                                                                      <Image src={templateImages.allTemplateImage.product.product1} alt="product"
                                                                           width="80" height="80" />
                                                                 </a>

                                                                 <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="product.html">Brown Women Casual HandBag</a>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">1</span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <a href="product.html" className="product-image">
                                                                      <Image src={templateImages.allTemplateImage.product.product2} alt="product"
                                                                           width="80" height="80" />
                                                                 </a>

                                                                 <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="product.html">Circled Ultimate 3D Speaker</a>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">1</span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <a href="product.html" className="product-image">
                                                                      <Image src={templateImages.allTemplateImage.product.product3} alt="product"
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

                    <div style={{ marginBottom: "30px" }} className="header-bottom d-none d-lg-block">
                         <div className="container">
                              <ul className="category-menu">
                                   <li><a href="demo41-shop.html">Fruits</a></li>
                                   <li><a href="demo41-shop.html">Vegetables</a></li>
                                   <li><a href="demo41-shop.html">Meat</a></li>
                                   <li><a href="demo41-shop.html">Seafood</a></li>
                                   <li><a href="demo41-shop.html">Deli</a></li>
                                   <li><a href="demo41-shop.html">Cheese</a></li>
                                   <li><a href="demo41-shop.html">Bakery</a></li>
                                   <li><a href="demo41-shop.html">Party</a></li>
                                   <li><a href="demo41-shop.html">Platters</a></li>
                                   <li><a href="demo41-shop.html">Grocery</a></li>
                                   <li><a href="demo41-shop.html">Frozen</a></li>
                                   <li><a href="demo41-shop.html">Beer</a></li>
                                   <li><a href="demo41-shop.html">Wines</a></li>
                                   <li><a href="demo41-shop.html">Dairy</a></li>
                              </ul>
                              {/* <ul className="shop-menu">
                                   <li><a href="#"><i className="icon-sale-label" style={{ fontSize: "3.2rem" }}></i>Fresh Deals</a></li>
                                   <li><a href="#"><i className="icon-sale-discount" style={{ fontSize: "3.2rem" }}></i>Coupons</a></li>
                                   <li><a href="#"><i className="icon-percent-circle"></i>Sale</a></li>
                                   <li><a href="#"><i className="icon-rotulo"></i>New</a></li>
                                   <li><a href="#"><i className="icon-estrela"></i>Top-rated</a></li>
                                   <li><a href="#"><i className="icon-gluten"></i>Gluten-free</a></li>
                                   <li><a href="#"><i className="icon-comida-organica"></i>Organic</a></li>
                                   <li><a href="#"><i className="icon-fazer-compras"></i>Local</a></li>
                                   <li><a href="#"><i className="icon-business-book"></i>Recipes</a></li>
                              </ul> */}
                         </div>
                    </div>
               </header>
          </div>
     );
}
