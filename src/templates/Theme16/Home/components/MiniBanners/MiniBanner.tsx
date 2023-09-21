import React, { useState } from "react";
import Slider from "react-slick";
import { miniBannerProduct } from "../../data";
import { templateImages } from "@/appProvider/templateImages";
import { Product } from "../Product";
export const MiniBanner = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <section className="section-5 d-block d-md-flex">
               <div
                    className="col-md-6 col-12 banner d-flex align-items-center appear-animate order-last bg-img bg-fixed bg-right"
                    data-animation-duration={1200}
                    style={{
                         backgroundImage: `url(${templateImages.demo16.bgImages.bg3})`,
                         animationDelay: "0ms",
                         animationDuration: "1200ms",
                         backgroundColor: "#dcdbd9",
                    }}
               >
                    <div className="banner-content">
                         <h3 className="title">
                              WOMEN'S
                              <br />
                              CASUAL STYLE
                         </h3>
                         <p className="subtitle">Check out this week's hottest styles.</p>
                         <div className="mb-0">
                              <a
                                   href="demo16-shop.html"
                                   role="button"
                                   className="btn btn-borders btn-lg btn-outline-dark btn-dark"
                              >
                                   SHOP NOW
                              </a>
                         </div>
                    </div>
                    {/* End .banner-content */}
               </div>
               {/* End .banner */}
               <div className="col-md-6 col-12 product-part pb-4">
                    <div className="products-slider  owl-theme">
                         <Slider {...settings}>
                              {miniBannerProduct.map((product) => (
                                    <Product {...product}/>
                              ))}
                         </Slider>
                    </div>
               </div>
               {/* End .col-md-6 */}
          </section>
     );
};
