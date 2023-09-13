import { useEffect, useState } from "react";
import { Promotion } from "./components/Promotion";
import { promotions, shopByCategories } from "./data";
import Banner from "./components/Banner";
import BigInfo from "@/templates/shared/BigInfo";
import BrowseCategory from "@/templates/shared/BrowseCategory";
import Product from "@/app/components/Product";

export const Home = (props: any) => {
     const [activeTab, setActiveTab] = useState("featured-products");
     const { static: statiProps, products, categories } = props;
     const [latestProductsState, setLatestProducts] = useState<any>(null);

     useEffect(() => {
          if (products && !latestProductsState) {
               const latestProductsMap = products.map((product) => {
                    return {
                         productImageAlt: product.display_name,
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
               setLatestProducts(latestProductsMap);
          }
     }, [products]);

     return (
          <main className="main">
               <Banner slides={statiProps?.banner ?? []} />

               <section className="container">
                    <h2 className="section-title ls-n-15 text-center pt-2 m-b-4 fw-bold">
                         Shop By Category
                    </h2>

                    <BrowseCategory categories={shopByCategories} />
               </section>

               <section className="bg-gray banners-section text-center">
                    <div className="container py-2">
                         <div className="row">
                              {promotions.map((promotion, index) => (
                                   <Promotion key={index} {...promotion} />
                              ))}
                         </div>
                    </div>
               </section>

               <section className="container pb-3 mb-1">
                    <h2 className="section-title ls-n-15 text-center pb-2 m-b-4 fw-bold">
                         Popular Products
                    </h2>
                    <div className="row py-4">
                         {latestProductsState &&
                              latestProductsState.map((product, index) => (
                                   <div
                                        key={`featured-product-${index}`}
                                        className="col-6 col-sm-4 col-lg-3 col-xl-2"
                                   >
                                        <Product
                                             imageSrc={product.productImageUrl}
                                             productName={product.productTitle}
                                             price={product.productPrice}
                                        />
                                   </div>
                              ))}
                    </div>
                    <hr className="mt-3 mb-6" />

                    {/* bigInfo */}
                    <BigInfo />
               </section>
          </main>
     );
};
