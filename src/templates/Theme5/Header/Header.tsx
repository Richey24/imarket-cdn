import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import logo from "../../../assets/images/your-logo.png";
import product1 from "../../../assets/images/products/product-1.jpg";
import product2 from "../../../assets/images/products/product-2.jpg";
import product3 from "../../../assets/images/products/product-3.jpg";
import "./Header.css";
import { socialMap } from "@/utils/helper";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     const showDrop = (id: string) => {
          document.getElementById(id)?.classList.toggle("showDrop");
     };

     const showCanvas = (id: string) => {
          document.getElementById(id)?.classList.toggle("showCanvas");
     };

     return (
          <div>
               <div className="top-notice text-white bg-dark">
                    <div className="container text-center">
                         <h5 className="d-inline-block mb-0 mr-1">
                              Get Up to <b>40% OFF</b> New-Season Styles
                         </h5>
                         <Link href="category.html" className="category">
                              MEN
                         </Link>
                         <Link href="category.html" className="category ml-2 mr-2">
                              WOMEN
                         </Link>
                         <small className="ml-1">* Limited time only.</small>
                         <button title="Close (Esc)" type="button" className="mfp-close">
                              ×
                         </button>
                    </div>
               </div>

               <header
                    style={{ backgroundColor: "#F6F7F9", paddingBottom: "20px" }}
                    className="header"
               >
                    <div className="header-top">
                         <div className="container">
                              <div className="header-left d-none d-sm-block">
                                   <p className="top-message text-uppercase">
                                        FREE Returns. Standard Shipping Orders $99+
                                   </p>
                              </div>

                              <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                                   <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                                        <Link href="#">Links</Link>
                                        <div className="header-menu">
                                             <ul>
                                                  <li>
                                                       <Link href="/dashboard">Dashboard</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/cart">Cart</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/cart">Checkout</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/wishlist">Wishlist</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/about">About Us</Link>
                                                  </li>
                                             </ul>
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

                                   <span className="separator d-none d-lg-inline-block"></span>

                                   <div className="header-dropdown pr-0">
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

                                   <div className="header-dropdown ml-0 ml-md-4 mr-auto mr-sm-3 mr-md-0">
                                        <Link href="#">
                                             <i className="flag-us flag"></i>ENG
                                        </Link>
                                        <div className="header-menu">
                                             <ul>
                                                  <li>
                                                       <Link href="#">
                                                            <i className="flag-us flag mr-2"></i>ENG
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href="#">
                                                            <i className="flag-fr flag mr-2"></i>FRA
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>

                                   <span className="separator"></span>

                                   <div className="social-icons">
                                        {staticProps.socials?.map((social, i) => {
                                             return (
                                                  <Link
                                                       key={i}
                                                       href={social.link}
                                                       className={`social-icon ${socialMap[social.name]
                                                            }`}
                                                       target="_blank"
                                                  ></Link>
                                             );
                                        })}
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div
                         className="header-middle sticky-header"
                         data-sticky-options="{'mobile': true}"
                    >
                         <div className="container">
                              <div className="header-left col-lg-2 w-auto pl-0">
                                   <button className="mobile-menu-toggler mr-2" type="button">
                                        <i className="fas fa-bars"></i>
                                   </button>
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
                                   </Link>
                              </div>

                              <div className="header-right w-lg-max">
                                   <div className="header-icon header-icon header-search header-search-inline header-search-category w-lg-max ml-3 mr-xl-4">
                                        <Link href="#" className="search-toggle" role="button">
                                             <i className="icon-search-3"></i>
                                        </Link>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       style={{
                                                            borderTopLeftRadius: "20px",
                                                            borderBottomLeftRadius: "20px",
                                                       }}
                                                       type="search"
                                                       className="form-control"
                                                       name="q"
                                                       id="q"
                                                       placeholder="Search..."
                                                       required
                                                  />
                                                  <div className="select-custom">
                                                       <select id="cat" name="cat">
                                                            <option value="">All Categories</option>
                                                            {categories &&
                                                                 categories.map((category) => (
                                                                      <>
                                                                           {!category.parent_id && (
                                                                                <option
                                                                                     value={
                                                                                          category.id
                                                                                     }
                                                                                >
                                                                                     {category.name}
                                                                                </option>
                                                                           )}
                                                                           {category.child_id.map(
                                                                                (id, i) => {
                                                                                     const child =
                                                                                          categories.find(
                                                                                               (
                                                                                                    cat,
                                                                                               ) =>
                                                                                                    cat.id ===
                                                                                                    id,
                                                                                          );
                                                                                     if (child) {
                                                                                          return (
                                                                                               <option
                                                                                                    key={i}
                                                                                                    value={
                                                                                                         child.id
                                                                                                    }
                                                                                               >
                                                                                                    -{" "}
                                                                                                    {_.capitalize(
                                                                                                         child.name,
                                                                                                    )}
                                                                                               </option>
                                                                                          );
                                                                                     } else {
                                                                                          return (
                                                                                               <></>
                                                                                          );
                                                                                     }
                                                                                },
                                                                           )}
                                                                      </>
                                                                 ))}
                                                       </select>
                                                  </div>
                                                  <button
                                                       style={{
                                                            borderTopRightRadius: "20px",
                                                            borderBottomRightRadius: "20px",
                                                       }}
                                                       className="btn icon-magnifier"
                                                       type="submit"
                                                  ></button>
                                             </div>
                                        </form>
                                   </div>

                                   <div className="header-contact d-none d-lg-flex align-items-center ml-auto pl-1  pr-xl-2">
                                        <i className="icon-phone-2"></i>
                                        <h6 className="pt-1">
                                             Call us now
                                             <Link href="tel:#" className="text-dark font1">
                                                  {company?.phone}
                                             </Link>
                                        </h6>
                                   </div>

                                   <Link
                                        href="login.html"
                                        className="header-icon header-icon-user login-link"
                                   >
                                        <i className="icon-user-2"></i>
                                   </Link>

                                   <Link href="wishlist.html" className="header-icon pb-md-1">
                                        <i className="icon-wishlist-2"></i>
                                   </Link>

                                   <div className="dropdown cart-dropdown">
                                        <a
                                             onClick={() => showCanvas("cartCanvas")}
                                             href="#"
                                             title="Cart"
                                             className="dropdown-toggle dropdown-arrow cart-toggle"
                                             role="button"
                                             data-toggle="dropdown"
                                             aria-haspopup="true"
                                             aria-expanded="false"
                                             data-display="static"
                                        >
                                             <i className="minicart-icon"></i>
                                             <span className="cart-count badge-circle">3</span>
                                        </a>

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
                                                  onClick={() => showCanvas("cartCanvas")}
                                                  style={{ fontSize: "40px", color: "white" }}
                                                  href="#"
                                                  title="Close (Esc)"
                                                  className="btn-close"
                                             >
                                                  ×
                                             </a>

                                             <div className="dropdownmenu-wrapper custom-scrollbar">
                                                  <div className="dropdown-cart-header">
                                                       Shopping Cart
                                                  </div>

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo5-product.html">
                                                                           Ultimate 3D Bluetooth
                                                                           Speaker
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>
                                                                      × $99.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <Link
                                                                      href="demo5-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product1}
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
                                                                      />
                                                                 </Link>

                                                                 <Link
                                                                      href="#"
                                                                      className="btn-remove"
                                                                      title="Remove Product"
                                                                 >
                                                                      <span>×</span>
                                                                 </Link>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo5-product.html">
                                                                           Brown Women Casual
                                                                           HandBag
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <Link
                                                                      href="demo5-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product2}
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
                                                                      />
                                                                 </Link>

                                                                 <Link
                                                                      href="#"
                                                                      className="btn-remove"
                                                                      title="Remove Product"
                                                                 >
                                                                      <span>×</span>
                                                                 </Link>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo5-product.html">
                                                                           Circled Ultimate 3D
                                                                           Speaker
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <Link
                                                                      href="demo5-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product3}
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
                                                                      />
                                                                 </Link>
                                                                 <Link
                                                                      href="#"
                                                                      className="btn-remove"
                                                                      title="Remove Product"
                                                                 >
                                                                      <span>×</span>
                                                                 </Link>
                                                            </figure>
                                                       </div>
                                                  </div>

                                                  <div className="dropdown-cart-total">
                                                       <span>SUBTOTAL:</span>

                                                       <span className="cart-total-price float-right">
                                                            $134.00
                                                       </span>
                                                  </div>

                                                  <div className="dropdown-cart-action">
                                                       <Link
                                                            href="cart.html"
                                                            className="btn btn-gray btn-block view-cart"
                                                       >
                                                            View Cart
                                                       </Link>
                                                       <Link
                                                            href="checkout.html"
                                                            className="btn btn-dark btn-block"
                                                       >
                                                            Checkout
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div
                         className="header-bottom sticky-header d-lg-block d-none"
                         data-sticky-options="{'mobile': false}"
                    >
                         <div className="container">
                              <div className="header-left">
                                   <Link href="demo5.html" className="logo">
                                        <Image src={logo} alt="Porto Logo" />
                                   </Link>
                              </div>
                              <div className="header-center">
                                   <nav
                                        style={{ backgroundColor: "#1D70BA" }}
                                        className="main-nav w-100 w-lg-max"
                                   >
                                        <ul className="menu">
                                             {staticProps?.pageLinks?.map(
                                                  (
                                                       link: {
                                                            subMenu?: {
                                                                 name: string;
                                                                 url: string;
                                                            }[];
                                                            name: string;
                                                            url: string;
                                                       },
                                                       idx: number,
                                                  ) => (
                                                       <li key={idx} className="tw-group">
                                                            <Link href={link.url}>{link.name}</Link>
                                                            {link?.subMenu && (
                                                                 <div className="megamenu megamenu-fixed-width megamenu-3cols group-hover:tw-block tw-rounded">
                                                                      <div className="row">
                                                                           <ul className="submenu">
                                                                                {link?.subMenu.map(
                                                                                     (subLink, i) => {
                                                                                          return (
                                                                                               <li key={i}>
                                                                                                    <Link
                                                                                                         key={
                                                                                                              subLink.name
                                                                                                         }
                                                                                                         href={
                                                                                                              subLink.url
                                                                                                         }
                                                                                                    >
                                                                                                         {
                                                                                                              subLink.name
                                                                                                         }
                                                                                                    </Link>
                                                                                               </li>
                                                                                          );
                                                                                     },
                                                                                )}
                                                                           </ul>
                                                                      </div>
                                                                 </div>
                                                            )}
                                                            {/* End .megamenu */}
                                                       </li>
                                                  ),
                                             )}
                                        </ul>
                                   </nav>
                              </div>
                              <div className="header-right">
                                   <div className="header-search header-icon header-search-inline header-search-category w-lg-max">
                                        <Link href="#" className="search-toggle" role="button">
                                             <i className="icon-search-3"></i>
                                        </Link>
                                        <form action="#" method="get">
                                             <div className="header-search-wrapper">
                                                  <input
                                                       type="search"
                                                       className="form-control"
                                                       name="q"
                                                       id="qqq"
                                                       placeholder="Search..."
                                                       required
                                                  />
                                                  <div className="select-custom">
                                                       <select id="category" name="cat">
                                                            <option value="">All Categories</option>
                                                            {categories &&
                                                                 categories.map((category) => (
                                                                      <>
                                                                           {!category.parent_id && (
                                                                                <option
                                                                                     value={
                                                                                          category.id
                                                                                     }
                                                                                >
                                                                                     {category.name}
                                                                                </option>
                                                                           )}
                                                                           {category.child_id.map(
                                                                                (id, i) => {
                                                                                     const child =
                                                                                          categories.find(
                                                                                               (
                                                                                                    cat,
                                                                                               ) =>
                                                                                                    cat.id ===
                                                                                                    id,
                                                                                          );
                                                                                     if (child) {
                                                                                          return (
                                                                                               <option
                                                                                                    key={i}
                                                                                                    value={
                                                                                                         child.id
                                                                                                    }
                                                                                               >
                                                                                                    -{" "}
                                                                                                    {_.capitalize(
                                                                                                         child.name,
                                                                                                    )}
                                                                                               </option>
                                                                                          );
                                                                                     } else {
                                                                                          return (
                                                                                               <></>
                                                                                          );
                                                                                     }
                                                                                },
                                                                           )}
                                                                      </>
                                                                 ))}
                                                       </select>
                                                  </div>
                                                  <button
                                                       className="btn p-0 icon-search-3"
                                                       type="submit"
                                                  ></button>
                                             </div>
                                        </form>
                                   </div>

                                   <Link href="login.html" className="header-icon ">
                                        <i className="icon-user-2"></i>
                                   </Link>

                                   <Link href="wishlist.html" className="header-icon">
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
                                             <i className="minicart-icon"></i>
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

                                             <div className="dropdownmenu-wrapper custom-scrollbar">
                                                  <div className="dropdown-cart-header">
                                                       Shopping Cart
                                                  </div>

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo5-product.html">
                                                                           Ultimate 3D Bluetooth
                                                                           Speaker
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>
                                                                      × $99.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <Link
                                                                      href="demo5-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product1}
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
                                                                      />
                                                                 </Link>

                                                                 <Link
                                                                      href="#"
                                                                      className="btn-remove"
                                                                      title="Remove Product"
                                                                 >
                                                                      <span>×</span>
                                                                 </Link>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo5-product.html">
                                                                           Brown Women Casual
                                                                           HandBag
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <Link
                                                                      href="demo5-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product2}
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
                                                                      />
                                                                 </Link>

                                                                 <Link
                                                                      href="#"
                                                                      className="btn-remove"
                                                                      title="Remove Product"
                                                                 >
                                                                      <span>×</span>
                                                                 </Link>
                                                            </figure>
                                                       </div>

                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo5-product.html">
                                                                           Circled Ultimate 3D
                                                                           Speaker
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                 <Link
                                                                      href="demo5-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product3}
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
                                                                      />
                                                                 </Link>
                                                                 <Link
                                                                      href="#"
                                                                      className="btn-remove"
                                                                      title="Remove Product"
                                                                 >
                                                                      <span>×</span>
                                                                 </Link>
                                                            </figure>
                                                       </div>
                                                  </div>

                                                  <div className="dropdown-cart-total">
                                                       <span>SUBTOTAL:</span>

                                                       <span className="cart-total-price float-right">
                                                            $134.00
                                                       </span>
                                                  </div>

                                                  <div className="dropdown-cart-action">
                                                       <Link
                                                            href="cart.html"
                                                            className="btn btn-gray btn-block view-cart"
                                                       >
                                                            View Cart
                                                       </Link>
                                                       <Link
                                                            href="checkout.html"
                                                            className="btn btn-dark btn-block"
                                                       >
                                                            Checkout
                                                       </Link>
                                                  </div>
                                             </div>
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
