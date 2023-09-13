import React, { useEffect, useState } from "react";
import BestSellerProducts from "./components/FeaturedProducts";
import { Banner } from "./components/Banner";
import { latestProducts } from "./data";
import SummerCollection from "./components/SummerCollection";
import Category from "./components/Category";
import PopularProducts from "./components/PopularProducts";
import ClientsReview from "./components/ClientsReview";
import SendMessage from "./components/SendMessage";
import ProductSlider from "@/templates/shared/Product/ProductSlider";

export const Home = (props) => {
     const { static: statiProps, products, categories } = props;
     const [latestProductsState, setLatestProducts] = useState<any>(null);

     // const handleSideBarClose = () => {
     //      dispatch(setSideBarVisibility());
     //      console.log({ isSideBarVisible });
     // };
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
          <main className="main home px-0 !block ">
               <div>
                    <Banner slides={statiProps?.banner ?? []} />
               </div>
               <Category />
               <section className="product-section1 tw-bg-[#f4f4f4]">
                    <div className="container">
                         <h2 className="title title-underline pb-1">Hot Deals</h2>
                         <ProductSlider products={latestProductsState} />
                    </div>
               </section>

               <SendMessage />
               <section className="product-section1 tw-bg-[#f4f4f4]">
                    <div className="container">
                         <h2 className="title title-underline pb-1">Recently Arrived</h2>
                         <ProductSlider products={latestProductsState} />
                    </div>
               </section>
               {/* <div>
                    <ClientsReview />
               </div> */}
          </main>
     );
};
