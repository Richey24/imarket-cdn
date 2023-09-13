import { useState } from "react";
import HeaderLinks2 from "@/templates/shared/Header/HeaderLinks/HeaderLinks2";
import CategorySelect from "@/templates/shared/Header/HeaderLinks/CategorySelect";
import Link from "next/link";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     const [cat, setCat] = useState(false);
     const [pro, setPro] = useState(false);
     const [pag, setPag] = useState(false);

     return (
          <header className="header">
               <HeaderLinks2 staticProps={staticProps} className="w-100" />

               <div
                    className="header-middle sticky-header"
                    style={{ paddingLeft: "40px", paddingRight: "40px" }}
               >
                    <div className="container">
                         <div className="header-left w-lg-max ml-auto ml-lg-0">
                              <div className="header-icon header-search header-search-inline header-search-category">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier" />
                                   </a>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control"
                                                  name="q"
                                                  id="q"
                                                  placeholder="Search..."
                                             />
                                             <div className="select-custom body-text">
                                                  <CategorySelect categories={categories} />
                                             </div>
                                             {/* End .select-custom */}
                                             <button
                                                  className="btn icon-magnifier p-0"
                                                  type="submit"
                                             />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              {/* End .header-search */}
                         </div>
                         {/* End .header-left */}
                         <div className="header-center order-first order-lg-0 ml-0 ml-lg-auto">
                              <MenuButton />
                              <Logo company={company} />
                         </div>
                         {/* End .header-center */}
                         <div className="header-right w-lg-max ml-0 ml-lg-auto">
                              <div className="header-contact d-none d-lg-flex align-items-center ml-auto mr-4">
                                   <i className="icon-phone-2" />
                                   <h6 className="line-height-1 pr-2">
                                        Call us now
                                        <Link
                                             href={`tel:${company?.phone}`}
                                             className={`d-block text-dark font1`}
                                        >
                                             {company?.phone}
                                        </Link>
                                   </h6>
                              </div>
                              {/* End .header-contact */}
                              <a href="login.html" className="header-icon login-link pl-1">
                                   <i className="icon-user-2" />
                              </a>
                              <a href="#" className="header-icon btn-wishlist pl-1 pr-2">
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
                                   <div className="cart-overlay" />

                                   {/* End .dropdown-menu */}
                              </div>
                              {/* End .dropdown */}
                         </div>
                         {/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>
               <PageLinks
                    staticProps={staticProps}
                    className="d-flex w-lg-max justify-content-center"
               />
               {/* End .header-bottom */}
          </header>
     );
};

export default Header;
