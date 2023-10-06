import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Product } from "./Product";
import { ProductProps } from "../types";
import { templateImages } from "@/appProvider/templateImages";

const FeaturedProducts = ({products, section}) => {
     return (
          <section className="featured-products-container curved-border bg-gray">
               <div className="container">
                    <h2 className="section-title mb-2">{section}</h2>
                    <div className="row">
                         {products.map((product, index) => (
                              <div className="col-sm-4" key={index}>
                                   <Product {...product} />
                              </div>
                         ))}
                    </div>
                    <hr />
                    <div
                         className="banner-section "
                         data-animation-name="fadeIn"
                         data-animation-delay={200}
                    >
                         <div className="container position-static">
                              <div className="banner banner1 bg-white position-static">
                                   <div className="row no-gutters m-0 align-items-center">
                                        <div className="col-md-5 col-xl-6 position-static">
                                             <Image
                                                  className="position-relative"
                                                  src={templateImages.demo24.bannerImage.banner2}
                                                  alt="banner"
                                                  width={216}
                                                  height={607}
                                             />
                                        </div>
                                        <div className="col-md-7 col-xl-6 px-4 px-md-0">
                                             <div className="row align-items-center py-5">
                                                  <div className="col-sm-6 col-lg-7 mb-4 mb-sm-0">
                                                       <h2 className="mb-0">Meet </h2>
                                                       <p className="mb-0">
                                                            The easier way to build your portfolio
                                                            &amp; showcase your work.
                                                       </p>
                                                  </div>
                                                  <div className="col-sm-6 col-lg-5 text-sm-center">
                                                       <a
                                                            href="demo24-shop.html"
                                                            className="btn btn-dark btn-round ls-0"
                                                       >
                                                            Get Started
                                                            <i className="fas fa-chevron-right" />
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default FeaturedProducts;
