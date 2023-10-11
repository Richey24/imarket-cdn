import React, { useState, useEffect } from "react";
import FeaturedProduct from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import { InfoBoxesContainer } from "./components/Info";

export const Home = (props) => {
     const {
          static: statiProps,
          products,
          categories,
          featuredProducts: featuredProductData,
     } = props;
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
                    <Banner slides={statiProps?.banner ?? []} />
                    {/* <Gift /> */}
                    {/* <div className="text-2xl font-extrabold my-10">Best Selling Gifts</div>*/}
                    <div className="section-title">
                         <h2 className="mr-5 ls-0 mb-0">Recently Released</h2>
                         <a href="demo31-product.html">
                              view all products<i className="icon-right"></i>
                         </a>
                    </div>
                    <FeaturedProduct products={latestProductsState ?? []} />
                    <InfoBoxesContainer />
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
