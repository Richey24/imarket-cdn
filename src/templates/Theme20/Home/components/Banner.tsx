import React from "react";
import { templateImages } from "@/appProvider/templateImages";
export const Banner = () => {
     return (
          <section className="intro-section" style={{ paddingRight: "50px", paddingLeft: "50px" }}>
               <div className="container">
                    <div className="grid row" style={{ position: "relative", height: "485px" }}>
                         <div
                              className="grid-item col-lg-8 mb-2"
                              style={{ position: "absolute", left: "0%", top: "0px" }}
                         >
                              <div className="banner banner1" style={{ backgroundColor: "#eee" }}>
                                   <figure>
                                        <img
                                             src={templateImages.demo20.bannerImage.banner8}
                                             alt="banner"
                                             width={779}
                                             height={464}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle banner-layer-left">
                                        <div
                                             className="appear-animate"
                                             data-animation-name="bounceInLeft"
                                             data-animation-delay={100}
                                        >
                                             <h3 className="text-body m-b-1">Save Big Sale</h3>
                                             <h4 className="d-flex align-items-center text-uppercase">
                                                  50%
                                                  <small className="d-inline-block">Off</small>
                                             </h4>
                                             <h5>
                                                  <span className="d-inline-block align-top ls-n-20 text-uppercase">
                                                       Starting At
                                                  </span>
                                                  <b
                                                       className="coupon-sale-text d-inline-block ls-n-20  mb-0"
                                                       style={{ color: "#c90" }}
                                                  >
                                                       <sup>$</sup>199<sup>99</sup>
                                                  </b>
                                             </h5>
                                             <a
                                                  href="demo20-shop.html"
                                                  className="btn btn-sm text-uppercase ls-10"
                                             >
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="grid-item col-lg-4 mb-2"
                              style={{ position: "absolute", left: "66.6667%", top: "0px" }}
                         >
                              <div className="find-form d-flex flex-column justify-content-center">
                                   <h3 className="line-height-1 ls-n-10 text-center text-uppercase text-white m-b-3">
                                        Find A Product
                                   </h3>
                                   <form className="mb-0" action="#" method="get">
                                        <div className="select-custom">
                                             <select className="form-control">
                                                  <option>Select a category</option>
                                                  <option>Accessories</option>
                                                  <option>&nbsp;&nbsp;Caps</option>
                                                  <option>&nbsp;&nbsp;Watches</option>
                                                  <option>Beauty</option>
                                                  <option>Decor</option>
                                                  <option>Fashion</option>
                                                  <option>Shoes</option>
                                                  <option>Footwear</option>
                                                  <option>&nbsp;&nbsp;Headphone</option>
                                                  <option>&nbsp;&nbsp;Toys</option>
                                             </select>
                                        </div>
                                        <div className="select-custom mb-0">
                                             <select className="form-control mb-0">
                                                  <option>By brand</option>
                                                  <option>Adidas</option>
                                                  <option>Calvin Klein</option>
                                                  <option>Diesel</option>
                                                  <option>Lacoste</option>
                                             </select>
                                        </div>
                                   </form>
                              </div>
                         </div>
                         <div
                              className="grid-item col-lg-4 mb-2"
                              style={{ position: "absolute", left: "66.6667%", top: "242px" }}
                         >
                              <div
                                   className="banner banner2 appear-animate"
                                   style={{ backgroundColor: "#eee" }}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo20.bannerImage.banner3}
                                             alt="banner"
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle banner-layer-right text-right">
                                        <h3 className="ls-10 text-uppercase m-b-3">
                                             Electronic
                                             <br />
                                             Deals
                                        </h3>
                                        <div className="coupon-sale-text d-inline-block text-left">
                                             <h4 className="font1 d-block text-white bg-dark ls-10">
                                                  Exclusive COUPON
                                             </h4>
                                             <h5 className="mb-0 font1 d-inline-block bg-dark">
                                                  <i className="text-dark ls-0">UP TO</i>
                                                  <b className="text-white">$100</b>
                                                  <sub className="text-dark">OFF</sub>
                                             </h5>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
