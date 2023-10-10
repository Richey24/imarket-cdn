import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import OwlCarousel from "react-owl-carousel";

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     responsive: {
          576: {
               items: 1,
          },
     },
};

export const Banner = () => {
     return (
          <div className="container">
               <section className="mb-2">
                    <div className="row">
                         <div className="col-lg-6">
                              <div className="home-banner">
                                   <div className="row m-0">
                                        <div className="col-sm-6 p-0 pr-sm-2 d-flex align-items-center justify-content-center justify-content-lg-end text-center text-sm-right">
                                             <div className="banner-content ">
                                                  <span>An entire week to enjoy all offers</span>
                                                  <h3 className="ls-0">The Week</h3>
                                                  <h4 className="ls-0">Gift Shop</h4>
                                                  <Link href="demo30-shop.html" className="btn">
                                                       SHOP NOW
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 p-0">
                                             {/* <OwlCarousel
                                                  className="info-boxes-slider owl-carousel owl-theme"
                                                  {...owlCarouselOptions}
                                             >
                                                  <div className="product-default pt-5">
                                                       <figure>
                                                            <Link href="demo30-product.html">
                                                                 <img
                                                                      src="https://images.unsplash.com/photo-1530733895788-f39cc96b6ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                                                      width="280"
                                                                      height="280"
                                                                      alt="Product"
                                                                 />
                                                                 <img
                                                                      src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                                                      width="280"
                                                                      height="280"
                                                                      alt="Product"
                                                                 />
                                                            </Link>
                                                       </figure>
                                                       <div className="product-details">
                                                            <h3 className="product-title">
                                                                 {" "}
                                                                 <Link href="demo30-product.html">
                                                                      Ceramic Panda Mug
                                                                 </Link>{" "}
                                                            </h3>
                                                            <div className="price-box">
                                                                 <span className="old-price">
                                                                      $59.00
                                                                 </span>
                                                                 <span className="product-price">
                                                                      $49.00
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="product-default pt-5">
                                                       <figure>
                                                            <Link href="demo30-product.html">
                                                                 <img
                                                                      src="https://images.unsplash.com/photo-1614850715661-902fd7e93c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                                                      width="280"
                                                                      height="280"
                                                                      alt="Product"
                                                                 />
                                                                 <img
                                                                      src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                                                      width="280"
                                                                      height="280"
                                                                      alt="Product"
                                                                 />
                                                            </Link>
                                                       </figure>
                                                       <div className="product-details">
                                                            <h3 className="product-title">
                                                                 {" "}
                                                                 <Link href="demo30-product.html">
                                                                      USB Memories
                                                                 </Link>{" "}
                                                            </h3>
                                                            <div className="price-box">
                                                                 <span className="old-price">
                                                                      $59.00
                                                                 </span>
                                                                 <span className="product-price">
                                                                      $49.00
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="product-default pt-5">
                                                       <figure>
                                                            <Link href="demo30-product.html">
                                                                 <img
                                                                      src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                                                      width="280"
                                                                      height="280"
                                                                      alt="Product"
                                                                 />
                                                                 <img
                                                                      src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                                                      width="280"
                                                                      height="280"
                                                                      alt="Product"
                                                                 />
                                                            </Link>
                                                       </figure>
                                                       <div className="product-details">
                                                            <h3 className="product-title">
                                                                 {" "}
                                                                 <Link href="demo30-product.html">
                                                                      Sugar
                                                                 </Link>
                                                            </h3>
                                                            <div className="price-box">
                                                                 <span className="old-price">
                                                                      $59.00
                                                                 </span>
                                                                 <span className="product-price">
                                                                      $49.00
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </OwlCarousel> */}
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-lg-3">
                              <div className="home-banner2 text-center">
                                   <h3 className="mb-0">Flash Sale Running!</h3>
                                   <div className="banner-content">
                                        <div className="product-panel">
                                             <div className="product-default mt-0">
                                                  <figure className="mb-0">
                                                       <Link href="demo30-product.html">
                                                            <img
                                                                 src="https://images.unsplash.com/photo-1510162126413-f644071b8f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1190&q=80"
                                                                 width="280"
                                                                 height="280"
                                                                 alt="Product"
                                                            />
                                                       </Link>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <Link href="demo30-product.html">
                                                                 Teddy Bear Blue
                                                            </Link>{" "}
                                                       </h3>
                                                       <div className="price-box">
                                                            <span className="old-price">
                                                                 $59.00
                                                            </span>
                                                            <span className="product-price">
                                                                 $49.00
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <Link href="demo30-shop.html" className="btn">
                                             SHOP SALE NOW
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-lg-3">
                              <div
                                   className="home-banner3 text-center"
                                   style={{
                                        backgroundImage:
                                             "url('https://images.unsplash.com/photo-1531256379416-9f000e90aacc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80');",
                                   }}
                              >
                                   <h3 className="ls-10">
                                        Gift Finder
                                        <br />
                                        <span>Find the Perfect Gift</span>
                                   </h3>
                                   <div className="select-box">
                                        <div className="select-custom">
                                             <select className="form-control">
                                                  <option selected hidden>
                                                       Price Range
                                                  </option>
                                                  <option>0 - 100</option>
                                                  <option>100 - 200</option>
                                                  <option>200 - 500</option>
                                             </select>
                                        </div>
                                        <div className="select-custom">
                                             <select className="form-control">
                                                  <option selected hidden>
                                                       By color
                                                  </option>
                                                  <option>Red</option>
                                                  <option>Green</option>
                                                  <option>Blue</option>
                                             </select>
                                        </div>
                                        <div className="select-custom">
                                             <select className="form-control">
                                                  <option selected hidden>
                                                       By size
                                                  </option>
                                                  <option>L</option>
                                                  <option>M</option>
                                                  <option>X</option>
                                                  <option>XL</option>
                                             </select>
                                        </div>
                                   </div>
                                   <Link href="demo30-shop.html" className="btn btn-primary">
                                        VIEW SUGGESTIONS
                                   </Link>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};
