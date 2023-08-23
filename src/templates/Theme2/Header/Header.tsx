import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import phone from "../../../assets/images/phone-white.png";

const Header = (props: any) => {
     const { static: staticProps, company } = props.props;
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
                                   <a href="#">Links</a>
                                   <div className="header-menu">
                                        <ul>
                                             <li>
                                                  <a href="/dashboard">Dashboard</a>
                                             </li>
                                             <li>
                                                  <a href="/cart">Cart</a>
                                             </li>
                                             <li>
                                                  <a href="/cart">Checkout</a>
                                             </li>
                                             <li>
                                                  <a href="/wishlist">Wishlist</a>
                                             </li>
                                             <li>
                                                  <a href="/about">About Us</a>
                                             </li>
                                        </ul>
                                   </div>
                                   {/*End .header-menu */}
                              </div>
                              {/*End .header-dropown */}
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
                                   {/*End .header-menu */}
                              </div>
                              {/*End .header-dropown */}

                              <span className="separator"></span>

                              <div className="header-dropdown">
                                   <a href="#">
                                        <i className="flag-us flag"></i>ENG
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
                                   {/*End .header-menu */}
                              </div>
                              {/*End .header-dropown */}

                              <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
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
                              <a href="demo2.html" className="logo">
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
                              </a>
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
                                                       <option value="4">Fashion</option>
                                                       <option value="12">- Women</option>
                                                       <option value="13">- Men</option>
                                                       <option value="66">- Jewellery</option>
                                                       <option value="67">- Kids Fashion</option>
                                                       <option value="5">Electronics</option>
                                                       <option value="21">- Smart TVs</option>
                                                       <option value="22">- Cameras</option>
                                                       <option value="63">- Games</option>
                                                       <option value="7">Home &amp; Garden</option>
                                                       <option value="11">Motors</option>
                                                       <option value="31">- Cars and Trucks</option>
                                                       <option value="32">
                                                            - Motorcycles &amp; Powersports
                                                       </option>
                                                       <option value="33">
                                                            - Parts &amp; Accessories
                                                       </option>
                                                       <option value="34">- Boats</option>
                                                       <option value="57">
                                                            - Auto Tools &amp; Supplies
                                                       </option>
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
                                        <a href="tel:#" className="font1">
                                             {company?.phone}
                                        </a>
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
                                        <a href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </a>

                                        <div className="dropdownmenu-wrapper custom-scrollbar">
                                             <div className="dropdown-cart-header">
                                                  Shopping Cart
                                             </div>
                                             {/*End .dropdown-cart-header */}

                                             <div className="dropdown-cart-products">
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo2-product.html">
                                                                      Ultimate 3D Bluetooth Speaker
                                                                 </a>
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
                                                                 <a href="demo2-product.html">
                                                                      Brown Women Casual HandBag
                                                                 </a>
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
                                                                 <a href="demo2-product.html">
                                                                      Circled Ultimate 3D Speaker
                                                                 </a>
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
                              <a href="demo2.html" className="logo">
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
                              </a>
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
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-search-3"></i>
                                   </a>
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
                                                       <option value="4">Fashion</option>
                                                       <option value="12">- Women</option>
                                                       <option value="13">- Men</option>
                                                       <option value="66">- Jewellery</option>
                                                       <option value="67">- Kids Fashion</option>
                                                       <option value="5">Electronics</option>
                                                       <option value="21">- Smart TVs</option>
                                                       <option value="22">- Cameras</option>
                                                       <option value="63">- Games</option>
                                                       <option value="7">Home &amp; Garden</option>
                                                       <option value="11">Motors</option>
                                                       <option value="31">- Cars and Trucks</option>
                                                       <option value="32">
                                                            - Motorcycles &amp; Powersports
                                                       </option>
                                                       <option value="33">
                                                            - Parts &amp; Accessories
                                                       </option>
                                                       <option value="34">- Boats</option>
                                                       <option value="57">
                                                            - Auto Tools &amp; Supplies
                                                       </option>
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

                              <a href="login.html" className="header-icon ">
                                   <i className="icon-user-2"></i>
                              </a>

                              <a href="wishlist.html" className="header-icon">
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
                                        <a href="#" title="Close (Esc)" className="btn-close">
                                             ×
                                        </a>

                                        <div className="dropdownmenu-wrapper custom-scrollbar">
                                             <div className="dropdown-cart-header">
                                                  Shopping Cart
                                             </div>
                                             {/*End .dropdown-cart-header */}

                                             <div className="dropdown-cart-products">
                                                  <div className="product">
                                                       <div className="product-details">
                                                            <h4 className="product-title">
                                                                 <a href="demo2-product.html">
                                                                      Ultimate 3D Bluetooth Speaker
                                                                 </a>
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
                                                                 <a href="demo2-product.html">
                                                                      Brown Women Casual HandBag
                                                                 </a>
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
                                                                 <a href="demo2-product.html">
                                                                      Circled Ultimate 3D Speaker
                                                                 </a>
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
