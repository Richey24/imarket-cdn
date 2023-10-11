import React from "react";

import { templateImages } from "@/appProvider/templateImages";
import { mobileandAcc } from "../data";
import { Product } from "./Product";

export const MobileAndAccessories = () => {
     return (
          <section className="mobile-phones-container appear-animate">
               <div className="container">
                    <h2 className="section-title border-0 line-height-1 ls-n-10 m-b-4">
                         Mobile Phones &amp; Accessories
                    </h2>
                    <div className="row no-gutters m-0 bg-gray">
                         <div className="col-md-5 col-lg-2">
                              <div className="category-lists d-flex flex-md-column flex-wrap">
                                   <a href="#">Motors</a>
                                   <a href="#">Oneplus 6</a>
                                   <a href="#">Power Bank</a>
                                   <a href="#">Smart Watch</a>
                                   <a href="#">Type-c Cable</a>
                                   <a href="#">Xiaomi Mi A2</a>
                                   <a href="#">Xiaomi Mi Band 3</a>
                              </div>
                         </div>
                         <div className="col-md-7 col-lg-3 order-first order-md-0">
                              <div
                                   className="banner banner5 h-100"
                                   style={{ backgroundColor: "#f4f4f4" }}
                              >
                                   <figure className="h-100">
                                        <img
                                             className="h-100"
                                             src={templateImages.demo22.bannerImage.banner6}
                                             alt="baner"
                                             width={360}
                                             height={508}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-top">
                                        <h3 className="font1 text-center text-uppercase">
                                             Top Brands
                                             <br />
                                             Smartphones
                                        </h3>
                                        <div className="coupon-sale-text d-flex flex-column align-items-start">
                                             <h4 className="m-b-2 font1 d-block text-uppercase text-white bg-dark skew-box">
                                                  Starting From
                                             </h4>
                                             <h5 className="mb-0 font1 d-inline-block bg-dark skew-box">
                                                  <b className="text-white">$199</b>
                                             </h5>
                                        </div>
                                   </div>
                                   <div className="banner-layer banner-layer-bottom">
                                        <a
                                             href="demo22-shop.html"
                                             className="btn btn-primary"
                                             style={{ fontWeight: "bold" }}
                                        >
                                             View All Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-lg-7">
                              <div className="row">
                                   {mobileandAcc.map((product, idx) => (
                                        <div
                                             key={idx}
                                             className="grid-item col-sm-4 col-md-3 mt-1 "
                                        >
                                             <Product key={idx} {...product} />
                                        </div>
                                   ))}

                                   <div className="col-1 col-md-4 grid-col-sizer" />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
