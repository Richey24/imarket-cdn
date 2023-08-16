import React from "react";
import HomeSlider from "./components/HomeSlider";
import {
     additionalProductWidgetsData,
     bannerData,
     categoriesData,
     featuredProductsWidgetsData,
     infoBoxData,
     productWidgetsData,
     productsData,
     sliderData,
     topRatedproducts,
} from "./data";
import BannersContainer from "./components/BannersContainer";
import InfoBoxesContainer from "./components/InfoBoxes";
import ProductGrid from "./components/ProductGrid";
import CategoriesSlider from "./components/CategoriesSlider";
import { ProductWidget } from "./components/ProductWidget";
import TopRatedCard from "./components/TopRatedCard";
import bannerBg from "../../../assets/images/demoes/demo11/banners/category-bg.jpg";

const Home = () => {
     return (
          <div className="page-wrapper">
               {/* End .header */}
               <main className="main">
                    <HomeSlider slides={sliderData} />
                    {/* End .home-slider-container */}
                    <BannersContainer banners={bannerData} />
                    {/* End .banners-container */}
                    <InfoBoxesContainer infoBoxes={infoBoxData} />
                    {/* End .container */}
                    <div className="container mb-4 mb-lg-6">
                         <h2
                              className="section-title text-center "
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              Featured Products
                         </h2>
                         <p
                              className="section-description text-center "
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              Amazing products added recently in our catalog
                         </p>
                         <ProductGrid products={productsData} />
                         {/* End .row */}
                         <a
                              className="btn btn-dark btn-lg btn-center loadmore"
                              href="ajax/demo11-ajax-products.html"
                         >
                              Load More...
                         </a>
                         <hr className="mb-4 pb-1" />
                         <h2
                              className="section-title text-center "
                              data-animation-name="fadeIn"
                              data-animation-delay={100}
                         >
                              Browse Categories
                         </h2>
                         <p
                              className="section-description text-center "
                              data-animation-name="fadeIn"
                              data-animation-delay={100}
                         >
                              Amazing categories with only top fashion products
                         </p>
                         <CategoriesSlider categories={categoriesData} />
                         {/* End .categories-slider */}
                    </div>
                    {/* End .container */}
                    <div
                         className="promo-section mb-5"
                         data-parallax="{'speed': 1.5}"
                         data-image-src={bannerBg.src}
                    >
                         <div className="promo-content">
                              <h2
                                   className="m-b-1 "
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay={200}
                              >
                                   New Season Sale
                              </h2>
                              <h3
                                   className="mb-1 "
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay={400}
                              >
                                   40% OFF
                              </h3>
                              <hr
                                   className="divider-short-thick "
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay={600}
                              />
                              <a
                                   href="demo11-shop.html"
                                   className="btn btn-light "
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay={800}
                              >
                                   Shop Now <i className="fas fa-long-arrow-alt-right ml-2 pl-1" />
                              </a>
                         </div>
                    </div>
                    {/* End .promo-section */}
                    <div
                         className="container mb-2 mb-lg-4 "
                         data-animation-name="fadeIn"
                         data-animation-delay={100}
                    >
                         <h2 className="section-title text-center">Top Rated Products</h2>
                         <p className="section-description text-center">
                              Only the top rated products added recently in our catalog
                         </p>
                         <TopRatedCard products={topRatedproducts} />
                         <hr className="mt-1 m-b-5" />
                         <div className="row">
                              <div
                                   className="col-md-4 pb-5 pb-md-0 "
                                   data-animation-name="fadeIn"
                                   data-animation-delay={200}
                              >
                                   <h4 className="section-sub-title mb-2">
                                        Recently Added Products
                                   </h4>
                                   {productWidgetsData.map((product, index) => (
                                        <ProductWidget
                                             key={index}
                                             productImage={product.image1}
                                             productTitle={product.name}
                                             productPrice={product.price}
                                             productImageTwo={product.image2}
                                        />
                                   ))}
                              </div>
                              <div
                                   className="col-md-4 pb-5 pb-md-0 "
                                   data-animation-name="fadeIn"
                                   data-animation-delay={400}
                              >
                                   <h4 className="section-sub-title mb-2">Best Selling Products</h4>
                                   {additionalProductWidgetsData.map((product, index) => (
                                        <ProductWidget
                                             key={index}
                                             productImage={product.image1}
                                             productTitle={product.name}
                                             productPrice={product.price}
                                             productImageTwo={product.image2}
                                        />
                                   ))}
                              </div>
                              <div
                                   className="col-md-4 pb-5 pb-md-0 "
                                   data-animation-name="fadeIn"
                                   data-animation-delay={600}
                              >
                                   <h4 className="section-sub-title mb-2">Featured Products</h4>
                                   {featuredProductsWidgetsData.map((product, index) => (
                                        <ProductWidget
                                             key={index}
                                             productImage={product.image1}
                                             productTitle={product.name}
                                             productPrice={product.price}
                                             productImageTwo={product.image2}
                                        />
                                   ))}
                              </div>
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .container */}
               </main>
               {/* End .main */}

               {/* End .footer */}
          </div>
     );
};

export default Home;
