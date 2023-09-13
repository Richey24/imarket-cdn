import React, { useState } from "react";
import { productScrolls } from "../data";
import Slider from "react-slick";

export const TopProduct = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          margin:20,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <section
               className="products-scroll-section appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={100}
          >
               <div className="container">
                    <h2 className="section-title heading-border ls-n-10 border-0 text-center text-capitalize">
                         Top 10 Products
                    </h2>

                    <Slider {...settings}>
                         {productScrolls.map((data) => (
                              <div className="product-default inner-quickview inner-icon"  >
                                   <figure>
                                        <a href="demo37-product.html">
                                             <img
                                                  src={data.productImageUrl}
                                                  width={205}
                                                  height={205}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-number">
                                                  1<span>º</span>
                                             </div>
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
                                                       href="demo37-shop.html"
                                                       className="product-category"
                                                  >
                                                       {data.productCategory}
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
                                             <a href="demo37-product.html">{data.productTitle}</a>
                                        </h3>
                                        {/* <div class="ratings-container">
                          <div class="product-ratings">
                              <span class="ratings" style="width:100%"></span>
                              <span class="tooltiptext tooltip-top"></span>
                          </div>
                      </div> */}
                                        <div className="price-box">
                                             <span className="old-price">$90.00</span>
                                             <span className="product-price">
                                                  ${data.productPrice}
                                             </span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         ))}
                    </Slider>
               </div>
          </section>
     );
};
