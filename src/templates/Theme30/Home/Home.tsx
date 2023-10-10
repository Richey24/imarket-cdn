import React, { useEffect, useState } from "react";
import FeaturedProduct from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import { InfoBoxesContainer } from "./components/Info";
import Gift from "./components/Gifts";
import ShopGifts from "./components/ShopGift";
import LatestProducts from "./components/LatestProducts";

export const Home = (props) => {
     const {
          static: statiProps,
          products,
          categories,
          featuredProducts: featuredProductData,
     } = props;
     const [latestProductsState, setLatestProducts] = useState<any>(null);
     const [featuredProductsState, setFeaturedProducts] = useState<any>(null);

     useEffect(() => {
          if (products && !latestProductsState) {
               const latestProductsMap = products.map((product) => {
                    return {
                         productImageAlt: "product",
                         productCategory: "Fashion",
                         productImageUrl: "data:image/jpeg;base64," + product?.image_1920,
                         productImageUrlTwo: "data:image/jpeg;base64," + product?.image_1024,
                         productTitle: product.display_name,
                         productPrice: product.standard_price,
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
          if (featuredProductData && !featuredProductsState) {
               const featuredProductsMap = featuredProductData.map((product) => {
                    return {
                         productImageAlt: "product",
                         productCategory: "SHOES, TOYS",
                         productImageUrl: "data:image/jpeg;base64," + product?.image_1920,
                         productImageUrlTwo: "data:image/jpeg;base64," + product?.image_1024,
                         productTitle: product.display_name,
                         productPrice: product.standard_price,
                         id: product.id,
                         slug: product.website_url,
                         tooltip: product.product_tooltip,
                         productImage: "data:image/jpeg;base64," + product?.image_1920,
                         productImageTwo: "data:image/jpeg;base64," + product?.image_1024,
                         __last_update: new Date(product.__last_update),
                    };
               });
               setFeaturedProducts(featuredProductsMap);
          }
     }, [products, featuredProductData]);
     return (
          <main className="main">
               <div className="container">
                    <Banner slides={statiProps?.banner ?? []} />

                    <Gift />
                    <div className="text-2xl font-extrabold mb-2">Featured Products</div>
                    <FeaturedProduct products={featuredProductsState ?? []} />
                    <InfoBoxesContainer />
               </div>
               {/* End .home-top-container */}

               <ShopGifts />
               <div className="container">
                    <div className="text-2xl font-extrabold mb-2">Latest Products</div>
                    {/* <hr className="h-0 border-b mb-3 w-full" /> */}
                     <LatestProducts products={latestProductsState ?? []} />
               </div>
          </main>
     );
};
