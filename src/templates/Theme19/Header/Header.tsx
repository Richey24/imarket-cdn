import { templateImages } from "@/appProvider/templateImages";
import "./Header.css";
import Image from "next/image";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";

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
               <div className="top-notice bg-dark">
                    <div className="container-fluid text-center">
                         <h5 className="text-white ls-0 mb-0">
                              Get 10% extra OFF on Porto Summer Sale - Use{" "}
                              <strong>PORTOSUMMER</strong> coupon -{" "}
                              <a href="demo19-shop.html">Shop Now!</a>
                         </h5>
                    </div>
               </div>
               <header className="header header-transparent">
                    <div
                         className="header-middle sticky-header"
                         data-sticky-options="{ 'mobile': true }"
                    >
                         <div className="container-fluid">
                              <div className="header-left">
                                   <MenuButton />
                                   <Logo company={company} />
                              </div>

                              <div className="header-right justify-content-end">
                                   <PageLinks staticProps={staticProps} />

                                   <a href="login.html" className="header-icon" title="login">
                                        <i className="icon-user-2"></i>
                                   </a>

                                   <a href="wishlist.html" className="header-icon" title="Wishlist">
                                        <i className="icon-wishlist-2"></i>
                                        <span className="badge-circle">2</span>
                                   </a>

                                   <div className="header-icon header-search header-search-popup header-search-category text-right">
                                        <a
                                             onClick={showSearch}
                                             href="#"
                                             className="search-toggle"
                                             role="button"
                                        >
                                             <i className="icon-magnifier"></i>
                                        </a>
                                        <form action="#" method="get">
                                             <div id="searchDiv" className="header-search-wrapper">
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
                                                  <button
                                                       className="btn icon-magnifier p-0"
                                                       title="search"
                                                       type="submit"
                                                  ></button>
                                             </div>
                                        </form>
                                   </div>

                                   <div className="dropdown cart-dropdown">
                                        <a
                                             onClick={showCanvas}
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

                                             <div className="dropdownmenu-wrapper custom-scrollbar">
                                                  <div className="dropdown-cart-header">
                                                       Shopping Cart
                                                  </div>

                                                  <div className="dropdown-cart-products">
                                                       <div className="product">
                                                            <div className="product-details">
                                                                 <h4 className="product-title">
                                                                      <a href="demo19-product.html">
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
                                                                      href="demo19-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={
                                                                                templateImages
                                                                                     .allTemplateImage
                                                                                     .product
                                                                                     .product1
                                                                           }
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
                                                                      <a href="demo19-product.html">
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
                                                                      href="demo19-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={
                                                                                templateImages
                                                                                     .allTemplateImage
                                                                                     .product
                                                                                     .product2
                                                                           }
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
                                                                      <a href="demo19-product.html">
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
                                                                      href="demo19-product.html"
                                                                      className="product-image"
                                                                 >
                                                                      <Image
                                                                           src={
                                                                                templateImages
                                                                                     .allTemplateImage
                                                                                     .product
                                                                                     .product3
                                                                           }
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
          </div>
     );
};

export default Header;
