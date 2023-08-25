import React, { useState } from "react";
import Slider from "react-slick";
export const Card = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <section className="cat-section bg-gray">
               <div className="container">
                    <div className="row categories-slider owl-carousel owl-theme owl-loaded owl-drag animated fadeIn appear-animation-visible">
                         <Slider {...settings}>
                              {" "}
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-fashion" />
                                             <h3>Fashion</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-electronics" />
                                             <h3>Electronics</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-gifts" />
                                             <h3>Gifts</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-garden" />
                                             <h3>Garden</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-music" />
                                             <h3>Music</h3>
                                        </div>
                                   </a>
                              </div>
                              <div className="product-category mb-2">
                                   <a href="demo21-shop.html">
                                        <div className="category-content">
                                             <i className="icon-category-motors" />
                                             <h3>Motors</h3>
                                        </div>
                                   </a>
                              </div>
                         </Slider>
                    </div>
               </div>
          </section>
     );
};
