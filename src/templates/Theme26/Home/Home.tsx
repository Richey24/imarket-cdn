import React from "react";

import { Banner } from "./components/Banner";
import { PopularProducts } from "./components/PopularProducts";
import { Products } from "./components/Products";
import { TopSeller } from "./components/TopSeller";
import { Card } from "./components/Card";
import { Content } from "./components/Content";

export const Home = () => {
     return (
          <main className="main">
               <Banner />
               <section
                    className="newsletter-section appear-animate"
                    data-animation-name="fadeInUpShorter"
                    data-animation-delay={200}
               >
                    <div className="container">
                         <div className="widget-newsletter">
                              <div className="row no-gutters m-0">
                                   <div className="col-md-5">
                                        <div className="info-box info-box-icon-left justify-content-start align-itmes-center">
                                             <i className="far fa-envelope line-height-1 text-primary" />
                                             <div className="info-content">
                                                  <h4 className="line-height-1 text-dark">
                                                       Get Special Offers and Savings
                                                  </h4>
                                                  <p className="font2 text-body">
                                                       Get all the latest information on Events,
                                                       Sales and Offers.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-md-7">
                                        <form className="newsletter-form" action="#" method="get">
                                             <input
                                                  type="email"
                                                  className="form-control font2 mb-0"
                                                  placeholder="Enter Your E-mail Address..."
                                             />
                                             <button
                                                  type="submit"
                                                  className="btn btn-submit text-white"
                                             >
                                                  Sign Up
                                             </button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <PopularProducts />
               <Products />
               <TopSeller />
               <Card />
               <Content />
          </main>
     );
};
