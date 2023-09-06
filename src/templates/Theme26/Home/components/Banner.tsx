import React, { useState } from "react";
import { bannersdata } from "../data";

export const Banner = () => {
     return (
          <section className="intro-section">
               <div className="container">
                    <div className="row">
                         {bannersdata.map((data) => (
                              <div className={`col-md-${data.size} mb-2`}>
                                   {data.imageUrl2 ? (
                                        <div className="banner banner1 d-flex flex-wrap align-items-center bg-gray no-gutters">
                                             <div
                                                  className="col-md-5 appear-animate"
                                                  data-animation-name="fadeInRightShorter"
                                                  data-animation-delay={200}
                                             >
                                                  <div className="brand m-b-2">
                                                       <img
                                                            src={data.imageUrl2}
                                                            alt="brand"
                                                            width={230}
                                                            height={26}
                                                       />
                                                  </div>
                                                  <h3 className="ls-n-20 text-body text-uppercase m-b-2">
                                                       {data.h3}
                                                  </h3>
                                                  <h2 className="ls-n-20 text-uppercase m-b-4">
                                                       Starting
                                                       <br />
                                                       at
                                                       <small>$</small>99<small>99</small>
                                                  </h2>
                                                  <h4 className="font-weight-normal ls-n-20 m-b-3">
                                                      {data.h4}
                                                  </h4>
                                                  <p className="font2 text-body m-b-3">
                                                       {data.p}
                                                  </p>
                                                  <a
                                                       href="demo26-shop.html"
                                                       className="btn btn-dark btn-lg m-b-5"
                                                  >
                                                       View Sale
                                                  </a>
                                             </div>
                                             <div className="col-md-7">
                                                  <figure>
                                                       <img
                                                            src={data.imageUrl}
                                                            alt="banner"
                                                            width={700}
                                                            height={576}
                                                       />
                                                  </figure>
                                             </div>
                                        </div>
                                   ) : null}
                                   {data.h5 ? (
                                        <div
                                             className="banner banner2 h-100"
                                             style={{
                                                  background:
                                                       `#414141 no-repeat center/cover url(${data.imageUrl})`,
                                             }}
                                        >
                                             <div className="banner-layer d-flex flex-column justify-content-center align-items-end text-right">
                                                  <h3
                                                       className="font-weight-bold ls-n-20 text-primary text-uppercase m-b-2 appear-animate"
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay={100}
                                                  >
                                                     {data.h3}
                                                  </h3>
                                                  <h3
                                                       className="ls-n-20 m-b-2 appear-animate"
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay={250}
                                                  >
                                                       {data.h5}
                                                       <br />
                                                      {data.h5Br}
                                                  </h3>
                                                  <h2
                                                       className="ls-n-20 text-white text-uppercase m-b-3 appear-animate"
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay={400}
                                                  >
                                                       Starting
                                                       <br />
                                                       at
                                                       <small>$</small>199<small>99</small>
                                                  </h2>
                                                  <a
                                                       href="demo26-shop.html"
                                                       className="btn btn-light btn-lg appear-animate"
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay={600}
                                                  >
                                                       View Sale
                                                  </a>
                                             </div>
                                        </div>
                                   ) : null}
                              </div>
                         ))}
                         
                    </div>
               </div>
          </section>
     );
};
