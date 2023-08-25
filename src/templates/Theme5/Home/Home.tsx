import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Info from "./components/Info";
import MiniBanner from "./components/MiniBanner";
import Product from "./components/Product";
import ProductWidget from "./components/ProductWidget";

export const Home = (props: any) => {
     const [quickView, setQuick] = useState({});
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
          <main style={{ backgroundColor: "#F6F7F9", paddingBottom: "10px" }} className="main home">
               {/* <Banner /> */}
               <Card />
               <MiniBanner />
               <Product setQuickView={setQuick} products={latestProductsState} />
               <Info />
               <ProductWidget quickView={quickView} />
          </main>
     );
};
