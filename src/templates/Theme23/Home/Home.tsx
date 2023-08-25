import React from "react";
import { Products } from "./components/Products";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { BestCollection } from "./components/BestCollection";
import { MiniBanners } from "./components/MiniBanner";
import { Product2 } from "./components/Product2";

const Home = () => {
     return (
          <main className="main">
               <Banner />
               <section className="welcome-section">
                    <div className="container">
                         <h2
                              className="section-title text-center text-uppercase appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              Welcome to little Porto’s world
                         </h2>
                         <p
                              className="section-description text-center mb-3 appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={400}
                         >
                              Enjoy the exceptional quality in all our products
                         </p>
                         <MiniBanners />
                         <Card />
                         <Products />
                    </div>
               </section>
               <div className="cats-banner-section mb-3">
                    <div className="row m-0 no-gutters">
                         <div className="col-lg-3">
                              <div className="cat-banner d-flex flex-column align-items-center justify-content-center h-100">
                                   <h4 className="font4 line-height-1 ls-0 text-primary mb-0">
                                        Best Collections
                                   </h4>
                                   <p className="font2 line-height-1 mb-0">
                                        Selected Products From Famous Brands
                                   </p>
                              </div>
                         </div>
                         <BestCollection />
                    </div>
               </div>
               <Product2 />
          </main>
     );
};

export default Home;
