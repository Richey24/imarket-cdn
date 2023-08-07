import React, { useState } from "react";
import slide1 from "../../../../assets/images/demoes/demo21/slider/slide1.jpg";
import slide2 from "../../../../assets/images/demoes/demo21/slider/slide2.jpg";
import slide3 from "../../../../assets/images/demoes/demo21/slider/slide3.jpg";

export const Banner = () => {
     const [activeTab, setActiveTab] = useState("drones");

     const handleTabChange = (tabId: string) => {
          setActiveTab(tabId);
     };
     return (
          <section className="intro-section">
               {activeTab === "drones" && (
                    <div
                         className="home-slide banner"
                         style={{
                              backgroundImage: `url(${slide1})`,
                         }}
                    >
                         <div className="banner-layer banner-layer-middle">
                              <div className="container banner-content">
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-0 appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={200}
                                   >
                                        start the revolution
                                   </h2>
                                   <h1
                                        className="font1 font-weight-bold text-uppercase appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={500}
                                   >
                                        drone pro 4
                                   </h1>
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-3 appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={800}
                                   >
                                        from
                                        <strong>$499</strong>
                                   </h2>
                                   <a
                                        className="btn btn-dark btn-buy appear-animate"
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
                              backgroundImage: `url(${slide3})`,
                         }}
                    >
                         <div className="banner-layer banner-layer-middle">
                              <div className="container banner-content">
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-0 appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={200}
                                   >
                                        amazing deals
                                   </h2>
                                   <h1
                                        className="font1 font-weight-bold text-uppercase appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={500}
                                   >
                                        smartphone
                                   </h1>
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-3 appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={800}
                                   >
                                        from
                                        <strong>$199</strong>
                                   </h2>
                                   <a
                                        className="btn btn-dark btn-buy appear-animate"
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
                              backgroundImage: `url(${slide3})`,
                         }}
                    >
                         <div className="banner-layer banner-layer-middle">
                              <div className="container banner-content">
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-0 appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={200}
                                   >
                                        best price of the year
                                   </h2>
                                   <h1
                                        className="font1 font-weight-bold text-uppercase appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={500}
                                   >
                                        top accessories
                                   </h1>
                                   <h2
                                        className="font1 font-weight-normal text-uppercase mb-3 appear-animate"
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay={800}
                                   >
                                        from
                                        <strong>$19</strong>
                                   </h2>
                                   <a
                                        className="btn btn-dark btn-buy appear-animate"
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

               <div className="home-slider-sidebar d-none d-sm-block">
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
