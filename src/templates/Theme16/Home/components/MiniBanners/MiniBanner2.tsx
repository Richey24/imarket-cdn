import React, { useState } from "react";
import Slider from "react-slick";
import { miniBanner2Product } from "../../data";
import { templateImages } from "@/appProvider/templateImages";
export const MiniBanner2 = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <section className="section-6 d-block d-md-flex">
               <div
                    className="col-md-6 col-12 banner d-flex align-items-center appear-animate bg-img bg-fixed bg-left"
                    data-animation-duration={1200}
                    style={{
                         backgroundImage: `url(${templateImages.demo16.bgImages.bg4})`,
                         animationDelay: "0ms",
                         animationDuration: "1200ms",
                         backgroundColor: "#dcdbd9",
                    }}
               >
                    <div className="banner-content ml-auto text-right">
                         <h3 className="title">
                              WOMEN'S
                              <br />
                              OUTFITS
                         </h3>
                         <p className="subtitle">Check out this week's hottest styles.</p>
                         <div className="mb-0">
                              <a
                                   href="demo16-shop.html"
                                   role="button"
                                   className="btn btn-borders btn-lg btn-outline-dark btn-dark"
                              >
                                   SHOP NOW
                              </a>
                         </div>
                    </div>
                    {/* End .banner-content */}
               </div>
               {/* End .banner */}
               <div className="col-md-6 col-12 product-part pb-3">
                    <div className="products-slider   owl-theme">
                         <Slider {...settings}>
                              {miniBanner2Product.map((product) => (
                                   <div
                                        className="product-default inner-quickview inner-icon appear-animate"
                                        data-animation-name="fadeInRightShorter"
                                   >
                                        <figure>
                                             <a href="demo16-product.html">
                                                  <img
                                                       src={product.productImageUrl}
                                                       alt="product"
                                                       width={400}
                                                       height={400}
                                                  />
                                               
                                             </a>
                                             <div className="btn-icon-group">
                                                  <button
                                                       className="btn-icon btn-add-cart product-type-simple"
                                                       data-toggle="modal"
                                                       data-target="#addCartModal"
                                                  >
                                                       <i className="icon-shopping-cart" />
                                                  </button>
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
                                                            href="demo16-shop.html"
                                                            className="product-category"
                                                       >
                                                            CAPS
                                                       </a>
                                                       ,
                                                       <a
                                                            href="demo16-shop.html"
                                                            className="product-category"
                                                       >
                                                            OUTFITS
                                                       </a>
                                                       ,
                                                       <a
                                                            href="demo16-shop.html"
                                                            className="product-category"
                                                       >
                                                            WOMEN OUTFITS
                                                       </a>
                                                  </div>
                                                  <a href="#" className="btn-icon-wish">
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a
                                                       href="demo16-product.html"
                                                       className="text-dark"
                                                  >
                                                       Fashion High Hill
                                                  </a>{" "}
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
                              ))}
                         </Slider>
                    </div>
               </div>
               {/* End .col-md-6 */}
          </section>
     );
};
