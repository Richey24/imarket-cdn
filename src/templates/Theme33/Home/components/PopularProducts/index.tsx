import Product from "@/app/components/Product";
import ProductWidget from "@/app/components/Product/ProductWidget";
import ProductList from "@/app/components/ProductList";
import { templateImages } from "@/appProvider/templateImages";
import { topRatedProducts } from "@/templates/Theme1/Home/data";
import React from "react";

export default function PopularProducts() {
     return (
          <div className="product-widgets container">
               <div className="row">
                    <div className="col-9">
                         <div className="row">
                              {/* product-1 */}
                              <div className="col-lg-4 col-sm-6 pb-5">
                                   <h4 className="section-sub-title text-uppercase ">
                                        Top Rated Products
                                   </h4>
                                   {topRatedProducts.map((product, index) => (
                                        <ProductWidget key={`product-${index}`} {...product} />
                                   ))}
                              </div>
                              {/* product-2 */}
                              <div className="col-lg-4 col-sm-6 pb-5">
                                   <h4 className="section-sub-title text-uppercase">
                                        Best Selling Products
                                   </h4>
                                   {topRatedProducts.map((product, index) => (
                                        <ProductWidget key={`product-${index}`} {...product} />
                                   ))}
                              </div>
                              {/* product-3 */}
                              <div className="col-lg-4 col-sm-6 pb-5">
                                   <h4 className="section-sub-title text-uppercase m-b-3">
                                        Latest Products
                                   </h4>
                                   {topRatedProducts.map((product, index) => (
                                        <ProductWidget key={`product-${index}`} {...product} />
                                   ))}
                              </div>
                         </div>
                    </div>
                    {/* End .row */}
                    <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                         <div className="banner text-center top-shoes-banner banner-sm-vw-large tw-bg-[#28252c]">
                              <figure>
                                   <img
                                        src={templateImages.demo33.bannerImage.banner1}
                                        alt="banner"
                                        width="266"
                                        height="325"
                                   />
                              </figure>

                              <div className="banner-layer banner-layer-middle">
                                   <h3 className="m-b-2">Top Shoes</h3>
                                   <h4 className="text-primary m-b-3">Summer Sale</h4>
                                   <a href="demo33-shop.html" className="btn btn-light btn-outline">
                                        Shop Now
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
