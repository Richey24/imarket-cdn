import Product from "@/app/components/Product";
import ProductWidget from "@/app/components/Product/ProductWidget";
import ProductList from "@/app/components/ProductList";
import { templateImages } from "@/appProvider/templateImages";
import { latestProducts } from "@/templates/Theme34/Home/data";
import React from "react";

export default function PopularProducts() {
     return (
          <div className="product-widgets container">
               <div className="row">
                    {/* product-1 */}
                    {latestProducts.map((product, index) => {
                         return (
                              <div className="col-lg-3 col-sm-6 pb-5">
                                   <ProductWidget key={`product-${index}`} {...product} />
                              </div>
                         );
                    })}
                    {/* End .row */}
               </div>
          </div>
     );
}
