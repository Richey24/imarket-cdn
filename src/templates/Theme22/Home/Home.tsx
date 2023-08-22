import React from "react";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { MostViewedProducts } from "./components/MostViewedProducts";
import { TopCategories } from "./components/TopCategories";
import { BestSellersProducts } from "./components/BestSellersProducts";
import { RecentProduct } from "./components/RecentProduct";
import { TopRatedProducts } from "./components/TopRatedProducts";
import { Electronics } from "./components/Electronics";
import { MobileAndAccessories } from "./components/MobileAndAccessories";

const Home = () => {
     return (
          <main className="main">
               <Banner />
               <Card />
               <MostViewedProducts />
               <TopCategories />
               <BestSellersProducts />
               <RecentProduct />
               <Electronics />
               <MobileAndAccessories />
               <TopRatedProducts />
          </main>
     );
};

export default Home;
