import React, { useState } from "react";
import Slider from "react-slick";
import { RecentProducts, } from "../data";
import banner from '../../../../assets/images/demoes/demo22/banners/banner-3.jpg'
export const RecentProduct = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 5,
         slidesToScroll: 1,
         beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
    };
     return (
          <section className="recent-products" style={{paddingLeft:'80px', paddingRight:'80px'}}>
               <div className="container">
                    <div
                         className="appear-animate"
                         data-animation-name="fadeIn"
                         data-animation-delay={200}
                    >
                         <h2 className="section-title ls-n-10 pb-3 m-b-4">Recent Products</h2>
                         <div className="row">
                              <div className="products-slider 5col   owl-theme owl-nav-outisde show-nav-hover">
                              <Slider {...settings}>
                                   {" "}
                                   {RecentProducts.map((product) => (
                                        <div className="product-default inner-quickview inner-icon">
                                             <figure>
                                                  <a href="demo22-product.html">
                                                       <img
                                                            src={product.productImageUrl.src}
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
                                   ))}
                              </Slider>
                              </div>
                         </div>
                    </div>
                    <div
                         className="banner banner3 bg-dark appear-animate"
                         data-animation-name="fadeIn"
                         data-animation-delay={200}
                    >
                         <div className="row m-0 no-gutters align-items-center">
                              <div className="col-md-6 col-lg-3 align-self-baseline">
                                   <figure>
                                        <img
                                             src={banner.src}
                                             alt="image"
                                             width={380}
                                             height={136}
                                        />
                                   </figure>
                              </div>
                              <div className="col-md-6 col-lg-4 py-4 py-lg-5">
                                   <div className="px-5 px-md-0">
                                        <h3 className="font1 text-uppercase m-b-2">
                                             Check new arrivals
                                        </h3>
                                        <h2 className="font1 ls-10 text-uppercase text-white mb-0">
                                             Explore Smartphones
                                        </h2>
                                   </div>
                              </div>
                              <div className="col-md-6 col-lg-3 py-4 py-lg-5 d-flex justify-content-md-center">
                                   <div className="px-5 px-md-0">
                                        <div className="coupon-sale-text d-flex flex-column align-items-start">
                                             <h4 className="m-b-2 font1 d-block text-dark bg-white skew-box">
                                                  Exclusive COUPON
                                             </h4>
                                             <h5 className="mb-0 font1 d-inline-block bg-primary skew-box">
                                                  <i className="text-white ls-0">UP TO</i>
                                                  <b className="text-white">$200</b>
                                                  <sub className="text-white">OFF</sub>
                                             </h5>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md-6 col-lg-2 py-4 py-lg-5">
                                   <div className="px-5 px-md-0">
                                        <a
                                             href="demo22-shop.html"
                                             className="btn btn-dark font1 ls-10"
                                        >
                                             View All Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
