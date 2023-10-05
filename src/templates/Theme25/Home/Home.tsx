import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import Featured from "./components/Featured";
import Recent from "./components/Recent";
import ProductWidget from "./components/ProductWidget";

const Home = (props) => {
     const [quickView, setQuick] = useState({});
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
                         image1: "data:image/jpeg;base64," + product?.image_1920,
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
                         category: "SHOES, TOYS",
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

     const displayCategoryNames =
          categories &&
          products &&
          categories.map((category) => {
               const categoryProducts = products.filter(
                    (product) => product.category === category.display_name,
               );

               // Select the first product in the category, if any
               const firstProductInCategory =
                    categoryProducts.length > 0
                         ? {
                                display_name: categoryProducts[0].display_name,
                                standard_price: categoryProducts[0].standard_price,
                                imageUrl:
                                     "data:image/jpeg;base64," + categoryProducts[0].image_1920,
                           }
                         : null;

               return {
                    name: category.display_name,
                    productsCount: categoryProducts.length,
                    firstProduct: firstProductInCategory, // Add the first product to the object
               };
          });

     return (
          <div>
               <Banner bannerData={displayCategoryNames ?? []} />
               <BestSeller />
               <Featured setQuickView={setQuick} featuredProducts={featuredProductsState ?? []} />
               <Recent setQuickView={setQuick} latestProducts={latestProductsState ?? []} />
               <ProductWidget quickView={quickView} />
          </div>
     );
};

export default Home;
