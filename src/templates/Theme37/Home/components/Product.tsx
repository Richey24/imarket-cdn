import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ProductProps } from "../types";

export const Product: React.FC<ProductProps> = ({
     productImageUrl,
     productCategory,
     productTitle,
     productPrice,
     oldPrice,
}) => {
     return (
          <div className="product-default inner-quickview inner-icon px-2">
               <figure>
                    <a href="demo37-product.html">
                         <Image src={productImageUrl} width={205} height={205} alt="product" />
                    </a>
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
                              <a href="demo37-shop.html" className="product-category">
                                   {productCategory}
                              </a>
                         </div>
                         <a href="wishlist.html" title="Wishlist" className="btn-icon-wish">
                              <i className="icon-heart" />
                         </a>
                    </div>
                    <h3 className="product-title">
                         <a href="demo37-product.html">{productTitle}</a>
                    </h3>
                    {/* <div class="ratings-container">
<div class="product-ratings">
<span class="ratings" style="width:100%"></span>
<span class="tooltiptext tooltip-top"></span>
</div>
</div> */}
                    <div className="price-box">
                         <span className="old-price">$90.00</span>
                         <span className="product-price">${productPrice}</span>
                    </div>
                    {/* End .price-box */}
               </div>
               {/* End .product-details */}
          </div>
     );
};
