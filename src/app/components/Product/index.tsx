import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InferProps } from "prop-types";
import { ProductProps } from "./product.types";

const Product = ({ imageSrc, productName, price }: InferProps<typeof ProductProps>) => {
     return (
          <Link href={`/${productName}`}>
               <div className="product-default inner-quickview inner-icon">
                    <figure className="img-effect tw-h-72 ">
                         <Link href={`/${productName}`}>
                              <Image src={imageSrc} fill alt="product" />
                              {/* <img src={imageSrc} width="205" height="205" alt="product" /> */}
                         </Link>
                         <div className="label-group">
                              <div className="product-label label-hot">HOT</div>
                              <div className="product-label label-sale">-20%</div>
                         </div>
                         <div className="btn-icon-group">
                              <a href="#" className="btn-icon btn-add-cart product-type-simple">
                                   <i className="icon-shopping-cart"></i>
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
                                   <Link href={`/${productName}`} className="product-category">
                                        {productName}
                                   </Link>
                              </div>
                              <a href="wishlist.html" title="Wishlist" className="btn-icon-wish">
                                   <i className="icon-heart"></i>
                              </a>
                         </div>
                         <h3 className="product-title">
                              <Link href={`/${productName}`}>{productName}</Link>
                         </h3>
                         <div className="ratings-container">
                              <div className="product-ratings">
                                   <span className="ratings tw-w-0"></span>

                                   <span className="tooltiptext tooltip-top"></span>
                              </div>
                         </div>

                         <div className="price-box">
                              <span className="tw-text-2xl font-semibold"> {price}</span>
                         </div>
                    </div>
               </div>
          </Link>
     );
};

export default Product;
