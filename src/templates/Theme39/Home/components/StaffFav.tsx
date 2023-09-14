import React from "react";
import { staffFavProducts1, staffFavProducts2, staffFavProducts3 } from "../data";
import { ProductWidget } from "./ProductWidget";

export const StaffFav = () => {
     return (
          <div
               className="product-widgets-container container mb-md-4 mb-0 pb-2 appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={100}
          >
               <div className="heading">
                    <h2 className="text-uppercase">Staff Favorites</h2>
               </div>
               <div className=" row pb-2">
                    <div className="col-md-4  col-sm-6 pb-5 pb-md-0">
                         {staffFavProducts1.map((product) => (
                              <ProductWidget {...product} />
                         ))}
                    </div>
                    <div className="col-md-4  col-sm-6 pb-5 pb-md-0">
                         {staffFavProducts2.map((product) => (
                              <ProductWidget {...product} />
                         ))}
                    </div>
                    <div className="col-md-4  col-sm-6 pb-5 pb-md-0">
                         {staffFavProducts3.map((product) => (
                              <ProductWidget {...product} />
                         ))}
                    </div>
               </div>
          </div>
     );
};
