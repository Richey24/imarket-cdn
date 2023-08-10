import React from "react";
import Image from "next/image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const smallBoxes = () => {
     const owlCarouselOptions = {
          dots: false,
          margin: 0,
          loop: false,
          responsive: {
               576: {
                    items: 2,
               },
               992: {
                    items: 3,
               },
          },
     };
     return (
          <div className="container">
               <div className="banners-container mb-2">
                    <div className="banners-slider ">
                         <OwlCarousel
                              className="info-boxes-slider owl-carousel owl-theme"
                              {...owlCarouselOptions}
                         >
                              <div
                                   className="banner banner1 banner-sm-vw d-flex align-items-center "
                                   style={{ backgroundColor: "#ccc" }}
                              >
                                   <figure className="w-100">
                                        <Image
                                             src={
                                                  "https://images.unsplash.com/photo-1690818723724-865c77962c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                                             }
                                             alt="banner"
                                             width={30}
                                             height={175}
                                        />
                                   </figure>
                                   <div className="banner-layer">
                                        <h3 className="m-b-2">Porto Watches</h3>
                                        <h4 className="m-b-3 text-primary">
                                             <sup className="text-dark">
                                                  <del>20%</del>
                                             </sup>
                                             30%<sup>OFF</sup>
                                        </h4>
                                        <a href="category.html" className="btn btn-sm btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                              {/* End .banner */}
                              <div className="banner banner2 banner-sm-vw text-uppercase d-flex align-items-center ">
                                   <figure className="w-100">
                                        <Image
                                             src={
                                                  "https://images.unsplash.com/photo-1690818723724-865c77962c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                                             }
                                             style={{ backgroundColor: "#ccc" }}
                                             alt="banner"
                                             width={340}
                                             height={175}
                                        />
                                   </figure>
                                   <div className="banner-layer text-center">
                                        <div className="row align-items-lg-center">
                                             <div className="col-lg-7 text-lg-right">
                                                  <h3>Deal Promos</h3>
                                                  <h4 className="pb-4 pb-lg-0 mb-0 text-body">
                                                       Starting at $99
                                                  </h4>
                                             </div>
                                             <div className="col-lg-5 text-lg-left px-0 px-xl-3">
                                                  <a
                                                       href="category.html"
                                                       className="btn btn-sm btn-dark"
                                                  >
                                                       Shop Now
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              {/* End .banner */}
                              <div
                                   className="banner banner3 banner-sm-vw d-flex align-items-center "
                                   style={{ backgroundColor: "#ccc" }}
                              >
                                   <figure className="w-100">
                                        <Image
                                             src={
                                                  "https://images.unsplash.com/photo-1690818723724-865c77962c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                                             }
                                             alt="banner"
                                             width={340}
                                             height={175}
                                        />
                                   </figure>
                                   <div className="banner-layer text-right">
                                        <h3 className="m-b-2">Handbags</h3>
                                        <h4 className="m-b-2 text-secondary text-uppercase">
                                             Starting at $99
                                        </h4>
                                        <a href="category.html" className="btn btn-sm btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                              {/* End .banner */}
                         </OwlCarousel>
                    </div>
               </div>
          </div>
     );
};

export default smallBoxes;
