"use client";
import CategorySelect from "@/templates/shared/Header/HeaderLinks/CategorySelect";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Link from "next/link";
import React from "react";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header mb-2">
               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left d-none d-lg-flex">
                              <div className="header-contact phone">
                                   <span>Call us now</span>

                                   <Link
                                        href={`tel:${company?.phone}`}
                                        className={"font1 text-dark"}
                                   >
                                        {company?.phone}
                                   </Link>
                              </div>
                              <Links />
                         </div>
                         <div className="header-center ml-lg-auto ml-0">
                              <MenuButton />
                              <Logo company={company} />
                         </div>
                         <div className="header-right">
                              <a href="login.html" className="d-lg-block d-none">
                                   <div className="header-user">
                                        <i className="icon-user-2"></i>
                                        <div className="header-userinfo">
                                             <span>Hello!</span>
                                             <h4 className="mb-0">My Account</h4>
                                        </div>
                                   </div>
                              </a>

                              <div className="header-icon header-search header-search-popup header-search-category d-none d-sm-block d-lg-none">
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
                                                  className="btn icon-magnifier"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <a href="wishlist.html" className="header-icon" title="wishlist">
                                   <i className="icon-wishlist-2"></i>
                              </a>

                              <div className="dropdown cart-dropdown">
                                   <a
                                        href="#"
                                        title="Cart"
                                        className="dropdown-toggle dropdown-arrow cart-toggle"
                                   >
                                        <i className="minicart-icon"></i>
                                        <span className="cart-count badge-circle">3</span>
                                   </a>

                                   <div className="cart-overlay"></div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="header-bottom sticky-header d-lg-block d-none">
                    <div className="container">
                         <div className="header-left">
                              <PageLinks staticProps={staticProps} />
                         </div>

                         <div className="header-right pr-0">
                              <form className="mb-0" action="#" method="get">
                                   <div className="submit-wrapper">
                                        <input
                                             type="search"
                                             className="form-control font2"
                                             name="q"
                                             id="qq"
                                             placeholder="I'm searching for..."
                                             required
                                        />
                                        <button className="btn" type="submit">
                                             <i className="icon-magnifier"></i>
                                        </button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </header>
     );
}
