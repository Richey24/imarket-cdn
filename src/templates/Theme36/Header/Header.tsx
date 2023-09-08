"use client";
import CategorySelect from "@/templates/shared/Header/HeaderLinks/CategorySelect";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import SocialIcons from "@/templates/shared/SocialIcons";
import Link from "next/link";
import React from "react";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header">
               <div className="header-top">
                    <div className="container">
                         <div className="header-left d-none d-sm-block">
                              <div className="info-box info-box-icon-left text-primary justify-content-start p-0">
                                   <i className="icon-shipping"></i>

                                   <div className="info-box-content">
                                        <h4 className="text-transform-none">
                                             FREE Express Shipping On Orders $99+
                                        </h4>
                                   </div>
                              </div>
                         </div>

                         <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                              <div className="header-dropdown ">
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

                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                   <a href="#">
                                        <i className="flag-us flag"></i>Eng
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

                              <SocialIcons />
                         </div>
                    </div>
               </div>

               <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}">
                    <div className="container">
                         <div className="header-left col-lg-2 w-auto pl-0">
                              <MenuButton />
                              <Logo company={company} />
                         </div>

                         <div className="header-right w-lg-max">
                              <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mb-0">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-search-3"></i>
                                   </a>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control"
                                                  name="q"
                                                  id="q"
                                                  placeholder="Search..."
                                                  required
                                             />
                                             <div className="select-custom">
                                                  <CategorySelect categories={categories} />
                                             </div>

                                             <button
                                                  className="btn icon-magnifier p-0"
                                                  title="search"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <a href="login.html" className="d-lg-block d-none">
                                   <div className="header-user">
                                        <i className="icon-user-2"></i>
                                        <div className="header-userinfo">
                                             <span>Welcome</span>
                                             <h4 className="mb-0">My Account</h4>
                                        </div>
                                   </div>
                              </a>

                              <a
                                   href="wishlist.html"
                                   className="header-icon position-relative"
                                   title="wishlist"
                              >
                                   <i className="icon-wishlist-2"></i>
                                   <span className="wishlist-count badge-circle">0</span>
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
                                        <i className="icon-cart-thick"></i>
                                        <span className="cart-count badge-circle">3</span>
                                   </a>

                                   <div className="cart-overlay"></div>

                                   <div className="dropdown-menu mobile-cart">
                                        <a href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </a>
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
                         <nav className="d-flex main-nav w-100">
                              <ul className="menu">
                                   <li className="menu-item tw-group">
                                        <a className="d-inline-flex align-items-center sf-with-ul text-white">
                                             <i className="custom-icon-toggle-menu d-inline-table"></i>
                                             <span>ALL DEPARTMENTS</span>
                                        </a>

                                        <div className="menu-depart group-hover:tw-block group-hover:tw-visible group-hover:tw-h-auto group-hover:tw-opacity-100">
                                             <ul className="menu menu-vertical sf-arrows d-block no-superfish">
                                                  <li>
                                                       <a href="#">
                                                            <i className="icon-category-fashion"></i>
                                                            Fashion
                                                       </a>

                                                       <div className="megamenu megamenu-fixed-width megamenu-one">
                                                            <div className="row">
                                                                 <div className="col-lg-3 mb-1 pb-2">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           WOMAN
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Top & Blouses
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Accessories
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Dresses &
                                                                                     Skirts
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Shoes & Boots
                                                                                </a>
                                                                           </li>
                                                                      </ul>

                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           JEWELLERY
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Sweaters
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Heels & Sandals
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Jeans & Shorts
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-4">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           MAN
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Accessories
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Watch Fashion
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Tees, Knits &
                                                                                     Polos
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     KOKA
                                                                                </a>
                                                                           </li>
                                                                      </ul>

                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           KIDS FASHION
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Casual Shoes
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Spring & Autumn
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Winter Sneakers
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-5 p-0 d-lg-block d-none">
                                                                      <div className="menu-banner menu-banner-2">
                                                                           <figure>
                                                                                <img
                                                                                     src="assets/images/demoes/demo40/menu-banner-1.jpg"
                                                                                     alt="Menu banner"
                                                                                     className="product-promo w-100"
                                                                                />
                                                                           </figure>
                                                                           <i>OFF</i>
                                                                           <div className="banner-content">
                                                                                <h4>
                                                                                     <span className="text-dark">
                                                                                          UP TO
                                                                                     </span>
                                                                                     <br />
                                                                                     <b className="text-dark">
                                                                                          50%
                                                                                     </b>
                                                                                </h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="col-lg-12 d-lg-block d-none">
                                                                      <div className="partners-container row">
                                                                           <div className="col-xl-5col">
                                                                                <div className="partner">
                                                                                     <img
                                                                                          src="assets/images/brands/small/brand1.png"
                                                                                          alt="logo image"
                                                                                          width="140"
                                                                                          height="60"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                           <div className="col-xl-5col">
                                                                                <div className="partner">
                                                                                     <img
                                                                                          src="assets/images/brands/small/brand2.png"
                                                                                          alt="logo image"
                                                                                          width="140"
                                                                                          height="60"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                           <div className="col-xl-5col">
                                                                                <div className="partner">
                                                                                     <img
                                                                                          src="assets/images/brands/small/brand3.png"
                                                                                          alt="logo image"
                                                                                          width="140"
                                                                                          height="60"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                           <div className="col-xl-5col">
                                                                                <div className="partner">
                                                                                     <img
                                                                                          src="assets/images/brands/small/brand4.png"
                                                                                          alt="logo image"
                                                                                          width="140"
                                                                                          height="60"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                           <div className="col-xl-5col">
                                                                                <div className="partner">
                                                                                     <img
                                                                                          src="assets/images/brands/small/brand5.png"
                                                                                          alt="logo image"
                                                                                          width="140"
                                                                                          height="60"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="icon-category-electronics"></i>
                                                            Electronics
                                                       </a>

                                                       <div className="megamenu megamenu-fixed-width megamenu-two">
                                                            <div className="row">
                                                                 <div className="col-lg-3">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           ACCESSORIES
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Cables &
                                                                                     Adaperts
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Electronic
                                                                                     Cigarettes
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Batteries
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Chargers
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Home Electronic
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Bags & Cases
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="col-lg-3 pl-xl-2">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           AUDIO & VIDEO
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Televisions
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Projectors
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     TV peceivers
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Audio Amplifier
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     TV Sticks
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="col-lg-3 pl-xl-0">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           CAMERA & PHOTO
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Digital Cameras
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Camcorders
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Camera Drones
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Action Cameras
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Photo Supplies
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Camera & Photo
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="col-lg-3 pl-xl-0">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           LAPTOPS
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Caming Laptops
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Ultraslim
                                                                                     Laptops
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Laptop
                                                                                     Accessories
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Laptop Bags &
                                                                                     Cases
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Tablet
                                                                                     Accessories
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="banner-container w-100 pl-3 pr-3 d-lg-block d-none">
                                                                      <div className="row">
                                                                           <div className="col-md-6">
                                                                                <div className="banner banner7 banner-md-vw text-transform-none">
                                                                                     <figure>
                                                                                          <img
                                                                                               src="assets/images/demoes/demo40/menu-banner-2.jpg"
                                                                                               alt="banner"
                                                                                          />
                                                                                     </figure>

                                                                                     <div className="banner-layer banner-layer-middle d-flex align-items-center justify-content-end pt-0">
                                                                                          <div className="content-left">
                                                                                               <h4 className="banner-layer-circle-item mb-0 ls-0">
                                                                                                    40
                                                                                                    <sup>
                                                                                                         %
                                                                                                         <small className="ls-0">
                                                                                                              OFF
                                                                                                         </small>
                                                                                                    </sup>
                                                                                               </h4>
                                                                                          </div>
                                                                                          <div className="content-right text-right">
                                                                                               <h5 className=" ls-0">
                                                                                                    <del className="d-block m-b-2 text-secondary">
                                                                                                         $450
                                                                                                    </del>
                                                                                                    $270
                                                                                               </h5>
                                                                                               <h4 className="m-b-1 ls-n-25">
                                                                                                    Watches
                                                                                               </h4>
                                                                                               <h3 className="mb-0">
                                                                                                    HURRY
                                                                                                    UP!
                                                                                               </h3>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                           <div className="col-md-6">
                                                                                <div className="banner banner8 banner-md-vw">
                                                                                     <figure>
                                                                                          <img
                                                                                               src="assets/images/demoes/demo40/menu-banner-3.jpg"
                                                                                               alt="banner"
                                                                                          />
                                                                                     </figure>

                                                                                     <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                                                                                          <h3 className="text-dark text-right">
                                                                                               Electronic
                                                                                               <br />
                                                                                               Deals
                                                                                          </h3>

                                                                                          <div className="coupon-sale-content">
                                                                                               <h4 className="menu-coupon-sale-text bg-dark text-white d-block font1 text-transform-none">
                                                                                                    Exclusive
                                                                                                    COUPON
                                                                                               </h4>
                                                                                               <h5 className="custom-coupon-sale-text font1 text-dark ls-n-10 p-0">
                                                                                                    <b className="text-dark">
                                                                                                         $100
                                                                                                    </b>{" "}
                                                                                                    OFF
                                                                                               </h5>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="icon-category-gifts"></i>
                                                            Gifts
                                                       </a>

                                                       <div className="megamenu megamenu-fixed-width megamenu-three">
                                                            <div className="row">
                                                                 <div className="col-lg-3">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0 d-flex flex-column align-items-start"
                                                                      >
                                                                           <i className="icon-boy-broad-smile"></i>
                                                                           FOR HIM
                                                                      </a>
                                                                      <ul className="submenu pb-0">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Gifts for
                                                                                     Boyfriend
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Gifts for
                                                                                     Husband
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Gifts for Dad
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="col-lg-3 pl-xl-2">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0 d-flex flex-column align-items-start"
                                                                      >
                                                                           <i className="icon-smiling-girl"></i>
                                                                           FOR HER
                                                                      </a>
                                                                      <ul className="submenu pb-0">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Gifts for
                                                                                     Girlfriend
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Gifts for Wife
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Gifts for Mom
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="col-lg-3 pl-xl-0">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0 d-flex flex-column align-items-start"
                                                                      >
                                                                           <i className="icon-smiling-baby"></i>
                                                                           FOR KIDS
                                                                      </a>
                                                                      <ul className="submenu pb-0">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Gifts for Boys
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Gifts for Grils
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Gifts for Tween
                                                                                     Boys
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="col-lg-3 pl-xl-0">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0 d-flex flex-column align-items-start"
                                                                      >
                                                                           <i className="icon-gift-2"></i>
                                                                           BIRTHDAY
                                                                      </a>
                                                                      <ul className="submenu pb-0">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Birthday for
                                                                                     Him
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Birthday for
                                                                                     Her
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Boyfriend Gifts
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="icon-category-garden"></i>
                                                            Home & Garden
                                                       </a>

                                                       <div className="megamenu megamenu-fixed-width megamenu-four">
                                                            <div className="row">
                                                                 <div className="col-lg-4 mb-1 pb-2">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0 d-lg-none d-block"
                                                                      >
                                                                           VARIATION 1
                                                                      </a>
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           FURNITURE
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     BEAUTY &
                                                                                     PERSONAL CARE
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     SOF & COUCHES
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     ARMCHARIRS
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     BED FRAMES
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     BEDSIDE TABLES
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     BRESSING TABLES
                                                                                </a>
                                                                           </li>
                                                                      </ul>

                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           HOME ACCESSORIES
                                                                      </a>
                                                                      <ul className="submenu pb-0">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     DECORATIVE
                                                                                     ACCESSORIES
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     CANDLES &
                                                                                     HOLDERS
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     HOME FRAGRANCE
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     MIRRORS
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     CLOCKS
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-4">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0 d-lg-none d-block"
                                                                      >
                                                                           VARIATION 2
                                                                      </a>
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           LIGHTING
                                                                      </a>
                                                                      <ul className="submenu">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     LIGHT BULBS
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     LAMPS
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     CEILING LIGHTS
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     WALL LIGHTS
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     BATHROOM
                                                                                     LIGHTING
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     OUTDOOR
                                                                                     LIGHTING
                                                                                </a>
                                                                           </li>
                                                                      </ul>

                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           GARDEN & OUTDOORS
                                                                      </a>
                                                                      <ul className="submenu pb-0">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     GARDEN
                                                                                     FURNITURE
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     LAWN MOWERS
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     PRESSURE
                                                                                     WASHERS
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     ALL ARDEN TOOLS
                                                                                     & EQUIPMENT
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     BARBECURE &
                                                                                     OUTDOOR DINING
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-4 d-lg-block d-none">
                                                                      <div className="product-widgets-container">
                                                                           <div className="product-default left-details product-widget">
                                                                                <figure>
                                                                                     <a href="demo36-product.html">
                                                                                          <img
                                                                                               src="assets/images/demoes/demo36/products/small/product-1.jpg"
                                                                                               width="84"
                                                                                               height="84"
                                                                                               alt="product"
                                                                                          />
                                                                                     </a>
                                                                                </figure>

                                                                                <div className="product-details">
                                                                                     <h3 className="product-title">
                                                                                          {" "}
                                                                                          <a href="demo36-product.html">
                                                                                               PT
                                                                                               Speaker
                                                                                          </a>
                                                                                     </h3>

                                                                                     <div className="ratings-container">
                                                                                          <div className="product-ratings">
                                                                                               <span className="ratings tw-w-full"></span>

                                                                                               <span className="tooltiptext tooltip-top"></span>
                                                                                          </div>
                                                                                     </div>

                                                                                     <div className="price-box">
                                                                                          <span className="product-price">
                                                                                               $49.00
                                                                                          </span>
                                                                                     </div>
                                                                                </div>
                                                                           </div>

                                                                           <div className="product-default left-details product-widget">
                                                                                <figure>
                                                                                     <a href="demo36-product.html">
                                                                                          <img
                                                                                               src="assets/images/demoes/demo36/products/small/product-2.jpg"
                                                                                               width="84"
                                                                                               height="84"
                                                                                               alt="product"
                                                                                          />
                                                                                     </a>
                                                                                </figure>

                                                                                <div className="product-details">
                                                                                     <h3 className="product-title">
                                                                                          <a href="demo36-product.html">
                                                                                               Beats
                                                                                               Solo
                                                                                               HD
                                                                                               Drenched
                                                                                          </a>
                                                                                     </h3>
                                                                                     <div className="price-box">
                                                                                          <span className="product-price">
                                                                                               $49.00
                                                                                          </span>
                                                                                     </div>
                                                                                </div>
                                                                           </div>

                                                                           <div className="product-default left-details product-widget">
                                                                                <figure>
                                                                                     <a href="demo36-product.html">
                                                                                          <img
                                                                                               src="assets/images/demoes/demo36/products/small/product-3.jpg"
                                                                                               width="84"
                                                                                               height="84"
                                                                                               alt="product"
                                                                                          />
                                                                                     </a>
                                                                                </figure>

                                                                                <div className="product-details">
                                                                                     <h3 className="product-title">
                                                                                          <a href="demo36-product.html">
                                                                                               Palm
                                                                                               Print
                                                                                               Jacket
                                                                                          </a>
                                                                                     </h3>

                                                                                     <div className="ratings-container">
                                                                                          <div className="product-ratings">
                                                                                               <span className="ratings tw-w-full"></span>

                                                                                               <span className="tooltiptext tooltip-top"></span>
                                                                                          </div>
                                                                                     </div>

                                                                                     <div className="price-box">
                                                                                          <span className="product-price">
                                                                                               $49.00
                                                                                          </span>
                                                                                     </div>
                                                                                </div>
                                                                           </div>

                                                                           <div className="product-default left-details product-widget">
                                                                                <figure>
                                                                                     <a href="demo36-product.html">
                                                                                          <img
                                                                                               src="assets/images/demoes/demo36/products/small/product-4.jpg"
                                                                                               width="84"
                                                                                               height="84"
                                                                                               alt="product"
                                                                                          />
                                                                                     </a>
                                                                                </figure>

                                                                                <div className="product-details">
                                                                                     <h3 className="product-title">
                                                                                          {" "}
                                                                                          <a href="demo36-product.html">
                                                                                               Camera
                                                                                          </a>{" "}
                                                                                     </h3>
                                                                                     <div className="price-box">
                                                                                          <span className="product-price">
                                                                                               $49.00
                                                                                          </span>
                                                                                     </div>
                                                                                </div>
                                                                           </div>

                                                                           <div className="product-default left-details product-widget">
                                                                                <figure>
                                                                                     <a href="demo36-product.html">
                                                                                          <img
                                                                                               src="assets/images/demoes/demo36/products/small/product-5.jpg"
                                                                                               width="84"
                                                                                               height="84"
                                                                                               alt="product"
                                                                                          />
                                                                                     </a>
                                                                                </figure>

                                                                                <div className="product-details">
                                                                                     <h3 className="product-title">
                                                                                          {" "}
                                                                                          <a href="demo36-product.html">
                                                                                               Red
                                                                                               Football
                                                                                          </a>
                                                                                     </h3>

                                                                                     <div className="ratings-container">
                                                                                          <div className="product-ratings">
                                                                                               <span className="ratings tw-w-full"></span>

                                                                                               <span className="tooltiptext tooltip-top"></span>
                                                                                          </div>
                                                                                     </div>

                                                                                     <div className="price-box">
                                                                                          <span className="product-price">
                                                                                               $49.00
                                                                                          </span>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="icon-category-music"></i>
                                                            Gaming
                                                       </a>

                                                       <div
                                                            className="megamenu megamenu-fixed-width megamenu-five text-transform-none"
                                                            style={{
                                                                 backgroundImage:
                                                                      "url(assets/images/demoes/demo40/menu-banner-4.jpg)",
                                                            }}
                                                       >
                                                            <div className="row">
                                                                 <div className="col-lg-4 pt-0">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           INSTRUMENTS
                                                                      </a>
                                                                      <ul className="submenu bg-transparent">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Beverages
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Guitar
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Drums Sets
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Percussions
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Pedals &
                                                                                     Effects
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Sound Cards
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Studio
                                                                                     Equipments
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Piano &
                                                                                     Keyboards
                                                                                </a>
                                                                           </li>
                                                                      </ul>

                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           EXTRA
                                                                      </a>
                                                                      <ul className="submenu bg-transparent pb-0">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Alcohol
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Strings
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Recorders
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Amplifiers
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Accessories
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-8 pt-0 d-lg-block d-none">
                                                                      <div className="banner banner9 mb-2 h-100 d-flex align-items-center">
                                                                           <div className="banner-layer text-right pt-0">
                                                                                <h6 className="text-transform-none">
                                                                                     CHECK NEW
                                                                                     ARRIVALS
                                                                                </h6>
                                                                                <h3 className=" text-white">
                                                                                     PROFESSIONAL
                                                                                </h3>
                                                                                <h2 className="text-transform-none text-white">
                                                                                     HEADPHONES
                                                                                </h2>
                                                                                <a
                                                                                     href="demo36-shop.html"
                                                                                     className="btn btn-dark"
                                                                                >
                                                                                     VIEW ALL NOW
                                                                                </a>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="icon-cat-sport"></i>Sports
                                                       </a>

                                                       <div className="megamenu megamenu-fixed-width megamenu-four megamenu-product">
                                                            <div className="row">
                                                                 <div className="col-lg-4 mb-0 pb-2">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           SPORTS
                                                                      </a>
                                                                      <ul className="submenu pb-0">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Sports &
                                                                                     Fitness
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Boating &
                                                                                     Sailing
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Clothing
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Exercise &
                                                                                     Fitness
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Golf
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Hunting &
                                                                                     Fishing
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Leisure Sports
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Running
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Swiming
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Team Sports
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Tennis
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Other Sports
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-3">
                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0 pt-2"
                                                                      >
                                                                           SHOP BY PRICE
                                                                      </a>
                                                                      <ul className="submenu mb-1">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Under $25
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     $25 to $50
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     $50 to $100
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     $100 to $200
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     $250 $ Above
                                                                                </a>
                                                                           </li>
                                                                      </ul>

                                                                      <a
                                                                           href="#"
                                                                           className="nolink pl-0"
                                                                      >
                                                                           SHOP BY NRAND
                                                                      </a>
                                                                      <ul className="submenu pb-0">
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Brooks
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Adidas
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Nike
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Asics
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a href="demo36-shop.html">
                                                                                     Puma
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="col-lg-5 d-lg-block d-none menu-product">
                                                                      <div
                                                                           className="owl-carousel owl-theme show-nav-hover nav-outer dots-small"
                                                                           data-owl-options="{
                                                          'items': 1,
                                                          'loop': false
                                                      }"
                                                                      >
                                                                           <div className="product-default">
                                                                                <figure>
                                                                                     <h5>
                                                                                          FLASH
                                                                                          DEALS
                                                                                     </h5>
                                                                                     <a href="demo36-product.html">
                                                                                          <img
                                                                                               src="assets/images/demoes/demo36/products/product-1.jpg"
                                                                                               width="450"
                                                                                               height="450"
                                                                                               alt="product"
                                                                                          />
                                                                                     </a>
                                                                                </figure>
                                                                                <div className="product-details">
                                                                                     <h3 className="product-title">
                                                                                          <a href="demo36-product.html">
                                                                                               Drone
                                                                                               Pro
                                                                                          </a>
                                                                                     </h3>
                                                                                     <div className="ratings-container">
                                                                                          <div className="product-ratings">
                                                                                               <span className="ratings tw-w-4/5 "></span>

                                                                                               <span className="tooltiptext tooltip-top"></span>
                                                                                          </div>
                                                                                     </div>

                                                                                     <div className="price-box">
                                                                                          <del className="old-price">
                                                                                               $59.00
                                                                                          </del>
                                                                                          <span className="product-price">
                                                                                               $49.00
                                                                                          </span>
                                                                                     </div>

                                                                                     <div className="product-countdown-container">
                                                                                          <span className="product-countdown-title">
                                                                                               offer
                                                                                               ends
                                                                                               in:
                                                                                          </span>
                                                                                          <div
                                                                                               className="product-countdown countdown-compact"
                                                                                               data-until="2021, 10, 5"
                                                                                               data-compact="true"
                                                                                          ></div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>

                                                                           <div className="product-default">
                                                                                <figure>
                                                                                     <a href="demo36-product.html">
                                                                                          <img
                                                                                               src="assets/images/demoes/demo36/products/product-2.jpg"
                                                                                               width="450"
                                                                                               height="450"
                                                                                               alt="product"
                                                                                          />
                                                                                     </a>
                                                                                </figure>
                                                                                <div className="product-details">
                                                                                     <h3 className="product-title">
                                                                                          <a href="demo36-product.html">
                                                                                               Drone
                                                                                               Pro
                                                                                          </a>
                                                                                     </h3>
                                                                                     <div className="ratings-container">
                                                                                          <div className="product-ratings">
                                                                                               <span className="ratings tw-w-4/5"></span>

                                                                                               <span className="tooltiptext tooltip-top"></span>
                                                                                          </div>
                                                                                     </div>

                                                                                     <div className="price-box">
                                                                                          <del className="old-price">
                                                                                               $59.00
                                                                                          </del>
                                                                                          <span className="product-price">
                                                                                               $49.00
                                                                                          </span>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </li>
                                             </ul>
                                        </div>
                                   </li>
                              </ul>
                              <PageLinks staticProps={staticProps} />
                         </nav>
                    </div>
               </div>
          </header>
     );
}
