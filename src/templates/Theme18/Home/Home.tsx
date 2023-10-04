import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
// import { ProductsData, featuredProducts } from "./data";
import ProductBanner from "./components/ProductBanner";
import FeaturedProducts from "./components/FeaturedProducts";
import Banner from "../../../assets/images/demoes/demo18/bg-2.jpg";
import { templateImages } from "@/appProvider/templateImages";
import FeaturedBoxes from "./components/FeaturedBoxes";

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
                         productCategory: "Fashion",
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
               <Hero  slides={statiProps?.banner ?? []}/>
               {/* End .home-slider-container */}
               <Products section="Latest Products" products={latestProductsState ?? []} />
               {/* End .produts-filter-container*/}
               <ProductBanner />
               {/* End .product-banner-section */}
               <FeaturedProducts section="Faatured Products"  products={featuredProductsState ?? []} />
               <section
                    className="explore-section d-flex align-items-center"
                    data-parallax="{'speed': 1.8,  'enableOnMobile': true}"
                    data-image-src={Banner.src}
                    style={{
                         backgroundColor: "#111",
                         backgroundImage: `url(${Banner.src})`,
                    }}
               >
                    <div
                         className="container-fluid text-center position-relative "
                         data-animation-name="fadeInUpShorter"
                    >
                         <h3 className="line-height-1 ls-n-25 text-white text-uppercase m-b-4">
                              Explore the best of you
                         </h3>
                         <a href="demo18-shop.html" className="btn btn-light">
                              Shop Now
                         </a>
                    </div>
                    {/* End .container */}
               </section>
               {/* End .explore-section */}
               <FeaturedBoxes />
               {/* End .feature-boxes-container */}
          </main>
     );
};

export default Home;
