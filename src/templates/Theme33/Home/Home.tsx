import React from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import SummerCollection from "./components/SummerCollection";
import Category from "./components/Category";

export const Home = () => {
     return (
          <main className="main home px-0 !block ">
               <div className="container">
                    <Banner />
                    <Category />
                    {/* <Gift /> */}
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
