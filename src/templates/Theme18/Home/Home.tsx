import React from "react";
import Hero from "./components/Hero";
import Products from "./components/products";
import { ProductsData, featuredProducts } from "./data";
import ProductBanner from "./components/ProductBanner";
import FeaturedProducts from "./components/FeaturedProducts";
import Banner from "../../../assets/images/demoes/demo18/bg-2.jpg";
import { templateImages } from "@/appProvider/templateImages";
import FeaturedBoxes from "./components/FeaturedBoxes";

const Home = () => {
     return (
          <main className="main">
               <Hero />
               {/* End .home-slider-container */}
               <Products products={ProductsData} />
               {/* End .produts-filter-container*/}
               <ProductBanner />
               {/* End .product-banner-section */}
               <FeaturedProducts products={featuredProducts} />
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
