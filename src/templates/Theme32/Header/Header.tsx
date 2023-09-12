"use client";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Link from "next/link";
import React from "react";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="home header header-transparent p-0">
               <div className="header-top d-flex align-items-center">
                    <div className="container">
                         <div className="header-left mr-lg-0 mr-3 d-sm-flex d-none">
                              <h4 className="mb-0">
                                   Get 10% OFF at the Porto GIFTs Selection -{" "}
                                   <Link href="shop">Shop Now!</Link>
                              </h4>
                         </div>
                         <div className="header-right">
                              <Links />
                         </div>
                    </div>
               </div>

               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <MenuButton />

                              <Logo company={company} />
                         </div>

                         <div className="header-right">
                              <div className="header-icon header-search header-search-popup header-search-category d-none d-sm-block">
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
                                                  placeholder="I'm searching for..."
                                                  required
                                             />
                                             <button
                                                  className="btn icon-search-3"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <a
                                   href="login.html"
                                   className="header-icon header-icon-user"
                                   title="login"
                              >
                                   <i className="icon-user-2"></i>
                              </a>

                              <Link href="wishlist.html" className="header-icon" title="wishlist">
                                   <i className="icon-wishlist-2"></i>
                              </Link>

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
                                        <i className="minicart-icon"></i>
                                        <span className="cart-count badge-circle">3</span>
                                   </a>

                                   <div className="cart-overlay"></div>

                                   <div className="dropdown-menu mobile-cart">
                                        <Link href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="header-bottom">
                    <PageLinks staticProps={staticProps} />
               </div>
          </header>
     );
}
