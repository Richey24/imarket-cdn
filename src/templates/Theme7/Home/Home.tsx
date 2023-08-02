"use client";

import React from "react";
import { MiniBanner } from "./components/MiniBanner";
import { InfoBoxesContainer } from "./components/Info";
import { Product } from "./components/Product";
import FeaturedProduct from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import PopularProducts from "./components/PopularProducts";
import { latestProducts } from "./data";
import banner1 from "../../../assets/images/demoes/demo13/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo13/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo13/banners/banner-3.jpg";

export const Home = () => {


     return (
          <main className="main">
               <div className="container">
                    <div className="home-top-container mt-lg-2">
                         <div className="container">
                              <div className="row">
                                   <Banner />
                                   {/* End .col-lg-9 */}
                                   <div className="col-lg-3 top-banners">
                                        <div className="row">
                                             <div className="col-md-4 col-lg-12">
                                                  <MiniBanner
                                                       src={banner1}
                                                       backgroundColor="#ccc"
                                                       title="Handbags"
                                                       subtitle="Starting at $99"
                                                  />
                                             </div>
                                             <div className="col-md-4 col-lg-12">
                                                  <MiniBanner
                                                       src={banner2}
                                                       backgroundColor="#fff"
                                                       title="Deal Promos"
                                                       subtitle="Starting at $99"
                                                  />
                                             </div>
                                             <div className="col-md-4 col-lg-12">
                                                  <MiniBanner
                                                       src={banner3}
                                                       backgroundColor="#b8c1d0"
                                                       title="Black Jackets"
                                                       subtitle="Starting at $99"
                                                  />
                                             </div>
                                        </div>
                                   </div>
                                   {/* End .col-lg-3 */}
                              </div>
                              {/* End .row */}
                         </div>
                         {/* End .container */}
                    </div>
                    <div className="container">
                         <div className="text-2xl font-extrabold my-10" >FEATURED PRODUCTS</div>
                         <FeaturedProduct products={latestProducts} />
                    </div>

               </div>
               {/* End .home-top-container */}
               <InfoBoxesContainer />
               <div className="container my-12">
                    <div>JUST ARRIVED</div>
                    <hr className="h-0 border-b mb-1 w-full" />

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                         {latestProducts.map((product) => {
                              return <Product
                                   productImageUrl={product.imageUrl}
                                   productCategory={product.category}
                                   productTitle={product.title}
                                   productPrice={product.price} />

                         })}
                    </div>
                    <hr className="h-0 border-b mb-1 w-full" />
               </div>
               <div className="container">
                    <PopularProducts />
               </div>
          </main >
     );
};
