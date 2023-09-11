import React from "react";
import { Banner } from "./components/Banner";
import { Info} from "./components/Info";
import { TopProduct } from "./components/TopProduct";
import { SaleProduct } from "./components/SaleProduct";
import { NewArrival } from "./components/NewArrival";
import ProductInfo from "./components/ProductInfo";

export const Home = () => {
     return (
          <main className="main">
               <Banner />
               <Info />
               <TopProduct />
               <ProductInfo/>
               <SaleProduct />
               <NewArrival />
               <div
                    className="newsletter-section pt-3 appear-animate"
                    data-animation-delay={100}
                    data-animation-name="fadeIn"
               >
                    <div className="container text-center">
                         <h3 className="ls-n-10">Get Special Offers and Savings</h3>
                         <p>Get all the latest information on Events, Sales and Offers.</p>
                         <form action=" #" method="get" className="mb-0">
                              <div className="submit-wrapper">
                                   <input
                                        type="search"
                                        className="form-control"
                                        name="q"
                                        id="qqq"
                                        placeholder="Enter Your E-mail Address..."
                                   />
                                   <button className="btn btn-primary" type="submit">
                                        OK
                                   </button>
                              </div>
                              {/* End .header-search-wrapper */}
                         </form>
                    </div>
               </div>
          </main>
     );
};
