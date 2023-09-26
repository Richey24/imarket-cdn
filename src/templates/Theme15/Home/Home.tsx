import { featuredProducts, miniBanners } from "./data";
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import MiniBanners from "./components/MiniBanner/MiniBanners";
import ProductSection from "./components/ProductSection";
import SaleBanner from "./components/SaleBanner";
import Newsletter from "./components/Newsletter";
import SideMenu from "./components/SideMenu";
import FeatureBoxes from "./components/FeatureBoxes";
import ServiceBox from "./components/ServiceBox";

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
                         imageUrl2: "data:image/jpeg;base64," + product?.image_1024,
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
     }, [products, featuredProductsState]);

     const displayCategories =
          categories &&
          products &&
          categories.map((category) => {
               return {
                    name: category.display_name,
               };
          });

     return (
          <main className="main">
               <div className="container">
                    <Banner slides={statiProps?.banner ?? []} />
                    <ServiceBox />
                    <section className="product-section">
                         <div className="row">
                              <div className="sidebar-home col-lg-3 col-md-4 order-lg-first">
                                   <SideMenu categories={displayCategories ?? []} />
                                   <FeatureBoxes />
                              </div>
                              <div className="col-lg-9 col-md-8">
                                   <ProductSection
                                        sectionTitle="Recent Products"
                                        sectionSubTitle=" All our new arrivals in a exclusive brand selection"
                                        products={latestProductsState ?? []}
                                        colLg={4}
                                        colMd={6}
                                   />
                              </div>
                         </div>
                    </section>
                    <MiniBanners banners={miniBanners} />
                    <ProductSection
                         sectionTitle="Featured products"
                         sectionSubTitle="All our featured products in a exclusive brand selection"
                         products={featuredProductsState ?? []}
                         colLg={2}
                         colMd={3}
                    />
                    <SaleBanner />
                    <div className="m-b-1" />
                    <Newsletter />
               </div>
          </main>
     );
};
