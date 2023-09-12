import React from "react";
import { products } from "../data";
import Image from "next/image";

const MiniProduct = ({ setQuickView }) => {
     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               theDiv.style.display = "block";
               setQuickView(product);
          }
     };

     return (
          <div>
               <section className="section-4 product-collection-two">
                    <div className="container">
                         <div className="row m-0 bg-white">
                              {products.slice(0, 8).map((product, i) => (
                                   <div key={i} className="col-lg-3 col-sm-4 col-6">
                                        <div className="product-default inner-quickview inner-icon">
                                             <figure>
                                                  <a href="demo17-product.html">
                                                       <Image
                                                            src={product.productImageUrl}
                                                            alt="product"
                                                            width="400"
                                                            height="400"
                                                       />
                                                  </a>

                                                  <div className="btn-icon-group">
                                                       <button
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                            data-toggle="modal"
                                                            data-target="#addCartModal"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                       </button>
                                                  </div>

                                                  <a
                                                       onClick={() => showDiv(product)}
                                                       style={{ cursor: "pointer" }}
                                                       className="btn-quickview"
                                                       title="Quick View"
                                                  >
                                                       Quick View
                                                  </a>
                                             </figure>

                                             <div className="product-details">
                                                  <div className="category-wrap">
                                                       <div className="category-list">
                                                            <a
                                                                 href="demo17-shop.html"
                                                                 className="product-category"
                                                            >
                                                                 {product.productCategory}
                                                            </a>
                                                            ,
                                                       </div>

                                                       <a href="#" className="btn-icon-wish">
                                                            <i className="icon-heart"></i>
                                                       </a>
                                                  </div>

                                                  <h3 className="product-title">
                                                       {" "}
                                                       <a href="demo17-product.html">
                                                            {product.productTitle}
                                                       </a>{" "}
                                                  </h3>
                                                  <div className="price-box">
                                                       <span className="product-price">
                                                            ${product.productPrice}.00
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default MiniProduct;
