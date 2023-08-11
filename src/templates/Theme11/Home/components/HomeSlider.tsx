import React from "react";
import Carousel from "react-bootstrap/Carousel";

interface HomeSlide {
     imageUrl: string;
     title: string;
     discount: string;
     startingPrice: string;
}

interface HomeSliderProps {
     slides: HomeSlide[];
}

const HomeSlider: React.FC<HomeSliderProps> = ({ slides }) => {
     return (
          <div className="home-slider-container clearfix">
               <div className="home-slider slide-animate  owl-theme show-nav-hover">
                    <Carousel>
                         {slides.map((slide, index) => (
                              <Carousel.Item key={index}>
                                   <div
                                        className={`home-slide home-slide${
                                             index + 1
                                        } d-flex align-items-center banner`}
                                        key={index}
                                   >
                                        <img
                                             className="slide-bg"
                                             src={slide.imageUrl}
                                             width="1920"
                                             height="804"
                                             alt="banner"
                                        />
                                        <div className="container">
                                             <div
                                                  className={`banner-layer banner-layer-${
                                                       index % 2 === 0 ? "right" : "left"
                                                  } float-${index % 2 === 0 ? "right" : "left"} `}
                                                  data-animation-name="fadeInUpShorter"
                                             >
                                                  <h2>{slide.title}</h2>
                                                  <h3 className="text-uppercase rotated-upto-text mb-0">
                                                       <small>Up to</small>
                                                       {slide.discount}
                                                  </h3>

                                                  <hr className="divider-short-thick" />

                                                  <h5 className="text-uppercase d-inline-block mb-0 ls-n-20">
                                                       Starting at{" "}
                                                       <span>${slide.startingPrice}</span>
                                                  </h5>
                                                  <a
                                                       href="demo11-shop.html"
                                                       className="btn btn-light btn-xl btn-icon-right"
                                                       role="button"
                                                  >
                                                       Shop Now
                                                       <i className="fas fa-long-arrow-alt-right"></i>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </Carousel.Item>
                         ))}
                    </Carousel>
               </div>
          </div>
     );
};

export default HomeSlider;
