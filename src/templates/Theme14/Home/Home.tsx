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
import { MiniBanner } from "./components/MiniBanner";
import { bestSellingProducts, lastestProducts2, topRatedProducts } from "./data";
import { Products } from "./components/Products";
import { FeatureBoxes } from "./components/FeatureBoxes";
import { ProductTabs } from "./components/ProductTabs";
import { PromoBanner } from "./components/PromoBanner";

const Home = () => {
     return (
          <main className="main">
               <Banner />
               <Card />
               <MiniBanner />
               <ProductTabs />
               <FeatureBoxes />
               <PromoBanner />
               <Products />
          </main>
     );
};

export default Home;
