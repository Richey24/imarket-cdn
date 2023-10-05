import React, { useState } from "react";
import Slider from "react-slick";
import { newProducts } from "../data";
import { Product } from "./Product";

export const ProductSection2 = ({ latestProducts }) => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };

     return (
          <div className="no-gutters" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
               <Slider {...settings}>
                    {latestProducts
                         .sort((a: any, b: any) => b.__last_update - a.__last_update)
                         .map((product) => (
                              <Product {...product} />
                         ))}
               </Slider>
          </div>
     );
};
