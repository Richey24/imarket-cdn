import { templateImages } from "@/appProvider/templateImages";
import "./Header.css";
import Image from "next/image";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import Links from "@/templates/shared/Header/HeaderLinks/Links";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     const showSearch = () => {
          document.getElementById("searchDiv").classList.toggle("showSearch");
     };
     const showCanvas = () => {
          document.getElementById("cartCanvas").classList.toggle("showCanvas");
     };

     const showDrop = (id: string) => {
          document.getElementById(id)?.classList.toggle("showDrop");
     };

     return (
          <div>
               <div className="top-notice">
                    <div className="container">
                         <div className="notify-left flex-wrap d-flex align-items-center">
                              <h5 className="text-white">
                                   <strong>10% OFF</strong>
                              </h5>

                              <div className="main-heading">
                                   <h5>
                                        Use
                                        <b className="text-dark">PORTO10</b> Coupon Code
                                   </h5>
                                   <h6>
                                        <small>* Minimal Purchase Price</small>
                                   </h6>
                              </div>
                         </div>

                         <div className="notify-right d-block">
                              <h4>
                                   <b className="text-dark">FREE NEXT DAY DELIVERY*</b>
                              </h4>
                              <h6>
                                   <small>* On Business Days - On Orders Over $25</small>
                              </h6>
                         </div>
                    </div>
               </div>
               <header className="header">
                    <div className="header-top">
                         <div className="container">
                              <div className="header-left header-dropdowns">
                                   <div className="header-dropdown">
                                        <a href="#">
                                             <i className="flag-us flag"></i>Eng
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

                                   <div className="header-dropdown ml-4">
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

                                   <span className="separator"></span>

                                   <Links />
                                   {/* links */}
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
                              </div>

                              <div className="header-right w-lg-max ml-0 ml-lg-auto">
                                   <div className="header-contact d-none d-sm-flex align-items-center ml-auto">
                                        <i className="icon-phone-2"></i>
                                        <h6>
                                             <a href={`tel:${company?.phone}`} className="d-block">
                                                  {company?.phone}
                                             </a>
                                        </h6>
                                   </div>

                                   <span className="separator d-sm-block d-none"></span>

                                   <div className="header-search header-search-popup header-search-category header-icon text-dark">
                                        <a
                                             onClick={showSearch}
                                             href="#"
                                             className="search-toggle btn p-0 icon-magnifier"
                                             role="button"
                                        ></a>

                                        <form action="#" method="get">
                                             <div id="searchDiv" className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control bg-white"
                                                       name="q"
                                                       id="q"
                                                       placeholder="Search..."
                                                       required
                                                  />
                                                  <button
                                                       className="btn fas fa-search bg-transparent p-0 border-0"
                                                       type="submit"
                                                  ></button>
                                             </div>
                                        </form>
                                   </div>

                                   <a
                                        href="login.html"
                                        className="header-icon login-link text-dark"
                                   >
                                        <i className="icon-user-2"></i>
                                   </a>

                                   <a href="#" className="header-icon position-relative">
                                        <i className="icon-wishlist-2 text-dark"></i>
                                        <span className="badge-circle">0</span>
                                   </a>

                                   <div className="dropdown cart-dropdown">
                                        <a
                                             onClick={showCanvas}
                                             href="#"
                                             title="Cart"
                                             className="dropdown-toggle dropdown-arrow cart-toggle d-flex align-items-center"
                                             role="button"
                                             data-toggle="dropdown"
                                             aria-haspopup="true"
                                             aria-expanded="false"
                                             data-display="static"
                                        >
                                             <i className="minicart-icon"></i>
                                             <span className="cart-count badge-circle">3</span>
                                        </a>

                                        {/* <div className="cart-overlay"></div> */}

                                        <div
                                             id="cartCanvas"
                                             className="cartCanvas"
                                             style={{
                                                  position: "fixed",
                                                  top: "0px",
                                                  right: "0px",
                                                  zIndex: "10",
                                                  alignItems: "flex-start",
                                                  gap: "10px",
                                             }}
                                        >
                                             <a
                                                  style={{ fontSize: "40px", color: "white" }}
                                                  onClick={showCanvas}
                                                  href="#"
                                                  title="Close (Esc)"
                                                  className="btn-close"
                                             >
                                                  ×
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="header-middle sticky-header">
                         <div className="container">
                              <div className="header-left d-none d-lg-flex">
                                   <PageLinks staticProps={staticProps} />
                              </div>

                              <div className="header-center justify-content-between">
                                   <Logo company={company} />
                                   <button className="mobile-menu-toggler" type="button">
                                        <i className="fas fa-bars"></i>
                                   </button>
                              </div>

                              <div className="header-right d-none d-lg-flex">
                                   <div className="main-nav d-flex w-lg-max justify-content-end">
                                        <ul className="menu">
                                             <li>
                                                  <a href="demo17-about.html">About Us</a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>
          </div>
     );
};

export default Header;
