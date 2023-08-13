import React from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import Category from "./components/Category";

export const Home = () => {
     return (
          <main className="main home px-0 !block tw-mb-[467px]">
               <Banner />
               <div>
                    <Category />
                    {/*  <PopularProducts /> */}
                    {/* <Gift /> */}
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
