import React, { useState } from "react";
import Slider from "react-slick";
import { newArrivalsProducts } from "../data";
import { Product } from "./Product";

export const NewProducts = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };

     return (
          <div className="no-gutters">
               <Slider {...settings}>
                    {newArrivalsProducts.map((product) => (
                         <Product {...product} />
                    ))}
               </Slider>
          </div>
     );
};
