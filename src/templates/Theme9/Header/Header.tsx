"use client";
import React from "react";
import { InfoBoxesContainer } from "@/templates/shared/Info";
import HeaderLinks2 from "@/templates/shared/Header/HeaderLinks/HeaderLinks2";
import HeaderSearch from "@/templates/shared/Header/HeaderSearch";

interface InfoBoxItem {
     icon: string;
     title: string;
     description: string;
}

const InfoBox: React.FC<InfoBoxItem> = ({ icon, title, description }) => {
     return (
          <div className="info-box info-box-icon-left">
               <i className={icon} />
               <div className="info-box-content pt-1">
                    <h4>{title}</h4>
                    <p>{description}</p>
               </div>
               {/* End .info-box-content */}
          </div>
     );
};

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     const infoBoxItems: InfoBoxItem[] = [
          {
               icon: "icon-shipping",
               title: "FREE SHIPPING & RETURN",
               description: "Free Shipping on All Orders Over $99.",
          },
          {
               icon: "icon-money",
               title: "MONEY BACK GUARANTEE",
               description: "100% Money Back Guarantee",
          },
          {
               icon: "icon-support",
               title: "ONLINE SUPPORT 24/7",
               description: "Lorem Ipsum Dolor Sit Amet.",
          },
     ];

     const owlCarouselOptions = {
          dots: false,
          margin: 20,
          loop: false,
          responsive: {
               576: {
                    items: 2,
               },
               992: {
                    items: 3,
               },
          },
     };

     return (
          <header className="header mb-0" data-y="0">
               <InfoBoxesContainer />
               <div className="header-top sticky top-0">
                    <div className="container">
                         <HeaderLinks2 staticProps={staticProps} className="w-100" />
                    </div>
               </div>
               <div className="container">
                    <HeaderSearch
                         company={company}
                         categories={categories}
                         className="w-100"
                         menuBtnTextColor="text-white"
                    />
               </div>
               <div className="container d-none  d-lg-block">
                    <div className="row">
                         <aside className="sidebar-home col-lg-3 mobile-sidebar toggle-menu-wrap">
                              <div className="side-menu-wrapper text-uppercase d-none d-lg-block ">
                                   <h2 className="side-menu-title">
                                        <a className="d-block btn-dark" href="#">
                                             <i className="fas fa-bars"></i>Shop By Category
                                        </a>
                                   </h2>

                                   <nav className="side-nav">
                                        <ul className="menu menu-vertical sf-arrows">
                                             <li className="active">
                                                  <a href="demo9.html">
                                                       <i className="sicon-home"></i>Home
                                                  </a>
                                             </li>
                                             <li className="tw-group">
                                                  <a href="demo9-shop.html" className="sf-with-ul">
                                                       <i className="sicon-briefcase"></i>Categories
                                                  </a>
                                                  <div className="megamenu megamenu-fixed-width megamenu-3cols tw-hidden group-hover:tw-block">
                                                       <div className="row">
                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">
                                                                      VARIATION 1
                                                                 </a>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <a href="demo9-shop.html">
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
                                                                           <a href="demo9-shop.html">
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
                                                                           <a href="demo9-shop.html">
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
                                                                                href="demo9-shop.html"
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
                                             <li className="tw-group">
                                                  <a
                                                       href="demo9-product.html"
                                                       className="sf-with-ul"
                                                  >
                                                       <i className="sicon-present"></i>Products
                                                  </a>
                                                  <div className="megamenu megamenu-fixed-width tw-hidden group-hover:tw-block">
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
                                                                           <a href="#">
                                                                                BUILD YOUR OWN
                                                                           </a>
                                                                      </li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-lg-4 p-0">
                                                                 <div className="menu-banner menu-banner-2">
                                                                      <figure>
                                                                           <img
                                                                                src="assets/images/menu-banner-1.jpg"
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
                                                                                <b className="">
                                                                                     50%
                                                                                </b>
                                                                           </h4>
                                                                      </div>
                                                                      <a
                                                                           href="demo9-shop.html"
                                                                           className="btn btn-sm btn-dark"
                                                                      >
                                                                           SHOP NOW
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="tw-group">
                                                  <a href="#" className="sf-with-ul">
                                                       <i className="sicon-docs"></i>Pages
                                                  </a>
                                                  <ul className="tw-hidden group-hover:tw-block">
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
                                                            <a href="demo9-about.html">About Us</a>
                                                       </li>

                                                       <li>
                                                            <a href="demo9-contact.html">
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

                                             <li>
                                                  <a href="demo9-about.html">
                                                       <i className="sicon-users"></i>About Us
                                                  </a>
                                             </li>
                                             <li className="item-menu-sale">
                                                  <a href="#" className="border-top-0">
                                                       HUGE SALE – 70% OFF
                                                  </a>
                                             </li>
                                        </ul>
                                   </nav>
                              </div>
                         </aside>
                    </div>
               </div>
          </header>
     );
}
