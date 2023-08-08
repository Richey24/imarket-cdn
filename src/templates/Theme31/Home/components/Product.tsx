import Image, { StaticImageData } from "next/image";
import React from "react";
import { ProductProps } from "../types";
import Link from "next/link";

export const Product: React.FC<ProductProps> = ({
     productImageUrl,
     productCategory,
     productTitle,
     productPrice,
     oldPrice,
}) => {
     return (
          <div className="product-default left-details !shadow-none">
               <figure className="relative h-64 w-full">
                    <Link href="demo7-product.html">
                         <Image src={productImageUrl} alt={productTitle} fill className="mb-1 hover:shadow-xl " />
                    </Link>
                    <div className="label-group">
                         <span className="product-label label-hot">HOT</span>
                    </div>
               </figure>
               <div className="product-details">
                    <div className="text-sm text-gray-600">
                         <Link href="demo7-shop.html" className="text-sm text-gray-500">{productCategory}</Link>,
                    </div>
                    <h3 className="text-base font-medium"> <Link href="demo7-product.html">{productTitle}</Link> </h3>

                    <div className="price-box">
                         <span className="product-price">${productPrice}</span>
                    </div>
                    <div className="product-action">
                         <Link href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart"></i><span>ADD TO CART</span></Link>
                         <Link href="wishlist.html" className="btn-icon-wish" title="wishlist"><i className="icon-heart"></i></Link>
                         <Link href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt"></i></Link>
                    </div>
               </div>
          </div>
     );
};
