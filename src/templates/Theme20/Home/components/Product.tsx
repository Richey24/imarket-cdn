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
          <div className="product-default inner-quickview inner-icon w-100 px-2">
          <figure>
               <a href="demo13-product.html">
                    <Image
                         src={productImageUrl}
                         width={300}
                         height={300}
                         alt="product"
                    />
               </a>

               <div className="btn-icon-group">
                    <a
                         href="#"
                         className="btn-icon btn-add-cart product-type-simple"
                    >
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
                         <a
                              href="demo13-shop.html"
                              className="product-category"
                         >
                              {productCategory}
                         </a>
                    </div>
               </div>
               <h3 className="product-title">
                    <a href="demo13-product.html">{productTitle}</a>
               </h3>

               {/* End .product-container */}
               <div className="price-box">
                    {productPrice && (
                         <span className="old-price">
                              ${productPrice.toFixed(2)}
                         </span>
                    )}
                    <span className="product-price">
                         ${productPrice.toFixed(2)}
                    </span>
               </div>
               {/* End .price-box */}
          </div>
          {/* End .product-details */}
     </div>
     );
};
