"use client";

import Image from "next/image";
import React from "react";
import slide1 from "../../../assets/images/demoes/demo13/slider/slide-1.jpg";
import slide2 from "../../../assets/images/demoes/demo13/slider/slide-2.jpg";
import banner1 from "../../../assets/images/demoes/demo13/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo13/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo13/banners/banner-3.jpg";
import banner4 from "../../../assets/images/demoes/demo13/banners/banner-4.jpg";
import banner5 from "../../../assets/images/demoes/demo13/banners/banner-5.jpg";

import product5 from "../../../assets/images/demoes/demo13/products/product-5.jpg";
import product5two from "../../../assets/images/demoes/demo13/products/product-5-2.jpg";
import product1 from "../../../assets/images/demoes/demo13/products/product-1.jpg";
import product1two from "../../../assets/images/demoes/demo13/products/product-1-2.jpg";
import product2 from "../../../assets/images/demoes/demo13/products/product-2.jpg";
import product2two from "../../../assets/images/demoes/demo13/products/product-2-2.jpg";
import product3 from "../../../assets/images/demoes/demo13/products/product-3.jpg";
import product3two from "../../../assets/images/demoes/demo13/products/product-3-2.jpg";
import product4 from "../../../assets/images/demoes/demo13/products/product-4.jpg";
import product4two from "../../../assets/images/demoes/demo13/products/product-4-2.jpg";
import product6 from "../../../assets/images/demoes/demo13/products/product-6.jpg";
import product6two from "../../../assets/images/demoes/demo13/products/product-6-2.jpg";
import product7 from "../../../assets/images/demoes/demo13/products/product-7.jpg";
import product7two from "../../../assets/images/demoes/demo13/products/product-7-2.jpg";
import product8 from "../../../assets/images/demoes/demo13/products/product-8.jpg";
import product8two from "../../../assets/images/demoes/demo13/products/product-8-2.jpg";
import product9 from "../../../assets/images/demoes/demo13/products/product-9.jpg";
import product9two from "../../../assets/images/demoes/demo13/products/product-9-2.jpg";
import product10 from "../../../assets/images/demoes/demo13/products/product-10.jpg";
import product10two from "../../../assets/images/demoes/demo13/products/product-10-2.jpg";
import product11 from "../../../assets/images/demoes/demo13/products/product-11.jpg";
import product11two from "../../../assets/images/demoes/demo13/products/product-11-2.jpg";
import product12 from "../../../assets/images/demoes/demo13/products/product-12.jpg";
import product12two from "../../../assets/images/demoes/demo13/products/product-12-2.jpg";
import product13 from "../../../assets/images/demoes/demo13/products/product-13.jpg";
import product13two from "../../../assets/images/demoes/demo13/products/product-13-2.jpg";
import product14 from "../../../assets/images/demoes/demo13/products/product-14.jpg";
import product14two from "../../../assets/images/demoes/demo13/products/product-14-2.jpg";
import post3 from "../../../assets/images/demoes/demo13/blog/home/post-3.jpg";
import post1 from "../../../assets/images/demoes/demo13/blog/home/post-1.jpg";
import post2 from "../../../assets/images/demoes/demo13/blog/home/post-2.jpg";

import product15two from "../../../assets/images/demoes/demo13/products/product-15-2.jpg";
import client1 from "../../../assets/images/clients/client-1.jpg";
import client2 from "../../../assets/images/clients/client-2.jpg";
import client3 from "../../../assets/images/clients/client-3.jpg";

export const Home = () => {
     return (
          <main className="main">
               <div className="home-top-container mt-lg-2">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-9 col-md-12 mb-2">
                                   <div
                                        className="home-slider owl-carousel owl-theme owl-carousel-lazy h-100 slide-animate"
                                        data-owl-options="{
								'dots': true,
								'nav': false,
								'loop': false
							}"
                                   >
                                        <div className="home-slide home-slide1 banner banner-md-vw h-100">
                                             <figure>
                                                  <Image
                                                       className="slide-bg"
                                                       src={slide1}
                                                       style={{ backgroundColor: "#555" }}
                                                       alt="slider image"
                                                       width={835}
                                                       height={445}
                                                  />
                                             </figure>
                                             <div className="banner-layer banner-layer-middle intro-banner">
                                                  <div
                                                       className="appear-animate"
                                                       data-animation-name="fadeInLeftShorter"
                                                       data-animation-delay={200}
                                                  >
                                                       <h4 className="text-white">
                                                            Find the Boundaries. Push Through!
                                                       </h4>
                                                       <h2 className="text-white m-b-1">
                                                            Summer Sale
                                                       </h2>
                                                       <h3 className="text-white text-uppercase m-b-3">
                                                            70% Off
                                                       </h3>
                                                       <h5 className="text-white text-uppercase d-inline-block mb-1 pb-1 ls-n-20 align-text-bottom">
                                                            Starting At
                                                            <b className="coupon-sale-text bg-secondary text-white d-inline-block">
                                                                 $<em>199</em>99
                                                            </b>
                                                       </h5>
                                                       <a
                                                            href="demo13-shop.html"
                                                            className="btn btn-dark btn-md ls-10 align-bottom"
                                                       >
                                                            Shop Now!
                                                       </a>
                                                  </div>
                                             </div>
                                             {/* End .banner-layer */}
                                        </div>
                                        {/* End .home-slide */}
                                        <div className="home-slide home-slide2 banner banner-md-vw h-100">
                                             <figure>
                                                  <Image
                                                       className="slide-bg"
                                                       src={slide2}
                                                       style={{
                                                            backgroundColor: "rgb(216, 41, 41)",
                                                       }}
                                                       alt="slider image"
                                                       width={833}
                                                       height={445}
                                                  />
                                             </figure>
                                             <div className="banner-layer banner-layer-middle text-uppercase">
                                                  <div
                                                       className="appear-animate"
                                                       data-animation-name="fadeInLeftShorter"
                                                       data-animation-delay={200}
                                                  >
                                                       <h4 className="text-white m-b-2">
                                                            Over 200 products with discounts
                                                       </h4>
                                                       <h2 className="text-white m-b-3">
                                                            Great Deals
                                                       </h2>
                                                       <h5 className="text-white d-inline-block mb-0 align-top mr-4 pt-2">
                                                            Starting At
                                                            <b className="ml-2 mr-3">
                                                                 $<em>299</em>99
                                                            </b>
                                                       </h5>
                                                       <a
                                                            href="demo13-shop.html"
                                                            className="btn btn-primary btn-md ls-10"
                                                       >
                                                            Get Yours!
                                                       </a>
                                                  </div>
                                             </div>
                                             {/* End .banner-layer */}
                                        </div>
                                        {/* End .home-slide */}
                                   </div>
                                   {/* End .home-slider */}
                              </div>
                              {/* End .col-lg-9 */}
                              <div className="col-lg-3 top-banners">
                                   <div className="row">
                                        <div className="col-md-4 col-lg-12">
                                             <div className="banner banner1 banner-md-vw-large banner-sm-vw-large mb-2">
                                                  <figure>
                                                       <Image
                                                            src={banner1}
                                                            style={{ backgroundColor: "#ccc" }}
                                                            alt="banner"
                                                            width={264}
                                                            height={133}
                                                       />
                                                  </figure>
                                                  <div className="banner-layer banner-layer-middle text-right">
                                                       <h3 className="m-b-2">Handbags</h3>
                                                       <h4 className="text-secondary text-uppercase">
                                                            Starting at $99
                                                       </h4>
                                                       <a
                                                            href="demo13-shop.html"
                                                            className="text-dark text-uppercase ls-10 py-1"
                                                       >
                                                            Shop Now
                                                       </a>
                                                  </div>
                                             </div>
                                             {/* End .banner */}
                                        </div>
                                        <div className="col-md-4 col-lg-12">
                                             <div className="banner banner2 banner-md-vw-large banner-sm-vw-large text-uppercase mb-2">
                                                  <figure>
                                                       <Image
                                                            src={banner2}
                                                            style={{ backgroundColor: "#fff" }}
                                                            alt="banner"
                                                            width={264}
                                                            height={133}
                                                       />
                                                  </figure>
                                                  <div className="banner-layer banner-layer-middle text-center">
                                                       <h3 className="m-b-1 text-primary">
                                                            Deal Promos
                                                       </h3>
                                                       <h4 className="mb-1 pb-1 text-body">
                                                            Starting at $99
                                                       </h4>
                                                       <a
                                                            href="demo13-shop.html"
                                                            className="text-dark ls-10 pb-1"
                                                       >
                                                            Shop Now
                                                       </a>
                                                  </div>
                                             </div>
                                             {/* End .banner */}
                                        </div>
                                        <div className="col-md-4 col-lg-12">
                                             <div className="banner banner3 banner-md-vw-large banner-sm-vw-large mb-2">
                                                  <figure>
                                                       <Image
                                                            src={banner3}
                                                            style={{ backgroundColor: "#b8c1d0" }}
                                                            alt="banner"
                                                            width={264}
                                                            height={133}
                                                       />
                                                  </figure>
                                                  <div className="banner-layer banner-layer-middle">
                                                       <h3 className="m-b-2">Black Jackets</h3>
                                                       <h4 className="text-white text-uppercase">
                                                            Starting at $99
                                                       </h4>
                                                       <a
                                                            href="demo13-shop.html"
                                                            className="text-dark text-uppercase ls-10 pb-1"
                                                       >
                                                            Shop Now
                                                       </a>
                                                  </div>
                                             </div>
                                             {/* End .banner */}
                                        </div>
                                   </div>
                              </div>
                              {/* End .col-lg-3 */}
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .home-top-container */}
               <div className="info-boxes-container bg-dark2 mb-4">
                    <div className="container">
                         <div
                              className="info-boxes-slider owl-carousel owl-theme"
                              data-owl-options="{
						'dots': false,
						'margin': 20,
						'loop': false,
						'responsive': {
							'576': {
								'items': 2
							},
							'992': {
								'items': 3
							}
						}
					}"
                         >
                              <div className="info-box text-white info-box-icon-left">
                                   <i className="icon-shipping" />
                                   <div className="info-box-content pt-1">
                                        <h4>FREE SHIPPING &amp; RETURN</h4>
                                        <p>Free Shipping on All Orders Over $99.</p>
                                   </div>
                                   {/* End .info-box-content */}
                              </div>
                              {/* End .info-box */}
                              <div className="info-box text-white info-box-icon-left">
                                   <i className="icon-money" />
                                   <div className="info-box-content pt-1">
                                        <h4>MONEY BACK GUARANTEE</h4>
                                        <p>100% Money Back Guarantee</p>
                                   </div>
                                   {/* End .info-box-content */}
                              </div>
                              {/* End .info-box */}
                              <div className="info-box text-white info-box-icon-left">
                                   <i className="icon-support" />
                                   <div className="info-box-content pt-1">
                                        <h4>ONLINE SUPPORT 24/7</h4>
                                        <p>Lorem Ipsum Dolor Sit Amet.</p>
                                   </div>
                                   {/* End .info-box-content */}
                              </div>
                              {/* End .info-box */}
                         </div>
                         {/* End .info-boxes-slider */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .info-boxes-container */}
               <div className="container">
                    <div className="row">
                         <div className="col-lg-9">
                              <div className="home-product-tabs">
                                   <ul className="nav nav-tabs mb-2" role="tablist">
                                        <li className="nav-item">
                                             <a
                                                  className="nav-link active"
                                                  id="featured-products-tab"
                                                  data-toggle="tab"
                                                  href="#featured-products"
                                                  role="tab"
                                                  aria-controls="featured-products"
                                                  aria-selected="true"
                                             >
                                                  Featured Products
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a
                                                  className="nav-link"
                                                  id="latest-products-tab"
                                                  data-toggle="tab"
                                                  href="#latest-products"
                                                  role="tab"
                                                  aria-controls="latest-products"
                                                  aria-selected="false"
                                             >
                                                  Latest Products
                                             </a>
                                        </li>
                                   </ul>
                                   <div
                                        className="tab-content appear-animate"
                                        data-animation-name="fadeIn"
                                        data-animation-delay={200}
                                   >
                                        <div
                                             className="tab-pane fade show active"
                                             id="featured-products"
                                             role="tabpanel"
                                             aria-labelledby="featured-products-tab"
                                        >
                                             <div className="row">
                                                  {/* product-1 */}
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product5}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                      <Image
                                                                           src={product5two}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-sale">
                                                                           -30%
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                SHOES, TOYS
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Men Gentle Shoes
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $269.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  {/* product-2 */}
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product1}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                      <Image
                                                                           src={product1two}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-hot">
                                                                           HOT
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                CAPS, DRESS
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Porto Gray Cap
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "0%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $29.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  {/* product-3 */}
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product8}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                      <Image
                                                                           src={product8two}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-sale">
                                                                           -20%
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                CAPS, T-SHIRTS
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Porto White Cap
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "0%",
                                                                                }}
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
                                                                      <span className="product-price">
                                                                           $101.00 – $108.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  {/* product-4 */}
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product11}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                      <Image
                                                                           src={product11two}
                                                                           width={300}
                                                                           height={300}
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                DRESS, T-SHIRTS
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Winter Towel
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "0%",
                                                                                }}
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
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  {/* product-5 */}
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product9}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                      <Image
                                                                           src={product9two}
                                                                           width={300}
                                                                           height={300}
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                DRESS, HEADPHONE
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Extended
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $39.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  {/* product-6 */}
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product10}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                      <Image
                                                                           src={product10two}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-hot">
                                                                           HOT
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                SHOES, TOYS
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Sports Shoes
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "0%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="product-price">
                                                                           $239.00 – $259.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  {/* product-7 */}
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product14}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                      <Image
                                                                           src={product14two}
                                                                           width={300}
                                                                           height={300}
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                TOYS, TROUSERS
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Women Bag
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
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
                                                  {/* product-8 */}
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product4}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                      <Image
                                                                           src={product4two}
                                                                           width={300}
                                                                           height={300}
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                HEADPHONE, WATCHES
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Men Black Belts
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "0%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
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
                                                  {/* product-9 */}
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product12}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                      <Image
                                                                           src={product12two}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-hot">
                                                                           HOT
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                DRESS, WATCHES
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Women Bag
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "0%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <del className="old-price">
                                                                           $299.00
                                                                      </del>
                                                                      <span className="product-price">
                                                                           $199.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* End .tab-pane */}
                                        <div
                                             className="tab-pane fade"
                                             id="latest-products"
                                             role="tabpanel"
                                             aria-labelledby="latest-products-tab"
                                        >
                                             <div className="row">
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product1}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-sale">
                                                                           -30%
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                category
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Short Name
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
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
                                                                      <span className="old-price">
                                                                           $59.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product2}
                                                                           width={300}
                                                                           height={300}
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                category
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Short Name
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $59.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product3}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-hot">
                                                                           HOT
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                category
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Short Name
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $59.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product4}
                                                                           width={300}
                                                                           height={300}
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                category
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Short Name
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $59.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product5}
                                                                           width={300}
                                                                           height={300}
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                category
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Short Name
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $59.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product6}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-hot">
                                                                           HOT
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                category
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Short Name
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $59.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product10}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-sale">
                                                                           -30%
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                category
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Short Name
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $59.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product11}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-hot">
                                                                           HOT
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                category
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Short Name
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           />
                                                                           {/* End .ratings */}
                                                                           <span className="tooltiptext tooltip-top" />
                                                                      </div>
                                                                      {/* End .product-ratings */}
                                                                 </div>
                                                                 {/* End .product-container */}
                                                                 <div className="price-box">
                                                                      <span className="old-price">
                                                                           $59.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                                  <div className="col-6 col-sm-4">
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo13-product.html">
                                                                      <Image
                                                                           src={product12}
                                                                           width={300}
                                                                           height={300}
                                                                           alt="product"
                                                                      />
                                                                 </a>
                                                                 <div className="label-group">
                                                                      <span className="product-label label-sale">
                                                                           -20%
                                                                      </span>
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
                                                                                href="demo13-shop.html"
                                                                                className="product-category"
                                                                           >
                                                                                category
                                                                           </a>
                                                                      </div>
                                                                      <a
                                                                           href="#"
                                                                           className="btn-icon-wish"
                                                                      >
                                                                           <i className="icon-wishlist-2" />
                                                                      </a>
                                                                 </div>
                                                                 <h3 className="product-title">
                                                                      <a href="demo13-product.html">
                                                                           Product Short Name
                                                                      </a>
                                                                 </h3>
                                                                 <div className="ratings-container">
                                                                      <div className="product-ratings">
                                                                           <span
                                                                                className="ratings"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
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
                                                                      <span className="old-price">
                                                                           $59.00
                                                                      </span>
                                                                      <span className="product-price">
                                                                           $49.00
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* End .tab-pane */}
                                   </div>
                                   {/* End .tab-content */}
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
                                                            "url(assets/images/demoes/demo13/banners/banner-5.jpg)",
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
                                             <div className="product-default left-details product-widget">
                                                  <figure>
                                                       <a href="demo13-product.html">
                                                            <Image
                                                                 src={product5}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                            <Image
                                                                 src={product5two}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo13-product.html">
                                                                 Men Gentle Shoes
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
                                                                 $269.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                             <div className="product-default left-details product-widget">
                                                  <figure>
                                                       <a href="demo13-product.html">
                                                            <Image
                                                                 src={product13}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                            <Image
                                                                 src={product13two}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo13-product.html">
                                                                 Women Bag
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
                                                            <span className="product-price">
                                                                 $299.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                             <div className="product-default left-details product-widget">
                                                  <figure>
                                                       <a href="demo13-product.html">
                                                            <Image
                                                                 src={product9}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                            <Image
                                                                 src={product9two}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo13-product.html">
                                                                 Product Extended
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
                                                                 $39.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                        </div>
                                        {/* product-2 */}
                                        <div className="col-lg-4 col-sm-6 pb-5">
                                             <h4 className="section-sub-title text-uppercase m-b-3">
                                                  Best Selling Products
                                             </h4>
                                             <div className="product-default left-details product-widget">
                                                  <figure>
                                                       <a href="demo13-product.html">
                                                            <Image
                                                                 src={product2}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                            <Image
                                                                 src={product2two}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo13-product.html">
                                                                 Gentle Shoes
                                                            </a>
                                                       </h3>
                                                       <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                 <span
                                                                      className="ratings"
                                                                      style={{ width: "0%" }}
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
                                                            <span className="product-price">
                                                                 $299.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                             <div className="product-default left-details product-widget">
                                                  <figure>
                                                       <a href="demo13-product.html">
                                                            <Image
                                                                 src={product1}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                            <Image
                                                                 src={product1two}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo13-product.html">
                                                                 Porto Gray Cap
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
                                                            <span className="product-price">
                                                                 $29.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                             <div className="product-default left-details product-widget">
                                                  <figure>
                                                       <a href="demo13-product.html">
                                                            <Image
                                                                 src={product8}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                            <Image
                                                                 src={product8two}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo13-product.html">
                                                                 Porto White Cap
                                                            </a>
                                                       </h3>
                                                       <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                 <span
                                                                      className="ratings"
                                                                      style={{ width: "0%" }}
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
                                                            <span className="product-price">
                                                                 $101.00 – $108.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                        </div>
                                        {/* product-3 */}
                                        <div className="col-lg-4 col-sm-6 pb-5">
                                             <h4 className="section-sub-title text-uppercase m-b-3">
                                                  Latest Products
                                             </h4>
                                             <div className="product-default left-details product-widget">
                                                  <figure>
                                                       <a href="demo13-product.html">
                                                            <Image
                                                                 src={product5}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                            <Image
                                                                 src={product5two}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo13-product.html">
                                                                 Men Gentle Shoes
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
                                                                 $269.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                             <div className="product-default left-details product-widget">
                                                  <figure>
                                                       <a href="demo13-product.html">
                                                            <Image
                                                                 src={product1}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                            <Image
                                                                 src={product1two}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo13-product.html">
                                                                 Porto Gray Cap
                                                            </a>
                                                       </h3>
                                                       <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                 <span
                                                                      className="ratings"
                                                                      style={{ width: "0%" }}
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
                                                            <span className="product-price">
                                                                 $29.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                             <div className="product-default left-details product-widget">
                                                  <figure>
                                                       <a href="demo13-product.html">
                                                            <Image
                                                                 src={product8}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                            <Image
                                                                 src={product8two}
                                                                 width={95}
                                                                 height={95}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo13-product.html">
                                                                 Porto White Cap
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
                                   {/* End .row */}
                              </div>
                              {/* End .product-widgets */}
                         </div>
                         {/* End .col-lg-9 */}
                         <div className="sidebar-overlay" />
                         <div className="sidebar-toggle custom-sidebar-toggle">
                              <i className="fas fa-sliders-h" />
                         </div>
                         <aside className="sidebar-home col-lg-3 mobile-sidebar">
                              <div className="side-menu-wrapper mb-3">
                                   <h2 className="side-menu-title ls-n-25">Browse Categories</h2>
                                   <ul className="side-menu px-3 mx-3">
                                        <li>
                                             <a href="demo13-shop.html">Fashion</a>
                                             <span className="side-menu-toggle" />
                                             <ul>
                                                  <li>
                                                       <a href="#">Women Clothes</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Men Clothes</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Shoes</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Accessories</a>
                                                  </li>
                                             </ul>
                                        </li>
                                        <li>
                                             <a href="demo13-shop.html">Accessories </a>
                                             <span className="side-menu-toggle" />
                                             <ul>
                                                  <li>
                                                       <a href="#">Watches</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Caps</a>
                                                  </li>
                                             </ul>
                                        </li>
                                        <li>
                                             <a href="demo13-shop.html">Electronics</a>
                                             <span className="side-menu-toggle" />
                                             <ul>
                                                  <li>
                                                       <a href="#">Toys</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Headphone</a>
                                                  </li>
                                             </ul>
                                        </li>
                                        <li>
                                             <a href="demo13-shop.html">Dress</a>
                                        </li>
                                   </ul>
                                   {/* End .side-menu */}
                              </div>
                              <div className="widget widget-banners px-5 text-center">
                                   <div className="owl-carousel owl-theme dots-small">
                                        <div className="banner d-flex flex-column align-items-center">
                                             <h3 className="badge-sale bg-secondary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                                  <em className="ls-0">Sale</em>Many Item
                                             </h3>
                                             <h4 className="sale-text font1 text-uppercase">
                                                  <span>45</span>
                                                  <sup>%</sup>
                                                  <sub>off</sub>
                                             </h4>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit.
                                             </p>
                                             <a href="#" className="btn btn-primary btn-md font1">
                                                  View Sale
                                             </a>
                                        </div>
                                        {/* End .banner */}
                                        <div className="banner d-flex flex-column align-items-center">
                                             <h3 className="badge-sale bg-secondary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                                  <em className="ls-0">Sale</em>Many Item
                                             </h3>
                                             <h4 className="sale-text font1 text-uppercase">
                                                  45
                                                  <sup>%</sup>
                                                  <sub>off</sub>
                                             </h4>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit.
                                             </p>
                                             <a href="#" className="btn btn-primary btn-md font1">
                                                  View Sale
                                             </a>
                                        </div>
                                        {/* End .banner */}
                                        <div className="banner d-flex flex-column align-items-center">
                                             <h3 className="badge-sale bg-secondary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                                  <em className="ls-0">Sale</em>Many Item
                                             </h3>
                                             <h4 className="sale-text font1 text-uppercase">
                                                  45
                                                  <sup>%</sup>
                                                  <sub>off</sub>
                                             </h4>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit.
                                             </p>
                                             <a href="#" className="btn btn-primary btn-md font1">
                                                  View Sale
                                             </a>
                                        </div>
                                        {/* End .banner */}
                                   </div>
                                   {/* End .banner-slider */}
                              </div>
                              {/* End .widget */}
                              <div className="widget widget-newsletters bg-gray text-center">
                                   <h3 className="widget-title text-uppercase">
                                        Subscribe Newsletter
                                   </h3>
                                   <p className="mb-2">
                                        Get all the latest information on Events, Sales and Offers.{" "}
                                   </p>
                                   <form action="#">
                                        <div className="form-group position-relative sicon-envolope-letter">
                                             <input
                                                  type="email"
                                                  className="form-control"
                                                  name="newsletter-email"
                                                  placeholder="Email address"
                                             />
                                        </div>
                                        {/* Endd .form-group */}
                                        <input
                                             type="submit"
                                             className="btn btn-primary btn-md"
                                             defaultValue="Subscribe"
                                        />
                                   </form>
                              </div>
                              {/* End .widget */}
                              <div className="widget widget-testimonials">
                                   <div className="owl-carousel owl-theme dots-left dots-small">
                                        <div className="testimonial">
                                             <div className="testimonial-owner">
                                                  <figure>
                                                       <Image
                                                            src={client1}
                                                            alt="client"
                                                            width={100}
                                                            height={100}
                                                       />
                                                  </figure>
                                                  <div>
                                                       <h4 className="testimonial-title">
                                                            john Smith
                                                       </h4>
                                                       <span>CEO &amp; Founder</span>
                                                  </div>
                                             </div>
                                             {/* End .testimonial-owner */}
                                             <blockquote>
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       elitad adipiscing Cras non placerat mi.
                                                  </p>
                                             </blockquote>
                                        </div>
                                        {/* End .testimonial */}
                                        <div className="testimonial">
                                             <div className="testimonial-owner">
                                                  <figure>
                                                       <Image
                                                            src={client2}
                                                            alt="client"
                                                            width={100}
                                                            height={100}
                                                       />
                                                  </figure>
                                                  <div>
                                                       <h4 className="testimonial-title">
                                                            Dae Smith
                                                       </h4>
                                                       <span>CEO &amp; Founder</span>
                                                  </div>
                                             </div>
                                             {/* End .testimonial-owner */}
                                             <blockquote>
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       elitad adipiscing Cras non placerat mi.
                                                  </p>
                                             </blockquote>
                                        </div>
                                        {/* End .testimonial */}
                                        <div className="testimonial">
                                             <div className="testimonial-owner">
                                                  <figure>
                                                       <Image
                                                            src={client3}
                                                            alt="client"
                                                            width={100}
                                                            height={100}
                                                       />
                                                  </figure>
                                                  <div>
                                                       <h4 className="testimonial-title">
                                                            John Doe
                                                       </h4>
                                                       <span>CEO &amp; Founder</span>
                                                  </div>
                                             </div>
                                             {/* End .testimonial-owner */}
                                             <blockquote>
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       elitad adipiscing Cras non placerat mi.
                                                  </p>
                                             </blockquote>
                                        </div>
                                        {/* End .testimonial */}
                                   </div>
                                   {/* End .testimonials-slider */}
                              </div>
                              {/* End .widget */}
                              <div className="widget widget-posts post-date-in-media media-with-zoom">
                                   <div
                                        className="owl-carousel owl-theme dots-left dots-m-0 dots-small"
                                        data-owl-options="
								{ 'margin' : 20,
									'loop': false }"
                                   >
                                        <article className="post">
                                             <div className="post-media">
                                                  <a href="single.html">
                                                       <Image
                                                            src={post1}
                                                            alt="Post"
                                                            width={400}
                                                            height={300}
                                                            data-zoom-image={post1}
                                                       />
                                                  </a>
                                                  <div className="post-date">
                                                       <span className="day">29</span>
                                                       <span className="month">Jun</span>
                                                  </div>
                                                  {/* End .post-date */}
                                                  <span className="prod-full-screen">
                                                       <i className="fas fa-search" />
                                                  </span>
                                             </div>
                                             {/* End .post-media */}
                                             <div className="post-body">
                                                  <h2 className="post-title">
                                                       <a href="single.html">
                                                            Post Format Standard
                                                       </a>
                                                  </h2>
                                                  <div className="post-content">
                                                       <p>
                                                            Leap into electronic typesetting,
                                                            remaining essentially unchanged. It was
                                                            popularised in the 1960s with...{" "}
                                                       </p>
                                                       <a href="single.html" className="read-more">
                                                            read more
                                                            <i className="icon-right-open" />
                                                       </a>
                                                  </div>
                                                  {/* End .post-content */}
                                             </div>
                                             {/* End .post-body */}
                                        </article>
                                        <article className="post">
                                             <div className="post-media">
                                                  <a href="single.html">
                                                       <Image
                                                            src={post2}
                                                            alt="Post"
                                                            width={400}
                                                            height={300}
                                                            data-zoom-image={post2}
                                                       />
                                                  </a>
                                                  <div className="post-date">
                                                       <span className="day">29</span>
                                                       <span className="month">Jun</span>
                                                  </div>
                                                  {/* End .post-date */}
                                                  <span className="prod-full-screen">
                                                       <i className="fas fa-search" />
                                                  </span>
                                             </div>
                                             {/* End .post-media */}
                                             <div className="post-body">
                                                  <h2 className="post-title">
                                                       <a href="single.html">Fashion Trends</a>
                                                  </h2>
                                                  <div className="post-content">
                                                       <p>
                                                            Leap into electronic typesetting,
                                                            remaining essentially unchanged. It was
                                                            popularised in the 1960s with...{" "}
                                                       </p>
                                                       <a href="single.html" className="read-more">
                                                            read more
                                                            <i className="icon-right-open" />
                                                       </a>
                                                  </div>
                                                  {/* End .post-content */}
                                             </div>
                                             {/* End .post-body */}
                                        </article>
                                        <article className="post">
                                             <div className="post-media">
                                                  <a href="single.html">
                                                       <Image
                                                            src={post3}
                                                            alt="Post"
                                                            width={400}
                                                            height={300}
                                                            data-zoom-image={post3}
                                                       />
                                                  </a>
                                                  <div className="post-date">
                                                       <span className="day">29</span>
                                                       <span className="month">Jun</span>
                                                  </div>
                                                  {/* End .post-date */}
                                                  <span className="prod-full-screen">
                                                       <i className="fas fa-search" />
                                                  </span>
                                             </div>
                                             {/* End .post-media */}
                                             <div className="post-body">
                                                  <h2 className="post-title">
                                                       <a href="single.html">Post Format Video</a>
                                                  </h2>
                                                  <div className="post-content">
                                                       <p>
                                                            Leap into electronic typesetting,
                                                            remaining essentially unchanged. It was
                                                            popularised in the 1960s with...{" "}
                                                       </p>
                                                       <a href="single.html" className="read-more">
                                                            read more
                                                            <i className="icon-right-open" />
                                                       </a>
                                                  </div>
                                                  {/* End .post-content */}
                                             </div>
                                             {/* End .post-body */}
                                        </article>
                                   </div>
                                   {/* End .posts-slider */}
                              </div>
                              {/* End .widget */}
                         </aside>
                    </div>
                    {/* End .row */}
               </div>
               {/* End .container */}
          </main>
     );
};
