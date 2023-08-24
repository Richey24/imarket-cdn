import Slider from "react-slick";
import React, { useState } from "react";
import { featuredProducts, styledOutFitsProducts } from "../../data";
import { templateImages } from "@/appProvider/templateImages";

export const Product = () => {
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
          <section
               className="section-4 product-collection bg-fixed"
               style={{
                    backgroundImage: `url(${templateImages.demo16.bgImages.bg2})`,
                    backgroundColor: "#dcdbd9",
               }}
          >
               <div className="container text-center">
                    <div className="title-group">
                         <h2 className="text-white m-b-1">Styled Outfits</h2>
                         <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pt-2 text-white mb-4">
                              Starting at
                              <span>
                                   $<strong>29</strong>99
                              </span>
                         </h5>
                    </div>
                    {/* .End .title-group */}
               </div>
               {/* End .container */}
               <div className="container">
                    <div className="products-slider   owl-theme nav-image-center show-nav-hover nav-outer nav-white">
                         <Slider {...settings}>
                              {styledOutFitsProducts.map((product) => (
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
                                             <div className="label-group">
                                                  <span className="product-label label-hot">
                                                       HOT
                                                  </span>
                                             </div>
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
                                                            DRESS
                                                       </a>
                                                       ,
                                                       <a
                                                            href="demo16-shop.html"
                                                            className="product-category"
                                                       >
                                                            OUTFITS
                                                       </a>
                                                  </div>
                                             </div>
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo16-product.html">
                                                       Woman Black Blouse
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
                                                  <span className="product-price">
                                                       $101.00 - $111.00
                                                  </span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              ))}
                         </Slider>

                         {/* End .product-default */}

                         {/* End .product-default */}
                    </div>
                    {/* End .section-products-carousel */}
               </div>
               {/* End .container */}
          </section>
     );
};
