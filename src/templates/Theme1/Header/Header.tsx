import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import { templateImages } from "@/appProvider/templateImages";

const Header = (props: any): JSX.Element => {
     const { static: staticProps, company } = props.props;
     return (
          <div>
               <div className="top-notice text-white bg-dark">
                    <div className="container text-center">
                         <h5 className="d-inline-block mb-0">
                              Get Up to <b>40% OFF</b> New-Season Styles
                         </h5>
                         <a href="demo1-shop.html" className="category">
                              MEN
                         </a>
                         <a href="demo1-shop.html" className="category">
                              WOMEN
                         </a>
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
                                        <a href="#" className="pl-0">
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
                                        {/* End .header-menu */}
                                   </div>
                                   {/* End .header-dropown */}

                                   <div className="header-dropdown ml-3 pl-1">
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
                                        <a href="#">Links</a>
                                        <div className="header-menu">
                                             <ul>
                                                  <li>
                                                       <a href="dashboard.html">Dashboard</a>
                                                  </li>
                                                  <li>
                                                       <a href="cart.html">Cart</a>
                                                  </li>
                                                  <li>
                                                       <a href="cart.html">Checkout</a>
                                                  </li>
                                                  <li>
                                                       <a href="wishlist.html">Wishlist</a>
                                                  </li>
                                                  <li>
                                                       <a href="about.html">About Us</a>
                                                  </li>
                                                  <li>
                                                       <a href="blog.html">Contact Us</a>
                                                  </li>
                                             </ul>
                                        </div>
                                        {/* End .header-menu */}
                                   </div>
                                   {/* End .header-dropown */}

                                   <span className="separator"></span>

                                   <div className="social-icons">
                                        <a
                                             href="#"
                                             className="social-icon social-facebook icon-facebook ml-0"
                                             target="_blank"
                                        ></a>
                                        <a
                                             href="#"
                                             className="social-icon social-twitter icon-twitter ml-0"
                                             target="_blank"
                                        ></a>
                                        <a
                                             href="#"
                                             className="social-icon social-instagram icon-instagram ml-0"
                                             target="_blank"
                                        ></a>
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
                                   <a href="demo1.html" className="logo">
                                        {company?.logo ? (
                                             <Image
                                                  src={company?.logo}
                                                  className="black-logo"
                                                  alt="Porto Logo"
                                                  width={202}
                                                  height={80}
                                             />
                                        ) : (
                                             <Image
                                                  src={templateImages.logoImage.logo2}
                                                  width="111"
                                                  height="44"
                                                  alt="Porto Logo"
                                             />
                                        )}
                                   </a>
                              </div>
                              {/* End .header-left */}

                              <div className="header-right w-lg-max pl-2">
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
                                                       id="q"
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
                                                            <option value="67">
                                                                 - Kids Fashion
                                                            </option>
                                                            <option value="5">Electronics</option>
                                                            <option value="21">- Smart TVs</option>
                                                            <option value="22">- Cameras</option>
                                                            <option value="63">- Games</option>
                                                            <option value="7">
                                                                 Home &amp; Garden
                                                            </option>
                                                            <option value="11">Motors</option>
                                                            <option value="31">
                                                                 - Cars and Trucks
                                                            </option>
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
                                                  {company?.phone || "+123 5678 890"}
                                             </a>
                                        </h6>
                                   </div>
                                   {/* End .header-contact */}

                                   <a href="login.html" className="header-icon header-icon-user">
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
                                                  {/* End .dropdown-cart-header */}

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo1-product.html">
                                                                           Ultimate 3D Bluetooth
                                                                           Speaker
                                                                      </a>
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
                                                                      <a href="demo1-product.html">
                                                                           Brown Women Casual
                                                                           HandBag
                                                                      </a>
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
                                                                      <a href="demo1-product.html">
                                                                           Circled Ultimate 3D
                                                                           Speaker
                                                                      </a>
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
                    <div
                         className="header-bottom sticky-header d-lg-block d-none"
                         data-sticky-options="{'mobile': false}"
                    >
                         <div className="container">
                              <div className="header-left">
                                   <a href="demo13.html" className="logo">
                                        <Image
                                             src={stickyLogo}
                                             className="white-logo sticky-logo"
                                             alt="Porto Logo"
                                             width={110}
                                             height={46}
                                        />
                                   </a>
                              </div>
                              <div className="header-center">
                                   <nav className="main-nav w-100">
                                        <ul className="menu">
                                             {staticProps?.pageLinks?.map(
                                                  (
                                                       link: { name: string; url: string },
                                                       idx: number,
                                                  ) => (
                                                       <li
                                                            className={
                                                                 activeMenuId === idx
                                                                      ? "active"
                                                                      : ""
                                                            }
                                                            key={idx}
                                                            onClick={() => setActiveMenuId(idx)}
                                                       >
                                                            <Link href={link.url}>{link.name}</Link>
                                                       </li>
                                                  ),
                                             )}

                                             {/* <li>
                                                  <a href="demo13-shop.html">Categories</a>
                                                  <div className="megamenu megamenu-fixed-width megamenu-3cols">
                                                       <div className="row">
                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">
                                                                      VARIATION 1
                                                                 </a>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <a href="demo13-shop.html">
                                                                                Fullwidth Banner
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-banner-boxed-slider.html">
                                                                                Boxed Slider Banner
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-banner-boxed-image.html">
                                                                                Boxed Image Banner
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="demo13-shop.html">
                                                                                Left Sidebar
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-sidebar-right.html">
                                                                                Right Sidebar
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-off-canvas.html">
                                                                                Off Canvas Filter
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-horizontal-filter1.html">
                                                                                Horizontal Filter1
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-horizontal-filter2.html">
                                                                                Horizontal Filter2
                                                                           </a>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                 <a href="#" className="nolink">
                                                                      VARIATION 2
                                                                 </a>
                                                                 <ul className="submenu">
                                                                      <li>
                                                                           <a href="category-list.html">
                                                                                List Types
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-infinite-scroll.html">
                                                                                Ajax Infinite Scroll
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="demo13-shop.html">
                                                                                3 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-4col.html">
                                                                                4 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-5col.html">
                                                                                5 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-6col.html">
                                                                                6 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-7col.html">
                                                                                7 Columns Products
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="category-8col.html">
                                                                                8 Columns Products
                                                                           </a>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                            <div className="col-lg-4 p-0">
                                                                 <div className="menu-banner">
                                                                      <figure>
                                                                           <Image
                                                                                src={menuBanner}
                                                                                alt="Menu banner"
                                                                                width={380}
                                                                                height={790}
                                                                           />
                                                                      </figure>
                                                                      <div className="banner-content">
                                                                           <h4>
                                                                                <span>UP TO</span>
                                                                                <br />
                                                                                <b>50%</b>
                                                                                <i>OFF</i>
                                                                           </h4>
                                                                           <a
                                                                                href="demo13-shop.html"
                                                                                className="btn btn-sm btn-dark"
                                                                           >
                                                                                SHOP NOW
                                                                           </a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </li> */}

                                             <li className="float-right">
                                                  <a
                                                       href="https://1.envato.market/DdLk5"
                                                       target="_blank"
                                                  >
                                                       Buy Porto!
                                                  </a>
                                             </li>
                                             <li className="float-right">
                                                  <a href="#">Special Offer!</a>
                                             </li>
                                        </ul>
                                   </nav>
                              </div>
                              <div className="header-right">
                                   <div className="header-search header-icon header-search-inline header-search-category w-lg-max">
                                        <a href="#" className="search-toggle" role="button">
                                             <i className="icon-search-3" />
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
                                                       <select id="cat-1" name="cat">
                                                            <option>All Categories</option>
                                                            <option value={4}>Fashion</option>
                                                            <option value={12}>- Women</option>
                                                            <option value={13}>- Men</option>
                                                            <option value={66}>- Jewellery</option>
                                                            <option value={67}>
                                                                 - Kids Fashion
                                                            </option>
                                                            <option value={5}>Electronics</option>
                                                            <option value={21}>- Smart TVs</option>
                                                            <option value={22}>- Cameras</option>
                                                            <option value={63}>- Games</option>
                                                            <option value={7}>
                                                                 Home &amp; Garden
                                                            </option>
                                                            <option value={11}>Motors</option>
                                                            <option value={31}>
                                                                 - Cars and Trucks
                                                            </option>
                                                            <option value={32}>
                                                                 - Motorcycles &amp; Powersports
                                                            </option>
                                                            <option value={33}>
                                                                 - Parts &amp; Accessories
                                                            </option>
                                                            <option value={34}>- Boats</option>
                                                            <option value={57}>
                                                                 - Auto Tools &amp; Supplies
                                                            </option>
                                                       </select>
                                                  </div>
                                                  {/* End .select-custom */}
                                                  <button
                                                       className="btn p-0 icon-search-3"
                                                       type="submit"
                                                  />
                                             </div>
                                             {/* End .header-search-wrapper */}
                                        </form>
                                   </div>
                                   {/* End .header-search */}
                                   <a href="login.html" className="header-icon ">
                                        <i className="icon-user-2" />
                                   </a>
                                   <a href="wishlist.html" className="header-icon">
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
                                                                      <a href="demo13-product.html">
                                                                           Ultimate 3D Bluetooth
                                                                           Speaker
                                                                      </a>
                                                                 </h4>
                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>
                                                                      × $99.00
                                                                 </span>
                                                            </div>
                                                            <figure className="product-image-container">
                                                                 <a
                                                                      href="demo13-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product1}
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
                                                                      <a href="demo13-product.html">
                                                                           Brown Women Casual
                                                                           HandBag
                                                                      </a>
                                                                 </h4>
                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>
                                                            <figure className="product-image-container">
                                                                 <a
                                                                      href="demo13-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product2}
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
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Circled Ultimate 3D
                                                                           Speaker
                                                                      </a>
                                                                 </h4>
                                                                 <span className="cart-product-info">
                                                                      <span className="cart-product-qty">
                                                                           1
                                                                      </span>
                                                                      × $35.00
                                                                 </span>
                                                            </div>
                                                            <figure className="product-image-container">
                                                                 <a
                                                                      href="demo13-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={product3}
                                                                           height={80}
                                                                           alt="product"
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
                                                  </div>
                                                  <div className="dropdown-cart-total">
                                                       <span>SUBTOTAL:</span>
                                                       <span className="cart-total-price float-right">
                                                            $134.00
                                                       </span>
                                                  </div>
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
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>
               {/* End .header */}
          </div>
     );
};
export default Header;
