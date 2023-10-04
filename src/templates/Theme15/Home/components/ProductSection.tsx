import React from "react";
import { ProductProps } from "../types";
import { Product } from "./Product";
export interface ProductSectionProps {
     products: ProductProps[];
     sectionTitle: string;
     sectionSubTitle: string;
     colLg?: number;
     colMd?: number;
}
const ProductSection: React.FC<ProductSectionProps> = ({
     products,
     sectionTitle,
     sectionSubTitle,
     colLg,
     colMd,
}) => {
     return (
          <section className="product-section-2 p-t-3 ">
               <h2 className="section-title ls-n-20 m-b-1 line-height-1 text-center ">
                    {sectionTitle}
               </h2>
               <h3 className="section-sub-title ls-n-20 font-weight-normal text-center ">
                    {sectionSubTitle}
               </h3>
               <div className="row owl-carouel owl-thee nav-center-images-only">
                    {products
                         .sort((a: any, b: any) => b.__last_update - a.__last_update)
                         .map((product, index) => (
                              <div
                                   className={`col-lg-${colLg ?? "4"} col-md-${colMd ?? "6"}`}
                                   key={index}
                              >
                                   <Product {...product} />
                              </div>
                         ))}
               </div>
          </section>
     );
};
export default ProductSection;
