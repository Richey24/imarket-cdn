import React from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import Banner from "./components/Banner";
import Banner1 from "../../../assets/images/demoes/demo4/banners/banner-1.jpg";
import Banner2 from "../../../assets/images/demoes/demo4/banners/banner-2.jpg";
import Banner3 from "../../../assets/images/demoes/demo4/banners/banner-3.jpg";
import Banner4 from "../../../assets/images/demoes/demo4/banners/banner-4.jpg";
import Banner5 from "../../../assets/images/demoes/demo4/banners/banner-5.jpg";
import Image from "next/image";
import { InfoBoxesContainer } from "./components/Info";
import SmallBoxes from "./components/smallBoxes";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { slidesData } from "./data";

const Home = () => {
     return (
          <main className="main">
               <div className="home-slider show-nav-hover nav-big mb-2 text-uppercase">
                    <Banner slides={slidesData} />
               </div>
               <InfoBoxesContainer />
               <SmallBoxes />

               <section className="featured-products-section">
                    <div className="container">
                         <h2 className="section-title heading-border ls-20 border-0">
                              Featured Products
                         </h2>
                         <div
                              className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center"
                              data-owl-options="{
                                      'dots': false,
                                      'nav': true
                                 }"
                         >
                              <div
                                   className="product-default "
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-1.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-1-2.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                             <div className="product-label label-sale">-20%</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">
                                                  Ultimate 3D Bluetooth Speaker
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="product.html"
                                                  className="btn-icon btn-add-cart"
                                             >
                                                  <i className="fa fa-arrow-right" />
                                                  <span>SELECT OPTIONS</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default "
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-2.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-2-2.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                             <div className="product-label label-sale">-30%</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">Brown Women Casual HandBag</a>
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="product.html"
                                                  className="btn-icon btn-add-cart"
                                             >
                                                  <i className="fa fa-arrow-right" />
                                                  <span>SELECT OPTIONS</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default"
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-3.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-3-2.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">Circled Ultimate 3D Speaker</a>
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="#"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart" />
                                                  <span>ADD TO CART</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default"
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-4.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-4-2.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                             <div className="product-label label-sale">-40%</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">
                                                  Blue Backpack for the Young - S
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="#"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart" />
                                                  <span>ADD TO CART</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default"
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-5.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-5-2.jpg"
                                                  width={280}
                                                  height={280}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                             <div className="product-label label-sale">-15%</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">Casual Spring Blue Shoes</a>
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="#"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart" />
                                                  <span>ADD TO CART</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         {/* End .featured-proucts */}
                    </div>
               </section>
               <section className="new-products-section">
                    <div className="container">
                         <h2 className="section-title heading-border ls-20 border-0">
                              New Arrivals
                         </h2>
                         <div
                              className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center mb-2"
                              data-owl-options="{
                                      'dots': false,
                                      'nav': true,
                                      'responsive': {
                                           '992': {
                                                'items': 4
                                           },
                                           '1200': {
                                                'items': 5
                                           }
                                      }
                                 }"
                         >
                              <div
                                   className="product-default "
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-6.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-6-2.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">Men Black Gentle Belt</a>
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="#"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart" />
                                                  <span>ADD TO CART</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default"
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-7.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-7-2.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">
                                                  Brown-Black Men Casual Glasses
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="#"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart" />
                                                  <span>ADD TO CART</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default"
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-8.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-8-2.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-sale">-20%</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">
                                                  Brown-Black Men Casual Glasses
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="#"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart" />
                                                  <span>ADD TO CART</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default"
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-9.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-9-2.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-sale">-30%</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">Black Men Casual Glasses</a>
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="product.html"
                                                  className="btn-icon btn-add-cart"
                                             >
                                                  <i className="fa fa-arrow-right" />
                                                  <span>SELECT OPTIONS</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default "
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-10.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-10-2.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">Basketball Sports Blue Shoes</a>
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="#"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart" />
                                                  <span>ADD TO CART</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default "
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="product.html">
                                             <img
                                                  src="assets/images/products/product-11.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                             <img
                                                  src="assets/images/products/product-11-2.jpg"
                                                  width={220}
                                                  height={220}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-sale">-20%</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">Men Sports Travel Bag</a>
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
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="product.html"
                                                  className="btn-icon btn-add-cart"
                                             >
                                                  <i className="fa fa-arrow-right" />
                                                  <span>SELECT OPTIONS</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         {/* End .featured-proucts */}
                         <div
                              className="banner banner-big-sale "
                              data-animation-delay={200}
                              data-animation-name="fadeInUpShorter"
                              style={{
                                   background:
                                        '#2A95CB center/cover url("assets/images/demoes/demo4/banners/banner-4.jpg")',
                              }}
                         >
                              <div className="banner-content row align-items-center mx-0">
                                   <div className="col-md-9 col-sm-8">
                                        <h2 className="text-white text-uppercase text-center text-sm-left ls-n-20 mb-md-0 px-4">
                                             <b className="d-inline-block mr-3 mb-1 mb-md-0">
                                                  Big Sale
                                             </b>{" "}
                                             All new fashion brands items up to 70% off
                                             <small className="text-transform-none align-middle">
                                                  Online Purchases Only
                                             </small>
                                        </h2>
                                   </div>
                                   <div className="col-md-3 col-sm-4 text-center text-sm-right">
                                        <a
                                             className="btn btn-light btn-white btn-lg"
                                             href="category.html"
                                        >
                                             View Sale
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <h2
                              className="section-title categories-section-title heading-border border-0 ls-0 "
                              data-animation-delay={100}
                              data-animation-name="fadeInUpShorter"
                         >
                              Browse Our Categories
                         </h2>
                         <div className="categories-slider owl-carousel owl-theme show-nav-hover nav-outer">
                              <div
                                   className="product-category "
                                   data-animation-name="fadeInUpShorter"
                              >
                                   <a href="category.html">
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo4/products/categories/category-1.jpg"
                                                  alt="category"
                                                  width={280}
                                                  height={240}
                                             />
                                        </figure>
                                        <div className="category-content">
                                             <h3>Dress</h3>
                                             <span>
                                                  <mark className="count">3</mark> products
                                             </span>
                                        </div>
                                   </a>
                              </div>
                              <div
                                   className="product-category "
                                   data-animation-name="fadeInUpShorter"
                              >
                                   <a href="category.html">
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo4/products/categories/category-2.jpg"
                                                  alt="category"
                                                  width={220}
                                                  height={220}
                                             />
                                        </figure>
                                        <div className="category-content">
                                             <h3>Watches</h3>
                                             <span>
                                                  <mark className="count">3</mark> products
                                             </span>
                                        </div>
                                   </a>
                              </div>
                              <div
                                   className="product-category "
                                   data-animation-name="fadeInUpShorter"
                              >
                                   <a href="category.html">
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo4/products/categories/category-3.jpg"
                                                  alt="category"
                                                  width={220}
                                                  height={220}
                                             />
                                        </figure>
                                        <div className="category-content">
                                             <h3>Machine</h3>
                                             <span>
                                                  <mark className="count">3</mark> products
                                             </span>
                                        </div>
                                   </a>
                              </div>
                              <div
                                   className="product-category "
                                   data-animation-name="fadeInUpShorter"
                              >
                                   <a href="category.html">
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo4/products/categories/category-4.jpg"
                                                  alt="category"
                                                  width={220}
                                                  height={220}
                                             />
                                        </figure>
                                        <div className="category-content">
                                             <h3>Sofa</h3>
                                             <span>
                                                  <mark className="count">3</mark> products
                                             </span>
                                        </div>
                                   </a>
                              </div>
                              <div
                                   className="product-category "
                                   data-animation-name="fadeInUpShorter"
                              >
                                   <a href="category.html">
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo4/products/categories/category-6.jpg"
                                                  alt="category"
                                                  width={220}
                                                  height={220}
                                             />
                                        </figure>
                                        <div className="category-content">
                                             <h3>Headphone</h3>
                                             <span>
                                                  <mark className="count">3</mark> products
                                             </span>
                                        </div>
                                   </a>
                              </div>
                              <div
                                   className="product-category "
                                   data-animation-name="fadeInUpShorter"
                              >
                                   <a href="category.html">
                                        <figure>
                                             <img
                                                  src="assets/images/demoes/demo4/products/categories/category-5.jpg"
                                                  alt="category"
                                                  width={220}
                                                  height={220}
                                             />
                                        </figure>
                                        <div className="category-content">
                                             <h3>Sports</h3>
                                             <span>
                                                  <mark className="count">3</mark> products
                                             </span>
                                        </div>
                                   </a>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="feature-boxes-container">
                    <div className="container " data-animation-name="fadeInUpShorter">
                         <div className="row">
                              <div className="col-md-4">
                                   <div className="feature-box px-sm-5 feature-box-simple text-center">
                                        <div className="feature-box-icon">
                                             <i className="icon-earphones-alt" />
                                        </div>
                                        <div className="feature-box-content p-0">
                                             <h3>Customer Support</h3>
                                             <h5>You Won't Be Alone</h5>
                                             <p>
                                                  We really care about you and your website as much
                                                  as you do. Purchasing Porto or any other theme
                                                  from us you get 100% free support.
                                             </p>
                                        </div>
                                        {/* End .feature-box-content */}
                                   </div>
                                   {/* End .feature-box */}
                              </div>
                              {/* End .col-md-4 */}
                              <div className="col-md-4">
                                   <div className="feature-box px-sm-5 feature-box-simple text-center">
                                        <div className="feature-box-icon">
                                             <i className="icon-credit-card" />
                                        </div>
                                        <div className="feature-box-content p-0">
                                             <h3>Fully Customizable</h3>
                                             <h5>Tons Of Options</h5>
                                             <p>
                                                  With Porto you can customize the layout, colors
                                                  and styles within only a few minutes. Start
                                                  creating an amazing website right now!
                                             </p>
                                        </div>
                                        {/* End .feature-box-content */}
                                   </div>
                                   {/* End .feature-box */}
                              </div>
                              {/* End .col-md-4 */}
                              <div className="col-md-4">
                                   <div className="feature-box px-sm-5 feature-box-simple text-center">
                                        <div className="feature-box-icon">
                                             <i className="icon-action-undo" />
                                        </div>
                                        <div className="feature-box-content p-0">
                                             <h3>Powerful Admin</h3>
                                             <h5>Made To Help You</h5>
                                             <p>
                                                  Porto has very powerful admin features to help
                                                  customer to build their own shop in minutes
                                                  without any special skills in web development.
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
                    {/* End .container*/}
               </section>
               {/* End .feature-boxes-container */}
               <section
                    className="promo-section bg-dark"
                    data-parallax="{'speed': 2, 'enableOnMobile': true}"
                    data-image-src={Banner5}
               >
                    <div className="promo-banner banner container text-uppercase">
                         <div className="banner-content row align-items-center text-center">
                              <div
                                   className="col-md-4 ml-xl-auto text-md-right"
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={600}
                              >
                                   <h2 className="mb-md-0 text-white">
                                        Top Fashion
                                        <br />
                                        Deals
                                   </h2>
                              </div>
                              <div
                                   className="col-md-4 col-xl-3 pb-4 pb-md-0 "
                                   data-animation-name="fadeIn"
                                   data-animation-delay={300}
                              >
                                   <a href="category.html" className="btn btn-dark btn-black ls-10">
                                        View Sale
                                   </a>
                              </div>
                              <div
                                   className="col-md-4 mr-xl-auto text-md-left"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={600}
                              >
                                   <h4 className="mb-1 mt-1 font1 coupon-sale-text p-0 d-block ls-n-10 text-transform-none">
                                        <b>Exclusive COUPON</b>
                                   </h4>
                                   <h5 className="mb-1 coupon-sale-text text-white ls-10 p-0">
                                        <i className="ls-0">UP TO</i>
                                        <b className="text-white bg-secondary ls-n-10">$100</b> OFF
                                   </h5>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="blog-section pb-0">
                    <div className="container">
                         <h2
                              className="section-title heading-border border-0 "
                              data-animation-name="fadeInUp"
                         >
                              Latest News
                         </h2>
                         <div
                              className="owl-carousel owl-theme"
                              data-animation-name="fadeIn"
                              data-owl-options="{
                                      'loop': false,
                                      'margin': 20,
                                      'autoHeight': true,
                                      'autoplay': false,
                                      'dots': false,
                                      'items': 2,
                                      'responsive': {
                                           '0': {
                                                'items': 1
                                           },
                                           '480': {
                                                'items': 2
                                           },
                                           '576': {
                                                'items': 3
                                           },
                                           '768': {
                                                'items': 4
                                           }
                                      }
                                 }"
                         >
                              <article className="post">
                                   <div className="post-media">
                                        <a href="single.html">
                                             <img
                                                  src="assets/images/blog/home/post-1.jpg"
                                                  alt="Post"
                                                  width={225}
                                                  height={280}
                                             />
                                        </a>
                                        <div className="post-date">
                                             <span className="day">26</span>
                                             <span className="month">Feb</span>
                                        </div>
                                   </div>
                                   {/* End .post-media */}
                                   <div className="post-body">
                                        <h2 className="post-title">
                                             <a href="single.html">Top New Collection</a>
                                        </h2>
                                        <div className="post-content">
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Cras non placerat mi. Etiam non tellus sem.
                                                  Aenean...
                                             </p>
                                        </div>
                                        {/* End .post-content */}
                                        <a href="single.html" className="post-comment">
                                             0 Comments
                                        </a>
                                   </div>
                                   {/* End .post-body */}
                              </article>
                              {/* End .post */}
                              <article className="post">
                                   <div className="post-media">
                                        <a href="single.html">
                                             <img
                                                  src="assets/images/blog/home/post-2.jpg"
                                                  alt="Post"
                                                  width={225}
                                                  height={280}
                                             />
                                        </a>
                                        <div className="post-date">
                                             <span className="day">26</span>
                                             <span className="month">Feb</span>
                                        </div>
                                   </div>
                                   {/* End .post-media */}
                                   <div className="post-body">
                                        <h2 className="post-title">
                                             <a href="single.html">Fashion Trends</a>
                                        </h2>
                                        <div className="post-content">
                                             <p>
                                                  Leap into electronic typesetting, remaining
                                                  essentially unchanged. It was popularised in the
                                                  1960s with the release of...
                                             </p>
                                        </div>
                                        {/* End .post-content */}
                                        <a href="single.html" className="post-comment">
                                             0 Comments
                                        </a>
                                   </div>
                                   {/* End .post-body */}
                              </article>
                              {/* End .post */}
                              <article className="post">
                                   <div className="post-media">
                                        <a href="single.html">
                                             <img
                                                  src="assets/images/blog/home/post-3.jpg"
                                                  alt="Post"
                                                  width={225}
                                                  height={280}
                                             />
                                        </a>
                                        <div className="post-date">
                                             <span className="day">26</span>
                                             <span className="month">Feb</span>
                                        </div>
                                   </div>
                                   {/* End .post-media */}
                                   <div className="post-body">
                                        <h2 className="post-title">
                                             <a href="single.html">Right Choices</a>
                                        </h2>
                                        <div className="post-content">
                                             <p>
                                                  Lorem Ipsum is simply dummy text of the printing
                                                  and typesetting industry. Lorem Ipsum has been
                                                  the...
                                             </p>
                                        </div>
                                        {/* End .post-content */}
                                        <a href="single.html" className="post-comment">
                                             0 Comments
                                        </a>
                                   </div>
                                   {/* End .post-body */}
                              </article>
                              {/* End .post */}
                              <article className="post">
                                   <div className="post-media">
                                        <a href="single.html">
                                             <img
                                                  src="assets/images/blog/home/post-4.jpg"
                                                  alt="Post"
                                                  width={225}
                                                  height={280}
                                             />
                                        </a>
                                        <div className="post-date">
                                             <span className="day">26</span>
                                             <span className="month">Feb</span>
                                        </div>
                                   </div>
                                   {/* End .post-media */}
                                   <div className="post-body">
                                        <h2 className="post-title">
                                             <a href="single.html">Perfect Accessories</a>
                                        </h2>
                                        <div className="post-content">
                                             <p>
                                                  Leap into electronic typesetting, remaining
                                                  essentially unchanged. It was popularised in the
                                                  1960s with the release of...
                                             </p>
                                        </div>
                                        {/* End .post-content */}
                                        <a href="single.html" className="post-comment">
                                             0 Comments
                                        </a>
                                   </div>
                                   {/* End .post-body */}
                              </article>
                              {/* End .post */}
                         </div>
                         <hr className="mt-0 m-b-5" />
                         <div
                              className="brands-slider owl-carousel owl-theme images-center"
                              data-animation-name="fadeIn"
                              data-animation-duration={500}
                              data-owl-options="{
                                 'margin': 0}"
                         >
                              <img
                                   src="assets/images/brands/brand1.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/brand2.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/brand3.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/brand4.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/brand5.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/brand6.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                         </div>
                         {/* End .brands-slider */}
                         <hr className="mt-4 m-b-5" />
                         <div className="product-widgets-container row pb-2">
                              <div
                                   className="col-lg-3 col-sm-6 pb-5 pb-md-0 "
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={200}
                              >
                                   <h4 className="section-sub-title">Featured Products</h4>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-1.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-1-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Ultimate 3D Bluetooth Speaker
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
                                                  <span className="product-price">$49.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-2-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Brown Women Casual HandBag
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
                                                  <span className="product-price">$49.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-3.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-3-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Circled Ultimate 3D Speaker
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
                                                  <span className="product-price">$49.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              </div>
                              <div
                                   className="col-lg-3 col-sm-6 pb-5 pb-md-0 "
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={500}
                              >
                                   <h4 className="section-sub-title">Best Selling Products</h4>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-4.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-4-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Blue Backpack for the Young - S
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
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-5.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-5-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Casual Spring Blue Shoes
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
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-6.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-6-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Men Black Gentle Belt
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
                                   className="col-lg-3 col-sm-6 pb-5 pb-md-0 "
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={800}
                              >
                                   <h4 className="section-sub-title">Latest Products</h4>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-7.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-7-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Brown-Black Men Casual Glasses
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
                                                  <span className="product-price">$49.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-8.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-8-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Brown-Black Men Casual Glasses
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
                                                  <span className="product-price">$49.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-9.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-9-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Black Men Casual Glasses
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
                                   className="col-lg-3 col-sm-6 pb-5 pb-md-0"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={1100}
                              >
                                   <h4 className="section-sub-title">Top Rated Products</h4>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-10.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-10-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Basketball Sports Blue Shoes
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
                                                  <span className="product-price">$49.00</span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                                   <div className="product-default left-details product-widget">
                                        <figure>
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-11.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-11-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">
                                                       Men Sports Travel Bag
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
                                             <a href="product.html">
                                                  <img
                                                       src="assets/images/products/small/product-12.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                                  <img
                                                       src="assets/images/products/small/product-12-2.jpg"
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="product.html">Brown HandBag</a>{" "}
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
               </section>
          </main>
     );
};

export default Home;
