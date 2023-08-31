import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import phone from "../../../assets/images/phone-white.png";
import _ from "lodash";

const Header = (props: any) => {
     const { static: staticProps, company, categories } = props.props;
     const [activeMenuId, setActiveMenuId] = useState(0);

     return (
          <header className="header">
               <div className="container">
                    <div className="header-top d-flex align-items-center w-100">
                         <div className="header-left">
                              <p className="top-message ls-0 text-uppercase text-white d-none d-sm-block">
                                   FREE Returns. Standard Shipping Orders $99+
                              </p>
                         </div>
                         {/*End .header-left */}

                         <div className="header-right header-dropdowns w-sm-100">
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
                                   {/*End .header-menu */}
                              </div>
                              {/*End .header-dropown */}
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
                                   {/*End .header-menu */}
                              </div>
                              {/*End .header-dropown */}

                              <span className="separator"></span>

                              <div className="header-dropdown">
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
                                   {/*End .header-menu */}
                              </div>
                              {/*End .header-dropown */}

                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
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
                                   {/*End .header-menu */}
                              </div>
                              {/*End .header-dropown */}

                              <span className="separator"></span>

                              <div className="social-icons">
                                   <a
                                        href="#"
                                        className="social-icon social-facebook icon-facebook"
                                        target="_blank"
                                   ></a>
                                   <a
                                        href="#"
                                        className="social-icon social-twitter icon-twitter"
                                        target="_blank"
                                   ></a>
                                   <a
                                        href="#"
                                        className="social-icon social-instagram icon-instagram"
                                        target="_blank"
                                   ></a>
                              </div>
                              {/*End .social-icons */}
                         </div>
                         {/*End .header-right */}
                    </div>
                    {/*End .container */}
               </div>
               {/*End .header-top */}

               <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}">
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
                         {/*End .header-left */}

                         <div className="header-right w-lg-max ml-0">
                              <div className="header-icon mb-0 header-search header-search-inline header-search-category w-lg-max pl-3 pr-1">
                                   <a
                                        href="#"
                                        className="search-toggle"
                                        role="button"
                                        title="Search"
                                   >
                                        <i className="icon-search-3"></i>
                                   </a>
                                   <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                             <input
                                                  type="search"
                                                  className="form-control bg-white"
                                                  name="q"
                                                  id="qq"
                                                  placeholder="Search..."
                                                  required
                                             />
                                             <div className="select-custom bg-white">
                                                  <select id="category" name="cat">
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
                                             {/*End .select-custom */}
                                             <button
                                                  className="btn icon-magnifier pb-1 bg-white"
                                                  type="submit"
                                                  title="Search"
                                             ></button>
                                        </div>
                                        {/*End .header-search-wrapper */}
                                   </form>
                              </div>
                              {/*End .header-search */}

                              <div className="header-contact d-none d-lg-flex pl-4 ml-3 mr-xl-5">
                                   <Image
                                        alt="phone"
                                        src={phone}
                                        width="30"
                                        height="30"
                                        className="pb-1"
                                   />
                                   <h6>
                                        Call us now
                                        <Link href={`tel:${company?.phone}`} className="font1">
                                             {company?.phone}
                                        </Link>
                                   </h6>
                              </div>

                              <a
                                   href="login.html"
                                   className="header-icon d-inline-block"
                                   title="Login"
                              >
                                   <i className="icon-user-2"></i>
                              </a>

                              <a
                                   href="wishlist.html"
                                   className="header-icon d-inline-block"
                                   title="Wishlist"
                              >
                                   <i className="icon-wishlist-2"></i>
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
                                        <i className="minicart-icon"></i>
                                        <span className="cart-count badge-circle">3</span>
                                   </a>

                                   <div className="cart-overlay"></div>

                                   <div className="dropdown-menu mobile-cart">
                                        <Link href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </Link>

                                        <div className="dropdownmenu-wrapper custom-scrollbar">
                                             <div className="dropdown-cart-header">
                                                  Shopping Cart
                                             </div>
                                             {/*End .dropdown-cart-header */}

                                             <div className="dropdown-cart-products">
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <Link href="demo2-product.html">
                                                                      Ultimate 3D Bluetooth Speaker
                                                                 </Link>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>{" "}
                                                                 × $99.00
                                                            </span>
                                                       </div>
                                                       {/*End .product-details */}

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo2-product.html"
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
                                                  {/*End .product */}

                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <Link href="demo2-product.html">
                                                                      Brown Women Casual HandBag
                                                                 </Link>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>{" "}
                                                                 × $35.00
                                                            </span>
                                                       </div>
                                                       {/*End .product-details */}

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo2-product.html"
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
                                                  {/*End .product */}

                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <Link href="demo2-product.html">
                                                                      Circled Ultimate 3D Speaker
                                                                 </Link>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>{" "}
                                                                 × $35.00
                                                            </span>
                                                       </div>
                                                       {/*End .product-details */}

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo2-product.html"
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
                                                  {/*End .product */}
                                             </div>
                                             {/*End .cart-product */}

                                             <div className="dropdown-cart-total">
                                                  <span>SUBTOTAL:</span>

                                                  <span className="cart-total-price float-right">
                                                       $134.00
                                                  </span>
                                             </div>
                                             {/*End .dropdown-cart-total */}

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
                                             {/*End .dropdown-cart-total */}
                                        </div>
                                        {/*End .dropdownmenu-wrapper */}
                                   </div>
                                   {/*End .dropdown-menu */}
                              </div>
                              {/*End .dropdown */}
                         </div>
                         {/*End .header-right */}
                    </div>
                    {/*End .container */}
               </div>
               {/*End .header-middle */}

               <div
                    className="header-bottom sticky-header d-lg-block d-none"
                    data-sticky-options="{'mobile': false}"
               >
                    <div className="container">
                         <div className="header-left">
                              <Link href="demo2.html" className="logo">
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
                         <div className="header-center">
                              <nav className="main-nav w-100">
                                   <ul className="menu">
                                        {staticProps?.pageLinks?.map(
                                             (link: { name: string; url: string }, idx: number) => (
                                                  <li
                                                       className={
                                                            activeMenuId === idx ? "active" : ""
                                                       }
                                                       key={idx}
                                                       onClick={() => setActiveMenuId(idx)}
                                                  >
                                                       <Link href={link.url}>{link.name}</Link>
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
                                             {/*End .select-custom */}
                                             <button
                                                  className="btn p-0 icon-search-3"
                                                  type="submit"
                                             ></button>
                                        </div>
                                        {/*End .header-search-wrapper */}
                                   </form>
                              </div>
                              {/*End .header-search */}

                              <Link href="login.html" className="header-icon ">
                                   <i className="icon-user-2"></i>
                              </Link>

                              <Link href="wishlist.html" className="header-icon">
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
                                        <Link href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </Link>

                                        <div className="dropdownmenu-wrapper custom-scrollbar">
                                             <div className="dropdown-cart-header">
                                                  Shopping Cart
                                             </div>
                                             {/*End .dropdown-cart-header */}

                                             <div className="dropdown-cart-products">
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <Link href="demo2-product.html">
                                                                      Ultimate 3D Bluetooth Speaker
                                                                 </Link>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>{" "}
                                                                 × $99.00
                                                            </span>
                                                       </div>
                                                       {/*End .product-details */}

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo2-product.html"
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
                                                  {/*End .product */}

                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <Link href="demo2-product.html">
                                                                      Brown Women Casual HandBag
                                                                 </Link>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>{" "}
                                                                 × $35.00
                                                            </span>
                                                       </div>
                                                       {/*End .product-details */}

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo2-product.html"
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
                                                  {/*End .product */}

                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <Link href="demo2-product.html">
                                                                      Circled Ultimate 3D Speaker
                                                                 </Link>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                 <span className="cart-product-qty">
                                                                      1
                                                                 </span>{" "}
                                                                 × $35.00
                                                            </span>
                                                       </div>
                                                       {/*End .product-details */}

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo2-product.html"
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
                                                  {/*End .product */}
                                             </div>
                                             {/*End .cart-product */}

                                             <div className="dropdown-cart-total">
                                                  <span>SUBTOTAL:</span>

                                                  <span className="cart-total-price float-right">
                                                       $134.00
                                                  </span>
                                             </div>
                                             {/*End .dropdown-cart-total */}

                                             <div className="dropdown-cart-action">
                                                  <a
                                                       href="/cart"
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
                                             {/*End .dropdown-cart-total */}
                                        </div>
                                        {/*End .dropdownmenu-wrapper */}
                                   </div>
                                   {/*End .dropdown-menu */}
                              </div>
                              {/*End .dropdown */}
                         </div>
                    </div>
                    {/*End .container */}
               </div>
               {/*End .header-bottom */}
          </header>
     );
};
export default Header;
