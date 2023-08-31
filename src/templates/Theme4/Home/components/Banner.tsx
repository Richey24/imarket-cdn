import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

interface SlideData {
     imageUrl: string;
     title: string;
     text: string;
     buttonText: string;
     buttonLink: string;
}

interface CarouselBannerProps {
     slides: SlideData[];
}

const CarouselBanner: React.FC<CarouselBannerProps> = ({ slides }) => {
     return (
          <Carousel>
               {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                         <div className="home-slide banner">
                              <Image
                                   className="slide-bg"
                                   src={slide.imageUrl}
                                   height={499}
                                   width={1903}
                                   alt="slider image"
                              />
                              <div className="container d-flex align-items-center">
                                   <div
                                        className="banner-layer"
                                        data-animation-name="fadeInUpShorter"
                                   >
                                        <h4 className="text-transform-none m-b-3">
                                             {slide.title ?? "Find the Boundaries. Push Through!"}
                                        </h4>
                                        <h2 className="text-transform-none mb-0">
                                             {slide.text ?? "Summer Sale"}
                                        </h2>
                                        <a href={slide.buttonLink} className="btn btn-dark btn-lg">
                                             {slide.buttonText ?? "Shop Now!"}
                                        </a>
                                   </div>
                                   {/* End .banner-layer */}
                              </div>
                         </div>
                    </Carousel.Item>
               ))}
          </Carousel>
     );
};

export default CarouselBanner;
