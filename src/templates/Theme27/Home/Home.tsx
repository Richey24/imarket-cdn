import { mostPopularProducts, promotions, trendingAccessories } from "./data";
import Banner from "./components/Banner";
import FeatureBoxes from "./components/FeatureBoxes";
import FeaturedProducts from "./components/MostPopularProducts";
import BestSellingProducts from "./components/BestSellingProducts";
import Testimonials from "./components/Testimonials";
import MostPopularProducts from "./components/MostPopularProducts";
import BannersSection from "./components/BannersSection";
import TrendingAccessories from "./components/TrendingAccessories";
import Promotions from "./components/Promotions";
import { useState, useEffect } from "react";
import { log } from "console";

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
               setFeaturedProducts(featuredProductsMap);
          }
     }, [products, featuredProductData]);
     console.log("oooooo", featuredProductsState, latestProductsState);

     return (
          <main className="main">
               <Banner slider={statiProps?.banner ?? []} />
               <TrendingAccessories
                    trendingAccessories={featuredProductsState ?? []}
                    headerTitle={"Featured Products"}
               />
               <BannersSection />
               <TrendingAccessories
                    trendingAccessories={latestProductsState ?? []}
                    headerTitle={"Latest Products"}
               />
               <Promotions promotions={promotions} />
          </main>
     );
};
