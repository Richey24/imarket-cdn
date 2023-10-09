import { templateImages } from "@/appProvider/templateImages";
import { onSaleProduct, topRatedProduct, topSellingProduct } from "../data";
import { ProductWidget } from "./ProductWidget";
export const TopRatedProducts = ({ products, productDatas, section, section2, section3 }) => {
     return (
          <div className="product-widgets-container lg-images mb-0">
               <div className="container">
                    <div className="row">
                         <div className="col-md-6 col-lg-3">
                              <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">{section}</h4>
                              {products
                                   .sort((a: any, b: any) => b.__last_update - a.__last_update)
                                   .filter((_, idx) => idx < 3)
                                   .map((product, index) => (
                                        <ProductWidget
                                             key={`featured-product-${index}`}
                                             {...product}
                                        />
                                   ))}
                         </div>
                         <div className="col-md-6 col-lg-3">
                              <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">{section2}</h4>
                              {productDatas
                                   .sort((a: any, b: any) => b.__last_update - a.__last_update)
                                   .filter((_, idx) => idx < 3)
                                   .map((product, index) => (
                                        <ProductWidget
                                             key={`latest-product-${index}`}
                                             {...product}
                                        />
                                   ))}
                         </div>
                         <div className="col-md-6 col-lg-3">
                              <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">{section3}</h4>
                              {onSaleProduct.map((product, idx) => (
                                   <ProductWidget key={idx} {...product} />
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
