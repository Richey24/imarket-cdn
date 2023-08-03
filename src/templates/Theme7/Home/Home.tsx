import React from "react";
import { Product } from "./components/Product";
import FeaturedProduct from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import PopularProducts from "./components/PopularProducts";
import { latestProducts } from "./data";
import OurCategory from "./components/OurCategory";

export const Home = () => {
     return (
          <main className="main">
               <div className="container">
                    <Banner />

                    <div className="container">
                         <div className="text-2xl font-extrabold my-10" >FEATURED PRODUCTS</div>
                         <FeaturedProduct products={latestProducts} />
                    </div>

               </div>
               {/* End .home-top-container */}
               <OurCategory />
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
