import React, { useState } from "react";
import Slider from "react-slick";
import { bestSeller } from "../data";
import Product from "@/app/components/Product";
export const TopRatedProducts = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <section className="recent-products">
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Top Rated Products</h2>
                    <div className="row">
                         <div className="products-slider 5col  owl-theme owl-nav-outisde show-nav-hover nav-image-center custom-nav">
                              <div className="owl-stage-outer">
                                   <div
                                        className="owl-stage"
                                        style={{
                                             transform: "translate3d(0px, 0px, 0px)",
                                             transition: "all 0s ease 0s",
                                             width: "1368px",
                                        }}
                                   >
                                        <Slider {...settings}>
                                             {bestSeller.map((product) => (
                                                  <div>
                                                       <Product
                                                            imageSrc={product.productImageUrl.src}
                                                            productName={product.productTitle}
                                                            price={`$ ${product.productPrice}`}
                                                       />
                                                  </div>
                                             ))}
                                        </Slider>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
