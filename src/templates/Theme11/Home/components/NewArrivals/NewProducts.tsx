import React, { useState } from "react";
import Slider from "react-slick";
import { newArrivalsProducts } from "../../data";

export const NewProducts = () => {
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
          <div className="no-gutters">
               <Slider {...settings}>
                    {newArrivalsProducts.map((product) => (
                         <div className="product-default inner-quickview inner-icon">
                              <figure>
                                   <a href="demo21-product.html">
                                        <img
                                             src={product.productImageUrl.src}
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
                                   {/* <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                    <span class="tooltiptext tooltip-top"></span>
                                </div>
                            </div> */}
                                   <div className="price-box">
                                        <span className="product-price">$55.00</span>
                                   </div>
                                   {/* End .price-box */}
                              </div>
                              {/* End .product-details */}
                         </div>
                    ))}
               </Slider>
          </div>
     );
};
