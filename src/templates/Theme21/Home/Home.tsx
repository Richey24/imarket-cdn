import React from "react";

import { FeaturedProducts } from "./components/FeaturedProducts";
import { MiniBanner } from "./components/MiniBanner";
import { NewProducts } from "./components/NewProducts";
import { SpecialOffer } from "./components/SpecialOffer";
import { Products } from "./components/Products";

import { Banner } from "./components/Banner";
import { SmallBanner } from "./components/SmallBanner";
import { FeatureBoxes } from "./components/FeatureBoxes";
import { Info } from "./components/Info";

const Home = () => {
     return (
          <main className="main">
               <Banner />
               <FeaturedProducts />
               <Info />
               <section className="new-products-section">
                    <div className="container">
                         <MiniBanner />
                         <h2
                              className="section-title ls-n-10 pb-3 m-b-4 appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={300}
                         >
                              New Arrivals
                         </h2>
                         <NewProducts />
                    </div>
               </section>
               <SpecialOffer />
               <SmallBanner />
               <FeatureBoxes />
               <Products />
          </main>
     );
};

export default Home;
