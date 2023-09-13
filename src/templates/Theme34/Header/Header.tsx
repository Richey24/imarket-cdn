"use client";
import HeaderLinks from "@/templates/shared/Header/HeaderLinks";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Link from "next/link";
import React from "react";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header">
               <div className="header-top">
                    <div className="container-fluid">
                         <div className="header-left">
                              <p className="top-message font-italic ls-n-10">
                                   Get <b className="font-weight-extra-bold">10% OFF</b> at the
                                   Porto Cosmetics Selection -
                                   <Link
                                        href="demo34-shop.html"
                                        className="font-weight-extra-bold text-underline"
                                   >
                                        Shop Now!
                                   </Link>
                              </p>
                         </div>

                         <div className="header-right">
                              <Links />
                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                   <Link href="#">Order</Link>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <Link href="#">Order Tracking</Link>
                                             </li>
                                             <li>
                                                  <Link href="#">Order History</Link>
                                             </li>
                                        </ul>
                                   </div>
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

                         <div className="header-right">
                              <div className="header-search header-search-popup header-search-category w-lg-max text-right d-none d-sm-block">
                                   <Link href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier"></i>
                                   </Link>
                                   <form action=" #" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control"
                                                  name="q"
                                                  id="q"
                                                  placeholder="Search..."
                                                  required
                                             />
                                             <button
                                                  className="btn icon-magnifier"
                                                  title="search"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <Link href="login.html" className="header-icon">
                                   <i className="icon-user-2"></i>
                              </Link>

                              <Link href="wishlist.html" className="header-icon position-relative">
                                   <i className="icon-wishlist-2"></i>
                                   <span className="cart-count badge-circle">2</span>
                              </Link>

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
                                        <span className="cart-count badge-circle">3</span>
                                   </Link>

                                   <div className="cart-overlay"></div>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     );
}
