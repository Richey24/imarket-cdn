import React from "react";
import { smallBanners } from "../data";
export const SmallBanner = () => {
     return (
          <section className="cat-banners-section">
               <div className="container">
                    <div className="row">
                         {smallBanners.map((data) => (
                              <div className="col-sm-6 col-xl-3">
                                   <div
                                        className="cat-banner"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={800}
                                   >
                                        <figure>
                                             <img
                                                  src={data.img}
                                                  alt="category"
                                                  width={107}
                                                  height={107}
                                             />
                                        </figure>
                                        <div className="cat-content">
                                             <h3 className="mb-1">
                                                  {data.h3}
                                                  <br />
                                                  {data.h3Br}
                                             </h3>
                                             <a href="demo21-shop.html" className="btn btn-dark">
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};
