import React from "react";
import Link from "next/link";
import HeaderSearch from "@/templates/shared/Header/HeaderSearch";
import SocialIcons from "@/templates/shared/SocialIcons";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     return (
          <div style={{ width: "100%" }}>
            
               <header className="header">
                    <div className="header-top">
                         <div className="container">
                              <div className="header-left header-dropdowns">
                                   <div className="header-dropdown lang-menu">
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
                                   </div>
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
                              </div>
                              <div className="header-right">
                                   <p className="top-message text-uppercase d-none d-sm-block">
                                        Free returns. Standard shipping orders $99+
                                   </p>
                                   <span className="separator" />
                                   <div className="header-dropdown dropdown-expanded mx-3 px-1">
                                        <a href="#">Links</a>
                                        <div className="header-menu">
                                             <ul>
                                                  <li>
                                                       <Link href="/dashboard">My Account</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/wishlist">My Wishlist</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/cart">Cart</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/login" className="login-link">
                                                            Log In
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                        {/* End .header-menu */}
                                   </div>
                                   {/* End .header-dropown */}
                                   <span className="separator separator-1" />
                                   <SocialIcons links={staticProps.socials} />
                              </div>
                         </div>
                    </div>
                    <HeaderSearch company={company} categories={categories} />

                    <div
                         className="header-bottom sticky-header d-lg-block d-none"
                         data-sticky-options="{'mobile': false}"
                    >
                         <div className="container">
                              <div className="header-left">
                                   <a href="demo13.html" className="logo">
                                        <img
                                             src="assets/images/your-logo.png"
                                             className="white-logo sticky-logo"
                                             alt="Porto Logo"
                                             width="110"
                                             height="46"
                                        />
                                   </a>
                              </div>
                              <div className="header-center">
                                   <PageLinks staticProps={staticProps} />
                              </div>
                         </div>
                    </div>
               </header>
          </div>
     );
}
