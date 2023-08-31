import { useState, useEffect } from "react";
import Image from "next/image";
import Banner from "./components/Banner";
// import { InfoBoxesContainer } from "../../components/Info";
import { Product } from "./components/Product";
import { featuredProducts } from "./data";
import SideMenu from "./components/SideMenu";
import Promotions from "./components/Promotions";
import { InfoBoxesContainer } from "@/templates/components/Info";

export const Home = (props: any) => {
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
          <main className="main home">
               <div className="container mt-2">
                    <div className="row">
                         <SideMenu />

                         <div className="col-lg-9">
                              <Banner slides={statiProps?.banner ?? []} />
                         </div>
                    </div>
                    <InfoBoxesContainer />
                    <Promotions />
               </div>

               <div className="container my-5">
                    <h3 className="fw-bold fs-2 mb-4 pb-2 mt-3 border-bottom">Featured Products</h3>
                    <div className="row">
                         {latestProductsState &&
                              latestProductsState.map((product, index) => (
                                   <Product key={`featured-product-${index}`} {...product} />
                              ))}
                    </div>
               </div>
          </main>
     );
};
