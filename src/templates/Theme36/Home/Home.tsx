import React from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import Info from "./components/Info";
import SelectedProducts from "./components/SelectedProducts";
import RecentlyViewed from "./components/RecentlyViewed";
import SpecialOffers from "./components/SpecialOffers";
import Categories from "./components/SelectedProducts/Categories";

export const Home = () => {
     return (
          <main className="main bg-gray px-0">
               <div className="popular-section">
                    <div className="container">
                         <Banner />
                         <Categories />
                    </div>

                    <div className="bg-white">
                         <div className="container">
                              <Info />
                              <SpecialOffers />
                         </div>
                    </div>
                    <div className="container">
                         <SelectedProducts />
                         <RecentlyViewed />
                    </div>
                    {/* /* <Gift /> /* */}
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
