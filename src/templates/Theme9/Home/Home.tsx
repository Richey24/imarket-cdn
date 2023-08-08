import React from "react";
import FeaturedProduct from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import OurCategory from "./components/OurCategory";

export const Home = () => {
     return (
          <main className="main">
               <div className="container">
                    <Banner />

                    <div className="container">
                         <div className="text-2xl font-extrabold my-10">FEATURED PRODUCTS</div>
                         <FeaturedProduct products={latestProducts} />
                    </div>
               </div>
               {/* End .home-top-container */}
               <OurCategory />
               <div className="container my-12">
                    <div className="relative w-full mb-16">
                         <div className="absolute p-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white font-bold text-3xl">
                              FEATURED PRODUCTS
                         </div>
                         <hr className="h-0 border-b w-full" />
                    </div>

                    <FeaturedProduct products={latestProducts} />
               </div>

               <div className="container my-12">
                    <div className="relative w-full mb-16">
                         <div className="absolute p-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white font-bold text-3xl">
                              FASHION SELECTION
                         </div>
                         <hr className="h-0 border-b w-full" />
                    </div>

                    <FeaturedProduct products={latestProducts} />
               </div>
          </main>
     );
};
