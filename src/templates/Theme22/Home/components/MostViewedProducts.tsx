import React, { useState } from "react";
import Slider from "react-slick";
import { mostViedProducts } from "../data";
export const MostViewedProducts = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <section
               className="most-viewed-products appear-animate"
               style={{ paddingLeft: "80px", paddingRight: "80px" }}
          >
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Most Viewed Products</h2>
                    <div className="row">
                         <div className="products-slider 5col  owl-theme owl-nav-outisde show-nav-hover nav-image-center custom-nav">
                              <div className="owl-stage-outer">
                                   <div
                                        className="owl-stage"
                                        style={{
                                             transform: "translate3d(0px, 0px, 0px)",
                                             transition: "all 0s ease 0s",
                                             width: "1368px",
                                        }}
                                   >
                                        <Slider {...settings}>
                                             {" "}
                                             {mostViedProducts.map((product) => (
                                                  <div className="owl-item active" style={{ width: '228px' }}>
                                                       <div className="product-default inner-quickview inner-icon">
                                                            <figure>
                                                                 <a href="demo22-product.html">
                                                                      <img
                                                                           src={
                                                                                product
                                                                                     .productImageUrl
                                                                                      
                                                                           }
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
                                                                      <a href="demo22-product.html">
                                                                           {product.productTitle}
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
                                                                           ${product.productPrice}
                                                                      </span>
                                                                 </div>
                                                                 {/* End .price-box */}
                                                            </div>
                                                            {/* End .product-details */}
                                                       </div>
                                                  </div>
                                             ))}
                                        </Slider>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
