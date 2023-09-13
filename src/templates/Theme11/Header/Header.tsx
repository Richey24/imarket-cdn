import React from "react";
import { FiChevronDown } from "react-icons/fi";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";

const Header = (props) => {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header">
               <div className="header-top bg-dark text-white">
                    <div className="container justify-content-center">
                         <div className="header-left">
                              <h5 className="top-notice mb-0 pl-0">
                                   Get 10% OFF at the Porto Fashion Selection -{" "}
                                   <a href="demo11-shop.html">Shop Now!</a>
                              </h5>
                         </div>
                         {/* End .header-left*/}
                         <div className="header-right d-none d-sm-flex">
                              <PageLinks staticProps={staticProps} />

                              <div className="header-dropdowns text-upper">
                                   <div className="header-dropdown pl-2">
                                        <a href="#">
                                             USD{" "}
                                             <FiChevronDown
                                                  style={{ marginTop: "2px" }}
                                                  size={15}
                                             />
                                        </a>
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
                                        {/* End .header-menu */}
                                   </div>
                                   {/* End .header-dropown */}
                                   <div className="header-dropdown pl-2">
                                        <a href="#">
                                             <i className="flag-us flag" />
                                             ENG
                                             <FiChevronDown
                                                  style={{ marginTop: "2px" }}
                                                  size={15}
                                             />
                                        </a>
                                        <div className="header-menu">
                                             <ul>
                                                  <li>
                                                       <a href="#">
                                                            <i className="flag-us flag mr-2" />
                                                            ENG
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="flag-fr flag mr-2" />
                                                            FRA
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>
                                        {/* End .header-menu */}
                                   </div>
                                   {/* End .header-dropown */}
                              </div>
                              {/* End .header-dropdowns */}
                         </div>
                         {/* End .header-right*/}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-top */}
               <div className="header-transparent">
                    <div className="header-middle sticky-header">
                         <div className="container">
                              <div className="header-left">
                                   <MenuButton />

                                   {/* End .popup-menu */}
                                   <Logo company={company} />
                              </div>
                              {/* End .header-left */}
                              <div className="header-right">
                                   <div className="header-icon header-search header-search-inline header-search-category d-none d-sm-block border-left-0 mb-0">
                                        <a href="#" className="search-toggle" role="button">
                                             <i className="icon-magnifier" />
                                        </a>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control bg-transparent"
                                                       name="q"
                                                       id="q"
                                                       placeholder="Search Products..."
                                                  />
                                                  <button
                                                       className="btn icon-magnifier bg-transparent  border-left-0"
                                                       type="submit"
                                                  />
                                             </div>
                                             {/* End .header-search-wrapper */}
                                        </form>
                                   </div>
                                   <a
                                        href="login.html"
                                        className="header-icon header-icon-user text-white"
                                   >
                                        <i className="icon-user-2" />
                                   </a>
                                   <a href="wishlist.html" className="header-icon">
                                        <i className="icon-wishlist-2" />
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
                                             <i className="minicart-icon" />
                                             <span className="cart-count badge-circle">3</span>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     );
};

export default Header;
