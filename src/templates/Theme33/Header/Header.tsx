"use client";
import Link from "next/link";
import React from "react";
import { InfoBoxesContainer } from "../Home/components/Info";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import SocialIcons from "@/templates/shared/SocialIcons";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;
     return (
          <div>
               <InfoBoxesContainer />

               <header className="header">
                    <div className="header-top">
                         <div className="container">
                              <div className="header-left d-none d-sm-block">
                                   <h6 className="telephone mb-0">Call Us (123) 456-7890</h6>
                              </div>

                              <div className="header-right w-sm-100">
                                   <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                                        <Link href="#">Links</Link>
                                        <div className="header-menu">
                                             <Links />
                                        </div>
                                   </div>
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

                                   <span className="separator"></span>

                                   <SocialIcons links={staticProps.socials} />
                              </div>
                         </div>
                    </div>

                    <div
                         className="header-middle header-align-center"
                         data-sticky-options="{'mobile': true}"
                    >
                         <div className="container">
                              <div className="header-left d-lg-block d-none">
                                   <div className="header-dropdowns font2">
                                        <div className="header-dropdown switcher">
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

                                        <div className="header-dropdown switcher">
                                             <Link href="#">
                                                  <i className="flag-us flag"></i>ENG
                                             </Link>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li>
                                                            <Link href="#">
                                                                 <i className="flag-us flag mr-2"></i>
                                                                 ENG
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="#">
                                                                 <i className="flag-fr flag mr-2"></i>
                                                                 FRA
                                                            </Link>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="header-center">
                                   <MenuButton />

                                   <Logo company={company} />
                              </div>

                              <div className="header-right">
                                   <div className="header-search header-search-inline">
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
                                                  <button
                                                       className="btn icon-magnifier"
                                                       type="submit"
                                                  ></button>
                                             </div>
                                        </form>
                                   </div>
                                   <div className="icons-group d-flex d-lg-none">
                                        <Link href="#" className="header-icon">
                                             <i className="icon-wishlist-2"></i>
                                        </Link>

                                        <div className="dropdown cart-dropdown">
                                             <Link
                                                  href="#"
                                                  title="Cart"
                                                  className="dropdown-toggle dropdown-arrow cart-toggle"
                                                  role="button"
                                                  data-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                  data-display="static"
                                             >
                                                  <i className="icon-bag-2"></i>
                                                  <span className="cart-count badge-circle">3</span>
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
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="header-bottom sticky-header d-lg-block d-none">
                         <div className="container">
                              <div className="header-left">
                                   <PageLinks staticProps={staticProps} />
                              </div>

                              <div className="header-right">
                                   <Link href="#" className="header-icon">
                                        <i className="icon-wishlist-2"></i>
                                   </Link>

                                   <div className="dropdown cart-dropdown">
                                        <Link
                                             href="#"
                                             title="Cart"
                                             className="dropdown-toggle dropdown-arrow cart-toggle"
                                             role="button"
                                             data-toggle="dropdown"
                                             aria-haspopup="true"
                                             aria-expanded="false"
                                             data-display="static"
                                        >
                                             <i className="icon-bag-2"></i>
                                             <span className="cart-count badge-circle">3</span>
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
                              </div>
                         </div>
                    </div>
               </header>
          </div>
     );
}
