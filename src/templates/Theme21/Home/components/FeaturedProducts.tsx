import { useState } from "react";
import Slider from "react-slick";
import { featuredProducts } from "../data";
import { Product } from "./Product";
export const FeaturedProducts = ({products, section}) => {
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
          <section className="featured-products-section">
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">{section}</h2>
                    <div className="no-gutters">
                         <Slider {...settings}>
                              {products.map((product, index) => (
                                    <Product key={`featured-product-${index}`} {...product} />
                              ))}
                         </Slider>
                    </div>
               </div>
          </section>
     );
};
