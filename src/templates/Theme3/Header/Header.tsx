import React, { useState } from "react";
import Link from "next/link";
import _ from "lodash";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header header-transparent">
               <div className="header-middle sticky-header">
                    <div className="container">
                         <div className="header-left">
                              <button className="mobile-menu-toggler" type="button">
                                   <i className="fas fa-bars" />
                              </button>
                              <Link href="/" className="logo">
                                   {company?.logo ? (
                                        <Image
                                             src={company?.logo}
                                             className="black-logo"
                                             alt="Porto Logo"
                                             width={202}
                                             height={80}
                                        />
                                   ) : (
                                        <h3>{company?.company_name || "Tester"}</h3>
                                   )}
                              </Link>
                              <nav className="main-nav font2">
                                   <ul className="menu">
                                        {staticProps?.pageLinks?.map(
                                             (
                                                  link: {
                                                       subMenu?: { name: string; url: string }[];
                                                       name: string;
                                                       url: string;
                                                  },
                                                  idx: number,
                                             ) => (
                                                  <li className="tw-group">
                                                       <Link href={link.url}>{link.name}</Link>
                                                       {link?.subMenu && (
                                                            <div className="megamenu megamenu-fixed-width megamenu-3cols group-hover:tw-block tw-rounded">
                                                                 <div className="row">
                                                                      <ul className="submenu">
                                                                           {link?.subMenu.map(
                                                                                (subLink) => {
                                                                                     return (
                                                                                          <li>
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
                         ;{/* End .header-left */}
                         <div className="header-right">
                              <div className="header-search header-search-popup header-search-category d-none d-sm-block">
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
                                                  placeholder="I'm searching for..."
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
                                                                                value={category.id}
                                                                           >
                                                                                {category.name}
                                                                           </option>
                                                                      )}
                                                                      {category.child_id.map(
                                                                           (id) => {
                                                                                const child =
                                                                                     categories.find(
                                                                                          (cat) =>
                                                                                               cat.id ===
                                                                                               id,
                                                                                     );
                                                                                if (child) {
                                                                                     return (
                                                                                          <option
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
                                                                                     return <></>;
                                                                                }
                                                                           },
                                                                      )}
                                                                 </>
                                                            ))}
                                                  </select>
                                             </div>
                                             {/* End .select-custom */}
                                             <button
                                                  className="btn text-dark icon-magnifier"
                                                  type="submit"
                                             />
                                        </div>
                                        {/* End .header-search-wrapper */}
                                   </form>
                              </div>
                              <a
                                   href="login.html"
                                   className="header-icon header-icon-user"
                                   title="Login"
                              >
                                   <i className="icon-user-2" />
                              </a>
                              <a
                                   href="wishlist.html"
                                   className="header-icon header-icon-wishlist"
                                   title="Wishlist"
                              >
                                   <i className="icon-wishlist-2" />
                              </a>
                              <div className="dropdown cart-dropdown">
                                   <a
                                        href="#"
                                        className="dropdown-toggle dropdown-arrow cart-toggle"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-display="static"
                                   >
                                        <i className="icon-cart-thick" />
                                        <span className="cart-count badge-circle">3</span>
                                   </a>
                                   <div className="cart-overlay" />
                                   <div className="dropdown-menu mobile-cart">
                                        <a href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </a>
                                        <div className="dropdownmenu-wrapper custom-scrollbar">
                                             <div className="dropdown-cart-header">
                                                  Shopping Cart
                                             </div>
                                             {/* End .dropdown-cart-header */}
                                             <div className="dropdown-cart-products">
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo3-product.html">
                                                                      Ultimate 3D Bluetooth Speaker
                                                                 </a>
                                                            </h4>
                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>
                                                                 × $99.00
                                                            </span>
                                                       </div>
                                                       {/* End .product-details */}
                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo3-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/products/product-1.jpg"
                                                                      alt="product"
                                                                      width={80}
                                                                      height={80}
                                                                 />
                                                            </a>
                                                            <a
                                                                 href="#"
                                                                 className="btn-remove"
                                                                 title="Remove Product"
                                                            >
                                                                 <span>×</span>
                                                            </a>
                                                       </figure>
                                                  </div>
                                                  {/* End .product */}
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo3-product.html">
                                                                      Brown Women Casual HandBag
                                                                 </a>
                                                            </h4>
                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>
                                                                 × $35.00
                                                            </span>
                                                       </div>
                                                       {/* End .product-details */}
                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo3-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/products/product-2.jpg"
                                                                      alt="product"
                                                                      width={80}
                                                                      height={80}
                                                                 />
                                                            </a>
                                                            <a
                                                                 href="#"
                                                                 className="btn-remove"
                                                                 title="Remove Product"
                                                            >
                                                                 <span>×</span>
                                                            </a>
                                                       </figure>
                                                  </div>
                                                  {/* End .product */}
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo3-product.html">
                                                                      Circled Ultimate 3D Speaker
                                                                 </a>
                                                            </h4>
                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>
                                                                 × $35.00
                                                            </span>
                                                       </div>
                                                       {/* End .product-details */}
                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo3-product.html"
                                                                 className="product-image"
                                                            >
                                                                 <img
                                                                      src="assets/images/products/product-3.jpg"
                                                                      alt="product"
                                                                      width={80}
                                                                      height={80}
                                                                 />
                                                            </a>
                                                            <a
                                                                 href="#"
                                                                 className="btn-remove"
                                                                 title="Remove Product"
                                                            >
                                                                 <span>×</span>
                                                            </a>
                                                       </figure>
                                                  </div>
                                                  {/* End .product */}
                                             </div>
                                             {/* End .cart-product */}
                                             <div className="dropdown-cart-total">
                                                  <span>SUBTOTAL:</span>
                                                  <span className="cart-total-price float-right">
                                                       $134.00
                                                  </span>
                                             </div>
                                             {/* End .dropdown-cart-total */}
                                             <div className="dropdown-cart-action">
                                                  <a
                                                       href="cart.html"
                                                       className="btn btn-gray btn-block view-cart"
                                                  >
                                                       View Cart
                                                  </a>
                                                  <a
                                                       href="checkout.html"
                                                       className="btn btn-dark btn-block"
                                                  >
                                                       Checkout
                                                  </a>
                                             </div>
                                             {/* End .dropdown-cart-total */}
                                        </div>
                                        {/* End .dropdownmenu-wrapper */}
                                   </div>
                                   {/* End .dropdown-menu */}
                              </div>
                              {/* End .dropdown */}
                         </div>
                         ;{/* End .header-right */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .header-middle */}
          </header>
     );
     {
          /* End .header */
     }
};
export default Header;
