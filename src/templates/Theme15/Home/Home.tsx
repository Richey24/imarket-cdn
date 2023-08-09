import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import { Product } from "./components/Product";
import { Promotion } from "./components/Promotion";
import { featuredProducts, promotions, shopByCategories } from "./data";
import Image from "next/image";
import slide1 from "../../../assets/images/demoes/demo3/slider/slide1.jpg";
import slide2 from "../../../assets/images/demoes/demo3/slider/slide2.jpg";
import Banner from "./components/Banner";
import ShopByCategory from "./components/ShopByCategory";
import { InfoBox } from "@react-google-maps/api";
import { InfoBoxesContainer } from "./components/Info";

export const Home = () => {
     let settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
     };
     return (
          <main className="main">
               <div className="container">
                    <Banner />

                    {/* End .home-slider */}
                    <section className="service-box">
                         <div className="container">
                              <div className="info-boxes-container border-bottom mb-3">
                                   <div className="row row-joined">
                                        <div className="info-box col-sm-6 col-md-6 col-lg-3">
                                             <div className="info-box-icon-left w-100">
                                                  <i className="icon-shipping" />
                                                  <div className="info-box-content">
                                                       <h4>FREE SHIPPING &amp; RETURN</h4>
                                                  </div>
                                                  {/* End .info-box-content */}
                                             </div>
                                        </div>
                                        {/* End .info-box */}
                                        <div className="info-box col-sm-6 col-md-6 col-lg-3">
                                             <div className="info-box-icon-left w-100">
                                                  <i className="icon-money" />
                                                  <div className="info-box-content">
                                                       <h4>MONEY BACK GUARANTEE</h4>
                                                  </div>
                                                  {/* End .info-box-content */}
                                             </div>
                                        </div>
                                        {/* End .info-box */}
                                        <div className="info-box col-sm-6 col-md-6 col-lg-3">
                                             <div className="info-box-icon-left w-100">
                                                  <i className="icon-support" />
                                                  <div className="info-box-content">
                                                       <h4>ONLINE SUPPORT 24/7</h4>
                                                  </div>
                                                  {/* End .info-box-content */}
                                             </div>
                                        </div>
                                        {/* End .info-box */}
                                        <div className="info-box col-sm-6 col-md-6 col-lg-3">
                                             <div className="info-box-icon-left w-100">
                                                  <i className="icon-secure-payment" />
                                                  <div className="info-box-content">
                                                       <h4>SECURE PAYMENT</h4>
                                                  </div>
                                                  {/* End .info-box-content */}
                                             </div>
                                        </div>
                                        {/* End .info-box */}
                                   </div>
                                   {/* End .row */}
                              </div>
                              {/* End .info-boxes-container */}
                         </div>
                    </section>
                    <section className="product-section">
                         <div className="row">
                              <aside className="sidebar-home col-lg-3 col-md-4 order-lg-first">
                                   <div className="side-menu-wrapper m-b-3 border-0">
                                        <h2 className="side-menu-title bg-primary text-white">
                                             <i className="fas fa-bars" />
                                             Shop By Category
                                        </h2>
                                        <nav className="side-nav border border-top-0">
                                             <ul className="menu-vertical sf-arrows">
                                                  <li>
                                                       <a href="demo15-shop.html">Accessories</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo15-shop.html">Dress</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo15-shop.html">Electronics</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo15-shop.html">Fashion</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo15-shop.html">Headphone</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo15-shop.html">Trousers</a>
                                                  </li>
                                             </ul>
                                        </nav>
                                   </div>
                                   {/* End .side-menu-container */}
                                   <div className="feature-boxes-container">
                                        <div className="row mb-1">
                                             <div
                                                  className="col-12 appear-animate"
                                                  data-animation-name="fadeInUpShorter"
                                             >
                                                  <div className="feature-box m-b-5 mx-sm-5 mx-md-3 feature-box-simple text-center">
                                                       <i className="icon-earphones-alt" />
                                                       <div className="feature-box-content">
                                                            <h3 className="mb-0">
                                                                 Customer Support
                                                            </h3>
                                                            <h5>Need Assistence?</h5>
                                                            <p>
                                                                 Lorem ipsum dolor amet,
                                                                 consectetur.
                                                            </p>
                                                       </div>
                                                       {/* End .feature-box-content */}
                                                  </div>
                                                  {/* End .feature-box */}
                                             </div>
                                             {/* End .col-md-4 */}
                                             <div
                                                  className="col-12 appear-animate"
                                                  data-animation-delay={500}
                                                  data-animation-name="fadeInUpShorter"
                                             >
                                                  <div className="feature-box m-b-5 mx-sm-5 mx-md-3 feature-box-simple text-center">
                                                       <i className="icon-credit-card" />
                                                       <div className="feature-box-content">
                                                            <h3 className="mb-0">
                                                                 Secured Payment
                                                            </h3>
                                                            <h5>Safe &amp; Fast</h5>
                                                            <p>
                                                                 Lorem ipsum dolor amet,
                                                                 consectetur.
                                                            </p>
                                                       </div>
                                                       {/* End .feature-box-content */}
                                                  </div>
                                                  {/* End .feature-box */}
                                             </div>
                                             {/* End .col-md-4 */}
                                             <div
                                                  className="col-12 appear-animate"
                                                  data-animation-delay={800}
                                                  data-animation-name="fadeInUpShorter"
                                             >
                                                  <div className="feature-box m-b-5 mx-sm-5 mx-md-3 feature-box-simple text-center">
                                                       <i className="icon-action-undo " />
                                                       <div className="feature-box-content">
                                                            <h3 className="mb-0">RETURNS</h3>
                                                            <h5>Easy &amp; Free</h5>
                                                            <p>Lorem ipsum dolor sit amet.</p>
                                                       </div>
                                                       {/* End .feature-box-content */}
                                                  </div>
                                                  {/* End .feature-box */}
                                             </div>
                                             {/* End .col-md-4 */}
                                        </div>
                                        {/* End .feature-boxes-container.row */}
                                   </div>
                              </aside>
                              {/* End .col-lg-3 */}
                              <div className="col-lg-9 col-md-8">
                                   <h2
                                        className="section-title ls-n-20 m-b-1 line-height-1 text-center appear-animat"
                                        data-animation-delay={100}
                                        data-animation-duration={1500}
                                   >
                                        Recent Products
                                   </h2>
                                   <h3
                                        className="section-sub-title ls-n-20 font-weight-normal text-center appear-animat"
                                        data-animation-delay={100}
                                        data-animation-duration={1500}
                                   >
                                        All our new arrivals in a exclusive brand selection
                                   </h3>
                                   <div className="row">
                                        {featuredProducts.map((product, index) => (
                                             <Product
                                                  key={`featured-product-${index}`}
                                                  {...product}
                                             />
                                        ))}
                                   </div>
                                   {/* End .row */}
                              </div>
                         </div>
                    </section>
                    <section className="banner-container appear-animate">
                         <div className="row">
                              <div className="col-md-4">
                                   <div className="banner">
                                        <img
                                             src="assets/images/demoes/demo15/banners/banner-1.jpg"
                                             width={360}
                                             height={250}
                                             style={{ backgroundColor: "#efefef" }}
                                             alt="banner"
                                        />
                                        <div className="banner-layer banner-layer-right banner-layer-middle text-right">
                                             <h3 className="m-b-1 font3 text-right text-primary">
                                                  Orange
                                             </h3>
                                             <h5 className="ls-n-20 d-inline-block m-r-2 text-left">
                                                  FROM
                                             </h5>
                                             <h4 className="ls-n-20 text-price float-right text-left">
                                                  $<b>19</b>99
                                             </h4>
                                             <div className="mb-0 clearfix text-right">
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="btn btn-modern btn-sm btn-dark"
                                                  >
                                                       Shop Now!
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md-4">
                                   <div className="banner">
                                        <img
                                             src="assets/images/demoes/demo15/banners/banner-2.jpg"
                                             width={360}
                                             height={250}
                                             style={{ backgroundColor: "#efefef" }}
                                             alt="banner"
                                        />
                                        <div className="banner-layer banner-layer-right banner-layer-middle text-right">
                                             <h3 className="m-b-1 font3 text-right text-primary">
                                                  White
                                             </h3>
                                             <h5 className="ls-n-20 d-inline-block m-r-2 text-left">
                                                  FROM
                                             </h5>
                                             <h4 className="ls-n-20 text-price float-right text-left">
                                                  $<b>29</b>99
                                             </h4>
                                             <div className="mb-0 clearfix text-right">
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="btn btn-modern btn-sm btn-dark"
                                                  >
                                                       Shop Now!
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md-4">
                                   <div className="banner">
                                        <img
                                             src="assets/images/demoes/demo15/banners/banner-3.jpg"
                                             width={360}
                                             height={250}
                                             style={{ backgroundColor: "#efefef" }}
                                             alt="banner"
                                        />
                                        <div className="banner-layer banner-layer-right banner-layer-middle text-right">
                                             <h3 className="m-b-1 font3 text-right text-primary">
                                                  Black
                                             </h3>
                                             <h5 className="ls-n-20 d-inline-block m-r-2 text-left">
                                                  FROM
                                             </h5>
                                             <h4 className="ls-n-20 text-price float-right text-left">
                                                  $<b>39</b>99
                                             </h4>
                                             <div className="mb-0 clearfix text-right">
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="btn btn-modern btn-sm btn-dark"
                                                  >
                                                       Shop Now!
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    <section
                         className="product-section-2 p-t-3 appear-animate"
                         data-animation-delay={100}
                         data-animation-duration={1500}
                    >
                         <h2
                              className="section-title ls-n-20 m-b-1 line-height-1 text-center appear-animate"
                              data-animation-delay={100}
                              data-animation-duration={1500}
                         >
                              Products On Sale
                         </h2>
                         <h3
                              className="section-sub-title ls-n-20 font-weight-normal text-center appear-animate"
                              data-animation-delay={100}
                              data-animation-duration={1500}
                         >
                              All our sale products in a exclusive brand selection
                         </h3>
                         <div
                              className="products-slider owl-carousel owl-theme nav-center-images-only"
                              data-owl-options="{
                      'items': 2,
                      'nav': false,
                      'dots': false,
                      'responsive' : {
                          '0' : {
                              'items': 2
                          },
                          '576' : {
                              'items': 3
                          },
                          '768': {
                              'items': 4
                          },
                          '1200' : {
                              'items': 6,
                              'nav': true
                          }
                      }
                  }"
                         >
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-1.jpg"
                                                  alt="product"
                                                  width={400}
                                                  height={400}
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-15%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       headphone
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       watches
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Fashion Watch</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="old-price">$1,999.00</span>
                                             <span className="product-price">$1,699.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={200}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-2.jpg"
                                                  width={400}
                                                  height={400}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-13%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       shoes
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       toys
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Men Shoes Black</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="old-price">$299.00</span>
                                             <span className="product-price">$259.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={400}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-3.jpg"
                                                  alt="product"
                                                  width={400}
                                                  height={400}
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-13%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       headphone
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       watches
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Men Watch</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="old-price">$299.00</span>
                                             <span className="product-price">$259.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={600}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-4.jpg"
                                                  width={400}
                                                  height={400}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-13%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       caps
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       t-shirts
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">White Cap</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="product-price">$88.00 – $108.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={800}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-5.jpg"
                                                  alt="product"
                                                  width={400}
                                                  height={400}
                                             />
                                        </a>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       dress
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       toys
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">
                                                  Woman Black Blouse
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
                                             <span className="product-price">$88.00 – $108.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={1000}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-6.jpg"
                                                  width={400}
                                                  height={400}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       Shoes
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       Toys
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Woman Red Bag</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="product-price">$29.00 – $39.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         {/* End .products-slider */}
                    </section>
                    <section className="sale-banner m-t-3 appear-animate">
                         <div className="banner" style={{ backgroundColor: "#ffab8c" }}>
                              <img
                                   src="assets/images/demoes/demo15/banners/banner-4.jpg"
                                   width={1120}
                                   height={380}
                                   style={{ backgroundColor: "#fca383" }}
                                   alt="banner"
                              />
                              <div className="banner-layer banner-layer-middle banner-layer-left">
                                   <h5 className="font-weight-normal m-b-3 font3 text-left">
                                        Outlet Selected Items
                                   </h5>
                                   <h4 className="mb-0 text-left text-uppercase text-white">
                                        big sale up to
                                   </h4>
                                   <h3 className="text-sale text-left text-white mb-0">
                                        80%
                                        <small>OFF</small>
                                   </h3>
                              </div>
                         </div>
                    </section>
                    <section
                         className="product-section-3 p-t-3 appear-animate"
                         data-animation-delay={100}
                         data-animation-duration={1500}
                    >
                         <h2
                              className="section-title ls-n-20 m-b-1 line-height-1 text-center appear-animate"
                              data-animation-delay={100}
                              data-animation-duration={1500}
                         >
                              Popular Products
                         </h2>
                         <h3
                              className="section-sub-title ls-n-20 font-weight-normal m-b-4 text-center appear-animate"
                              data-animation-delay={100}
                              data-animation-duration={1500}
                         >
                              All our popular products in a exclusive brand selection
                         </h3>
                         <div
                              className="products-slider owl-carousel owl-theme nav-pos-outside show-nav-hover nav-center-images-only"
                              data-owl-options="{
                      'nav': false,
                      'dots': false,
                      'responsive' : {
                          '0' : {
                              'items': 2
                          },
                          '576' : {
                              'items': 3
                          },
                          '768': {
                              'items': 4
                          },
                          '1200' : {
                              'items': 6,
                              'nav': true
                          }
                      }
                  }"
                         >
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-1.jpg"
                                                  alt="product"
                                                  width={400}
                                                  height={400}
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-15%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       headphone
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       watches
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Fashion Watch</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="old-price">$1,999.00</span>
                                             <span className="product-price">$1,699.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={200}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-2.jpg"
                                                  width={400}
                                                  height={400}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-13%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       shoes
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       toys
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Men Shoes Black</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="old-price">$299.00</span>
                                             <span className="product-price">$259.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={400}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-3.jpg"
                                                  alt="product"
                                                  width={400}
                                                  height={400}
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-13%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       headphone
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       watches
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Men Watch</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="old-price">$299.00</span>
                                             <span className="product-price">$259.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={600}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-4.jpg"
                                                  width={400}
                                                  height={400}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-13%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       caps
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       t-shirts
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">White Cap</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="product-price">$88.00 – $108.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={800}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-5.jpg"
                                                  alt="product"
                                                  width={400}
                                                  height={400}
                                             />
                                        </a>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       dress
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       toys
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">
                                                  Woman Black Blouse
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
                                             <span className="product-price">$88.00 – $108.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div
                                   className="product-default inner-quickview inner-icon appear-animate"
                                   data-animation-delay={1000}
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-6.jpg"
                                                  width={400}
                                                  height={400}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       Shoes
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       Toys
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Woman Red Bag</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="product-price">$29.00 – $39.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-1.jpg"
                                                  alt="product"
                                                  width={400}
                                                  height={400}
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-15%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       headphone
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       watches
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Fashion Watch</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="old-price">$1,999.00</span>
                                             <span className="product-price">$1,699.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo15-product.html">
                                             <img
                                                  src="assets/images/demoes/demo15/products/product-2.jpg"
                                                  width={400}
                                                  height={400}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">-13%</span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <button
                                                  className="btn-icon btn-add-cart"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart" />
                                             </button>
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
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       shoes
                                                  </a>
                                                  ,
                                                  <a
                                                       href="demo15-shop.html"
                                                       className="product-category"
                                                  >
                                                       toys
                                                  </a>
                                             </div>
                                             <a href="#" className="btn-icon-wish">
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo15-product.html">Men Shoes Black</a>{" "}
                                        </h3>
                                        {/* <div class="ratings-container">
                              <div class="product-ratings">
                                  <span class="ratings" style="width:100%"></span>
                                  <span class="tooltiptext tooltip-top"></span>
                              </div>
                          </div> */}
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
                         {/* End .products-slider */}
                    </section>
                    <div className="m-b-1" />
                    {/* margin */}
                    <div className="newsletter-banner appear-animate">
                         <div className="d-flex flex-wrap">
                              <div className="col-md-6 px-3">
                                   <h2 className="text-center ls-n-20 m-b-1 text-md-right">
                                        Subscribe To Our Newsletter
                                   </h2>
                                   <h5 className="font-weight-normal text-center text-md-right">
                                        Get all the latest information on events, sales and offers.
                                   </h5>
                              </div>
                              <div className="col-md-5 widget-newsletter px-3">
                                   <form action="#" className="d-flex justify-content-center mb-0">
                                        <input
                                             type="email"
                                             className="form-control mb-0"
                                             placeholder="Email address"
                                             required=""
                                        />
                                        <button className="btn btn-primary">subscribe</button>
                                   </form>
                              </div>
                         </div>
                    </div>
                    <section className="appear-animate p-y-5">
                         <h2 className="d-none">Our customers</h2>
                         <div className="container">
                              <div
                                   className="brands-slider owl-carousel owl-theme images-center mt-5"
                                   data-owl-options="{
                          'responsive': {
                              '0': {
                                  'items': 2,
                                  'margin': 0
                              },
                              '576': {
                                  'items': 3
                              },
                              '992': {
                                  'items': 4
                              }
                          }
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
                    </section>
               </div>
               {/* End .container */}
          </main>
     );
};
