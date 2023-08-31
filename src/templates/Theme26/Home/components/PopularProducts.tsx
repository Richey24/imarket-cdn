import React, { useState } from "react";
import Slider from "react-slick";
import { popularproducts } from "../data";
export const PopularProducts = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <section className="popular-section">
               <div className="container">
                    <div
                         className="appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={400}
                    >
                         <h2 className="section-title pb-3 m-b-4">Popular Items</h2>

                         <Slider {...settings}>
                              {popularproducts.map((data) => (
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo26-product.html">
                                                  <img
                                                       src={data.productImageUrl}
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo26-product.html"
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
                                                            href="demo26-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo26-product.html">
                                                       {data.productTitle}
                                                  </a>
                                             </h3>
                                             {/* <div class="ratings-container">
                                      <div class="product-ratings">
                                          <span class="ratings" style="width:100%"></span>
                                          <span class="tooltiptext tooltip-top"></span>
                                      </div>
                                  </div> */}
                                             <div className="price-box">
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
                    <div
                         className="tagcloud d-flex flex-wrap justify-content-between bg-gray mb-4 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={600}
                    >
                         <a href="demo26-shop.html">Cadillac</a>
                         <a href="demo26-shop.html">Chevy</a>
                         <a href="demo26-shop.html">Dodge</a>
                         <a href="demo26-shop.html">Ford</a>
                         <a href="demo26-shop.html">Honda</a>
                         <a href="demo26-shop.html">Hyundai</a>
                         <a href="demo26-shop.html">Jeep</a>
                         <a href="demo26-shop.html">Nissan</a>
                         <a href="demo26-shop.html">Toyota</a>
                    </div>
               </div>
          </section>
     );
};
