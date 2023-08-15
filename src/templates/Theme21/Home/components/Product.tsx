import Image, { StaticImageData } from "next/image";
import React from "react";
import { ProductProps } from "../types";

export const Product: React.FC<ProductProps> = ({
     productImageUrl,
     productImageUrlTwo,
     productImageAlt,
     productCategory,
     productTitle,
     productPrice,
     oldPrice,
}) => {
     return (
          <div className="col-6 col-sm-4 col-lg-3">
               <div className="product-default inner-quickview inner-icon">
                    <figure>
                         <a href="demo13-product.html">
                              <a href="demo21-product.html">
                                   <img
                                        src={productImageUrl.src}
                                        width={217}
                                        height={217}
                                        alt="product"
                                   />
                                   {productImageUrlTwo && (
                                        <img
                                             src={productImageUrlTwo.src}
                                             width={217}
                                             height={217}
                                             alt="product"
                                        />
                                   )}
                              </a>
                         </a>
                         {/* <div className="label-group">
                              <span className="product-label label-sale">-30%</span>
                         </div> */}
                         <div className="btn-icon-group">
                              <a href="#" className="btn-icon btn-add-cart product-type-simple">
                                   <i className="icon-shopping-cart" />
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
                                   {/* <a href="demo13-shop.html" className="product-category">
                                        {productCategory}
                                   </a> */}
                              </div>
                              <a href="#" className="btn-icon-wish">
                                   <i className="icon-wishlist-2" />
                              </a>
                         </div>
                         <h3 className="product-title">
                              <a href="demo13-product.html">{productTitle}</a>
                         </h3>
                         {/* <div className="ratings-container">
                              <div className="product-ratings">
                                   <span className="ratings" style={{ width: "100%" }} />
                                  
                                   <span className="tooltiptext tooltip-top" />
                              </div>
                           
                         </div> */}

                         <div className="price-box">
                              {oldPrice && (
                                   <span className="old-price">${oldPrice.toFixed(2)}</span>
                              )}
                              <span className="product-price">${productPrice.toFixed(2)}</span>
                         </div>
                         {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
               </div>
          </div>
     );
};
