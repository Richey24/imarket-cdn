import React from "react";
import FeaturedProduct from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import { InfoBoxesContainer } from "./components/Info";
import Gift from "./components/Gifts";
import ShopGifts from "./components/ShopGift";

export const Home = () => {
     return (
          <main className="main">
               <div className="container">
                    <Banner />

                    <Gift />
                    <div className="text-2xl font-extrabold my-10">Best Selling Gifts</div>
                    <FeaturedProduct products={latestProducts} />
                    <InfoBoxesContainer />
               </div>
               {/* End .home-top-container */}

               <ShopGifts />
               <div className="container">
                    <div className="text-2xl font-extrabold mt-10">Our Recommendations</div>
                    <hr className="h-0 border-b mb-3 w-full" />
                    <FeaturedProduct products={latestProducts} />
               </div>
          </main>
     );
};
