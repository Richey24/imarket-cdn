import React from "react";

import Image from "next/image";
import { bestSellers } from "../data";
 
import { Product } from "./Product";

export const BestSellersProducts = () => {
     return (
          <section className="best-sellers bg-gray appear-animate">
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">
                         Best Sellers on Electronics
                    </h2>
                    <div className="row ">
                         {bestSellers.map((product) => (
                              <div className="grid-item col-sm-45 col-md-3 mt-1 ">
                                    <Product  {...product}/>
                              </div>
                         ))}

                         {/* <div className="grid-col-sizer col-1 col-xl-5col" style={{position:'absolute',left:'0%', top:'550px'}}/> */}
                    </div>
               </div>
          </section>
     );
};
