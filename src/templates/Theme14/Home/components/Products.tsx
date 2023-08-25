import React from "react";
import { bestSellingProducts, lastestProducts2, topRatedProducts } from "../data";

export const Products = () => {
     return (
          <div className="container" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
               {/* End .brands-slider */}
               <hr className="mb-5" />
               <div className="product-widgets row pt-1">
                    <div className="col-md-4 col-sm-6 pb-5">
                         <h4 className="section-sub-title text-uppercase">Top Rated Products</h4>

                         {topRatedProducts.map((product) => (
                              <div className="product-default left-details product-widget mb-2">
                                   <figure>
                                        <a href="demo14-product.html">
                                             <img
                                                  src={product.productImageUrl}
                                                  width={175}
                                                  height={175}
                                                  alt="product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a
                                                  href="demo14-shop.html"
                                                  className="product-category"
                                             >
                                                  TOYS
                                             </a>
                                             ,
                                             <a
                                                  href="demo14-shop.html"
                                                  className="product-category"
                                             >
                                                  WATCHES
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo14-product.html">
                                                  {product.productTitle}
                                             </a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="product-price">
                                                  ${product.productPrice}
                                             </span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         ))}
                    </div>
                    <div className="col-md-4 col-sm-6 pb-5">
                         <h4 className="section-sub-title text-uppercase">Best Selling Products</h4>

                         {bestSellingProducts.map((product) => (
                              <div className="product-default left-details product-widget mb-2">
                                   <figure>
                                        <a href="demo14-product.html">
                                             <img
                                                  src={product.productImageUrl}
                                                  width={175}
                                                  height={175}
                                                  alt="product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a
                                                  href="demo14-shop.html"
                                                  className="product-category"
                                             >
                                                  TOYS
                                             </a>
                                             ,
                                             <a
                                                  href="demo14-shop.html"
                                                  className="product-category"
                                             >
                                                  WAYCHES
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo14-product.html">
                                                  {product.productTitle}
                                             </a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="product-price">
                                                  ${product.productPrice}
                                             </span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         ))}
                    </div>
                    <div className="col-md-4 col-sm-6 pb-5">
                         <h4 className="section-sub-title text-uppercase">Latest Products</h4>

                         {lastestProducts2.map((product) => (
                              <div className="product-default left-details product-widget mb-2">
                                   <figure>
                                        <a href="demo14-product.html">
                                             <img
                                                  src={product.productImageUrl}
                                                  width={175}
                                                  height={175}
                                                  alt="product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a
                                                  href="demo14-shop.html"
                                                  className="product-category"
                                             >
                                                  T-SHIRTS
                                             </a>
                                             ,
                                             <a
                                                  href="demo14-shop.html"
                                                  className="product-category"
                                             >
                                                  WATCHES
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo14-product.html">
                                                  {product.productTitle}
                                             </a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <del className="old-price">$1,999.00</del>
                                             <span className="product-price">
                                                  ${product.productPrice}
                                             </span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         ))}
                    </div>
               </div>
               {/* End .product-widgets */}
          </div>
     );
};
