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
          <div className="product-default inner-quickview inner-icon">
               <figure>
                    <a href="demo13-product.html">
                         <Image src={productImageUrl} width={300} height={300} alt="product" />
                         {productImageUrlTwo && (
                              <Image
                                   src={productImageUrlTwo}
                                   width={300}
                                   height={300}
                                   alt="product"
                              />
                         )}
                    </a>
                    <div className="label-group">
                         <span className="product-label label-sale">-30%</span>
                    </div>
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
                              <a href="demo13-shop.html" className="product-category">
                                   {productCategory}
                              </a>
                         </div>
                         <a href="#" className="btn-icon-wish">
                              <i className="icon-wishlist-2" />
                         </a>
                    </div>
                    <h3 className="product-title">
                         <a href="demo13-product.html">{productTitle}</a>
                    </h3>
                    <div className="ratings-container">
                         <div className="product-ratings">
                              <span className="ratings" style={{ width: "100%" }} />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                         </div>
                         {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                         {oldPrice && <span className="old-price">${oldPrice.toFixed(2)}</span>}
                         <span className="product-price">${productPrice.toFixed(2)}</span>
                    </div>
                    {/* End .price-box */}
               </div>
               {/* End .product-details */}
          </div>
     );
};
