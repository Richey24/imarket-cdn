import React from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import SummerCollection from "./components/SummerCollection";
import Category from "./components/Category";
import PopularProducts from "./components/PopularProducts";
import ClientsReview from "./components/ClientsReview";

export const Home = () => {
     return (
          <main className="main home px-0 !block ">
               <Banner />
               <div>
                    <Category />
                    <ClientsReview />
                    {/*  <PopularProducts /> */}
                    {/* <Gift /> */}
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
