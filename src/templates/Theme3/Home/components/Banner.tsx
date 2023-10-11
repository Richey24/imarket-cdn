import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../../assets/images/demoes/demo3/slider/slide1.jpg";
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import Link from "next/link";

const Banner = ({ slides }) => {
     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc: slide?.imageUrl !== "" ? slide?.imageUrl : slide1,
          title: "Find the Boundaries. Push Through!",
          saleTitle: "Summer Sale",
          discount: "70% Off",
          price: "$199.99",
          link: "demo13-shop.html",
     }));

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
          <Slider {...settings}>
               {mappedSlides.map((slide, next) => {
                    return (
                         <div
                              key={next}
                              className="home-slide home-slide1 banner d-flex align-items-center tw-h-screen tw-w-screen"
                         >
                              <Image
                                   className="slide-bg"
                                   src={slide.imageSrc}
                                   style={{ backgroundColor: "#ecc" }}
                                   fill
                                   alt="home banner"
                              />
                              <div className="banner-layer " data-animation-name="fadeInUpShorter">
                                   <h2>{slide.title}</h2>
                                   <h3 className="text-uppercase mb-0">
                                        Get up to {slide.discount}
                                   </h3>
                                   <h4 className="m-b-4">{slide.saleTitle}</h4>
                                   <h5 className="text-uppercase">
                                        Starting at
                                        <span className="coupon-sale-text">
                                             <sup>$</sup> {slide.price}
                                        </span>
                                   </h5>
                                   <Link
                                        href={slide.link}
                                        className="btn btn-dark btn-xl"
                                        role="button"
                                   >
                                        Shop Now
                                   </Link>
                              </div>
                              {/* End .banner-layer */}
                         </div>
                    );
               })}
          </Slider>
     );
};
export default Banner;
