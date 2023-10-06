import React from "react";
import { productinfo, productinfo2 } from "../data";
import { templateImages } from "@/appProvider/templateImages";

const ProductInfo = () => {
     return (
          <section className="product-info-container">
               <div className="container">
                    <div className="row">
                         <div className="col-md-6 col-lg-6">
                              <div className="heading">
                                   <h4
                                        className="text-transform-none appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={200}
                                   >
                                        Super Sale
                                   </h4>
                                   <h2
                                        className="text-transform-none appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={600}
                                   >
                                        TRENDING LOOKS
                                   </h2>
                                   <div
                                        className="d-flex appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={600}
                                   >
                                        <h5 className="d-inline-block mb-0">
                                             <span>for only</span>
                                             <b className="coupon-sale-text text-white bg-secondary align-middle">
                                                  <sup>$</sup>
                                                  <em className="align-text-top">99</em>
                                                  <sup>99</sup>
                                             </b>
                                        </h5>
                                   </div>
                              </div>
                              <ul
                                   className="product-info-content appear-animate"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={1000}
                              >
                                   {productinfo.map((data, idx) => (
                                        <li key={idx} className="product-info-item">
                                             <div className="product-default">
                                                  <figure className="d-none">
                                                       <a href="demo37-product.html">
                                                            <img
                                                                 src={data.productImageUrl}
                                                                 width={205}
                                                                 height={205}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details d-flex align-items-center">
                                                       <h3 className="product-title">
                                                            <a href="demo37-product.html">
                                                                 {data.productTitle}
                                                            </a>
                                                       </h3>
                                                       <div className="price-box">
                                                            <span className="old-price">
                                                                 $399.00
                                                            </span>
                                                            <span className="product-price">
                                                                 ${data.productPrice}
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                       <a
                                                            href="#"
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                       >
                                                            Add To Cart
                                                       </a>
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         <div className="col-12 col-md-6 col-lg-4 position-relative mt-auto">
                              <div
                                   className="product-info-image appear-animate"
                                   data-animation-name="fadeIn"
                                   data-animation-delay={1200}
                              >
                                   <figure className="mb-0">
                                        <img
                                             src={templateImages.demo37.bannerImage.banner3}
                                             width={400}
                                             height={532}
                                             alt="Product"
                                        />
                                   </figure>
                                   {productinfo2.map((data, idx) => (
                                        <div
                                             key={idx}
                                             className={`product-popup-dot ${data.position}`}
                                        >
                                             <a href="#">
                                                  <i className="fas fa-circle" />
                                             </a>
                                             <div className="product-popup-wrap">
                                                  <div className="product-default inner-quickview inner-icon">
                                                       <figure>
                                                            <a href="demo37-product.html">
                                                                 <img
                                                                      src={data.productImageUrl}
                                                                      width={205}
                                                                      height={205}
                                                                      alt="product"
                                                                 />
                                                            </a>
                                                       </figure>
                                                       <div className="product-details">
                                                            <div className="category-wrap">
                                                                 <div className="category-list">
                                                                      <a
                                                                           href={data.atag}
                                                                           className="product-category"
                                                                      >
                                                                           {data.productCategory}
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                            <h3 className="product-title">
                                                                 <a href="demo37-product.html">
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
                                                            <a
                                                                 href="#"
                                                                 className="btn-icon btn-add-cart product-type-simple"
                                                            >
                                                                 <i className=" icon-shopping-cart" />
                                                                 <span>ADD TO CART</span>
                                                            </a>
                                                       </div>
                                                       {/* End .product-details */}
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                         <div className="col-12 col-sm-8 col-md-6 col-lg-2 d-flex align-items-center">
                              <div
                                   className=" btn-group flex-column mt-0 mt-md-3 mt-lg-0 appear-animate"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={700}
                              >
                                   <a
                                        href="demo37-shop.html"
                                        className="btn btn-dark btn-shop m-b-3"
                                   >
                                        SHOP MEN
                                   </a>
                                   <a href="demo37-shop.html" className="btn btn-dark btn-shop">
                                        SHOP WOMEN
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default ProductInfo;
