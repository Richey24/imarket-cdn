import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
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
          <div className="product-default inner-quickview inner-icon">
               <figure>
                    <div style={{ width: "200px", height: "200px", overflow: "hidden" }}>
                         <a href="demo21-product.html">
                              <Image
                                   style={{ width: "100%", height: "100%" }}
                                   src={productImageUrl}
                                   width={217}
                                   height={217}
                                   alt="product"
                              />
                         </a>
                    </div>
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
                                   {productCategory}
                              </a>
                         </div>
                         <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish">
                              <i className="icon-heart" />
                         </a>
                    </div>
                    <h3 className="product-title">
                         <a href="demo21-product.html">{productTitle}</a>
                    </h3>
                    {/* <div class="ratings-container">
<div class="product-ratings">
<span class="ratings" style="width:100%"></span>
<span class="tooltiptext tooltip-top"></span>
</div>
</div> */}
                    <div className="price-box">
                         <span className="product-price">${productPrice}</span>
                    </div>
                    {/* End .price-box */}
               </div>
               {/* End .product-details */}
          </div>
     );
};
