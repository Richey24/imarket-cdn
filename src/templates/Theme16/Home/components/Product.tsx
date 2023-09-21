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
          <div
               className="product-default inner-quickview inner-icon appear-animate mx-2"
               
          >
               <figure>
                    <a href="demo16-product.html">
                         <Image
                              src={productImageUrl}
                              alt="product"
                              width={400}
                              height={400}
                         />
                    </a>
                    <div className="label-group">
                         <span className="product-label label-hot">HOT</span>
                    </div>
                    <div className="btn-icon-group">
                         <button
                              className="btn-icon btn-add-cart product-type-simple"
                              data-toggle="modal"
                              data-target="#addCartModal"
                         >
                              <i className="icon-shopping-cart" />
                         </button>
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
                              <a href="demo16-shop.html" className="product-category">
                                   DRESS
                              </a>
                              ,
                              <a href="demo16-shop.html" className="product-category">
                                   OUTFITS
                              </a>
                         </div>
                    </div>
                    <h3 className="product-title">
                         {" "}
                         <a href="demo16-product.html">{productTitle}</a>{" "}
                    </h3>
                    {/* <div class="ratings-container">
<div class="product-ratings">
<span class="ratings" style="width:100%"></span>
<span class="tooltiptext tooltip-top"></span>
</div>
</div> */}
                    {/* End .product-container */}
                    <div className="price-box">
                         <span className="product-price">${productPrice}</span>
                    </div>
                    {/* End .price-box */}
               </div>
               {/* End .product-details */}
          </div>
     );
};
