import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import slide1 from "../../../../assets/images/demoes/demo13/slider/slide-1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Banner = ({ slides }) => {
     const [currentSlide, setCurrentSlide] = useState(0);

     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc: slide?.imageUrl !== "" ? slide?.imageUrl : slide1,
          title: "Find the Boundaries. Push Through!",
          saleTitle: "Summer Sale",
          discount: "70% Off",
          price: "$199.99",
          link: "demo13-shop.html",
     }));

     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };

     return (
          <div className="col-lg-9 col-md-12 mb-2">
               <Slider {...settings}>
                    {mappedSlides.map((slide, index) => (
                         <div
                              key={index}
                              className={`home-slide banner banner-md-vw h-100 ${
                                   index === currentSlide ? "active-slide" : ""
                              }`}
                              style={{ backgroundColor: slide.background }}
                         >
                              <figure>
                                   <Image
                                        className="slide-bg"
                                        src={slide.imageSrc}
                                        alt="slider image"
                                        width={index === currentSlide ? 835 : 833}
                                        height={445}
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-middle intro-banner">
                                   <div
                                        className="appear-animate"
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={200}
                                   >
                                        <h4 className="text-white">{slide.title}</h4>
                                        <h2 className="text-white m-b-1">{slide.saleTitle}</h2>
                                        {slide.discount && (
                                             <h3 className="text-white text-uppercase m-b-3">
                                                  {slide.discount}
                                             </h3>
                                        )}
                                        <h5 className="text-white text-uppercase d-inline-block mb-1 pb-1 ls-n-20 align-text-bottom">
                                             Starting At
                                             <b className="coupon-sale-text bg-secondary text-white d-inline-block">
                                                  {slide.price}
                                             </b>
                                        </h5>
                                        <a
                                             href={slide.link}
                                             className="btn btn-dark btn-md ls-10 align-bottom"
                                        >
                                             Shop Now!
                                        </a>
                                   </div>
                              </div>
                              {/* End .banner-layer */}
                         </div>
                    ))}
               </Slider>
          </div>
     );
};
