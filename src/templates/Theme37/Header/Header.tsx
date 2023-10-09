"use client";
import HeaderLinks from "@/templates/shared/Header/HeaderLinks";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Link from "next/link";
import React from "react";
import { CatData } from "../Home/data";
import { templateImages } from "@/appProvider/templateImages";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header">
               <div className="header-top">
                    <div className="container">
                         <div className="header-left d-none d-sm-block">{/* End .info-box */}</div>

                         <div className="header-right">
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
                                   {/* End .header-menu */}
                              </div>
                              <div className="header-dropdown d-none d-sm-block">
                                   <Link href="#">USD</Link>
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
                              <div className="header-dropdown d-none d-sm-block">
                                   <Link href="#">
                                        <i className="flag-us flag"></i>ENG
                                   </Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <Link href="#">
                                                       <i className="flag-us flag mr-2"></i>ENG
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="#">
                                                       <i className="flag-fr flag mr-2"></i>FRA
                                                  </Link>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="header-middle sticky-header font2">
                    <div className="container-fluid">
                         <div className="header-left">
                              <MenuButton />
                              <Logo company={company} />
                              <PageLinks staticProps={staticProps} />
                         </div>
                         {/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-top */}
               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left col-lg-2 w-auto pl-0">
                              <button
                                   className="mobile-menu-toggler text-primary mr-2"
                                   type="button"
                              >
                                   <i className="fas fa-bars" />
                              </button>
                              <a href="demo37.html" className="logo">
                                   <img
                                        src={templateImages.logoImage.logo2}
                                        className="w-100"
                                        width={111}
                                        height={44}
                                        alt="Porto Logo"
                                   />
                              </a>
                         </div>
                         {/* End .header-left */}
                         <div className="header-right w-lg-max">
                              <div className="header-icon header-search header-search-inline d-sm-block d-none w-lg-max ">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-search-3" />
                                   </a>
                                   <form className="mb-0" action="#" method="get">
                                        <div className="header-search-wrapper submit-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control font2"
                                                  name="q"
                                                  id="q"
                                                  placeholder="Search..."
                                             />
                                             <button className="btn" type="submit">
                                                  <i className="icon-search-3" />
                                             </button>
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              <div className="header-contact d-lg-flex pl-4 pr-4">
                                   <a href="login.html" className="header-icon mr-0" title="login">
                                        <i className="icon-user-2" />
                                   </a>
                                   <h6 className="text-capitalize d-none d-lg-block">
                                        <span className="ls-n-20">Welcome</span>
                                        <a href="login.html">Sign In / Register</a>
                                   </h6>
                              </div>
                              <a
                                   href="wishlist.html"
                                   className="header-icon position-relative"
                                   title="wishlist"
                              >
                                   <i className="icon-wishlist-2" />
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
                                        <i className="icon-cart-thick" />
                                        <span className="cart-count badge-circle">3</span>
                                   </a>
                                   <div className="cart-overlay" />
                                   <div className="dropdown-menu mobile-cart">
                                        <Link href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </Link>
                                   </div>
                                   {/* End .dropdown-menu */}
                              </div>
                              {/* End .dropdown */}
                         </div>
                         {/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-middle */}
               <div className="header-bottom d-none d-lg-block">
                    <div className="container">
                         <nav className="thumbs-nav w-100">
                              <ul className="thumbs d-flex align-items-center justify-content-center mb-2 row">
                                   <li className="thumb-item active col-1">
                                        <a href="demo37-shop.html">
                                             <i className="fas fa-bars bg-primary" />
                                             Categories
                                        </a>
                                   </li>
                                   {CatData.map((data, idx) => (
                                        <li className="thumb-item col-1" key={idx}>
                                             <a href={data.link} className=" has-preview">
                                                  <span
                                                       className="thumb-info-image fixed-image"
                                                       style={{
                                                            backgroundImage: `url(${data.img})`,
                                                       }}
                                                  ></span>
                                                  {data.atag}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </nav>
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-bottom */}
          </header>
     );
}
