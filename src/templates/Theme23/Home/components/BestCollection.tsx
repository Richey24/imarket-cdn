import React, { useState } from "react";
import Slider from "react-slick";

import { templateImages } from "@/appProvider/templateImages";
import { bestCollection } from "../data";

export const BestCollection = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };

     return (
          <div className="col-lg-9">
               <div className="categories-slider   owl-theme">
                    <Slider {...settings}>
                         {" "}
                         {bestCollection.map((data, idx) => (
                              <div
                                   key={idx}
                                   className="product-category"
                                   style={{ backgroundColor: `${data.bg}` }}
                              >
                                   <a href="demo23-shop.html">
                                        <figure>
                                             <img
                                                  src={data.bannerImage}
                                                  alt="cat banner"
                                                  width={500}
                                                  height={400}
                                             />
                                        </figure>
                                        <div className="category-content">
                                             <h3>{data.h3}</h3>
                                        </div>
                                   </a>
                              </div>
                         ))}
                    </Slider>
               </div>
          </div>
     );
};
