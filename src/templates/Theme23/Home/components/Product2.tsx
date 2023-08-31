import React, { useState } from "react";
import Slider from "react-slick";
import { newProducts } from "../data";

export const Product2 = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };

     return (
          <div className="no-gutters" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
               <Slider {...settings}>
                    {newProducts.map((product) => (
                         <div className="product-default inner-quickview inner-icon">
                              <figure>
                                   <a href="demo21-product.html">
                                        <img
                                             src={product.productImageUrl}
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
                                        <a href="demo21-product.html">{product.productTitle}</a>
                                   </h3>
                                   {/* <div class="ratings-container">
                           <div class="product-ratings">
                               <span class="ratings" style="width:100%"></span>
                               <span class="tooltiptext tooltip-top"></span>
                           </div>
                       </div> */}
                                   <div className="price-box">
                                        <span className="product-price">
                                             ${product.productPrice}
                                        </span>
                                   </div>
                              </div>
                         </div>
                    ))}
               </Slider>
          </div>
     );
};
