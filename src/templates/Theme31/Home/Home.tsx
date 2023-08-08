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

                    {/* <Gift /> */}
                    {/* <div className="text-2xl font-extrabold my-10">Best Selling Gifts</div>*/}
                    <div className="section-title">
                         <h2 className="mr-5 ls-0 mb-0">Recently Released</h2>
                         <a href="demo31-product.html">
                              view all products<i className="icon-right"></i>
                         </a>
                    </div>
                    <FeaturedProduct products={latestProducts} />
                    <InfoBoxesContainer />
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
