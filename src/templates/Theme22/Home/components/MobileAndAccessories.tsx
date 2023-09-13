import React from "react";

import { templateImages } from "@/appProvider/templateImages";
export const MobileAndAccessories = () => {
     return (
          <section className="mobile-phones-container appear-animate">
               <div className="container">
                    <h2 className="section-title border-0 line-height-1 ls-n-10 m-b-4">
                         Mobile Phones &amp; Accessories
                    </h2>
                    <div className="row no-gutters m-0 bg-gray">
                         <div className="col-md-5 col-lg-2">
                              <div className="category-lists d-flex flex-md-column flex-wrap">
                                   <a href="#">Motors</a>
                                   <a href="#">Oneplus 6</a>
                                   <a href="#">Power Bank</a>
                                   <a href="#">Smart Watch</a>
                                   <a href="#">Type-c Cable</a>
                                   <a href="#">Xiaomi Mi A2</a>
                                   <a href="#">Xiaomi Mi Band 3</a>
                              </div>
                         </div>
                         <div className="col-md-7 col-lg-3 order-first order-md-0">
                              <div
                                   className="banner banner5 h-100"
                                   style={{ backgroundColor: "#f4f4f4" }}
                              >
                                   <figure className="h-100">
                                        <img
                                             className="h-100"
                                             src={templateImages.demo22.bannerImage.banner6}
                                             alt="baner"
                                             width={360}
                                             height={508}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-top">
                                        <h3 className="font1 text-center text-uppercase">
                                             Top Brands
                                             <br />
                                             Smartphones
                                        </h3>
                                        <div className="coupon-sale-text d-flex flex-column align-items-start">
                                             <h4 className="m-b-2 font1 d-block text-uppercase text-white bg-dark skew-box">
                                                  Starting From
                                             </h4>
                                             <h5 className="mb-0 font1 d-inline-block bg-dark skew-box">
                                                  <b className="text-white">$199</b>
                                             </h5>
                                        </div>
                                   </div>
                                   <div className="banner-layer banner-layer-bottom">
                                        <a
                                             href="demo22-shop.html"
                                             className="btn btn-primary"
                                             style={{ fontWeight: "bold" }}
                                        >
                                             View All Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-lg-7">
                              <div
                                   className="grid grid3"
                                   style={{ position: "relative", height: "521px" }}
                              >
                                   <div
                                        className="grid-item col-md-8 height-x1"
                                        style={{ position: "absolute", left: "0%", top: "0px" }}
                                   >
                                        <div className="product-default inner-quickview inner-icon">
                                             <figure>
                                                  <a href="demo22-product.html">
                                                       <img
                                                            src={
                                                                 templateImages.demo22.productImages
                                                                      .product12
                                                            }
                                                            width={217}
                                                            height={217}
                                                            alt="product"
                                                       />
                                                  </a>
                                                  <div className="label-group">
                                                       <div className="product-label label-sale">
                                                            -89%
                                                       </div>
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
                                                                 href="demo22-shop.html"
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
                                                       <a href="demo22-product.html">USB Speaker</a>
                                                  </h3>
                                                  {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                                  {/* End .product-container */}
                                                  <div className="price-box">
                                                       <span className="old-price">$596.00</span>
                                                       <span className="product-price">$68.00</span>
                                                  </div>
                                                  {/* End .price-box */}
                                             </div>
                                             {/* End .product-details */}
                                        </div>
                                   </div>
                                   <div
                                        className="grid-item col-6 col-md-4 height-x2"
                                        style={{
                                             position: "absolute",
                                             left: "66.6668%",
                                             top: "0px",
                                        }}
                                   >
                                        <div className="product-default inner-quickview inner-icon">
                                             <figure>
                                                  <a href="demo22-product.html">
                                                       <img
                                                            src={
                                                                 templateImages.demo22.productImages
                                                                      .product17
                                                            }
                                                            width={217}
                                                            height={217}
                                                            alt="product"
                                                       />
                                                  </a>
                                                  <div className="label-group">
                                                       <div className="product-label label-sale">
                                                            -89%
                                                       </div>
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
                                                                 href="demo22-shop.html"
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
                                                       <a href="demo22-product.html">
                                                            Classic Earphone
                                                       </a>
                                                  </h3>
                                                  {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                                  {/* End .product-container */}
                                                  <div className="price-box">
                                                       <span className="old-price">$596.00</span>
                                                       <span className="product-price">$68.00</span>
                                                  </div>
                                                  {/* End .price-box */}
                                             </div>
                                             {/* End .product-details */}
                                        </div>
                                   </div>
                                   <div
                                        className="grid-item col-6 col-md-4 height-x1"
                                        style={{ position: "absolute", left: "0%", top: "260px" }}
                                   >
                                        <div className="product-default inner-quickview inner-icon">
                                             <figure>
                                                  <a href="demo22-product.html">
                                                       <img
                                                            src={
                                                                 templateImages.demo22.productImages
                                                                      .product13
                                                            }
                                                            width={217}
                                                            height={217}
                                                            alt="product"
                                                       />
                                                  </a>
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
                                                                 href="demo22-shop.html"
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
                                                       <a href="demo22-product.html">
                                                            Casual Blue Shoes
                                                       </a>
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
                                                            $101.00 – $108.00
                                                       </span>
                                                  </div>
                                                  {/* End .price-box */}
                                             </div>
                                             {/* End .product-details */}
                                        </div>
                                   </div>
                                   <div
                                        className="grid-item col-6 col-md-4 height-x1"
                                        style={{
                                             position: "absolute",
                                             left: "33.3334%",
                                             top: "260px",
                                        }}
                                   >
                                        <div className="product-default inner-quickview inner-icon">
                                             <figure>
                                                  <a href="demo22-product.html">
                                                       <img
                                                            src={
                                                                 templateImages.demo22.productImages
                                                                      .product11
                                                            }
                                                            width={217}
                                                            height={217}
                                                            alt="product"
                                                       />
                                                  </a>
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
                                                                 href="demo22-shop.html"
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
                                                       <a href="demo22-product.html">
                                                            Blue Gentle Shoes
                                                       </a>
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
                                                            $101.00 – $111.00
                                                       </span>
                                                  </div>
                                                  {/* End .price-box */}
                                             </div>
                                             {/* End .product-details */}
                                        </div>
                                   </div>
                                   <div className="col-1 col-md-4 grid-col-sizer" />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
