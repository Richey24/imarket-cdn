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
          <div className="product-default">
               <figure>
                    <a href="demo27-product.html">
                         <Image src={productImageUrl} width={280} height={280} alt="product" />
                    </a>
                    <div className="label-group">
                         <div className="product-label label-hot">HOT</div>
                    </div>
               </figure>
               <div className="product-details">
                    <div className="category-list">
                         <a href="category.html" className="product-category">
                              {productCategory}
                         </a>
                    </div>
                    <h3 className="product-title">
                         <a href="demo27-product.html">{productTitle}</a>
                    </h3>
                    {/* <div class="ratings-container">
<div class="product-ratings">
    <span class="ratings" style="width:100%"></span>
    <span class="tooltiptext tooltip-top"></span>
</div>
</div> */}
                    <div className="price-box">
                         <span className="product-price">{productPrice}</span>
                    </div>
                    {/* End .price-box */}
                    <div className="product-action">
                         <a href="wishlist.html" className="btn-icon-wish" title="wishlist">
                              <i className="icon-heart" />
                         </a>
                         <a
                              href="demo27-product.html"
                              className="btn-icon btn-add-cart product-type-simple"
                         >
                              <i className="icon-shopping-cart" />
                              <span>ADD TO CART</span>
                         </a>
                         <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                         >
                              <i className="fas fa-external-link-alt" />
                         </a>
                    </div>
               </div>
               {/* End .product-details */}
          </div>
     );
};
