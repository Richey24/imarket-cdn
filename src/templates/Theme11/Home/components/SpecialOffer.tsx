import { useState } from "react";
import Banner3 from "../../../../assets/images/demoes/demo21/banners/banner-3.jpg";
import {
     audiospeakers,
     bestsellersProducts,
     cameras,
     computers,
     lamps,
     mobilephones,
} from "../data";
import { Product } from "./Product";

export const SpecialOffer = () => {
     const [activeTab, setActiveTab] = useState("best-sellers");

     const handleTabChange = (tabId: string) => {
          setActiveTab(tabId);
     };
     return (
          <section
               className="special-offer-section bg-gray"
               style={{paddingRight:'80px', paddingLeft:'80px'}}
          >
               <div className="container">
                    <div className="row">
                         <div className="col-xl-4">
                              <h3 className="subtitle font1 ls-0 mb-3">Special Offer</h3>
                              <div className="banner banner3" style={{ backgroundColor: "#fff" }}>
                                   <figure>
                                        <img
                                             src={Banner3.src}
                                             alt="banner"
                                             width={450}
                                             height={257}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle banner-layer-left">
                                        <h3 className="font1 ls-0 m-b-2">Elec Deals</h3>
                                        <h4 className="font1 ls-n-10 m-b-3">
                                             <del>$59.00</del>$49.00
                                        </h4>
                                        <a href="demo21-shop.html" className="btn btn-primary">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-xl-8">
                              <ul className="nav nav-tabs mb-3" role="tablist">
                                   <li className="nav-item">
                                        <a
                                             className={`nav-link ${
                                                  activeTab === "best-sellers" ? "active" : ""
                                             }`}
                                             id="best-sellers-tab"
                                             onClick={() => handleTabChange("best-sellers")}
                                        >
                                             Best Sellers
                                        </a>
                                   </li>
                                   <li className="nav-item">
                                        <a
                                             className={`nav-link ${
                                                  activeTab === "audio-speakers" ? "active" : ""
                                             }`}
                                             id="audio-speakers-tab"
                                             onClick={() => handleTabChange("audio-speakers")}
                                        >
                                             Audio Speakers
                                        </a>
                                   </li>
                                   <li className="nav-item">
                                        <a
                                             className={`nav-link ${
                                                  activeTab === "cameras" ? "active" : ""
                                             }`}
                                             id="cameras-tab"
                                             onClick={() => handleTabChange("cameras")}
                                        >
                                             Cameras
                                        </a>
                                   </li>
                                   <li className="nav-item">
                                        <a
                                             className={`nav-link ${
                                                  activeTab === "lamps" ? "active" : ""
                                             }`}
                                             id="lamps-tab"
                                             onClick={() => handleTabChange("lamps")}
                                        >
                                             Lamps
                                        </a>
                                   </li>
                                   <li className="nav-item">
                                        <a
                                             className={`nav-link ${
                                                  activeTab === "computer" ? "active" : ""
                                             }`}
                                             id="computer-tab"
                                             onClick={() => handleTabChange("computer")}
                                        >
                                             Computer
                                        </a>
                                   </li>
                                   <li className="nav-item">
                                        <a
                                             className={`nav-link ${
                                                  activeTab === "mobile-phones" ? "active" : ""
                                             }`}
                                             id="mobile-phones-tab"
                                             onClick={() => handleTabChange("mobile-phones")}
                                        >
                                             Mobile Phones
                                        </a>
                                   </li>
                              </ul>
                              <div className="tab-content">
                                   {activeTab === "best-sellers" && (
                                        <div className="row">
                                             {bestsellersProducts.map((product, index) => (
                                                  <Product
                                                       key={`best-sellers-${index}`}
                                                       {...product}
                                                  />
                                             ))}
                                        </div>
                                   )}

                                   {activeTab === "audio-speakers" && (
                                        <div className="row">
                                             {audiospeakers.map((product, index) => (
                                                  <Product
                                                       key={`audio-speakers-${index}`}
                                                       {...product}
                                                  />
                                             ))}
                                        </div>
                                   )}
                                   {activeTab === "cameras" && (
                                        <div className="row">
                                             {cameras.map((product, index) => (
                                                  <Product key={`cameras-${index}`} {...product} />
                                             ))}
                                        </div>
                                   )}
                                   {activeTab === "lamps" && (
                                        <div className="row">
                                             {lamps.map((product, index) => (
                                                  <Product key={`lamps-${index}`} {...product} />
                                             ))}
                                        </div>
                                   )}
                                   {activeTab === "computer" && (
                                        <div className="row">
                                             {computers.map((product, index) => (
                                                  <Product key={`computer-${index}`} {...product} />
                                             ))}
                                        </div>
                                   )}
                                   {activeTab === "mobile-phones" && (
                                        <div className="row">
                                             {mobilephones.map((product, index) => (
                                                  <Product
                                                       key={`mobile-phones-${index}`}
                                                       {...product}
                                                  />
                                             ))}
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};