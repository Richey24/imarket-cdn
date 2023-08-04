import React from "react";

import { FeaturedProducts } from "./components/FeaturedProducts";
import { CatBanner, MiniBanner } from "./components/MiniBanner";
import { NewProducts } from "./components/NewProducts";
import { SpecialOffer } from "./components/SpecialOffer";
import { Products } from "./components/Products/Products";
import { Brands } from "./components/Brands";
import { Banner } from "./components/Banner";

const Home = () => {
     return (
          <main className="main">
               <Banner />
               <FeaturedProducts />
               {/* <section className="cat-section bg-gray">
                    <div className="container">
                         <div
                              style={{display:'flex',gap:"40px",
                               }}
                              
                             
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
               </section> */}
               <section className="new-products-section">
                    <div className="container">
                         <MiniBanner />
                         <h2
                              className="section-title ls-n-10 pb-3 m-b-4 appear-animate"
                              data-animation-name="fadeIn"
                              data-animation-delay={300}
                         >
                              New Arrivals
                         </h2>
                         <NewProducts />
                    </div>
               </section>
               <SpecialOffer />
               <CatBanner />
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
               <Products />
               <Brands />
          </main>
     );
};

export default Home;
