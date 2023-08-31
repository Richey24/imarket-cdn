import React, { useState } from "react";
import { featuredProducts } from "../data";
 
import Slider from "react-slick";

export const FeaturedProducts = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <section className="featured-products-section"  >
               <div className="container">
                    <h2 className="section-title ls-n-10 text-center text-uppercase m-b-3" style={{fontWeight:'bold'}}>
                         Featured Products
                    </h2>
                    <Slider {...settings}>
                         {featuredProducts.map((product) => (
                              
                              <div className="product-default inner-quickview inner-icon w-100">
                              <figure>
                                   <a href="demo13-product.html">
                                        <img
                                             src={product.productImageUrl}
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
                                                  {product.productCategory}
                                             </a>
                                        </div>
                                   </div>
                                   <h3 className="product-title">
                                        <a href="demo13-product.html">{product.productTitle}</a>
                                   </h3>

                                   {/* End .product-container */}
                                   <div className="price-box">
                                        {product.productPrice && (
                                             <span className="old-price">
                                                  ${product.productPrice.toFixed(2)}
                                             </span>
                                        )}
                                        <span className="product-price">
                                             ${product.productPrice.toFixed(2)}
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
