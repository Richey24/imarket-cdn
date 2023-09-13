import Link from "next/link";
import React from "react";
import Image from "next/image";
import Language from "@/templates/shared/Header/HeaderLinks/Language";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import SocialIcons from "@/templates/shared/SocialIcons";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import CategorySelect from "@/templates/shared/Header/HeaderLinks/CategorySelect";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header">
               <div className="header-top text-uppercase">
                    <div className="container">
                         <div className="header-left">
                              <Language />
                         </div>

                         <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                              <Links />

                              <span className="separator d-none d-lg-inline-block"></span>

                              <SocialIcons links={staticProps?.socials} />
                         </div>
                    </div>
               </div>

               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <MenuButton />

                              <a href="demo7.html" className="logo w-100">
                                   <Link href="/" className="logo">
                                        {company?.logo ? (
                                             <Image
                                                  src={company?.logo}
                                                  className="black-logo"
                                                  alt="Porto Logo"
                                                  width={202}
                                                  height={100}
                                             />
                                        ) : (
                                             <h3>{company?.company_name || "Tester"}</h3>
                                        )}
                                   </Link>{" "}
                              </a>

                              <PageLinks staticProps={staticProps} />

                              <div className="header-search header-search-popup header-search-category d-none d-lg-block ml-xl-5">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier"></i>
                                   </a>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control bg-white"
                                                  name="q"
                                                  id="q"
                                                  placeholder="I'm searching for..."
                                                  required
                                             />
                                             <div className="select-custom bg-white">
                                                  {/*  */}
                                                  <CategorySelect categories={categories} />
                                             </div>
                                             <button
                                                  className="btn bg-white icon-search-3"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>
                         </div>

                         <div className="header-right">
                              <div className="header-contact d-none d-lg-flex pl-4 pr-4">
                                   <i className="icon-phone-2"></i>
                                   <h6>
                                        <span>Call us now</span>
                                        <a
                                             href={`tel:#${company?.phone}`}
                                             className="text-dark font1"
                                        >
                                             {company?.phone}
                                        </a>
                                   </h6>
                              </div>

                              <a
                                   href="login.html"
                                   className="header-icon header-icon-user d-lg-none d-block"
                                   title="login"
                              >
                                   <i className="icon-user-2"></i>
                              </a>

                              <a
                                   href="wishlist.html"
                                   className="header-icon d-lg-none d-block"
                                   title="wishlist"
                              >
                                   <i className="icon-wishlist-2"></i>
                              </a>

                              <span className="separator d-lg-inline-block d-none"></span>

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
                                        <i className="icon-shopping-cart"></i>
                                        <span className="cart-count badge-circle">3</span>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     );
}
