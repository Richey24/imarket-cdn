import Product from "@/app/components/Product";
import ProductWidget from "@/app/components/Product/ProductWidget";
import ProductList from "@/app/components/ProductList";
import { topRatedProducts } from "@/templates/Theme1/Home/data";
import React from "react";

export default function PopularProducts() {
     return (
          <div className="product-widgets">
               <div className="row">
                    {/* product-1 */}
                    <div className="col-lg-4 col-sm-6 pb-5">
                         <h4 className="section-sub-title text-uppercase m-b-3">
                              Top Rated Products
                         </h4>
                         {topRatedProducts.map((product: any, index) => (
                              <ProductWidget key={`product-${index}`} {...product} />
                         ))}
                    </div>
                    {/* product-2 */}
                    <div className="col-lg-4 col-sm-6 pb-5">
                         <h4 className="section-sub-title text-uppercase m-b-3">
                              Best Selling Products
                         </h4>
                         {topRatedProducts.map((product: any, index) => (
                              <ProductWidget key={`product-${index}`} {...product} />
                         ))}
                    </div>
                    {/* product-3 */}
                    <div className="col-lg-4 col-sm-6 pb-5">
                         <h4 className="section-sub-title text-uppercase m-b-3">Latest Products</h4>
                         {topRatedProducts.map((product: any, index) => (
                              <ProductWidget key={`product-${index}`} {...product} />
                         ))}
                    </div>
               </div>
               {/* End .row */}
          </div>
     );
}
