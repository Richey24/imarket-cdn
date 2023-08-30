"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import slide1 from "../../../assets/images/demoes/demo13/slider/slide-1.jpg";
import slide2 from "../../../assets/images/demoes/demo13/slider/slide-2.jpg";
import banner1 from "../../../assets/images/demoes/demo13/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo13/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo13/banners/banner-3.jpg";
import banner4 from "../../../assets/images/demoes/demo13/banners/banner-4.jpg";
import product15two from "../../../assets/images/demoes/demo13/products/product-15-2.jpg";
import client1 from "../../../assets/images/clients/client-1.jpg";
import client2 from "../../../assets/images/clients/client-2.jpg";
import client3 from "../../../assets/images/clients/client-3.jpg";
import { MiniBanner } from "./components/MiniBanner";
import { InfoBoxesContainer } from "./components/Info";
import { Product } from "./components/Product";
import { featuredProducts, latestProducts, topRatedProducts } from "./data";
import { ProductWidget } from "./components/ProductWidget";
import { SidebarHome } from "./components/SidebarHome";
import { Banner } from "./components/Banner";
import { Skeleton, Stack } from "@chakra-ui/react";
import { PlaceholderLayout } from "@/app/components/PlaceholderLayout/PlaceholderLayout";
import { ProductPlaceholder } from "@/app/components/ProductPlaceholder/PlaceholderLayout";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

export const Home = (props: any) => {
     const [activeTab, setActiveTab] = useState("featured-products");
     const { static: statiProps, products, categories, featuredProducts } = props;
     const [latestProductsState, setLatestProducts] = useState<any>(null);
     const [featuredProductsState, setFeaturedProducts] = useState<any>(null);

     console.log("products", products, categories);
     useEffect(() => {
          if (products && !latestProductsState) {
               const latestProductsMap = products.map((product) => {
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
               setLatestProducts(latestProductsMap);
          }
          if (featuredProducts && !featuredProductsState) {
               const featuredProductsMap = featuredProducts.map((product) => {
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
     }, [products]);

     const handleTabChange = (tabId: string) => {
          setActiveTab(tabId);
     };

     return (
          <main className="main d-block">
               <div className="home-top-container mt-lg-2">
                    <div className="container">
                         <div className="row">
                              <Banner slides={statiProps?.banner ?? []} />
                              {/* End .col-lg-9 */}
                              <div className="col-lg-3 top-banners">
                                   <div className="row">
                                        {statiProps?.dealsBanner?.map(
                                             (banner: any, idx: number) => (
                                                  <div
                                                       key={idx}
                                                       className="col-md-4 col-lg-12"
                                                       style={{}}
                                                  >
                                                       <MiniBanner
                                                            src={
                                                                 banner?.imageUrl !== ""
                                                                      ? banner?.imageUrl
                                                                      : banner1
                                                            }
                                                            backgroundColor="#ccc"
                                                            title={
                                                                 banner?.text !== ""
                                                                      ? banner?.title
                                                                      : "HandBag"
                                                            }
                                                            subtitle={
                                                                 banner?.text !== ""
                                                                      ? banner?.text
                                                                      : "Starting from $99"
                                                            }
                                                       />
                                                  </div>
                                             ),
                                        )}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <InfoBoxesContainer />
               <div className="container">
                    <div className="row">
                         <div className="col-lg-9">
                              <div className="home-product-tabs">
                                   <ul className="nav nav-tabs mb-2" role="tablist">
                                        <li className="nav-item">
                                             <a
                                                  className={`nav-link ${
                                                       activeTab === "featured-products"
                                                            ? "active"
                                                            : ""
                                                  }`}
                                                  id="featured-products-tab"
                                                  onClick={() =>
                                                       handleTabChange("featured-products")
                                                  }
                                             >
                                                  Featured Products
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a
                                                  className={`nav-link ${
                                                       activeTab === "latest-products"
                                                            ? "active"
                                                            : ""
                                                  }`}
                                                  id="latest-products-tab"
                                                  onClick={() => handleTabChange("latest-products")}
                                             >
                                                  Latest Products
                                             </a>
                                        </li>
                                   </ul>
                                   <div>
                                        {activeTab === "featured-products" && (
                                             <div
                                                  className={`tab-pane fade ${
                                                       activeTab === "featured-products"
                                                            ? "show active"
                                                            : ""
                                                  }`}
                                                  id="featured-products"
                                             >
                                                  <div className="row">
                                                       {featuredProductsState &&
                                                            featuredProductsState
                                                                 .sort(
                                                                      (a: any, b: any) =>
                                                                           b.__last_update -
                                                                           a.__last_update,
                                                                 )
                                                                 .map((product, index) => (
                                                                      <Product
                                                                           key={`latest-product-${index}`}
                                                                           {...product}
                                                                      />
                                                                 ))}
                                                  </div>
                                             </div>
                                        )}

                                        {activeTab === "latest-products" && (
                                             <div
                                                  className={`tab-pane fade ${
                                                       activeTab === "latest-products"
                                                            ? "show active"
                                                            : ""
                                                  }`}
                                                  id="latest-products"
                                             >
                                                  {latestProductsState ? (
                                                       <div className="row">
                                                            {/* {products.map((product, index) => (
                                                                 <Product
                                                                      key={`latest-product-${index}`}
                                                                      {...product}
                                                                 />
                                                            ))} */}
                                                            {latestProductsState &&
                                                                 latestProductsState
                                                                      .sort(
                                                                           (a: any, b: any) =>
                                                                                b.__last_update -
                                                                                a.__last_update,
                                                                      )
                                                                      .map((product, index) => (
                                                                           <Product
                                                                                key={`latest-product-${index}`}
                                                                                {...product}
                                                                           />
                                                                      ))}
                                                       </div>
                                                  ) : (
                                                       <div
                                                            style={{
                                                                 display: "flex",
                                                                 alignItems: "flex-start",
                                                                 justifyContent: "space-between",
                                                                 flexWrap: "wrap",
                                                                 gap: 4,
                                                            }}
                                                       >
                                                            {[...Array(6)].map((_, key) => (
                                                                 <div
                                                                      style={{
                                                                           width: "29%",
                                                                           flex: 1,
                                                                      }}
                                                                      key={key}
                                                                 >
                                                                      <ProductPlaceholder />
                                                                 </div>
                                                            ))}
                                                       </div>
                                                  )}
                                             </div>
                                        )}
                                   </div>
                              </div>
                              {/* End .home-product-tabs */}
                              <div className="banners-group">
                                   <div className="row m-b-3">
                                        <div className="col-md-6 w-md-44 mb-2">
                                             <div
                                                  className="banner banner4 banner-md-vw-large"
                                                  style={{ backgroundColor: "#383b44" }}
                                             >
                                                  <figure>
                                                       <Image
                                                            src={banner4}
                                                            width={360}
                                                            height={196}
                                                            style={{ backgroundColor: "#555" }}
                                                            alt="banner"
                                                       />
                                                  </figure>
                                                  <div className="banner-layer banner-layer-middle banner-layer-space">
                                                       <h3 className="m-b-2 ls-n-20 text-uppercase">
                                                            Flash Sale
                                                       </h3>
                                                       <h5 className="m-b-2 ls-n-20 text-uppercase">
                                                            Cool Sunglasses
                                                       </h5>
                                                       <h4 className="m-b-3 ls-n-20 text-white">
                                                            <span>Only</span>
                                                            <sup>$</sup>199
                                                            <sup>99</sup>
                                                       </h4>
                                                       <a
                                                            href="#"
                                                            className="btn btn-md btn-light ls-10"
                                                       >
                                                            View Sale
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* End .col-md-6 */}
                                        <div className="col-md-6 w-md-55 mb-2">
                                             <div
                                                  className="banner banner5 banner-md-vw-large"
                                                  style={{
                                                       backgroundImage:
                                                            "url(../../../assets/images/demoes/demo13/banners/banner-5.jpg)",
                                                  }}
                                             >
                                                  <div className="banner-layer">
                                                       <h3 className="text-primary">
                                                            Exclusive Shoes
                                                       </h3>
                                                       <h4 className="text-primary">50% OFF</h4>
                                                       <a
                                                            href="#"
                                                            className="btn btn-md btn-dark ls-10"
                                                       >
                                                            View Sale
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* End .col-md-6 */}
                                   </div>
                                   {/* End .row */}
                              </div>
                              {/* End .banners-group */}
                              <div className="product-widgets">
                                   <div className="row">
                                        {/* product-1 */}
                                        <div className="col-lg-4 col-sm-6 pb-5">
                                             <h4 className="section-sub-title text-uppercase m-b-3">
                                                  Top Rated Products
                                             </h4>
                                             {topRatedProducts.map((product, index) => (
                                                  <ProductWidget
                                                       key={`product-${index}`}
                                                       {...product}
                                                  />
                                             ))}
                                        </div>
                                        {/* product-2 */}
                                        <div className="col-lg-4 col-sm-6 pb-5">
                                             <h4 className="section-sub-title text-uppercase m-b-3">
                                                  Best Selling Products
                                             </h4>
                                             {topRatedProducts.map((product, index) => (
                                                  <ProductWidget
                                                       key={`product-${index}`}
                                                       {...product}
                                                  />
                                             ))}
                                        </div>
                                        {/* product-3 */}
                                        <div className="col-lg-4 col-sm-6 pb-5">
                                             <h4 className="section-sub-title text-uppercase m-b-3">
                                                  Latest Products
                                             </h4>
                                             {latestProductsState &&
                                                  latestProductsState
                                                       .sort(
                                                            (a: any, b: any) =>
                                                                 b.__last_update - a.__last_update,
                                                       )
                                                       .filter((_, idx) => idx < 3)
                                                       .map((product, index) => (
                                                            <ProductWidget
                                                                 key={`product-${index}`}
                                                                 {...product}
                                                            />
                                                       ))}
                                        </div>
                                   </div>
                                   {/* End .row */}
                              </div>
                              {/* End .product-widgets */}
                         </div>
                         {/* End .col-lg-9 */}
                         <div className="sidebar-overlay" />
                         <div className="sidebar-toggle custom-sidebar-toggle">
                              <i className="fas fa-sliders-h" />
                         </div>
                         <SidebarHome categories={categories} />
                    </div>
               </div>
          </main>
     );
};
