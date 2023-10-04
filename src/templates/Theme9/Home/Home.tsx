import React, { useState, useEffect } from "react";
import FeaturedProduct from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";

export const Home = (props) => {
     const { static: statiProps, products, categories } = props;
     const [latestProductsState, setLatestProducts] = useState<any>(null);

     useEffect(() => {
          if (products && !latestProductsState) {
               const latestProductsMap = products.map((product) => {
                    return {
                         productImageAlt: "product",
                         category: "Fashion",
                         imageUrl: "data:image/jpeg;base64," + product?.image_1920,
                         imageUrl2: "data:image/jpeg;base64," + product?.image_1024,
                         title: product.display_name,
                         price: product.standard_price,
                         id: product.id,
                         slug: product.website_url,
                         tooltip: product.product_tooltip,
                         productImage: "data:image/jpeg;base64," + product?.image_1920,
                         productImageTwo: "data:image/jpeg;base64," + product?.image_1024,
                         __last_update: new Date(product.__last_update),
                    };
               });
               setLatestProducts(latestProductsMap);
          }
     }, [products]);

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
               <div className="container my-12">
                    <div className="relative w-full mb-16">
                         <div className="absolute p-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white font-bold text-3xl">
                              FEATURED PRODUCTS
                         </div>
                         <hr className="h-0 border-b w-full" />
                    </div>

                    <FeaturedProduct products={latestProducts ?? []} />
               </div>

               <div className="container my-12">
                    <div className="relative w-full mb-16">
                         <div className="absolute p-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white font-bold text-3xl">
                              FASHION SELECTION
                         </div>
                         <hr className="h-0 border-b w-full" />
                    </div>
                    {latestProductsState && (
                         <FeaturedProduct products={latestProductsState ?? []} />
                    )}
               </div>
          </main>
     );
};
