import Image, { StaticImageData } from "next/image";
import { ProductWidgetProps } from "../types";

export const ProductWidget: React.FC<ProductWidgetProps> = ({
     productImage,
     productImageTwo,
     productTitle,
     productPrice,
}) => {
     return (
          <div className="product-default left-details product-widget">
               <figure>
                    <a href="demo13-product.html">
                         <Image src={productImage} width={95} height={95} alt="product" />
                         <Image src={productImageTwo} width={95} height={95} alt="product" />
                    </a>
               </figure>
               <div className="product-details">
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
                         <span className="product-price">${productPrice.toFixed(2)}</span>
                    </div>
                    {/* End .price-box */}
               </div>
               {/* End .product-details */}
          </div>
     );
};
