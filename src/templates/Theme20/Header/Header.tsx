import { useState } from "react";
import Slider from "react-slick";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Links from "@/templates/shared/Header/HeaderLinks/Links";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };

     return (
          <div>
               <div className="top-notice p-0">
                    <div className="info-boxes-slider">
                         <Slider {...settings}>
                              {" "}
                              <div className="owl-item active">
                                   {" "}
                                   <div className="info-box info-box-icon-left">
                                        <i className="icon-shipping" />
                                        <div className="info-box-content">
                                             <h4>Free Shipping on Orders Over $99</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                              </div>
                              <div className="owl-item active">
                                   <div className="info-box info-box-icon-left bg-dark">
                                        <i className="icon-money" />
                                        <div className="info-box-content">
                                             <h4>Up to 40% OFF on Selected Items</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                              </div>
                              <div className="owl-item active">
                                   <div className="info-box info-box-icon-left">
                                        <i className="icon-secure-payment" />
                                        <div className="info-box-content">
                                             <h4>100% Secure Payment</h4>
                                        </div>
                                        {/* End .info-box-content */}
                                   </div>
                              </div>
                         </Slider>

                         {/* End .info-box */}
                    </div>
                    {/* End .owl-carousel */}
               </div>

               <header className="header">
                    <div
                         className="header-top d-none d-lg-block"
                         style={{ paddingRight: "50px", paddingLeft: "50px" }}
                    >
                         <div className="container">
                              <div className="header-left">
                                   <div className="header-search header-search-inline header-search-category d-block header-icon text-dark">
                                        <a
                                             href="#"
                                             className="search-toggle btn p-0 icon-search-3"
                                             role="button"
                                        ></a>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control"
                                                       name="q"
                                                       id="q"
                                                       placeholder="Search..."
                                                  />
                                                  <button
                                                       className="btn icon-magnifier p-0"
                                                       type="submit"
                                                  />
                                             </div>
                                             {/* End .header-search-wrapper */}
                                        </form>
                                   </div>
                              </div>
                              {/* End .header-dropdown */}
                              <div className="header-right ml-0 ml-lg-auto">
                                   <div className="header-dropdowns">
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
                                        </div>
                                        {/* End .header-dropdown */}
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
                                   <a
                                        href="login.html"
                                        className="header-icon login-link text-dark"
                                   >
                                        <i className="icon-user-2" />
                                   </a>
                                   <a href="#" className="header-icon position-relative">
                                        <i className="icon-wishlist-2 text-dark" />
                                        <span className="badge-circle">0</span>
                                   </a>
                              </div>
                         </div>
                    </div>

                    <div className="header-middle sticky-header">
                         <div className="container">
                              <PageLinks staticProps={staticProps} />{" "}
                              <div className="header-center ml-0">
                                   <MenuButton />
                                   <Logo company={company} />
                              </div>
                              <div className="header-right justify-content-center ml-0">
                                   <nav className="main-nav">
                                        <ul className="menu">
                                             <li>
                                                  <a href="demo20-about.html">About Us</a>
                                             </li>
                                        </ul>
                                   </nav>
                              </div>
                              <div className="header-right d-lg-none">
                                   <div className="header-icon header-search header-search-popup header-search-category d-none d-sm-block header-icon text-dark">
                                        <a href="#" className="search-toggle btn p-0" role="button">
                                             <i className="icon-search-3" />
                                        </a>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control"
                                                       name="q"
                                                       id="q1"
                                                       placeholder="Search..."
                                                  />
                                                  <button
                                                       className="btn icon-magnifier p-0"
                                                       type="submit"
                                                  />
                                             </div>
                                        </form>
                                   </div>
                                   <a
                                        href="login.html"
                                        className="header-icon login-link text-dark"
                                   >
                                        <i className="icon-user-2" />
                                   </a>
                                   <a href="#" className="header-icon position-relative">
                                        <i className="icon-wishlist-2 text-dark" />
                                        <span className="badge-circle">0</span>
                                   </a>
                                   <div className="dropdown cart-dropdown">
                                        <a
                                             href="#"
                                             title="Cart"
                                             className="dropdown-toggle cart-toggle"
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
               </header>
          </div>
     );
};

export default Header;
