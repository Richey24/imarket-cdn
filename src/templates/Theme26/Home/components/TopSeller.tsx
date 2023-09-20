import React, { useState } from "react";
import Slider from "react-slick";
import { topsellerproducts } from "../data";
export const TopSeller = () => {
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
          <section
               className="top-sellers-section appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={200}
          >
               <div className="container">
                    <div
                         className="banner banner3 d-flex flex-wrap align-items-center"
                         style={{
                              background: `#dc7a1f no-repeat center/cover url(assets/images/demoes/demo26/banners/banner-3.jpg)`,
                         }}
                    >
                         <div className="col-lg-9 mb-2 mb-lg-0">
                              <h2 className="d-inline-block ls-n-20 text-white text-uppercase mb-0">
                                   <span className="sale-off">Big sale</span> ALL HIGH PERFORMANCE
                                   ITEMS UP TO 70% OFF
                              </h2>
                              <h6 className="d-inline-block mb-0">Online Purchases Only</h6>
                         </div>
                         <div className="col-lg-3 text-lg-right">
                              <a href="demo26-shop.html" className="btn btn-light btn-lg">
                                   View Sale
                              </a>
                         </div>
                    </div>
                    <h2 className="section-title pb-3 m-b-4">Top Seller</h2>

                    <Slider {...settings}>
                         {topsellerproducts.map((data) => (
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
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                             <div className="product-label label-sale">-13%</div>
                                        </div>
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
                                             <a href="demo26-product.html">{data.productTitle}</a>
                                        </h3>
                                        {/* <div class="ratings-container">
                                          <div class="product-ratings">
                                              <span class="ratings" style="width:100%"></span>
                                              <span class="tooltiptext tooltip-top"></span>
                                          </div>
                                      </div> */}
                                        <div className="price-box">
                                             <span className="old-price">$299.0</span>
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
