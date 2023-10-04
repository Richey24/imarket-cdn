import React, { useState, useEffect } from "react";
import { Banner } from "./components/Banner";
import { Info } from "./components/Info";
import { MiniBanner } from "./components/MiniBanner";
import { bestSellingProducts, lastestProducts2, topRatedProducts } from "./data";
import { Products } from "./components/Products";
import { FeatureBoxes } from "./components/FeatureBoxes";
import { ProductTabs } from "./components/ProductTabs";
import { PromoBanner } from "./components/PromoBanner";

const Home = (props) => {
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
                         category: "Fashion",
                         imageUrl1: "data:image/jpeg;base64," + product?.image_1920,
                         imageUrl2: "data:image/jpeg;base64," + product?.image_1024,
                         productName: product.display_name,
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
     }, [products]);

     return (
          <main className="main">
               <Banner Sliders={statiProps?.banner ?? []} />
               <Info />
               <MiniBanner />
               <ProductTabs
                    featuredProducts={featuredProductsState ?? []}
                    latestProducts={latestProductsState ?? []}
               />
               <FeatureBoxes />
               <PromoBanner />
               <Products latestProducts={latestProductsState ?? []} />
          </main>
     );
};

export default Home;
