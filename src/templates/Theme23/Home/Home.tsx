import React, { useState, useEffect } from "react";
import { ProductSection } from "./components/ProductSection";
import { Banner } from "./components/Banner";
import { Info } from "./components/Info";
import { BestCollection } from "./components/BestCollection";
import { MiniBanners } from "./components/MiniBanner";
import { ProductSection2 } from "./components/ProductSection2";

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
     }, [products, featuredProductData]);
     return (
          <main className="main">
               <Banner banners={statiProps?.banner ?? []} />
               <section className="welcome-section">
                    <div className="container">
                         <h2
                              className="section-title text-center text-uppercase appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              Welcome to little Porto’s world
                         </h2>
                         <p
                              className="section-description text-center mb-3 appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={400}
                         >
                              Enjoy the exceptional quality in all our products
                         </p>
                         <MiniBanners />
                         <Info />
                         <ProductSection featuredProducts={featuredProductsState ?? []} />
                    </div>
               </section>
               <div className="cats-banner-section mb-3">
                    <div className="row m-0 no-gutters">
                         <div className="col-lg-3">
                              <div className="cat-banner d-flex flex-column align-items-center justify-content-center h-100">
                                   <h4 className="font4 line-height-1 ls-0 text-primary mb-0">
                                        Best Collections
                                   </h4>
                                   <p className="font2 line-height-1 mb-0">
                                        Selected Products From Famous Brands
                                   </p>
                              </div>
                         </div>
                         <BestCollection />
                    </div>
               </div>
               <ProductSection2 latestProducts={latestProductsState ?? []} />
          </main>
     );
};

export default Home;
