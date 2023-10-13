import React from "react";
import { Product } from "./Product";

export const LatestProducts = ({ latestProducts }) => {
     return (
          <section className="best-sellers bg-gray appear-animate">
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Latest Products</h2>
                    <div className="row ">
                         {latestProducts
                              .sort((a: any, b: any) => b.__last_update - a.__last_update)
                              .map((product, idx) => (
                                   <div key={idx} className="grid-item col-sm-45 col-md-3 mt-1 ">
                                        <Product {...product} />
                                   </div>
                              ))}

                         {/* <div className="grid-col-sizer col-1 col-xl-5col" style={{position:'absolute',left:'0%', top:'550px'}}/> */}
                    </div>
               </div>
          </section>
     );
};
