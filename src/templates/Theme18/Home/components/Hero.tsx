import { templateImages } from "@/appProvider/templateImages";
import React from "react";
import Slider from "react-slick";

const Hero = ({ slides }) => {
     // const mappedSlides = slides.map((slide: any) => ({
     //      background: "#555",
     //      imageSrc:
     //           slide?.imageUrl !== "" ? slide?.imageUrl : templateImages.demo18.sliderImage.slide9,
     //      title: "Spring / Summer Season",
     //      saleTitle: "Summer Sale",
     //      discount: "50% off",
     //      price: "$19.99",
     //      link: "demo13-shop.html",
     // }));

     let settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
     };
     return (
          <section className="home-slider-container">
               <Slider {...settings} className="home-slider with-dots-container">
                    {slides.map((slide, index) => (
                         <div
                              className="home-slide home-slide1 banner"
                              style={{ backgroundColor: "#111" }}
                         >
                              <div
                                   className="tw-h-full tw-w-full"
                                   style={{
                                        backgroundImage: `url(${slide.imageUrl})`,
                                   }}
                              >
                                    
                                  
                                   <ul
                                        className="slide-bg scene"
                                        style={{ width: "100%", height: "100%" }}
                                   >
                                        <li className="layer" data-depth="0.05">
                                             <img
                                                  src={slide.imageSrc}
                                                  alt=""
                                                  width={100}
                                                  height={100}
                                             />
                                        </li>
                                   </ul>
                                   <div className="home-slide-content">
                                        <h2 className="text-white text-transform-uppercase line-height-1">
                                             {slide.title}
                                        </h2>
                                        <h3 className="text-white d-inline-block line-height-1 ls-0 text-center">
                                             up
                                             <br /> to
                                        </h3>
                                        <h4 className="text-white text-uppercase line-height-1 d-inline-block">
                                             {slide.discount}
                                        </h4>
                                        <div />
                                        <h5 className="float-left text-white text-uppercase line-height-1 ls-n-20">
                                             Starting At
                                        </h5>
                                        <h6 className="float-left coupon-sale-text line-height-1 ls-n-20 font-weight-bold text-secondary">
                                             {slide.price}
                                        </h6>
                                        <a
                                             href={slide.link}
                                             className="btn btn-light d-inline-block"
                                        >
                                             Shop Now
                                        </a>
                                   </div>
                              </div>

                              {/* End .home-slide-content */}
                         </div>
                    ))}
                    {/* End .home-slide */}

                    {/* End .home-slide */}
               </Slider>
               {/* End .home-slider */}
               {/* End .home-slide-thumbs */}
          </section>
     );
};

export default Hero;
