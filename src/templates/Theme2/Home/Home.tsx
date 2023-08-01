"use client";

import Image from "next/image";
import React, { useState } from "react";
import slide1 from "../../../assets/images/demoes/demo11/slider/slide-1.jpg";
import slide2 from "../../../assets/images/demoes/demo11/slider/slide-2.jpg";
import banner1 from "../../../assets/images/demoes/demo11/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo11/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo11/banners/banner-3.jpg";
import banner4 from "../../../assets/images/demoes/demo11/banners/banner-4.jpg";

import product15two from "../../../assets/images/demoes/demo11/products/product-15-2.jpg";
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

export const Home = () => {
     const [activeTab, setActiveTab] = useState("featured-products");

     const handleTabChange = (tabId: string) => {
          setActiveTab(tabId);
     };

     return (
          <main className="main">
               <div className="home-slider-container clearfix">
                    <div className="home-slider slide-animate owl-carousel owl-theme show-nav-hover">
                         <div className="home-slide home-slide1 d-flex align-items-center banner">
                              <img
                                   className="slide-bg"
                                   src="assets/images/demoes/demo11/slider/slide-1.jpg"
                                   width={1920}
                                   height={804}
                                   alt="banner"
                              />
                              {/* End .slide-bg */}
                              <div className="container">
                                   <div
                                        className="banner-layer banner-layer-right float-right appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                   >
                                        <h2>New Season Dresses</h2>
                                        <h3 className="text-uppercase rotated-upto-text mb-0">
                                             <small>Up to</small>50% off
                                        </h3>
                                        <hr className="divider-short-thick" />
                                        <h5 className="text-uppercase d-inline-block mb-0 ls-n-20">
                                             Starting at
                                             <span>
                                                  $<em>39</em>99
                                             </span>
                                        </h5>
                                        <a
                                             href="demo11-shop.html"
                                             className="btn btn-light btn-xl btn-icon-right"
                                             role="button"
                                        >
                                             Shop Now <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                   </div>
                                   {/* End .banner-layer */}
                              </div>
                         </div>
                         {/* End .home-slide */}
                         <div className="home-slide home-slide2 d-flex align-items-center banner">
                              <img
                                   className="slide-bg"
                                   src="assets/images/demoes/demo11/slider/slide-2.jpg"
                                   width={1920}
                                   height={804}
                                   alt="banner"
                              />
                              {/* End .slide-bg */}
                              <div className="container">
                                   <div
                                        className="banner-layer banner-layer-left float-left appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                   >
                                        <h2>New Season Hats</h2>
                                        <h3 className="text-uppercase rotated-upto-text mb-0">
                                             <small>Up to</small>20% off
                                        </h3>
                                        <hr className="divider-short-thick" />
                                        <h5 className="text-uppercase d-inline-block mb-0 ls-n-20">
                                             Starting at
                                             <span>
                                                  $<em>19</em>99
                                             </span>
                                        </h5>
                                        <a
                                             href="demo11-shop.html"
                                             className="btn btn-light btn-xl btn-icon-right"
                                             role="button"
                                        >
                                             Shop Now <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                   </div>
                                   {/* End .banner-layer */}
                              </div>
                         </div>
                         {/* End .home-slide */}
                    </div>
                    {/* End .home-slider */}
               </div>
               {/* End .home-slider-container */}
               <div
                    className="banners-container text-uppercase clear appear-animate"
                    data-animation-name="fadeIn"
               >
                    <div className="container">
                         <div className="row row-joined">
                              <div className="banner col-md-4">
                                   <div className="banner-content text-left">
                                        <h3 className="banner-title mb-0">Sunglasses</h3>
                                        <p>16 Products</p>
                                        <hr className="divider-short-thick" />
                                        <a href="demo11-shop.html" className="btn">
                                             Shop now <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                   </div>
                                   {/* End .banner-content */}
                                   <a href="#">
                                        <img
                                             src="assets/images/demoes/demo11/banners/banner-1.jpg"
                                             style={{ backgroundColor: "#efefef" }}
                                             alt="banner"
                                        />
                                   </a>
                              </div>
                              {/* End .banner */}
                              <div className="banner col-md-4">
                                   <div className="banner-content text-left">
                                        <h3 className="banner-title m-b-1">Woman Shoes</h3>
                                        <p>12 Products</p>
                                        <hr className="divider-short-thick" />
                                        <a href="demo11-shop.html" className="btn">
                                             Shop now <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                   </div>
                                   {/* End .banner-content */}
                                   <a href="#">
                                        <img
                                             src="assets/images/demoes/demo11/banners/banner-2.jpg"
                                             style={{ backgroundColor: "#efefef" }}
                                             alt="banner"
                                        />
                                   </a>
                              </div>
                              {/* End .banner */}
                              <div className="banner col-md-4">
                                   <div className="banner-content text-left">
                                        <h3 className="banner-title m-b-1">Woman Bags</h3>
                                        <p>38 Products</p>
                                        <hr className="divider-short-thick" />
                                        <a href="demo11-shop.html" className="btn">
                                             Shop now <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                   </div>
                                   {/* End .banner-content */}
                                   <a href="#">
                                        <img
                                             src="assets/images/demoes/demo11/banners/banner-3.jpg"
                                             style={{ backgroundColor: "#efefef" }}
                                             alt="banner"
                                        />
                                   </a>
                              </div>
                              {/* End .banner */}
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .banners-container */}
               <div className="container mb-5">
                    <div
                         className="info-boxes-container appear-animate"
                         data-animation-name="fadeIn"
                    >
                         <div className="row row-joined">
                              <div className="info-box info-box-icon-left col-lg-4">
                                   <i className="icon-shipping" />
                                   <div className="info-box-content">
                                        <h4>FREE SHIPPING &amp; RETURN</h4>
                                        <p>Free shipping on all orders over $99.</p>
                                   </div>
                                   {/* End .info-box-content */}
                              </div>
                              {/* End .info-box */}
                              <div className="info-box info-box-icon-left col-lg-4">
                                   <i className="icon-money" />
                                   <div className="info-box-content">
                                        <h4>MONEY BACK GUARANTEE</h4>
                                        <p>100% money back guarantee</p>
                                   </div>
                                   {/* End .info-box-content */}
                              </div>
                              {/* End .info-box */}
                              <div className="info-box info-box-icon-left col-lg-4">
                                   <i className="icon-support" />
                                   <div className="info-box-content">
                                        <h4>ONLINE SUPPORT 24/7</h4>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                   </div>
                                   {/* End .info-box-content */}
                              </div>
                              {/* End .info-box */}
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .info-boxes-container */}
               </div>
               {/* End .container */}
               <div className="container mb-4 mb-lg-6">
                    <h2
                         className="section-title text-center appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                    >
                         Featured Products
                    </h2>
                    <p
                         className="section-description text-center appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                    >
                         Amazing products added recently in our catalog
                    </p>
                    <div
                         className="row product-ajax-grid appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={400}
                    >
                         <div className="col-sm-3 col-6">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-15.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-15-2.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-sale">27%</div>
                                        </div>
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
                                             <a href="demo11-product.html">
                                                  Women Fashion-Black
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
                                             <span className="old-price">$90.00</span>
                                             <span className="product-price">$70.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         {/* End .col-md-3 */}
                         <div className="col-sm-3 col-6">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-16.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-16-2.jpg"
                                                  width={280}
                                                  height={280}
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
                                             <a href="demo11-product.html">Men Glasses</a>{" "}
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
                                             <span className="product-price">$60.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         {/* End .col-md-3 */}
                         <div className="col-sm-3 col-6">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-17.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-17-2.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-sale">27%</div>
                                        </div>
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
                                             <a href="demo11-product.html">Ray Ban 5228</a>{" "}
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
                                             <span className="old-price">$75.00</span>
                                             <span className="product-price">$55.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         {/* End .col-md-3 */}
                         <div className="col-sm-3 col-6">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-18.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/product-18-2.jpg"
                                                  width={280}
                                                  height={280}
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
                                                  Masrinna Ankle Fashion
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
                                             <span className="old-price">$60.00</span>
                                             <span className="product-price">$50.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         {/* End .col-md-3 */}
                    </div>
                    {/* End .row */}
                    <a
                         className="btn btn-dark btn-lg btn-center loadmore"
                         href="ajax/demo11-ajax-products.html"
                    >
                         Load More...
                    </a>
                    <hr className="mb-4 pb-1" />
                    <h2
                         className="section-title text-center appear-animate"
                         data-animation-name="fadeIn"
                         data-animation-delay={100}
                    >
                         Browse Categories
                    </h2>
                    <p
                         className="section-description text-center appear-animate"
                         data-animation-name="fadeIn"
                         data-animation-delay={100}
                    >
                         Amazing categories with only top fashion products
                    </p>
                    <div
                         className="owl-carousel owl-theme categories-slider content-center-bottom nav-outer appear-animate"
                         data-animation-name="fadeIn"
                         data-animation-delay={100}
                         data-owl-options="{
                    'nav': false,
                    'responsive': {
                        '0': {
                            'items': 1
                        },
                        '480': {
                            'items': 2
                        }
                    }
                }"
                    >
                         <div className="product-category">
                              <a href="demo11-shop.html">
                                   <figure>
                                        <img
                                             src="assets/images/demoes/demo11/categories/category-1.jpg"
                                             width={220}
                                             height={220}
                                             alt="Category"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Bags</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="product-category">
                              <a href="demo11-shop.html">
                                   <figure>
                                        <img
                                             src="assets/images/demoes/demo11/categories/category-2.jpg"
                                             width={220}
                                             height={220}
                                             alt="Category"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Hats</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="product-category">
                              <a href="demo11-shop.html">
                                   <figure>
                                        <img
                                             src="assets/images/demoes/demo11/categories/category-3.jpg"
                                             width={220}
                                             height={220}
                                             alt="Category"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Jackets</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="product-category">
                              <a href="demo11-shop.html">
                                   <figure>
                                        <img
                                             src="assets/images/demoes/demo11/categories/category-4.jpg"
                                             width={220}
                                             height={220}
                                             alt="Category"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Sunglasses</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="product-category">
                              <a href="demo11-shop.html">
                                   <figure>
                                        <img
                                             src="assets/images/demoes/demo11/categories/category-5.jpg"
                                             width={220}
                                             height={220}
                                             alt="Category"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Shoes</h3>
                                   </div>
                              </a>
                         </div>
                         <div className="product-category">
                              <a href="demo11-shop.html">
                                   <figure>
                                        <img
                                             src="assets/images/demoes/demo11/categories/category-1.jpg"
                                             width={220}
                                             height={220}
                                             alt="Category"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Bags</h3>
                                   </div>
                              </a>
                         </div>
                    </div>
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
                              className="m-b-1 appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              New Season Sale
                         </h2>
                         <h3
                              className="mb-1 appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={400}
                         >
                              40% OFF
                         </h3>
                         <hr
                              className="divider-short-thick appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={600}
                         />
                         <a
                              href="demo11-shop.html"
                              className="btn btn-light appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={800}
                         >
                              Shop Now <i className="fas fa-long-arrow-alt-right ml-2 pl-1" />
                         </a>
                    </div>
               </div>
               {/* End .promo-section */}
               <div
                    className="container mb-2 mb-lg-4 appear-animate"
                    data-animation-name="fadeIn"
                    data-animation-delay={100}
               >
                    <h2 className="section-title text-center">Top Rated Products</h2>
                    <p className="section-description text-center">
                         Only the top rated products added recently in our catalog
                    </p>
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
                                        <a href="demo11-product.html">Product Brown Bag</a>{" "}
                                   </h3>
                                   <div className="ratings-container">
                                        <div className="product-ratings">
                                             <span className="ratings" style={{ width: "100%" }} />
                                             {/* End .ratings */}
                                             <span className="tooltiptext tooltip-top" />
                                        </div>
                                        {/* End .product-ratings */}
                                   </div>
                                   {/* End .product-container */}
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
                                   <div className="ratings-container">
                                        <div className="product-ratings">
                                             <span className="ratings" style={{ width: "100%" }} />
                                             {/* End .ratings */}
                                             <span className="tooltiptext tooltip-top" />
                                        </div>
                                        {/* End .product-ratings */}
                                   </div>
                                   {/* End .product-container */}
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
                                   <div className="ratings-container">
                                        <div className="product-ratings">
                                             <span className="ratings" style={{ width: "100%" }} />
                                             {/* End .ratings */}
                                             <span className="tooltiptext tooltip-top" />
                                        </div>
                                        {/* End .product-ratings */}
                                   </div>
                                   {/* End .product-container */}
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
                              className="col-md-4 pb-5 pb-md-0 appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={200}
                         >
                              <h4 className="section-sub-title mb-2">Recently Added Products</h4>
                              <div className="product-default left-details product-widget">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-1.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-1-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Short Name
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
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default left-details product-widget">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-2-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Short Name
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
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default left-details product-widget">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-3.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-3-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Short Name
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
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div
                              className="col-md-4 pb-5 pb-md-0 appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={400}
                         >
                              <h4 className="section-sub-title mb-2">Best Selling Products</h4>
                              <div className="product-default left-details product-widget">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-4.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-4-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Short Name
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
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default left-details product-widget">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-5.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-5-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Short Name
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
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default left-details product-widget">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-6.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-6-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Short Name
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
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div
                              className="col-md-4 pb-5 pb-md-0 appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={600}
                         >
                              <h4 className="section-sub-title mb-2">Featured Products</h4>
                              <div className="product-default left-details product-widget">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-7.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-7-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Short Name
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
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default left-details product-widget">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-8.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-8-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Short Name
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
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default left-details product-widget">
                                   <figure>
                                        <a href="demo11-product.html">
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-9.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                             <img
                                                  src="assets/images/demoes/demo11/products/small/product-9-2.jpg"
                                                  width={68}
                                                  height={69}
                                                  alt="Product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo11-product.html">
                                                  Product Short Name
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
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                    </div>
                    {/* End .row */}
               </div>
               {/* End .container */}
               <div className="blog-section">
                    <div className="container text-center">
                         <h2
                              className="section-title text-center appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              FROM THE BLOG
                         </h2>
                         <p
                              className="section-description text-center mb-3 mb-lg-5 appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              Only the latest news from us, stay tuned.
                         </p>
                         <div
                              className="owl-carousel owl-theme mb-4 pb-2 text-left appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={500}
                              data-owl-options="{
						'loop': false,
						'margin': 20,
						'autoHeight': true,
						'autoplay': false,
                        'items': 2,
                        'dots': false,
						'responsive': {
                            '0': {
								'items': 1
							},
							'576': {
								'items': 2
							}
						}
					}"
                         >
                              <article className="post">
                                   <div className="post-media">
                                        <a href="single.html">
                                             <img
                                                  src="assets/images/demoes/demo11/blog/home/post-1.jpg"
                                                  alt="Post"
                                                  width={225}
                                                  height={280}
                                             />
                                        </a>
                                   </div>
                                   {/* End .post-media */}
                                   <div className="post-body">
                                        <h2 className="post-title">
                                             <a href="single.html">Fashion News</a>
                                        </h2>
                                        <div className="post-date">27-FEB-2018</div>
                                        {/* End .post-date */}
                                        <div className="post-content">
                                             <p>
                                                  Quisque elementum nibh at dolor pellentesque, a
                                                  eleifend libero...{" "}
                                             </p>
                                             <a href="single.html" className="read-more">
                                                  Read More
                                                  <i className="fas fa-long-arrow-alt-right ml-1" />
                                             </a>
                                        </div>
                                        {/* End .post-content */}
                                   </div>
                                   {/* End .post-body */}
                              </article>
                              {/* End .post */}
                              <article className="post">
                                   <div className="post-media">
                                        <a href="single.html">
                                             <img
                                                  src="assets/images/demoes/demo11/blog/home/post-2.jpg"
                                                  alt="Post"
                                                  width={225}
                                                  height={280}
                                             />
                                        </a>
                                   </div>
                                   {/* End .post-media */}
                                   <div className="post-body">
                                        <h2 className="post-title">
                                             <a href="single.html">Trends of Spring</a>
                                        </h2>
                                        <div className="post-date">27-FEB-2018</div>
                                        {/* End .post-date */}
                                        <div className="post-content">
                                             <p>
                                                  Quisque elementum nibh at dolor pellentesque, a
                                                  eleifend libero...{" "}
                                             </p>
                                             <a href="single.html" className="read-more">
                                                  Read More
                                                  <i className="fas fa-long-arrow-alt-right ml-1" />
                                             </a>
                                        </div>
                                        {/* End .post-content */}
                                   </div>
                                   {/* End .post-body */}
                              </article>
                              {/* End .post */}
                              <article className="post">
                                   <div className="post-media">
                                        <a href="single.html">
                                             <img
                                                  src="assets/images/demoes/demo11/blog/home/post-3.jpg"
                                                  alt="Post"
                                                  width={225}
                                                  height={280}
                                             />
                                        </a>
                                   </div>
                                   {/* End .post-media */}
                                   <div className="post-body">
                                        <h2 className="post-title">
                                             <a href="single.html">Women News</a>
                                        </h2>
                                        <div className="post-date">27-FEB-2018</div>
                                        {/* End .post-date */}
                                        <div className="post-content">
                                             <p>
                                                  Quisque elementum nibh at dolor pellentesque, a
                                                  eleifend libero...{" "}
                                             </p>
                                             <a href="single.html" className="read-more">
                                                  Read More
                                                  <i className="fas fa-long-arrow-alt-right ml-1" />
                                             </a>
                                        </div>
                                        {/* End .post-content */}
                                   </div>
                                   {/* End .post-body */}
                              </article>
                              {/* End .post */}
                         </div>
                         <a
                              className="btn btn-dark btn-lg appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={700}
                              href="blog.html"
                         >
                              Our Blog
                         </a>
                    </div>
                    {/* End .container */}
               </div>
               {/* End .blog-section */}
               <div
                    className="brands-section appear-animate"
                    data-animation-name="fadeIn"
                    data-animation-delay={400}
               >
                    <div className="container">
                         <div
                              className="brands-slider owl-carousel owl-theme images-center"
                              data-owl-options="{
                        'loop': false,
                        'margin': 0
                    }"
                         >
                              <img
                                   src="assets/images/brands/small/brand1.png"
                                   width={140}
                                   height={60}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand2.png"
                                   width={140}
                                   height={60}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand3.png"
                                   width={140}
                                   height={60}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand4.png"
                                   width={140}
                                   height={60}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand5.png"
                                   width={140}
                                   height={60}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand6.png"
                                   width={140}
                                   height={60}
                                   alt="brand"
                              />
                         </div>
                         {/* End .brands-slider */}
                    </div>
                    {/* End. container*/}
               </div>
               {/* End .brands-section */}
          </main>
     );
};
