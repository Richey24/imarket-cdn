import React from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import SummerCollection from "./components/SummerCollection";

export const Home = () => {
     return (
          <main className="main home px-0 !block ">
               <div className="container">
                    <Banner />

                    {/* <Gift /> */}
                    <div>
                         <div className="section-title">
                              <div className="divide-txt">
                                   <div className="divide-line"></div>
                                   <span>
                                        <strong>Best Seller</strong> Featured
                                   </span>
                                   <div className="divide-line"></div>
                              </div>
                              <h3 className="section-subtitle">
                                   Only the best seller products added recently in our catalog
                              </h3>
                         </div>
                         <BestSellerProducts products={latestProducts} />
                    </div>
                    <SummerCollection />
                    <div>
                         <div className="section-title">
                              <div className="divide-txt">
                                   <div className="divide-line"></div>
                                   <span>
                                        <strong>Best Seller</strong> Products
                                   </span>
                                   <div className="divide-line"></div>
                              </div>
                              <h3 className="section-subtitle">
                                   Only the best seller products added recently in our catalog
                              </h3>
                         </div>
                         <BestSellerProducts products={latestProducts} />
                    </div>
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
