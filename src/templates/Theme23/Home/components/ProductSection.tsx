import { newArrivalsProducts } from "@/templates/Theme21/Home/data";
import React, { useState } from "react";
import Slider from "react-slick";
import { products } from "../data";
import { Product } from "./Product";

export const ProductSection = () => {
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
          <div className="no-gutters">
               <Slider {...settings}>
                    {products.map((product) => (
                        <Product {...product} />
                    ))}
               </Slider>
          </div>
     );
};
