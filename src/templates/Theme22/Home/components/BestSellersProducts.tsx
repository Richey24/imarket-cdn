import React from "react";
import product from '../../../../assets/images/demoes/demo22/products/product-big-1.jpg'
import product1 from '../../../../assets/images/demoes/demo22/products/product-22.jpg'
import product2 from '../../../../assets/images/demoes/demo22/products/product-21.jpg'
import product3 from '../../../../assets/images/demoes/demo22/products/product-20.jpg'
import product4 from '../../../../assets/images/demoes/demo22/products/product-23.jpg'
import product5 from '../../../../assets/images/demoes/demo22/products/product-5.jpg'
import product6 from '../../../../assets/images/demoes/demo22/products/product-11.jpg'

export const BestSellersProducts = () => {
     return (
          <section
               className="best-sellers bg-gray appear-animate"
               style={{paddingLeft:'80px', paddingRight:'80px'}}
          >
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">
                         Best Sellers on Electronics
                    </h2>
                    <div className="grid grid1" style={{ position: "relative", height: "551px" }}>
                         <div
                              className="grid-item col-md-8 col-lg-9 col-xl-5col-2 height-x2"
                              style={{ position: "absolute", left: "0%", top: "0px" }}
                         >
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo22-product.html">
                                             <img
                                                  src={product.src}
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
                                                       href="demo22-shop.html"
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
                                             <a href="demo22-product.html">Smart Watches</a>
                                        </h3>
                                        {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="product-price">$299.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div
                              className="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1"
                              style={{ position: "absolute", left: "39.9989%", top: "0px" }}
                         >
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo22-product.html">
                                             <img
                                                  src={product1.src}
                                                  width={217}
                                                  height={217}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-sale">-33%</div>
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
                                        <div className="product-countdown-container">
                                             <span className="product-countdown-title">
                                                  offer ends in:{" "}
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
                                                  title="Add to Wishlist"
                                                  className="btn-icon-wish"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="demo22-product.html">HD Camera</a>
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
                                             <span className="product-price">$199.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div
                              className="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1"
                              style={{ position: "absolute", left: "59.9984%", top: "0px" }}
                         >
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo22-product.html">
                                             <img
                                                  src={product2.src}
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
                                                       href="demo22-shop.html"
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
                                             <a href="demo22-product.html">Black Watches</a>
                                        </h3>
                                        {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="old-price">$199.00</span>
                                             <span className="product-price">$129.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div
                              className="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1"
                              style={{ position: "absolute", left: "79.9979%", top: "0px" }}
                         >
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo22-product.html">
                                             <img
                                                  src={product3.src}
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
                                                       href="demo22-shop.html"
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
                                             <a href="demo22-product.html">HD Camera</a>
                                        </h3>
                                        {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="old-price">$199.00</span>
                                             <span className="product-price">$129.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div
                              className="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1"
                              style={{ position: "absolute", left: "39.9989%", top: "275px" }}
                         >
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo22-product.html">
                                             <img
                                                  src={product4.src}
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
                                                       href="demo22-shop.html"
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
                                             <a href="demo22-product.html">Computer Mouse</a>
                                        </h3>
                                        {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="product-price">$55.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div
                              className="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1"
                              style={{ position: "absolute", left: "59.9984%", top: "275px" }}
                         >
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo22-product.html">
                                             <img
                                                  src={product5.src}
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
                                                       href="demo22-shop.html"
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
                                             <a href="demo22-product.html">Battery Charger</a>
                                        </h3>
                                        {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                        {/* End .product-container */}
                                        <div className="price-box">
                                             <span className="product-price">$299.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div
                              className="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1"
                              style={{ position: "absolute", left: "79.9979%", top: "275px" }}
                         >
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo22-product.html">
                                             <img
                                                  src={product6.src}
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
                                                       href="demo22-shop.html"
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
                                             <a href="demo22-product.html">Blue Gentle Shoes</a>
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
                         {/* <div className="grid-col-sizer col-1 col-xl-5col" style={{position:'absolute',left:'0%', top:'550px'}}/> */}
                    </div>
               </div>
          </section>
     );
};
