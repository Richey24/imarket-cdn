import React, { useState } from "react";
import Slider from "react-slick";
import { Product } from "./Product";

export const ProductTabs = ({ featuredProducts, latestProducts }) => {
     const [activeTab, setActiveTab] = useState("featured-product");

     const handleTabChange = (tabId: string) => {
          setActiveTab(tabId);
     };
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <div
               className="home-product-tabs product-slider-tab pt-5 pt-md-0"
               style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
               <div className="container">
                    <ul className="nav nav-tabs" role="tablist">
                         <li className="nav-item">
                              <a
                                   className={`nav-link ${
                                        activeTab === "featured-product" ? "active" : ""
                                   }`}
                                   id="featured-product"
                                   onClick={() => handleTabChange("featured-product")}
                              >
                                   Featured Products
                              </a>
                         </li>
                         <li className="nav-item">
                              <a
                                   className={`nav-link ${
                                        activeTab === "latest-product" ? "active" : ""
                                   }`}
                                   id="latest-product"
                                   onClick={() => handleTabChange("latest-product")}
                              >
                                   Latest Products
                              </a>
                         </li>
                    </ul>

                    <div className="tab-content m-b-4">
                         {activeTab === "featured-product" && (
                              <div className="tab-pane fade show active">
                                   <div className="tab-products-carousel  owl-theme quantity-inputs show-nav-hover nav-outer nav-image-center">
                                        <Slider {...settings}>
                                             {" "}
                                             {featuredProducts
                                                  .sort(
                                                       (a: any, b: any) =>
                                                            b.__last_update - a.__last_update,
                                                  )
                                                  .map((product) => (
                                                       <Product {...product} />
                                                  ))}
                                        </Slider>
                                        {/* product 1 */}
                                   </div>
                                   {/* End .products-carousel */}
                              </div>
                         )}
                         {activeTab === "latest-product" && (
                              <div className="tab-pane fade show active">
                                   <div className="tab-products-carousel  owl-theme quantity-inputs show-nav-hover nav-outer nav-image-center">
                                        <Slider {...settings}>
                                             {" "}
                                             {latestProducts
                                                  .sort(
                                                       (a: any, b: any) =>
                                                            b.__last_update - a.__last_update,
                                                  )
                                                  .map((product) => (
                                                       <Product {...product} />
                                                  ))}
                                        </Slider>
                                        {/* product 1 */}
                                   </div>
                                   {/* End .products-carousel */}
                              </div>
                         )}
                    </div>
               </div>
          </div>
     );
};
