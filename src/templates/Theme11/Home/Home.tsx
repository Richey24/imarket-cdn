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
import { featuredProductWidget } from "@/templates/Theme4/Home/data";
import TopRatedCard from "./components/TopRatedCard";

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
                         data-image-src="assets/images/demoes/demo11/banners/category-bg.jpg"
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
                         <div
                              className="owl-carousel owl-theme pb-2 mb-2"
                              data-owl-options="{
                          'loop': false,
                          'margin': 20,
                          'autoHeight': true,
                          'autoplay': false,
                    'items': 2,
                    'dots': false,
                          'responsive': {
                        '0': {
                                  'items': 2
                              },
                              '576': {
                                  'items': 2
                        },
                        '768': {
                                  'items': 3
                              }
                          }
                      }"
                         >
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-19.jpg"
                                                  width={380}
                                                  height={380}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-19-2.jpg"
                                                  width={380}
                                                  height={380}
                                                  alt="Product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                        </div>
                                        <div className="btn-icon-group">
                                             <a
                                                  href="#"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </a>
                                        </div>
                                        <a
                                             href="ajax/product-quick-view.html"
                                             className="btn-quickview"
                                             title="Quick View"
                                        >
                                             Quick View
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-wrap">
                                             <div className="category-list">
                                                  <a
                                                       href="demo11-shop.html"
                                                       className="product-category"
                                                  >
                                                       category
                                                  </a>
                                             </div>
                                             <a
                                                  href="wishlist.html"
                                                  title="Wishlist"
                                                  className="btn-icon-wish"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Brown Bag
                                             </a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                                        <div className="price-box">
                                             <span className="old-price">$90.00</span>
                                             <span className="product-price">$70.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-20.jpg"
                                                  width={380}
                                                  height={380}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-20-2.jpg"
                                                  width={380}
                                                  height={380}
                                                  alt="Product"
                                             />
                                        </a>
                                        <div className="btn-icon-group">
                                             <a
                                                  href="demo11-product.html"
                                                  className="btn-icon btn-add-cart"
                                             >
                                                  <i className="fa fa-arrow-right" />
                                             </a>
                                        </div>
                                        <a
                                             href="ajax/product-quick-view.html"
                                             className="btn-quickview"
                                             title="Quick View"
                                        >
                                             Quick View
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-wrap">
                                             <div className="category-list">
                                                  <a
                                                       href="demo11-shop.html"
                                                       className="product-category"
                                                  >
                                                       category
                                                  </a>
                                             </div>
                                             <a
                                                  href="wishlist.html"
                                                  title="Wishlist"
                                                  className="btn-icon-wish"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">Women Shoes</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                                        <div className="price-box">
                                             <span className="product-price">$60.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-21.jpg"
                                                  width={380}
                                                  height={380}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-21-2.jpg"
                                                  width={380}
                                                  height={380}
                                                  alt="Product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                        </div>
                                        <div className="btn-icon-group">
                                             <a
                                                  href="#"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </a>
                                        </div>
                                        <a
                                             href="ajax/product-quick-view.html"
                                             className="btn-quickview"
                                             title="Quick View"
                                        >
                                             Quick View
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-wrap">
                                             <div className="category-list">
                                                  <a
                                                       href="demo11-shop.html"
                                                       className="product-category"
                                                  >
                                                       category
                                                  </a>
                                             </div>
                                             <a
                                                  href="wishlist.html"
                                                  title="Wishlist"
                                                  className="btn-icon-wish"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">Women Dress</a>{" "}
                                        </h3>
                                        <div className="price-box">
                                             <span className="old-price">$75.00</span>
                                             <span className="product-price">$55.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
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
