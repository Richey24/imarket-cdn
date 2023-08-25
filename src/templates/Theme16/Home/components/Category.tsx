import { templateImages } from "@/appProvider/templateImages";
import React from "react";

export const Category = () => {
     return (
          <section className="section-3 category-section d-block d-md-flex">
               <div
                    className="col-md-6 col-12 banner banner-1 bg-img d-flex align-items-center appear-animate"
                    data-animation-duration={1200}
                    style={{
                         backgroundImage: `url(${templateImages.demo16.sliderImage.slide1})`,
                         animationDelay: "0ms",
                         animationDuration: "1200ms",
                         backgroundColor: "#dcdbd9",
                    }}
               >
                    <div className="banner-content">
                         <h3 className="title">
                              DRESSES
                              <br />
                              COLLECTION
                         </h3>
                         <p className="subtitle font2">Check out this week's hottest styles.</p>
                         <div className="mb-0">
                              <a
                                   href="demo16-shop.html"
                                   role="button"
                                   className="btn btn-primary btn-borders btn-lg btn-outline-dark btn-dark"
                              >
                                   SHOP NOW
                              </a>
                         </div>
                    </div>
                    {/* End .banner-content */}
               </div>
               {/* End .banner */}
               <div
                    className="col-md-6 col-12 banner banner-1 bg-img d-flex align-items-center appear-animate"
                    data-animation-duration={1200}
                    style={{
                         backgroundImage: `url(${templateImages.demo16.sliderImage.slide2})`,
                         animationDelay: "0ms",
                         animationDuration: "1200ms",
                    }}
               >
                    <div className="banner-content">
                         <h3 className="title">
                              HANDBAGS
                              <br />
                              COLLECTION
                         </h3>
                         <p className="subtitle font2">Check out this week's hottest styles.</p>
                         <div className="mb-0">
                              <a
                                   href="demo16-shop.html"
                                   role="button"
                                   className="btn btn-primary btn-borders btn-lg btn-outline-dark btn-dark"
                              >
                                   SHOP NOW
                              </a>
                         </div>
                    </div>
                    {/* End .banner-content */}
               </div>
               {/* End .banner */}
          </section>
     );
};
