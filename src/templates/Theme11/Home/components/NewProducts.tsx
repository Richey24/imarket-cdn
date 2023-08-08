import React from "react";

import Product1 from "../../../../assets/images/demoes/demo21/products/product-1.jpg";
import Product from "../../../../assets/images/demoes/demo21/products/product-1-2.jpg";
import Product2 from "../../../../assets/images/demoes/demo21/products/product-2.jpg";
import Product8 from "../../../../assets/images/demoes/demo21/products/product-8.jpg";
import SubProduct8 from "../../../../assets/images/demoes/demo21/products/product-8-2.jpg";
import Product9 from "../../../../assets/images/demoes/demo21/products/product-9.jpg";
import SubProduct9 from "../../../../assets/images/demoes/demo21/products/product-9-2.jpg";
import Product7 from "../../../../assets/images/demoes/demo21/products/product-7.jpg";
import Subproduct from "../../../../assets/images/demoes/demo21/products/product-3-2.jpg";

export const NewProducts = () => {
     return (
          <div
               className="row no-gutters appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={300}
          >
               <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                         <figure>
                              <a href="demo21-product.html">
                                   <img src={Product7.src} width={217} height={217} alt="product" />
                              </a>
                              <div className="btn-icon-group">
                                   <a href="demo21-product.html" className="btn-icon btn-add-cart">
                                        <i className="fa fa-arrow-right" />
                                   </a>
                              </div>
                              <a
                                   href="ajax/product-quick-view.html"
                                   className="btn-quickview"
                                   title="Quick View"
                              >
                                   Quick View
                              </a>
                         </figure>
                         <div className="product-details">
                              <div className="category-wrap">
                                   <div className="category-list">
                                        <a href="demo21-shop.html" className="product-category">
                                             category
                                        </a>
                                   </div>
                                   <a
                                        href="wishlist.html"
                                        title="Add to Wishlist"
                                        className="btn-icon-wish"
                                   >
                                        <i className="icon-heart" />
                                   </a>
                              </div>
                              <h3 className="product-title">
                                   <a href="demo21-product.html">Computer Mouse</a>
                              </h3>
                              {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                              <div className="price-box">
                                   <span className="product-price">$55.00</span>
                              </div>
                              {/* End .price-box */}
                         </div>
                         {/* End .product-details */}
                    </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                         <figure>
                              <a href="demo21-product.html">
                                   <img src={Product1.src} width={217} height={217} alt="product" />
                                   <img src={Product.src} width={217} height={217} alt="product" />
                              </a>
                              <div className="label-group">
                                   <div className="product-label label-hot">HOT</div>
                              </div>
                              <div className="btn-icon-group">
                                   <a href="demo21-product.html" className="btn-icon btn-add-cart">
                                        <i className="fa fa-arrow-right" />
                                   </a>
                              </div>
                              <a
                                   href="ajax/product-quick-view.html"
                                   className="btn-quickview"
                                   title="Quick View"
                              >
                                   Quick View
                              </a>
                         </figure>
                         <div className="product-details">
                              <div className="category-wrap">
                                   <div className="category-list">
                                        <a href="demo21-shop.html" className="product-category">
                                             category
                                        </a>
                                   </div>
                                   <a
                                        href="wishlist.html"
                                        title="Add to Wishlist"
                                        className="btn-icon-wish"
                                   >
                                        <i className="icon-heart" />
                                   </a>
                              </div>
                              <h3 className="product-title">
                                   <a href="demo21-product.html">Digital Camera 16x</a>
                              </h3>
                              {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                              <div className="price-box">
                                   <span className="product-price">$101.00 – $111.00</span>
                              </div>
                              {/* End .price-box */}
                         </div>
                         {/* End .product-details */}
                    </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                         <figure>
                              <a href="demo21-product.html">
                                   <img src={Product2.src} width={217} height={217} alt="product" />
                              </a>
                              <div className="btn-icon-group">
                                   <a href="demo21-product.html" className="btn-icon btn-add-cart">
                                        <i className="fa fa-arrow-right" />
                                   </a>
                              </div>
                              <a
                                   href="ajax/product-quick-view.html"
                                   className="btn-quickview"
                                   title="Quick View"
                              >
                                   Quick View
                              </a>
                         </figure>
                         <div className="product-details">
                              <div className="category-wrap">
                                   <div className="category-list">
                                        <a href="demo21-shop.html" className="product-category">
                                             category
                                        </a>
                                   </div>
                                   <a
                                        href="wishlist.html"
                                        title="Add to Wishlist"
                                        className="btn-icon-wish"
                                   >
                                        <i className="icon-heart" />
                                   </a>
                              </div>
                              <h3 className="product-title">
                                   <a href="demo21-product.html">Porto Extended Camera</a>
                              </h3>
                              {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                              <div className="price-box">
                                   <span className="product-price">$599.00</span>
                              </div>
                              {/* End .price-box */}
                         </div>
                         {/* End .product-details */}
                    </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                         <figure>
                              <a href="demo21-product.html">
                                   <img src={Product8.src} width={217} height={217} alt="product" />
                                   <img
                                        src={SubProduct8.src}
                                        width={217}
                                        height={217}
                                        alt="product"
                                   />
                              </a>
                              <div className="btn-icon-group">
                                   <a href="demo21-product.html" className="btn-icon btn-add-cart">
                                        <i className="fa fa-arrow-right" />
                                   </a>
                              </div>
                              <a
                                   href="ajax/product-quick-view.html"
                                   className="btn-quickview"
                                   title="Quick View"
                              >
                                   Quick View
                              </a>
                         </figure>
                         <div className="product-details">
                              <div className="category-wrap">
                                   <div className="category-list">
                                        <a href="demo21-shop.html" className="product-category">
                                             category
                                        </a>
                                   </div>
                                   <a
                                        href="wishlist.html"
                                        title="Add to Wishlist"
                                        className="btn-icon-wish"
                                   >
                                        <i className="icon-heart" />
                                   </a>
                              </div>
                              <h3 className="product-title">
                                   <a href="demo21-product.html">Sports Shoes</a>
                              </h3>
                              {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                              <div className="price-box">
                                   <span className="product-price">$101.00 – $111.00</span>
                              </div>
                              {/* End .price-box */}
                         </div>
                         {/* End .product-details */}
                    </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                         <figure>
                              <a href="demo21-product.html">
                                   <img
                                        src={SubProduct8.src}
                                        width={217}
                                        height={217}
                                        alt="product"
                                   />
                                   <img src={Product8.src} width={217} height={217} alt="product" />
                              </a>
                              <div className="btn-icon-group">
                                   <a href="demo21-product.html" className="btn-icon btn-add-cart">
                                        <i className="fa fa-arrow-right" />
                                   </a>
                              </div>
                              <a
                                   href="ajax/product-quick-view.html"
                                   className="btn-quickview"
                                   title="Quick View"
                              >
                                   Quick View
                              </a>
                         </figure>
                         <div className="product-details">
                              <div className="category-wrap">
                                   <div className="category-list">
                                        <a href="demo21-shop.html" className="product-category">
                                             category
                                        </a>
                                   </div>
                                   <a
                                        href="wishlist.html"
                                        title="Add to Wishlist"
                                        className="btn-icon-wish"
                                   >
                                        <i className="icon-heart" />
                                   </a>
                              </div>
                              <h3 className="product-title">
                                   <a href="demo21-product.html">Black Porto Men Shoes</a>
                              </h3>
                              {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                              <div className="price-box">
                                   <span className="product-price">$101.00 – $111.00</span>
                              </div>
                              {/* End .price-box */}
                         </div>
                         {/* End .product-details */}
                    </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                         <figure>
                              <a href="demo21-product.html">
                                   <img src={Product9.src} width={217} height={217} alt="product" />
                                   <img
                                        src={SubProduct9.src}
                                        width={217}
                                        height={217}
                                        alt="product"
                                   />
                              </a>
                              <div className="btn-icon-group">
                                   <a href="demo21-product.html" className="btn-icon btn-add-cart">
                                        <i className="fa fa-arrow-right" />
                                   </a>
                              </div>
                              <a
                                   href="ajax/product-quick-view.html"
                                   className="btn-quickview"
                                   title="Quick View"
                              >
                                   Quick View
                              </a>
                         </figure>
                         <div className="product-details">
                              <div className="category-wrap">
                                   <div className="category-list">
                                        <a href="demo21-shop.html" className="product-category">
                                             category
                                        </a>
                                   </div>
                                   <a
                                        href="wishlist.html"
                                        title="Add to Wishlist"
                                        className="btn-icon-wish"
                                   >
                                        <i className="icon-heart" />
                                   </a>
                              </div>
                              <h3 className="product-title">
                                   <a href="demo21-product.html">Casual Blue Shoes</a>
                              </h3>
                              {/* <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style="width:100%"></span>
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                </div> */}
                              <div className="price-box">
                                   <span className="product-price">$101.00 – $108.00</span>
                              </div>
                              {/* End .price-box */}
                         </div>
                         {/* End .product-details */}
                    </div>
               </div>
          </div>
     );
};
