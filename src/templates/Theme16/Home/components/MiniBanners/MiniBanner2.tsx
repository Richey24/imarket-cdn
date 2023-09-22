import React, { useState } from "react";
import Slider from "react-slick";
import { miniBanner2Product } from "../../data";
import { templateImages } from "@/appProvider/templateImages";
import { Product } from "../Product";
export const MiniBanner2 = () => {
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
          <section className="section-6 d-block d-md-flex">
               <div
                    className="col-md-6 col-12 banner d-flex align-items-center appear-animate bg-img bg-fixed bg-left"
                    data-animation-duration={1200}
                    style={{
                         backgroundImage: `url(${templateImages.demo16.bgImages.bg4})`,
                         animationDelay: "0ms",
                         animationDuration: "1200ms",
                         backgroundColor: "#dcdbd9",
                    }}
               >
                    <div className="banner-content ml-auto text-right">
                         <h3 className="title">
                              WOMEN'S
                              <br />
                              OUTFITS
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
               <div className="col-md-6 col-12 product-part pb-3">
                    <div className="products-slider   owl-theme">
                         <Slider {...settings}>
                              {miniBanner2Product.map((product) => (
                                     <Product {...product}/>
                              ))}
                         </Slider>
                    </div>
               </div>
               {/* End .col-md-6 */}
          </section>
     );
};
