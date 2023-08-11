import React from "react";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
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
