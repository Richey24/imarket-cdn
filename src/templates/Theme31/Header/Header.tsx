"use client";
import CategorySelect from "@/templates/shared/Header/HeaderLinks/CategorySelect";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Link from "next/link";
import React from "react";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header p-0">
               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <MenuButton />
                              <Logo company={company} />
                         </div>
                         <div className="header-center">
                              <PageLinks staticProps={staticProps} />
                         </div>
                         <div className="header-right">
                              <a
                                   href="login.html"
                                   className="header-icon header-icon-user mb-0"
                                   title="Login"
                              >
                                   <i className="icon-user-2"></i>
                              </a>

                              <div className="header-icon header-search header-search-popup header-search-category d-none d-sm-block mb-0">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier"></i>
                                   </a>
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
                                             <div className="select-custom">
                                                  <CategorySelect categories={categories} />
                                             </div>
                                             <button
                                                  className="btn icon-search-3"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <a
                                   href="wishlist.html"
                                   className="header-icon header-icon-wishlist"
                                   title="Wishlist"
                              >
                                   <i className="icon-wishlist-2"></i>
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
                                        <i className="minicart-icon"></i>
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
          </header>
     );
}
