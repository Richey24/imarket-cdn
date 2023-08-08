import React, { useState } from 'react'
import { featuredProducts } from '../data'
import { Product } from './Product'
import Slider from "react-slick";

export const FeaturedProducts = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1 ,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
   };
  return (
    <section className="featured-products-section">
    <div className="container">
         <h2 className="section-title ls-n-10 text-center text-uppercase m-b-3">
              Featured Products
         </h2>
         <Slider {...settings}>{featuredProducts.map((product, index) => (
              <Product key={`featured-product-${index}`} {...product} />
         ))}</Slider>
         
    </div>
</section>
  )
}
