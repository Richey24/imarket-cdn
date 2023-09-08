import React, { useState } from "react";
import HeaderSearch from "@/templates/shared/Header/HeaderSearch";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import CategorySelect from "@/templates/shared/Header/HeaderLinks/CategorySelect";
import Links from "@/templates/shared/Header/HeaderLinks/Links";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     const [cat, setCat] = useState(false);
     const [pro, setPro] = useState(false);
     const [pag, setPag] = useState(false);

     return (
          <header className="header box-shadow ">
               <div className="header-top">
                    <div className="container">
                         <div className="header-left">
                              <div className="header-dropdown">
                                   <a href="#">
                                        <i className="flag-us flag" />
                                        ENG
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
                              {/* End .header-dropdown */}
                              <span className="gap mx-3">|</span>
                              <div className="header-dropdown">
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
                              {/* End .header-menu */}
                         </div>
                         {/* End .header-dropdown */}
                         <div className="header-right ml-0 ml-lg-auto">
                              <p className="top-message mb-0 text-uppercase">Welcome To Porto!</p>
                              <span className="gap mx-4 d-none d-lg-block">|</span>
                              <Links />
                              {/* End .header-dropown */}
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
                              {/* End .header-dropown */}
                         </div>
                         {/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>

               <HeaderSearch
                    company={company}
                    categories={categories}
                    className="text-white"
                    menuBtnTextColor={"text-white"}
               />
               <div className="header-bottom sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <Logo company={company} />
                         </div>
                         <div className="header-center">
                              <PageLinks staticProps={staticProps} />
                         </div>
                         <div className="header-right pr-0">
                              <div className="header-icon header-search header-search-popup header-search-category w-lg-max text-right">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-search-3" />
                                   </a>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control"
                                                  name="q"
                                                  id="q1"
                                                  placeholder="I'm searching for..."
                                             />
                                             <div className="select-custom">
                                                  <CategorySelect categories={categories} />
                                             </div>
                                             {/* End .select-custom */}
                                             <button
                                                  className="btn icon-search-3 bg-dark text-white p-0"
                                                  title="search"
                                                  type="submit"
                                             />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              {/* End .header-search */}
                              <a href="wishlist.html" className="header-icon">
                                   <i className="icon-wishlist-2" />
                              </a>
                         </div>
                    </div>
               </div>
          </header>
     );
};

export default Header;
