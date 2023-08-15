import React from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import SummerCollection from "./components/BestSelling";
import Category from "./components/Category";
import PopularProducts from "./components/PopularProducts";
import ClientsReview from "./components/ClientsReview";
import BestSelling from "./components/BestSelling";

export const Home = () => {
     return (
          <main className="main home px-0 !block ">
               <Banner />
               <div>
                    <Category />
                    <ClientsReview />
                    <BestSelling />
                    {/*  <PopularProducts /> */}
                    {/* <Gift /> */}
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
