import React from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import SummerCollection from "./components/SummerCollection";
import Category from "./components/Category";
import PopularProducts from "./components/PopularProducts";

export const Home = () => {
     return (
          <main className="main home px-0 !block ">
               <div className="container">
                    <Banner />
               </div>
               <Category />
               <div className="tw-bg-gray-100 tw-py-24">
                    <PopularProducts />
                    {/* <Gift /> */}
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
