import React from "react";
import Banner from "./components/Banner";
import Banner5 from "../../../assets/images/demoes/demo4/banners/banner-5.jpg";
import Slider from "react-slick";
import Image from "next/image";
import { InfoBoxesContainer } from "./components/Info";
import SmallBoxes from "./components/smallBoxes";
import {
     bestSellingWidget,
     categories,
     featuredProductWidget,
     latestproductWidget,
     newArrivalData,
     productsData,
     slidesData,
     topRatedWidget,
} from "./data";
import FeaturedProductsSection from "./components/FeaturedProduct";
import CategoriesSlider from "./components/CategoriesSlider";
import Post from "./components/Post";
import { ProductWidget } from "./components/ProductWidget";

const Home = () => {
     let settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
     };
     return (
          <div className="page-wrapper">
               <main className="main">
                    <div className="home-slider show-nav-hover nav-big mb-2 text-uppercase">
                         <Banner slides={slidesData} />
                    </div>
                    <InfoBoxesContainer />
                    <SmallBoxes />
                    <FeaturedProductsSection
                         products={[...productsData]}
                         section="Featured Products"
                    />
                    <FeaturedProductsSection products={newArrivalData} section="New Arrivals" />
                    <section
                         className="new-products-section"
                         style={{ backgroundColor: "#f6f7f9" }}
                    >
                         <div className="container">
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
                              <CategoriesSlider categories={categories} />
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
                                                       We really care about you and your website as
                                                       much as you do. Purchasing Porto or any other
                                                       theme from us you get 100% free support.
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
                                                       With Porto you can customize the layout,
                                                       colors and styles within only a few minutes.
                                                       Start creating an amazing website right now!
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
                                                       Porto has very powerful admin features to
                                                       help customer to build their own shop in
                                                       minutes without any special skills in web
                                                       development.
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
                                        <a
                                             href="category.html"
                                             className="btn btn-dark btn-black ls-10"
                                        >
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
                                             <b className="text-white bg-secondary ls-n-10">
                                                  $100
                                             </b>{" "}
                                             OFF
                                        </h5>
                                   </div>
                              </div>
                         </div>
                    </section>
                    <section className="blog-section pb-0" style={{ background: "#f6f7f9" }}>
                         <div className="container">
                              <hr className="mt-0 m-b-5" />
                              {/* End .brands-slider */}
                              <hr className="mt-4 m-b-5" />
                              <div className="product-widgets-container row pb-2">
                                   <div
                                        className="col-lg-3 col-sm-6 pb-5 pb-md-0 "
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={200}
                                   >
                                        <h4 className="section-sub-title">Featured Products</h4>
                                        {featuredProductWidget.map((product, index) => (
                                             <ProductWidget
                                                  key={index}
                                                  productImage={product.image1}
                                                  productTitle={product.title}
                                                  productPrice={product.price}
                                                  productImageTwo={product.image2}
                                             />
                                        ))}
                                   </div>
                                   <div
                                        className="col-lg-3 col-sm-6 pb-5 pb-md-0 "
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={500}
                                   >
                                        <h4 className="section-sub-title">Best Selling Products</h4>
                                        {bestSellingWidget.map((product, index) => (
                                             <ProductWidget
                                                  key={index}
                                                  productImage={product.image1}
                                                  productTitle={product.title}
                                                  productPrice={product.price}
                                                  productImageTwo={product.image2}
                                             />
                                        ))}
                                   </div>
                                   <div
                                        className="col-lg-3 col-sm-6 pb-5 pb-md-0 "
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={800}
                                   >
                                        <h4 className="section-sub-title">Latest Products</h4>
                                        {latestproductWidget.map((product, index) => (
                                             <ProductWidget
                                                  key={index}
                                                  productImage={product.image1}
                                                  productTitle={product.title}
                                                  productPrice={product.price}
                                                  productImageTwo={product.image2}
                                             />
                                        ))}
                                   </div>
                                   <div
                                        className="col-lg-3 col-sm-6 pb-5 pb-md-0"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={1100}
                                   >
                                        <h4 className="section-sub-title">Top Rated Products</h4>
                                        {topRatedWidget.map((product, index) => (
                                             <ProductWidget
                                                  key={index}
                                                  productImage={product.image1}
                                                  productTitle={product.title}
                                                  productPrice={product.price}
                                                  productImageTwo={product.image2}
                                             />
                                        ))}
                                   </div>
                              </div>
                              {/* End .row */}
                         </div>
                    </section>
               </main>
          </div>
     );
};

export default Home;
