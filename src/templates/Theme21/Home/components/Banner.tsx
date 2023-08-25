import React, { useState } from "react";

import { templateImages } from "@/appProvider/templateImages";

export const Banner = () => {
     const [activeTab, setActiveTab] = useState("drones");

     const handleTabChange = (tabId: string) => {
          setActiveTab(tabId);
     };
     return (
          <section className="intro-section">
               {activeTab === "drones" && (
                    <div
                         className="home-slide banner test"
                         style={{
                              background: `url(${templateImages.demo21.sliderImage.slide1})`,
                         }}
                    >
                         <div
                              className="banner-layer banner-layer-middle"
                              style={{ paddingLeft: "80px" }}
                         >
                              <div className="container banner-content">
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-0"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={200}
                                   >
                                        start the revolution
                                   </h2>
                                   <h1
                                        className="font1 font-weight-bold text-uppercase"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={500}
                                   >
                                        drone pro 4
                                   </h1>
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-3"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={800}
                                   >
                                        from
                                        <strong>$499</strong>
                                   </h2>
                                   <a
                                        className="btn btn-dark btn-buy"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={1100}
                                        href="demo21-shop.html"
                                   >
                                        BUY NOW
                                   </a>
                              </div>
                         </div>
                         {/* End .home-slide-content */}
                    </div>
               )}
               {activeTab === "phones" && (
                    <div
                         className="home-slide banner"
                         style={{
                              backgroundImage: `url(${templateImages.demo21.sliderImage.slide2})`,
                         }}
                    >
                         <div
                              className="banner-layer banner-layer-middle"
                              style={{ paddingLeft: "80px" }}
                         >
                              <div className="container banner-content">
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-0"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={200}
                                   >
                                        amazing deals
                                   </h2>
                                   <h1
                                        className="font1 font-weight-bold text-uppercase"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={500}
                                   >
                                        smartphone
                                   </h1>
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-3"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={800}
                                   >
                                        from
                                        <strong>$199</strong>
                                   </h2>
                                   <a
                                        className="btn btn-dark btn-buy"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={1100}
                                        href="demo21-shop.html"
                                   >
                                        BUY NOW
                                   </a>
                              </div>
                         </div>
                         {/* End .home-slide-content */}
                    </div>
               )}
               {activeTab === "accessories" && (
                    <div
                         className="home-slide banner"
                         style={{
                              backgroundImage: `url(${templateImages.demo21.sliderImage.slide3})`,
                         }}
                    >
                         <div
                              className="banner-layer banner-layer-middle"
                              style={{ paddingLeft: "80px" }}
                         >
                              <div className="container banner-content">
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-0"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={200}
                                   >
                                        best price of the year
                                   </h2>
                                   <h1
                                        className="font1 font-weight-bold text-uppercase"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={500}
                                   >
                                        top accessories
                                   </h1>
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-3"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={800}
                                   >
                                        from
                                        <strong>$19</strong>
                                   </h2>
                                   <a
                                        className="btn btn-dark btn-buy"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={1100}
                                        href="demo21-shop.html"
                                   >
                                        BUY NOW
                                   </a>
                              </div>
                         </div>
                         {/* End .home-slide-content */}
                    </div>
               )}

               <div
                    className="home-slider-sidebar d-none d-sm-block"
                    style={{ paddingRight: "80px" }}
               >
                    <div className="container">
                         <ul>
                              <li
                                   className={`nav-link ${activeTab === "drones" ? "active" : ""}`}
                                   id="drones-tab"
                                   onClick={() => handleTabChange("drones")}
                              >
                                   Drones
                              </li>
                              <li
                                   className={`nav-link ${activeTab === "phones" ? "active" : ""}`}
                                   id="phones-tab"
                                   onClick={() => handleTabChange("phones")}
                              >
                                   Phones
                              </li>
                              <li
                                   className={`nav-link ${
                                        activeTab === "accessories" ? "active" : ""
                                   }`}
                                   id="accessories-tab"
                                   onClick={() => handleTabChange("accessories")}
                              >
                                   Accessories
                              </li>
                         </ul>
                    </div>
               </div>
          </section>
     );
};
