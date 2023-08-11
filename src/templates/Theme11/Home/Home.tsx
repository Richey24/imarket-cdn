import React from "react";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { SpecialOffer } from "./components/SpecialOffer";
import { Products } from "./components/Products/Products";
import { Banner } from "./components/Banner";
import { SmallBanner } from "./components/SmallBanner";
import { FeatureBoxes } from "./components/FeatureBoxes";
import { Card } from "./components/Card";
import { NewArrivals } from "./components/NewArrivals/NewArrivals";

const Home = () => {
     return (
          <main className="main">
               <Banner />
               <FeaturedProducts />
               <Card />
               <NewArrivals />
               <SpecialOffer />
               <SmallBanner />
               <FeatureBoxes />
               <Products />
          </main>
     );
};

export default Home;
