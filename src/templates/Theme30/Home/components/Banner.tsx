import React, { useState } from "react";
import Image from "next/image";

export const Banner = () => {

     return (
          <div className="home-top-container">
               <div className="container">
                    <div className="row h-[50rem]">
                         <div className="col-lg-6 mb-2">
                              <div className="home-banner banner banner1 banner-md-vw banner-sm-vw d-flex align-items-center">
                                   <figure className="w-100">
                                        <Image src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=728&q=80"
                                             className="bg-[#4a4a4a]" fill alt="banner" />
                                   </figure>
                                   <div className="banner-layer">
                                        <h4 className=" text-white mb-0">Find the Boundaries</h4>
                                        <h2 className="text-white mb-0">Flash Sale</h2>
                                        <h3 className="text-white text-uppercase m-b-3">70% Off</h3>
                                        <h5 className="text-white text-uppercase ls-n-20 align-text-bottom">
                                             Starting At <b
                                                  className="coupon-sale-text bg-secondary text-white d-inline-block">$<em
                                                       className="align-text-top">199</em>99</b></h5>
                                        <a href="demo7-shop.html" className="btn bg-white btn-md ls-10">Shop Now!</a>
                                   </div>
                              </div>
                         </div>

                         <div className="col-lg-3 col-sm-6 mb-2">
                              <div className="row h-100">
                                   <div className="col-lg-12 mb-2">
                                        <div className="banner banner2 banner-hover-shadow d-flex align-items-center">
                                             <figure className="w-100">
                                                  <Image src="https://images.unsplash.com/photo-1634581448750-22a591d78099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                                                       className="bg-[#ccc]" fill alt="banner" />
                                             </figure>
                                             <div className="banner-layer">
                                                  <h3 className="m-b-2">Porto Watches</h3>
                                                  <h4 className="m-b-2 text-secondary"><sup
                                                       className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                                                  <a href="demo7-shop.html" className="btn btn-dark text-uppercase ls-10">Shop
                                                       Now</a>
                                                  <Image src="https://images.unsplash.com/photo-1634581448750-22a591d78099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                                                       className="bg-[#eee]" width="48" height="15" alt="brand" />
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-lg-12">
                                        <div
                                             className="banner banner3 text-uppercase banner-hover-shadow d-flex align-items-center">
                                             <figure className="w-100">
                                                  <Image fill src="https://images.unsplash.com/photo-1634581448750-22a591d78099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="banner" />
                                             </figure>

                                             <h6 className="banner-label left-label">50<small><sup>%</sup><sub>OFF</sub></small>
                                             </h6>
                                             <h6 className="banner-label right-label">70<small><sup>%</sup><sub>OFF</sub></small>
                                             </h6>
                                             <h6 className="banner-label bottom-label mb-0">
                                                  30<small><sup>%</sup><sub>OFF</sub></small>
                                             </h6>

                                             <div className="banner-layer banner-layer-middle text-center">
                                                  <h3 className="m-b-1 ls-10">DEAL PROMOS</h3>
                                                  <h4 className="ls-0 text-body">STARTING AT $99</h4>
                                                  <a href="demo7-shop.html" className="btn btn-dark btn-black ls-10">SHOP NOW</a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="col-lg-3 col-sm-6 mb-2">
                              <div className="banner banner4 text-uppercase banner-hover-shadow d-flex align-items-center">
                                   <figure className="w-100">
                                        <Image src="https://images.unsplash.com/photo-1634581448750-22a591d78099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                                             className="bg-[#555]" fill alt="banner" />
                                   </figure>

                                   <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                                        <div className="coupon-sale-content">
                                             <h3 className="text-white font1">Leather Jackets</h3>
                                             <h5 className="coupon-sale-text text-white ls-0 p-0"><i className="ls-0 font1">UP
                                                  TO</i><b className="text-white bg-secondary">$100</b><sub>OFF</sub></h5>
                                             <a href="demo7-shop.html"
                                                  className="btn bg-white btn-lg ls-10 d-block d-lg-inline-block  text-dark">Get
                                                  Yours!</a>
                                        </div>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     );
};
