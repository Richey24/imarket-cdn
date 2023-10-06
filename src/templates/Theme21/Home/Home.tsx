import React, { useEffect, useState } from "react";

import { FeaturedProducts } from "./components/FeaturedProducts";
import { MiniBanner } from "./components/MiniBanner";
import { NewProducts } from "./components/NewProducts";
import { SpecialOffer } from "./components/SpecialOffer";
import { TopRatedProducts } from "./components/TopRatedProducts";

import { Banner } from "./components/Banner";
import { SmallBanner } from "./components/SmallBanner";
import { FeatureBoxes } from "./components/FeatureBoxes";
import { Info } from "./components/Card";

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

     console.log("Am cat", categories);
     return (
          <main className="main">
               <Banner slides={statiProps?.banner ?? []} />
               <FeaturedProducts
                    products={featuredProductsState ?? []}
                    section="Featured Products"
               />
               <Info />
               <section className="new-products-section">
                    <div className="container">
                         <MiniBanner />
                         <h2
                              className="section-title ls-n-10 pb-3 m-b-4 appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={300}
                         >
                              Latest products
                         </h2>
                         <NewProducts products={latestProductsState ?? []} />
                    </div>
               </section>
               <SpecialOffer
                    section="Categories"
                    cat1="Toy"
                    cat2="Jewelry"
                    cat3="Clothes"
                    cat4="Shoes"
                    cat5="Books"
                    cat6="Electronics"
               />
               <SmallBanner />
               <FeatureBoxes />
               <TopRatedProducts
                    section="Featured Products"
                    section2="Latest Products"
                    section3="Best Selling Products"
                    products={featuredProductsState ?? []}
                    productDatas={latestProductsState ?? []}
               />
          </main>
     );
};

export default Home;
