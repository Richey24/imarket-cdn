import { templateImages } from "@/appProvider/templateImages";
import { onSaleProduct, topRatedProduct, topSellingProduct } from "../data";

import Image from "next/image";
export const Products = () => {
     return (
          <div className="product-widgets-container lg-images mb-0">
               <div className="container">
                    <div className="row">
                         <div className="col-md-6 col-lg-3">
                              <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">
                                   Top Rated Products
                              </h4>
                              {topRatedProduct.map((product, index) => (
                                   <div
                                        className="product-default left-details product-widget"
                                        key={index}
                                   >
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <Image
                                                       src={product.productImageUrl}
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />

                                                  {product.productImageUrlTwo && (
                                                       <Image
                                                            src={product.productImageUrlTwo}
                                                            width={84}
                                                            height={84}
                                                            alt="product"
                                                       />
                                                  )}
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       {product.productTitle}
                                                  </a>{" "}
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
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              ))}
                         </div>
                         <div className="col-md-6 col-lg-3">
                              <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">
                                   Top Selling Products
                              </h4>
                              {topSellingProduct.map((product, index) => (
                                   <div
                                        className="product-default left-details product-widget"
                                        key={index}
                                   >
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <Image
                                                       src={product.productImageUrl}
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />

                                                  {product.productImageUrlTwo && (
                                                       <Image
                                                            src={product.productImageUrlTwo}
                                                            width={84}
                                                            height={84}
                                                            alt="product"
                                                       />
                                                  )}
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       {product.productTitle}
                                                  </a>{" "}
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
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              ))}
                         </div>
                         <div className="col-md-6 col-lg-3">
                              <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">
                                   On Sale Products
                              </h4>
                              {onSaleProduct.map((product, index) => (
                                   <div
                                        className="product-default left-details product-widget"
                                        key={index}
                                   >
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <Image
                                                       src={product.productImageUrl}
                                                       width={84}
                                                       height={84}
                                                       alt="product"
                                                  />

                                                  {product.productImageUrlTwo && (
                                                       <Image
                                                            src={product.productImageUrlTwo}
                                                            width={84}
                                                            height={84}
                                                            alt="product"
                                                       />
                                                  )}
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo21-product.html">
                                                       {product.productTitle}
                                                  </a>{" "}
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
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              ))}
                         </div>
                         <div className="col-md-6 col-lg-3">
                              <div className="product-default count-down">
                                   <h3 className="product-name">Flash Deals</h3>
                                   <figure>
                                        <a href="demo21-product.html">
                                             <img
                                                  src={templateImages.demo21.bannerImage.banner4}
                                                  width={217}
                                                  height={217}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-primary">
                                                  SALE
                                             </span>
                                             <span className="product-label label-dark">-50%</span>
                                        </div>
                                        <div className="product-countdown-container">
                                             <span className="product-countdown-title">
                                                  offer ends in:
                                             </span>
                                             <div
                                                  className="product-countdown countdown-compact"
                                                  data-until="2021, 10, 5"
                                                  data-compact="true"
                                             ></div>
                                             {/* End .product-countdown */}
                                        </div>
                                        {/* End .product-countdown-container */}
                                   </figure>
                                   <div className="product-details">
                                        <h3 className="product-title">
                                             <a href="demo21-product.html">1080p Wifi IP Camera</a>
                                        </h3>
                                        {/* <div class="ratings-container">
                    <div class="product-ratings">
                        <span class="ratings" style="width:100%"></span>
                        <span class="tooltiptext tooltip-top"></span>
                    </div>
                </div> */}
                                        <div className="price-box">
                                             <span className="old-price">$596.00</span>
                                             <span className="product-price">$299.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
