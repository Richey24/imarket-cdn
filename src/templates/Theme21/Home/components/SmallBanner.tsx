import React from "react";
import { templateImages } from "@/appProvider/templateImages";
export const SmallBanner = () => {
     return (
          <section className="cat-banners-section">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-6 col-xl-3">
                              <div
                                   className="cat-banner"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={800}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo21.categoryImages.category1}
                                             alt="category"
                                             width={107}
                                             height={107}
                                        />
                                   </figure>
                                   <div className="cat-content">
                                        <h3 className="mb-1">
                                             Top Sharp
                                             <br />
                                             Knives
                                        </h3>
                                        <a href="demo21-shop.html" className="btn btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-xl-3">
                              <div
                                   className="cat-banner"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={600}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo21.categoryImages.category2}
                                             alt="category"
                                             width={107}
                                             height={107}
                                        />
                                   </figure>
                                   <div className="cat-content">
                                        <h3 className="mb-1">
                                             HD Vision
                                             <br />
                                             Web Cameras
                                        </h3>
                                        <a href="demo21-shop.html" className="btn btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-xl-3">
                              <div
                                   className="cat-banner"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={400}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo21.categoryImages.category3}
                                             alt="category"
                                             width={107}
                                             height={107}
                                        />
                                   </figure>
                                   <div className="cat-content">
                                        <h3 className="mb-1">
                                             Mobiles And
                                             <br />
                                             Tablets
                                        </h3>
                                        <a href="demo21-shop.html" className="btn btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-xl-3">
                              <div
                                   className="cat-banner"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={200}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo21.categoryImages.category4}
                                             alt="category"
                                             width={107}
                                             height={107}
                                        />
                                   </figure>
                                   <div className="cat-content">
                                        <h3 className="mb-1">
                                             Smart
                                             <br />
                                             Watches
                                        </h3>
                                        <a href="demo21-shop.html" className="btn btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
