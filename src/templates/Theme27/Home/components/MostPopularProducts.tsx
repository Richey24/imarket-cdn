import React from "react";
import Slider from "react-slick";
import { Product } from "./Product";
import { ProductProps } from "../types";

const MostPopularProducts: React.FC<{ mostPopularProducts: ProductProps[] }> = (props) => {
     let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
          className: "",
     };

     return (
          <section className="popular-products">
               <div className="container">
                    <h2
                         className="section-title "
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                    >
                         Featured Products
                    </h2>
                    <div className="row">
                         <div
                              className="products-slider 5col owl-carouse owl-theme "
                              data-owl-options="{
                      'margin': 0
                  }"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              <Slider {...settings}>
                                   {props.mostPopularProducts.map((mostPopularProduct, index) => (
                                        <Product {...mostPopularProduct} key={index} />
                                   ))}
                              </Slider>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default MostPopularProducts;
