import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import Product from "./components/Product";
import ProductWidget from "./components/ProductWidget";

const Home = (props: any) => {
     const { static: statiProps, products, categories } = props;

     const [quickView, setQuick] = useState({});

     const [latestProductsState, setLatestProducts] = useState<any>(null);

     console.log("products", products, categories);
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
          <div>
               <Banner slides={statiProps?.banner ?? []} />
               <Product setQuickView={setQuick} products={latestProductsState} />
               <Info />
               <ProductWidget quickView={quickView} />
          </div>
     );
};

export default Home;
