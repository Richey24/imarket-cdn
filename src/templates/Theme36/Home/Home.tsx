import React from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import Info from "./components/Info";
import PopularProducts from "./components/PopularProducts";
import WeekSpecials from "./components/WeekSpecials";
import SpecialOffers from "./components/SpecialOffers";
import PopularDepartment from "./components/PopularProducts/PopularDepartment";

export const Home = () => {
     return (
          <main className="main bg-gray px-0 !block tw-mb-[467px]">
               <Banner />
               <div className="container popular-section">
                    <Info />
                    <PopularDepartment />
                    <PopularProducts />
                    <WeekSpecials />
                    <SpecialOffers />
                    {/* <Gift /> */}
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
