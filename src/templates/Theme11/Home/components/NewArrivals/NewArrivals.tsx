import React from "react";
import { MiniBanner } from "./MiniBanner";
import { NewProducts } from "./NewProducts";

export const NewArrivals = () => {
     return (
          <section className="new-products-section">
               <div className="container"  >
                    <MiniBanner />
                    <h2
                         className="section-title ls-n-10 pb-3 m-b-4"
                         data-animation-name="fadeIn"
                         data-animation-delay={300}
                    >
                         New Arrivals
                    </h2>
                    <NewProducts />
               </div>
          </section>
     );
};
