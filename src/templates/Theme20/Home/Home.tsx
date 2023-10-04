import { useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { FeaturedCategories } from "./components/FeaturedCategories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { MiniBanner } from "./components/MiniBanner";

const Home = (props) => {
     const { static: statiProps, featuredProducts: featuredProductData, categories } = props;
     const [featuredProductsState, setFeaturedProducts] = useState<any>(null);

     useEffect(() => {
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
     }, [featuredProductData]);

     const displayCategories =
          categories &&
          categories.map((category) => {
               return {
                    name: category.display_name,
               };
          });
          
     console.log("+++++++", displayCategories);

     return (
          <main className="main">
               <Banner banner={statiProps?.banner[0] ?? []} />
               {displayCategories && <FeaturedCategories categories={displayCategories ?? []} />}
               <FeaturedProducts featuredProducts={featuredProductsState ?? []} />
               <MiniBanner />
          </main>
     );
};

export default Home;
