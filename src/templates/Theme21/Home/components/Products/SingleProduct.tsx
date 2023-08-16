import React from "react";
import { ProductProps } from "../../types";
import Image from "next/image";

export const SingleProduct: React.FC<ProductProps> = ({
     productImageUrl,
     productImageUrlTwo,
     productImageAlt,
     productCategory,
     productTitle,
     productPrice,
     oldPrice,
}) => {
     return (
          <div className="product-default left-details product-widget">
               <figure>
                    <a href="demo21-product.html">
                         <Image src={productImageUrl} width={84} height={84} alt="product" />

                         {productImageUrlTwo && (
                              <Image
                                   src={productImageUrlTwo}
                                   width={84}
                                   height={84}
                                   alt="product"
                              />
                         )}
                    </a>
               </figure>
               <div className="product-details">
                    <h3 className="product-title">
                         {" "}
                         <a href="demo21-product.html">{productTitle}</a>{" "}
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
