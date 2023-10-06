import React from "react";
import { bestSellingProducts, lastestProducts2, topRatedProducts } from "../data";
import { ProductWidget } from "./ProductWidget";

export const Products = ({ latestProducts }) => {
     return (
          <div className="container" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
               {/* End .brands-slider */}
               <hr className="mb-5" />
               <div className="product-widgets row pt-1">
                    <div className="col-md-4 col-sm-6 pb-5">
                         <h4 className="section-sub-title text-uppercase">Top Rated Products</h4>

                         {topRatedProducts.map((product, idx) => (
                              <ProductWidget key={idx} {...product} />
                         ))}
                    </div>
                    <div className="col-md-4 col-sm-6 pb-5">
                         <h4 className="section-sub-title text-uppercase">Best Selling Products</h4>

                         {bestSellingProducts.map((product, idx) => (
                              <ProductWidget key={idx} {...product} />
                         ))}
                    </div>
                    <div className="col-md-4 col-sm-6 pb-5">
                         <h4 className="section-sub-title text-uppercase">Latest Products</h4>

                         {latestProducts.slice(0, 3).map((product, idx) => (
                              <ProductWidget key={idx} {...product} />
                         ))}
                    </div>
               </div>
               {/* End .product-widgets */}
          </div>
     );
};
