import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import { socialMap } from "@/utils/helper";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     return (
          <div>
               <div className="top-notice text-white bg-dark">
                    <div className="container text-center">
                         <h5 className="d-inline-block mb-0">
                              Get Up to <b>40% OFF</b> New-Season Styles
                         </h5>
                         <Link href="demo1-shop.html" className="category">
                              MEN
                         </Link>
                         <Link href="demo1-shop.html" className="category">
                              WOMEN
                         </Link>
                         <small>* Limited time only.</small>
                         <button title="Close (Esc)" type="button" className="mfp-close">
                              ×
                         </button>
                    </div>
                    {/* End .container */}
               </div>
               {/* End .top-notice */}

               <header className="header home">
                    <div className="header-top bg-primary text-uppercase">
                         <div className="container">
                              <div className="header-left">
                                   <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                        <Link href="#" className="pl-0">
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
                                        {/* End .header-menu */}
                                   </div>
                                   {/* End .header-dropown */}

                                   <div className="header-dropdown ml-3 pl-1">
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
                                        {/* End .header-menu */}
                                   </div>
                                   {/* End .header-dropown */}
                              </div>
                              {/* End .header-left */}

                              <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                                   <p className="top-message mb-0 d-none d-sm-block">
                                        Welcome To Porto!
                                   </p>
                                   <div className="header-dropdown dropdown-expanded mr-3">
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
                                                       <Link href="/wishlist">Wishlist</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/about">About Us</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                        {/* End .header-menu */}
                                   </div>
                                   {/* End .header-dropown */}

                                   <span className="separator"></span>
                                   <div className="social-icons">
                                        {staticProps.socials.map((social) => {
                                             return (
                                                  <Link
                                                       href={social.link}
                                                       className={`social-icon ml-0${
                                                            socialMap[social.name]
                                                       }`}
                                                       target="_blank"
                                                  ></Link>
                                             );
                                        })}
                                   </div>

                                   {/* End .social-icons */}
                              </div>
                              {/* End .header-right */}
                         </div>
                         {/* End .container */}
                    </div>
                    {/* End .header-top */}

                    <div className="header-middle text-dark sticky-header">
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
                                                  height={80}
                                             />
                                        ) : (
                                             <h3>{company?.company_name || "Tester"}</h3>
                                        )}
                                   </Link>
                              </div>
                              {/* End .header-left */}

                              <div className="header-right w-lg-max pl-2">
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
                                                                                (id) => {
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
                                                  {/* End .select-custom */}
                                                  <button
                                                       className="btn icon-magnifier"
                                                       type="submit"
                                                  ></button>
                                             </div>
                                             {/* End .header-search-wrapper */}
                                        </form>
                                   </div>
                                   {/* End .header-search */}

                                   <div className="header-contact d-none d-lg-flex align-items-center pr-xl-5 mr-5 mr-xl-3 ml-5">
                                        <i className="icon-phone-2"></i>
                                        <h6 className="pt-1 line-height-1">
                                             Call us now
                                             <a
                                                  href="tel:#"
                                                  className="d-block text-dark ls-10 pt-1"
                                             >
                                                  {company?.phone}
                                             </a>
                                        </h6>
                                   </div>
                                   {/* End .header-contact */}

                                   <Link href="/login" className="header-icon header-icon-user">
                                        <i className="icon-user-2"></i>
                                   </Link>

                                   <Link href="/wishlist" className="header-icon">
                                        <i className="icon-wishlist-2"></i>
                                   </Link>

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
                                             <i className="minicart-icon"></i>
                                             <span className="cart-count badge-circle">3</span>
                                        </a>

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
                                                  {/* End .dropdown-cart-header */}

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <Link href="demo1-product.html">
                                                                           Ultimate 3D Bluetooth
                                                                           Speaker
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>{" "}
                                                                      × $99.00
                                                                 </span>
                                                            </div>
                                                            {/* End .product-details */}

                                                            <figure className="product-image-container">
                                                                 <a
                                                                      href="demo1-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <img
                                                                           src="assets/images/products/product-1.jpg"
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
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
                                                                      <Link href="demo1-product.html">
                                                                           Brown Women Casual
                                                                           HandBag
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>{" "}
                                                                      × $35.00
                                                                 </span>
                                                            </div>
                                                            {/* End .product-details */}

                                                            <figure className="product-image-container">
                                                                 <a
                                                                      href="demo1-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <img
                                                                           src="assets/images/products/product-2.jpg"
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
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
                                                                      <Link href="demo1-product.html">
                                                                           Circled Ultimate 3D
                                                                           Speaker
                                                                      </Link>
                                                                 </h4>

                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>{" "}
                                                                      × $35.00
                                                                 </span>
                                                            </div>
                                                            {/* End .product-details */}

                                                            <figure className="product-image-container">
                                                                 <a
                                                                      href="demo1-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <img
                                                                           src="assets/images/products/product-3.jpg"
                                                                           alt="product"
                                                                           width="80"
                                                                           height="80"
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
                              {/* End .header-right */}
                         </div>
                         {/* End .container */}
                    </div>
                    {/* End .header-middle */}
               </header>
               {/* End .header */}
          </div>
     );
};
export default Header;
