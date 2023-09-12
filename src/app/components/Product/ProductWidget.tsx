import Image from "next/image";
import { InferProps } from "prop-types";
import { ProductProps } from "./product.types";
import Link from "next/link";

function ProductWidget({
     imageSrc,
     productName,
     category,
     price,
     showCategory,
     imageWidth = 95,
     imageHeight = 95,
}) {
     return (
          <div className="product-default left-details product-widget">
               <figure>
                    <a href="product.html" className={"tw-relative"}>
                         <Image
                              src={imageSrc}
                              width={imageWidth}
                              height={imageHeight}
                              alt="product"
                         />
                    </a>
               </figure>
               <div className="product-details">
                    {showCategory && (
                         <div className="category-list">
                              <Link href="demo8-shop.html" className="product-category">
                                   {category}
                              </Link>
                         </div>
                    )}
                    <h3 className="product-title">
                         {" "}
                         <a href="product.html">{productName}</a>{" "}
                    </h3>
                    <div className="ratings-container">
                         <div className="product-ratings">
                              <span className="ratings tw-w-0"></span>

                              <span className="tooltiptext tooltip-top"></span>
                         </div>
                    </div>

                    <div className="price-box">
                         <span className="product-price">{price}</span>
                    </div>
               </div>
          </div>
     );
}

export default ProductWidget;
