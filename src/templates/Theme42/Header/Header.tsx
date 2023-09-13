"use client";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import SocialIcons from "@/templates/shared/SocialIcons";
import Link from "next/link";
import React from "react";

export default function Header(props: any) {
     const { company, static: staticProps } = props.props;

     return (
          <header className="header">
               <div className="header-top">
                    <div className="container">
                         <div className="header-left d-none d-md-block">
                              <div className="info-box info-box-icon-left text-primary justify-content-start p-0">
                                   <i className="icon-shipping"></i>

                                   <div className="info-box-content">
                                        <h4>FREE Next Day Delivery For Orders $35+</h4>
                                   </div>
                              </div>
                         </div>

                         <div className="header-right header-dropdowns ml-0 ml-md-auto w-md-100">
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

                              <div className="header-dropdown mr-auto mr-md-0">
                                   <a href="#">
                                        <i className="flag-us flag"></i>ENG
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

                              <span className="separator d-none d-xl-block"></span>

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

                              <span className="separator d-none d-md-block mr-0 ml-4"></span>

                              <SocialIcons links={staticProps.socials} />
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

                                             <button
                                                  className="btn icon-magnifier p-0"
                                                  title="search"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <span className="separator d-none d-lg-block"></span>

                              <div className="sicon-box mb-0 d-none d-lg-flex align-items-center pr-3 mr-1">
                                   <div className=" sicon-default">
                                        <i className="icon-phone-1"></i>
                                   </div>
                                   <div className="sicon-header">
                                        <h4 className="sicon-title ls-n-25">CALL US NOW</h4>
                                        <p>{company?.phone}</p>
                                   </div>
                              </div>

                              <span className="separator d-none d-lg-block mr-4"></span>

                              <a href="login.html" className="d-lg-block d-none">
                                   <div className="header-user">
                                        <i className="icon-user-2"></i>
                                        <div className="header-userinfo">
                                             <span>Welcome</span>
                                             <h4>Sign In / Register</h4>
                                        </div>
                                   </div>
                              </a>

                              <span className="separator d-block"></span>

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

                                   {/* <div className="cart-overlay"></div> */}
                              </div>
                         </div>
                    </div>
               </div>

               <div className="header-bottom sticky-header d-none d-lg-flex">
                    <div className="container">
                         <nav className="main-nav w-100">
                              <ul className="menu w-100">
                                   <li className="menu-item d-flex align-items-center">
                                        <a
                                             href="#"
                                             className="d-inline-flex align-items-center sf-with-ul"
                                        >
                                             <i className="custom-icon-toggle-menu d-inline-table"></i>
                                             <span>All Departments</span>
                                        </a>
                                        <div className="menu-depart">
                                             <a href="#">
                                                  <i className="icon-category-motorcycles"></i>Auto
                                                  Parts
                                             </a>

                                             <a href="#">
                                                  <i className="icon-category-internal-accessories"></i>
                                                  Interior Accessories
                                             </a>

                                             <a href="#">
                                                  <i className="icon-category-mechanics"></i>
                                                  Performance
                                             </a>

                                             <a href="#">
                                                  <i className="icon-category-sound-video"></i>Sound
                                                  & Video
                                             </a>

                                             <a href="#">
                                                  <i className="icon-category-steering"></i>Steering
                                                  Wheels
                                             </a>
                                        </div>
                                   </li>
                                   <PageLinks staticProps={staticProps} />
                              </ul>
                         </nav>
                    </div>
               </div>
          </header>
     );
}
