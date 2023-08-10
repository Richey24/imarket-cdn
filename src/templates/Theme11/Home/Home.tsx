import React from "react";

import { FeaturedProducts } from "./components/FeaturedProducts";
import { MiniBanner } from "./components/MiniBanner";
import { NewProducts } from "./components/NewProducts";
import { SpecialOffer } from "./components/SpecialOffer";
import { Products } from "./components/Products/Products";

import { Banner } from "./components/Banner";
import { SmallBanner } from "./components/SmallBanner";
import { FeatureBoxes } from "./components/FeatureBoxes";
import { Card } from "./components/Card";

const Home = () => {
     return (
          <main className="main">
               <section className="intro-section">
                    <div
                         className="home-slider slide-animate owl-carousel owl-theme owl-carousel-lazy dot-inside"
                         data-owl-options="{
              'nav': false,
              'dots': true,
              'responsive': {
                  '576': {
                      'dots': false
                  }
              }
          }"
                    >
                         <div
                              className="home-slide banner"
                              style={{
                                   backgroundImage:
                                        'url("assets/images/demoes/demo21/slider/slide1.jpg")',
                              }}
                         >
                              <div className="banner-layer banner-layer-middle">
                                   <div className="container banner-content">
                                        <h2
                                             className="font1 font-weight-normal text-uppercase mb-0 appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={200}
                                        >
                                             start the revolution
                                        </h2>
                                        <h1
                                             className="font1 font-weight-bold text-uppercase appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={500}
                                        >
                                             drone pro 4
                                        </h1>
                                        <h2
                                             className="font1 font-weight-normal text-uppercase mb-3 appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={800}
                                        >
                                             from
                                             <strong>$499</strong>
                                        </h2>
                                        <a
                                             className="btn btn-dark btn-buy appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={1100}
                                             href="demo21-shop.html"
                                        >
                                             BUY NOW
                                        </a>
                                   </div>
                              </div>
                              {/* End .home-slide-content */}
                         </div>
                         {/* End .home-slide */}
                         <div
                              className="home-slide banner"
                              style={{
                                   backgroundImage:
                                        'url("assets/images/demoes/demo21/slider/slide2.jpg")',
                              }}
                         >
                              <div className="banner-layer banner-layer-middle">
                                   <div className="container banner-content">
                                        <h2
                                             className="font1 font-weight-normal text-uppercase mb-0 appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={200}
                                        >
                                             amazing deals
                                        </h2>
                                        <h1
                                             className="font1 font-weight-bold text-uppercase appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={500}
                                        >
                                             smartphone
                                        </h1>
                                        <h2
                                             className="font1 font-weight-normal text-uppercase mb-3 appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={800}
                                        >
                                             from
                                             <strong>$199</strong>
                                        </h2>
                                        <a
                                             className="btn btn-dark btn-buy appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={1100}
                                             href="demo21-shop.html"
                                        >
                                             BUY NOW
                                        </a>
                                   </div>
                              </div>
                              {/* End .home-slide-content */}
                         </div>
                         {/* End .home-slide */}
                         <div
                              className="home-slide banner"
                              style={{
                                   backgroundImage:
                                        'url("assets/images/demoes/demo21/slider/slide3.jpg")',
                              }}
                         >
                              <div className="banner-layer banner-layer-middle">
                                   <div className="container banner-content">
                                        <h2
                                             className="font1 font-weight-normal text-uppercase mb-0 appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={200}
                                        >
                                             best price of the year
                                        </h2>
                                        <h1
                                             className="font1 font-weight-bold text-uppercase appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={500}
                                        >
                                             top accessories
                                        </h1>
                                        <h2
                                             className="font1 font-weight-normal text-uppercase mb-3 appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={800}
                                        >
                                             from
                                             <strong>$19</strong>
                                        </h2>
                                        <a
                                             className="btn btn-dark btn-buy appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={1100}
                                             href="demo21-shop.html"
                                        >
                                             BUY NOW
                                        </a>
                                   </div>
                              </div>
                              {/* End .home-slide-content */}
                         </div>
                         {/* End .home-slide */}
                    </div>
                    <div className="home-slider-sidebar d-none d-sm-block">
                         <div className="container">
                              <ul>
                                   <li className="active">Drones</li>
                                   <li>Phones</li>
                                   <li>Accessories</li>
                              </ul>
                         </div>
                    </div>
               </section>
               <section
                    className="featured-products-section appear-animate"
                    data-animation-name="fadeIn"
                    data-animation-delay={200}
               >
                    <div className="container">
                         <h2 className="section-title ls-n-10 pb-3 m-b-4">Featured Products</h2>
                         <div className="row no-gutters">
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-1.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-1-2.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="label-group">
                                                  <div className="product-label label-hot">HOT</div>
                                             </div>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">
                                                       Digital Camera 16x
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "80%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
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
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-2.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">
                                                       Porto Extended Camera
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "0%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">$599.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-3.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-3-2.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="label-group">
                                                  <div className="product-label label-hot">HOT</div>
                                                  <div className="product-label label-sale">
                                                       -26%
                                                  </div>
                                             </div>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">
                                                       Black Grey Headset
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "80%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">
                                                       $29.00 – $39.00
                                                  </span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-4.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="label-group">
                                                  <div className="product-label label-hot">HOT</div>
                                                  <div className="product-label label-sale">
                                                       -13%
                                                  </div>
                                             </div>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="#"
                                                       title="Add To Cart"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">Battery Charger</a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "0%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="old-price">$299.00</span>
                                                  <span className="product-price">$259.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-5.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="#"
                                                       title="Add To Cart"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">Brown Bag</a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "0%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">$299.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-6.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="#"
                                                       title="Add To Cart"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">Casual Note Bag</a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "80%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">$299.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="cat-section bg-gray">
                    <div className="container">
                         <div
                              className="categories-slider owl-carousel owl-theme appear-animate"
                              data-owl-options="{
                  'nav': false,
                  'responsive': {
                      '992': {
                          'items': 4
                      },
                      '1200': {
                          'items': 6
                      }
                  }
              }"
                              data-animation-name="fadeIn"
                         >
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-fashion" />
                                             <h3>Fashion</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-electronics" />
                                             <h3>Electronics</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-gifts" />
                                             <h3>Gifts</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-garden" />
                                             <h3>Garden</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-music" />
                                             <h3>Music</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-motors" />
                                             <h3>Motors</h3>
                                        </div>
                                   </a>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="new-products-section">
                    <div className="container">
                         <div
                              className="row m-b-3 appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={300}
                         >
                              <div className="col-md-6">
                                   <div
                                        className="banner banner1"
                                        style={{ backgroundColor: "#f4f4f4" }}
                                   >
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo21/banners/banner-1.jpg"
                                                  alt="banner"
                                             />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle row justify-content-between align-items-center no-gutters">
                                             <div className="col-6 col-lg-4">
                                                  <h3 className="font1 text-uppercase ls-0 mb-0">
                                                       Action
                                                       <br />
                                                       Cameras
                                                  </h3>
                                             </div>
                                             <div className="col-6 col-lg-4 text-right text-lg-left">
                                                  <h4 className="font1 ls-n-10">
                                                       Starting From<b>$399</b>
                                                  </h4>
                                                  <a
                                                       href="demo21-shop.html"
                                                       className="btn btn-primary ls-n-25"
                                                  >
                                                       Shop Now
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md-6">
                                   <div
                                        className="banner banner2"
                                        style={{ backgroundColor: "#f4f4f4" }}
                                   >
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo21/banners/banner-2.jpg"
                                                  alt="banner"
                                             />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle row justify-content-between align-items-center no-gutters">
                                             <div className="col-6 col-lg-4 text-left text-lg-right">
                                                  <h4 className="font1 ls-n-10">
                                                       Starting From<b>$199</b>
                                                  </h4>
                                                  <a
                                                       href="demo21-shop.html"
                                                       className="btn btn-primary ls-n-25"
                                                  >
                                                       Shop Now
                                                  </a>
                                             </div>
                                             <div className="col-6 col-lg-4 text-right text-lg-left">
                                                  <h3 className="font1 text-uppercase ls-0 mb-0">
                                                       For All
                                                       <br />
                                                       Styles
                                                  </h3>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <h2
                              className="section-title ls-n-10 pb-3 m-b-4 appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={300}
                         >
                              New Arrivals
                         </h2>
                         <div
                              className="row no-gutters appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={300}
                         >
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-7.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">Computer Mouse</a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "80%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">$55.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-1.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-1-2.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="label-group">
                                                  <div className="product-label label-hot">HOT</div>
                                             </div>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">
                                                       Digital Camera 16x
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "80%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
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
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-2.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">
                                                       Porto Extended Camera
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "0%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">$599.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-8.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-8-2.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">Sports Shoes</a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "80%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
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
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-8-2.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-8.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">
                                                       Black Porto Men Shoes
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "80%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
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
                              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-9.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/demoes/demo21/products/product-9-2.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
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
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">
                                                       Casual Blue Shoes
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "100%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
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
                         </div>
                    </div>
               </section>
               <section
                    className="special-offer-section bg-gray appear-animate"
                    data-animation-name="fadeIn"
                    data-animation-delay={200}
               >
                    <div className="container">
                         <div className="row">
                              <div className="col-xl-4">
                                   <h3 className="subtitle font1 ls-0 mb-3">Special Offer</h3>
                                   <div
                                        className="banner banner3"
                                        style={{ backgroundColor: "#fff" }}
                                   >
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo21/banners/banner-3.jpg"
                                                  alt="banner"
                                                  width={450}
                                                  height={257}
                                             />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle banner-layer-left">
                                             <h3 className="font1 ls-0 m-b-2">Elec Deals</h3>
                                             <h4 className="font1 ls-n-10 m-b-3">
                                                  <del>$59.00</del>$49.00
                                             </h4>
                                             <a href="demo21-shop.html" className="btn btn-primary">
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-xl-8">
                                   <ul className="nav nav-tabs mb-3" role="tablist">
                                        <li className="nav-item">
                                             <a
                                                  className="nav-link active"
                                                  data-toggle="tab"
                                                  href="#best-sellers"
                                             >
                                                  Best Sellers
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a
                                                  className="nav-link"
                                                  data-toggle="tab"
                                                  href="#audio-speakers"
                                             >
                                                  Audio Speakers
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a
                                                  className="nav-link"
                                                  data-toggle="tab"
                                                  href="#cameras"
                                             >
                                                  Cameras
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a
                                                  className="nav-link"
                                                  data-toggle="tab"
                                                  href="#lamps"
                                             >
                                                  Lamps
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a
                                                  className="nav-link"
                                                  data-toggle="tab"
                                                  href="#computer"
                                             >
                                                  Computer
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a
                                                  className="nav-link"
                                                  data-toggle="tab"
                                                  href="#mobile-phones"
                                             >
                                                  Mobile Phones
                                             </a>
                                        </li>
                                   </ul>
                                   <div className="tab-content">
                                        <div
                                             className="tab-pane fade show active"
                                             id="best-sellers"
                                        >
                                             <div className="row no-gutters">
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-1.jpg"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Casual Note Bag
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $299.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2-2.jpg"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Blue Backpack
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $299.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-3.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <div className="product-label label-hot">
                                                                           HOT
                                                                      </div>
                                                                      <div className="product-label label-sale">
                                                                           -13%
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Battery Charger
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $299.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $259.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-4.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Computer Mouse
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $55.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="tab-pane fade" id="audio-speakers">
                                             <div className="row no-gutters">
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-5.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-5-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <div className="product-label label-hot">
                                                                           HOT
                                                                      </div>
                                                                      <div className="product-label label-sale">
                                                                           -26%
                                                                      </div>
                                                                 </div>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Black Grey Headset
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $29.00 – $39.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2-2.jpg"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Blue Backpack
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $299.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-3.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Computer Mouse
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $55.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-6.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-6-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <div className="product-label label-hot">
                                                                           HOT
                                                                      </div>
                                                                 </div>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Digital Camera 16x
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
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
                                             </div>
                                        </div>
                                        <div className="tab-pane fade" id="cameras">
                                             <div className="row no-gutters">
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-5.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-5-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <div className="product-label label-hot">
                                                                           HOT
                                                                      </div>
                                                                      <div className="product-label label-sale">
                                                                           -26%
                                                                      </div>
                                                                 </div>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Black Grey Headset
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $29.00 – $39.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2-2.jpg"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Blue Backpack
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $299.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-6.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-6-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <div className="product-label label-hot">
                                                                           HOT
                                                                      </div>
                                                                 </div>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Digital Camera 16x
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
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
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-7.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Porto Extended
                                                                                Camera
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $599.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="tab-pane fade" id="lamps">
                                             <div className="row no-gutters">
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-8.jpg"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Brown Bag
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $299.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-9.jpg"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Casual Note Bag
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $299.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-10.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Laptop Case Bag
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $1,999.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="tab-pane fade" id="computer">
                                             <div className="row no-gutters">
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-11.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <div className="product-label label-sale">
                                                                           -50%
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
                                                                 <div className="product-countdown-container">
                                                                      <span className="product-countdown-title">
                                                                           offer ends in:
                                                                      </span>
                                                                      <div
                                                                           className="product-countdown countdown-compact"
                                                                           data-until="2021, 10, 5"
                                                                           data-compact="true"
                                                                      ></div>
                                                                      {/* End .product-countdown */}
                                                                 </div>
                                                                 {/* End .product-countdown-container */}
                                                            </figure>
                                                            <div className="product-details">
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                1080p Wifi Ip Camera
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $596.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $299.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-4.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <div className="product-label label-hot">
                                                                           HOT
                                                                      </div>
                                                                      <div className="product-label label-sale">
                                                                           -13%
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Battery Charger
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $299.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $259.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-5.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-5-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <div className="product-label label-hot">
                                                                           HOT
                                                                      </div>
                                                                      <div className="product-label label-sale">
                                                                           -26%
                                                                      </div>
                                                                 </div>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Black Grey Headset
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $29.00 – $39.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2-2.jpg"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Blue Backpack
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $299.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="tab-pane fade" id="mobile-phones">
                                             <div className="row no-gutters">
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-2-2.jpg"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Blue Backpack
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $299.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-12.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-12-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Black Porto Men
                                                                                Shoes
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
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
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-13.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-13-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Sports Shoes
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
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
                                                  <div className="col-6 col-sm-4 col-lg-3">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo21-product.html">
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-14.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                      <img
                                                                           src="assets/images/demoes/demo21/products/special/product-14-2.jpg"
                                                                           width={217}
                                                                           height={217}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="btn-icon-group">
                                                                      <a
                                                                           href="#"
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
                                                                 <div className="title-wrap">
                                                                      <h3 className="product-title">
                                                                           <a href="demo21-product.html">
                                                                                Casual Blue Shoes
                                                                           </a>
                                                                      </h3>
                                                                      <a
                                                                           href="wishlist.html"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-heart" />
                                                                      </a>
                                                                 </div>
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
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="cat-banners-section">
                    <div className="container">
                         <div className="row">
                              <div className="col-sm-6 col-xl-3">
                                   <div
                                        className="cat-banner appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={800}
                                   >
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo21/products/categories/cat-1.jpg"
                                                  alt="category"
                                                  width={107}
                                                  height={107}
                                             />
                                        </figure>
                                        <div className="cat-content">
                                             <h3 className="mb-1">
                                                  Top Sharp
                                                  <br />
                                                  Knives
                                             </h3>
                                             <a href="demo21-shop.html" className="btn btn-dark">
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                   <div
                                        className="cat-banner appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={600}
                                   >
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo21/products/categories/cat-2.jpg"
                                                  alt="category"
                                                  width={107}
                                                  height={107}
                                             />
                                        </figure>
                                        <div className="cat-content">
                                             <h3 className="mb-1">
                                                  HD Vision
                                                  <br />
                                                  Web Cameras
                                             </h3>
                                             <a href="demo21-shop.html" className="btn btn-dark">
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                   <div
                                        className="cat-banner appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={400}
                                   >
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo21/products/categories/cat-3.jpg"
                                                  alt="category"
                                                  width={107}
                                                  height={107}
                                             />
                                        </figure>
                                        <div className="cat-content">
                                             <h3 className="mb-1">
                                                  Mobiles And
                                                  <br />
                                                  Tablets
                                             </h3>
                                             <a href="demo21-shop.html" className="btn btn-dark">
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-sm-6 col-xl-3">
                                   <div
                                        className="cat-banner appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={200}
                                   >
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo21/products/categories/cat-4.jpg"
                                                  alt="category"
                                                  width={107}
                                                  height={107}
                                             />
                                        </figure>
                                        <div className="cat-content">
                                             <h3 className="mb-1">
                                                  Smart
                                                  <br />
                                                  Watches
                                             </h3>
                                             <a href="demo21-shop.html" className="btn btn-dark">
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <div className="feature-boxes-container bg-gray">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-4">
                                   <div
                                        className="feature-box feature-box-simple text-center mb-2 appear-animate"
                                        data-animation-name="fadeInRightShorter"
                                        data-animation-delay={200}
                                   >
                                        <div className="feature-box-icon">
                                             <i className="icon-shipping" />
                                        </div>
                                        <div className="feature-box-content p-0">
                                             <h3 className="font1 ls-n-10">
                                                  Free Shipping &amp; Returns
                                             </h3>
                                             <h5 className="font1 m-b-3">All Orders Over $99</h5>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Duis nec vestibulum magna, et dapibus.
                                             </p>
                                        </div>
                                        {/* End .feature-box-content */}
                                   </div>
                                   {/* End .feature-box */}
                              </div>
                              {/* End .col-md-4 */}
                              <div className="col-md-4">
                                   <div
                                        className="feature-box feature-box-simple text-center mb-2 appear-animate"
                                        data-animation-name="fadeInRightShorter"
                                        data-animation-delay={400}
                                   >
                                        <div className="feature-box-icon">
                                             <i className="icon-money" />
                                        </div>
                                        <div className="feature-box-content p-0">
                                             <h3 className="font1 ls-n-10">Money Back Guarantee</h3>
                                             <h5 className="font1 m-b-3">Safe &amp; Fast</h5>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Duis nec vestibulum magna, et dapibus.
                                             </p>
                                        </div>
                                        {/* End .feature-box-content */}
                                   </div>
                                   {/* End .feature-box */}
                              </div>
                              {/* End .col-md-4 */}
                              <div className="col-md-4">
                                   <div
                                        className="feature-box feature-box-simple text-center mb-2 appear-animate"
                                        data-animation-name="fadeInRightShorter"
                                        data-animation-delay={600}
                                   >
                                        <div className="feature-box-icon">
                                             <i className="icon-support" />
                                        </div>
                                        <div className="feature-box-content p-0">
                                             <h3 className="font1 ls-n-10">Online Support</h3>
                                             <h5 className="font1 m-b-3">Need Assistence?</h5>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Duis nec vestibulum magna, et dapibus.
                                             </p>
                                        </div>
                                        {/* End .feature-box-content */}
                                   </div>
                                   {/* End .feature-box */}
                              </div>
                              {/* End .col-md-4 */}
                         </div>
                         {/* End .row */}
                    </div>
               </div>
               <div
                    className="product-widgets-container lg-images appear-animate mb-0"
                    data-animation-name="fadeIn"
                    data-animation-delay={200}
               >
                    <div className="container">
                         <div className="row">
                              <div className="col-md-6 col-lg-3">
                                   <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">
                                        Top Rated Products
                                   </h4>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-1.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-1-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       Casual Blue Shoes
                                                  </a>{" "}
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "100%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
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
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       1080p Wifi IP Camera
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "100%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top">
                                                            5.00
                                                       </span>
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="old-price">$596.00</span>
                                                  <span className="product-price">$299.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-3.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-3-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       Blue BackPack
                                                  </a>{" "}
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "100%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">$299.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div className="col-md-6 col-lg-3">
                                   <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">
                                        Top Selling Products
                                   </h4>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-4.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       Casual Note Bag
                                                  </a>{" "}
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "80%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">$299.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-3.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-3-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       Blue BackPack
                                                  </a>{" "}
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "100%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top">
                                                            5.00
                                                       </span>
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">$299.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-5.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       Battery Charger
                                                  </a>{" "}
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "0%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="old-price">$299.00</span>
                                                  <span className="product-price">$259.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div className="col-md-6 col-lg-3">
                                   <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">
                                        On Sale Products
                                   </h4>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-6.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       Black Grey Headset
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "80%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="product-price">
                                                       $29.00 – $39.00
                                                  </span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-5.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       Battery Charger
                                                  </a>{" "}
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "0%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="old-price">$299.00</span>
                                                  <span className="product-price">$259.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/small/product-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       1080p Wifi IP Camera
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "100%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top">
                                                            5.00
                                                       </span>
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="old-price">$596.00</span>
                                                  <span className="product-price">$299.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div className="col-md-6 col-lg-3">
                                   <div className="product-default count-down">
                                        <h3 className="product-name">Flash Deals</h3>
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src="assets/images/demoes/demo21/products/featured-sale.jpg"
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="label-group">
                                                  <span className="product-label label-primary">
                                                       SALE
                                                  </span>
                                                  <span className="product-label label-dark">
                                                       -50%
                                                  </span>
                                             </div>
                                             <div className="product-countdown-container">
                                                  <span className="product-countdown-title">
                                                       offer ends in:
                                                  </span>
                                                  <div
                                                       className="product-countdown countdown-compact"
                                                       data-until="2021, 10, 5"
                                                       data-compact="true"
                                                  ></div>
                                                  {/* End .product-countdown */}
                                             </div>
                                             {/* End .product-countdown-container */}
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">
                                                       1080p Wifi IP Camera
                                                  </a>
                                             </h3>
                                             <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span
                                                            className="ratings"
                                                            style={{ width: "100%" }}
                                                       />
                                                       {/* End .ratings */}
                                                       <span className="tooltiptext tooltip-top" />
                                                  </div>
                                                  {/* End .product-ratings */}
                                             </div>
                                             {/* End .product-container */}
                                             <div className="price-box">
                                                  <span className="old-price">$596.00</span>
                                                  <span className="product-price">$299.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <section className="brands-section">
                    <div className="container">
                         <h2
                              className="section-title ls-n-10 pb-3 mb-5 appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                              data-animation-duration={400}
                         >
                              Top Brands
                         </h2>
                         <div
                              className="brands-slider owl-carousel owl-theme images-center appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={400}
                              data-owl-options="{
                  'margin': 30,
                  'responsive': {
                      '991': {
                          'items': 4
                      },
                      '1200': {
                          'items': 5
                      }
                  }
              }"
                         >
                              <img
                                   src="assets/images/demoes/demo21/brands/brand1.png"
                                   width={200}
                                   height={50}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/demoes/demo21/brands/brand2.png"
                                   width={200}
                                   height={50}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/demoes/demo21/brands/brand3.png"
                                   width={200}
                                   height={50}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/demoes/demo21/brands/brand4.png"
                                   width={200}
                                   height={50}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/demoes/demo21/brands/brand5.png"
                                   width={200}
                                   height={50}
                                   alt="brand"
                              />
                         </div>
                         {/* End .brands-slider */}
                    </div>
               </section>
          </main>
     );
};

export default Home;
