import Image from "next/image";
import "./Header.css";
import { templateImages } from "@/appProvider/templateImages";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";

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
               <div className="top-notice p-0">
                    <div style={{ display: "flex" }} className="info-boxes-slider bg-primary">
                         <div className="info-box info-box-icon-left">
                              <i className="icon-shipping"></i>

                              <div className="info-box-content">
                                   <h4>Free Shipping on Orders Over $99</h4>
                              </div>
                         </div>
                         <div className="info-box info-box-icon-left">
                              <i className="icon-money"></i>

                              <div className="info-box-content">
                                   <h4>Up to 40% OFF on Selected Items</h4>
                              </div>
                         </div>

                         <div className="info-box info-box-icon-left">
                              <i className="sicon-graduation"></i>

                              <div className="info-box-content">
                                   <h4>15% OFF Student Discount</h4>
                              </div>
                         </div>
                    </div>
               </div>
               <header className="header">
                    <div className="header-middle sticky-header">
                         <div className="container-fluid">
                              <div className="header-left">
                                   <MenuButton />
                                   <Logo company={company} />
                                   <PageLinks staticProps={staticProps} />
                                   <span className="separator d-none d-xl-inline"></span>
                              </div>

                              <div className="header-right pl-0 pl-lg-4">
                                   <div className="header-search header-search-inline header-search-category w-lg-max text-right d-none d-sm-flex">
                                        <a href="#" className="search-toggle" role="button">
                                             <i className="icon-magnifier"></i>
                                        </a>
                                        <form action=" #" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control font-italic"
                                                       name="q"
                                                       id="q"
                                                       placeholder="I'm searching for..."
                                                       required
                                                  />
                                                  <button
                                                       className="btn icon-magnifier"
                                                       title="search"
                                                       type="submit"
                                                  ></button>
                                             </div>
                                        </form>
                                   </div>

                                   <span className="separator d-none d-lg-inline"></span>

                                   <a href="login.html">
                                        <div className="header-user">
                                             <i className="icon-user-2"></i>
                                             <div className="header-userinfo">
                                                  <span className="d-inline-block font2 line-height-1">
                                                       Hello!
                                                  </span>
                                                  <h4 className="mb-0">My Account</h4>
                                             </div>
                                        </div>
                                   </a>

                                   <a href="wishlist.html" className="header-icon">
                                        <i className="icon-wishlist-2"></i>
                                   </a>

                                   <div className="dropdown cart-dropdown">
                                        <a
                                             onClick={showCanvas}
                                             href="#"
                                             title="Cart"
                                             className="dropdown-toggle cart-toggle"
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
               </header>
          </div>
     );
};

export default Header;
