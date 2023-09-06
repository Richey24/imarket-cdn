import Image, { StaticImageData } from "next/image";
import { ProductWidgetProps } from "../types";

export const ProductWidget: React.FC<ProductWidgetProps> = ({
     productImage,
     productImageTwo,
     productName,
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
                         <a href="demo13-product.html">{productName}</a>
                    </h3>
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
