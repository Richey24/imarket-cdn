import React, { FC } from "react";

import Image from "next/image";
import { Product } from "./Product";

const Products = ({ products, section}) => {
     return (
          <div className="products-filter-container bg-gray">
               <div className="container-fluid">
                    <h4
                         className="subtitle text-center text-uppercase mb-2 "
                         data-animation-name="fadeIn"
                    >
                         {section}
                    </h4>
                    <div className="row align-items-lg-stretch">
                         <aside className="filter-sidebar col-lg-2">
                              <div className="sidebar-wrapper">
                                   <h3 className="ls-n-10 text-uppercase text-primary">Sort By</h3>
                                   <ul className="check-filter-list">
                                        <li>
                                             <a href="#" className="active">
                                                  All
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#">Accessories</a>
                                        </li>
                                        <li>
                                             <a href="#">Electronics</a>
                                        </li>
                                        <li>
                                             <a href="#">Men</a>
                                        </li>
                                        <li>
                                             <a href="#">Shoes</a>
                                        </li>
                                        <li>
                                             <a href="#">Women</a>
                                        </li>
                                   </ul>
                              </div>
                              {/* End .sidebar-wrapper */}
                         </aside>
                         {/* End .col-lg-3 */}
                         <div className="col-lg-10">
                              <div className="row product-ajax-grid mb-2">
                                   {products.map((product, index) => (
                                        <Product key={`latest-product-${index}`} {...product} />
                                   ))}
                                   \
                              </div>
                              {/* End .row */}
                              <div className="product-more-container d-flex justify-content-center">
                                   <a
                                        href="ajax/demo18-ajax-products.html"
                                        className="btn btn-outline-dark loadmore"
                                   >
                                        Load More...
                                   </a>
                              </div>
                              {/* End .product-more-container */}
                         </div>
                         {/* End .col-lg-9 */}
                    </div>
                    {/* End .row */}
               </div>
               {/* End .container-fluid */}
          </div>
     );
};

export default Products;
