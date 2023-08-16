import React, { useState } from "react";
import Slider from "react-slick";
import { featuredProducts, latestProducts } from "../data";

export const ProductTabs = () => {
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
                                             {featuredProducts.map((product) => (
                                                  <div className="product-default inner-quickview inner-icon quantity-input">
                                                       <figure>
                                                            <a href="demo14-product.html">
                                                                 <img
                                                                      src={product.productImageUrl}
                                                                      width={280}
                                                                      height={280}
                                                                      alt="product"
                                                                 />
                                                            </a>
                                                            <div className="label-group">
                                                                 <span className="product-label label-hot">
                                                                      HOT
                                                                 </span>
                                                                 <span className="product-label label-sale">
                                                                      -30%
                                                                 </span>
                                                            </div>
                                                            <div className="btn-icon-group">
                                                                 <a
                                                                      href="#"
                                                                      className="btn-icon btn-icon-wish"
                                                                 >
                                                                      <i className="icon-heart" />
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
                                                            <div className="category-list">
                                                                 <a
                                                                      href="demo14-shop.html"
                                                                      className="product-category"
                                                                 >
                                                                      headphone, trousers
                                                                 </a>
                                                            </div>
                                                            <h3 className="product-title">
                                                                 {" "}
                                                                 <a href="demo14-product.html">
                                                                      {product.productTitle}
                                                                 </a>{" "}
                                                            </h3>
                                                            {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                                                            {/* End .product-container */}
                                                            <div className="price-box">
                                                                 <span className="product-price">
                                                                      ${product.productPrice}
                                                                 </span>
                                                            </div>
                                                            {/* End .price-box */}
                                                            <div className="product-action">
                                                                 <a
                                                                      href="demo14-product.html"
                                                                      className="btn-icon btn-add-cart product-type-simple"
                                                                 >
                                                                      <i className="fa fa-arrow-right" />
                                                                      SELECT OPTIONS
                                                                 </a>
                                                            </div>
                                                       </div>
                                                       {/* End .product-details */}
                                                  </div>
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
                                             {latestProducts.map((product) => (
                                                  <div className="product-default inner-quickview inner-icon quantity-input">
                                                       <figure>
                                                            <a href="demo14-product.html">
                                                                 <img
                                                                      src={product.productImageUrl}
                                                                      width={280}
                                                                      height={280}
                                                                      alt="product"
                                                                 />
                                                            </a>
                                                            <div className="label-group">
                                                                 <span className="product-label label-hot">
                                                                      HOT
                                                                 </span>
                                                                 <span className="product-label label-sale">
                                                                      -30%
                                                                 </span>
                                                            </div>
                                                            <div className="btn-icon-group">
                                                                 <a
                                                                      href="#"
                                                                      className="btn-icon btn-icon-wish"
                                                                 >
                                                                      <i className="icon-heart" />
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
                                                            <div className="category-list">
                                                                 <a
                                                                      href="demo14-shop.html"
                                                                      className="product-category"
                                                                 >
                                                                      headphone, trousers
                                                                 </a>
                                                            </div>
                                                            <h3 className="product-title">
                                                                 {" "}
                                                                 <a href="demo14-product.html">
                                                                      {product.productTitle}
                                                                 </a>{" "}
                                                            </h3>
                                                            {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                                                            {/* End .product-container */}
                                                            <div className="price-box">
                                                                 <span className="product-price">
                                                                      ${product.productPrice}
                                                                 </span>
                                                            </div>
                                                            {/* End .price-box */}
                                                            <div className="product-action">
                                                                 <a
                                                                      href="demo14-product.html"
                                                                      className="btn-icon btn-add-cart product-type-simple"
                                                                 >
                                                                      <i className="fa fa-arrow-right" />
                                                                      SELECT OPTIONS
                                                                 </a>
                                                            </div>
                                                       </div>
                                                       {/* End .product-details */}
                                                  </div>
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
