import { useState } from "react";
import Banner from "./components/Banner";
import { Info } from "./components/Card";
import { MostViewedProducts } from "./components/MostViewedProducts";
import { TopCategories } from "./components/TopCategories";
import { BestSellersProducts } from "./components/BestSellersProducts";
import { Electronics } from "./components/Electronics";
import { MobileAndAccessories } from "./components/MobileAndAccessories";
import { TopRatedProducts } from "./components/TopRatedProducts";
import { RecentProduct } from "./components/RecentProduct";

const Home = () => {
     return (
          <main className="main">
               <Banner />
               <Info />
               <MostViewedProducts />
               <TopCategories />
               <BestSellersProducts />
               <RecentProduct/>
               <Electronics />
               <MobileAndAccessories />
               <TopRatedProducts />
          </main>
     );
};

export default Home;
