import React, { useState, useEffect } from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import { InfoBoxesContainer } from "./components/Info";
import SummerCollection from "./components/SummerCollection";

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
          if (featuredProductData && !featuredProductsState) {
               const featuredProductsMap = featuredProductData.map((product) => {
                    return {
                         productImageAlt: "product",
                         productCategory: "SHOES, TOYS",
                         imageUrl: "data:image/jpeg;base64," + product?.image_1920,
                         productImageUrlTwo: "data:image/jpeg;base64," + product?.image_1024,
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
               setFeaturedProducts(featuredProductsMap);
          }
     }, [products, featuredProductData]);

     return (
          <main className="main home px-0 !block ">
               <Banner slides={statiProps?.banner ?? []} />
               <InfoBoxesContainer />

               <div className="container">
                    {/* <Gift /> */}
                    <div>
                         <div className="section-title">
                              <div className="divide-txt">
                                   <div className="divide-line"></div>
                                   <span>
                                        <strong>Featured</strong> Products
                                   </span>
                                   <div className="divide-line"></div>
                              </div>
                              <h3 className="section-subtitle">
                                   Only the best seller products added recently in our catalog
                              </h3>
                         </div>
                         <BestSellerProducts products={featuredProductsState ?? []} />
                    </div>
                    <SummerCollection />
                    <div>
                         <div className="section-title">
                              <div className="divide-txt">
                                   <div className="divide-line"></div>
                                   <span>
                                        <strong>Latest</strong> Products
                                   </span>
                                   <div className="divide-line"></div>
                              </div>
                              <h3 className="section-subtitle">
                                   Only the best seller products added recently in our catalog
                              </h3>
                         </div>
                         <BestSellerProducts products={latestProductsState ?? []} />
                    </div>
               </div>
               {/* End .home-top-container */}
          </main>
     );
};
