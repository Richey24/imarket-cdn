import { templateImages } from "@/appProvider/templateImages";
import React from "react";
import { banners } from "../data";

export const Category = () => {
     return (
          <section className="section-3 category-section d-block d-md-flex">
               {banners.map((data) => (
                    <div
                         className="col-md-6 col-12 banner banner-1 bg-img d-flex align-items-center appear-animate"
                         data-animation-duration={1200}
                         style={{
                              backgroundImage: `url(${data.bannerImg})`,
                              animationDelay: "0ms",
                              animationDuration: "1200ms",
                              backgroundColor: "#dcdbd9",
                         }}
                    >
                         <div className="banner-content">
                              <h3 className="title">
                                   {data.h3}
                                   <br />
                                  {data.H3Br}
                              </h3>
                              <p className="subtitle font2">
                                   {data.p}
                              </p>
                              <div className="mb-0">
                                   <a
                                        href={data.atag}
                                        role="button"
                                        className="btn btn-primary btn-borders btn-lg btn-outline-dark btn-dark"
                                   >
                                        SHOP NOW
                                   </a>
                              </div>
                         </div>
                         {/* End .banner-content */}
                    </div>
               ))}
          </section>
     );
};
