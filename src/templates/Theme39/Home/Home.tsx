import React from "react";
import { Banner } from "./components/Banner";
import { PopularProducts } from "./components/PopularProducts";
import { MiniBanner } from "./components/MiniBanner";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Instagram } from "./components/Instagram";
import { Info } from "./components/Info";
import { ProductTabs } from "./components/ProductTabs";
import { StaffFav } from "./components/StaffFav";

export const Home = () => {
     return (
          <main className="main">
               <Banner />
               <ProductTabs />
               <PopularProducts />
               <MiniBanner />
               <FeaturedProducts />
               <Testimonials />
               <StaffFav />
               <div className="container">
                    <div className="banner-section custom-banner-section bg-primary">
                         <div className="banner banner1 d-flex flex-column flex-md-row align-items-center justify-content-center">
                              <div
                                   className="content-left text-center text-lg-left mb-2 mb-md-0 appear-animate"
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={150}
                              >
                                   <h2 className="text-white">
                                        WINE SPECTATOR'S TOP <span className="font1">100</span>
                                   </h2>
                                   <h5 className="mb-0">Check Now This Year’s List</h5>
                              </div>
                              <div
                                   className="content-right text-right appear-animate"
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={200}
                              >
                                   <a href="demo39-shop.html" className="btn btn-lg">
                                        Shop Now
                                   </a>
                              </div>
                         </div>
                    </div>

                    <Info />
                    <Instagram />
               </div>
          </main>
     );
};
