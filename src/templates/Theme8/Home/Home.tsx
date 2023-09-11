import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import MiniCard from "./components/MiniCard";
import Product from "./components/Product";
import ProductWidget from "./components/ProductWidget";
import { bestSeller, featuredProduct, latestProducts } from "./data";

const Home = (props) => {
     const {
          static: statiProps,
          products,
          categories,
          featuredProduct: featuredProductData,
     } = props;
     const [latestProductsState, setLatestProducts] = useState<any>(null);
     const [quickView, setQuick] = useState({});

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
     }, [products]);

     return (
          <div>
               <Banner slides={statiProps?.banner ?? []} />
               {/* <Card /> */}
               <Product setQuickView={setQuick} />
               {latestProductsState && (
                    <MiniCard
                         latestProducts={latestProductsState.slice(0, 3) ?? []}
                         bestSeller={bestSeller}
                         featuredProduct={featuredProduct}
                    />
               )}
               <ProductWidget quickView={quickView} />
          </div>
     );
};

export default Home;
