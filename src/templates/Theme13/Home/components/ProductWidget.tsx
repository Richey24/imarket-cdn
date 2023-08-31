import Image, { StaticImageData } from "next/image";
import { ProductWidgetProps } from "../types";
import Link from "next/link";

export const ProductWidget: React.FC<ProductWidgetProps> = ({
     id,
     productImage,
     productImageTwo,
     productTitle,
     productPrice,
}) => {
     return (
          <div className="product-default left-details product-widget">
               <figure>
                    <Link href={`/${id}`}>
                         <Image src={productImage} width={95} height={95} alt="product" />
                         <Image src={productImageTwo} width={95} height={95} alt="product" />
                    </Link>
               </figure>
               <div className="product-details">
                    <h3 className="product-title">
                         <Link href={`/${id}`}>{productTitle}</Link>
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
                         <span className="product-price">${productPrice.toFixed(2)}</span>
                    </div>
                    {/* End .price-box */}
               </div>
               {/* End .product-details */}
          </div>
     );
};
