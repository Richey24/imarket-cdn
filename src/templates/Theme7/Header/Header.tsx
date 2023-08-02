"use client";
import React from "react";

export default function Header() {
     const [scrollPosition, setScrollPosition] = React.useState(0);

     const handleScroll = () => {
          // Get the current scroll position
          const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

          // Update the state with the current scroll position
          setScrollPosition(currentPosition);
     };

     React.useEffect(() => {
          // Add the event listener when the component mounts
          window.addEventListener("scroll", handleScroll);

          // Clean up the event listener when the component unmounts
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);
     return (
          <header
               className={
                    scrollPosition > 50
                         ? "bg-white text-black sticky top-0 z-50"
                         : "header header-transparent"
               }
          >
               <div className="bg-white py-4 px-2 sticky-header ">
                    <div className="container">
                         <div className="header-left">
                              <button className="mobile-menu-toggler" type="button">
                                   <i className="fas fa-bars"></i>
                              </button>

                              <a href="demo3.html" className="logo">
                                   <img src="assets/images/logo-black.png" alt="Porto Logo" />
                              </a>

                              <nav className="main-nav font2">
                                   <ul className={"menu"}>
                                        <li className="active">
                                             <a className={scrollPosition > 50 ? '!text-black' : ''} href="demo3.html">Home</a>
                                        </li>
                                        <li>
                                             <a className={scrollPosition > 50 ? '!text-black' : ''} href="demo3-shop.html">Categories</a>

                                        </li>
                                        <li>
                                             <a className={scrollPosition > 50 ? '!text-black' : ''} href="demo3-product.html">Products</a>

                                        </li>
                                        <li>
                                             <a className={scrollPosition > 50 ? '!text-black' : ''} href="#">Pages</a>

                                        </li>
                                        <li>
                                             <a className={scrollPosition > 50 ? '!text-black' : ''} href="blog.html">Blog</a>
                                        </li>

                                   </ul>
                              </nav>
                         </div>

                         <div className="header-right">
                              <div className="header-search header-search-popup header-search-category d-none d-sm-block">
                                   <a href="#" className="search-toggle" role="button">
                                        <i className="icon-magnifier"></i>
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
                                             <button
                                                  className="btn text-dark icon-magnifier"
                                                  type="submit"
                                             ></button>
                                        </div>
                                   </form>
                              </div>

                              <a
                                   href="login.html"
                                   className={scrollPosition > 50 ? '!text-black' : 'text-white'} title="Login"
                              >
                                   <i className="icon-user-2"></i>
                              </a>

                              <a
                                   href="wishlist.html"
                                   className={scrollPosition > 50 ? '!text-black dropdown-toggle dropdown-arrow cart-toggle' : 'text-white dropdown-toggle dropdown-arrow cart-toggle'}
                                   title="Wishlist"
                              >
                                   <i className="icon-wishlist-2 before:text-lg"></i>
                              </a>

                              <div className="dropdown cart-dropdown">
                                   <a
                                        href="#"
                                        role="button"
                                        className={scrollPosition > 50 ? '!text-black' : 'text-white'} title="Login"

                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-display="static"
                                   >
                                        <i className="icon-cart-thick"></i>
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

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo3-product.html"
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

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo3-product.html"
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

                                                       <figure className="product-image-container">
                                                            <a
                                                                 href="demo3-product.html"
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
     );
}
