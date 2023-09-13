import React, { useState } from "react";
import { productsData } from "../data";
export const Products = () => {
     return (
          <div className="products-container bg-gray mt-1">
               <div className="container">
                    <div
                         className="row custom-products no-gutters appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                    >
                         {productsData.map((data) => (
                              <div className="col-sm-6 col-md-4">
                                   <div className="product-default inner-icon inner-quickview">
                                        <figure>
                                             <a href="demo26-product.html">
                                                  <img
                                                       src={data.productImageUrl}
                                                       width={75}
                                                       height={75}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <div className="category-wrap">
                                                  <div className="category-list">
                                                       <a
                                                            href="demo26-shop.html"
                                                            className="product-category"
                                                       >
                                                            {data.productCategory}
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
                                                  <a href="demo26-product.html">
                                                       {data.productTitle}
                                                  </a>
                                             </h3>
                                             {/* <div class="ratings-container">
                                      <div class="product-ratings">
                                          <span class="ratings" style="width:100%"></span>
                                          <span class="tooltiptext tooltip-top"></span>
                                      </div>
                                  </div> */}
                                             <div className="price-box">
                                                  <span className="product-price">
                                                       ${data.productPrice}
                                                  </span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};
