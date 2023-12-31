"use client";
import HeaderLinks from "@/templates/shared/Header/HeaderLinks";
import CategorySelect from "@/templates/shared/Header/HeaderLinks/CategorySelect";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Link from "next/link";
import React from "react";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header">
               <HeaderLinks staticProps={staticProps} />

               <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}">
                    <div className="container">
                         <div className="header-left w-lg-max">
                              <MenuButton />
                              <Logo company={company} />
                              <div className="header-icon header-search header-search-inline header-search-category d-lg-block d-none text-right mt-0">
                                   <Link href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier"></i>
                                   </Link>
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
                         </div>

                         <div className="header-right">
                              <Link
                                   href="wishlist.html"
                                   className="header-icon position-relative d-lg-none mr-2"
                              >
                                   <i className="icon-wishlist-2"></i>
                                   <span className="badge-circle">0</span>
                              </Link>

                              <div className="header-user d-lg-flex align-items-center">
                                   <Link
                                        href="login.html"
                                        className="header-icon mr-0"
                                        title="login"
                                   >
                                        <i className="icon-user-2 mr-2"></i>
                                   </Link>
                                   <h6 className="font1 d-none d-lg-block mb-0">
                                        <span className="d-block text-body">Welcome</span>
                                        <Link href="login.html" className="font-weight-bold">
                                             Sign In / Register
                                        </Link>
                                   </h6>
                              </div>

                              <div className="cart-dropdown-wrapper d-flex align-items-center">
                                   <div className="dropdown cart-dropdown">
                                        <Link
                                             href="#"
                                             title="Cart"
                                             className="dropdown-toggle cart-toggle"
                                             role="button"
                                             data-toggle="dropdown"
                                             aria-haspopup="true"
                                             aria-expanded="false"
                                             data-display="static"
                                        >
                                             <i className="icon-cart-thick"></i>
                                             <span className=" cart-count badge-circle">3</span>
                                        </Link>

                                        <div className="cart-overlay"></div>

                                        <div className="dropdown-menu mobile-cart">
                                             <Link
                                                  href="#"
                                                  title="Close (Esc)"
                                                  className="btn-close"
                                             >
                                                  ×
                                             </Link>
                                        </div>
                                   </div>

                                   <span className="cart-subtotal font2 d-none d-sm-inline">
                                        Shopping Cart
                                        <span className="cart-price d-block font2">$0.00</span>
                                   </span>
                              </div>
                         </div>
                    </div>
               </div>

               <div
                    className="header-bottom sticky-header d-none d-lg-flex"
                    data-sticky-options="{'mobile': false}"
               >
                    <div className="container">
                         <div className="header-center w-100 ml-0">
                              <nav className="main-nav d-flex font2">
                                   <div className="menu-depart">
                                        <Link href="demo35.html">
                                             <i className="fa fa-bars align-middle mr-3"></i>All
                                             Departments
                                        </Link>
                                        <ul className="menu menu-vertical">
                                             <li className="tw-group">
                                                  <Link href="#">
                                                       <i className="icon-category-fashion"></i>
                                                       Fashion
                                                  </Link>
                                                  <span className="menu-btn"></span>
                                                  <div className="megamenu megamenu-fixed-width megamenu-one group-hover:tw-block">
                                                       <div className="row">
                                                            <div className="col-md-6">
                                                                 <div className="row">
                                                                      <div className="col-md-6 mb-1">
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                Woman
                                                                           </Link>
                                                                           <ul className="submenu">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Tops &amp;
                                                                                          Blouses
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Accessories
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Dresses
                                                                                          &amp;
                                                                                          Skirts
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Shoes
                                                                                          &amp;
                                                                                          Boots
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>

                                                                      <div className="col-md-6 mb-1">
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                Men
                                                                           </Link>
                                                                           <ul className="submenu">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Accessories
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Watch
                                                                                          Fashion
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Tees,
                                                                                          Knits
                                                                                          &amp;
                                                                                          Polos
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Paints
                                                                                          &amp;
                                                                                          Denim
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>

                                                                      <div className="col-md-6 mb-1">
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                Jewellery
                                                                           </Link>
                                                                           <ul className="submenu">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Sweaters
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Heels
                                                                                          &amp;
                                                                                          Sandals
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Jeans
                                                                                          &amp;
                                                                                          Shorts
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>

                                                                      <div className="col-md-6 mb-1">
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                Kids Fashion
                                                                           </Link>
                                                                           <ul className="submenu">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Casual
                                                                                          Shoes
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Spring
                                                                                          &amp;
                                                                                          Autumn
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Winter
                                                                                          Sneakers
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-6 text-right">
                                                                 <div className="menu-banner menu-banner-2 d-inline-block position-relative h-auto">
                                                                      <figure className="text-right">
                                                                           <img
                                                                                src="assets/images/demoes/demo35/menu-banner-1.jpg"
                                                                                alt="Menu banner"
                                                                                className="product-promo d-inline-block"
                                                                                width="300"
                                                                                height="383"
                                                                           />
                                                                      </figure>
                                                                      <i>OFF</i>
                                                                      <div className="banner-content text-left">
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
                                                       </div>
                                                       <div className="row px-5">
                                                            <div className="col-lg-12">
                                                                 <div className="partners-container mb-2">
                                                                      <div
                                                                           className="owl-carousel owl-theme"
                                                                           data-owl-options="{
                                                          'dots': false,
                                                          'items': 4,
                                                          'margin': 20,
                                                          'responsive': {
                                                              '1200': {
                                                                  'items': 5
                                                              }
                                                          }
                                                      }"
                                                                      >
                                                                           <div className="partner">
                                                                                <img
                                                                                     src="assets/images/brands/small/brand1.png"
                                                                                     alt="logo image"
                                                                                     width="140"
                                                                                     height="60"
                                                                                />
                                                                           </div>
                                                                           <div className="partner">
                                                                                <img
                                                                                     src="assets/images/brands/small/brand2.png"
                                                                                     alt="logo image"
                                                                                     width="140"
                                                                                     height="60"
                                                                                />
                                                                           </div>
                                                                           <div className="partner">
                                                                                <img
                                                                                     src="assets/images/brands/small/brand3.png"
                                                                                     alt="logo image"
                                                                                     width="140"
                                                                                     height="60"
                                                                                />
                                                                           </div>
                                                                           <div className="partner">
                                                                                <img
                                                                                     src="assets/images/brands/small/brand4.png"
                                                                                     alt="logo image"
                                                                                     width="140"
                                                                                     height="60"
                                                                                />
                                                                           </div>
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
                                             <li className="tw-group">
                                                  <Link href="#">
                                                       <i className="icon-category-electronics"></i>
                                                       Electronics
                                                  </Link>
                                                  <span className="menu-btn"></span>
                                                  <div className="megamenu megamenu-fixed-width megamenu-two group-hover:tw-block">
                                                       <div className="row">
                                                            <div className="col-lg-3 mb-1">
                                                                 <Link
                                                                      href="#"
                                                                      className="nolink pl-0"
                                                                 >
                                                                      ACCESSORIES
                                                                 </Link>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Cables &amp;
                                                                                Adapters
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Electronic
                                                                                Cigarattes
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Batteries
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Chargers
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Home Electronic
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Bags &amp; Cases
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-3 mb-1">
                                                                 <Link
                                                                      href="#"
                                                                      className="nolink pl-0"
                                                                 >
                                                                      AUDIO &amp; VIDEO
                                                                 </Link>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Televisions
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                TV Receivers
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Projectors
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Audio Amplifier
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                TV SticksAmplifier
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-3 mb-1">
                                                                 <Link
                                                                      href="#"
                                                                      className="nolink pl-0"
                                                                 >
                                                                      CAMERA &amp; PHOTO
                                                                 </Link>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Digital Cameras
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Camcorders
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Camera Drones
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Action Cameras
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Photo Supplies
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Camera &amp; Photo
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-3 mb-1">
                                                                 <Link
                                                                      href="#"
                                                                      className="nolink pl-0"
                                                                 >
                                                                      LAPTOPS
                                                                 </Link>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gaming Laptops
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Utraslim Laptops
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Tablets
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Laptop Accessories
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Tablet Accessories
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Laptop Bag &amp;
                                                                                Cases
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                       </div>
                                                       <div className="row px-5">
                                                            <div className="col-md-6">
                                                                 <div className="banner menu-banner-3 banner-md-vw text-transform-none">
                                                                      <figure>
                                                                           <img
                                                                                src="assets/images/demoes/demo35/menu-banner-2.jpg"
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
                                                                                     HURRY UP!
                                                                                </h3>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                 <div className="banner menu-banner-4 banner-md-vw">
                                                                      <figure>
                                                                           <img
                                                                                src="assets/images/demoes/demo35/menu-banner-3.jpg"
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
                                                                                <h4 className="custom-coupon-sale-text bg-dark text-white d-block font1 text-transform-none">
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
                                             </li>
                                             <li className="tw-group">
                                                  <Link href="#">
                                                       <i className="icon-category-gifts"></i>Gifts
                                                  </Link>
                                                  <span className="menu-btn"></span>

                                                  <div className="megamenu megamenu-fixed-width megamenu-three group-hover:tw-block">
                                                       <div className="row">
                                                            <div className="col-lg-3 mb-1">
                                                                 <div className="image-wrapper">
                                                                      <img
                                                                           src="assets/images/demoes/demo35/icons/boy.png"
                                                                           alt="icon"
                                                                           width="50"
                                                                           height="68"
                                                                      />
                                                                 </div>
                                                                 <Link href="#" className="nolink">
                                                                      FOR HIM
                                                                 </Link>
                                                                 <ul className="submenu pb-0">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Boyfriend
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Husband
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Dad
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Grandpa
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-3 mb-1">
                                                                 <div className="image-wrapper">
                                                                      <img
                                                                           src="assets/images/demoes/demo35/icons/girl.png"
                                                                           alt="icon"
                                                                           width="50"
                                                                           height="68"
                                                                      />
                                                                 </div>
                                                                 <Link href="#" className="nolink">
                                                                      FOR HER
                                                                 </Link>
                                                                 <ul className="submenu pb-0">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Girlfriend
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Wife
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Mom
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Grandma
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-3 mb-1">
                                                                 <div className="image-wrapper">
                                                                      <img
                                                                           src="assets/images/demoes/demo35/icons/kid.png"
                                                                           alt="icon"
                                                                           width="50"
                                                                           height="68"
                                                                      />
                                                                 </div>
                                                                 <Link href="#" className="nolink">
                                                                      FOR KIDS
                                                                 </Link>
                                                                 <ul className="submenu pb-0">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Boys
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Girls
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Twin Boys
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Gifts for Twin Girls
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-3 mb-1">
                                                                 <div className="image-wrapper">
                                                                      <img
                                                                           src="assets/images/demoes/demo35/icons/supermarket.png"
                                                                           alt="icon"
                                                                           width="50"
                                                                           height="68"
                                                                      />
                                                                 </div>
                                                                 <Link href="#" className="nolink">
                                                                      BIRTHDAY
                                                                 </Link>
                                                                 <ul className="submenu pb-0">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Birthday for Him
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Birthday for Her
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Boyfriend Gifts
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Girlfriend Gifts
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="tw-group">
                                                  <Link href="demo35-shop.html">
                                                       <i className="icon-category-garden"></i>Home
                                                       & Garden
                                                  </Link>
                                                  <span className="menu-btn"></span>
                                                  <div className="megamenu megamenu-fixed-width megamenu-four group-hover:tw-block">
                                                       <div className="row p-0">
                                                            <div className="col-md-8">
                                                                 <div className="row">
                                                                      <div className="col-md-6 mb-1 pb-2">
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0 d-lg-none d-block"
                                                                           >
                                                                                VARIATION 1
                                                                           </Link>
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                FURNITURE
                                                                           </Link>
                                                                           <ul className="submenu m-b-4">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Sofas &
                                                                                          Couches
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Armchairs
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Bed Frames
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Beside
                                                                                          Tables
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Dressing
                                                                                          Tables
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Chest of
                                                                                          Drawers
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>

                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                HOME ACCESSORIES
                                                                           </Link>
                                                                           <ul className="submenu m-b-4">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Decorative
                                                                                          Accessories
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Candles &
                                                                                          Holders
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Home
                                                                                          Fragrance
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Mirrors
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Clocks
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>
                                                                      <div className="col-md-6">
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0 d-lg-none d-block"
                                                                           >
                                                                                VARIATION 2
                                                                           </Link>
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                LIGHTING
                                                                           </Link>
                                                                           <ul className="submenu m-b-4">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Light
                                                                                          Bulbs
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Lamps
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Celling
                                                                                          Lights
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Wall
                                                                                          Lights
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Bathroom
                                                                                          Lighting
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Outdoor
                                                                                          Lighting
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>

                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                GARDEN & OUTDOORS
                                                                           </Link>
                                                                           <ul className="submenu m-b-4">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Garden
                                                                                          Furniture
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Lawn
                                                                                          Mowers
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Pressure
                                                                                          Washers
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          All Garden
                                                                                          Tools &
                                                                                          Equipment
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Barbecue &
                                                                                          Outdoor
                                                                                          Dining
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-4 bg-gray">
                                                                 <div className="product-widgets-container">
                                                                      <div className="product-default left-details product-widget">
                                                                           <figure>
                                                                                <Link href="demo35-product.html">
                                                                                     <img
                                                                                          src="assets/images/demoes/demo35/products/small/product-1.jpg"
                                                                                          width="84"
                                                                                          height="84"
                                                                                          alt="product"
                                                                                     />
                                                                                </Link>
                                                                           </figure>

                                                                           <div className="product-details">
                                                                                <h3 className="product-title">
                                                                                     {" "}
                                                                                     <Link href="demo35-product.html">
                                                                                          Temperos
                                                                                     </Link>{" "}
                                                                                </h3>

                                                                                <div className="price-box">
                                                                                     <span className="product-price">
                                                                                          $39.00
                                                                                     </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>

                                                                      <div className="product-default left-details product-widget">
                                                                           <figure>
                                                                                <Link href="demo35-product.html">
                                                                                     <img
                                                                                          src="assets/images/demoes/demo35/products/small/product-2.jpg"
                                                                                          width="84"
                                                                                          height="84"
                                                                                          alt="product"
                                                                                     />
                                                                                </Link>
                                                                           </figure>

                                                                           <div className="product-details">
                                                                                <h3 className="product-title">
                                                                                     {" "}
                                                                                     <Link href="demo35-product.html">
                                                                                          Clasico
                                                                                     </Link>{" "}
                                                                                </h3>

                                                                                <div className="ratings-container">
                                                                                     <div className="product-ratings">
                                                                                          <span className="ratings tw-w-0"></span>

                                                                                          <span className="tooltiptext tooltip-top">
                                                                                               5.00
                                                                                          </span>
                                                                                     </div>
                                                                                </div>

                                                                                <div className="price-box">
                                                                                     <span className="product-price">
                                                                                          $119.00
                                                                                     </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>

                                                                      <div className="product-default left-details product-widget">
                                                                           <figure>
                                                                                <Link href="demo35-product.html">
                                                                                     <img
                                                                                          src="assets/images/demoes/demo35/products/small/product-3.jpg"
                                                                                          width="84"
                                                                                          height="84"
                                                                                          alt="product"
                                                                                     />
                                                                                </Link>
                                                                           </figure>

                                                                           <div className="product-details">
                                                                                <h3 className="product-title">
                                                                                     {" "}
                                                                                     <Link href="demo35-product.html">
                                                                                          Coffee
                                                                                     </Link>{" "}
                                                                                </h3>

                                                                                <div className="ratings-container">
                                                                                     <div className="product-ratings">
                                                                                          <span className="ratings tw-w-full"></span>

                                                                                          <span className="tooltiptext tooltip-top"></span>
                                                                                     </div>
                                                                                </div>

                                                                                <div className="price-box">
                                                                                     <span className="product-price">
                                                                                          $34.00
                                                                                     </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>

                                                                      <div className="product-default left-details product-widget">
                                                                           <figure>
                                                                                <Link href="demo35-product.html">
                                                                                     <img
                                                                                          src="assets/images/demoes/demo35/products/small/product-4.jpg"
                                                                                          width="84"
                                                                                          height="84"
                                                                                          alt="product"
                                                                                     />
                                                                                </Link>
                                                                           </figure>

                                                                           <div className="product-details">
                                                                                <h3 className="product-title">
                                                                                     {" "}
                                                                                     <Link href="demo35-product.html">
                                                                                          Grape
                                                                                     </Link>{" "}
                                                                                </h3>

                                                                                <div className="ratings-container">
                                                                                     <div className="product-ratings">
                                                                                          <span className="ratings tw-w-full"></span>

                                                                                          <span className="tooltiptext tooltip-top"></span>
                                                                                     </div>
                                                                                </div>

                                                                                <div className="price-box">
                                                                                     <span className="product-price">
                                                                                          $29.00
                                                                                     </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>

                                                                      <div className="product-default left-details product-widget">
                                                                           <figure>
                                                                                <Link href="demo35-product.html">
                                                                                     <img
                                                                                          src="assets/images/demoes/demo35/products/small/product-5.jpg"
                                                                                          width="84"
                                                                                          height="84"
                                                                                          alt="product"
                                                                                     />
                                                                                </Link>
                                                                           </figure>

                                                                           <div className="product-details">
                                                                                <h3 className="product-title">
                                                                                     {" "}
                                                                                     <Link href="demo35-product.html">
                                                                                          Magic
                                                                                          Toast
                                                                                     </Link>{" "}
                                                                                </h3>

                                                                                <div className="ratings-container">
                                                                                     <div className="product-ratings">
                                                                                          <span className="ratings tw-w-full"></span>

                                                                                          <span className="tooltiptext tooltip-top"></span>
                                                                                     </div>
                                                                                </div>

                                                                                <div className="price-box">
                                                                                     <span className="old-price">
                                                                                          $29.00
                                                                                     </span>
                                                                                     <span className="product-price">
                                                                                          $18.00
                                                                                     </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="tw-group">
                                                  <Link href="demo35-shop.html">
                                                       <i className="icon-category-music"></i>Music
                                                  </Link>
                                                  <span className="menu-btn"></span>
                                                  <div
                                                       className="megamenu megamenu-fixed-width megamenu-five text-transform-none p-0 group-hover:tw-block"
                                                       style={{
                                                            backgroundImage:
                                                                 "url(assets/images/demoes/demo35/menu-banner-4.jpg)",
                                                       }}
                                                  >
                                                       <div className="row m-0">
                                                            <div className="col-lg-4 pt-0">
                                                                 <Link
                                                                      href="#"
                                                                      className="nolink text-white pl-0"
                                                                 >
                                                                      INSTRUMENTS
                                                                 </Link>
                                                                 <ul className="submenu bg-transparent">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Guitar
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Drums Sets
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Percussions
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Pedals & Effects
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Sound Cards
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Studio Equipments
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Piano & Keyboards
                                                                           </Link>
                                                                      </li>
                                                                 </ul>

                                                                 <Link
                                                                      href="#"
                                                                      className="nolink text-white pl-0"
                                                                 >
                                                                      EXTRA
                                                                 </Link>
                                                                 <ul className="submenu bg-transparent pb-0">
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Strings
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Recorders
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Amplifiers
                                                                           </Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="demo35-shop.html">
                                                                                Accessories
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                            <div className="col-lg-8 pt-0 d-lg-block d-none">
                                                                 <div className="banner menu-banner-5 d-flex align-items-center">
                                                                      <div className="banner-layer text-right pt-0">
                                                                           <h6 className="text-transform-none font1 mb-1">
                                                                                CHECK NEW ARRIVALS
                                                                           </h6>
                                                                           <h3 className="font1 text-white">
                                                                                PROFESSIONAL
                                                                           </h3>
                                                                           <h2 className="font1 text-transform-none text-white">
                                                                                HEADPHONES
                                                                           </h2>
                                                                           <Link
                                                                                href="demo35-shop.html"
                                                                                className="btn btn-dark font1"
                                                                           >
                                                                                VIEW ALL NOW
                                                                           </Link>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="tw-group">
                                                  <Link href="demo35-shop.html">
                                                       <i className="icon-cat-sport"></i>Sports
                                                  </Link>
                                                  <span className="menu-btn"></span>
                                                  <div className="megamenu megamenu-fixed-width megamenu-six text-transform-none group-hover:tw-block">
                                                       <div className="row">
                                                            <div className="col-md-6 pt-0">
                                                                 <div className="row">
                                                                      <div className="col-md-6">
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                SPORTS
                                                                           </Link>
                                                                           <ul className="submenu bg-transparent">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Sports
                                                                                          &amp;
                                                                                          Fitness
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Boating
                                                                                          &amp;
                                                                                          Sailing
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Clothing
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Exercise
                                                                                          &amp;
                                                                                          Fitness
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Golf
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Hunting
                                                                                          &amp;
                                                                                          Fishing
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Leisure
                                                                                          Sports
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Running
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Swimming
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Team
                                                                                          Sports
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Tennis
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Other
                                                                                          Sports
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>
                                                                      <div className="col-md-6">
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                SHOP BY PRICE
                                                                           </Link>
                                                                           <ul className="submenu bg-transparent pb-0 m-b-3">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Under $25
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          $25 to $50
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          $50 to
                                                                                          $100
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          $100 to
                                                                                          $200
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          $200 &
                                                                                          Above
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                           <Link
                                                                                href="#"
                                                                                className="nolink pl-0"
                                                                           >
                                                                                SHOP BY BRAND
                                                                           </Link>
                                                                           <ul className="submenu bg-transparent pb-0">
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Books
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Adidas
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Nike
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Asics
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="demo35-shop.html">
                                                                                          Puma
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-6 d-lg-block d-none">
                                                                 <div className="featured-deal bg-white mb-3">
                                                                      <div className="product-default mb-0">
                                                                           <h2 className="heading ls-n-10 text-uppercase mb-0">
                                                                                Flash Deals
                                                                           </h2>
                                                                           <figure>
                                                                                <Link href="demo35-product.html">
                                                                                     <img
                                                                                          src="assets/images/demoes/demo35/products/product-16.jpg"
                                                                                          alt="product"
                                                                                          width="1200"
                                                                                          height="1200"
                                                                                     />
                                                                                </Link>
                                                                                <div className="product-countdown-container">
                                                                                     <span className="product-countdown-title">
                                                                                          offer ends
                                                                                          in:
                                                                                     </span>
                                                                                     <div
                                                                                          className="product-countdown countdown-compact"
                                                                                          data-until="2021, 10, 5"
                                                                                          data-compact="true"
                                                                                     ></div>
                                                                                </div>
                                                                           </figure>
                                                                           <div className="product-details">
                                                                                <h3 className="product-title">
                                                                                     <Link href="demo35-product.html">
                                                                                          Raw Meat
                                                                                     </Link>
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
                                   <PageLinks staticProps={staticProps} />
                              </nav>
                              <div className="info-boxes font2 align-items-center ml-auto">
                                   <div className="info-item">
                                        <Link href="#">
                                             <i className="icon-percent-shape"></i>Special Offers
                                        </Link>
                                   </div>
                                   <div className="info-item">
                                        <Link href="#">
                                             <i className="icon-business-book"></i>Recipes
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         <div className="header-right"></div>
                    </div>
               </div>
          </header>
     );
}
