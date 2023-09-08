import Image from "next/image";
import React, { useState } from "react";
import { featuredProducts } from "../data";
import { templateImages } from "@/appProvider/templateImages";
import "./Product.css"

export const Product = ({ setQuickView }) => {

     const [active, setActive] = useState("new")

     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv")
          if (theDiv) {
               theDiv.style.display = "block"
               setQuickView(product)
          }
     }

     return (
          <div>
               <section className="product-section container">
                    <div className="product-slider-tab">
                         <span className="inline-title d-sm-inline-block " data-animation-name="fadeInLeftShorter"
                              data-animation-delay="100">Featured Items</span>
                         <ul className="nav nav-tabs d-sm-inline-flex mt-1 " data-animation-delay="300">
                              <li onClick={() => setActive("new")} className="nav-item">
                                   <a className={active === "new" ? "nav-link active show" : "nav-link"} id="new-products-tab" data-toggle="tab" style={{ cursor: "pointer" }}
                                        aria-controls="new-products">New</a>
                              </li>
                              <li onClick={() => setActive("best")} className="nav-item">
                                   <a className={active === "best" ? "nav-link active show" : "nav-link"} id="best-products-tab" data-toggle="tab" style={{ cursor: "pointer" }}
                                        aria-controls="best-products">Best Sellers</a>
                              </li>
                              <li onClick={() => setActive("sale")} className="nav-item">
                                   <a className={active === "sale" ? "nav-link active show" : "nav-link"} id="sale-products-tab" data-toggle="tab" style={{ cursor: "pointer" }}
                                        aria-controls="sale-products">Sale</a>
                              </li>
                         </ul>
                         <div className="divider"></div>
                         <div className="tab-content">
                              <div className={active === "new" ? "tab-pane fade active show" : "tab-pane fade"} data-animation-delay="500" id="new-products"
                                   role="tabpanel" aria-labelledby="new-products-tab">
                                   <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }} className="nav-top" >
                                        {
                                             featuredProducts.slice(0, 5).map((product, i) => (
                                                  <div id="fourOnePro" key={i} className="product-default inner-quickview inner-icon">
                                                       <figure>
                                                            <a href="demo41-product.html">
                                                                 <Image src={product.productImageUrl}
                                                                      width="300" height="300" alt="product" />
                                                            </a>
                                                            <div className="label-group">
                                                                 <span className="product-label label-sale">-36%</span>
                                                            </div>
                                                            <div className="btn-icon-group">
                                                                 <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                                      className="icon-shopping-cart"></i></a>
                                                            </div>
                                                            <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                                 title="Quick View">Quick
                                                                 View</a>
                                                       </figure>
                                                       <div className="product-details">
                                                            <div className="category-wrap">
                                                                 <div className="category-list">
                                                                      <a href="#">{product.productCategory}</a>,
                                                                 </div>
                                                                 <a href="wishlist.html" className="btn-icon-wish" title="wishlist"><i
                                                                      className="icon-heart"></i></a>
                                                            </div>
                                                            <h3 className="product-title">
                                                                 <a href="demo41-product.html">{product.productTitle}</a>
                                                            </h3>
                                                            <div className="price-box">
                                                                 <span className="product-price">${product.productPrice}.00</span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             ))
                                        }
                                   </div>
                              </div>
                              <div className={active === "best" ? "tab-pane fade active show" : "tab-pane fade"} data-animation-delay="500" id="best-products" role="tabpanel"
                                   aria-labelledby="best-products-tab">
                                   <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }} className="nav-top" >
                                        {
                                             featuredProducts.slice(5, 10).map((product, i) => (
                                                  <div id="fourOnePro" key={i} className="product-default inner-quickview inner-icon">
                                                       <figure>
                                                            <a href="demo41-product.html">
                                                                 <Image src={product.productImageUrl}
                                                                      width="300" height="300" alt="product" />
                                                            </a>
                                                            <div className="label-group">
                                                                 <span className="product-label label-sale">-36%</span>
                                                            </div>
                                                            <div className="btn-icon-group">
                                                                 <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                                      className="icon-shopping-cart"></i></a>
                                                            </div>
                                                            <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                                 title="Quick View">Quick
                                                                 View</a>
                                                       </figure>
                                                       <div className="product-details">
                                                            <div className="category-wrap">
                                                                 <div className="category-list">
                                                                      <a href="#">{product.productCategory}</a>,
                                                                 </div>
                                                                 <a href="wishlist.html" className="btn-icon-wish" title="wishlist"><i
                                                                      className="icon-heart"></i></a>
                                                            </div>
                                                            <h3 className="product-title">
                                                                 <a href="demo41-product.html">{product.productTitle}</a>
                                                            </h3>
                                                            <div className="price-box">
                                                                 <span className="product-price">${product.productPrice}.00</span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             ))
                                        }
                                   </div>
                              </div>
                              <div className={active === "sale" ? "tab-pane fade active show" : "tab-pane fade"} data-animation-delay="500" id="sale-products" role="tabpanel"
                                   aria-labelledby="sale-products-tab">
                                   <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }} className="nav-top" >
                                        {
                                             featuredProducts.slice(5, 10).map((product, i) => (
                                                  <div id="fourOnePro" key={i} className="product-default inner-quickview inner-icon">
                                                       <figure>
                                                            <a href="demo41-product.html">
                                                                 <Image src={product.productImageUrl}
                                                                      width="300" height="300" alt="product" />
                                                            </a>
                                                            <div className="label-group">
                                                                 <span className="product-label label-sale">-36%</span>
                                                            </div>
                                                            <div className="btn-icon-group">
                                                                 <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                                      className="icon-shopping-cart"></i></a>
                                                            </div>
                                                            <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                                 title="Quick View">Quick
                                                                 View</a>
                                                       </figure>
                                                       <div className="product-details">
                                                            <div className="category-wrap">
                                                                 <div className="category-list">
                                                                      <a href="#">{product.productCategory}</a>,
                                                                 </div>
                                                                 <a href="wishlist.html" className="btn-icon-wish" title="wishlist"><i
                                                                      className="icon-heart"></i></a>
                                                            </div>
                                                            <h3 className="product-title">
                                                                 <a href="demo41-product.html">{product.productTitle}</a>
                                                            </h3>
                                                            <div className="price-box">
                                                                 <span className="product-price">${product.productPrice}.00</span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             ))
                                        }
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="product-banner banner">
                         <div className="row justify-content-center mx-0">
                              <div className="col-lg-4 py-6 banner-content">
                                   <h4 className="banner-subtitle font-weight-normal text-right "
                                        data-animation-name="fadeInRightShorter" data-animation-delay="100">SOFT FLAVOR</h4>
                                   <h3 className="banner-title font-weight-bold "
                                        data-animation-name="fadeInRightShorter" data-animation-delay="200">Fresh Cola</h3>
                                   <p className="banner-desc " data-animation-name="fadeInRightShorter"
                                        data-animation-delay="300">SODA DRINK</p>
                              </div>
                              <div className="col-lg-4">
                                   <Image src={templateImages.demo41.bannerImage.banner4} data-plugin-float-element
                                        width="364" height="270" alt="banner" />
                              </div>
                              <div className="col-lg-4 py-6 banner-price" style={{ zIndex: "1" }}>
                                   <h2 className="up-to text-right mb-0 pb-2 "
                                        data-animation-name="fadeInLeftShorter" data-animation-delay="200">
                                        <sup className="font-weight-bold">ONLY</sup><strong>$0,99</strong>
                                   </h2>
                              </div>
                         </div>
                    </div>
                    <span className="inline-title " data-animation-name="fadeInUpShorter"
                         data-animation-delay="300">Top Rated</span>
                    <div className="divider"></div>
                    <div className="row  rated-products">
                         {
                              featuredProducts.map((product, i) => (
                                   <div key={i} className="col-6 col-sm-4 col-md-3 col-xl-5col">
                                        <div className="product-default inner-quickview inner-icon">
                                             <figure>
                                                  <a href="demo41-product.html">
                                                       <Image src={product.productImageUrl} width="300"
                                                            height="300" alt="product" />
                                                  </a>
                                                  <div className="label-group">
                                                       <span className="product-label label-sale">-17%</span>
                                                  </div>
                                                  <div className="btn-icon-group">
                                                       <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                            className="icon-shopping-cart"></i></a>
                                                  </div>
                                                  <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview" title="Quick View">Quick
                                                       View</a>
                                             </figure>
                                             <div className="product-details">
                                                  <div className="category-wrap">
                                                       <div className="category-list">
                                                            <a href="#">{product.productCategory}</a>,
                                                       </div>
                                                       <a href="wishlist.html" className="btn-icon-wish" title="wishlist"><i
                                                            className="icon-heart"></i></a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       <a href="demo41-product.html">{product.productTitle}</a>
                                                  </h3>
                                                  <div className="price-box">
                                                       <span className="product-price">${product.productPrice}.00</span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               </section>
               <section className="category-section container ">
                    <div style={{ display: "flex", gap: "20px" }}>
                         <div className="product-category content-left-center">
                              <a href="demo41-shop.html">
                                   <figure>
                                        <Image src={templateImages.demo41.categoryImage.category1} width="393" height="200"
                                             alt="category" />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Vegetables</h3>
                                        <span><mark className="count">2</mark> Products</span>
                                   </div>
                              </a>
                         </div>
                         <div className="product-category content-left-center">
                              <a href="demo41-shop.html">
                                   <figure>
                                        <Image src={templateImages.demo41.categoryImage.category2} width="393" height="200"
                                             alt="category" />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Fruits</h3>
                                        <span><mark className="count">10</mark> Products</span>
                                   </div>
                              </a>
                         </div>
                         <div className="product-category content-left-center">
                              <a href="demo41-shop.html">
                                   <figure>
                                        <Image src={templateImages.demo41.categoryImage.category3} width="393" height="200"
                                             alt="category" />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Meat</h3>
                                        <span><mark className="count">6</mark> Products</span>
                                   </div>
                              </a>
                         </div>
                    </div>
               </section>
          </div>
     );
};
