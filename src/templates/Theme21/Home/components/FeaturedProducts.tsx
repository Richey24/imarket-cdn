
import { useState } from "react";
import Slider from "react-slick";
import { featuredProducts } from "../data";
import { Product } from "./Product";
export const FeaturedProducts = () => {
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
          <section
               className="featured-products-section"
                
          >
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Featured Products</h2>
                    <div className="no-gutters">
                         <Slider {...settings}>
                              {featuredProducts.map((product) => (
                                    <Product {...product} />
                              ))}
                         </Slider>
                    </div>
               </div>
          </section>
     );
};
