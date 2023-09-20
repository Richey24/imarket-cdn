import React, { useState } from "react";

export const ProductTabs = () => {
     const [activeTab, setActiveTab] = useState("varietal");

     const handleTabChange = (tabId: string) => {
          setActiveTab(tabId);
     };
     return (
          <div className="container">
               <div
                    className="product-category-tabs appear-animate"
                    data-animation-name="fadeInUpShorter"
               >
                    <div className="heading mb-0">
                         <h4>FILTER BY:</h4>
                    </div>
                    <ul className=" nav nav-tabs row row-joined pb-0 border-0" role="tablist">
                         <li className="nav-item col-6 m-0 text-center">
                              <a
                                   className={`nav-link ${
                                        activeTab === "varietal" ? "active" : ""
                                   }`}
                                   id="varietal-tab"
                                   onClick={() => handleTabChange("varietal")}
                              >
                                   VARIETAL
                              </a>
                         </li>
                         <li className="nav-item col-6 m-0 text-center">
                              <a
                                   className={`nav-link ${activeTab === "region" ? "active" : ""}`}
                                   id="region-tab"
                                   onClick={() => handleTabChange("region")}
                              >
                                   REGION
                              </a>
                         </li>
                    </ul>
                    <div className="tab-content">
                         {activeTab === "varietal" && (
                              <div className="row">
                                   <div className="col-md-3 col-6 mb-4 mb-md-0">
                                        <div className="category-info font2">
                                             <h4 className="category-info-title">
                                                  <a href="demo39-shop.html">Red Wine</a>
                                             </h4>
                                             <ul className="category-info-content">
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            Bordeaux Blends
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            Cabernet Sauvignon
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Merlot</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Pinot Noir</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Sangiovese</a>
                                                  </li>
                                             </ul>
                                             <a href="demo39-shop.html" className="view-more">
                                                  VIEW ALL
                                             </a>
                                        </div>
                                   </div>
                                   <div className="col-md-3 col-6 mb-4 mb-md-0">
                                        <div className="category-info font2">
                                             <h4 className="category-info-title">
                                                  <a href="demo39-shop.html">White Wine</a>
                                             </h4>
                                             <ul className="category-info-content">
                                                  <li>
                                                       <a href="demo39-shop.html">Chardonnay</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            Pinot Gris/grigio
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Riesling</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            Sauvignon Blanc
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            White Bordeaux Blends
                                                       </a>
                                                  </li>
                                             </ul>
                                             <a href="demo39-shop.html" className="view-more">
                                                  VIEW ALL
                                             </a>
                                        </div>
                                   </div>
                                   <div className="col-md-3 col-6">
                                        <div className="category-info font2">
                                             <h4 className="category-info-title">
                                                  <a href="demo39-shop.html">Other</a>
                                             </h4>
                                             <ul className="category-info-content">
                                                  <li>
                                                       <a href="demo39-shop.html">Champagne</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            Desert &amp; Fortified
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Rose Wine</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Sake</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Sparking</a>
                                                  </li>
                                             </ul>
                                             <a href="demo39-shop.html" className="view-more">
                                                  VIEW ALL
                                             </a>
                                        </div>
                                   </div>
                                   <div className="col-md-3 col-6">
                                        <div className="category-info font2">
                                             <h4 className="category-info-title">
                                                  <a href="demo39-shop.html">Selection</a>
                                             </h4>
                                             <ul className="category-info-content">
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            From $100 to $200
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            From $200 to $500
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            From $40 to $60
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            From $60 to $100
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Top Sellers</a>
                                                  </li>
                                             </ul>
                                             <a href="demo39-shop.html" className="view-more">
                                                  VIEW ALL
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         )}

                         {activeTab === "region" && (
                              <div className="row">
                                   <div className="col-md-3 col-6 mb-3 mb-md-0">
                                        <div className="category-info font2">
                                             <h4 className="category-info-title">
                                                  <a href="demo39-shop.html">France</a>
                                             </h4>
                                             <ul className="category-info-content">
                                                  <li>
                                                       <a href="demo39-shop.html">Bordeaux</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Burgundy</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Champagne</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Rhone</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Woddu</a>
                                                  </li>
                                             </ul>
                                             <a href="demo39-shop.html" className="view-more">
                                                  VIEW ALL
                                             </a>
                                        </div>
                                   </div>
                                   <div className="col-md-3 col-6 mb-3 mb-md-0">
                                        <div className="category-info font2">
                                             <h4 className="category-info-title">
                                                  <a href="demo39-shop.html">Italy</a>
                                             </h4>
                                             <ul className="category-info-content">
                                                  <li>
                                                       <a href="demo39-shop.html">
                                                            Fruili-venezia-giulia
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Piedmont</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Siciliy</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Tuscany</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Veneto</a>
                                                  </li>
                                             </ul>
                                             <a href="demo39-shop.html" className="view-more">
                                                  VIEW ALL
                                             </a>
                                        </div>
                                   </div>
                                   <div className="col-md-3 col-6">
                                        <div className="category-info font2">
                                             <h4 className="category-info-title">
                                                  <a href="demo39-shop.html">Usa</a>
                                             </h4>
                                             <ul className="category-info-content">
                                                  <li>
                                                       <a href="demo39-shop.html">California</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Central Coast</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Napa Volley</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Sonoma Country</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Washington</a>
                                                  </li>
                                             </ul>
                                             <a href="demo39-shop.html" className="view-more">
                                                  VIEW ALL
                                             </a>
                                        </div>
                                   </div>
                                   <div className="col-md-3 col-6">
                                        <div className="category-info font2">
                                             <h4 className="category-info-title">
                                                  <a href="demo39-shop.html">Country</a>
                                             </h4>
                                             <ul className="category-info-content">
                                                  <li>
                                                       <a href="demo39-shop.html">Australia</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Austria</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Germany</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Portugal</a>
                                                  </li>
                                                  <li>
                                                       <a href="demo39-shop.html">Spain</a>
                                                  </li>
                                             </ul>
                                             <a href="demo39-shop.html" className="view-more">
                                                  VIEW ALL
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         )}
                    </div>
                    {/* End .tab-pane */}
               </div>
               {/* End .tab-content */}
          </div>
     );
};
