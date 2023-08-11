import { StaticImageData } from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

interface SlideData {
     id: number;
     imageUrl: string;
     title: string;
     discount: string;
     startingPrice: string;
     shopLink: string;
}

interface HomeSliderProps {
     slides: SlideData[];
}

const HomeSlider: React.FC<HomeSliderProps> = ({ slides }) => (
     <div className="home-slider-container clearfix">
          <div className="home-slider owl-theme show-nav-hover">
               <Carousel>
                    {slides.map((slide, index) => (
                         <Carousel.Item key={index}>
                              <div
                                   key={slide.id}
                                   className={`home-slide d-flex align-items-center banner`}
                              >
                                   <img
                                        className="slide-bg"
                                        src={slide.imageUrl}
                                        width={1920}
                                        height={804}
                                        alt="banner"
                                   />
                                   <div className="container">
                                        <div
                                             className={`banner-layer ${
                                                  slide.id % 2 === 0
                                                       ? "banner-layer-right"
                                                       : "banner-layer-left"
                                             } `}
                                        >
                                             <h2>{slide.title}</h2>
                                             <h3 className="text-uppercase rotated-upto-text mb-0">
                                                  <small>Up to</small> {slide.discount} off
                                             </h3>
                                             <hr className="divider-short-thick" />
                                             <h5 className="text-uppercase d-inline-block mb-0 ls-n-20">
                                                  Starting at <span>${slide.startingPrice}</span>
                                             </h5>
                                             <a
                                                  href={slide.shopLink}
                                                  className="btn btn-light btn-xl btn-icon-right"
                                                  role="button"
                                             >
                                                  Shop Now{" "}
                                                  <i className="fas fa-long-arrow-alt-right" />
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

export default HomeSlider;
